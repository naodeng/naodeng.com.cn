# Security-Requirement Review

Author: naodeng

## Metadata
- slug: security-requirement-review
- category: type
- hasEvals: true
- syncedAt: 2026-09-15
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/security-requirement-review/SKILL.md
- description: Use this skill when you need evidence-bounded security-requirement-review analysis and validation preparation; triggers include 安全需求审查 and security-requirement-review.

## When to Use

- Use this Skill when the work needs evidence-bounded analysis of security objectives, testability, trace links, acceptance conditions, and evidence gaps.
- Use it when input is incomplete but a reviewable draft with assumptions and gaps is still useful.
- Use it when static security evidence must remain separate from planned validation and completed execution.

## Workflow

1. Read prompts/security-requirement-review.md and follow its input audit, coverage checklist, and output contract.
2. Extract scope, environment, version, roles, data, dependencies, constraints, and available evidence.
3. Model security objectives, testability, trace links, acceptance conditions, and evidence gaps with reviewable scenarios, separating known facts, inferences, and candidate validation.
4. Record impact, priority, owner role, close condition, and validation method for each item.
5. With incomplete input, deliver a bounded draft; do not turn a risk assumption into a confirmed vulnerability or security pass.

## Core Constraints

- Analyze only security objectives, testability, trace links, acceptance conditions, and evidence gaps; do not log in, call real APIs, or read credentials.
- Do not invent vulnerabilities, exploit success, remediation completion, scan coverage, or security-pass claims.
- Mark unsupported evidence as pending, blocked, or unassessed and provide an isolated validation method.
- Leave risk acceptance, exception authorization, and release judgment to a Human.

## Common Pitfalls

- Treating broad security review or API contract checking as a complete substitute for Security-Requirement Review.
- Listing attack names without applicability, evidence, expected results, or close conditions.
- Declaring a system secure with incomplete input, or reading real credentials for completeness.

## Raw SKILL.md

```markdown
---
name: security-requirement-review
description: Use this skill when you need evidence-bounded security-requirement-review analysis and validation preparation; triggers include 安全需求审查 and security-requirement-review.
---

# Security-Requirement Review

## When to Use

- Use this Skill when the work needs evidence-bounded analysis of security objectives, testability, trace links, acceptance conditions, and evidence gaps.
- Use it when input is incomplete but a reviewable draft with assumptions and gaps is still useful.
- Use it when static security evidence must remain separate from planned validation and completed execution.

## Output Format Options

- Default to Markdown organized by security risk, evidence, and priority.
- If the user asks for a table, CSV, JSON, or ticket format, preserve the same finding fields and evidence states.
- Confirm the schema, enum values, and required fields before feeding the output to automation.

## How to Use

1. Read prompts/security-requirement-review.md and follow its input audit, coverage checklist, and output contract.
2. Extract scope, environment, version, roles, data, dependencies, constraints, and available evidence.
3. Model security objectives, testability, trace links, acceptance conditions, and evidence gaps with reviewable scenarios, separating known facts, inferences, and candidate validation.
4. Record impact, priority, owner role, close condition, and validation method for each item.
5. With incomplete input, deliver a bounded draft; do not turn a risk assumption into a confirmed vulnerability or security pass.

## Reference Files

- Read prompts/security-requirement-review.md for every invocation.
- Read evals/eval.yaml and matching evals/cases/ when evaluating the Skill.
- Read references/, examples/, scripts/, or output-formats.md only when the directory exists and the task needs it.

## Core Constraints

- Analyze only security objectives, testability, trace links, acceptance conditions, and evidence gaps; do not log in, call real APIs, or read credentials.
- Do not invent vulnerabilities, exploit success, remediation completion, scan coverage, or security-pass claims.
- Mark unsupported evidence as pending, blocked, or unassessed and provide an isolated validation method.
- Leave risk acceptance, exception authorization, and release judgment to a Human.

## Delivery Self-Check

- [ ] Complete the known, missing, conflicting, stale, out_of_scope, and assumptions audit.
- [ ] Cover the security requirement, triggers, expected concerns, and evidence state.
- [ ] Separate facts, inferences, recommendations, gaps, and Human decisions.
- [ ] Do not turn static findings or a dry-run into a real exploit, absence-of-vulnerability, or release-approval claim.

## Common Pitfalls

- Treating broad security review or API contract checking as a complete substitute for Security-Requirement Review.
- Listing attack names without applicability, evidence, expected results, or close conditions.
- Declaring a system secure with incomplete input, or reading real credentials for completeness.

## Best Practices

- Start with high-impact, hard-to-detect, permission-sensitive, or data-sensitive paths.
- Use redacted material, least privilege, isolated environments, and reversible validation suggestions.
- Make each security conclusion reviewable by another engineer from its source and boundary.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-requirement-review/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-requirement-review/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-requirement-review/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-requirement-review/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-requirement-review/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-requirement-review/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-requirement-review/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-requirement-review/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-requirement-review/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-requirement-review/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-requirement-review/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-requirement-review/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill security-requirement-review
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[security-requirement-review](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/security-requirement-review/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
