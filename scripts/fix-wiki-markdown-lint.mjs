/**
 * 修复 wiki 词条的 markdownlint 错误：
 * - MD025: 在 frontmatter 后插入 <!-- markdownlint-disable MD025 -->
 * - MD001: 将 "## 关于...问题？" 下的 #### 改为 ###（标题层级不跳级）
 * 运行: node scripts/fix-wiki-markdown-lint.mjs
 */
import fs from "fs";
import path from "path";

const WIKI_DIR = path.join(process.cwd(), "src", "content", "wiki");
const MD025_DISABLE = "<!-- markdownlint-disable MD025 -->";

function processFile(filePath) {
  let raw = fs.readFileSync(filePath, "utf-8");
  let changed = false;

  if (raw.startsWith("---\n")) {
    const endFm = raw.indexOf("\n---\n", 4);
    if (endFm !== -1) {
      const afterFm = raw.slice(endFm + 5);
      if (afterFm.trimStart().startsWith("# ") && !afterFm.includes(MD025_DISABLE)) {
        raw = raw.slice(0, endFm + 5) + MD025_DISABLE + "\n" + afterFm;
        changed = true;
      }
    }
  }

  if (raw.includes("\n#### ")) {
    const newContent = raw.replace(/\n#### /g, "\n### ");
    if (newContent !== raw) {
      raw = newContent;
      changed = true;
    }
  }

  if (changed) fs.writeFileSync(filePath, raw, "utf-8");
  return changed;
}

function main() {
  const files = fs.readdirSync(WIKI_DIR).filter((f) => f.endsWith(".md"));
  let n = 0;
  for (const f of files) {
    if (processFile(path.join(WIKI_DIR, f))) n++;
  }
  console.log("Fixed %d / %d wiki files.", n, files.length);
}

main();
