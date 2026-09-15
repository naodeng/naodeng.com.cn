# Authorization Testing

Author: naodeng

## Metadata
- slug: authorization-testing
- category: type
- hasEvals: true
- syncedAt: 2026-09-15
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/authorization-testing/SKILL.md
- description: Use this skill when you need evidence-bounded authorization-testing analysis and validation preparation; triggers include 授权测试 and authorization-testing.

## When to Use

- Use this Skill when the work needs evidence-bounded analysis of subject-resource-action relations, permission boundaries, denial paths, and delegation.
- Use it when input is incomplete but a reviewable draft with assumptions and gaps is still useful.
- Use it when static security evidence must remain separate from planned validation and completed execution.

## Workflow

1. Read prompts/authorization-testing.md and follow its input audit, coverage checklist, and output contract.
2. Extract scope, environment, version, roles, data, dependencies, constraints, and available evidence.
3. Model subject-resource-action relations, permission boundaries, denial paths, and delegation with reviewable scenarios, separating known facts, inferences, and candidate validation.
4. Record impact, priority, owner role, close condition, and validation method for each item.
5. With incomplete input, deliver a bounded draft; do not turn a risk assumption into a confirmed vulnerability or security pass.

## Core Constraints

- Analyze only subject-resource-action relations, permission boundaries, denial paths, and delegation; do not log in, call real APIs, or read credentials.
- Do not invent vulnerabilities, exploit success, remediation completion, scan coverage, or security-pass claims.
- Mark unsupported evidence as pending, blocked, or unassessed and provide an isolated validation method.
- Leave risk acceptance, exception authorization, and release judgment to a Human.

## Common Pitfalls

- Treating broad security review or API contract checking as a complete substitute for Authorization Testing.
- Listing attack names without applicability, evidence, expected results, or close conditions.
- Declaring a system secure with incomplete input, or reading real credentials for completeness.

## Raw SKILL.md

```markdown
---
name: authorization-testing
description: Use this skill when you need evidence-bounded authorization-testing analysis and validation preparation; triggers include 授权测试 and authorization-testing.
---

# Authorization Testing

## When to Use

- Use this Skill when the work needs evidence-bounded analysis of subject-resource-action relations, permission boundaries, denial paths, and delegation.
- Use it when input is incomplete but a reviewable draft with assumptions and gaps is still useful.
- Use it when static security evidence must remain separate from planned validation and completed execution.

## Output Format Options

- Default to Markdown organized by security risk, evidence, and priority.
- If the user asks for a table, CSV, JSON, or ticket format, preserve the same finding fields and evidence states.
- Confirm the schema, enum values, and required fields before feeding the output to automation.

## How to Use

1. Read prompts/authorization-testing.md and follow its input audit, coverage checklist, and output contract.
2. Extract scope, environment, version, roles, data, dependencies, constraints, and available evidence.
3. Model subject-resource-action relations, permission boundaries, denial paths, and delegation with reviewable scenarios, separating known facts, inferences, and candidate validation.
4. Record impact, priority, owner role, close condition, and validation method for each item.
5. With incomplete input, deliver a bounded draft; do not turn a risk assumption into a confirmed vulnerability or security pass.

## Reference Files

- Read prompts/authorization-testing.md for every invocation.
- Read evals/eval.yaml and matching evals/cases/ when evaluating the Skill.
- Read references/, examples/, scripts/, or output-formats.md only when the directory exists and the task needs it.

## Core Constraints

- Analyze only subject-resource-action relations, permission boundaries, denial paths, and delegation; do not log in, call real APIs, or read credentials.
- Do not invent vulnerabilities, exploit success, remediation completion, scan coverage, or security-pass claims.
- Mark unsupported evidence as pending, blocked, or unassessed and provide an isolated validation method.
- Leave risk acceptance, exception authorization, and release judgment to a Human.

## Delivery Self-Check

- [ ] Complete the known, missing, conflicting, stale, out_of_scope, and assumptions audit.
- [ ] Cover the authorization decision, triggers, expected concerns, and evidence state.
- [ ] Separate facts, inferences, recommendations, gaps, and Human decisions.
- [ ] Do not turn static findings or a dry-run into a real exploit, absence-of-vulnerability, or release-approval claim.

## Common Pitfalls

- Treating broad security review or API contract checking as a complete substitute for Authorization Testing.
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
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/authorization-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/authorization-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/authorization-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/authorization-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/authorization-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/authorization-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/authorization-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/authorization-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/authorization-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/authorization-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/authorization-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/authorization-testing/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill authorization-testing
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[authorization-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/authorization-testing/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
