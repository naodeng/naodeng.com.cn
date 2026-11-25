# Cypress UI Testing (EN)

Author: naodeng

## Metadata
- slug: ui-test-cypress
- category: type
- hasEvals: true
- syncedAt: 2026-11-25
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/ui-test-cypress/SKILL.md
- description: Use this skill when you need to design Cypress e2e and component testing plans with commands, fixtures, network stubbing, and CI reporting; triggers include Cypress UI testing, UI automation testing, and ui-test-cypress.

## When to Use

- Need outputs that should land in a Cypress UI testing workflow.
- The project already uses Cypress or wants Cypress-ready planning.

## Workflow

1. Open `prompts/ui-test-cypress.md` and use it as the main prompt.
2. Add the real project context: scope, environment, constraints, risks, dependencies, and expected deliverable.
3. If the input is incomplete, return a usable first version and mark missing information and assumptions.

## Common Pitfalls

- Do not use it with vague scope and no context.
- Do not treat every area as equally important.
- Do not skip assumptions and missing information.

## Raw SKILL.md

```markdown
---
name: ui-test-cypress
description: Use this skill when you need to design Cypress e2e and component testing plans with commands, fixtures, network stubbing, and CI reporting; triggers include Cypress UI testing, UI automation testing, and ui-test-cypress.
license: PolyForm-Noncommercial-1.0.0
metadata:
  version: "1.0.0"
  compatibility: ""
  author: "Awesome QA Skills contributors"
  language: "en"
  category: "testing-types"
  source: "https://github.com/naodeng/awesome-qa-skills"
  license-url: "https://polyformproject.org/licenses/noncommercial/1.0.0"
---

# Cypress UI Testing (EN)

**Chinese version：** See the corresponding Chinese skill.

## When to Use

- Need outputs that should land in a Cypress UI testing workflow.
- The project already uses Cypress or wants Cypress-ready planning.

## Output Format Options

Markdown by default unless the request explicitly asks for another format.

## How to Use

1. Open `prompts/ui-test-cypress.md` and use it as the main prompt.
2. Add the real project context: scope, environment, constraints, risks, dependencies, and expected deliverable.
3. If the input is incomplete, return a usable first version and mark missing information and assumptions.

## Reference Files

- When calibrating domain outcomes, valid controls, or evidence gaps, read [references/domain-decision-example.md](references/domain-decision-example.md) for sanitized input, per-item oracles, and reproducible calculations.

- `prompts/ui-test-cypress.md`: main prompt for this skill.
- `references/framework-spec.md`: tool-specific structure and coverage notes.
- `references/setup-and-ci.md`: setup, execution, and CI notes.
- `examples/sample-context.md`: sample request context.
- `scripts/run-tests.sh`: lightweight local execution entry point.

## Domain Execution Essentials

1. Read Cypress, Node, browser, config, and component/E2E scope from project artifacts. Generate compatible config, custom commands, specs, and CI commands without implicit upgrades or mixed legacy formats.
2. Exercise real page/component logic; cy.intercept replaces only confirmed external boundaries. Stub responses alone cannot prove business postconditions. Define isolated fixture data/session cleanup.
3. Separate retryable queries/assertions, one-time actions, and whole-test retries. Wait on aliased requests/observable states, not sleeps. Preserve first failures and prevent repeated effects.
4. Use minimum-app positive/negative controls for paid state, amount, and principal. Correct titles with wrong business state must fail assertions and CI. Preserve screenshots/video/failures, teardown, and actual run evidence; files alone prove nothing.

## Common Pitfalls

- Do not use it with vague scope and no context.
- Do not treat every area as equally important.
- Do not skip assumptions and missing information.

## Best Practices

- Start from the prompt file, then add only the context that matters.
- Keep the output risk-driven and executable.
- If the request is incomplete, return a usable first version and mark gaps.

- To verify generated business assertions, failure propagation or isolation, read [evals/fixtures/checkout-app/README.md](evals/fixtures/checkout-app/README.md) and its local good/bug/timeout controls; execute only when a run is requested.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-cypress/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-cypress/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-cypress/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-cypress/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-cypress/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-cypress/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-cypress/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-cypress/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-cypress/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-cypress/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-cypress/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-cypress/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill ui-test-cypress
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[ui-test-cypress](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/ui-test-cypress/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
