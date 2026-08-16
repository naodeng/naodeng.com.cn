import { describe, it, expect } from "vitest";
import {
  filterQASkills,
  isQASkillSearchActive,
  shouldShowEvalsFilter,
  type QASkillFilterInput,
} from "@/utils/qaskillsFilter";

const skills: QASkillFilterInput[] = [
  {
    slug: "api-testing",
    title: "API Testing",
    chineseName: "API 测试",
    category: "type",
    intro: "Design API test plans",
    hasEvals: true,
  },
  {
    slug: "daily-testing-workflow",
    title: "Daily Testing Workflow",
    chineseName: "日常测试工作流程",
    category: "workflow",
    intro: "Daily smoke and follow-up",
    hasEvals: false,
  },
  {
    slug: "test-strategy-plus",
    title: "test-strategy-plus",
    chineseName: "测试策略增强版",
    category: "plus",
    intro: "Deeper strategy skill",
    hasEvals: true,
  },
];

describe("filterQASkills", () => {
  it("returns all when query empty and filter all", () => {
    expect(filterQASkills(skills, { query: "", category: "all", evalsOnly: false })).toHaveLength(3);
  });

  it("filters by category", () => {
    expect(
      filterQASkills(skills, { query: "", category: "workflow", evalsOnly: false }).map((s) => s.slug)
    ).toEqual(["daily-testing-workflow"]);
  });

  it("filters evals only", () => {
    expect(
      filterQASkills(skills, { query: "", category: "all", evalsOnly: true }).map((s) => s.slug)
    ).toEqual(["api-testing", "test-strategy-plus"]);
  });

  it("matches query against title, chineseName, slug, intro (case-insensitive)", () => {
    expect(
      filterQASkills(skills, { query: "api 测", category: "all", evalsOnly: false }).map((s) => s.slug)
    ).toEqual(["api-testing"]);
    expect(
      filterQASkills(skills, { query: "SMOKE", category: "all", evalsOnly: false }).map((s) => s.slug)
    ).toEqual(["daily-testing-workflow"]);
  });
});

describe("isQASkillSearchActive", () => {
  it("returns false for the default state", () => {
    expect(isQASkillSearchActive({ query: "", category: "all", evalsOnly: false })).toBe(false);
  });

  it("treats whitespace-only query as empty", () => {
    expect(isQASkillSearchActive({ query: "   ", category: "all", evalsOnly: false })).toBe(false);
  });

  it("returns true for a text query", () => {
    expect(isQASkillSearchActive({ query: "api", category: "all", evalsOnly: false })).toBe(true);
  });

  it("returns true for a category filter", () => {
    expect(isQASkillSearchActive({ query: "", category: "type", evalsOnly: false })).toBe(true);
  });

  it("returns true for the evals filter", () => {
    expect(isQASkillSearchActive({ query: "", category: "all", evalsOnly: true })).toBe(true);
  });

  it("returns true for any combination of filters", () => {
    expect(isQASkillSearchActive({ query: "api", category: "workflow", evalsOnly: true })).toBe(true);
  });
});

describe("shouldShowEvalsFilter", () => {
  it("returns true when skills mix evals and no-evals", () => {
    expect(shouldShowEvalsFilter(skills)).toBe(true);
  });

  it("returns false when all skills have evals", () => {
    const allWithEvals = skills.map((s) => ({ ...s, hasEvals: true }));
    expect(shouldShowEvalsFilter(allWithEvals)).toBe(false);
  });

  it("returns false when no skill has evals", () => {
    const noneWithEvals = skills.map((s) => ({ ...s, hasEvals: false }));
    expect(shouldShowEvalsFilter(noneWithEvals)).toBe(false);
  });

  it("returns false for an empty list", () => {
    expect(shouldShowEvalsFilter([])).toBe(false);
  });
});
