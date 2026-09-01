import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const repoRoot = resolve(import.meta.dirname, "../..");
const frameworks = ["jmeter", "selenium", "playwright", "cypress"];
const testTypes: Record<string, string> = {
  jmeter: "performance-testing",
  selenium: "ui-testing",
  playwright: "ui-testing",
  cypress: "ui-testing",
};
const articlePaths: Record<string, string[]> = {
  jmeter: [
    "getting-started",
    "http-requests-and-assertions",
    "load-models-and-reporting",
    "ci-cd-integration",
    "best-practices",
  ],
  selenium: [
    "getting-started",
    "locators-waits-and-assertions",
    "page-objects-and-grid",
    "ci-cd-integration",
    "best-practices",
  ],
  playwright: [
    "getting-started",
    "locators-and-auto-waiting",
    "network-traces-and-page-objects",
    "mcp-agent-browser-automation",
    "ci-cd-integration",
    "best-practices",
  ],
  cypress: [
    "getting-started",
    "selectors-retries-and-assertions",
    "network-control-and-test-isolation",
    "ci-cd-integration",
    "best-practices",
  ],
};

const signatures: Record<string, RegExp> = {
  jmeter: /(?:\.jmx|Thread Group|线程组|jmeter\s+-n)/i,
  selenium: /(?:WebDriverWait|webdriver|WebDriver|Selenium Manager)/i,
  playwright: /(?:getByRole|page\.route|npx playwright|Playwright Test)/i,
  cypress: /(?:cy\.|cy\.intercept|Cypress)/i,
};

function bodyOf(file: string) {
  return readFileSync(file, "utf8").replace(/^---[\s\S]*?---\n/, "").trim();
}

describe("new Guild guide quality", () => {
  for (const framework of frameworks) {
    const directory = resolve(repoRoot, "src/content/guild");
    for (const article of articlePaths[framework]) {
      it(`${framework}/${article} has substantial bilingual, actionable guidance`, () => {
        const english = bodyOf(resolve(directory, "en", testTypes[framework], framework, `${article}.md`));
        const chinese = bodyOf(resolve(directory, "zh-cn", testTypes[framework], framework, `${article}.md`));

        // Each guide must be a usable tutorial, not an outline with a code fragment.
        expect(english.split(/\s+/).length).toBeGreaterThanOrEqual(600);
        expect(chinese.replace(/\s+/g, "").length).toBeGreaterThanOrEqual(2200);
        expect((english.match(/^```/gm) ?? []).length).toBeGreaterThanOrEqual(6);
        expect((chinese.match(/^```/gm) ?? []).length).toBeGreaterThanOrEqual(6);
        expect((english.match(/^###\s+/gm) ?? []).length).toBeGreaterThanOrEqual(4);
        expect((chinese.match(/^###\s+/gm) ?? []).length).toBeGreaterThanOrEqual(4);

        expect(english).toMatch(/## (?:Concept and goal|Implementation steps|Run and verify|Common pitfalls and boundaries|CI\/CD practice)/);
        expect(chinese).toMatch(/## (?:概念与目标|实施步骤|运行与验证|常见问题与边界|CI\/CD 实践)/);
        expect(english).toMatch(/## Run and verify/);
        expect(chinese).toMatch(/## 运行与验证/);
        expect(english).toMatch(/## Common pitfalls and boundaries/);
        expect(chinese).toMatch(/## 常见问题与边界/);
        expect(english).toMatch(/CI\/CD/);
        expect(chinese).toMatch(/CI\/CD/);
        expect(english).toMatch(signatures[framework]);
        expect(chinese).toMatch(signatures[framework]);
      });
    }
  }

  it("documents a safe bilingual Playwright MCP workflow", () => {
    const directory = resolve(repoRoot, "src/content/guild");
    const english = bodyOf(resolve(directory, "en", "ui-testing", "playwright", "mcp-agent-browser-automation.md"));
    const chinese = bodyOf(resolve(directory, "zh-cn", "ui-testing", "playwright", "mcp-agent-browser-automation.md"));

    expect(english).toMatch(/Playwright MCP/);
    expect(chinese).toMatch(/Playwright MCP/);
    expect(english).toMatch(/@playwright\/mcp@latest/);
    expect(chinese).toMatch(/@playwright\/mcp@latest/);
    expect(english).toMatch(/not (?:a replacement|replace) for Playwright Test/i);
    expect(chinese).toMatch(/不能替代 Playwright Test/);
    expect(english).toMatch(/allowed-origins/);
    expect(chinese).toMatch(/allowed-origins/);
  });
});
