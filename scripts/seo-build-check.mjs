#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { hasNoindexRobots } from "../src/utils/seoNoindex.mjs";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const sitemapPath = path.join(DIST, "sitemap-0.xml");
const failures = [];

if (!fs.existsSync(sitemapPath)) {
  failures.push("dist/sitemap-0.xml was not generated");
} else {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  if (sitemap.includes("<loc>https://inaodeng.com/</loc>")) {
    failures.push("noindex root redirect is present in sitemap-0.xml");
  }
  if (sitemap.includes("https://inaodeng.com/en/wiki/")) {
    failures.push("legacy English Wiki redirect URLs are present in sitemap-0.xml");
  }
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const noindexSitemapUrls = sitemapUrls.filter((url) => {
    let parsed;
    try {
      parsed = new URL(url);
      if (parsed.origin !== "https://inaodeng.com") return false;
    } catch {
      return false;
    }
    const pathVariants = [parsed.pathname];
    try {
      pathVariants.push(decodeURIComponent(parsed.pathname));
    } catch {
      // Keep the encoded path when a URL contains an invalid escape sequence.
    }
    for (const pathname of [...new Set(pathVariants)]) {
      const relativePath = pathname.replace(/^\/+/, "");
      const pagePath = path.resolve(
        DIST,
        relativePath,
        pathname.endsWith("/") ? "index.html" : "",
      );
      if (!pagePath.startsWith(`${DIST}${path.sep}`) || !fs.existsSync(pagePath)) {
        continue;
      }
      const html = fs.readFileSync(pagePath, "utf8");
      if (hasNoindexRobots(html)) return true;
    }
    return false;
  });
  if (noindexSitemapUrls.length > 0) {
    failures.push(`sitemap contains ${noindexSitemapUrls.length} noindex page(s)`);
  }
  if (sitemapUrls.some((url) => /\/zh-cn\/wiki\/wiki\//i.test(url))) {
    failures.push("legacy nested Chinese Wiki URLs are present in sitemap-0.xml");
  }
  if (sitemapUrls.some((url) => /\/zh-cn\/wiki\/[^/]+\.md\/?$/i.test(url))) {
    failures.push("legacy Chinese Wiki .md URLs are present in sitemap-0.xml");
  }
  if (sitemapUrls.some((url) => /^https:\/\/inaodeng\.com\/zh-cn\/wiki\/[^/]*[A-Z][^/]*\/$/.test(url))) {
    failures.push("uppercase Chinese Wiki detail URLs are present in sitemap-0.xml");
  }
}

const canonicalABTesting = path.join(DIST, "zh-cn", "wiki", "a-b-testing", "index.html");
if (!fs.existsSync(canonicalABTesting)) {
  failures.push("missing canonical Chinese Wiki page: /zh-cn/wiki/a-b-testing/");
}

const redirectsPath = path.join(DIST, "_redirects");
if (!fs.existsSync(redirectsPath)) {
  failures.push("missing generated _redirects file");
} else {
  const redirects = fs.readFileSync(redirectsPath, "utf8");
  if (!redirects.split(/\r?\n/).some((line) => line.trim() === "/zh-cn/wiki/A-B-Testing/ /zh-cn/wiki/a-b-testing/ 301")) {
    failures.push("missing lowercase redirect for /zh-cn/wiki/A-B-Testing/");
  }
}

for (const slug of ["software-testing", "decision-table-testing", "test-case"]) {
  const file = path.join(DIST, "en", "wiki", slug, "index.html");
  if (!fs.existsSync(file)) {
    failures.push(`missing generated English Wiki redirect: /en/wiki/${slug}/`);
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  if (!html.includes("https://ray.run/wiki")) {
    failures.push(`English Wiki route does not redirect to ray.run: /en/wiki/${slug}/`);
  }
}

const englishWikiIndex = path.join(DIST, "en", "wiki", "index.html");
if (!fs.existsSync(englishWikiIndex)) {
  failures.push("missing generated English Wiki index: /en/wiki/");
} else {
  const englishWikiIndexHtml = fs.readFileSync(englishWikiIndex, "utf8");
  if (!englishWikiIndexHtml.includes('content="noindex, follow"')) {
    failures.push("English Wiki index is not noindex");
  }
  if (!englishWikiIndexHtml.includes("https://ray.run/wiki")) {
    failures.push("English Wiki index is missing the ray.run/wiki link");
  }
}

const legacyRss = path.join(DIST, "index.xml");
if (!fs.existsSync(legacyRss)) {
  failures.push("missing legacy /index.xml redirect endpoint");
}

for (const locale of ["en", "zh-cn"]) {
  const sitemapPage = path.join(DIST, locale, "sitemap", "index.html");
  if (!fs.existsSync(sitemapPage)) {
    failures.push(`missing ${locale} human sitemap page`);
  } else if (!fs.readFileSync(sitemapPage, "utf8").includes('content="noindex, follow"')) {
    failures.push(`${locale} human sitemap page is not noindex`);
  }
}

for (const file of fs.readdirSync(path.join(DIST, "en", "qaskills"), { withFileTypes: true })) {
  if (!file.isDirectory()) continue;
  const page = path.join(DIST, "en", "qaskills", file.name, "index.html");
  if (!fs.existsSync(page)) continue;
  const html = fs.readFileSync(page, "utf8");
  const match = html.match(/<meta name="description" content="([^"]*)"/);
  if (!match || match[1].trim().length < 40) {
    failures.push(`English QA Skill has an insufficient description: /en/qaskills/${file.name}/`);
  }
}

if (failures.length > 0) {
  console.error("SEO build check failed");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("SEO build check passed");
