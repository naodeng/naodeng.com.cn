# Test Reporting

Author: naodeng

## Metadata
- slug: test-reporting
- category: type
- hasEvals: true
- syncedAt: 2026-08-10
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/test-reporting/SKILL.md
- description: Use this skill when you need to generate test reports with summary, metrics, defect analysis, and risk assessment; triggers include test reporting and QA status report.

## When to Use

- Need help with test reporting in a real project context.
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

- Before producing output, read and follow `prompts/test-reporting.md` (minimum coverage, output structure, quality bar).
- When Excel/CSV/JSON/Word is requested: read `output-formats.md` and honor the format.
- When a ready-made template fits: use matching files under `output-templates/`.
- For format conversion or helper checks: prefer existing `scripts/` over reinventing.
- For evaluating/regressing this skill: use `evals/` with skill-up.

## Pre-delivery Checklist

- [ ] Followed the main prompt's output structure
- [ ] Minimum coverage focus: scope tested, scope not tested, overall status, critical defects or blockers, risk summary, coverage confidence, environment or data issues, recommended release position, ... (details in main prompt)
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
name: test-reporting
description: Use this skill when you need to generate test reports with summary, metrics, defect analysis, and risk assessment; triggers include test reporting and QA status report.
---

# Test Reporting

**中文版：** See the corresponding Chinese skill.

## When to Use

- Need help with test reporting in a real project context.
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

- Before producing output, read and follow `prompts/test-reporting.md` (minimum coverage, output structure, quality bar).
- When Excel/CSV/JSON/Word is requested: read `output-formats.md` and honor the format.
- When a ready-made template fits: use matching files under `output-templates/`.
- For format conversion or helper checks: prefer existing `scripts/` over reinventing.
- For evaluating/regressing this skill: use `evals/` with skill-up.

## Pre-delivery Checklist

- [ ] Followed the main prompt's output structure
- [ ] Minimum coverage focus: scope tested, scope not tested, overall status, critical defects or blockers, risk summary, coverage confidence, environment or data issues, recommended release position, ... (details in main prompt)
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
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill test-reporting
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[test-reporting](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/test-reporting/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
