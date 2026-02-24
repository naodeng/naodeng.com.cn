#!/usr/bin/env node
/**
 * 将博客文章迁移到 Guild 内容集合
 * 使用方式：node scripts/migrate-guild-content.mjs
 */
import { readFile, writeFile, mkdir } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { existsSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// 文章映射配置
const ARTICLE_MAPPING = {
  // Postman 系列
  "postman-tutorial-getting-started-and-building-your-own-project-from-0-to-1": {
    testType: "api-testing",
    framework: "postman",
    slug: "getting-started",
    stage: "getting-started",
    difficulty: "beginner",
    duration: 30,
    order: 1,
  },
  "postman-tutorial-advance-usage-common-test-scripts-and-commonly-used-third-party-packages": {
    testType: "api-testing",
    framework: "postman",
    slug: "common-test-scripts",
    stage: "basic",
    difficulty: "intermediate",
    duration: 45,
    order: 2,
  },
  "postman-tutorial-advance-usage-data-driven-and-environment-data-driven": {
    testType: "api-testing",
    framework: "postman",
    slug: "data-driven",
    stage: "advanced",
    difficulty: "intermediate",
    duration: 50,
    order: 3,
  },
  "postman-tutorial-advance-usage-common-command-line-options-and-file-upload": {
    testType: "api-testing",
    framework: "postman",
    slug: "command-line-and-file-upload",
    stage: "advanced",
    difficulty: "intermediate",
    duration: 40,
    order: 4,
  },
  "postman-tutorial-advance-usage-ai-assistant-postbot-trial-introduction": {
    testType: "api-testing",
    framework: "postman",
    slug: "ai-assistant-postbot",
    stage: "advanced",
    difficulty: "advanced",
    duration: 35,
    order: 5,
  },
  "postman-tutorial-advance-usage-integration-html-report-and-allure-report-integration-github-action": {
    testType: "api-testing",
    framework: "postman",
    slug: "ci-cd-integration",
    stage: "ci-cd",
    difficulty: "advanced",
    duration: 60,
    order: 6,
  },

  // Pytest 系列
  "pytest-tutorial-getting-started-and-own-environment-preparation": {
    testType: "api-testing",
    framework: "pytest",
    slug: "environment-setup",
    stage: "getting-started",
    difficulty: "beginner",
    duration: 30,
    order: 1,
  },
  "pytest-tutorial-building-your-own-project-from-0-to-1": {
    testType: "api-testing",
    framework: "pytest",
    slug: "building-project",
    stage: "getting-started",
    difficulty: "beginner",
    duration: 40,
    order: 2,
  },
  "pytest-tutorial-advance-usage-common-assertions-and-data-driven": {
    testType: "api-testing",
    framework: "pytest",
    slug: "assertions-and-data-driven",
    stage: "basic",
    difficulty: "intermediate",
    duration: 45,
    order: 3,
  },
  "pytest-tutorial-advance-usage-filter-testcase-and-concurrent-testing-distributed-testing": {
    testType: "api-testing",
    framework: "pytest",
    slug: "filter-and-concurrent-testing",
    stage: "advanced",
    difficulty: "intermediate",
    duration: 50,
    order: 4,
  },
  "pytest-tutorial-advance-usage-multiple-environment-support-and-integration-allure-report": {
    testType: "api-testing",
    framework: "pytest",
    slug: "multi-env-and-allure",
    stage: "advanced",
    difficulty: "intermediate",
    duration: 55,
    order: 5,
  },
  "pytest-tutorial-advance-usage-integration-ci-cd-and-github-action": {
    testType: "api-testing",
    framework: "pytest",
    slug: "ci-cd-integration",
    stage: "ci-cd",
    difficulty: "advanced",
    duration: 60,
    order: 6,
  },

  // REST Assured 系列
  "rest-assured-tutorial-and-environment-preparation": {
    testType: "api-testing",
    framework: "rest-assured",
    slug: "environment-setup",
    stage: "getting-started",
    difficulty: "beginner",
    duration: 30,
    order: 1,
  },
  "rest-assured-tutorial-building-your-own-project-from-0-to-1": {
    testType: "api-testing",
    framework: "rest-assured",
    slug: "building-project",
    stage: "getting-started",
    difficulty: "beginner",
    duration: 40,
    order: 2,
  },
  "rest-assured-tutorial-advance-usage-verifying-response-and-logging": {
    testType: "api-testing",
    framework: "rest-assured",
    slug: "verifying-and-logging",
    stage: "basic",
    difficulty: "intermediate",
    duration: 45,
    order: 3,
  },
  "rest-assured-tutorial-advance-usage-integration-ci-cd-and-allure-report": {
    testType: "api-testing",
    framework: "rest-assured",
    slug: "ci-cd-integration",
    stage: "ci-cd",
    difficulty: "advanced",
    duration: 60,
    order: 4,
  },

  // SuperTest 系列
  "supertest-tutorial-getting-started-and-own-environment-preparation": {
    testType: "api-testing",
    framework: "supertest",
    slug: "environment-setup",
    stage: "getting-started",
    difficulty: "beginner",
    duration: 30,
    order: 1,
  },
  "supertest-tutorial-building-your-own-project-from-0-to-1": {
    testType: "api-testing",
    framework: "supertest",
    slug: "building-project",
    stage: "getting-started",
    difficulty: "beginner",
    duration: 40,
    order: 2,
  },
  "supertest-tutorial-advance-usage-common-assertions": {
    testType: "api-testing",
    framework: "supertest",
    slug: "common-assertions",
    stage: "basic",
    difficulty: "intermediate",
    duration: 40,
    order: 3,
  },
  "supertest-tutorial-advance-usage-data-driven": {
    testType: "api-testing",
    framework: "supertest",
    slug: "data-driven",
    stage: "advanced",
    difficulty: "intermediate",
    duration: 45,
    order: 4,
  },
  "supertest-tutorial-advance-usage-multiple-environment-support": {
    testType: "api-testing",
    framework: "supertest",
    slug: "multi-env-support",
    stage: "advanced",
    difficulty: "intermediate",
    duration: 50,
    order: 5,
  },
  "supertest-tutorial-advance-usage-integration-ci-cd-and-github-action": {
    testType: "api-testing",
    framework: "supertest",
    slug: "ci-cd-integration",
    stage: "ci-cd",
    difficulty: "advanced",
    duration: 60,
    order: 6,
  },

  // Bruno 系列
  "introduction_of_bruno": {
    testType: "api-testing",
    framework: "bruno",
    slug: "introduction",
    stage: "getting-started",
    difficulty: "beginner",
    duration: 20,
    order: 1,
  },
  "bruno-tutorial-building-your-own-project-from-0-to-1": {
    testType: "api-testing",
    framework: "bruno",
    slug: "building-project",
    stage: "getting-started",
    difficulty: "beginner",
    duration: 40,
    order: 2,
  },

  // K6 系列
  "K6-tutorial-getting-started-and-your-first-K6-test-script": {
    testType: "performance-testing",
    framework: "k6",
    slug: "getting-started",
    stage: "getting-started",
    difficulty: "beginner",
    duration: 35,
    order: 1,
  },
  "K6-tutorial-common-functions-1-http-request-metrics-and-checks": {
    testType: "performance-testing",
    framework: "k6",
    slug: "http-request-and-checks",
    stage: "basic",
    difficulty: "intermediate",
    duration: 40,
    order: 2,
  },
  "K6-tutorial-common-functions-2-thresholds-test-lifecycle-and-scenarios": {
    testType: "performance-testing",
    framework: "k6",
    slug: "thresholds-and-scenarios",
    stage: "basic",
    difficulty: "intermediate",
    duration: 45,
    order: 3,
  },
  "K6-tutorial-advanced-usage-how-to-quickly-writing-k6-performance-test-script": {
    testType: "performance-testing",
    framework: "k6",
    slug: "writing-test-scripts",
    stage: "advanced",
    difficulty: "advanced",
    duration: 50,
    order: 4,
  },
  "K6-tutorial-advanced-usage-output-html-report-and-ci-cd-integration": {
    testType: "performance-testing",
    framework: "k6",
    slug: "ci-cd-integration",
    stage: "ci-cd",
    difficulty: "advanced",
    duration: 55,
    order: 5,
  },

  // Gatling 系列 - 中文版本
  "gatling-tool-intro1": {
    testType: "performance-testing",
    framework: "gatling",
    slug: "introduction",
    stage: "getting-started",
    difficulty: "beginner",
    duration: 30,
    order: 1,
    enFilename: "gatling-tool-tutorial1", // 英文文件名不同
  },
  "gatling-tool-intro2": {
    testType: "performance-testing",
    framework: "gatling",
    slug: "getting-started",
    stage: "getting-started",
    difficulty: "beginner",
    duration: 40,
    order: 2,
    enFilename: "gatling-tool-tutorial2", // 英文文件名不同
  },
  "gatling-tool-intro-Advanced-Usage": {
    testType: "performance-testing",
    framework: "gatling",
    slug: "advanced-usage",
    stage: "advanced",
    difficulty: "advanced",
    duration: 50,
    order: 3,
    enFilename: "gatling-tool-tutorial-Advanced-Usage", // 英文文件名不同
  },
  "gatling-tool-intro-CI-CD-Integration": {
    testType: "performance-testing",
    framework: "gatling",
    slug: "ci-cd-integration",
    stage: "ci-cd",
    difficulty: "advanced",
    duration: 55,
    order: 4,
    enFilename: "gatling-tool-tutorial-CI-CD-Integration", // 英文文件名不同
  },
};

// 语言映射
const LANGUAGE_MAP = {
  postman: "JavaScript",
  pytest: "Python",
  "rest-assured": "Java",
  supertest: "JavaScript/TypeScript",
  bruno: "JavaScript",
  k6: "JavaScript",
  gatling: "Scala/Java",
};

// GitHub Demo 链接
const GITHUB_DEMO_MAP = {
  postman: "https://github.com/naodeng/postman-demo",
  pytest: "https://github.com/naodeng/pytest-requests-demo",
  "rest-assured": "https://github.com/naodeng/rest-assured-demo",
  supertest: "https://github.com/naodeng/supertest-demo",
  bruno: "https://github.com/naodeng/bruno-demo",
  k6: "https://github.com/naodeng/k6-demo",
  gatling: "https://github.com/naodeng/gatling-demo",
};

// 官方文档链接
const OFFICIAL_DOCS_MAP = {
  postman: "https://learning.postman.com/",
  pytest: "https://docs.pytest.org/",
  "rest-assured": "https://rest-assured.io/",
  supertest: "https://github.com/ladjs/supertest",
  bruno: "https://www.usebruno.com/",
  k6: "https://k6.io/docs/",
  gatling: "https://gatling.io/docs/",
};

/**
 * 提取 MDX 文件的 frontmatter
 */
function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const frontmatter = {};
  const lines = match[1].split("\n");

  for (const line of lines) {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length > 0) {
      const value = valueParts.join(":").trim();
      frontmatter[key.trim()] = value;
    }
  }

  return frontmatter;
}

/**
 * 生成新的 frontmatter
 */
function generateGuildFrontmatter(originalFrontmatter, mapping) {
  const framework = mapping.framework;
  const date = originalFrontmatter.date || new Date().toISOString().split("T")[0];

  return `---
title: ${originalFrontmatter.title}
description: ${originalFrontmatter.description}
testType: ${mapping.testType}
framework: ${framework}
language: ${LANGUAGE_MAP[framework]}
stage: ${mapping.stage}
difficulty: ${mapping.difficulty}
duration: ${mapping.duration}
order: ${mapping.order}
githubDemo: ${GITHUB_DEMO_MAP[framework]}
officialDocs: ${OFFICIAL_DOCS_MAP[framework]}
date: ${date}
---`;
}

/**
 * 迁移单个文章
 */
async function migrateArticle(locale, category, filename, mapping) {
  // 对于英文版本，如果有特殊的文件名映射，使用映射的文件名
  const actualFilename = (locale === 'en' && mapping.enFilename) ? mapping.enFilename : filename;
  const sourcePath = join(root, "src", "blog", locale, category, `${actualFilename}.mdx`);
  
  if (!existsSync(sourcePath)) {
    console.log(`⚠️  文件不存在: ${sourcePath}`);
    return false;
  }

  const content = await readFile(sourcePath, "utf-8");
  const frontmatter = extractFrontmatter(content);

  if (!frontmatter) {
    console.log(`⚠️  无法提取 frontmatter: ${filename}`);
    return false;
  }

  // 生成新的 frontmatter
  const newFrontmatter = generateGuildFrontmatter(frontmatter, mapping, locale);

  // 提取正文内容（移除旧的 frontmatter）
  const bodyContent = content.replace(/^---\n[\s\S]*?\n---\n/, "");

  // 生成新内容
  const newContent = `${newFrontmatter}\n${bodyContent}`;

  // 创建目标目录
  const targetDir = join(
    root,
    "src",
    "content",
    "guild",
    locale,
    mapping.testType,
    mapping.framework
  );

  await mkdir(targetDir, { recursive: true });

  // 写入新文件
  const targetPath = join(targetDir, `${mapping.slug}.md`);
  await writeFile(targetPath, newContent, "utf-8");

  console.log(`✅ 迁移成功: ${filename} -> ${targetPath}`);
  return true;
}

/**
 * 主函数
 */
async function main() {
  console.log("🚀 开始迁移博客文章到 Guild...\n");

  let successCount = 0;
  let failCount = 0;

  for (const [filename, mapping] of Object.entries(ARTICLE_MAPPING)) {
    // 根据测试类型确定源目录
    let category = "API-Automation-Testing";
    if (mapping.testType === "performance-testing") {
      category = "Performance-Testing";
    }

    // 尝试迁移中文版本
    const zhSuccess = await migrateArticle("zh-cn", category, filename, mapping);
    if (zhSuccess) successCount++;
    else failCount++;

    // 尝试迁移英文版本
    const enSuccess = await migrateArticle("en", category, filename, mapping);
    if (enSuccess) successCount++;
    else failCount++;
  }

  console.log(`\n📊 迁移完成！`);
  console.log(`✅ 成功: ${successCount} 篇`);
  console.log(`❌ 失败: ${failCount} 篇`);
}

main().catch((err) => {
  console.error("❌ 迁移失败:", err);
  process.exit(1);
});
