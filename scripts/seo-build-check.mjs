#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

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
