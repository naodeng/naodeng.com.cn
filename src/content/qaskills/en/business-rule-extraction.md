# Business Rule Extraction

Author: naodeng

## Metadata
- slug: business-rule-extraction
- category: type
- hasEvals: true
- syncedAt: 2026-09-15
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/business-rule-extraction/SKILL.md
- description: Use this skill when requirements, policies, contracts, or workflows need traceable business rules extracted before design or testing; triggers include business rule extraction, policy rule inventory, and atomic rule analysis.

## When to Use

- Use it when scattered prose must become comparable and verifiable `BR-##` entries.
- Use it when actors, objects, triggers, preconditions, actions, outcomes, invariants, or exceptions need to be explicit.
- Use it when sources are incomplete or conflicting and a bounded first-pass rule inventory is still useful.

Do not use it to invent rules from general knowledge, choose final precedence, execute system verification, or approve a policy for a business or compliance role.

## Workflow

1. Read and follow `prompts/business-rule-extraction.md`, auditing objective, version, time, and applicability first.
2. Classify inputs as `known`, `missing`, `conflicting`, `stale`, `out_of_scope`, and `assumptions`; preserve each source and location.
3. Merge sentences only when the material supports the merge; otherwise create atomic rules with a stable `BR-##`, source, and minimum evidence.
4. Separate direct facts, evidence-backed inferences, recommendations, and Human decisions; list exceptions, unknowns, impact, and validation hints separately.
5. Deliver a bounded first pass when information is missing and ask assignable, closeable evidence questions instead of upgrading assumptions to facts.

## Core Constraints

- Do not invent thresholds, precedence, state transitions, permissions, default exceptions, or applicability.
- Do not turn examples, recommendations, document presence, or name matching into execution, pass, approval, or release evidence.
- Every `BR-##` should contain rule, source, actor/object, trigger, preconditions, action/outcome, constraint/invariant, exception, evidence, unknowns, impact, and validation method.
- Preserve both sides of a conflict; use `missing`, `stale`, or `unassessed` when the material cannot support a choice.

## Common Pitfalls

- Merging similar sentences while losing version or regional scope.
- Filling “usually,” “timely,” or “reasonable” with an assumed threshold.
- Reporting rule prose without sources, exceptions, evidence, or open questions.

## Raw SKILL.md

```markdown
---
name: business-rule-extraction
description: Use this skill when requirements, policies, contracts, or workflows need traceable business rules extracted before design or testing; triggers include business rule extraction, policy rule inventory, and atomic rule analysis.
---

# Business Rule Extraction

Extract traceable atomic business rules from requirements, policies, contracts, workflows, acceptance criteria, and supplied examples while retaining sources, applicability, exceptions, and unknowns. This is an inventory and analysis input, not business, compliance, or release approval.

## When to Use

- Use it when scattered prose must become comparable and verifiable `BR-##` entries.
- Use it when actors, objects, triggers, preconditions, actions, outcomes, invariants, or exceptions need to be explicit.
- Use it when sources are incomplete or conflicting and a bounded first-pass rule inventory is still useful.

Do not use it to invent rules from general knowledge, choose final precedence, execute system verification, or approve a policy for a business or compliance role.

## Output Format Options

- Use Markdown by default; when a table, CSV, or JSON is requested, preserve the same evidence, status, impact, owner, and validation fields.
- Do not present a structured format or static inventory as execution, pass, approval, or release evidence.

## How to Use

1. Read this Skill's primary prompt and provide the objective, scope, material, environment, and available evidence.
2. Follow the prompt's input audit and output contract; deliver a bounded first pass when information is incomplete.
3. Retain source, evidence status, impact, owner role, close condition, and validation method for every finding.

## Workflow

1. Read and follow `prompts/business-rule-extraction.md`, auditing objective, version, time, and applicability first.
2. Classify inputs as `known`, `missing`, `conflicting`, `stale`, `out_of_scope`, and `assumptions`; preserve each source and location.
3. Merge sentences only when the material supports the merge; otherwise create atomic rules with a stable `BR-##`, source, and minimum evidence.
4. Separate direct facts, evidence-backed inferences, recommendations, and Human decisions; list exceptions, unknowns, impact, and validation hints separately.
5. Deliver a bounded first pass when information is missing and ask assignable, closeable evidence questions instead of upgrading assumptions to facts.

## Core Constraints

- Do not invent thresholds, precedence, state transitions, permissions, default exceptions, or applicability.
- Do not turn examples, recommendations, document presence, or name matching into execution, pass, approval, or release evidence.
- Every `BR-##` should contain rule, source, actor/object, trigger, preconditions, action/outcome, constraint/invariant, exception, evidence, unknowns, impact, and validation method.
- Preserve both sides of a conflict; use `missing`, `stale`, or `unassessed` when the material cannot support a choice.

## Reference Files

- Always read `prompts/business-rule-extraction.md` before producing an analysis.
- For regression, read `evals/eval.yaml` and the relevant `evals/cases/`; these files do not prove that business semantics ran.
- To inspect trigger behavior, use `evals/trigger-prompts.csv` and `evals/local-rules.json` with the repository trace runner; without `skill.selection` evidence report `BLOCKED`.
- This is a repository-root development check; a standalone Skill package does not include the repository runner and does not depend on it at runtime.

## Best Practices

- Prioritize high-impact gaps with a verifiable next action, using the smallest useful experiment or evidence request.
- Separate facts, evidence-backed inferences, recommendations, and Human decisions; never upgrade an assumption into a conclusion.

## Delivery Checklist

- [ ] Record the six input-audit categories and applicability scope.
- [ ] Trace every `BR-##` to minimum source evidence.
- [ ] Separate facts, inferences, recommendations, and Human decisions.
- [ ] Retain exceptions, conflicts, unknowns, and validation hints.
- [ ] Do not present static material or a rule inventory as runtime, approval, or release evidence.

## Common Pitfalls

- Merging similar sentences while losing version or regional scope.
- Filling “usually,” “timely,” or “reasonable” with an assumed threshold.
- Reporting rule prose without sources, exceptions, evidence, or open questions.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/business-rule-extraction/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/business-rule-extraction/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/business-rule-extraction/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/business-rule-extraction/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/business-rule-extraction/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/business-rule-extraction/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/business-rule-extraction/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/business-rule-extraction/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/business-rule-extraction/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/business-rule-extraction/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/business-rule-extraction/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/business-rule-extraction/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill business-rule-extraction
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[business-rule-extraction](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/business-rule-extraction/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
