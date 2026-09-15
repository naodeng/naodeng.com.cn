# Test Data Requirement Analysis

Author: naodeng

## Metadata
- slug: test-data-requirement-analysis
- category: type
- hasEvals: true
- syncedAt: 2026-09-15
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/test-data-requirement-analysis/SKILL.md
- description: Use this skill when you need to analyze test-data prerequisites, relationships, privacy, lifecycle, and environment blockers before test design or generation; triggers include test data requirement analysis.

## When to Use

- Use it to determine which entities, fields, states, roles, and relationships a scenario needs.
- Use it to find schema, source, masking, isolation, lifecycle, cleanup, and environment prerequisite gaps.
- Use it when data material is incomplete but a constrained requirement list can be consumed by test design or data generation.

Do not use it to create records, call real data sources, copy production data, write full cases, or execute tests.

## Workflow

1. Read and follow `prompts/test-data-requirement-analysis.md`, beginning with the six-part input audit.
2. Map each scenario/test objective to required entities, fields, relationships, states, roles, sources, and environment.
3. Record valid/invalid/boundary/combination conditions, privacy/cleanup requirements, blockers, and validation in `TDR-##` entries.
4. Separate facts, preparation inference, open constraints, and Human/compliance decisions.
5. Deliver bounded requirements when information is missing and state why generation or execution cannot be promised.

## Core Constraints

- Cover applicable entities/fields, referential integrity, valid/invalid/boundary/combination, states, roles, sources, masking, setup, cleanup, and isolation.
- Do not generate data, read/export real personal or production data, or connect to real data sources.
- Do not invent fields, relationships, quantities, privacy rules, retention, permissions, or cleanup results.
- `TDR-##` is a preparation requirement/gap, not proof that data exists, is available, compliant, or passed testing.
- State what later test design or data generation needs; do not replace generation or Human/compliance approval.

## Common Pitfalls

- Listing values without explaining why they are needed, related, and cleaned up.
- Treating schema presence as data availability or a masking statement as compliance evidence.
- Mixing data-preparation requirement analysis with dataset generation.
- Ignoring roles, states, referential integrity, and environment isolation while checking only field format.

## Raw SKILL.md

```markdown
---
name: test-data-requirement-analysis
description: Use this skill when you need to analyze test-data prerequisites, relationships, privacy, lifecycle, and environment blockers before test design or generation; triggers include test data requirement analysis.
---

# Test Data Requirement Analysis

Analyze entity, field, relationship, state, role, privacy, source, lifecycle, setup, and cleanup requirements before test design or data generation. Produce `TDR-##` requirements and blockers. Do not generate data, read production data, or copy the `test-data-generation` dataset plan.

## When to Use

- Use it to determine which entities, fields, states, roles, and relationships a scenario needs.
- Use it to find schema, source, masking, isolation, lifecycle, cleanup, and environment prerequisite gaps.
- Use it when data material is incomplete but a constrained requirement list can be consumed by test design or data generation.

Do not use it to create records, call real data sources, copy production data, write full cases, or execute tests.

## Output Format Options

- Use Markdown by default; when a table, CSV, or JSON is requested, preserve the same evidence, status, impact, owner, and validation fields.
- Do not present a structured format or static inventory as execution, pass, approval, or release evidence.

## How to Use

1. Read this Skill's primary prompt and provide the objective, scope, material, environment, and available evidence.
2. Follow the prompt's input audit and output contract; deliver a bounded first pass when information is incomplete.
3. Retain source, evidence status, impact, owner role, close condition, and validation method for every finding.

## Workflow

1. Read and follow `prompts/test-data-requirement-analysis.md`, beginning with the six-part input audit.
2. Map each scenario/test objective to required entities, fields, relationships, states, roles, sources, and environment.
3. Record valid/invalid/boundary/combination conditions, privacy/cleanup requirements, blockers, and validation in `TDR-##` entries.
4. Separate facts, preparation inference, open constraints, and Human/compliance decisions.
5. Deliver bounded requirements when information is missing and state why generation or execution cannot be promised.

## Core Constraints

- Cover applicable entities/fields, referential integrity, valid/invalid/boundary/combination, states, roles, sources, masking, setup, cleanup, and isolation.
- Do not generate data, read/export real personal or production data, or connect to real data sources.
- Do not invent fields, relationships, quantities, privacy rules, retention, permissions, or cleanup results.
- `TDR-##` is a preparation requirement/gap, not proof that data exists, is available, compliant, or passed testing.
- State what later test design or data generation needs; do not replace generation or Human/compliance approval.

## Reference Files

- Always read `prompts/test-data-requirement-analysis.md` before producing an analysis.
- For regression, read `evals/eval.yaml` and matching cases; configuration does not prove data is ready.
- For trigger checks, use `evals/trigger-prompts.csv` and `evals/local-rules.json`; missing selection trace is `BLOCKED`.

## Best Practices

- Prioritize high-impact gaps with a verifiable next action, using the smallest useful experiment or evidence request.
- Separate facts, evidence-backed inferences, recommendations, and Human decisions; never upgrade an assumption into a conclusion.

## Pre-delivery Check

- [ ] Recorded known facts, missing information, conflicts, stale information, out-of-scope items, and assumptions.
- [ ] Each `TDR-##` has scenario/goal, entities/fields, relationships/states/roles, constraints, source, and evidence.
- [ ] Valid/invalid/boundary/combination, masking, setup, isolation, and cleanup requirements are separate where applicable.
- [ ] Blockers have an owner role, smallest evidence action, and validation method.
- [ ] No records were generated, production data read, or requirements presented as existing data/passed testing.

## Common Pitfalls

- Listing values without explaining why they are needed, related, and cleaned up.
- Treating schema presence as data availability or a masking statement as compliance evidence.
- Mixing data-preparation requirement analysis with dataset generation.
- Ignoring roles, states, referential integrity, and environment isolation while checking only field format.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-data-requirement-analysis/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-data-requirement-analysis/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-data-requirement-analysis/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-data-requirement-analysis/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-data-requirement-analysis/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-data-requirement-analysis/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-data-requirement-analysis/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-data-requirement-analysis/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-data-requirement-analysis/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-data-requirement-analysis/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-data-requirement-analysis/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-data-requirement-analysis/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill test-data-requirement-analysis
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[test-data-requirement-analysis](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/test-data-requirement-analysis/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
