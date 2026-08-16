import { afterAll, beforeAll, describe, expect, it } from "vitest";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  HOME_EXAMPLES,
  HOME_PRIMARY_MODES,
  HOME_TASK_ENTRIES,
} from "../../src/data/homeTaskEntries";
import {
  PROMPT_EXAMPLES,
  PROMPT_QUICK_STEPS,
  PROMPT_TYPE_COPY,
  PROMPT_VERSION_GUIDE,
} from "../../src/data/promptLibrary";
import {
  getQASkillCardIntro,
  getQASkillCardSummary,
  QA_SKILL_STARTER_PATHS,
  QA_SKILL_TOOLS,
  RECOMMENDED_QA_SKILL_SLUGS,
} from "../../src/data/qaSkillLibrary";
import { getQASkillsGrouped } from "../../src/utils/qaskills";

const languages = ["en", "zh-cn"] as const;

// getQASkillsGrouped resolves content paths from process.cwd(); Vitest runs from tests/.
const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

describe("content entry configuration", () => {
  it.each(languages)("defines complete homepage entries for %s", (lang) => {
    expect(HOME_PRIMARY_MODES[lang]).toHaveLength(3);
    expect(HOME_TASK_ENTRIES[lang]).toHaveLength(6);
    expect(HOME_EXAMPLES[lang]).toHaveLength(3);
    expect(new Set(HOME_TASK_ENTRIES[lang].map((item) => item.key)).size).toBe(6);
  });

  it.each(languages)("defines the full Prompt selection flow for %s", (lang) => {
    expect(PROMPT_VERSION_GUIDE[lang].map((item) => item.version)).toEqual([
      "Standard",
      "ROSES",
      "LangGPT",
      "ICIO",
      "CRISPE",
      "RISE",
    ]);
    expect(PROMPT_VERSION_GUIDE[lang].filter((item) => item.recommended)).toEqual([
      expect.objectContaining({ version: "Standard" }),
    ]);
    expect(Object.keys(PROMPT_TYPE_COPY[lang])).toHaveLength(15);
    expect(PROMPT_QUICK_STEPS[lang]).toHaveLength(5);
    expect(PROMPT_EXAMPLES[lang]).toHaveLength(3);
  });

  it("keeps supported tools, starter paths, and recommendations unique", () => {
    expect(QA_SKILL_TOOLS).toEqual([
      "codex",
      "cursor",
      "claudecode",
      "kiro",
      "opencode",
      "trae",
    ]);
    expect(QA_SKILL_STARTER_PATHS).toEqual(["search", "discover", "lifecycle"]);
    expect(new Set(RECOMMENDED_QA_SKILL_SLUGS).size).toBe(
      RECOMMENDED_QA_SKILL_SLUGS.length,
    );
    expect(RECOMMENDED_QA_SKILL_SLUGS).toContain("discover-testing");
  });

  it("uses a bounded fallback only for generic recommended Skill copy", () => {
    expect(
      getQASkillCardIntro(
        {
          slug: "requirements-analysis",
          intro: "需要在真实项目里处理 requirements analysis 相关任务。",
        },
        "zh-cn",
      ),
    ).toContain("需求文档");
    expect(
      getQASkillCardIntro(
        { slug: "api-testing", intro: "需要 API 测试方案、API 用例或 API 风险分析。" },
        "zh-cn",
      ),
    ).toBe("需要 API 测试方案、API 用例或 API 风险分析。");
  });
});

describe("catalog skill summaries", () => {
  beforeAll(() => process.chdir(REPO_ROOT));
  afterAll(() => process.chdir(REPO_ROOT));

  it.each(languages)("provides complete summaries for every catalog skill (%s)", async (lang) => {
    const grouped = await getQASkillsGrouped(lang);
    const all = [...grouped.testingTypes, ...grouped.testingWorkflows, ...grouped.plus];
    expect(all.length).toBeGreaterThan(0);
    for (const skill of all) {
      const summary = getQASkillCardSummary(skill, lang);
      expect(summary.whenToUse, `${skill.slug}.whenToUse`).not.toBe("");
      expect(summary.input, `${skill.slug}.input`).not.toBe("");
      expect(summary.output, `${skill.slug}.output`).not.toBe("");
      expect(summary.humanReview, `${skill.slug}.humanReview`).not.toBe("");
      expect(summary.whenToUse).not.toMatch(/处理相关任务|related task/i);
    }
  });
});
