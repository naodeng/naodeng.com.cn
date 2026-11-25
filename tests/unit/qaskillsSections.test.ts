import { describe, it, expect } from "vitest";
import {
  SECTION_KEYS,
  extractCanonicalSections,
  firstBulletText,
} from "@/utils/qaskillsSections";

const ZH_SAMPLE = `---
name: api-testing
description: Use this skill when you need API tests.
---

# API 测试（中文版）

## 何时使用
- 需要 API 测试方案。

## 执行流程
1. 读主提示词。

## 核心约束
- 按风险排序。

## 按需加载
- 读 \`prompts/api-testing.md\`。

## 交付前自检
- [ ] 已覆盖最低清单

## 常见误区
- 不要假装完整。
`;

const EN_SAMPLE = `---
name: api-testing
description: Use this skill when you need API tests.
---

# API Testing (English)

## When to Use
- Need an API test plan.

## Workflow
1. Read the main prompt.

## Core Constraints
- Prioritize by risk.

## Progressive Disclosure
- Read \`prompts/api-testing.md\`.

## Pre-delivery Checklist
- [ ] Covered minimum checklist

## Common Pitfalls
- Do not pretend completeness.
`;

const UPSTREAM_EN_SAMPLE = `## When to use
- Run a Skill evaluation.

## How to use
1. Read the contract.

## Constraints
- Keep evidence boundaries clear.

## Progressive disclosure
- Read supporting files as needed.

## Pre-delivery checklist
- [ ] Record limitations.

## Common pitfalls
- Do not overstate results.
`;

describe("extractCanonicalSections", () => {
  it("maps Chinese headings to canonical keys", () => {
    const sections = extractCanonicalSections(ZH_SAMPLE);
    expect(sections.whenToUse).toContain("API 测试方案");
    expect(sections.workflow).toContain("主提示词");
    expect(sections.coreConstraints).toContain("风险");
    expect(sections.progressiveDisclosure).toContain("prompts/api-testing.md");
    expect(sections.checklist).toContain("最低清单");
    expect(sections.pitfalls).toContain("假装完整");
  });

  it("maps English headings to the same canonical keys", () => {
    const sections = extractCanonicalSections(EN_SAMPLE);
    expect(sections.whenToUse).toContain("API test plan");
    expect(sections.workflow).toContain("main prompt");
    expect(sections.coreConstraints).toContain("risk");
    expect(sections.progressiveDisclosure).toContain("prompts/api-testing.md");
    expect(sections.checklist).toContain("minimum checklist");
    expect(sections.pitfalls).toContain("pretend completeness");
  });

  it("maps current upstream English heading variants to canonical keys", () => {
    const sections = extractCanonicalSections(UPSTREAM_EN_SAMPLE);
    expect(sections.whenToUse).toContain("Skill evaluation");
    expect(sections.workflow).toContain("Read the contract");
    expect(sections.coreConstraints).toContain("evidence boundaries");
    expect(sections.progressiveDisclosure).toContain("supporting files");
    expect(sections.checklist).toContain("Record limitations");
    expect(sections.pitfalls).toContain("overstate results");
  });

  it("omits missing sections as empty string", () => {
    const sections = extractCanonicalSections("# Title\n\n## When to Use\n- only\n");
    expect(sections.whenToUse).toContain("only");
    expect(sections.workflow).toBe("");
  });

  it("exposes stable SECTION_KEYS order", () => {
    expect(SECTION_KEYS).toEqual([
      "whenToUse",
      "workflow",
      "coreConstraints",
      "progressiveDisclosure",
      "checklist",
      "pitfalls",
    ]);
  });
});

describe("firstBulletText", () => {
  it("returns the first list item text", () => {
    expect(firstBulletText("- aaa\n- bbb")).toBe("aaa");
    expect(firstBulletText("1. first\n2. second")).toBe("first");
    expect(firstBulletText("plain")).toBe("plain");
  });
});
