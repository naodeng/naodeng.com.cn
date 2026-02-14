/**
 * 按近期手动调整的 wiki 格式规范化百科词条：
 * - frontmatter: title "中文 ｜ English"（全角竖线），description 简短或保留已有段落，section/order
 * - 正文首行标题统一为 "# 中文 ｜ English"，去掉重复的 "# English..." 行
 * - "### 相关术语" / "### 另请参阅" / "### 参见" 后加冒号
 * 运行: node scripts/normalize-wiki.mjs
 */
import fs from "fs";
import path from "path";

const WIKI_DIR = path.join(process.cwd(), "src", "content", "wiki");
const PIPE = "\uFF5C"; // 全角竖线 ｜

function extractTitleFromH1(line) {
  const m = line.match(/^#\s+(.+)$/);
  if (!m) return null;
  const content = m[1].trim();
  // "中文 (English)" -> { zh, en }
  let match = content.match(/^(.+?)\s*\(\s*(.+?)\s*\)\s*$/);
  if (match) {
    const a = match[1].trim();
    const b = match[2].trim();
    const isLikelyEn = /^[A-Za-z\/\s-]+$/.test(a) && !/^[\u4e00-\u9fff]/.test(a);
    if (isLikelyEn) return { zh: b, en: a };
    return { zh: a, en: b };
  }
  // "中文 | English" 或 "中文 ｜ English"
  match = content.match(/^(.+?)\s*[\|\uFF5C]\s*(.+)$/);
  if (match) return { zh: match[1].trim(), en: match[2].trim() };
  return null;
}

function firstLetterFromSlug(filename) {
  const base = path.basename(filename, ".md");
  const first = base.charAt(0).toUpperCase();
  return /[A-Z]/.test(first) ? first : "#";
}

function parseFrontmatterAndBody(content) {
  const delim = "---";
  const first = content.indexOf(delim);
  if (first !== 0) return { frontmatter: null, body: content };
  const second = content.indexOf(delim, delim.length);
  if (second === -1) return { frontmatter: null, body: content };
  const frontmatterRaw = content.slice(delim.length, second).trim();
  let body = content.slice(second + delim.length).trimStart();
  return { frontmatterRaw, body };
}

function buildNewFrontmatter(titleZh, titleEn, description, section, order) {
  const title = `${titleZh} ${PIPE} ${titleEn}`;
  const desc = description && description.length > 0 && description.length <= 500 && !description.includes("---")
    ? description
    : `${titleZh}相关术语与常见问题。`;
  return `---
title: "${title.replace(/"/g, '\\"')}"
description: "${desc.replace(/"/g, '\\"')}"
section: "${section}"
order: ${order}
---`;
}

function hasChinese(s) {
  return /[\u4e00-\u9fff]/.test(s);
}

/** 从正文中选取首选标题（优先含中文的那一行） */
function getPreferredTitle(body) {
  const lines = body.split("\n");
  let firstParsed = null;
  for (const line of lines) {
    const t = line.trim();
    if (!t.startsWith("# ")) continue;
    const p = extractTitleFromH1(line);
    if (!p) continue;
    if (!firstParsed) firstParsed = p;
    if (hasChinese(p.zh)) return p;
  }
  return firstParsed;
}

function normalizeBody(body, titleZh, titleEn) {
  const lines = body.split("\n");
  const newLines = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    if (newLines.length === 0 && trimmed === "---") {
      i++;
      continue;
    }
    if (newLines.length === 0 && trimmed.startsWith("# ")) {
      const parsed = extractTitleFromH1(line);
      if (parsed) {
        newLines.push(`# ${titleZh} ${PIPE} ${titleEn}`);
        i++;
        while (i < lines.length) {
          const t = lines[i].trim();
          if (t === "---" || (t.startsWith("# ") && (extractTitleFromH1(lines[i]) || /^#\s+[A-Za-z]/.test(t)))) i++;
          else break;
        }
        if (i < lines.length && lines[i].trim() === "") i++;
        continue;
      }
    }
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith("---") && trimmedLine.length > 3 && !/^---\s*$/.test(trimmedLine)) {
      i++;
      continue;
    }
    if (/^section:\s*["']?[A-Z#]["']?\s*$/i.test(trimmedLine) || /^order:\s*\d+\s*$/.test(trimmedLine)) {
      i++;
      continue;
    }
    newLines.push(line);
    i++;
  }
  let out = newLines.join("\n");
  out = out.replace(/^### 相关术语\s*$/m, "### 相关术语：");
  out = out.replace(/^### 另请参阅\s*$/m, "### 另请参阅：");
  out = out.replace(/^### 参见\s*$/m, "### 参见：");
  // 与手动格式一致：## 关于xxx的常见问题？ → 关于xxx的问题？，并去掉标题行尾空格
  out = out.replace(/^## 关于(.+)的常见问题[?？]\s*$/gm, "## 关于$1的问题？");
  out = out.replace(/^## 关于(.+)的问题[?？](\s+)$/gm, "## 关于$1的问题？");
  // ## 关于...的问题？ 与 #### 之间保留一空行
  out = out.replace(/(^## 关于.+\n)(^####\s)/gm, "$1\n$2");
  return out;
}

/** 从正文中「- **什么是…？**」后的第一段内容提取 description */
function extractDescriptionFromWhatIs(body) {
  const lines = body.split("\n");
  const whatIsRe = /^\s*-\s+\*\*什么是.+[?？]\*\*\s*$/;
  let i = 0;
  for (; i < lines.length; i++) {
    if (whatIsRe.test(lines[i])) break;
  }
  if (i >= lines.length) return "";
  i++;
  while (i < lines.length && lines[i].trim() === "") i++;
  const paragraph = [];
  for (; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t === "") break; // 第一段到空行结束
    if (/^\s*-\s+\*\*/.test(lines[i])) break;
    if (/^#{2,6}\s/.test(t)) break;
    if (t.startsWith("```")) break;
    paragraph.push(t);
  }
  let plain = paragraph
    .join(" ")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  if (!plain) return "";
  if (plain.length > 500) {
    const idx = plain.slice(0, 497).lastIndexOf("。");
    plain = idx > 0 ? plain.slice(0, idx + 1) : plain.slice(0, 497) + "…";
  }
  return plain;
}

function extractShortDescription(body) {
  const afterFirstH2 = body.replace(/^[\s\S]*?^##\s+/m, "");
  const firstBlock = afterFirstH2.split(/\n\n+/)[0] || body.split(/\n\n+/)[0] || "";
  const plain = firstBlock
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\n/g, " ")
    .trim();
  if (plain.length <= 155) return plain;
  const idx = plain.slice(0, 152).lastIndexOf("。");
  return (idx > 0 ? plain.slice(0, idx + 1) : plain.slice(0, 152) + "…");
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const { frontmatterRaw, body } = parseFrontmatterAndBody(content);
  const filename = path.basename(filePath);
  const section = firstLetterFromSlug(filename);
  const order = 0;

  const parsed = getPreferredTitle(body);
  if (!parsed) return false;

  const newBody = normalizeBody(body, parsed.zh, parsed.en);
  let description = extractDescriptionFromWhatIs(newBody);
  if (!description) description = extractShortDescription(newBody);

  const newFrontmatter = buildNewFrontmatter(parsed.zh, parsed.en, description, section, order);
  const newContent = newFrontmatter + "\n\n" + newBody.trimStart() + "\n";
  fs.writeFileSync(filePath, newContent, "utf-8");
  return true;
}

function main() {
  const files = fs.readdirSync(WIKI_DIR).filter((f) => f.endsWith(".md"));
  let done = 0;
  for (const f of files) {
    const filePath = path.join(WIKI_DIR, f);
    try {
      if (processFile(filePath)) done++;
    } catch (err) {
      console.error("Error:", f, err.message);
    }
  }
  console.log("Normalized %d / %d wiki files.", done, files.length);
}

main();
