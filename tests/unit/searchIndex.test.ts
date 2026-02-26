// Property 3: Search index coverage completeness
import { describe, it, expect } from "vitest";
import fc from "fast-check";

const TESTING_TYPES = [
  "accessibility-testing",
  "ai-assisted-testing",
  "api-testing",
  "automation-testing",
  "bug-reporting",
  "functional-testing",
  "manual-testing",
  "mobile-testing",
  "performance-testing",
  "requirements-analysis",
  "security-testing",
  "test-case-reviewer",
  "test-case-writing",
  "test-reporting",
  "test-strategy",
] as const;

const WORKFLOW_TYPES = ["daily", "sprint", "release"] as const;
const LANGS = ["en", "zh-cn"] as const;

type TestingType = (typeof TESTING_TYPES)[number];
type WorkflowType = (typeof WORKFLOW_TYPES)[number];
type Lang = (typeof LANGS)[number];

interface SearchIndexItem {
  title: string;
  description: string;
  url: string;
  date: string;
  tags?: string[];
  type?: string;
}

interface MockPrompt {
  data: { lang: Lang; testingType: TestingType; order: number; title: string; description: string };
}

interface MockWorkflow {
  data: { lang: Lang; workflowType: WorkflowType; order: number; title: string; description: string };
}

function buildMockPrompts(): MockPrompt[] {
  const entries: MockPrompt[] = [];
  let order = 1;
  for (const lang of LANGS) {
    for (const testingType of TESTING_TYPES) {
      entries.push({
        data: { lang, testingType, order: order++, title: `${testingType} ${lang}`, description: "desc" },
      });
    }
  }
  return entries;
}

function buildMockWorkflows(): MockWorkflow[] {
  const entries: MockWorkflow[] = [];
  let order = 1;
  for (const lang of LANGS) {
    for (const workflowType of WORKFLOW_TYPES) {
      entries.push({
        data: { lang, workflowType, order: order++, title: `${workflowType} ${lang}`, description: "desc" },
      });
    }
  }
  return entries;
}

// Replicate the index-building logic from search-index.json.ts
function buildSearchIndex(lang: Lang, allPrompts: MockPrompt[], allWorkflows: MockWorkflow[]): SearchIndexItem[] {
  const localePrompts = allPrompts.filter((p) => p.data.lang === lang);
  const promptTypeMap = new Map<string, MockPrompt>();
  for (const p of localePrompts.sort((a, b) => a.data.order - b.data.order)) {
    if (!promptTypeMap.has(p.data.testingType)) {
      promptTypeMap.set(p.data.testingType, p);
    }
  }
  const promptsIndex: SearchIndexItem[] = Array.from(promptTypeMap.values()).map((p) => ({
    title: p.data.title,
    description: p.data.description,
    url: `/${lang}/prompts/${p.data.testingType}/`,
    date: new Date().toISOString(),
    tags: [p.data.testingType],
    type: "prompts",
  }));

  const localeWorkflows = allWorkflows.filter((w) => w.data.lang === lang);
  const workflowsIndex: SearchIndexItem[] = localeWorkflows.map((w) => ({
    title: w.data.title,
    description: w.data.description,
    url: `/${lang}/prompts/workflows/${w.data.workflowType}/`,
    date: new Date().toISOString(),
    tags: [w.data.workflowType],
    type: "workflows",
  }));

  return [...promptsIndex, ...workflowsIndex];
}

describe("search index coverage (Property 3)", () => {
  const allPrompts = buildMockPrompts();
  const allWorkflows = buildMockWorkflows();

  it("for any locale, all testingType detail pages are indexed", () => {
    fc.assert(
      fc.property(fc.constantFrom(...LANGS), (lang) => {
        const index = buildSearchIndex(lang, allPrompts, allWorkflows);
        const promptUrls = index.filter((i) => i.type === "prompts").map((i) => i.url);
        for (const testingType of TESTING_TYPES) {
          expect(promptUrls).toContain(`/${lang}/prompts/${testingType}/`);
        }
      }),
      { numRuns: 50 }
    );
  });

  it("for any locale, all workflowType detail pages are indexed", () => {
    fc.assert(
      fc.property(fc.constantFrom(...LANGS), (lang) => {
        const index = buildSearchIndex(lang, allPrompts, allWorkflows);
        const workflowUrls = index.filter((i) => i.type === "workflows").map((i) => i.url);
        for (const workflowType of WORKFLOW_TYPES) {
          expect(workflowUrls).toContain(`/${lang}/prompts/workflows/${workflowType}/`);
        }
      }),
      { numRuns: 50 }
    );
  });

  it("prompts entries are deduplicated by testingType per locale", () => {
    for (const lang of LANGS) {
      const index = buildSearchIndex(lang, allPrompts, allWorkflows);
      const promptEntries = index.filter((i) => i.type === "prompts");
      expect(promptEntries).toHaveLength(TESTING_TYPES.length);
      const urls = promptEntries.map((i) => i.url);
      expect(new Set(urls).size).toBe(urls.length);
    }
  });

  it("each index item has required fields", () => {
    for (const lang of LANGS) {
      const index = buildSearchIndex(lang, allPrompts, allWorkflows);
      for (const item of index) {
        expect(typeof item.title).toBe("string");
        expect(typeof item.description).toBe("string");
        expect(typeof item.url).toBe("string");
        expect(item.url.startsWith(`/${lang}/`)).toBe(true);
        expect(["prompts", "workflows"]).toContain(item.type);
      }
    }
  });
});
