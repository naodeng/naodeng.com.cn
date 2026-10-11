/**
 * Wiki Markdown fixer (safe mode).
 *
 * Fixes mixed-language punctuation spacing outside fenced code blocks. It does
 * not rewrite fence indentation: that indentation depends on Markdown list
 * nesting, and rewriting it can change the rendered structure of a page.
 */
import fs from "node:fs";
import path from "node:path";

const WIKI_DIR = path.join(process.cwd(), "src", "content", "wiki");

function parseFrontmatter(content) {
  if (!content.startsWith("---\n")) return null;
  const end = content.indexOf("\n---\n", 4);
  if (end < 0) return null;
  return { frontmatter: content.slice(0, end + 5), body: content.slice(end + 5) };
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

function fixLine(line) {
  return line.replace(/([\u4e00-\u9fffA-Za-z0-9\]\)])\s+([,.;:!?，。！？；：])/g, (match, left, punctuation, offset, source) => {
    const following = source[offset + match.length] ?? "";
    if (punctuation === "." && /[A-Za-z0-9]/.test(following)) return match;
    return `${left}${punctuation}`;
  });
}

function findFence(line) {
  const match = line.match(/^[ \t]*(`{3,}|~{3,})(.*)$/);
  if (!match || (match[1][0] === "`" && match[2].includes("`"))) return null;
  return { character: match[1][0], length: match[1].length };
}

function closesFence(line, fence) {
  const match = line.match(/^[ \t]*(`+|~+)[ \t]*$/);
  return Boolean(match && match[1][0] === fence.character && match[1].length >= fence.length);
}

function main() {
  let changedFiles = 0;
  let replacements = 0;

  for (const file of listMarkdownFiles(WIKI_DIR).sort()) {
    const fullPath = path.join(WIKI_DIR, file);
    const parsed = parseFrontmatter(fs.readFileSync(fullPath, "utf8"));
    if (!parsed) continue;

    let fence = null;
    let changed = false;
    const lines = parsed.body.split(/\r?\n/);

    for (let index = 0; index < lines.length; index += 1) {
      const line = lines[index];
      if (fence) {
        if (closesFence(line, fence)) fence = null;
        continue;
      }

      const opening = findFence(line);
      if (opening) {
        fence = opening;
        continue;
      }

      const fixed = fixLine(line);
      if (fixed !== line) {
        lines[index] = fixed;
        changed = true;
        replacements += 1;
      }
    }

    if (!changed) continue;
    changedFiles += 1;
    const output = parsed.frontmatter + lines.join("\n").replace(/\s*$/, "") + "\n";
    fs.writeFileSync(fullPath, output, "utf8");
  }

  console.log(`Wiki style fix done. changedFiles=${changedFiles}, replacements=${replacements}`);
}

main();
