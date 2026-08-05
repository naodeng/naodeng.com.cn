import { describe, it, expect } from "vitest";
import { parseQASkillMarkdown } from "@/utils/qaskills";

const SITE_MD = `# API 测试

作者：naodeng

## 元数据
- slug: api-testing
- category: type
- hasEvals: true
- syncedAt: 2026-08-05
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/api-testing/SKILL.md
- description: Use this skill when you need API tests.

## 何时使用
- 需要 API 测试方案。

## 执行流程
1. 读主提示词。

## 原始 SKILL.md
\`\`\`markdown
---
name: api-testing
description: Use this skill when you need API tests.
---

# API 测试（中文版）

## 何时使用

- 需要 API 测试方案。

## 执行流程

1. 读主提示词。

## 常见误区

- 不要编造细节。
\`\`\`

## 安装
- cursor

## 来源
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
`;

describe("parseQASkillMarkdown", () => {
  it("parses metadata, sections, and raw skill markdown", () => {
    const skill = parseQASkillMarkdown("zh-cn", "api-testing", SITE_MD);
    expect(skill.hasEvals).toBe(true);
    expect(skill.category).toBe("type");
    expect(skill.updatedAt).toBe("2026-08-05");
    expect(skill.sections.whenToUse).toContain("API 测试方案");
    expect(skill.rawSkillMarkdown).toContain("name: api-testing");
    expect(skill.intro).toContain("API tests");
  });

  it("keeps full raw SKILL.md even when fenced content has ## headings", () => {
    const skill = parseQASkillMarkdown("zh-cn", "api-testing", SITE_MD);
    expect(skill.rawSkillMarkdown).toContain("## 何时使用");
    expect(skill.rawSkillMarkdown).toContain("## 执行流程");
    expect(skill.rawSkillMarkdown).toContain("## 常见误区");
    expect(skill.rawSkillMarkdown).toContain("不要编造细节");
    expect(skill.rawSkillMarkdown).not.toContain("## 安装");
    expect(skill.sections.whenToUse).toBe("- 需要 API 测试方案。");
  });
});
