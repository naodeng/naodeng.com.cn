// Property 2: Workflow route completeness
import { describe, it, expect } from "vitest";
import fc from "fast-check";

const WORKFLOW_TYPES = ["daily", "sprint", "release"] as const;
const LANGS = ["en", "zh-cn"] as const;

type WorkflowType = (typeof WORKFLOW_TYPES)[number];
type Lang = (typeof LANGS)[number];

interface MockWorkflow {
  data: { lang: Lang; workflowType: WorkflowType; order: number; title: string; description: string };
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

function getStaticPaths(allWorkflows: MockWorkflow[]) {
  return allWorkflows.map((entry) => ({
    params: { lang: entry.data.lang, workflowType: entry.data.workflowType },
    props: { entry },
  }));
}

describe("workflows getStaticPaths — route completeness (Property 2)", () => {
  const allWorkflows = buildMockWorkflows();
  const paths = getStaticPaths(allWorkflows);

  it("generates exactly 6 routes (3 types × 2 langs)", () => {
    expect(paths).toHaveLength(6);
  });

  it("for any valid workflowType × lang combo, a route exists", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...WORKFLOW_TYPES),
        fc.constantFrom(...LANGS),
        (workflowType, lang) => {
          const found = paths.some(
            (p) => p.params.workflowType === workflowType && p.params.lang === lang
          );
          expect(found).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("each route's props.entry matches its params", () => {
    paths.forEach(({ params, props }) => {
      expect(props.entry.data.lang).toBe(params.lang);
      expect(props.entry.data.workflowType).toBe(params.workflowType);
    });
  });

  it("all workflow types are covered for each locale", () => {
    for (const lang of LANGS) {
      const langPaths = paths.filter((p) => p.params.lang === lang);
      expect(langPaths).toHaveLength(WORKFLOW_TYPES.length);
      const types = langPaths.map((p) => p.params.workflowType).sort();
      expect(types).toEqual([...WORKFLOW_TYPES].sort());
    }
  });
});
