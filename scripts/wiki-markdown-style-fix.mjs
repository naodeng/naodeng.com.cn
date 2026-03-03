/**
 * Wiki markdown style fixer (safe mode)
 *
 * Auto-fix:
 * 1) Remove spaces before English punctuation after Chinese char:
 *    "中文 , . : ; ! ?" -> "中文, . : ; ! ?"
 * 2) Normalize fenced code block indent:
 *    - Always no indent for fence markers (``` / ```lang)
 *
 * Notes:
 * - Only body content is edited (frontmatter untouched).
 * - Fenced code block content is skipped.
 *
 * Usage:
 *   node scripts/wiki-markdown-style-fix.mjs
 */
import fs from "fs";
import path from "path";

const WIKI_DIR = path.join(process.cwd(), "src", "content", "wiki");

function parseFrontmatter(content) {
  if (!content.startsWith("---\n")) return null;
  const end = content.indexOf("\n---\n", 4);
  if (end === -1) return null;
  return {
    frontmatter: content.slice(0, end + 5),
    body: content.slice(end + 5),
  };
}

function fixLine(line) {
  return line.replace(/([\u4e00-\u9fffA-Za-z0-9\]\)])\s+([,.;:!?，。！？；：])/g, (m, left, punct, offset, src) => {
    const afterPunct = src[offset + m.length] || "";
    // Keep ".NET/.com/1.23" style tokens.
    if (punct === "." && /[A-Za-z0-9]/.test(afterPunct)) return m;
    return `${left}${punct}`;
  });
}

function main() {
  const files = fs.readdirSync(WIKI_DIR).filter((f) => f.endsWith(".md")).sort();
  let changedFiles = 0;
  let replacements = 0;

  for (const file of files) {
    const full = path.join(WIKI_DIR, file);
    const raw = fs.readFileSync(full, "utf-8");
    const parsed = parseFrontmatter(raw);
    if (!parsed) continue;

    const lines = parsed.body.split(/\r?\n/);
    let inFence = false;
    let fileChanged = false;

    for (let i = 0; i < lines.length; i += 1) {
      const before = lines[i];
      const fenceMatch = before.match(/^(\s*)```(.*)$/);

      if (fenceMatch) {
        const afterFence = `\`\`\`${fenceMatch[2]}`;
        if (before !== afterFence) {
          lines[i] = afterFence;
          fileChanged = true;
          replacements += 1;
        }

        inFence = !inFence;
        continue;
      }

      if (inFence) continue;

      const after = fixLine(before);
      if (before !== after) {
        lines[i] = after;
        fileChanged = true;
        replacements += 1;
      }
    }

    if (!fileChanged) continue;
    changedFiles += 1;

    const out = parsed.frontmatter + lines.join("\n").replace(/\s*$/, "") + "\n";
    fs.writeFileSync(full, out, "utf-8");
  }

  console.log(`Wiki style fix done. changedFiles=${changedFiles}, replacements=${replacements}`);
}

main();
