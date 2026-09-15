# Error Handling Design Review

Author: naodeng

## Metadata
- slug: error-handling-design-review
- category: type
- hasEvals: true
- syncedAt: 2026-09-15
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/error-handling-design-review/SKILL.md
- description: Use this skill when error taxonomy, retries, timeouts, fallback, or recovery design needs an evidence-bounded review before implementation; triggers include error handling design review, failure-path review, and recovery readiness review.

## When to Use

- Use it to distinguish expected behavior, propagation, retry conditions, and human handoff across failure modes.
- Use it to check error messages/status, data consistency, telemetry, recovery, and consumer contracts.
- Use it when error handling is incomplete and a bounded first pass is needed.

Do not use it to execute fault injection, choose SLA/copy/risk acceptance for a Human, or treat code presence as correctness.

## Workflow

1. Read `prompts/error-handling-design-review.md` and audit objective, failure boundaries, version, sources, and evidence.
2. Classify input as `known`, `missing`, `conflicting`, `stale`, `out_of_scope`, and `assumptions`.
3. Build a failure-mode matrix and retain trigger, boundary, expected behavior, propagation, retry/fallback, and data impact in `EH-##` findings.
4. Separate facts, evidence-backed inferences, recommendations, and Human decisions; distinguish retryable, non-retryable, human-intervention, and safe-rejection paths.
5. Deliver a bounded first pass and minimum validation actions; one generic error response does not cover every path.

## Core Constraints

- Do not run fault injection or claim a real incident, recovery, SLA, or error rate was verified.
- Do not treat exception classes, status codes, error-handling code, or document presence as behavior correctness.
- Each `EH-##` includes failure mode, trigger, boundary, expected behavior, propagation/translation, retry/fallback, data consistency, observable evidence, owner, and validation.
- Without identity, time, environment, inputs, and raw results, runtime status remains `unverified`, `unexecuted`, or `unassessed`.

## Common Pitfalls

- Using one “return an error” response for timeout, dependency, data-conflict, and authorization failures.
- Choosing retry counts without checking idempotency, backoff, budget, and duplicate side effects.
- Treating log presence as proof of recovery visibility or incident resolution.

## Raw SKILL.md

```markdown
---
name: error-handling-design-review
description: Use this skill when error taxonomy, retries, timeouts, fallback, or recovery design needs an evidence-bounded review before implementation; triggers include error handling design review, failure-path review, and recovery readiness review.
---

# Error Handling Design Review

Review error taxonomy, exception boundaries, timeouts, retry/backoff, circuit breaking, degradation, idempotency, transaction consistency, propagation, consumer contracts, telemetry, and recovery before implementation. It produces `EH-##` failure-mode findings and validation preparation; it does not run fault injection or review a real incident.

## When to Use

- Use it to distinguish expected behavior, propagation, retry conditions, and human handoff across failure modes.
- Use it to check error messages/status, data consistency, telemetry, recovery, and consumer contracts.
- Use it when error handling is incomplete and a bounded first pass is needed.

Do not use it to execute fault injection, choose SLA/copy/risk acceptance for a Human, or treat code presence as correctness.

## Output Format Options

- Use Markdown by default; when a table, CSV, or JSON is requested, preserve the same evidence, status, impact, owner, and validation fields.
- Do not present a structured format or static inventory as execution, pass, approval, or release evidence.

## How to Use

1. Read this Skill's primary prompt and provide the objective, scope, material, environment, and available evidence.
2. Follow the prompt's input audit and output contract; deliver a bounded first pass when information is incomplete.
3. Retain source, evidence status, impact, owner role, close condition, and validation method for every finding.

## Workflow

1. Read `prompts/error-handling-design-review.md` and audit objective, failure boundaries, version, sources, and evidence.
2. Classify input as `known`, `missing`, `conflicting`, `stale`, `out_of_scope`, and `assumptions`.
3. Build a failure-mode matrix and retain trigger, boundary, expected behavior, propagation, retry/fallback, and data impact in `EH-##` findings.
4. Separate facts, evidence-backed inferences, recommendations, and Human decisions; distinguish retryable, non-retryable, human-intervention, and safe-rejection paths.
5. Deliver a bounded first pass and minimum validation actions; one generic error response does not cover every path.

## Core Constraints

- Do not run fault injection or claim a real incident, recovery, SLA, or error rate was verified.
- Do not treat exception classes, status codes, error-handling code, or document presence as behavior correctness.
- Each `EH-##` includes failure mode, trigger, boundary, expected behavior, propagation/translation, retry/fallback, data consistency, observable evidence, owner, and validation.
- Without identity, time, environment, inputs, and raw results, runtime status remains `unverified`, `unexecuted`, or `unassessed`.

## Reference Files

- Always read `prompts/error-handling-design-review.md` before producing a review.
- For regression, read `evals/eval.yaml` and its cases; a design review is not incident analysis or fault injection.
- For trigger checks, use `evals/trigger-prompts.csv` and `evals/local-rules.json`; missing selection trace is `BLOCKED`.

## Best Practices

- Prioritize high-impact gaps with a verifiable next action, using the smallest useful experiment or evidence request.
- Separate facts, evidence-backed inferences, recommendations, and Human decisions; never upgrade an assumption into a conclusion.

## Delivery Checklist

- [ ] Complete the six input-audit categories and failure-scope statement.
- [ ] Distinguish retryable, non-retryable, human-intervention, and safe-rejection paths.
- [ ] Give every `EH-##` trigger, expected behavior, impact, owner, and validation.
- [ ] Check propagation, idempotency, data consistency, telemetry, and recovery.
- [ ] Do not treat one generic response or static code presence as a complete/correct design.

## Common Pitfalls

- Using one “return an error” response for timeout, dependency, data-conflict, and authorization failures.
- Choosing retry counts without checking idempotency, backoff, budget, and duplicate side effects.
- Treating log presence as proof of recovery visibility or incident resolution.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/error-handling-design-review/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/error-handling-design-review/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/error-handling-design-review/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/error-handling-design-review/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/error-handling-design-review/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/error-handling-design-review/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/error-handling-design-review/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/error-handling-design-review/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/error-handling-design-review/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/error-handling-design-review/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/error-handling-design-review/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/error-handling-design-review/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill error-handling-design-review
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[error-handling-design-review](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/error-handling-design-review/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
