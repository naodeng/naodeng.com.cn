/**
 * Wiki 词条：修复 Markdown 格式、为无 TOC 的文件添加目录
 * - TOC 放在 # 主标题 正下方（"## 目录" 及锚点列表）
 * - 去除文件末尾多余空行（保留至多一个换行）、多处连续空行压成至多一个
 * 运行: node scripts/wiki-toc-and-format.mjs
 */
import fs from "fs";
import path from "path";
let GithubSlugger;
try {
  const mod = await import("github-slugger");
  GithubSlugger = mod.default;
} catch {
  GithubSlugger = null;
}

const WIKI_DIR = path.join(process.cwd(), "src", "content", "wiki");

function parseFrontmatterAndBody(content) {
  const delim = "---";
  if (content.indexOf(delim) !== 0) return { frontmatter: null, body: content };
  const second = content.indexOf(delim, delim.length);
  if (second === -1) return { frontmatter: null, body: content };
  const frontmatterRaw = content.slice(delim.length, second).trim();
  const body = content.slice(second + delim.length).trimStart();
  return { frontmatterRaw, body, frontmatterBlock: content.slice(0, second + delim.length) };
}

/** 从正文中收集 #### 标题（仅统计在 ## 关于...的问题？ 之后的） */
function collectH4Headings(body) {
  const lines = body.split("\n");
  const headings = [];
  let pastAbout = false;
  for (const line of lines) {
    const t = line.trim();
    if (/^## 关于.+的问题[?？]\s*$/.test(t)) {
      pastAbout = true;
      continue;
    }
    if (!pastAbout) continue;
    const m = t.match(/^(####)\s+(.+)$/);
    if (m) headings.push(m[2].trim());
  }
  return headings;
}

/** 判断正文是否已在 # 主标题 下存在目录（## 目录 紧跟 H1 后） */
function hasTocAfterH1(body) {
  const m = body.match(/^# .+\n\n## 目录\s*$/m);
  return !!m;
}

/** 移除正文中已有的 "## 目录" 块（无论位置），便于迁移到 H1 下 */
function removeExistingToc(body) {
  const re = /(\n|^)## 目录\s*\n\n(- \[.+\]\(#.+\)\s*\n)+/g;
  return body.replace(re, (match, prefix) => (prefix === "\n" ? "\n" : ""));
}

/** 生成目录 Markdown（使用 github-slugger 与 rehype-slug 一致） */
function buildToc(headings) {
  if (headings.length === 0) return "";
  const slugger = GithubSlugger ? new GithubSlugger() : null;
  const items = headings.map((text) => {
    const anchor = slugger ? slugger.slug(text) : text.replace(/\s+/g, "-");
    return `- [${text}](#${anchor})`;
  });
  return "## 目录\n\n" + items.join("\n") + "\n";
}

/** 在 # 主标题 正下方插入 TOC */
function insertTocAfterH1(body, tocBlock) {
  const h1Re = /^# .+$/m;
  const match = body.match(h1Re);
  if (!match) return body;
  const endIdx = body.indexOf(match[0]) + match[0].length;
  const afterH1 = body.slice(endIdx).replace(/^\n+/, "\n\n");
  return body.slice(0, endIdx) + "\n\n" + tocBlock + "\n\n" + afterH1.trimStart();
}

/** 修复格式：多处连续空行压成至多一个空行、末尾至多一个换行 */
function fixFormat(body) {
  let out = body.replace(/\n{3,}/g, "\n\n").replace(/\s+$/, "");
  if (out !== "" && !out.endsWith("\n")) out += "\n";
  return out;
}

function processFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { body, frontmatterBlock } = parseFrontmatterAndBody(raw);
  if (!frontmatterBlock) return false;

  const headings = collectH4Headings(body);
  let newBody = body;

  if (headings.length > 0) {
    newBody = removeExistingToc(newBody);
    if (!hasTocAfterH1(newBody)) {
      const toc = buildToc(headings);
      newBody = insertTocAfterH1(newBody, toc);
    }
  }

  newBody = fixFormat(newBody);

  const newContent = frontmatterBlock + "\n" + newBody.trimStart();
  if (newContent === raw) return false;
  fs.writeFileSync(filePath, newContent, "utf-8");
  return true;
}

function main() {
  const files = fs.readdirSync(WIKI_DIR).filter((f) => f.endsWith(".md"));
  let updated = 0;
  for (const f of files) {
    try {
      if (processFile(path.join(WIKI_DIR, f))) updated++;
    } catch (err) {
      console.error("Error:", f, err.message);
    }
  }
  console.log("Updated %d / %d wiki files (TOC + format).", updated, files.length);
}

main();
