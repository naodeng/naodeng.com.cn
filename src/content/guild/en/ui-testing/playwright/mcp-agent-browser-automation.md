---
title: "Playwright MCP: Agent-Assisted Browser Exploration"
description: "Connect an MCP client to Playwright, investigate a controlled browser session, and turn evidence into durable Playwright Test coverage."
testType: ui-testing
framework: playwright
language: JavaScript/TypeScript
stage: advanced
difficulty: advanced
duration: 55
order: 4
officialDocs: https://playwright.dev/docs/getting-started-mcp
---

## Concept and goal

Playwright MCP is a Model Context Protocol server that gives a compatible AI client controlled browser automation through Playwright. Instead of asking a model to guess from pixels, the server returns structured accessibility snapshots. The agent can navigate, inspect the current page, use the exposed element references, fill a form, take a screenshot, and gather browser evidence. It can also inspect network requests and console output, or set up a mock route when the target and scenario are authorized. This makes it useful when an engineer needs to explore an unfamiliar flow, reproduce a reported UI failure, or collect the observations needed to write a test.

The goal is not to let an agent browse freely. The goal is to run a short, authorized investigation with a precise question, then preserve the important result as maintainable Playwright Test code. Playwright MCP is not a replacement for Playwright Test: MCP helps an agent explore and diagnose a live browser session, while Playwright Test provides reviewed source code, web-first assertions, deterministic fixtures, reports, traces, retries, and a repeatable CI gate. Keep those responsibilities separate.

Use a staging environment, a local test application, or another explicitly authorized target. Define the expected user-visible outcome before the agent connects. For example: “With a disposable member account, saving a display name shows the success status and sends one request to the approved profile API.” This gives the agent a bounded task and gives the engineer something concrete to verify. Never treat a successful exploration as evidence that every route, browser, or authorization rule is correct.

### Choose MCP when exploration adds value

MCP is valuable when the next stable assertion is not known yet: a failure report lacks reproduction steps, a new flow needs an accessibility-aware walkthrough, or network and console evidence are needed before choosing a locator. It is less useful for a known regression that already has a focused Playwright Test. In that case, run the test directly and inspect its trace. An agent loop has more moving parts than a checked-in test, so use it to reduce uncertainty rather than to replace ordinary test execution.

## Implementation steps

### 1. Bound the target, account, and permitted actions

Write a small investigation brief before configuring a client. State the allowed origin, the feature path, the disposable account, the expected result, and the actions the agent must not take. Do not use a real customer profile, production administrator session, payment action, or reusable browser profile. If the scenario changes data, make the data isolated and document how it will be reset. Tell the agent to stop after the requested flow and report the first discrepancy with its supporting evidence.

A useful brief names an observable answer: the visible message or URL, the important request status, and the evidence to return. For example, ask for the first failed request, relevant console message, accessibility snapshot, and screenshot. Avoid prompts such as “test the whole site” or “fix everything”; they create an unbounded action surface and an ambiguous result.

### 2. Add a restricted Playwright MCP server to the client

Playwright’s standard MCP configuration runs `@playwright/mcp` through `npx`. The browser is headed by default, which is useful while reviewing an agent’s work. The example below chooses an isolated profile for a fresh session and allows only the staging origin. Put this configuration in the MCP client’s own settings location; different clients use different filenames and menus. The command and core arguments are the same.

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest",
        "--isolated",
        "--allowed-origins=https://staging.example.test"
      ]
    }
  }
}
```

`--isolated` avoids carrying cookies and local storage from one investigation into the next. This matters because a persistent Playwright MCP profile is otherwise the default. Replace the example origin only with a target that you are permitted to automate. For a noninteractive worker, add `--headless`; for a browser comparison, add an explicit `--browser=firefox` or `--browser=webkit`. Check the [official MCP installation guide](https://playwright.dev/docs/getting-started-mcp) and [configuration options](https://playwright.dev/mcp/configuration/options) whenever you update Playwright, rather than copying an old client configuration forward.

### 3. Give the agent a reproducible investigation prompt

After the MCP server connects, use a narrowly worded request. The agent should begin by navigating and reading the accessibility snapshot, not by inventing selectors or issuing irreversible actions. It should verify every expected state through the browser and report what it observed, including a failure. The following prompt is an example for a disposable staging account; it is not a permission to use an arbitrary URL.

```text
Open https://staging.example.test/settings with the disposable member account.
Change only the display name to "Nao MCP" and save it once.
Verify the user-visible success status and record the request made to /api/profile.
If either observation differs from the expectation, stop and return the first
failed request, relevant console messages, an accessibility snapshot, and a
screenshot. Do not navigate outside the approved origin or perform other actions.
```

Network monitoring and mocking are useful here, but they are diagnostic tools rather than an assertion strategy. A mock response can expose how the UI handles a timeout or validation error; it does not prove that the production integration works. Likewise, a screenshot proves what was visible in one session, not that the agent selected the correct element in every state. Capture the target revision, account identity, browser, and configuration alongside the result.

### 4. Turn the evidence into a reviewed Playwright Test

Once the agent identifies stable roles, labels, response contracts, and expected text, implement the durable scenario in the repository. Keep the browser interaction in a small page object only where it makes a repeated domain action clearer; keep assertions in the test so the expected behavior remains visible. The test below represents the result of an MCP investigation, not a script copied blindly from the agent’s transcript.

```ts
import { expect, test, type Page } from '@playwright/test';

class AccountSettingsPage {
  constructor(private readonly page: Page) {}

  async saveDisplayName(name: string) {
    await this.page.getByLabel('Display name').fill(name);
    await this.page.getByRole('button', { name: 'Save' }).click();
  }
}

test('a member can save a display name', async ({ page }) => {
  await page.goto('/settings');
  const saveResponse = page.waitForResponse(
    (response) => response.url().endsWith('/api/profile') && response.request().method() === 'PATCH',
  );

  await new AccountSettingsPage(page).saveDisplayName('Nao MCP');

  await expect(page.getByRole('status')).toHaveText('Saved');
  await expect(await saveResponse).toBeOK();
});
```

This conversion is the quality gate. Review the locator, test account, cleanup, and assertion with the same care as any other source change. Do not keep an unexplained agent-generated test simply because it passed once. If the evidence identifies a product defect instead, keep the snapshot, screenshot, request details, and trace with the bug report, then write the regression test after the intended behavior is clarified.

## Run and verify

First, verify the client can start the server and open the approved test target. Use a harmless read-only walkthrough before exercising a data-changing path. Observe the headed browser when possible, and make sure the accessibility snapshot corresponds to the intended page. If the connection fails, check the MCP client log, Node.js version, browser download, and allowed-origin setting before changing the application or the test.

For a data-changing scenario, use a newly provisioned account and run a cleanup step that you can audit. Record the client version, Playwright MCP configuration, target revision, browser, time window, and prompt. This lets another engineer distinguish an application failure from a stale browser state or a prompt that exercised the wrong path. If you need long-lived CI evidence, run the checked-in Playwright Test instead of making an MCP conversation the release gate.

```bash
# Run the reviewed test produced from the investigation.
export BASE_URL=https://staging.example.test
npx playwright test tests/account-settings.spec.ts --project=chromium

# Inspect trace evidence after a failed run.
npx playwright show-trace test-results/**/trace.zip
```

### Read the result as evidence

A useful MCP result identifies the task, target, actions, and observed state. A useful Playwright Test result adds a stable assertion and a trace when it fails. Compare the network method, endpoint, status, and visible outcome with the written expectation. If the model reports success but the trace shows a redirect, retry, unexpected origin, or a different account, mark the run inconclusive and investigate that discrepancy. Do not rewrite the expected outcome to match an accidental result.

## Common pitfalls and boundaries

The most common mistake is giving an agent broad authority and then treating its prose summary as proof. Keep the origin allowlist narrow, use only disposable credentials, and avoid copying secrets into prompts, screenshots, storage-state files, or chat history. Do not expose a server bound to all interfaces unless the environment owner has reviewed the network boundary. A local MCP configuration is still a browser automation capability and deserves the same least-privilege review as other test tooling.

Avoid the unsafe code-execution capability unless the MCP client is trusted and the risk is explicitly accepted. Playwright documents `browser_run_code_unsafe` as equivalent to remote code execution, so it does not belong in an unreviewed client configuration. Prefer the normal browser tools and checked-in test code. If direct code execution is necessary for a one-off investigation, isolate the environment, remove secrets, review the client connection, and preserve only safe evidence.

### Troubleshooting order

When the agent cannot complete the request, check the target URL and allowed origin first; then confirm the browser profile mode and the test account; then inspect the latest accessibility snapshot and the first failed action; finally compare console and network evidence. This order prevents a cached login or blocked origin from being misdiagnosed as a selector issue. Change one condition at a time, keep the prompt focused, and reproduce the final finding with a normal Playwright Test whenever possible.

## CI/CD practice

Keep MCP exploration out of the standard per-commit gate unless the organization has explicitly designed a safe, observable agent workflow. The reliable CI artifact is the reviewed test created from the investigation. Install the browser deterministically, inject only protected staging variables, retain traces and screenshots on failure, and keep the test scope small enough for a pull request. Use a scheduled job or release-candidate environment for broader matrices and longer scenarios.

```yaml
name: Playwright regression
on: [pull_request]
jobs:
  verify-settings:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npx playwright install --with-deps chromium
      - run: npx playwright test tests/account-settings.spec.ts --project=chromium
        env:
          BASE_URL: ${{ secrets.STAGING_BASE_URL }}
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-evidence
          path: test-results/
```

The CI job should answer one narrow question: whether the approved, versioned test still satisfies its contract. MCP remains valuable before that point, when an engineer needs structured browser exploration and evidence. Keeping the handoff explicit makes both tools easier to audit, maintain, and trust.
