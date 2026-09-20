import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { inferQASkillRoles } from "@/data/qaSkillDetail";
import { extractCanonicalSections } from "@/utils/qaskillsSections";

const contentDirectory = path.resolve(process.cwd(), "../src/content/qaskills/zh-cn");

function readSkillFixture(slug: string) {
  const body = readFileSync(path.join(contentDirectory, `${slug}.md`), "utf8");
  const title = body.match(/^#\s+(.+)$/m)?.[1] ?? slug;
  const description = body.match(/^- description:\s*(.+)$/m)?.[1] ?? "";
  const bodyWithoutRaw = body.split("\n## 原始 SKILL.md")[0];
  return { slug, title, description, sections: extractCanonicalSections(bodyWithoutRaw) };
}

describe("inferQASkillRoles", () => {
  const allowedRoles = new Set(["QA", "BA", "PM", "DEV", "SRE / DevOps"]);

  it("assigns useful roles to every localized Skill source", () => {
    const slugs = readdirSync(contentDirectory)
      .filter((file) => file.endsWith(".md") && file !== "README.md")
      .map((file) => file.replace(/\.md$/, ""));
    const missing = slugs.filter((slug) => {
      const roles = inferQASkillRoles(readSkillFixture(slug));
      return roles["zh-cn"].length === 0 || roles.en.length === 0;
    });

    expect(missing).toEqual([]);
  });

  it("keeps every inferred role inside the compact role taxonomy", () => {
    const slugs = readdirSync(contentDirectory)
      .filter((file) => file.endsWith(".md") && file !== "README.md")
      .map((file) => file.replace(/\.md$/, ""));
    const unexpected = slugs.flatMap((slug) => {
      const roles = inferQASkillRoles(readSkillFixture(slug));
      return [...roles["zh-cn"], ...roles.en].filter((role) => !allowedRoles.has(role));
    });

    expect(unexpected).toEqual([]);
  });

  it("recognizes role signals from representative Skill content", () => {
    const apiRoles = inferQASkillRoles(readSkillFixture("api-test-restassure"));
    const requirementRoles = inferQASkillRoles(readSkillFixture("requirement-quality-review"));
    const performanceRoles = inferQASkillRoles(readSkillFixture("performance-testing"));

    expect(apiRoles["zh-cn"]).toEqual(["QA", "DEV"]);
    expect(requirementRoles["zh-cn"]).toEqual(["QA", "BA", "PM"]);
    expect(performanceRoles["zh-cn"]).toEqual(["QA", "SRE / DevOps"]);
  });
});
