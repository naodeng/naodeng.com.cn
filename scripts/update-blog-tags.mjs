/**
 * 根据博文内容和 QA 领域关键词重新调整博文标签
 * - 中文博文仅使用中文标签，英文博文仅使用英文标签
 * - 每篇博文最少 4 个、最多 6 个标签
 * 运行: node scripts/update-blog-tags.mjs
 */
import fs from "fs";
import path from "path";

// ---------- QA 领域关键词 -> 标签（英文） ----------
const RULES_EN = [
  { keywords: ["k6", "performance testing", "load testing"], tag: "K6" },
  { keywords: ["k6"], tag: "Performance Testing" },
  { keywords: ["gatling", "performance testing"], tag: "Gatling" },
  { keywords: ["postman"], tag: "Postman" },
  { keywords: ["pytest"], tag: "Pytest" },
  { keywords: ["rest assured", "rest-assured"], tag: "RestAssured" },
  { keywords: ["supertest"], tag: "Supertest" },
  { keywords: ["bruno"], tag: "Bruno" },
  { keywords: ["api testing", "api test", "interface test"], tag: "API Testing" },
  { keywords: ["cypress"], tag: "Cypress" },
  { keywords: ["playwright"], tag: "Playwright" },
  { keywords: ["ui testing", "ui test", "e2e", "end-to-end"], tag: "UI Testing" },
  { keywords: ["automation", "automated testing"], tag: "Automated Testing" },
  { keywords: ["ci/cd", "ci cd", "github action", "continuous integration"], tag: "CI/CD Integration" },
  { keywords: ["agile testing", "agile"], tag: "Agile Testing" },
  { keywords: ["ai testing", "ai in testing", "artificial intelligence"], tag: "AI in Testing" },
  { keywords: ["30 days of ai"], tag: "30 Days of AI in Testing" },
  { keywords: ["data driven", "data-driven"], tag: "Data Driven" },
  { keywords: ["allure", "allure report"], tag: "Allure" },
  { keywords: ["accessibility", "a11y"], tag: "Accessibility Testing" },
  { keywords: ["visual testing", "visual regression"], tag: "Visual Testing" },
  { keywords: ["best practice", "best practices"], tag: "Best Practices" },
  { keywords: ["test strategy", "testing strategy"], tag: "Test Strategy" },
  { keywords: ["qa glossary", "glossary", "acceptance testing", "alpha testing", "api testing", "automated testing"], tag: "QA Glossary" },
];

// ---------- QA 领域关键词 -> 标签（中文） ----------
const RULES_ZH = [
  { keywords: ["k6", "性能测试", "负载测试"], tag: "K6" },
  { keywords: ["k6", "性能测试"], tag: "性能测试" },
  { keywords: ["gatling", "性能测试"], tag: "Gatling" },
  { keywords: ["postman"], tag: "Postman" },
  { keywords: ["pytest"], tag: "Pytest" },
  { keywords: ["rest assured", "rest-assured"], tag: "RestAssured" },
  { keywords: ["supertest"], tag: "Supertest" },
  { keywords: ["bruno"], tag: "Bruno" },
  { keywords: ["接口测试", "api", "接口"], tag: "接口测试" },
  { keywords: ["cypress"], tag: "Cypress" },
  { keywords: ["playwright"], tag: "Playwright" },
  { keywords: ["ui测试", "界面测试", "e2e", "端到端"], tag: "UI 测试" },
  { keywords: ["自动化测试", "自动化"], tag: "自动化测试" },
  { keywords: ["ci/cd", "持续集成", "github action"], tag: "CI/CD" },
  { keywords: ["敏捷测试", "敏捷"], tag: "敏捷测试" },
  { keywords: ["ai测试", "人工智能", "ai 测试"], tag: "AI 测试" },
  { keywords: ["30 天 ai", "30天ai"], tag: "30 天 AI 测试挑战" },
  { keywords: ["数据驱动"], tag: "数据驱动" },
  { keywords: ["allure", "allure 报告"], tag: "Allure" },
  { keywords: ["无障碍", "可访问性"], tag: "无障碍测试" },
  { keywords: ["视觉测试", "视觉回归"], tag: "视觉测试" },
  { keywords: ["最佳实践"], tag: "最佳实践" },
  { keywords: ["测试策略"], tag: "测试策略" },
  { keywords: ["qa术语", "术语", "验收测试", "alpha测试", "接口测试", "自动化测试"], tag: "QA 术语" },
  { keywords: ["软件测试", "测试"], tag: "软件测试" },
];

const GENERIC_EN = ["Software Testing", "Best Practices", "Testing"];
const GENERIC_ZH = ["软件测试", "最佳实践", "测试"];

function getFiles(dir, allFiles = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, allFiles);
    } else if (file.endsWith(".mdx")) {
      allFiles.push(name);
    }
  }
  return allFiles;
}

function getFrontmatterAndBody(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { frontmatter: "", body: content };
  return { frontmatter: match[1], body: match[2] };
}

function getTitle(frontmatter) {
  const m = frontmatter.match(/^title:\s*["']?([^"'\n]+)["']?/m);
  return m ? m[1].trim() : "";
}

function getDescription(frontmatter) {
  const m = frontmatter.match(/^description:\s*["']?([^"'\n]+)["']?/m);
  return m ? m[1].trim() : "";
}

function getTags(content) {
  const m = content.match(/^tags:\s*\[(.*?)\]/m);
  if (!m) return [];
  return m[1]
    .split(",")
    .map((t) => t.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

/** 粗略去掉 Markdown，保留可搜索文本 */
function stripMarkdown(text) {
  return (
    text
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[#*_`~]/g, " ")
      .replace(/\s+/g, " ")
      .trim() || ""
  );
}

/** 是否主要为中文（含 CJK） */
function isChineseTag(tag) {
  return /[\u4e00-\u9fff\u3400-\u4dbf]/.test(tag);
}

function computeTags(filePath, content, lang) {
  const { frontmatter, body } = getFrontmatterAndBody(content);
  const title = getTitle(frontmatter);
  const description = getDescription(frontmatter);
  const bodyStripped = stripMarkdown(body).slice(0, 2000);
  const searchText = `${title} ${description} ${bodyStripped}`;
  const searchLower = lang === "en" ? searchText.toLowerCase() : searchText;

  const rules = lang === "zh" ? RULES_ZH : RULES_EN;
  const generic = lang === "zh" ? GENERIC_ZH : GENERIC_EN;
  const matched = [];

  for (const { keywords, tag } of rules) {
    const found = keywords.some((k) =>
      lang === "en" ? searchLower.includes(k.toLowerCase()) : searchText.includes(k)
    );
    if (found) matched.push(tag);
  }

  const existing = getTags(content);
  const sameLang = existing.filter((t) =>
    lang === "zh" ? isChineseTag(t) : !isChineseTag(t)
  );

  // 优先保留原有同语言标签，再按匹配顺序加入（去重），最多 6 个标签
  const MAX_TAGS = 6;
  const MIN_TAGS = 4;
  const combined = new Set([...sameLang]);
  for (const tag of matched) {
    if (combined.size >= MAX_TAGS) break;
    combined.add(tag);
  }

  while (combined.size < MIN_TAGS) {
    for (const g of generic) {
      if (combined.size >= MIN_TAGS) break;
      combined.add(g);
    }
    if (combined.size >= MIN_TAGS) break;
    combined.add(lang === "zh" ? "测试" : "Testing");
  }

  return Array.from(combined);
}

function updateTagsInContent(content, newTags) {
  const tagsLine = `tags: ${JSON.stringify(newTags)}`;
  if (content.match(/^tags:\s*\[/m)) {
    return content.replace(/^tags:\s*\[[^\n]*\]/m, tagsLine);
  }
  return content.replace(/^author:\s*.+$/m, (m) => `${m}\n${tagsLine}`);
}

function main() {
  const blogDir = path.join(process.cwd(), "src", "blog");
  const files = getFiles(blogDir);
  console.log(`Found ${files.length} MDX files. Updating tags (zh-cn → 中文标签, en → 英文标签, 每篇 4–6 个标签)...\n`);

  let updated = 0;
  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const lang = file.includes(path.sep + "zh-cn" + path.sep) ? "zh" : "en";
    const newTags = computeTags(file, content, lang);
    const currentTags = getTags(content);

    const currentSorted = [...currentTags].sort().join(",");
    const newSorted = [...newTags].sort().join(",");
    if (currentSorted === newSorted) continue;

    const newContent = updateTagsInContent(content, newTags);
    fs.writeFileSync(file, newContent, "utf8");
    const rel = path.relative(process.cwd(), file);
    console.log(`  ${rel}`);
    console.log(`    ${currentTags.join(", ")} → ${newTags.join(", ")}`);
    updated++;
  }

  console.log(`\nDone. Updated ${updated} of ${files.length} files.`);
}

main();
