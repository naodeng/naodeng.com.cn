import { describe, it, expect } from "vitest";
import {
  LIFECYCLE_PATH_STAGES,
  resolveLifecyclePath,
  type QASkill,
} from "@/utils/qaskills";

function stubSkill(partial: Pick<QASkill, "slug" | "title" | "category"> & Partial<QASkill>): QASkill {
  return {
    lang: "zh-cn",
    chineseName: partial.title,
    author: "naodeng",
    updatedAt: "2026-08-06",
    description: "",
    intro: "",
    subgroup: "",
    hasEvals: false,
    sourceSkillUrl: "",
    sourceRepoUrl: "https://github.com/naodeng/awesome-qa-skills",
    sections: {
      whenToUse: "",
      workflow: "",
      coreConstraints: "",
      progressiveDisclosure: "",
      checklist: "",
      pitfalls: "",
    },
    sectionHtml: {
      whenToUse: "",
      workflow: "",
      coreConstraints: "",
      progressiveDisclosure: "",
      checklist: "",
      pitfalls: "",
    },
    rawSkillMarkdown: "",
    installMarkdown: "",
    installHtml: "",
    ...partial,
  };
}

describe("LIFECYCLE_PATH_STAGES", () => {
  it("has 6 stages in lifecycle order with expected parent and plus slugs", () => {
    expect(LIFECYCLE_PATH_STAGES).toHaveLength(6);
    expect(LIFECYCLE_PATH_STAGES.map((s) => s.key)).toEqual([
      "requirements-strategy",
      "case-design-review",
      "functional-compatibility",
      "api-automation",
      "quality-specialties",
      "defect-reporting",
    ]);
    expect(LIFECYCLE_PATH_STAGES[0].typeSlugs).toEqual([
      "requirements-analysis",
      "test-strategy",
    ]);
    expect(LIFECYCLE_PATH_STAGES[0].plusSlugs).toEqual([
      "requirements-analysis-plus",
      "test-strategy-plus",
    ]);
    expect(LIFECYCLE_PATH_STAGES[3].typeSlugs).toEqual([
      "api-testing",
      "automation-testing",
    ]);
    expect(LIFECYCLE_PATH_STAGES[3].plusSlugs).toEqual([]);
    const allTypeSlugs = LIFECYCLE_PATH_STAGES.flatMap((s) => s.typeSlugs);
    expect(allTypeSlugs).not.toContain("api-test-bruno");
    expect(allTypeSlugs).not.toContain("performance-test-k6");
  });
});

describe("resolveLifecyclePath", () => {
  it("resolves type then plus nodes and skips missing slugs", () => {
    const skills = [
      stubSkill({ slug: "requirements-analysis", title: "需求分析", category: "type" }),
      stubSkill({ slug: "test-strategy-plus", title: "测试策略加强版", category: "plus" }),
      stubSkill({ slug: "api-test-bruno", title: "Bruno", category: "type" }),
    ];
    const stages = resolveLifecyclePath(skills, "zh-cn");
    const first = stages.find((s) => s.key === "requirements-strategy");
    expect(first?.title).toBe("需求与策略");
    expect(first?.nodes.map((n) => n.slug)).toEqual([
      "requirements-analysis",
      "test-strategy-plus",
    ]);
    expect(first?.nodes.map((n) => n.kind)).toEqual(["type", "plus"]);
    expect(first?.nodes[0].label).toBe("需求分析");
    expect(stages.find((s) => s.key === "api-automation")?.nodes).toEqual([]);
  });

  it("uses English stage titles when lang is en", () => {
    const stages = resolveLifecyclePath([], "en");
    expect(stages[0].title).toBe("Requirements & Strategy");
  });
});
