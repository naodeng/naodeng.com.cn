#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { hasNoindexRobots } from "../src/utils/seoNoindex.mjs";
import { checkSeoIntegrity } from "./seo-integrity-utils.mjs";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const META_DESCRIPTION_REVIEW_LENGTH = 70;
const GENERIC_META_DESCRIPTION_MARKERS = [
  "本文介绍相关概念、适用场景、实践步骤、输入输出与常见注意事项",
  "Learn the key concepts, use cases, practical guidance, and quality considerations",
];
const sitemapPath = path.join(DIST, "sitemap-0.xml");
const WIKI_DIR = path.join(ROOT, "src", "content", "wiki");
const failures = [];

function walkHtmlFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkHtmlFiles(file));
    else if (entry.isFile() && entry.name === "index.html") files.push(file);
  }
  return files;
}

function markdownSlugs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name.slice(0, -3).toLowerCase())
    .sort();
}

function readCanonical(html) {
  return html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] ?? null;
}

function readAlternates(html) {
  return [...html.matchAll(/<link\b[^>]*rel="alternate"[^>]*>/gi)].map((match) => {
    const tag = match[0];
    return {
      lang: tag.match(/\bhreflang="([^"]+)"/i)?.[1] ?? "",
      href: tag.match(/\bhref="([^"]+)"/i)?.[1] ?? "",
    };
  });
}

function readPageHeading(html) {
  const rawHeading = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  if (!rawHeading) return null;
  return rawHeading
    .replace(/<[^>]*>/g, "")
    .replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi, (entity, value) => {
      if (value.startsWith("#")) {
        const codePoint = value[1]?.toLowerCase() === "x"
          ? Number.parseInt(value.slice(2), 16)
          : Number.parseInt(value.slice(1), 10);
        return Number.isInteger(codePoint) && codePoint >= 0 && codePoint <= 0x10ffff
          ? String.fromCodePoint(codePoint)
          : entity;
      }
      return ({ amp: "&", lt: "<", gt: ">", quot: "\"", apos: "'", nbsp: " " })[value.toLowerCase()] ?? entity;
    })
    .replace(/\s+/g, " ")
    .trim();
}

function readJsonLd(html) {
  const schemas = [];
  for (const match of html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try {
      schemas.push(JSON.parse(match[1]));
    } catch {
      failures.push("Wiki page contains malformed JSON-LD");
    }
  }
  return schemas;
}

let sitemapUrls = [];
if (!fs.existsSync(sitemapPath)) {
  failures.push("dist/sitemap-0.xml was not generated");
} else {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  if (sitemap.includes("<loc>https://inaodeng.com/</loc>")) {
    failures.push("noindex root redirect is present in sitemap-0.xml");
  }
  sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
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
      if (!pagePath.startsWith(`${DIST}${path.sep}`) || !fs.existsSync(pagePath)) continue;
      if (hasNoindexRobots(fs.readFileSync(pagePath, "utf8"))) return true;
    }
    return false;
  });
  if (noindexSitemapUrls.length > 0) failures.push(`sitemap contains ${noindexSitemapUrls.length} noindex page(s)`);
  if (sitemapUrls.some((url) => /\/(?:en|zh-cn)\/wiki\/wiki\//i.test(url))) {
    failures.push("legacy nested Wiki URLs are present in sitemap-0.xml");
  }
  if (sitemapUrls.some((url) => /\/(?:en|zh-cn)\/wiki\/[^/]+\.md\/?$/i.test(url))) {
    failures.push("legacy Wiki .md URLs are present in sitemap-0.xml");
  }
  if (sitemapUrls.some((url) => /^https:\/\/inaodeng\.com\/(?:en|zh-cn)\/wiki\/[^/]*[A-Z][^/]*\/$/.test(url))) {
    failures.push("uppercase Wiki detail URLs are present in sitemap-0.xml");
  }
}

const zhWikiSlugs = markdownSlugs(WIKI_DIR);
const enWikiSlugs = markdownSlugs(path.join(WIKI_DIR, "en"));
const zhSlugSet = new Set(zhWikiSlugs);
const enSlugSet = new Set(enWikiSlugs);
if (zhWikiSlugs.length !== enWikiSlugs.length) {
  failures.push(`Wiki content count mismatch: got ${zhWikiSlugs.length} zh-cn and ${enWikiSlugs.length} en pages`);
}
if (zhWikiSlugs.some((slug) => !enSlugSet.has(slug)) || enWikiSlugs.some((slug) => !zhSlugSet.has(slug))) {
  failures.push("English and Chinese Wiki slug sets do not match");
}

const canonicalABTesting = path.join(DIST, "zh-cn", "wiki", "a-b-testing", "index.html");
if (!fs.existsSync(canonicalABTesting)) failures.push("missing canonical Chinese Wiki page: /zh-cn/wiki/a-b-testing/");

const redirectsPath = path.join(DIST, "_redirects");
if (!fs.existsSync(redirectsPath)) {
  failures.push("missing generated _redirects file");
} else {
  const redirects = fs.readFileSync(redirectsPath, "utf8");
  if (redirects.split(/\r?\n/).some((line) => /^\/(?:en|zh-cn)\/wiki\//.test(line.trim()))) {
    failures.push("legacy Wiki redirects must not be published");
  }
}

for (const locale of ["en", "zh-cn"]) {
  const wikiBuildDir = path.join(DIST, locale, "wiki");
  if (fs.existsSync(wikiBuildDir)) {
    const entries = fs.readdirSync(wikiBuildDir, { withFileTypes: true });
    if (entries.some((entry) => entry.isDirectory() && entry.name === "wiki")) {
      failures.push(`legacy nested Wiki routes must not be generated: /${locale}/wiki/wiki/`);
    }
    if (entries.some((entry) => entry.isDirectory() && entry.name.toLowerCase().endsWith(".md"))) {
      failures.push(`legacy Markdown filename Wiki routes must not be generated for ${locale}`);
    }
    if (entries.some((entry) => entry.isDirectory() && entry.name !== entry.name.toLowerCase())) {
      failures.push(`noncanonical uppercase Wiki routes must not be generated for ${locale}`);
    }
  }
}

function checkWikiPage(locale, slug) {
  const pathname = `/${locale}/wiki/${slug}/`;
  const file = path.join(DIST, locale, "wiki", slug, "index.html");
  if (!fs.existsSync(file)) {
    failures.push(`missing generated Wiki page: ${pathname}`);
    return;
  }
  const html = fs.readFileSync(file, "utf8");
  if (hasNoindexRobots(html)) failures.push(`Wiki page is marked noindex: ${pathname}`);
  if (readCanonical(html) !== `https://inaodeng.com${pathname}`) failures.push(`Wiki page has a non-self canonical: ${pathname}`);
  const alternates = readAlternates(html);
  const expectedEn = `https://inaodeng.com/en/wiki/${slug}/`;
  const expectedZh = `https://inaodeng.com/zh-cn/wiki/${slug}/`;
  if (!alternates.some((item) => item.href === expectedEn)) failures.push(`Wiki page is missing its English language alternate: ${pathname}`);
  if (!alternates.some((item) => item.href === expectedZh)) failures.push(`Wiki page is missing its Chinese language alternate: ${pathname}`);
  if (!sitemapUrls.includes(`https://inaodeng.com${pathname}`)) failures.push(`Wiki page is missing from the sitemap: ${pathname}`);
  if (locale === "en") {
    const schemas = readJsonLd(html);
    const term = schemas.find((schema) => schema?.["@type"] === "DefinedTerm");
    const pageHeading = readPageHeading(html);
    if (!term?.name || term.inDefinedTermSet?.name !== "QA Wiki") {
      failures.push(`English DefinedTerm JSON-LD is missing English Wiki names: ${pathname}`);
    }
    if (!pageHeading || term?.name !== pageHeading) {
      failures.push(`English DefinedTerm name does not match the page heading: ${pathname}`);
    }
  }
}

for (const slug of zhWikiSlugs) checkWikiPage("zh-cn", slug);
for (const slug of enWikiSlugs) checkWikiPage("en", slug);

const englishWikiIndex = path.join(DIST, "en", "wiki", "index.html");
if (!fs.existsSync(englishWikiIndex)) {
  failures.push("missing generated English Wiki index: /en/wiki/");
} else {
  const html = fs.readFileSync(englishWikiIndex, "utf8");
  const indexUrl = "https://inaodeng.com/en/wiki/";
  if (hasNoindexRobots(html)) failures.push("English Wiki index is marked noindex");
  if (readCanonical(html) !== indexUrl) failures.push("English Wiki index does not use its own canonical");
  const alternates = readAlternates(html);
  if (!alternates.some((item) => item.href === indexUrl)) failures.push("English Wiki index is missing its English language alternate");
  if (!alternates.some((item) => item.href === "https://inaodeng.com/zh-cn/wiki/")) failures.push("English Wiki index is missing its Chinese language alternate");
  if (!sitemapUrls.includes(indexUrl)) failures.push("English Wiki index is missing from the sitemap");
  const schema = readJsonLd(html).find((item) => item?.["@type"] === "DefinedTermSet");
  if (!schema || schema.name !== "QA Wiki") failures.push("English Wiki index has incorrect DefinedTermSet JSON-LD");
  const visibleLinks = html.match(/class="wiki-letter-link"/g) ?? [];
  if (visibleLinks.length !== enWikiSlugs.length) failures.push(`English Wiki index should list ${enWikiSlugs.length} terms; found ${visibleLinks.length}`);
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

const shortMetaDescriptions = [];
const metaDescriptionOwners = new Map();
for (const file of walkHtmlFiles(DIST)) {
  const html = fs.readFileSync(file, "utf8");
  if (hasNoindexRobots(html)) continue;
  const match = html.match(/<meta name="description" content="([^"]*)"/i);
  const relative = `/${path.relative(DIST, file).replace(/\\/g, "/").replace(/\/index\.html$/, "")}`;
  if (!match) {
    failures.push(`indexable page has no meta description: ${relative}`);
    continue;
  }
  const description = match[1].trim();
  if (!description) {
    failures.push(`indexable page has an empty meta description: ${relative}`);
    continue;
  }
  if (description.length < META_DESCRIPTION_REVIEW_LENGTH) shortMetaDescriptions.push(relative);

  const normalizedDescription = description.replace(/\s+/g, " ").toLowerCase();
  const previousOwner = metaDescriptionOwners.get(normalizedDescription);
  if (previousOwner) failures.push(`duplicate meta description: ${previousOwner} and ${relative}`);
  else metaDescriptionOwners.set(normalizedDescription, relative);

  if (GENERIC_META_DESCRIPTION_MARKERS.some(marker => description.includes(marker))) {
    failures.push(`indexable page uses a generic meta description: ${relative}`);
  }
}

for (const relative of [
  "en/blog/api-automation-testing/bruno-tutorial-building-your-own-project-from-0-to-1/index.html",
  "en/guild/api-testing/bruno/building-project/index.html",
  "en/guild/performance-testing/k6/ci-cd-integration/index.html",
]) {
  const file = path.join(DIST, relative);
  if (!fs.existsSync(file)) {
    failures.push(`missing Bing audit page: /${relative.replace(/\/index\.html$/, "")}`);
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || "";
  if (title.length > 70) failures.push(`Bing audit page has a long title: /${relative.replace(/\/index\.html$/, "")}`);
  const missingAlt = [...html.matchAll(/<img\b[^>]*>/gi)].filter((match) => !/\balt\s*=\s*["'][^"']*["']/i.test(match[0]));
  if (missingAlt.length > 0) failures.push(`Bing audit page has ${missingAlt.length} image(s) without alt: /${relative.replace(/\/index\.html$/, "")}`);
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

const integrity = checkSeoIntegrity(DIST);
failures.push(...integrity.failures);

if (failures.length > 0) {
  console.error("SEO build check failed");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("SEO build check passed");
console.log(`SEO coverage: ${JSON.stringify(integrity.counts)}`);
if (shortMetaDescriptions.length > 0) {
  console.log(`Meta description review: ${shortMetaDescriptions.length} indexable page(s) are under ${META_DESCRIPTION_REVIEW_LENGTH} characters; review relevance manually, since length alone is not a build failure.`);
}
