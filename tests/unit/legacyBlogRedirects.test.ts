import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const REPO_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);

const redirects = readFileSync(
  path.join(REPO_ROOT, "public", "_redirects"),
  "utf8",
);

const legacyEnglishBlogPaths = [
  "qa-glossary-wiki/qa-glossary-wiki-acceptance-testing",
  "others/edge-enablenew-ui",
  "performance-testing/k6-tutorial-advanced-usage-output-html-report-and-ci-cd-integration",
  "others/80-20-rule",
  "qa-glossary-wiki/qa-glossary-wiki-ad-hoc-testing",
  "qa-glossary-wiki/qa-glossary-wiki-a-b-testing",
  "ui-automation-testing/ui-testing-best-practice-real-life-examples-from-unreadable-react-component-tests-to-simple-ones",
  "others/cypress-demo2",
  "performance-testing/k6-tutorial-common-functions-2-thresholds-test-lifecycle-and-scenarios",
  "qa-glossary-wiki/qa-glossary-wiki-backward-compatibility",
  "others/cypress-demo6",
  "performance-testing/gatling-tool-intro1",
  "qa-glossary-wiki/qa-glossary-wiki-alpha-testing",
  "performance-testing/gatling-tool-intro-advanced-usage",
  "qa-glossary-wiki/qa-glossary-wiki-agile-development",
  "qa-glossary-wiki/qa-glossary-wiki-astqb",
  "qa-glossary-wiki/qa-glossary-wiki-agile-testing",
  "ui-automation-testing/ui-testing-best-practice-advanced-test-states-and-test-flake",
  "others/cypress-demo1",
  "ui-automation-testing/ui-testing-best-practice-testing-strategy--1-component-tests-vs-ui-integration-tests-vs-e2e-tests",
  "others/30-days-of-agile-testing",
  "others/different-types-of-ai-join-waiting-list",
  "performance-testing/gatling-tool-intro-ci-cd-integration",
  "ui-automation-testing/ui-testing-best-practice-testing-strategy-2-more-reasonable-testing-strategy-for-ui-testing",
  "ui-automation-testing/ui-testing-best-practice-beginners-top-to-botton-approach",
  "others/cypress-demo3",
  "performance-testing/gatling-tool-intro2",
  "ui-automation-testing/ui-testing-best-practice-generic-best-practices-1-await-dont-sleep-and-name-test-files-wisely",
  "qa-glossary-wiki/qa-glossary-wiki-acceptance-test-driven-development",
  "others/playwright-get-started",
  "performance-testing/k6-tutorial-advanced-usage-how-to-quickly-writing-k6-performance-test-script",
  "others/cypress-demo5",
  "ui-automation-testing/ui-testing-best-practice-real-life-examples-test-front-end-with-integration-back-end-with-e2e",
  "qa-glossary-wiki/qa-glossary-wiki-actual-result",
  "ui-automation-testing/ui-testing-best-practice-server-communication-testing-test-the-request-and-response-payloads-and-monitoring-tests",
  "qa-glossary-wiki/qa-glossary-wiki-api",
  "ui-automation-testing/ui-testing-best-practice-advanced-combinatorial-testing-and-performance-testing",
  "others/cypress-demo4",
  "qa-glossary-wiki/qa-glossary-wiki-analytical-test-strategy",
  "ui-automation-testing/ui-testing-best-practice-generic-best-practices-2-ui-tests-debugging-best-practices-and-reaching-ui-state",
  "ui-automation-testing/ui-testing-best-practice-tools-ui-testing-problems-cypress",
  "ui-automation-testing/ui-testing-best-practice-tools-visual-regression-testing",
  "ui-automation-testing/ui-testing-best-practice-advanced-email-testing",
  "qa-glossary-wiki/qa-glossary-wiki-back-to-back-testing",
];

describe("GSC-confirmed legacy English blog redirects", () => {
  it("redirects every old English URL with an existing Chinese equivalent", () => {
    expect(legacyEnglishBlogPaths).toHaveLength(44);
    for (const id of legacyEnglishBlogPaths) {
      expect(redirects).toContain(
        `/en/blog/${id}/ /zh-cn/blog/${id}/ 301`,
      );
    }
  });
});
