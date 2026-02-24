#!/usr/bin/env node
/**
 * 翻译 Guild 内容从中文到英文
 * 
 * 注意：此脚本生成翻译模板，需要人工审核和完善翻译内容
 * 使用方式：node scripts/translate-guild-content.mjs
 */
import { readFile, writeFile, mkdir } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { existsSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// 需要翻译的文件列表
const FILES_TO_TRANSLATE = [
  // K6 系列
  {
    source: "src/content/guild/zh-cn/performance-testing/k6/thresholds-and-scenarios.md",
    target: "src/content/guild/en/performance-testing/k6/thresholds-and-scenarios.md",
  },
  {
    source: "src/content/guild/zh-cn/performance-testing/k6/writing-test-scripts.md",
    target: "src/content/guild/en/performance-testing/k6/writing-test-scripts.md",
  },
  {
    source: "src/content/guild/zh-cn/performance-testing/k6/ci-cd-integration.md",
    target: "src/content/guild/en/performance-testing/k6/ci-cd-integration.md",
  },
  // Gatling 系列
  {
    source: "src/content/guild/zh-cn/performance-testing/gatling/introduction.md",
    target: "src/content/guild/en/performance-testing/gatling/introduction.md",
  },
  {
    source: "src/content/guild/zh-cn/performance-testing/gatling/getting-started.md",
    target: "src/content/guild/en/performance-testing/gatling/getting-started.md",
  },
  {
    source: "src/content/guild/zh-cn/performance-testing/gatling/advanced-usage.md",
    target: "src/content/guild/en/performance-testing/gatling/advanced-usage.md",
  },
  {
    source: "src/content/guild/zh-cn/performance-testing/gatling/ci-cd-integration.md",
    target: "src/content/guild/en/performance-testing/gatling/ci-cd-integration.md",
  },
];

/**
 * 提取 frontmatter
 */
function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: "", body: content };
  
  return {
    frontmatter: match[1],
    body: match[2],
  };
}

/**
 * 翻译 frontmatter（保持结构，只翻译 title 和 description）
 */
function translateFrontmatter(frontmatter) {
  const lines = frontmatter.split("\n");
  const translated = lines.map(line => {
    // 保持所有字段不变，这些需要人工翻译
    return line;
  });
  
  return translated.join("\n");
}

/**
 * 创建翻译占位符
 */
function createTranslationPlaceholder(chineseContent) {
  return `<!-- 
  ⚠️ TRANSLATION NEEDED ⚠️
  This is a placeholder. Please translate the Chinese content below.
  
  翻译说明：
  1. 保持 Markdown 格式不变
  2. 翻译所有中文文本
  3. 保留代码块、链接、图片等原样
  4. 保持技术术语的准确性
-->

${chineseContent}

<!-- END TRANSLATION PLACEHOLDER -->`;
}

/**
 * 翻译单个文件
 */
async function translateFile(sourceFile, targetFile) {
  const sourcePath = join(root, sourceFile);
  const targetPath = join(root, targetFile);
  
  if (!existsSync(sourcePath)) {
    console.log(`⚠️  源文件不存在: ${sourceFile}`);
    return false;
  }
  
  if (existsSync(targetPath)) {
    console.log(`⏭️  目标文件已存在，跳过: ${targetFile}`);
    return false;
  }
  
  // 读取源文件
  const content = await readFile(sourcePath, "utf-8");
  const { frontmatter, body } = extractFrontmatter(content);
  
  // 创建翻译模板
  const translatedFrontmatter = translateFrontmatter(frontmatter);
  const translationPlaceholder = createTranslationPlaceholder(body);
  
  const translatedContent = `---
${translatedFrontmatter}
---

${translationPlaceholder}`;
  
  // 创建目标目录
  const targetDir = dirname(targetPath);
  await mkdir(targetDir, { recursive: true });
  
  // 写入翻译模板
  await writeFile(targetPath, translatedContent, "utf-8");
  
  console.log(`✅ 创建翻译模板: ${targetFile}`);
  return true;
}

/**
 * 主函数
 */
async function main() {
  console.log("🌐 开始创建翻译模板...\n");
  console.log("⚠️  注意：此脚本创建翻译模板，需要人工完成实际翻译\n");
  
  let successCount = 0;
  let skipCount = 0;
  
  for (const { source, target } of FILES_TO_TRANSLATE) {
    const result = await translateFile(source, target);
    if (result) {
      successCount++;
    } else {
      skipCount++;
    }
  }
  
  console.log(`\n📊 完成！`);
  console.log(`✅ 创建模板: ${successCount} 个`);
  console.log(`⏭️  跳过: ${skipCount} 个`);
  console.log(`\n📝 下一步：请手工翻译这些文件中的中文内容`);
}

main().catch((err) => {
  console.error("❌ 错误:", err);
  process.exit(1);
});
