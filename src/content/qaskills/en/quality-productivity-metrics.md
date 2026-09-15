# Quality Productivity Metrics

Author: naodeng

## Metadata
- slug: quality-productivity-metrics
- category: type
- hasEvals: true
- syncedAt: 2026-09-15
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/quality-productivity-metrics/SKILL.md
- description: Use this skill when you need evidence-bounded quality and delivery metrics, denominators, attribution limits, gaming risk, and the Human-use boundary; triggers include 质量生产力 and quality productivity.

## When to Use

- Use this skill when you need evidence-bounded analysis, design, or validation preparation for quality and delivery metrics, denominators, attribution limits, gaming risk, and the Human-use boundary.
- Use it to review a plan, result, or metric and turn the review into executable improvements.
- Use it when input is incomplete but a bounded first pass with assumptions, gaps, and human-decision boundaries is still useful.

## Workflow

1. Read and follow `prompts/quality-productivity-metrics.md`, including its input audit, domain coverage, and output order.
2. Extract scope, environment, version, time window, constraints, success criteria, and available evidence, with attention to quality metric, delivery metric, denominator, attribution limit, gaming risk.
3. Separate confirmed facts, evidence-backed inferences, candidate recommendations, and Human decisions before ranking by risk and evidence strength.
4. Turn high-risk items into preconditions, steps, expected behavior or decision criteria, required evidence, and a validation method.
5. When input is incomplete, deliver a bounded first pass, state unsupported conclusions, and never present static material as execution evidence.

## Core Constraints

- Keep the analysis focused on quality and delivery metrics, denominators, attribution limits, gaming risk, and the Human-use boundary; do not replace business owners or Human risk acceptance, exception approval, or release decisions.
- Never invent system behavior, fields, metrics, thresholds, data, root causes, execution records, or pass claims.
- Static design, plans, file presence, or a dry run retain their evidence state and cannot become proof of real execution.
- When evidence is insufficient, use pending confirmation, blocked, unassessed, or NOT_SCORED and give the smallest validation method.
- For production, privacy, or security work, use least privilege, masked data, mocks, dry runs, or isolation.

## Common Pitfalls

- Listing checks without triggers, expected concerns, owner roles, close conditions, and evidence.
- Treating adjacent metrics or tool names as a complete quality productivity judgment.
- Using unexplained numbers for false precision or writing correlation as causation.
- Refusing incomplete input, or pretending that incomplete evidence is conclusive.

## Raw SKILL.md

```markdown
---
name: quality-productivity-metrics
description: Use this skill when you need evidence-bounded quality and delivery metrics, denominators, attribution limits, gaming risk, and the Human-use boundary; triggers include 质量生产力 and quality productivity.
---

# Quality Productivity Metrics

## When to Use

- Use this skill when you need evidence-bounded analysis, design, or validation preparation for quality and delivery metrics, denominators, attribution limits, gaming risk, and the Human-use boundary.
- Use it to review a plan, result, or metric and turn the review into executable improvements.
- Use it when input is incomplete but a bounded first pass with assumptions, gaps, and human-decision boundaries is still useful.

## Output Format Options

- Default to Markdown organized by domain risk, evidence state, priority, and boundary.
- When the user requests tables, CSV, JSON, or ticket fields, preserve the same finding fields, evidence, and decision boundaries.
- Before machine consumption, confirm the schema, enums, required fields, and evidence sources.

## How to Use

1. Read and follow `prompts/quality-productivity-metrics.md`, including its input audit, domain coverage, and output order.
2. Extract scope, environment, version, time window, constraints, success criteria, and available evidence, with attention to quality metric, delivery metric, denominator, attribution limit, gaming risk.
3. Separate confirmed facts, evidence-backed inferences, candidate recommendations, and Human decisions before ranking by risk and evidence strength.
4. Turn high-risk items into preconditions, steps, expected behavior or decision criteria, required evidence, and a validation method.
5. When input is incomplete, deliver a bounded first pass, state unsupported conclusions, and never present static material as execution evidence.

## Reference Files

- Always read `prompts/quality-productivity-metrics.md`; it is the complete execution specification for this skill.
- For evaluation, read `evals/eval.yaml` and the matching cases under `evals/cases/`.
- Load `references/`, `examples/`, `scripts/`, or `output-formats.md` only when those directories exist and the task needs them.

## Core Constraints

- Keep the analysis focused on quality and delivery metrics, denominators, attribution limits, gaming risk, and the Human-use boundary; do not replace business owners or Human risk acceptance, exception approval, or release decisions.
- Never invent system behavior, fields, metrics, thresholds, data, root causes, execution records, or pass claims.
- Static design, plans, file presence, or a dry run retain their evidence state and cannot become proof of real execution.
- When evidence is insufficient, use pending confirmation, blocked, unassessed, or NOT_SCORED and give the smallest validation method.
- For production, privacy, or security work, use least privilege, masked data, mocks, dry runs, or isolation.

## Delivery Checklist

- [ ] Covered quality metric, delivery metric, denominator, attribution limit, gaming risk, with source, evidence state, and validation method for each.
- [ ] Separated facts, inferences, candidate recommendations, gaps, and Human decisions.
- [ ] Gave high-risk items P0/P1/P2/P3 or an equivalent priority, owner role, and close condition.
- [ ] Did not turn plans, static checks, or dry runs into test execution, all-passed, or release-approved claims.
- [ ] Stated residual risk, stop/escalation conditions, and next actions.

## Common Pitfalls

- Listing checks without triggers, expected concerns, owner roles, close conditions, and evidence.
- Treating adjacent metrics or tool names as a complete quality productivity judgment.
- Using unexplained numbers for false precision or writing correlation as causation.
- Refusing incomplete input, or pretending that incomplete evidence is conclusive.

## Best Practices

- Start with paths most likely to cause business loss, quality regression, or decision blockage.
- Use the smallest verifiable experiment to reduce uncertainty and record conditions, versions, sources, and evidence.
- Make the Skill independently installable, executable, and reviewable by another engineer.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/quality-productivity-metrics/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/quality-productivity-metrics/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/quality-productivity-metrics/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/quality-productivity-metrics/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/quality-productivity-metrics/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/quality-productivity-metrics/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/quality-productivity-metrics/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/quality-productivity-metrics/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/quality-productivity-metrics/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/quality-productivity-metrics/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/quality-productivity-metrics/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/quality-productivity-metrics/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill quality-productivity-metrics
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[quality-productivity-metrics](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/quality-productivity-metrics/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
