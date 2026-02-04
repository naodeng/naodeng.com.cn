/**
 * 根据博文目录 + 标题/描述 重新调整博文标签，保证与内容相关
 * - 按目录限制可选标签范围，避免无关标签（如 QA 术语篇不会出现 K6）
 * - 仅用标题、描述做匹配；正文仅用于工具名强化（且需在目录允许范围内）
 * - 每篇最多 3 个标签
 * 运行: node scripts/update-blog-tags.mjs
 */
import fs from "fs";
import path from "path";

const BLOG_ROOT = "src" + path.sep + "blog";

// ---------- 按目录划分：目录 -> 该目录下允许的英文标签 ----------
const ALLOWED_BY_PATH_EN = {
  "Performance-Testing": ["K6", "Performance Testing", "Gatling"],
  "API-Automation-Testing": ["Postman", "Pytest", "RestAssured", "Supertest", "Bruno", "API Testing", "Automated Testing", "Data Driven", "Allure", "CI/CD Integration"],
  "Event": ["AI in Testing", "30 Days of AI in Testing", "Automated Testing", "Accessibility Testing", "Visual Testing", "Best Practices", "Test Strategy", "Agile Testing"],
  "AI-Testing": ["AI in Testing", "API Testing", "Automated Testing", "Best Practices"],
  "Others": ["Software Testing", "Best Practices", "Agile Testing", "Cypress", "Playwright", "UI Testing", "Automated Testing"],
  "UI-Automation-Testing": ["Cypress", "Playwright", "UI Testing", "Visual Testing", "Automated Testing", "Best Practices"],
  "QA-Glossary-Wiki": ["QA Glossary", "Software Testing", "Acceptance Testing", "Automated Testing", "API Testing", "Accessibility Testing", "Agile Testing", "Best Practices", "Test Strategy"],
};

const ALLOWED_BY_PATH_ZH = {
  "Performance-Testing": ["K6", "性能测试", "Gatling"],
  "API-Automation-Testing": ["Postman", "Pytest", "RestAssured", "Supertest", "Bruno", "接口测试", "自动化测试", "数据驱动", "Allure", "CI/CD"],
  "Event": ["AI 测试", "30 天 AI 测试挑战", "自动化测试", "无障碍测试", "视觉测试", "最佳实践", "测试策略", "敏捷测试"],
  "AI-Testing": ["AI 测试", "接口测试", "自动化测试", "最佳实践"],
  "Others": ["软件测试", "最佳实践", "敏捷测试", "Cypress", "Playwright", "UI 测试", "自动化测试"],
  "UI-Automation-Testing": ["Cypress", "Playwright", "UI 测试", "视觉测试", "自动化测试", "最佳实践"],
  "QA-Glossary-Wiki": ["QA 术语", "软件测试", "验收测试", "自动化测试", "接口测试", "无障碍测试", "敏捷测试", "最佳实践", "测试策略"],
};

// ---------- 关键词 -> 标签（仅用于在 标题/描述 中匹配，英文） ----------
const RULES_TITLE_DESC_EN = [
  { keywords: ["k6", "load testing", "performance testing"], tag: "K6" },
  { keywords: ["performance testing", "load test"], tag: "Performance Testing" },
  { keywords: ["gatling"], tag: "Gatling" },
  { keywords: ["postman"], tag: "Postman" },
  { keywords: ["pytest"], tag: "Pytest" },
  { keywords: ["rest-assured", "rest assured"], tag: "RestAssured" },
  { keywords: ["supertest"], tag: "Supertest" },
  { keywords: ["bruno"], tag: "Bruno" },
  { keywords: ["api testing", "api test", "api automation"], tag: "API Testing" },
  { keywords: ["cypress"], tag: "Cypress" },
  { keywords: ["playwright"], tag: "Playwright" },
  { keywords: ["ui testing", "e2e", "end-to-end"], tag: "UI Testing" },
  { keywords: ["automated testing", "automation"], tag: "Automated Testing" },
  { keywords: ["ci/cd", "github action", "continuous integration"], tag: "CI/CD Integration" },
  { keywords: ["agile testing", "agile"], tag: "Agile Testing" },
  { keywords: ["ai in testing", "ai testing", "artificial intelligence"], tag: "AI in Testing" },
  { keywords: ["30 days of ai"], tag: "30 Days of AI in Testing" },
  { keywords: ["data driven", "data-driven"], tag: "Data Driven" },
  { keywords: ["allure", "allure report"], tag: "Allure" },
  { keywords: ["accessibility", "a11y"], tag: "Accessibility Testing" },
  { keywords: ["visual testing", "visual regression"], tag: "Visual Testing" },
  { keywords: ["best practice", "best practices"], tag: "Best Practices" },
  { keywords: ["test strategy", "testing strategy"], tag: "Test Strategy" },
  { keywords: ["qa glossary", "glossary", "acceptance testing", "alpha testing", "beta testing"], tag: "QA Glossary" },
  { keywords: ["software testing"], tag: "Software Testing" },
];

const RULES_TITLE_DESC_ZH = [
  { keywords: ["k6", "负载测试", "性能测试"], tag: "K6" },
  { keywords: ["性能测试", "负载测试"], tag: "性能测试" },
  { keywords: ["gatling"], tag: "Gatling" },
  { keywords: ["postman"], tag: "Postman" },
  { keywords: ["pytest"], tag: "Pytest" },
  { keywords: ["rest-assured", "rest assured"], tag: "RestAssured" },
  { keywords: ["supertest"], tag: "Supertest" },
  { keywords: ["bruno"], tag: "Bruno" },
  { keywords: ["接口测试", "api 测试", "接口自动化"], tag: "接口测试" },
  { keywords: ["cypress"], tag: "Cypress" },
  { keywords: ["playwright"], tag: "Playwright" },
  { keywords: ["ui测试", "界面测试", "e2e", "端到端"], tag: "UI 测试" },
  { keywords: ["自动化测试", "自动化"], tag: "自动化测试" },
  { keywords: ["ci/cd", "持续集成", "github action"], tag: "CI/CD" },
  { keywords: ["敏捷测试", "敏捷"], tag: "敏捷测试" },
  { keywords: ["ai测试", "人工智能", "ai 测试"], tag: "AI 测试" },
  { keywords: ["30 天 ai", "30天ai", "30 天 ai 测试"], tag: "30 天 AI 测试挑战" },
  { keywords: ["数据驱动"], tag: "数据驱动" },
  { keywords: ["allure", "allure 报告"], tag: "Allure" },
  { keywords: ["无障碍", "可访问性"], tag: "无障碍测试" },
  { keywords: ["视觉测试", "视觉回归"], tag: "视觉测试" },
  { keywords: ["最佳实践"], tag: "最佳实践" },
  { keywords: ["测试策略"], tag: "测试策略" },
  { keywords: ["qa术语", "术语分享", "验收测试", "alpha测试", "beta测试"], tag: "QA 术语" },
  { keywords: ["软件测试"], tag: "软件测试" },
];

// 正文中仅识别「工具/框架名」用于强化（需在 allowed 内）
const TOOL_NAMES_EN = ["k6", "gatling", "postman", "pytest", "rest-assured", "supertest", "bruno", "cypress", "playwright"];
const TOOL_NAMES_ZH = ["k6", "gatling", "postman", "pytest", "rest-assured", "supertest", "bruno", "cypress", "playwright"];
const TOOL_TO_TAG_EN = { k6: "K6", gatling: "Gatling", postman: "Postman", pytest: "Pytest", "rest-assured": "RestAssured", supertest: "Supertest", bruno: "Bruno", cypress: "Cypress", playwright: "Playwright" };
const TOOL_TO_TAG_ZH = { ...TOOL_TO_TAG_EN };

const GENERIC_EN = ["Software Testing", "Testing"];
const GENERIC_ZH = ["软件测试", "测试"];

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

/** 根据文件路径得到「目录」：Performance-Testing / API-Automation-Testing / Event / QA-Glossary-Wiki / AI-Testing / UI-Automation-Testing / Others */
function getCategory(filePath) {
  const normalized = filePath.split(path.sep).join("/");
  const blogIdx = normalized.indexOf(BLOG_ROOT);
  const afterBlog = blogIdx === -1 ? normalized : normalized.slice(blogIdx + BLOG_ROOT.length);
  const parts = afterBlog.split("/").filter(Boolean);
  // [ "en" | "zh-cn", categoryFolder, ... ]
  if (parts.length >= 2) {
    const folder = parts[1];
    if (ALLOWED_BY_PATH_EN[folder]) return folder;
  }
  return "Others";
}

/** 该目录下允许的标签集合（按当前语言） */
function getAllowedTags(category, lang) {
  const map = lang === "zh" ? ALLOWED_BY_PATH_ZH : ALLOWED_BY_PATH_EN;
  const allowed = new Set(map[category] || (lang === "zh" ? [...GENERIC_ZH, "自动化测试", "接口测试", "最佳实践"] : [...GENERIC_EN, "Automated Testing", "API Testing", "Best Practices"]));
  return allowed;
}

/** 当标题/描述未匹配到任何标签时，按目录给的默认标签（保证至少 1 个） */
function getDefaultTagForCategory(category, lang) {
  const map = lang === "zh" ? ALLOWED_BY_PATH_ZH : ALLOWED_BY_PATH_EN;
  const list = map[category];
  if (list && list.length > 0) return list[0];
  return lang === "zh" ? "软件测试" : "Software Testing";
}

/** 仅在 标题+描述 中匹配，且标签必须在 allowed 内 */
function matchFromTitleAndDescription(title, description, lang, allowedSet) {
  const text = `${title} ${description}`;
  const textLower = lang === "en" ? text.toLowerCase() : text;
  const rules = lang === "zh" ? RULES_TITLE_DESC_ZH : RULES_TITLE_DESC_EN;
  const matched = [];
  for (const { keywords, tag } of rules) {
    if (!allowedSet.has(tag)) continue;
    const found = keywords.some((k) =>
      lang === "en" ? textLower.includes(k.toLowerCase()) : text.includes(k)
    );
    if (found) matched.push(tag);
  }
  return matched;
}

/** 正文前 800 字中出现的工具名 -> 对应标签（仅当在 allowed 内且未已在 primary 中） */
function matchToolsInBody(body, lang, allowedSet, alreadyTagged) {
  const raw = stripMarkdown(body).slice(0, 800);
  const lower = raw.toLowerCase();
  const toolToTag = lang === "zh" ? TOOL_TO_TAG_ZH : TOOL_TO_TAG_EN;
  const names = lang === "zh" ? TOOL_NAMES_ZH : TOOL_NAMES_EN;
  const found = [];
  for (const name of names) {
    const tag = toolToTag[name];
    if (!tag || !allowedSet.has(tag) || alreadyTagged.has(tag)) continue;
    if (lower.includes(name)) found.push(tag);
  }
  return found;
}

function computeTags(filePath, content, lang) {
  const category = getCategory(filePath);
  const allowed = getAllowedTags(category, lang);
  const { frontmatter, body } = getFrontmatterAndBody(content);
  const title = getTitle(frontmatter);
  const description = getDescription(frontmatter);

  const fromTitleDesc = matchFromTitleAndDescription(title, description, lang, allowed);
  const combined = new Set(fromTitleDesc);
  const fromBody = matchToolsInBody(body, lang, allowed, combined);
  for (const tag of fromBody) {
    if (combined.size >= 3) break;
    combined.add(tag);
  }

  if (combined.size === 0) {
    combined.add(getDefaultTagForCategory(category, lang));
  }

  return Array.from(combined).slice(0, 3);
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
  console.log(`Found ${files.length} MDX files. Updating tags (path + title/description only, max 3)...\n`);

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
