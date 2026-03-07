import fs from "node:fs";
import path from "node:path";
import { chromium } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:4321";
const stamp = new Date().toISOString().slice(0, 10);
const outDir = path.resolve(process.cwd(), `explore/Temporary/seo/visual-regression-${stamp}`);
fs.mkdirSync(outDir, { recursive: true });

const routes = [
  "/en/",
  "/zh-cn/",
  "/en/blog/",
  "/zh-cn/blog/",
  "/zh-cn/wiki/",
  "/zh-cn/AIWiki/",
  "/en/guild/",
  "/zh-cn/guild/",
  "/zh-cn/wiki/acceptance-testing/",
  "/zh-cn/blog/ai-testing/introduction_of_awesome_qa_prompt/",
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

const rows = [];

for (const route of routes) {
  const url = `${baseURL.replace(/\/$/, "")}${route}`;
  await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });

  const checks = await page.evaluate(() => {
    const viewportWidth = window.innerWidth;
    const bodyWidth = document.documentElement.scrollWidth;
    const noHorizontalOverflow = bodyWidth <= viewportWidth + 2;
    const headerVisible = !!document.querySelector("header");
    const mainVisible = !!document.querySelector("main");
    const footerVisible = !!document.querySelector("footer");
    return { noHorizontalOverflow, headerVisible, mainVisible, footerVisible };
  });

  const fileName = route
    .replace(/^\//, "")
    .replace(/\/$/, "")
    .replaceAll("/", "__")
    .replace(/[^a-zA-Z0-9_\-]/g, "_") || "home";
  const screenshotPath = path.join(outDir, `${fileName}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  rows.push({
    route,
    screenshot: path.relative(process.cwd(), screenshotPath).replaceAll("\\", "/"),
    ...checks,
  });
}

await browser.close();

const passCount = rows.filter((r) => r.noHorizontalOverflow && r.headerVisible && r.mainVisible && r.footerVisible).length;
const md = [
  `# UI Redesign v2 - Visual Regression Sampling (${stamp})`,
  "",
  `- Scope: T5.4 双语页面抽样视觉回归（10 页）`,
  `- Viewport: 1440x900`,
  `- Base URL: ${baseURL}`,
  `- Pass/Total: **${passCount}/${rows.length}**`,
  "",
  "## Sampling Result",
  "",
  "| Route | Overflow | Header | Main | Footer | Screenshot |",
  "|---|---|---|---|---|---|",
  ...rows.map((r) =>
    `| ${r.route} | ${r.noHorizontalOverflow ? "OK" : "FAIL"} | ${r.headerVisible ? "OK" : "FAIL"} | ${r.mainVisible ? "OK" : "FAIL"} | ${r.footerVisible ? "OK" : "FAIL"} | ${r.screenshot} |`
  ),
  "",
  "## Notes",
  "",
  "- This sampling is a pragmatic visual regression pass for layout integrity and key-region visibility.",
  "- For pixel-diff strictness, baseline snapshots can be added in a follow-up phase.",
  "",
];

fs.writeFileSync(path.join(outDir, "report.md"), md.join("\n"));
console.log(`Visual sampling complete: ${outDir}`);
