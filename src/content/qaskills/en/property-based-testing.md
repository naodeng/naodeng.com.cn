# Property-Based Test Design

Author: naodeng

## Metadata
- slug: property-based-testing
- category: type
- hasEvals: true
- syncedAt: 2026-09-15
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/property-based-testing/SKILL.md
- description: Use this skill when you need to turn invariants, generation domains, and shrinking strategies into reviewable property-test candidates; triggers include 基于属性的测试 and property-based test design.

## When to Use

- Analyze domain invariants, input generation domains, constraints, failure examples, shrinking strategies, and existing properties.
- Preserve selection rationale, evidence gaps, priority, and validation actions.
- Inputs are incomplete but a bounded first pass can mark items unassessed or blocked.

## Workflow

1. Read `prompts/property-based-testing.md` and provide the objective, scope, material, environment, and evidence.
2. Start with separate known, missing, conflicting, stale, out_of_scope, and assumptions entries.
3. Produce PBT-## findings with source, evidence state, applicability, impact/priority, owner, close condition, and validation.
4. Separate facts, evidence-backed inferences, recommendations, and Human decisions.
5. Recommend follow-up validation without claiming execution.

## Core Constraints

- Do not invent invariants, generation domains, or shrink results, or treat a generator as proof of a finding.
- File presence, names, templates, and Eval configuration are not runtime evidence.
- Do not edit requirements, code, test assets, or target systems, or accept risk for a Human.

## Common Pitfalls

- Do not treat a method name, file presence, or candidate count as execution, coverage, pass, or release evidence.
- Do not fill missing invariants, generation domains, or results with convention; preserve unassessed, blocked, and pending items.
- Do not expand this specialist design into a complete strategy, full test cases, runtime execution, or a release decision.

## Raw SKILL.md

```markdown
---
name: property-based-testing
description: Use this skill when you need to turn invariants, generation domains, and shrinking strategies into reviewable property-test candidates; triggers include 基于属性的测试 and property-based test design.
---

# Property-Based Test Design

Turn invariants, generation domains, and shrinking strategies into reviewable property-test candidates. Produce PBT-## design candidates within the evidence boundary; do not execute tests or claim coverage or pass results.

## When to Use

- Analyze domain invariants, input generation domains, constraints, failure examples, shrinking strategies, and existing properties.
- Preserve selection rationale, evidence gaps, priority, and validation actions.
- Inputs are incomplete but a bounded first pass can mark items unassessed or blocked.

## Output Format Options

- Use Markdown by default; use tables, JSON, or CSV only when explicitly requested or required by the delivery format.
- Separate static analysis, unexecuted work, evidence states, and Human decisions; keep items unassessed, blocked, or NOT_RUN when runtime evidence is absent.

## How to Use

1. Read `prompts/property-based-testing.md` and provide the objective, scope, material, environment, and evidence.
2. Start with separate known, missing, conflicting, stale, out_of_scope, and assumptions entries.
3. Produce PBT-## findings with source, evidence state, applicability, impact/priority, owner, close condition, and validation.
4. Separate facts, evidence-backed inferences, recommendations, and Human decisions.
5. Recommend follow-up validation without claiming execution.

## Core Constraints

- Do not invent invariants, generation domains, or shrink results, or treat a generator as proof of a finding.
- File presence, names, templates, and Eval configuration are not runtime evidence.
- Do not edit requirements, code, test assets, or target systems, or accept risk for a Human.

## Pre-delivery Check

- [ ] The six-part input audit is complete.
- [ ] Every PBT-## has source, evidence state, applicability, concern, impact/priority, owner, close condition, and validation.
- [ ] Facts, inferences, recommendations, and Human decisions are separate.
- [ ] Unexecuted, unverified, unassessed, and pending-decision items are explicit.

## Reference Files

- Read evals/eval.yaml and matching cases for regression; configuration does not prove project results.
- Use evals/trigger-prompts.csv and evals/local-rules.json for trigger checks; missing skill.selection evidence is BLOCKED.

## Common Pitfalls

- Do not treat a method name, file presence, or candidate count as execution, coverage, pass, or release evidence.
- Do not fill missing invariants, generation domains, or results with convention; preserve unassessed, blocked, and pending items.
- Do not expand this specialist design into a complete strategy, full test cases, runtime execution, or a release decision.

## Best Practices

- Complete the six-part input audit before selecting the smallest traceable and verifiable finding scope.
- Keep the source, evidence state, impact/priority, owner role, close condition, validation method, and residual risk for every finding.
- Write validation suggestions as next actions; do not upgrade package structure, candidate counts, or local Eval configuration into real quality conclusions.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/property-based-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/property-based-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/property-based-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/property-based-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/property-based-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/property-based-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/property-based-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/property-based-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/property-based-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/property-based-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/property-based-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/property-based-testing/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill property-based-testing
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[property-based-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/property-based-testing/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
