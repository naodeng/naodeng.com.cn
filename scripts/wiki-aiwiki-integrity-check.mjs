#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

let GithubSlugger;
try {
  const mod = await import("github-slugger");
  GithubSlugger = mod.default;
} catch {
  GithubSlugger = null;
}

const ROOT = process.cwd();
const STRICT = process.argv.includes("--strict");

const WIKI_DIR = path.join(ROOT, "src/content/wiki");
const AIWIKI_DIR = path.join(ROOT, "src/content/aiwiki");
const OUT_DIR = path.join(ROOT, "explore/Temporary/issue");
const OUT_JSON = path.join(OUT_DIR, "wiki-aiwiki-integrity-report.json");
const OUT_MD = path.join(OUT_DIR, "wiki-aiwiki-integrity-report.md");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

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

function repoPath(abs) {
  return path.relative(ROOT, abs).replace(/\\/g, "/");
}

function parseFrontmatter(raw) {
  if (!raw.startsWith("---\n")) return { data: {}, body: raw };
  const end = raw.indexOf("\n---\n", 4);
  if (end < 0) return { data: {}, body: raw };
  const fm = raw.slice(4, end);
  const body = raw.slice(end + 5);
  const data = {};
  const lines = fm.split("\n");

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2].trim();

    if (val === "") {
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

    if (val.startsWith("[") && val.endsWith("]")) {
      data[key] = val
        .slice(1, -1)
        .split(",")
        .map((x) => x.trim().replace(/^['"]|['"]$/g, ""))
        .filter(Boolean);
      continue;
    }

    data[key] = val.replace(/^['"]|['"]$/g, "");
  }
  return { data, body };
}

function collectLinks(body) {
  const links = [];
  const re = /\[[^\]]*?\]\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(body))) {
    links.push(m[1].trim());
  }
  return links;
}

function collectHeadings(body) {
  const out = [];
  const lines = body.split(/\r?\n/);
  let inFence = false;
  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = line.match(/^(#{1,4})\s+(.+?)\s*$/);
    if (!m) continue;
    out.push({ level: m[1].length, text: m[2].trim() });
  }
  return out;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\u4e00-\u9fa5\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function buildHeadingAnchors(headings) {
  if (GithubSlugger) {
    const slugger = new GithubSlugger();
    return new Set(headings.map((h) => slugger.slug(h.text)));
  }
  return new Set(headings.map((h) => slugify(h.text)));
}

function extractTocAnchors(body) {
  const start = body.indexOf("<!-- TOC START -->");
  const end = body.indexOf("<!-- TOC END -->");
  if (start < 0 || end < start) return null;
  const block = body.slice(start, end);
  const anchors = [];
  const re = /\]\(#([^)]+)\)/g;
  let m;
  while ((m = re.exec(block))) anchors.push(m[1].trim());
  return anchors;
}

const wikiFiles = walk(WIKI_DIR, [".md"]);
const aiwikiFiles = walk(AIWIKI_DIR, [".md"]);

const wikiSlugs = new Set(wikiFiles.map((f) => path.basename(f, ".md")));
const aiwikiSlugs = { en: new Set(), "zh-cn": new Set() };
const aiwikiMeta = [];

for (const file of aiwikiFiles) {
  const rel = repoPath(file);
  const raw = fs.readFileSync(file, "utf8");
  const { data } = parseFrontmatter(raw);
  const folderLang = rel.includes("/zh-cn/") ? "zh-cn" : "en";
  const slugByFile = path.basename(file, ".md");
  const lang = data.lang || folderLang;
  const slug = data.slug || slugByFile;
  if (!aiwikiSlugs[lang]) aiwikiSlugs[lang] = new Set();
  aiwikiSlugs[lang].add(slug);
  aiwikiMeta.push({ file, rel, folderLang, lang, slugByFile, slug, data });
}

const issues = [];
function pushIssue(type, file, detail, severity = "error") {
  issues.push({ type, file: repoPath(file), detail, severity });
}

// 1) wiki checks
const wikiTitleMap = new Map();
for (const file of wikiFiles) {
  const raw = fs.readFileSync(file, "utf8");
  const { data, body } = parseFrontmatter(raw);
  const rel = repoPath(file);
  const slug = path.basename(file, ".md");

  if (!data.title) pushIssue("missing_title", file, "frontmatter 缺少 title");
  if (!data.description) pushIssue("missing_description", file, "frontmatter 缺少 description", "warn");
  if (data.related && !Array.isArray(data.related)) {
    pushIssue("invalid_related", file, "related 不是数组");
  }

  if (data.title) {
    const arr = wikiTitleMap.get(data.title) || [];
    arr.push(rel);
    wikiTitleMap.set(data.title, arr);
  }

  const headings = collectHeadings(body);
  const h1 = headings.find((h) => h.level === 1);
  if (!h1) pushIssue("missing_h1", file, "正文缺少 H1");
  if (h1 && data.title && String(data.title).trim() !== h1.text.trim()) {
    pushIssue("title_h1_mismatch", file, `frontmatter title 与 H1 不一致: "${data.title}" vs "${h1.text}"`, "warn");
  }

  const tocAnchors = extractTocAnchors(body);
  if (!tocAnchors) {
    pushIssue("missing_toc", file, "缺少 TOC 区块", "warn");
  } else {
    const headingAnchors = buildHeadingAnchors(headings);
    for (const anchor of tocAnchors) {
      if (!headingAnchors.has(anchor)) {
        pushIssue("toc_anchor_missing_heading", file, `TOC 锚点找不到标题: #${anchor}`, "warn");
      }
    }
  }

  for (const link of collectLinks(body)) {
    if (/^https?:\/\//i.test(link) || link.startsWith("#") || link.startsWith("mailto:")) continue;
    const wikiMatch = link.match(/^\/(?:zh-cn|en)\/wiki\/([^/#?]+)\/?$/i);
    if (wikiMatch && !wikiSlugs.has(wikiMatch[1])) {
      pushIssue("broken_wiki_link", file, `无效 wiki 链接: ${link}`);
    }
    const aiMatch = link.match(/^\/(zh-cn|en)\/AIWiki\/([^/#?]+)\/?$/);
    if (aiMatch) {
      const lang = aiMatch[1];
      const slugTarget = aiMatch[2];
      if (!aiwikiSlugs[lang] || !aiwikiSlugs[lang].has(slugTarget)) {
        pushIssue("broken_aiwiki_link", file, `无效 AIWiki 链接: ${link}`);
      }
    }
  }

  if (Array.isArray(data.related)) {
    for (const r of data.related) {
      const ref = String(r).trim();
      if (!ref) continue;
      if (ref.toLowerCase() === slug.toLowerCase()) {
        pushIssue("related_self_ref", file, `related 包含自身: ${ref}`, "warn");
        continue;
      }
      if (!wikiSlugs.has(ref)) pushIssue("related_unknown_slug", file, `related 指向不存在词条: ${ref}`);
    }
  }
}

// 2) aiwiki checks
const aiwikiTitleMap = { en: new Map(), "zh-cn": new Map() };
const aiwikiSlugLangMap = { en: new Map(), "zh-cn": new Map() };
for (const meta of aiwikiMeta) {
  const { file, rel, folderLang, lang, slugByFile, slug, data } = meta;
  const raw = fs.readFileSync(file, "utf8");
  const { body } = parseFrontmatter(raw);

  if (!["en", "zh-cn"].includes(lang)) pushIssue("invalid_lang", file, `lang 无效: ${lang}`);
  if (data.lang && data.lang !== folderLang) {
    pushIssue("lang_folder_mismatch", file, `frontmatter lang=${data.lang} 与目录语言=${folderLang} 不一致`);
  }
  if (data.slug && data.slug !== slugByFile) {
    pushIssue("slug_filename_mismatch", file, `frontmatter slug=${data.slug} 与文件名=${slugByFile} 不一致`, "warn");
  }

  const title = data.title || data.titleZh || data.titleEn || "";
  if (!title) pushIssue("missing_title", file, "frontmatter 缺少 title/titleZh/titleEn");
  if (!data.summary && !data.description) {
    pushIssue("missing_summary_description", file, "frontmatter 缺少 summary/description", "warn");
  }

  const arr = aiwikiTitleMap[folderLang].get(title) || [];
  if (title) {
    arr.push(rel);
    aiwikiTitleMap[folderLang].set(title, arr);
  }

  const slugArr = aiwikiSlugLangMap[folderLang].get(slug) || [];
  slugArr.push(rel);
  aiwikiSlugLangMap[folderLang].set(slug, slugArr);

  const headings = collectHeadings(body);
  const h1 = headings.find((h) => h.level === 1);
  if (!h1) pushIssue("missing_h1", file, "正文缺少 H1");

  const tocAnchors = extractTocAnchors(body);
  if (tocAnchors) {
    const headingAnchors = buildHeadingAnchors(headings);
    for (const anchor of tocAnchors) {
      if (!headingAnchors.has(anchor)) {
        pushIssue("toc_anchor_missing_heading", file, `TOC 锚点找不到标题: #${anchor}`, "warn");
      }
    }
  }

  for (const link of collectLinks(body)) {
    if (/^https?:\/\//i.test(link) || link.startsWith("#") || link.startsWith("mailto:")) continue;
    const wikiMatch = link.match(/^\/(?:zh-cn|en)\/wiki\/([^/#?]+)\/?$/i);
    if (wikiMatch && !wikiSlugs.has(wikiMatch[1])) {
      pushIssue("broken_wiki_link", file, `无效 wiki 链接: ${link}`);
    }
    const aiMatch = link.match(/^\/(zh-cn|en)\/AIWiki\/([^/#?]+)\/?$/);
    if (aiMatch) {
      const targetLang = aiMatch[1];
      const targetSlug = aiMatch[2];
      if (!aiwikiSlugs[targetLang] || !aiwikiSlugs[targetLang].has(targetSlug)) {
        pushIssue("broken_aiwiki_link", file, `无效 AIWiki 链接: ${link}`);
      }
    }
  }
}

for (const [title, files] of wikiTitleMap.entries()) {
  if (files.length > 1) {
    issues.push({
      type: "duplicate_wiki_title",
      file: files[0],
      detail: `重复 title: "${title}" -> ${files.join(", ")}`,
      severity: "warn",
    });
  }
}

for (const lang of ["en", "zh-cn"]) {
  for (const [title, files] of aiwikiTitleMap[lang].entries()) {
    if (title && files.length > 1) {
      issues.push({
        type: "duplicate_aiwiki_title",
        file: files[0],
        detail: `(${lang}) 重复 title: "${title}" -> ${files.join(", ")}`,
        severity: "warn",
      });
    }
  }
  for (const [slug, files] of aiwikiSlugLangMap[lang].entries()) {
    if (files.length > 1) {
      issues.push({
        type: "duplicate_aiwiki_slug",
        file: files[0],
        detail: `(${lang}) 重复 slug: "${slug}" -> ${files.join(", ")}`,
        severity: "error",
      });
    }
  }
}

const summary = {
  scannedAt: new Date().toISOString(),
  totals: {
    wikiFiles: wikiFiles.length,
    aiwikiFiles: aiwikiFiles.length,
    totalIssues: issues.length,
    errorCount: issues.filter((x) => x.severity === "error").length,
    warnCount: issues.filter((x) => x.severity === "warn").length,
  },
  issues,
};

ensureDir(OUT_DIR);
fs.writeFileSync(OUT_JSON, JSON.stringify(summary, null, 2));

const topIssues = issues.slice(0, 80).map((x) => `- [${x.severity}] ${x.type} | ${x.file} | ${x.detail}`).join("\n");
const md = `# Wiki/AIWiki Integrity Report

- Scanned at: ${summary.scannedAt}
- wiki files: ${summary.totals.wikiFiles}
- aiwiki files: ${summary.totals.aiwikiFiles}
- total issues: ${summary.totals.totalIssues}
- errors: ${summary.totals.errorCount}
- warnings: ${summary.totals.warnCount}

## Sample Issues (up to 80)

${topIssues || "- no issues"}
`;
fs.writeFileSync(OUT_MD, md);

console.log("Wiki/AIWiki integrity check summary");
console.log(JSON.stringify(summary.totals, null, 2));
console.log(`Report JSON: ${repoPath(OUT_JSON)}`);
console.log(`Report MD:   ${repoPath(OUT_MD)}`);

if (STRICT && summary.totals.errorCount > 0) {
  console.error(`STRICT mode failed: errorCount=${summary.totals.errorCount}`);
  process.exit(1);
}
