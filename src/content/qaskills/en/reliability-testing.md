# Reliability Testing

Author: naodeng

## Metadata
- slug: reliability-testing
- category: type
- hasEvals: true
- syncedAt: 2026-11-25
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/reliability-testing/SKILL.md
- description: Use this skill when you need evidence-bounded reliability-testing analysis and validation preparation; triggers include 可靠性测试 and reliability-testing.

## When to Use

- Use this Skill when the work needs evidence-bounded analysis of availability objectives, failure modes, exposure windows, and evidence readiness.
- Use it when the input is incomplete but a reviewable first draft with assumptions and gaps is still useful.
- Use it when static design evidence must remain separate from planned validation and completed execution.

## Workflow

1. Read prompts/reliability-testing.md and follow its input audit, coverage checklist, and output order.
2. Extract scope, environment, version, dependencies, constraints, success criteria, and available evidence.
3. Model availability objectives, failure modes, exposure windows, and evidence readiness with scenarios and decision criteria, prioritizing high-impact or hard-to-detect items.
4. Separate facts, evidence-backed inferences, candidate recommendations, and Human decisions.
5. When information is missing, deliver a bounded draft and the smallest evidence-gathering actions; do not write recommendations as execution results.

## Core Constraints

- Analyze only availability objectives, failure modes, exposure windows, and evidence readiness; do not inject faults, access real dependencies, or call production systems.
- Do not invent thresholds, availability, recovery times, vulnerability states, or completed test runs.
- Mark unsupported claims as pending, blocked, or unassessed and provide a validation method.
- Leave risk acceptance, release approval, and Human takeover to a Human.

## Common Pitfalls

- Treating adjacent performance, incident, or API analysis as a complete substitute for Reliability Testing.
- Listing steps without triggers, expected results, owner roles, or close conditions.
- Refusing incomplete input, or filling critical facts with template assumptions.

## Raw SKILL.md

```markdown
---
name: reliability-testing
description: Use this skill when you need evidence-bounded reliability-testing analysis and validation preparation; triggers include 可靠性测试 and reliability-testing.
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

# Reliability Testing

## When to Use

- Use this Skill when the work needs evidence-bounded analysis of availability objectives, failure modes, exposure windows, and evidence readiness.
- Use it when the input is incomplete but a reviewable first draft with assumptions and gaps is still useful.
- Use it when static design evidence must remain separate from planned validation and completed execution.

## Output Format Options

- Default to Markdown organized by risk, evidence, and priority.
- If the user asks for a table, CSV, JSON, or ticket format, preserve the same finding fields and evidence states.
- Confirm the schema, enum values, and required fields before feeding the output to automation.

## How to Use

1. Read prompts/reliability-testing.md and follow its input audit, coverage checklist, and output order.
2. Extract scope, environment, version, dependencies, constraints, success criteria, and available evidence.
3. Model availability objectives, failure modes, exposure windows, and evidence readiness with scenarios and decision criteria, prioritizing high-impact or hard-to-detect items.
4. Separate facts, evidence-backed inferences, candidate recommendations, and Human decisions.
5. When information is missing, deliver a bounded draft and the smallest evidence-gathering actions; do not write recommendations as execution results.

## Reference Files

- Read prompts/reliability-testing.md for every invocation; it is the complete execution contract.
- Read evals/eval.yaml and the matching evals/cases/ when evaluating the Skill.
- Read references/, examples/, scripts/, or output-formats.md only when the directory exists and the task needs it.

## Domain Execution Essentials

- Define SLI event/time basis, success/failure, denominator, exclusions, observation window and sourced targets; request success and time availability are different metrics.
- Deliver window/denominator-defined SLIs and failure timelines, stating applicability for target comparisons and extrapolation.
- When deriving domain candidates, read and follow [prompts/reliability-testing.md](prompts/reliability-testing.md) for the domain procedure and oracle; retain valid controls, evidence gaps, and validation actions for each item.

## Core Constraints

- Analyze only availability objectives, failure modes, exposure windows, and evidence readiness; do not inject faults, access real dependencies, or call production systems.
- Do not invent thresholds, availability, recovery times, vulnerability states, or completed test runs.
- Mark unsupported claims as pending, blocked, or unassessed and provide a validation method.
- Leave risk acceptance, release approval, and Human takeover to a Human.

## Delivery Self-Check

- [ ] Complete the six-part input audit and mark evidence freshness.
- [ ] Cover the reliability objective, failure modes, expected concerns, and validation method.
- [ ] Separate facts, inferences, recommendations, gaps, and Human decisions.
- [ ] Do not turn static design or a dry-run into a claim of execution, passing, or release.

## Common Pitfalls

- Treating adjacent performance, incident, or API analysis as a complete substitute for Reliability Testing.
- Listing steps without triggers, expected results, owner roles, or close conditions.
- Refusing incomplete input, or filling critical facts with template assumptions.

## Best Practices

- Start with the paths most likely to cause business loss or recovery failure.
- Use the smallest isolated and reversible validation suggestion, with explicit stop conditions.
- Make every conclusion reviewable by another engineer from its evidence and boundary.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/reliability-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/reliability-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/reliability-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/reliability-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/reliability-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/reliability-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/reliability-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/reliability-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/reliability-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/reliability-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/reliability-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/reliability-testing/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill reliability-testing
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[reliability-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/reliability-testing/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
