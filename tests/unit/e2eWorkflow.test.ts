import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const workflow = readFileSync(
  resolve(process.cwd(), "../.github/workflows/e2e.yml"),
  "utf8",
);
const testPackage = JSON.parse(readFileSync(resolve(process.cwd(), "package.json"), "utf8")) as {
  scripts: Record<string, string>;
};

describe("E2E workflow server lifecycle", () => {
  it("keeps CI on the TesterArmy runner without an external preview URL", () => {
    const runE2E = workflow.slice(workflow.indexOf("- name: Run E2E tests"));

    expect(runE2E).toContain("CI: true");
    expect(runE2E).not.toContain("PLAYWRIGHT_BASE_URL");
  });

  it("builds the current site before the default E2E command can preview it", () => {
    expect(testPackage.scripts.test).toContain("test:e2e:build");
    expect(testPackage.scripts["test:e2e"]).toContain("test:e2e:build");
    expect(testPackage.scripts["test:e2e:all"]).toContain("test:e2e");
  });

  it("runs only the E2E runner in CI after the workflow build", () => {
    expect(workflow).toContain("npm run test:e2e:run");
  });
});
