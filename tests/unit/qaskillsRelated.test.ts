import { describe, it, expect } from "vitest";
import { getRelatedQASkills, type RelatedSkillInput } from "@/utils/qaskillsRelated";

const pool: RelatedSkillInput[] = [
  { slug: "bug-reporting", category: "type", subgroup: "defect-reporting" },
  { slug: "test-reporting", category: "type", subgroup: "defect-reporting" },
  { slug: "code-review", category: "type", subgroup: "defect-reporting" },
  { slug: "ai-assisted-testing", category: "type", subgroup: "defect-reporting" },
  { slug: "api-testing", category: "type", subgroup: "api-automation" },
  { slug: "daily-testing-workflow", category: "workflow", subgroup: "" },
  { slug: "sprint-testing-workflow", category: "workflow", subgroup: "" },
];

describe("getRelatedQASkills", () => {
  it("prefers same subgroup and excludes self", () => {
    const related = getRelatedQASkills(pool, "bug-reporting", 3);
    expect(related.map((s) => s.slug)).toEqual([
      "test-reporting",
      "code-review",
      "ai-assisted-testing",
    ]);
  });

  it("fills from same category when subgroup is short", () => {
    const related = getRelatedQASkills(pool, "api-testing", 3);
    expect(related[0].slug).not.toBe("api-testing");
    expect(related.length).toBe(3);
    expect(related.every((s) => s.category === "type")).toBe(true);
  });

  it("caps at limit", () => {
    expect(getRelatedQASkills(pool, "bug-reporting", 2)).toHaveLength(2);
  });
});
