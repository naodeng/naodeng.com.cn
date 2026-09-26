import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import {
  sortAiQaWeeklyEntries,
  type AiQaWeeklyEntry,
} from "../../src/data/aiQaWeekly";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const weeklyPageSource = readFileSync(
  resolve(projectRoot, "src/components/AiQaWeeklyPage.astro"),
  "utf8",
);
const weeklyTableOfContentsSource = readFileSync(
  resolve(projectRoot, "src/components/TableOfContents.astro"),
  "utf8",
);
const englishWeeklyContent = readFileSync(
  resolve(projectRoot, "src/content/ai-qa-weekly/en/2026/week-39.md"),
  "utf8",
);
const chineseWeeklyContent = readFileSync(
  resolve(projectRoot, "src/content/ai-qa-weekly/zh-cn/2026/week-39.md"),
  "utf8",
);

function entry(periodStart: string, weekNumber: number): AiQaWeeklyEntry {
  return {
    data: {
      periodStart: new Date(`${periodStart}T00:00:00Z`),
      publishedAt: new Date(`${periodStart}T00:00:00Z`),
      weekNumber,
    },
  } as unknown as AiQaWeeklyEntry;
}

describe("sortAiQaWeeklyEntries", () => {
  it("keeps the latest calendar period first across years", () => {
    const entries = [entry("2026-12-26", 52), entry("2027-01-02", 1)];

    expect(sortAiQaWeeklyEntries(entries).map((item) => item.data.periodStart.toISOString())).toEqual([
      "2027-01-02T00:00:00.000Z",
      "2026-12-26T00:00:00.000Z",
    ]);
  });
});

describe("AI-Native QA Weekly presentation contracts", () => {
  it("keeps desktop metadata dates readable in one line", () => {
    expect(weeklyPageSource).toMatch(
      /grid-template-columns:\s*minmax\(9rem,\s*1fr\)\s+minmax\(0,\s*2\.4fr\)\s+minmax\(4\.5rem,\s*0\.55fr\)/,
    );
    expect(weeklyPageSource).toMatch(
      /\.weekly-meta-item time\s*\{[^}]*white-space:\s*nowrap/s,
    );
  });

  it("keeps every weekly TOC item discoverable", () => {
    expect(weeklyPageSource).toMatch(
      /:global\(\.docs-toc-wrap \.toc-sidebar--right\)\s*\{[^}]*max-height:\s*min\(72vh/s,
    );
    expect(weeklyPageSource).toContain("scrollbar-width: thin");
    expect(weeklyTableOfContentsSource).toContain(".toc-sidebar--right");
  });

  it("uses a reader-facing English issue summary", () => {
    expect(englishWeeklyContent).toContain(
      "This issue covers agent risk remediation",
    );
    expect(englishWeeklyContent).not.toContain(
      "This edition contains the same 10 items as the Chinese edition",
    );
  });

  it("avoids en dashes in visible weekly titles", () => {
    expect(englishWeeklyContent).not.toContain("–");
    expect(chineseWeeklyContent).not.toContain("–");
    expect(englishWeeklyContent).toContain("0.3.266-0.3.269");
    expect(chineseWeeklyContent).toContain("0.3.266-0.3.269");
  });
});
