# Manual/Exploratory Testing

Author: naodeng

## Metadata
- slug: manual-testing
- category: type
- hasEvals: true
- syncedAt: 2026-08-10
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/manual-testing/SKILL.md
- description: Use this skill when you need to plan manual or exploratory testing with charters, heuristics, and session records; triggers include manual testing and exploratory testing.

## When to Use

- Need help with manual testing in a real project context.
- Need an output that can be used directly for execution, review, or follow-up.

## Workflow

1. Read and follow the main prompt listed under Progressive disclosure (coverage, structure, quality bar).
2. Add only project context that changes the result: scope, environment, constraints, risks, dependencies, expected deliverable.
3. If input is incomplete, return a usable first draft and explicitly mark assumptions and gaps.
4. Default to Markdown; switch formats only when the user asks.

## Core Constraints

- Prioritize by risk / business impact — do not treat everything equally.
- Separate confirmed facts from current assumptions.
- Do not invent endpoints, fields, environments, or root causes the user did not provide.
- Keep output executable: concrete scenarios, clear priority, clear next steps.

## Progressive Disclosure

- Before producing output, read and follow `prompts/manual-testing.md` (minimum coverage, output structure, quality bar).
- When Excel/CSV/JSON/Word is requested: read `output-formats.md` and honor the format.
- When a ready-made template fits: use matching files under `output-templates/`.
- For format conversion or helper checks: prefer existing `scripts/` over reinventing.
- For evaluating/regressing this skill: use `evals/` with skill-up.

## Pre-delivery Checklist

- [ ] Followed the main prompt's output structure
- [ ] Minimum coverage focus: scope, core journeys, setup and accounts, positive checks, negative checks, boundary checks, exploratory focus areas, evidence to collect, ... (details in main prompt)
- [ ] Covered the minimum checklist, or explained omissions
- [ ] High-risk items have explicit priority
- [ ] Did not invent details the user did not provide
- [ ] Assumptions and gaps are marked

## Common Pitfalls

- Do not pretend completeness when scope/context is missing.
- Do not treat every item as equally important.
- Do not skip assumptions and information gaps.
- Do not dump generic theory unrelated to the current toolchain.

## Raw SKILL.md

```markdown
---
name: manual-testing
description: Use this skill when you need to plan manual or exploratory testing with charters, heuristics, and session records; triggers include manual testing and exploratory testing.
---

# Manual/Exploratory Testing

**中文版：** See the corresponding Chinese skill.

## When to Use

- Need help with manual testing in a real project context.
- Need an output that can be used directly for execution, review, or follow-up.

## Workflow

1. Read and follow the main prompt listed under Progressive disclosure (coverage, structure, quality bar).
2. Add only project context that changes the result: scope, environment, constraints, risks, dependencies, expected deliverable.
3. If input is incomplete, return a usable first draft and explicitly mark assumptions and gaps.
4. Default to Markdown; switch formats only when the user asks.

## Core Constraints

- Prioritize by risk / business impact — do not treat everything equally.
- Separate confirmed facts from current assumptions.
- Do not invent endpoints, fields, environments, or root causes the user did not provide.
- Keep output executable: concrete scenarios, clear priority, clear next steps.

## Progressive Disclosure

- Before producing output, read and follow `prompts/manual-testing.md` (minimum coverage, output structure, quality bar).
- When Excel/CSV/JSON/Word is requested: read `output-formats.md` and honor the format.
- When a ready-made template fits: use matching files under `output-templates/`.
- For format conversion or helper checks: prefer existing `scripts/` over reinventing.
- For evaluating/regressing this skill: use `evals/` with skill-up.

## Pre-delivery Checklist

- [ ] Followed the main prompt's output structure
- [ ] Minimum coverage focus: scope, core journeys, setup and accounts, positive checks, negative checks, boundary checks, exploratory focus areas, evidence to collect, ... (details in main prompt)
- [ ] Covered the minimum checklist, or explained omissions
- [ ] High-risk items have explicit priority
- [ ] Did not invent details the user did not provide
- [ ] Assumptions and gaps are marked

## Common Pitfalls

- Do not pretend completeness when scope/context is missing.
- Do not treat every item as equally important.
- Do not skip assumptions and information gaps.
- Do not dump generic theory unrelated to the current toolchain.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill manual-testing
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[manual-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/manual-testing/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
