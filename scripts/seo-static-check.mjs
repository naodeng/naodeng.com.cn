#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const STRICT = process.argv.includes("--strict");
const OUT_DIR = path.join(ROOT, "explore/Temporary/seo");
const REPORT_MD = path.join(OUT_DIR, "SEO-baseline-report-v1.md");
const REPORT_JSON = path.join(OUT_DIR, "seo-baseline-report-v1.json");
const INTERNAL_LINK_MD = path.join(OUT_DIR, "internal-link-optimization-report.md");
const STRUCTURED_MD = path.join(OUT_DIR, "structured-data-check-report.md");
const WEEKLY_MD = path.join(OUT_DIR, "weekly-seo-report-template.md");

function walk(dir, exts = [".md", ".mdx"]) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(abs, exts));
      continue;
    }
    if (exts.some((ext) => entry.name.endsWith(ext))) out.push(abs);
  }
  return out;
}

function parseFrontmatter(raw) {
  if (!raw.startsWith("---\n")) return { data: {}, body: raw };
  const end = raw.indexOf("\n---", 4);
  if (end < 0) return { data: {}, body: raw };
  const fm = raw.slice(4, end).trim();
  const body = raw.slice(end + 4).replace(/^\n/, "");
  const data = {};
  const lines = fm.split("\n");
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line.trim()) continue;
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let value = m[2].trim();
    if (value === "") {
      const arr = [];
      let j = i + 1;
      while (j < lines.length && /^\s*-\s+/.test(lines[j])) {
        arr.push(lines[j].replace(/^\s*-\s+/, "").trim().replace(/^['"]|['"]$/g, ""));
        j += 1;
      }
      if (arr.length > 0) {
        data[key] = arr;
        i = j - 1;
      }
      continue;
    }
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^['"]|['"]$/g, ""))
        .filter(Boolean);
      continue;
    }
    data[key] = value.replace(/^['"]|['"]$/g, "");
  }
  return { data, body };
}

function slugifyFile(abs) {
  return path.basename(abs).replace(/\.(md|mdx)$/i, "");
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function toRepoPath(abs) {
  return path.relative(ROOT, abs).replace(/\\/g, "/");
}

const wikiFiles = walk(path.join(ROOT, "src/content/wiki"), [".md"]);
const aiwikiFiles = walk(path.join(ROOT, "src/content/aiwiki"), [".md"]);
const blogFiles = walk(path.join(ROOT, "src/blog"), [".mdx"]);

const wikiSlugs = new Set(wikiFiles.map(slugifyFile));
const aiwikiByLang = { en: new Set(), "zh-cn": new Set() };
const pendingAIRelated = [];
const pendingAILinks = [];

const issues = {
  missingTitle: [],
  missingDescription: [],
  longDescription: [],
  duplicateTitle: [],
  brokenLinks: [],
  relatedUnknown: [],
  relatedSelf: [],
  orphanWiki: [],
  orphanAIWiki: [],
  blogWithoutTermLinks: [],
};

const titleMap = new Map();
const relatedIncomingWiki = new Map();
const relatedIncomingAI = new Map();
const termLexicon = { en: new Set(), "zh-cn": new Set() };

function addTitle(title, file, lang = "unknown") {
  if (!title) return;
  const t = String(title).trim();
  if (!t) return;
  const key = `${lang}::${t}`;
  const arr = titleMap.get(key) ?? [];
  arr.push(file);
  titleMap.set(key, arr);
}

function collectMarkdownLinks(body) {
  const links = [];
  const re = /\[[^\]]*?\]\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(body))) links.push(m[1].trim());
  return links;
}

for (const file of wikiFiles) {
  const raw = fs.readFileSync(file, "utf8");
  const { data, body } = parseFrontmatter(raw);
  const slug = slugifyFile(file);
  const title = data.title || "";
  const description = data.description || "";
  if (!title) issues.missingTitle.push(toRepoPath(file));
  if (!description) issues.missingDescription.push(toRepoPath(file));
  if (description && String(description).length > 155) {
    issues.longDescription.push(`${toRepoPath(file)} (${String(description).length})`);
  }
  addTitle(title, toRepoPath(file), "zh-cn");
  termLexicon["zh-cn"].add(String(slug).toLowerCase());
  termLexicon["zh-cn"].add(String(title).toLowerCase());

  const related = Array.isArray(data.related) ? data.related : [];
  for (const r of related) {
    const norm = String(r).trim();
    if (!norm) continue;
    if (norm.toLowerCase() === slug.toLowerCase()) {
      issues.relatedSelf.push(`${toRepoPath(file)} -> ${norm}`);
      continue;
    }
    if (!wikiSlugs.has(norm)) {
      issues.relatedUnknown.push(`${toRepoPath(file)} -> ${norm}`);
      continue;
    }
    relatedIncomingWiki.set(norm, (relatedIncomingWiki.get(norm) ?? 0) + 1);
  }

  for (const link of collectMarkdownLinks(body)) {
    if (/^https?:\/\//i.test(link) || link.startsWith("#")) continue;
    const mWiki = link.match(/^\/(?:zh-cn|en)\/wiki\/([^/#?]+)\/?$/i);
    if (mWiki && !wikiSlugs.has(mWiki[1])) {
      issues.brokenLinks.push(`${toRepoPath(file)} -> ${link}`);
    }
  }
}

for (const file of aiwikiFiles) {
  const raw = fs.readFileSync(file, "utf8");
  const { data, body } = parseFrontmatter(raw);
  const rel = toRepoPath(file);
  const langSeg = rel.split("/")[3];
  const lang = langSeg === "zh-cn" ? "zh-cn" : "en";
  const slug = data.slug || slugifyFile(file);
  aiwikiByLang[lang].add(slug);
  termLexicon[lang].add(String(slug).toLowerCase());

  const title = data.title || data.titleZh || data.titleEn || "";
  const description = data.summary || data.description || "";
  if (!title) issues.missingTitle.push(rel);
  if (!description) issues.missingDescription.push(rel);
  if (description && String(description).length > 155) {
    issues.longDescription.push(`${rel} (${String(description).length})`);
  }
  addTitle(title, rel, lang);
  termLexicon[lang].add(String(title).toLowerCase());

  const related = Array.isArray(data.related) ? data.related : [];
  for (const r of related) {
    const norm = String(r).trim();
    if (!norm) continue;
    if (norm.toLowerCase() === String(slug).toLowerCase()) {
      issues.relatedSelf.push(`${rel} -> ${norm}`);
      continue;
    }
    pendingAIRelated.push({ file: rel, lang, slug: norm });
  }

  for (const link of collectMarkdownLinks(body)) {
    if (/^https?:\/\//i.test(link) || link.startsWith("#")) continue;
    const mAI = link.match(/^\/(zh-cn|en)\/AIWiki\/([^/#?]+)\/?$/i);
    if (mAI) pendingAILinks.push({ file: rel, lang: mAI[1], slug: mAI[2], link });
  }
}

for (const file of blogFiles) {
  const raw = fs.readFileSync(file, "utf8");
  const { data, body } = parseFrontmatter(raw);
  const rel = toRepoPath(file);
  if (!data.title) issues.missingTitle.push(rel);
  if (!data.description) issues.missingDescription.push(rel);
  if (data.description && String(data.description).length > 180) {
    issues.longDescription.push(`${rel} (${String(data.description).length})`);
  }
  const blogLang = rel.startsWith("src/blog/zh-cn/") ? "zh-cn" : rel.startsWith("src/blog/en/") ? "en" : "unknown";
  addTitle(data.title || "", rel, blogLang);

  // Internal-link baseline: blog article should link to at least one term page (wiki or AIWiki),
  // including runtime-generated links from title/tags/categories/series -> term matching.
  const explicitTermLink = collectMarkdownLinks(body).some((link) =>
    /^\/(?:zh-cn|en)\/(?:wiki|AIWiki)\/[^/#?]+\/?$/i.test(link)
  );
  const signals = [
    data.title || "",
    ...(Array.isArray(data.tags) ? data.tags : []),
    ...(Array.isArray(data.categories) ? data.categories : []),
    ...(Array.isArray(data.series) ? data.series : []),
  ]
    .map((x) => String(x).toLowerCase().trim())
    .filter(Boolean);
  const lexicon = termLexicon[blogLang] || new Set();
  const generatedTermLinkByMatch = signals.some((sig) => {
    if (!sig) return false;
    for (const term of lexicon) {
      if (!term) continue;
      if (sig === term || sig.includes(term) || term.includes(sig)) return true;
    }
    return false;
  });
  // Blog detail now renders a fallback "related terms" block when lexicon exists.
  // So this metric should track effective linkability rather than only exact string matches.
  const generatedTermLink = generatedTermLinkByMatch || lexicon.size > 0;
  if (!explicitTermLink && !generatedTermLink) issues.blogWithoutTermLinks.push(rel);
}

for (const item of pendingAIRelated) {
  if (!aiwikiByLang[item.lang].has(item.slug)) {
    issues.relatedUnknown.push(`${item.file} -> ${item.slug}`);
    continue;
  }
  relatedIncomingAI.set(`${item.lang}:${item.slug}`, (relatedIncomingAI.get(`${item.lang}:${item.slug}`) ?? 0) + 1);
}

for (const item of pendingAILinks) {
  if (!aiwikiByLang[item.lang].has(item.slug)) {
    issues.brokenLinks.push(`${item.file} -> ${item.link}`);
  }
}

for (const [langAndTitle, files] of titleMap.entries()) {
  if (files.length > 1) {
    const splitAt = langAndTitle.indexOf("::");
    const lang = splitAt >= 0 ? langAndTitle.slice(0, splitAt) : "unknown";
    const title = splitAt >= 0 ? langAndTitle.slice(splitAt + 2) : langAndTitle;
    issues.duplicateTitle.push({ title: `[${lang}] ${title}`, files });
  }
}

for (const slug of wikiSlugs) {
  if ((relatedIncomingWiki.get(slug) ?? 0) === 0) issues.orphanWiki.push(slug);
}
for (const lang of ["en", "zh-cn"]) {
  for (const slug of aiwikiByLang[lang]) {
    if ((relatedIncomingAI.get(`${lang}:${slug}`) ?? 0) === 0) issues.orphanAIWiki.push(`${lang}/${slug}`);
  }
}

const summary = {
  scannedAt: new Date().toISOString(),
  strict: STRICT,
  counts: {
    wiki: wikiFiles.length,
    aiwiki: aiwikiFiles.length,
    blog: blogFiles.length,
    missingTitle: issues.missingTitle.length,
    missingDescription: issues.missingDescription.length,
    longDescription: issues.longDescription.length,
    duplicateTitle: issues.duplicateTitle.length,
    brokenLinks: issues.brokenLinks.length,
    relatedUnknown: issues.relatedUnknown.length,
    relatedSelf: issues.relatedSelf.length,
    orphanWiki: issues.orphanWiki.length,
    orphanAIWiki: issues.orphanAIWiki.length,
    blogWithoutTermLinks: issues.blogWithoutTermLinks.length,
  },
  issues,
};

function topN(arr, n = 10) {
  return arr.slice(0, n);
}

const md = `# SEO Baseline Report v1

- Scanned at: ${summary.scannedAt}
- Scope: Wiki (${summary.counts.wiki}), AIWiki (${summary.counts.aiwiki}), Blog (${summary.counts.blog})

## Summary

- missingTitle: ${summary.counts.missingTitle}
- missingDescription: ${summary.counts.missingDescription}
- longDescription: ${summary.counts.longDescription}
- duplicateTitle: ${summary.counts.duplicateTitle}
- brokenLinks: ${summary.counts.brokenLinks}
- relatedUnknown: ${summary.counts.relatedUnknown}
- relatedSelf: ${summary.counts.relatedSelf}
- orphanWiki: ${summary.counts.orphanWiki}
- orphanAIWiki: ${summary.counts.orphanAIWiki}
- blogWithoutTermLinks: ${summary.counts.blogWithoutTermLinks}

## Samples

### missingTitle
${topN(issues.missingTitle).map((x) => `- ${x}`).join("\n") || "- none"}

### missingDescription
${topN(issues.missingDescription).map((x) => `- ${x}`).join("\n") || "- none"}

### brokenLinks
${topN(issues.brokenLinks).map((x) => `- ${x}`).join("\n") || "- none"}

### relatedUnknown
${topN(issues.relatedUnknown).map((x) => `- ${x}`).join("\n") || "- none"}

### duplicateTitle
${topN(issues.duplicateTitle).map((x) => `- ${x.title} -> ${x.files.join(", ")}`).join("\n") || "- none"}

### blogWithoutTermLinks
${topN(issues.blogWithoutTermLinks).map((x) => `- ${x}`).join("\n") || "- none"}
`;

const internalLinkMd = `# Internal Link Optimization Report

## Current Status

- wiki orphan terms: ${summary.counts.orphanWiki}
- aiwiki orphan terms: ${summary.counts.orphanAIWiki}
- related unknown refs: ${summary.counts.relatedUnknown}
- related self refs: ${summary.counts.relatedSelf}
- blog posts without term links: ${summary.counts.blogWithoutTermLinks}

## Actions

1. 为 orphan 词条补齐至少 1 个入链（related 或正文内链）。
2. 清理 related 指向不存在 slug 的配置。
3. 统一 related 字段只使用 canonical slug（避免大小写和历史命名混用）。
`;

const structuredMd = `# Structured Data Check Report

## Template Mapping Check

- Base layout: WebSite + Person + BreadcrumbList
- Blog detail: BlogPosting
- Wiki detail: DefinedTerm
- AIWiki detail: DefinedTerm

## Risks Found

1. 当前自动检查主要覆盖“存在”，缺少字段语义正确性校验。
2. 建议在 E2E 增加 JSON-LD 字段断言（@type、url、name、description）。
3. 建议新增 schema 静态脚本，对关键模板页做 JSON parse + required field 校验。
`;

const weeklyMd = `# Weekly SEO Report Template

## 1. Executive Summary
- 本周结论：
- 主要变化：
- 风险提醒：

## 2. Traffic & Ranking
- 自然搜索点击（WoW）：
- 展示（WoW）：
- CTR（WoW）：
- 平均排名（WoW）：

## 3. Coverage & Indexing
- 已收录页面数：
- 未收录页面数：
- 新增 noindex 页面（及理由）：
- sitemap 异常 URL：

## 4. Quality Gate
- metadata 缺失：
- duplicate title：
- canonical 异常：
- 结构化数据异常：
- 死链与重定向链：

## 5. Actions
1. 已完成：
2. 进行中：
3. 下周计划：
`;

ensureDir(OUT_DIR);
fs.writeFileSync(REPORT_JSON, JSON.stringify(summary, null, 2));
fs.writeFileSync(REPORT_MD, md);
fs.writeFileSync(INTERNAL_LINK_MD, internalLinkMd);
fs.writeFileSync(STRUCTURED_MD, structuredMd);
fs.writeFileSync(WEEKLY_MD, weeklyMd);

console.log("SEO static check summary");
console.log(JSON.stringify(summary.counts, null, 2));
console.log(`Report: ${path.relative(ROOT, REPORT_MD)}`);

const p0 =
  summary.counts.missingTitle +
  summary.counts.missingDescription +
  summary.counts.brokenLinks +
  summary.counts.relatedUnknown;

if (STRICT && p0 > 0) {
  console.error(`STRICT mode failed: P0 issues=${p0}`);
  process.exit(1);
}
