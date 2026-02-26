import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const testingTypes = [
  'accessibility-testing',
  'ai-assisted-testing',
  'api-testing',
  'automation-testing',
  'bug-reporting',
  'functional-testing',
  'manual-testing',
  'mobile-testing',
  'performance-testing',
  'requirements-analysis',
  'security-testing',
  'test-case-reviewer',
  'test-case-writing',
  'test-reporting',
  'test-strategy',
];

const titles = {
  'accessibility-testing': { en: 'Accessibility Testing', 'zh-cn': '可访问性测试' },
  'ai-assisted-testing': { en: 'AI-Assisted Testing', 'zh-cn': 'AI 辅助测试' },
  'api-testing': { en: 'API Testing', 'zh-cn': 'API 测试' },
  'automation-testing': { en: 'Automation Testing', 'zh-cn': '自动化测试' },
  'bug-reporting': { en: 'Bug Reporting', 'zh-cn': '缺陷上报' },
  'functional-testing': { en: 'Functional Testing', 'zh-cn': '功能测试' },
  'manual-testing': { en: 'Manual Testing', 'zh-cn': '手动测试' },
  'mobile-testing': { en: 'Mobile Testing', 'zh-cn': '移动端测试' },
  'performance-testing': { en: 'Performance Testing', 'zh-cn': '性能测试' },
  'requirements-analysis': { en: 'Requirements Analysis', 'zh-cn': '需求分析' },
  'security-testing': { en: 'Security Testing', 'zh-cn': '安全测试' },
  'test-case-reviewer': { en: 'Test Case Reviewer', 'zh-cn': '测试用例评审' },
  'test-case-writing': { en: 'Test Case Writing', 'zh-cn': '测试用例编写' },
  'test-reporting': { en: 'Test Reporting', 'zh-cn': '测试报告' },
  'test-strategy': { en: 'Test Strategy', 'zh-cn': '测试策略' },
};

const versions = [
  { dir: 'Standard-version', version: 'Standard', order: 1 },
  { dir: 'ROSES-version', version: 'ROSES', order: 2 },
  { dir: 'LangGPT-version', version: 'LangGPT', order: 3 },
  { dir: 'ICIO-version', version: 'ICIO', order: 4 },
  { dir: 'CRISPE-version', version: 'CRISPE', order: 5 },
  { dir: 'RISE-version', version: 'RISE', order: 6 },
];

function getDescription(version, title, lang) {
  const descMap = {
    Standard: { en: `Standard prompt for ${title}`, 'zh-cn': `${title}标准提示词` },
    ROSES: { en: `ROSES framework prompt for ${title}`, 'zh-cn': `${title} ROSES 框架提示词` },
    LangGPT: { en: `LangGPT framework prompt for ${title}`, 'zh-cn': `${title} LangGPT 框架提示词` },
    ICIO: { en: `ICIO framework prompt for ${title}`, 'zh-cn': `${title} ICIO 框架提示词` },
    CRISPE: { en: `CRISPE framework prompt for ${title}`, 'zh-cn': `${title} CRISPE 框架提示词` },
    RISE: { en: `RISE framework prompt for ${title}`, 'zh-cn': `${title} RISE 框架提示词` },
  };
  return descMap[version][lang];
}

let count = 0;

for (const testingType of testingTypes) {
  for (const { dir, version, order } of versions) {
    const srcDir = join(root, 'temp', 'testing-types', testingType, dir);
    if (!existsSync(srcDir)) continue;

    const files = readdirSync(srcDir);

    for (const file of files) {
      // Skip Lite and Lean files (any file containing Lite or Lean anywhere in the name)
      if (file.includes('Lite') || file.includes('Lean')) continue;
      if (!file.endsWith('.md')) continue;

      const isEN = file.endsWith('_EN.md');
      const lang = isEN ? 'en' : 'zh-cn';
      const title = titles[testingType][lang];
      const description = getDescription(version, title, lang);

      const frontmatter = `---
title: "${version} - ${title}"
description: "${description}"
testingType: "${testingType}"
promptVersion: "${version}"
lang: "${lang}"
order: ${order}
---

`;

      const srcPath = join(srcDir, file);
      const originalContent = readFileSync(srcPath, 'utf-8');
      const newContent = frontmatter + originalContent;

      const destDir = join(root, 'src', 'content', 'prompts', lang, testingType);
      mkdirSync(destDir, { recursive: true });
      const destPath = join(destDir, `${version}.md`);

      writeFileSync(destPath, newContent, 'utf-8');
      count++;
      console.log(`Created: ${destPath}`);
    }
  }
}

console.log(`\nMigrated ${count} files.`);
