import { describe, expect, it } from "vitest";
import { buildMetaDescription, buildQASkillMetaDescription } from "../../src/utils/seoDescription.mjs";
import { buildBlogArchiveDescription, getBlogSeriesDisplayName } from "../../src/utils/blogArchiveDescription.mjs";

describe("meta description builder", () => {
  it("adds page context when the default site description is too short", () => {
    const result = buildMetaDescription({
      siteDescription: "The site description.",
      pageContext: "Installation",
      suffix: "Find practical software testing guidance.",
    });

    expect(result).toContain("Installation");
    expect(result.length).toBeGreaterThanOrEqual(70);
    expect(result.length).toBeLessThanOrEqual(155);
  });

  it("preserves an accurate short page description without generic padding", () => {
    const description = "QA metrics measure testing progress and software quality.";
    const result = buildMetaDescription({
      description,
      siteDescription: "The site description.",
      pageContext: "QA Metrics",
      suffix: "This generic fallback must not be appended.",
    });

    expect(result).toBe(description);
  });

  it("adds page context to the repeated default site description", () => {
    const result = buildMetaDescription({
      description: "The site description.",
      siteDescription: "The site description.",
      pageContext: "Page Two",
      suffix: "Find practical software testing guidance.",
    });

    expect(result.startsWith("Page Two: ")).toBe(true);
    expect(result).not.toBe("The site description.");
  });

  it("preserves a complete authored description longer than 155 characters by default", () => {
    const description = "Use this Skill to review requirements, capture test intent, map risks, document missing evidence, and prepare actionable findings for the QA team. It includes coverage guidance, review boundaries, examples, and next steps.";

    const result = buildMetaDescription({
      description,
      pageContext: "Decision Table Test Design",
      suffix: "This generic fallback must not be appended.",
    });

    expect(result).toBe(description);
  });

  it("honors an explicit page-specific description limit", () => {
    const result = buildMetaDescription({
      description: "A useful page summary. ".repeat(10),
      maxLength: 155,
    });

    expect(result.length).toBeLessThanOrEqual(155);
    expect(result.endsWith("…")).toBe(true);
  });

  it("adds localized QA Skill input and output context to a short description", () => {
    const result = buildQASkillMetaDescription({
      description: "围绕「功能测试」处理当前质量任务。",
      input: "测试目标、业务流程与项目约束",
      output: "覆盖核心业务流程、边界条件、风险优先级和证据要求的功能测试计划，并附可执行用例与结果复核说明",
      lang: "zh-cn",
    });

    expect(result).not.toContain("测试目标、业务流程与项目约束");
    expect(result).toContain("可执行用例与结果复核说明");
    expect(result.length).toBeGreaterThanOrEqual(70);
    expect(result).not.toContain("…");
  });

  it("describes tag and series archives with their actual topic, size, and page", () => {
    expect(buildBlogArchiveDescription({
      kind: "tag",
      name: "API Testing",
      totalItems: 28,
      currentPage: 2,
      totalPages: 3,
      lang: "en",
    })).toContain('Page 2 of 3: Browse 28 posts tagged “API Testing”');

    expect(buildBlogArchiveDescription({
      kind: "series",
      name: "接口自动化测试教程",
      totalItems: 28,
      currentPage: 1,
      totalPages: 3,
      lang: "zh-cn",
    })).toContain("接口自动化测试教程");

    expect(buildBlogArchiveDescription({
      kind: "series",
      name: "Software Testing Theory Guide",
      totalItems: 1,
      currentPage: 1,
      totalPages: 1,
      lang: "en",
    })).toContain('Read 1 post in the “Software Testing Theory Guide” series');
  });

  it("localizes a series display name without changing its source name", () => {
    expect(getBlogSeriesDisplayName("测试理论指南", "en")).toBe("Software Testing Theory Guide");
    expect(getBlogSeriesDisplayName("测试理论指南", "zh-cn")).toBe("测试理论指南");
    expect(getBlogSeriesDisplayName("Unknown Series", "en")).toBe("Unknown Series");
  });
});
