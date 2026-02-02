/**
 * 一次性脚本：将每篇博文 tags 截断为最多 6 个（不足 4 个则补到 4 个）
 * 运行: node scripts/trim-tags-to-six.mjs
 */
import fs from "fs";
import path from "path";

function getFiles(dir, all = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) getFiles(full, all);
    else if (name.endsWith(".mdx")) all.push(full);
  }
  return all;
}

function getTags(content) {
  const m = content.match(/^tags:\s*\[(.*?)\]/m);
  if (!m) return [];
  return m[1].split(",").map((t) => t.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
}

function setTags(content, tags) {
  const line = `tags: ${JSON.stringify(tags)}`;
  return content.replace(/^tags:\s*\[[^\n]*\]/m, line);
}

const blogDir = path.join(process.cwd(), "src", "blog");
const files = getFiles(blogDir);
const genericZh = ["软件测试", "最佳实践", "测试"];
const genericEn = ["Software Testing", "Best Practices", "Testing"];
let fixed = 0;
for (const file of files) {
  const raw = fs.readFileSync(file, "utf8");
  let tags = getTags(raw);
  if (tags.length === 0) continue;
  const isZh = file.includes(path.sep + "zh-cn" + path.sep);
  const generic = isZh ? genericZh : genericEn;
  if (tags.length > 6) tags = tags.slice(0, 6);
  while (tags.length < 4) {
    for (const g of generic) {
      if (tags.length >= 4) break;
      if (!tags.includes(g)) tags.push(g);
    }
    if (tags.length < 4) tags.push(isZh ? "测试" : "Testing");
  }
  const newContent = setTags(raw, tags);
  if (newContent !== raw) {
    fs.writeFileSync(file, newContent, "utf8");
    console.log(path.relative(process.cwd(), file));
    fixed++;
  }
}
console.log(`Done. Trimmed ${fixed} files.`);
