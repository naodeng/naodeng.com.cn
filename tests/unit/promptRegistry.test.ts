import { describe, expect, it } from "vitest";
import {
  buildPromptRegistry,
  filterPromptRegistry,
  getRelatedPromptEntries,
  getVariantGroup,
} from "@/data/promptRegistry";

type MockPrompt = {
  id: string;
  body: string;
  data: {
    title: string;
    description: string;
    testingType: string;
    category: string;
    categoryOrder: number;
    sourcePath: string;
    lang: "en" | "zh-cn";
    order: number;
  };
};

function prompt(
  testingType: string,
  title: string,
  category = "Requirements, Planning, And Test Strategy",
): MockPrompt {
  return {
    id: `prompts/en/${testingType}`,
    body: `# ${title}\n\n## Input\n- PRD\n\n## Output\n- Risks`,
    data: {
      title,
      description: `${title} description`,
      testingType,
      category,
      categoryOrder: 1,
      sourcePath: `testing-types/en/${testingType}/Standard-version/Prompt.md`,
      lang: "en",
      order: 1,
    },
  };
}

describe("prompt registry", () => {
  const entries = [
    prompt("requirements-analysis", "Requirements Analysis Prompt"),
    prompt("requirements-analysis-plus", "Requirements Analysis Plus Prompt"),
    prompt("requirements-analysis-Mobile", "Requirements Analysis Prompt - Mobile Version"),
    prompt("api-testing", "API Testing Prompt", "API, Contract, Messaging, And Integration"),
    prompt("performance-result-analysis", "Performance Result Analysis Prompt", "Performance, Reliability, And Resilience"),
  ];

  it("derives stable area, task, variant, and searchable metadata", () => {
    const [base, plus, mobile, api, performance] = buildPromptRegistry(entries, "en");

    expect(base).toMatchObject({
      id: "requirements-analysis",
      areaKey: "requirements-planning",
      taskKey: "requirements-analysis",
      variant: "standard",
      complexity: "intermediate",
    });
    expect(plus).toMatchObject({ variant: "plus", complexity: "advanced" });
    expect(mobile).toMatchObject({ platform: "mobile", variant: "standard" });
    expect(api).toMatchObject({ areaKey: "api-integration", taskKey: "api-testing" });
    expect(performance).toMatchObject({
      areaKey: "performance-reliability",
      taskKey: "performance-analysis",
    });
    expect(base.searchText).toContain("requirements analysis");
    expect(base.inputs.length).toBeGreaterThan(0);
    expect(base.outputs.length).toBeGreaterThan(0);
  });

  it("uses the prompt body lead for a prompt-specific card summary", () => {
    const entry = prompt("api-dependency-analysis", "API Dependency Analysis Prompt", "API, Contract, Messaging, And Integration");
    entry.body = [
      "# API Dependency Analysis Prompt",
      "",
      "You are an API testing specialist. Map direct and indirect dependencies and turn them into verifiable test concerns.",
      "",
      "## Required Inputs",
      "- API contract",
    ].join("\n");

    const [result] = buildPromptRegistry([entry], "en");

    expect(result.cardDescription).toContain("Map direct and indirect dependencies");
    expect(result.cardDescription).not.toBe(result.description);
  });

  it("removes repetitive role-only openings from localized summaries", () => {
    const entry = prompt("acceptance-criteria-reviewer", "验收标准审查 Prompt", "需求、规划与测试策略");
    entry.data.lang = "zh-cn";
    entry.body = "你是一名需求、交付与质量风险专家。仅根据用户提供的材料，围绕验收标准审查形成可执行、可核验的结果。";

    const [result] = buildPromptRegistry([entry], "zh-cn");

    expect(result.cardDescription).toBe("仅根据用户提供的材料，围绕验收标准审查形成可执行、可核验的结果。");
  });

  it("uses localized task sections instead of role or context paragraphs", () => {
    const entry = prompt("requirements-analysis", "需求分析 Prompt", "需求、规划与测试策略");
    entry.data.lang = "zh-cn";
    entry.body = [
      "# 需求分析 Prompt",
      "",
      "**角色：** 资深需求分析与测试专家。",
      "",
      "**上下文：** 需要从需求材料中识别业务风险和测试关注点。",
      "",
      "**任务：** 请根据提供的需求文档，输出业务背景、测试范围和测试场景设计。",
    ].join("\n");

    const [result] = buildPromptRegistry([entry], "zh-cn");

    expect(result.cardDescription).toContain("请根据提供的需求文档");
    expect(result.cardDescription).not.toContain("角色：");
    expect(result.cardDescription).not.toContain("上下文：");
  });

  it("combines query, area, task, and variant filters", () => {
    const registry = buildPromptRegistry(entries, "en");

    expect(filterPromptRegistry(registry, { query: "performance" }).map((item) => item.id)).toEqual([
      "performance-result-analysis",
    ]);
    expect(filterPromptRegistry(registry, { areaKey: "requirements-planning" })).toHaveLength(3);
    expect(filterPromptRegistry(registry, { taskKey: "requirements-analysis", variant: "plus" })).toHaveLength(1);
  });

  it("keeps variant links and related prompts inside the real registry", () => {
    const registry = buildPromptRegistry(entries, "en");
    const current = registry.find((item) => item.id === "requirements-analysis")!;
    const variants = getVariantGroup(current, registry);
    const related = getRelatedPromptEntries(current, registry, 5);

    expect(variants.map((item) => item.id)).toEqual([
      "requirements-analysis",
      "requirements-analysis-plus",
      "requirements-analysis-Mobile",
    ]);
    expect(related.map((item) => item.id)).not.toContain(current.id);
    expect(related.every((item) => registry.some((candidate) => candidate.id === item.id))).toBe(true);
  });

  it("inherits the family area for legacy variants with stale categories", () => {
    const registry = buildPromptRegistry([
      prompt("test-strategy-Mobile", "Test Strategy Prompt - Mobile Version", "AI And LLM Testing"),
      prompt("test-case-reviewer-plus", "Test Case Reviewer Plus Prompt", "Other Prompts"),
      prompt("testcase-writer-plus", "Test Case Writer Plus Prompt", "Other Prompts"),
    ], "en");

    expect(registry.map((item) => item.areaKey)).toEqual([
      "requirements-planning",
      "quality-governance",
      "test-analysis-design",
    ]);
  });
});
