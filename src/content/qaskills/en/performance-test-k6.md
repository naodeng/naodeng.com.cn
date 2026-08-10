# performance-test-k6 (EN)

Author: naodeng

## Metadata
- slug: performance-test-k6
- category: type
- hasEvals: true
- syncedAt: 2026-08-09
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/performance-test-k6/SKILL.md
- description: Use this skill when you need k6 load/stress/spike/soak scope, scripts, or runnable entry points; triggers include k6, k6 scripts, and k6 performance testing.

## When to Use

- Need performance outputs that should land in k6 structure.
- The project already uses k6 or wants k6-ready scenarios.

## Workflow

1. Read and follow the main prompt listed under Progressive disclosure (coverage, structure, quality bar).
2. Add only project context that changes the result: scope, environment, constraints, risks, dependencies, expected deliverable.
3. If input is incomplete, return a usable first draft and explicitly mark assumptions and gaps.
4. Default to Markdown; switch formats only when the user asks.

## Core Constraints

- Prioritize by risk / business impact — do not treat everything equally.
- Separate confirmed facts from current assumptions; with no SLA/traffic, label every number as Assumption and list Open Questions.
- Do not invent endpoints, fields, environments, or root causes the user did not provide; secrets are placeholders / `__ENV` only — never real tokens.
- Keep output executable: concrete scenarios, clear priority, clear next steps.
- Default to only the most critical 1–2 scenario types — do not run baseline/load/stress/spike/soak all by default.

## Progressive Disclosure

- Before producing output, read and follow `prompts/performance-test-k6.md` (minimum coverage, output structure, quality bar).
- When a ready-made template fits: use matching files under `output-templates/`.
- When the user wants examples or alignment with existing assets: read relevant `examples/`.
- For deep framework/troubleshoot/schema notes: read only the relevant file(s) under `references/`, do not load the whole directory.
- For format conversion or helper checks: prefer existing `scripts/` over reinventing.
- For evaluating/regressing this skill: use `evals/` with skill-up.

## Pre-delivery Checklist

- [ ] Followed the main prompt's output structure
- [ ] Minimum coverage focus: target scenarios, load model, data setup needs, VU or duration profile, thresholds, environment and monitoring, priority bottlenecks, reporting needs, ... (details in main prompt)
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
name: performance-test-k6
description: Use this skill when you need k6 load/stress/spike/soak scope, scripts, or runnable entry points; triggers include k6, k6 scripts, and k6 performance testing.
---

# performance-test-k6 (EN)

**中文版：** See the corresponding Chinese skill.

## When to Use

- Need performance outputs that should land in k6 structure.
- The project already uses k6 or wants k6-ready scenarios.

## Workflow

1. Read and follow the main prompt listed under Progressive disclosure (coverage, structure, quality bar).
2. Add only project context that changes the result: scope, environment, constraints, risks, dependencies, expected deliverable.
3. If input is incomplete, return a usable first draft and explicitly mark assumptions and gaps.
4. Default to Markdown; switch formats only when the user asks.

## Core Constraints

- Prioritize by risk / business impact — do not treat everything equally.
- Separate confirmed facts from current assumptions; with no SLA/traffic, label every number as Assumption and list Open Questions.
- Do not invent endpoints, fields, environments, or root causes the user did not provide; secrets are placeholders / `__ENV` only — never real tokens.
- Keep output executable: concrete scenarios, clear priority, clear next steps.
- Default to only the most critical 1–2 scenario types — do not run baseline/load/stress/spike/soak all by default.

## Progressive Disclosure

- Before producing output, read and follow `prompts/performance-test-k6.md` (minimum coverage, output structure, quality bar).
- When a ready-made template fits: use matching files under `output-templates/`.
- When the user wants examples or alignment with existing assets: read relevant `examples/`.
- For deep framework/troubleshoot/schema notes: read only the relevant file(s) under `references/`, do not load the whole directory.
- For format conversion or helper checks: prefer existing `scripts/` over reinventing.
- For evaluating/regressing this skill: use `evals/` with skill-up.

## Pre-delivery Checklist

- [ ] Followed the main prompt's output structure
- [ ] Minimum coverage focus: target scenarios, load model, data setup needs, VU or duration profile, thresholds, environment and monitoring, priority bottlenecks, reporting needs, ... (details in main prompt)
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
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-test-k6/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-test-k6/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-test-k6/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-test-k6/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-test-k6/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-test-k6/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-test-k6/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-test-k6/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-test-k6/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-test-k6/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-test-k6/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-test-k6/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill performance-test-k6
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[performance-test-k6](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/performance-test-k6/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
