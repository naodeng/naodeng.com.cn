---
title: "Playwright: Network Control, Traces, and Page Objects"
description: "Control dependencies, diagnose failures with traces, and organize repeated UI actions."
testType: ui-testing
framework: playwright
language: JavaScript/TypeScript
stage: advanced
difficulty: advanced
duration: 50
order: 3
officialDocs: https://playwright.dev/docs/trace-viewer
---

## Concept and goal

Playwright Test is an end-to-end framework that bundles a runner, web-first assertions, isolated browser contexts, parallel execution, and rich diagnostics. It supports Chromium, Firefox, and WebKit with one API, making it suitable for modern web flows that need fast local feedback and CI evidence. This guide turns that capability into a controlled dependency with trace-based diagnosis. Scale the design only after its basic behavior is repeatable. Advanced work here means isolating dependencies, modeling realistic traffic or browser state, and collecting enough diagnostics to explain a failure. It does not mean increasing parallelism or introducing a page-object abstraction just because the tool supports it. Start from an authorized, disposable target such as a staging environment or a local test application. Record the target version, test data source, and owner of the result before running anything. That context prevents a technically successful run from being misread as release approval.

The pass condition is deliberately observable: a response meets its contract, a user-visible state appears, or a bounded load run stays within the agreed objective. Write the objective in one sentence before editing the test. For example: “the saved-profile flow returns a visible confirmation under the supported browser and test account.” It is stronger than “the script completed,” because it states what a real user or service consumer needs.

### Decide the signal before the mechanics

Choose one primary signal and one diagnostic signal. The primary signal is the status code, user-visible message, percentile, or transaction result that decides pass or fail. The diagnostic signal is the report, trace, screenshot, JTL, browser log, or server metric used to explain a failure. Keep environment variables and test data outside the source file. This makes the same tutorial runnable locally and in CI without committing credentials or accidentally targeting production.

## Implementation steps

### 1. Prepare a controlled environment

Create a clean workspace, verify the runtime, and make the target explicit. Do not continue if the test target is unavailable or the account is shared with another parallel run. The command below is a setup check, not load or regression evidence; save its output with the change when an installation issue is being investigated.

```bash
npm init playwright@latest
npx playwright install --with-deps
npx playwright test --project=chromium
```

### 2. Implement the smallest tool-specific scenario

Build the scenario around one observable outcome, then name the action in domain language. For Playwright Test, the code below is intentionally small enough to debug. Replace the placeholder target and selector or endpoint only after you can explain why the new value is stable. Keep the assertion close to the action it validates so a reviewer can tell whether the failure is setup, interaction, response, or verification.

```ts
import { test, expect } from '@playwright/test';

test('a member saves profile details', async ({ page }) => {
  await page.goto('/settings');
  await page.getByLabel('Display name').fill('Nao');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('status')).toHaveText('Saved');
  await expect(page).toHaveURL(/settings/);
});
```

### 3. Make the behavior repeatable

Turn the scenario into a named file, place data in a dedicated fixture or CSV, and pass the target from an environment variable. This is the point to add the network-traces-and-page-objects concern: use the tool’s native waiting, transaction, interception, report, or configuration mechanism rather than a generic sleep or hidden global default. The following command/configuration keeps the focus on a controlled dependency with trace-based diagnosis; it is also a useful smoke command for a pull request.

```ts
// playwright.config.ts: make target and evidence explicit
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL || 'https://staging.example.test',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  reporter: [['html', { open: 'never' }]],
});

// Run the focused network-traces-and-page-objects scenario.
// npx playwright test tests/network_traces_and_page_objects.spec.ts --project=chromium
```

## Run and verify

Run only against the authorized target and begin with the smallest safe scope. A local green result means the scenario’s stated contract passed under this configuration; it does not establish capacity, accessibility, security, or every browser/device combination. Capture the command, target revision, time window, test-data identity, and output directory so another engineer can reproduce the result.

```bash
export BASE_URL=https://staging.example.test
mkdir -p artifacts
npx playwright test --project=chromium --reporter=html
```

### Read the result as evidence

The terminal should report the selected project and a passing test. Open the HTML report to inspect steps and attachments; if a retry occurs, inspect the trace before changing the selector or timeout. A trace shows actions, DOM snapshots, screenshots, and network activity, which separates an application defect from a timing or fixture defect. Compare the actual outcome with the written threshold, not with a previous green build. If the target is slow or unavailable, mark the run as inconclusive and preserve the evidence; do not silently retry until it turns green. For performance work, correlate injector and service metrics. For UI work, reproduce the failed state with the trace or screenshot before changing a locator, fixture, or timeout.

## Common pitfalls and boundaries

Do not use CSS chains when a role or label expresses the intent, hard-code live third-party data, or call page.waitForTimeout as synchronization. page.route is useful for a controlled dependency but does not replace a contract or production-integration check. Keep authentication storage state private and remove it from uploaded artifacts. A tutorial sample also has a scope boundary: it demonstrates a technique, not an authorization to test an arbitrary public service. Use rate limits, anonymized data, and an agreed maintenance window when load or destructive actions are involved. Redact tokens, cookies, personally identifiable data, and internal URLs from screenshots, reports, and CI artifacts before sharing them.

### Troubleshooting order

When a run fails, check in this order: target reachability; selected runtime and version; fixture/data validity; the first failed request or user action; then the diagnostic artifact. This ordering prevents a test framework symptom from hiding an application regression. Change one hypothesis at a time and re-run the focused command. A failure that cannot be reproduced with retained evidence should remain a risk, not be dismissed as “flaky.”

## CI/CD practice

Make the CI job bounded and reproducible: lock dependencies, install the required browser or Java/Python runtime, inject only protected variables, run the focused gate, and upload diagnostics even when the job fails. The example does not put real secrets in YAML; configure them in the CI provider. Keep long-running load tests and destructive flows out of a per-commit gate unless the environment owner has explicitly approved their cost and blast radius.

```yaml
name: Playwright Test regression
on: [pull_request]
jobs:
  verify:
    runs-on: ubuntu-latest
    timeout-minutes: 20
    steps:
      - uses: actions/checkout@v4
      - name: Install runtime
        run: |
          npm ci
          npx playwright install --with-deps chromium
      - name: Run bounded test
        env:
          BASE_URL: ${{ secrets.STAGING_BASE_URL }}
        run: |
          npx playwright test --project=chromium
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-evidence
          path: artifacts/
```

Review the artifact before treating a green job as a release signal. CI should answer a narrow question quickly; scheduled or release-candidate jobs can add wider browser matrices, longer durations, and controlled data refreshes. Document the difference so the team does not mistake a smoke gate for full system validation.
