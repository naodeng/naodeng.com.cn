/**
 * Refresh TOC blocks for wiki markdown files.
 *
 * Format:
 * <!-- TOC START -->
 * - [Heading](#anchor)
 *   - [Sub heading](#sub-heading)
 * <!-- TOC END -->
 *
 * Usage:
 *   node scripts/refresh-wiki-toc.mjs
 */
import fs from "fs";
import path from "path";
import { marked } from "marked";

let GithubSlugger;
try {
  const mod = await import("github-slugger");
  GithubSlugger = mod.default;
} catch {
  GithubSlugger = null;
}

const WIKI_DIR = path.join(process.cwd(), "src", "content", "wiki");
const TOC_START = "<!-- TOC START -->";
const TOC_END = "<!-- TOC END -->";

function parseFrontmatter(content) {
  if (!content.startsWith("---\n")) return null;
  const end = content.indexOf("\n---\n", 4);
  if (end === -1) return null;
  return {
    frontmatter: content.slice(0, end + 5),
    body: content.slice(end + 5),
  };
}

function collectHeadings(body) {
  return marked.lexer(body)
    .filter((token) => token.type === "heading" && token.depth >= 1 && token.depth <= 4)
    .map((token) => ({ level: token.depth, text: token.text.trim() }))
    .filter((heading) => heading.text);
}

function toAnchor(headings) {
  const slugger = GithubSlugger ? new GithubSlugger() : null;
  return headings.map((h) => {
    const anchor = slugger ? slugger.slug(h.text) : h.text.replace(/\s+/g, "-").toLowerCase();
    return { ...h, anchor };
  });
}

function buildTocLines(headings) {
  return headings.map((h) => {
    const indent = "  ".repeat(Math.max(0, h.level - 1));
    return `${indent}- [${h.text}](#${h.anchor})`;
  });
}

function refreshOneFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const parsed = parseFrontmatter(raw);
  if (!parsed) return false;

  const body = parsed.body;
  const startIdx = body.indexOf(TOC_START);
  const endIdx = body.indexOf(TOC_END);

  const headings = toAnchor(collectHeadings(body));
  const tocLines = buildTocLines(headings);

  let nextBody;
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    const title = body.match(/^#\s+.+(?:\r?\n|$)/m);
    if (!title) return false;
    const insertAt = title.index + title[0].length;
    const before = body.slice(0, insertAt).replace(/\s*$/, "");
    const after = body.slice(insertAt).replace(/^\s*/, "");
    nextBody = `${before}\n\n${TOC_START}\n\n${tocLines.join("\n")}\n${TOC_END}\n\n${after}`;
  } else {
    const before = body.slice(0, startIdx + TOC_START.length);
    const after = body.slice(endIdx);
    nextBody = `${before}\n\n${tocLines.join("\n")}\n${after}`;
  }
  const next = `${parsed.frontmatter}${nextBody.replace(/\s*$/, "")}\n`;

  if (next === raw) return false;
  fs.writeFileSync(filePath, next, "utf-8");
  return true;
}

function listMarkdownFiles(dir, relative = "") {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const nextRelative = path.join(relative, entry.name);
    if (entry.isDirectory()) files.push(...listMarkdownFiles(path.join(dir, entry.name), nextRelative));
    else if (entry.isFile() && entry.name.endsWith(".md")) files.push(nextRelative);
  }
  return files;
}

function main() {
  const files = listMarkdownFiles(WIKI_DIR).sort();
  let updated = 0;
  for (const file of files) {
    const full = path.join(WIKI_DIR, file);
    if (refreshOneFile(full)) updated += 1;
  }
  console.log(`Refreshed TOC for ${updated}/${files.length} wiki files.`);
}

main();
