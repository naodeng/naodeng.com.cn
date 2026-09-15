# Edge Case Discovery

Author: naodeng

## Metadata
- slug: edge-case-discovery
- category: type
- hasEvals: true
- syncedAt: 2026-09-15
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/edge-case-discovery/SKILL.md
- description: Use this skill when you need to discover boundary, rare, limit, ordering, or combination scenarios from product and test evidence; triggers include edge case discovery.

## When to Use

- Use it to systematically consider value, length, null/type, time, state, capacity, concurrency, platform, and combination boundaries.
- Use it to find high-risk boundaries outside the happy path from defects, failures, or design constraints.
- Use it to prioritize boundary candidates and turn them into verifiable follow-up test intent.

Do not use it only to analyze requirement gaps, write a complete test case suite, review existing cases, or execute boundary tests.

## Workflow

1. Read and follow `prompts/edge-case-discovery.md`, beginning with the six-part input audit.
2. Identify input, state/time/resource, and interaction dimensions and use only evidenced boundaries.
3. Record dimension, boundary/combination, trigger, concern, impact, evidence, and validation in `EC-##` entries.
4. Preserve assumptions and open questions for unknown thresholds, missing states, and conflicting rules.
5. Return discovery candidates rather than full cases; later test design and execution decide how to run them.

## Core Constraints

- Consider value/length, null/type, time/timezone, state transitions, capacity/resources, concurrency/order, platform/localization, and combinations when applicable.
- Do not invent thresholds, states, concurrency counts, error results, or product rules; mark unknowns `unassessed` or open.
- `EC-##` is a candidate discovery, not executed, passed, complete-coverage, or zero-risk evidence.
- Do not expand candidates into full test cases, execute tests, or modify the target system.

## Common Pitfalls

- Saying “test the boundary” without naming the dimension, trigger, and observable concern.
- Treating a common industry value as the current product threshold.
- Generating mechanical duplicate candidates for every field instead of prioritizing risk and evidence.
- Treating candidate count as proof of coverage quality.

## Raw SKILL.md

```markdown
---
name: edge-case-discovery
description: Use this skill when you need to discover boundary, rare, limit, ordering, or combination scenarios from product and test evidence; triggers include edge case discovery.
---

# Edge Case Discovery

Discover boundary candidates across data domains, state models, time rules, resource limits, platform differences, and existing evidence. Produce `EC-##`. This is not a full requirement-quality review, full test-case authoring, threshold invention, or test execution.

## When to Use

- Use it to systematically consider value, length, null/type, time, state, capacity, concurrency, platform, and combination boundaries.
- Use it to find high-risk boundaries outside the happy path from defects, failures, or design constraints.
- Use it to prioritize boundary candidates and turn them into verifiable follow-up test intent.

Do not use it only to analyze requirement gaps, write a complete test case suite, review existing cases, or execute boundary tests.

## Output Format Options

- Use Markdown by default; when a table, CSV, or JSON is requested, preserve the same evidence, status, impact, owner, and validation fields.
- Do not present a structured format or static inventory as execution, pass, approval, or release evidence.

## How to Use

1. Read this Skill's primary prompt and provide the objective, scope, material, environment, and available evidence.
2. Follow the prompt's input audit and output contract; deliver a bounded first pass when information is incomplete.
3. Retain source, evidence status, impact, owner role, close condition, and validation method for every finding.

## Workflow

1. Read and follow `prompts/edge-case-discovery.md`, beginning with the six-part input audit.
2. Identify input, state/time/resource, and interaction dimensions and use only evidenced boundaries.
3. Record dimension, boundary/combination, trigger, concern, impact, evidence, and validation in `EC-##` entries.
4. Preserve assumptions and open questions for unknown thresholds, missing states, and conflicting rules.
5. Return discovery candidates rather than full cases; later test design and execution decide how to run them.

## Core Constraints

- Consider value/length, null/type, time/timezone, state transitions, capacity/resources, concurrency/order, platform/localization, and combinations when applicable.
- Do not invent thresholds, states, concurrency counts, error results, or product rules; mark unknowns `unassessed` or open.
- `EC-##` is a candidate discovery, not executed, passed, complete-coverage, or zero-risk evidence.
- Do not expand candidates into full test cases, execute tests, or modify the target system.

## Reference Files

- Always read `prompts/edge-case-discovery.md` before producing an analysis.
- For regression, read `evals/eval.yaml` and matching cases; configuration does not prove that boundaries were verified.
- For trigger checks, use `evals/trigger-prompts.csv` and `evals/local-rules.json`; missing selection trace is `BLOCKED`.

## Best Practices

- Prioritize high-impact gaps with a verifiable next action, using the smallest useful experiment or evidence request.
- Separate facts, evidence-backed inferences, recommendations, and Human decisions; never upgrade an assumption into a conclusion.

## Pre-delivery Check

- [ ] Recorded known facts, missing information, conflicts, stale information, out-of-scope items, and assumptions.
- [ ] Each `EC-##` has a dimension, boundary/combination, trigger, source, evidence state, impact, and validation suggestion.
- [ ] Known thresholds, inferred candidates, and unknown open items remain separate.
- [ ] Reasons and residual risks are stated for unassessed dimensions.
- [ ] The discovery list is not presented as full cases, execution results, pass evidence, or release conclusions.

## Common Pitfalls

- Saying “test the boundary” without naming the dimension, trigger, and observable concern.
- Treating a common industry value as the current product threshold.
- Generating mechanical duplicate candidates for every field instead of prioritizing risk and evidence.
- Treating candidate count as proof of coverage quality.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/edge-case-discovery/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/edge-case-discovery/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/edge-case-discovery/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/edge-case-discovery/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/edge-case-discovery/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/edge-case-discovery/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/edge-case-discovery/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/edge-case-discovery/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/edge-case-discovery/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/edge-case-discovery/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/edge-case-discovery/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/edge-case-discovery/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill edge-case-discovery
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[edge-case-discovery](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/edge-case-discovery/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
