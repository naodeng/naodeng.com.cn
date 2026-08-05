# Daily Testing Workflow

Author: naodeng

## Metadata
- slug: daily-testing-workflow
- category: workflow
- hasEvals: true
- syncedAt: 2026-08-05
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/daily-testing-workflow/SKILL.md
- description: Use this skill when you need a day-by-day QA routine including planning, execution, bug reporting, and end-of-day wrap-up; triggers include daily testing workflow and daily QA routine.

## When to Use

- Need a one-day QA cadence: morning plan, execution, defects, EOD wrap-up.
- Need stage gates and handoffs to type skills—not a single isolated testing task.

## Workflow

1. Read and follow `prompts/daily-testing-workflow.md` (stages, gates, handoffs, output structure).
2. Add only context that changes the result: day scope, environment, constraints, risks, carryover defects.
3. After locating the stage, hand off by skill name per `reference.md`; no relative-path links to other skill internals.
4. If input is incomplete, draft a usable day plan and mark assumptions and gaps.

## Core Constraints

- Own phases and gates; hand full cases/strategy/reports to type skills.
- Prioritize by risk; gates must be checkable.
- Separate confirmed facts from assumptions.
- Do not invent missing details; no relative-path links to other skill files.

## Progressive Disclosure

- Before producing output, read and follow `prompts/daily-testing-workflow.md`.
- For step ↔ handoff skill mapping: read `reference.md`.
- When deep-diving a stage: invoke the matching type skill (e.g. `bug-reporting`); do not expand full artifacts here.
- When a template fits: use matching files under `output-templates/`.

## Pre-delivery Checklist

- [ ] Followed the main prompt’s output structure
- [ ] Includes today’s scope/won’t-do, gate status, priority queue, next skill
- [ ] High-risk items have explicit priority
- [ ] Did not invent details the user did not provide
- [ ] Assumptions and gaps are marked

## Common Pitfalls

- Do not turn the daily workflow into a functional-testing encyclopedia.
- Do not leave work forever “in progress” without exit criteria.
- Do not hand off multiple equal primary skills at once.
- Do not pretend execution succeeded on a red environment.

## Raw SKILL.md

```markdown
---
name: daily-testing-workflow
description: Use this skill when you need a day-by-day QA routine including planning, execution, bug reporting, and end-of-day wrap-up; triggers include daily testing workflow and daily QA routine.
---

# Daily Testing Workflow

**中文版：** See the corresponding Chinese skill.

## When to Use

- Need a one-day QA cadence: morning plan, execution, defects, EOD wrap-up.
- Need stage gates and handoffs to type skills—not a single isolated testing task.

## Workflow

1. Read and follow `prompts/daily-testing-workflow.md` (stages, gates, handoffs, output structure).
2. Add only context that changes the result: day scope, environment, constraints, risks, carryover defects.
3. After locating the stage, hand off by skill name per `reference.md`; no relative-path links to other skill internals.
4. If input is incomplete, draft a usable day plan and mark assumptions and gaps.

## Core Constraints

- Own phases and gates; hand full cases/strategy/reports to type skills.
- Prioritize by risk; gates must be checkable.
- Separate confirmed facts from assumptions.
- Do not invent missing details; no relative-path links to other skill files.

## Progressive Disclosure

- Before producing output, read and follow `prompts/daily-testing-workflow.md`.
- For step ↔ handoff skill mapping: read `reference.md`.
- When deep-diving a stage: invoke the matching type skill (e.g. `bug-reporting`); do not expand full artifacts here.
- When a template fits: use matching files under `output-templates/`.

## Pre-delivery Checklist

- [ ] Followed the main prompt’s output structure
- [ ] Includes today’s scope/won’t-do, gate status, priority queue, next skill
- [ ] High-risk items have explicit priority
- [ ] Did not invent details the user did not provide
- [ ] Assumptions and gaps are marked

## Common Pitfalls

- Do not turn the daily workflow into a functional-testing encyclopedia.
- Do not leave work forever “in progress” without exit criteria.
- Do not hand off multiple equal primary skills at once.
- Do not pretend execution succeeded on a red environment.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/daily-testing-workflow/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/daily-testing-workflow/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/daily-testing-workflow/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/daily-testing-workflow/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/daily-testing-workflow/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/daily-testing-workflow/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/daily-testing-workflow/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/daily-testing-workflow/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/daily-testing-workflow/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/daily-testing-workflow/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/daily-testing-workflow/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/daily-testing-workflow/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill daily-testing-workflow
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[daily-testing-workflow](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/daily-testing-workflow/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
