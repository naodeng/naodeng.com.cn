import { afterAll, beforeAll, describe, expect, it } from "vitest";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { HOME_TASK_ENTRIES } from "@/data/homeTaskEntries";
import { getQASkillsGrouped } from "@/utils/qaskills";
import type { Lang } from "@/i18n";

const REPO_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);

const languages: Lang[] = ["en", "zh-cn"];

// Expected task → skill mapping per the site's current qaskills collection.
const EXPECTED_TARGETS: Record<string, string[]> = {
  requirements: ["requirements-analysis"],
  strategy: ["test-strategy"],
  "test-cases": ["test-case-writing", "test-case-reviewer"],
  automation: ["api-testing", "automation-testing"],
  bugs: ["bug-reporting"],
  reporting: ["test-reporting"],
};

describe("home task routing", () => {
  // getQASkillsGrouped resolves content paths from process.cwd(); Vitest runs from tests/.
  beforeAll(() => process.chdir(REPO_ROOT));
  afterAll(() => process.chdir(REPO_ROOT));

  it.each(languages)("uses the same task keys and order for %s", (lang) => {
    expect(HOME_TASK_ENTRIES[lang].map((entry) => entry.key)).toEqual([
      "requirements",
      "strategy",
      "test-cases",
      "automation",
      "bugs",
      "reporting",
    ]);
  });

  it.each(languages)("maps each task to the expected skills for %s", (lang) => {
    for (const entry of HOME_TASK_ENTRIES[lang]) {
      expect(entry.targets.map((target) => target.slug)).toEqual(
        EXPECTED_TARGETS[entry.key],
      );
    }
  });

  it.each(languages)("keeps every target labeled and described in %s", (lang) => {
    for (const entry of HOME_TASK_ENTRIES[lang]) {
      for (const target of entry.targets) {
        expect(target.label.trim()).not.toBe("");
        expect(target.description.trim()).not.toBe("");
      }
    }
  });

  it.each(languages)("points every target at an existing qaskills skill for %s", async (lang) => {
    const grouped = await getQASkillsGrouped(lang);
    const available = new Set(grouped.testingTypes.map((skill) => skill.slug));
    for (const entry of HOME_TASK_ENTRIES[lang]) {
      for (const target of entry.targets) {
        expect(target.kind).toBe("skill");
        expect(available.has(target.slug), `${target.slug} missing in qaskills ${lang}`).toBe(true);
      }
    }
  });

  it("covers every entry in every language without leftovers", () => {
    const enKeys = new Set(HOME_TASK_ENTRIES.en.map((entry) => entry.key));
    const zhKeys = new Set(HOME_TASK_ENTRIES["zh-cn"].map((entry) => entry.key));
    expect(enKeys).toEqual(zhKeys);
    expect(Object.keys(EXPECTED_TARGETS)).toEqual([...enKeys]);
  });
});
