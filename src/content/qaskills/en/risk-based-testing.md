# Risk-Based Testing

Author: naodeng

## Metadata
- slug: risk-based-testing
- category: type
- hasEvals: true
- syncedAt: 2026-09-15
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/risk-based-testing/SKILL.md
- description: Use this skill when you need to turn quality risks into prioritized test objectives, depth, methods, and scope tradeoffs; triggers include risk-based testing.

## When to Use

- Use it when business criticality, change surface, past defects, or failure modes must determine test order and depth.
- Use it when time, environment, or capacity is constrained and the tradeoffs between focus, sampling, and deferral must be explicit.
- Use it when risk evidence is incomplete but a bounded priority view with assumptions and triggers is useful.

Do not use it only to identify quality risks, write a complete test strategy, select an existing executable set, or announce release readiness.

## Workflow

1. Read and follow `prompts/risk-based-testing.md`, starting with the six-part input audit.
2. Link risk source, failure mode, impact, likelihood/uncertainty, and detectability to a test objective.
3. Record priority, level/method, depth, scope tradeoff, and required evidence in `RBT-##` entries.
4. Define stop conditions, expansion triggers, residual risk, and Human decisions for constrained work.
5. Never turn unsupported numbers, risk grades, or test recommendations into facts or execution results.

## Core Constraints

- `RBT-##` is a test-decision recommendation, not risk acceptance, a quality score, coverage proof, or release approval.
- Risk ratings need evidence and assumptions; without data, use qualitative levels and state uncertainty rather than pseudo-precise numbers.
- Do not generate a full test strategy or replace `quality-risk-analysis`, `test-strategy`, or regression-test selection.
- Do not select concrete existing test IDs, execute tests, or invent environments, thresholds, defects, or pass results.

## Common Pitfalls

- Listing risks without saying how they change test priority and depth.
- Using a risk score instead of evidence and tradeoff rationale.
- Turning a full strategy, regression set, or execution result into this Skill.
- Silently dropping a high-risk area under time pressure without an expansion trigger or residual-risk statement.

## Raw SKILL.md

```markdown
---
name: risk-based-testing
description: Use this skill when you need to turn quality risks into prioritized test objectives, depth, methods, and scope tradeoffs; triggers include risk-based testing.
---

# Risk-Based Testing

Translate supplied quality risks, failure modes, and delivery constraints into evidence-backed test priority, level/method, depth, and scope tradeoffs. Produce `RBT-##` decisions. This is not a full test strategy; it does not replace risk analysis or regression selection, and it does not execute tests.

## When to Use

- Use it when business criticality, change surface, past defects, or failure modes must determine test order and depth.
- Use it when time, environment, or capacity is constrained and the tradeoffs between focus, sampling, and deferral must be explicit.
- Use it when risk evidence is incomplete but a bounded priority view with assumptions and triggers is useful.

Do not use it only to identify quality risks, write a complete test strategy, select an existing executable set, or announce release readiness.

## Output Format Options

- Use Markdown by default; when a table, CSV, or JSON is requested, preserve the same evidence, status, impact, owner, and validation fields.
- Do not present a structured format or static inventory as execution, pass, approval, or release evidence.

## How to Use

1. Read this Skill's primary prompt and provide the objective, scope, material, environment, and available evidence.
2. Follow the prompt's input audit and output contract; deliver a bounded first pass when information is incomplete.
3. Retain source, evidence status, impact, owner role, close condition, and validation method for every finding.

## Workflow

1. Read and follow `prompts/risk-based-testing.md`, starting with the six-part input audit.
2. Link risk source, failure mode, impact, likelihood/uncertainty, and detectability to a test objective.
3. Record priority, level/method, depth, scope tradeoff, and required evidence in `RBT-##` entries.
4. Define stop conditions, expansion triggers, residual risk, and Human decisions for constrained work.
5. Never turn unsupported numbers, risk grades, or test recommendations into facts or execution results.

## Core Constraints

- `RBT-##` is a test-decision recommendation, not risk acceptance, a quality score, coverage proof, or release approval.
- Risk ratings need evidence and assumptions; without data, use qualitative levels and state uncertainty rather than pseudo-precise numbers.
- Do not generate a full test strategy or replace `quality-risk-analysis`, `test-strategy`, or regression-test selection.
- Do not select concrete existing test IDs, execute tests, or invent environments, thresholds, defects, or pass results.

## Reference Files

- Always read `prompts/risk-based-testing.md` before producing an analysis.
- For regression, read `evals/eval.yaml` and its cases; configuration and recommendations do not prove that risks are controlled.
- For trigger checks, use `evals/trigger-prompts.csv` and `evals/local-rules.json`; missing selection trace is `BLOCKED`.

## Best Practices

- Prioritize high-impact gaps with a verifiable next action, using the smallest useful experiment or evidence request.
- Separate facts, evidence-backed inferences, recommendations, and Human decisions; never upgrade an assumption into a conclusion.

## Pre-delivery Check

- [ ] Recorded known facts, missing information, conflicts, stale information, out-of-scope items, and assumptions.
- [ ] Each `RBT-##` has risk source, test objective, level/method, depth, priority basis, and required evidence.
- [ ] Tradeoffs have impact, stop conditions, expansion triggers, and residual risk.
- [ ] Test recommendations, risk inference, execution evidence, and Human decisions are separate.
- [ ] A limited scope is not presented as full coverage, zero risk, or release approval.

## Common Pitfalls

- Listing risks without saying how they change test priority and depth.
- Using a risk score instead of evidence and tradeoff rationale.
- Turning a full strategy, regression set, or execution result into this Skill.
- Silently dropping a high-risk area under time pressure without an expansion trigger or residual-risk statement.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/risk-based-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/risk-based-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/risk-based-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/risk-based-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/risk-based-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/risk-based-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/risk-based-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/risk-based-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/risk-based-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/risk-based-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/risk-based-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/risk-based-testing/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill risk-based-testing
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[risk-based-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/risk-based-testing/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
