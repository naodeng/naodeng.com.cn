# Production Incident Analysis

Author: naodeng

## Metadata
- slug: production-incident-analysis
- category: type
- hasEvals: true
- syncedAt: 2026-08-30
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/production-incident-analysis/SKILL.md
- description: Use this skill when you need to analyze production-incident evidence, impact, and follow-up actions; triggers include production incident analysis.

## When to Use

- Use this skill when you need to build an incident timeline, control impact, form evidence-backed hypotheses, and drive recovery and learning.
- Use it to review an existing plan, result, or evidence set and produce actionable improvements.
- Use it when context is incomplete but a bounded first pass is still valuable.

## Workflow

1. Read and follow `prompts/production-incident-analysis.md`, including its input contract, execution rules, minimum coverage, and output order.
2. Add only context that changes the decision: scope, environment, version, constraints, evidence, and success criteria.
3. Audit the input, then separate confirmed facts, working assumptions, and open questions.
4. Rank by risk and evidence strength, and produce an artifact that can be executed or reviewed directly.
5. If information is missing, deliver a bounded first pass and state which conclusions remain unsupported.

## Core Constraints

- restore service before exhaustive root cause
- avoid blame without evidence
- attach rollback and validation to risky actions
- Never invent system behavior, fields, data, metrics, or root causes absent from the evidence.
- Link important conclusions to evidence; mark unsupported conclusions as hypotheses with a verification method.
- Explain priority using business impact, likelihood, or detectability.

## Common Pitfalls

- Listing checks without preconditions, expected outcomes, or evidence.
- Marking everything high priority and avoiding tradeoffs.
- Substituting tool names or generic theory for domain reasoning.
- Refusing incomplete input, or pretending incomplete evidence supports certainty.

## Raw SKILL.md

```markdown
---
name: production-incident-analysis
description: Use this skill when you need to analyze production-incident evidence, impact, and follow-up actions; triggers include production incident analysis.
---

# Production Incident Analysis

## When to Use

- Use this skill when you need to build an incident timeline, control impact, form evidence-backed hypotheses, and drive recovery and learning.
- Use it to review an existing plan, result, or evidence set and produce actionable improvements.
- Use it when context is incomplete but a bounded first pass is still valuable.

## Output Format Options

- Default to Markdown for review, execution, and incremental refinement.
- When the user requests tables, CSV, JSON, or ticket fields, preserve risk, evidence, priority, and boundary information.
- For machine-consumed output, confirm the schema, enums, and required fields first.

## How to Use

1. Read and follow `prompts/production-incident-analysis.md`, including its input contract, execution rules, minimum coverage, and output order.
2. Add only context that changes the decision: scope, environment, version, constraints, evidence, and success criteria.
3. Audit the input, then separate confirmed facts, working assumptions, and open questions.
4. Rank by risk and evidence strength, and produce an artifact that can be executed or reviewed directly.
5. If information is missing, deliver a bounded first pass and state which conclusions remain unsupported.

## Reference Files

- Always read `prompts/production-incident-analysis.md`; it is the complete execution specification for this skill.
- For evaluation or regression, read `evals/eval.yaml` and the relevant cases under `evals/cases/`.
- Load `references/`, `examples/`, `scripts/`, or `output-formats.md` only when those directories exist and the task needs them.

## Core Constraints

- restore service before exhaustive root cause
- avoid blame without evidence
- attach rollback and validation to risky actions
- Never invent system behavior, fields, data, metrics, or root causes absent from the evidence.
- Link important conclusions to evidence; mark unsupported conclusions as hypotheses with a verification method.
- Explain priority using business impact, likelihood, or detectability.

## Delivery Checklist

- [ ] Covered: impact scope, timeline, detection, changes, dependencies, mitigation effectiveness, evidence strength, recurrence risk.
- [ ] Separated facts, assumptions, gaps, and recommendations.
- [ ] Gave high-risk items a priority, evidence basis, owner or next action.
- [ ] Defined verifiable decision criteria instead of generic advice.
- [ ] Performed no unauthorized production writes or destructive actions.

## Common Pitfalls

- Listing checks without preconditions, expected outcomes, or evidence.
- Marking everything high priority and avoiding tradeoffs.
- Substituting tool names or generic theory for domain reasoning.
- Refusing incomplete input, or pretending incomplete evidence supports certainty.

## Best Practices

- Start with paths most likely to cause business loss, safety issues, or release blockage.
- Reduce uncertainty through the smallest verifiable experiment and record reproduction conditions.
- Make the artifact executable and independently reviewable by another engineer.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/production-incident-analysis/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/production-incident-analysis/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/production-incident-analysis/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/production-incident-analysis/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/production-incident-analysis/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/production-incident-analysis/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/production-incident-analysis/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/production-incident-analysis/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/production-incident-analysis/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/production-incident-analysis/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/production-incident-analysis/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/production-incident-analysis/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill production-incident-analysis
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[production-incident-analysis](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/production-incident-analysis/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
