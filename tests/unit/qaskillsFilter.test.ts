import { describe, it, expect } from "vitest";
import { filterQASkills, type QASkillFilterInput } from "@/utils/qaskillsFilter";

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
