import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const workflow = readFileSync(
  resolve(process.cwd(), "../.github/workflows/e2e.yml"),
  "utf8",
);

describe("E2E workflow server lifecycle", () => {
  it("lets Playwright start the preview server in CI", () => {
    const runE2E = workflow.slice(workflow.indexOf("- name: Run E2E tests"));

    expect(runE2E).toContain("CI: true");
    expect(runE2E).not.toContain("PLAYWRIGHT_BASE_URL");
  });
});
