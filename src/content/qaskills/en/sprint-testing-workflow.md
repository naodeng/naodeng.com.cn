# Sprint Testing Workflow

Author: naodeng

## Metadata
- slug: sprint-testing-workflow
- category: workflow
- hasEvals: true
- syncedAt: 2026-08-30
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/sprint-testing-workflow/SKILL.md
- description: Use this skill when you need a sprint-based QA workflow from planning through review and retrospective; triggers include sprint testing workflow and iteration QA workflow.

## When to Use

- Need a sprint cadence: planning → setup → execution → regression → stabilize → review.
- Need iteration gates and DoD with handoffs to type skills—not a one-off testing task.

## Workflow

1. Read and follow `prompts/sprint-testing-workflow.md` (stages, gates, DoD, handoffs).
2. Add sprint goal, story scope, capacity, and carryover defects that change the plan.
3. After locating the stage, hand off by skill name per `reference.md`; no relative-path links to other skill internals.
4. If input is incomplete, draft a usable sprint test plan and mark assumptions and gaps.

## Core Constraints

- Own iteration phases and exit evidence; hand full artifacts to type skills.
- Gates and DoD must be checkable.
- On scope change, re-rank and state gate impact.
- No relative-path links to other skill files.

## Progressive Disclosure

- Before producing output, read and follow `prompts/sprint-testing-workflow.md`.
- For step ↔ handoff mapping: read `reference.md`.
- For stage deep-dives: invoke the matching type skill; do not expand full artifacts here.
- Templates: `output-templates/`.

## Pre-delivery Checklist

- [ ] Followed the main prompt’s output structure
- [ ] Includes stage position, gate board, exit-criteria check, next skill
- [ ] High-risk items have priority and Owner
- [ ] Did not invent details the user did not provide
- [ ] Assumptions, tradeoffs, and carryover are marked

## Common Pitfalls

- Do not write a day diary with no gates.
- Do not dump full case bodies during planning.
- Do not claim regression passed while development is still open-ended.
- Do not replace exit evidence with “we tested a lot”.

## Raw SKILL.md

```markdown
---
name: sprint-testing-workflow
description: Use this skill when you need a sprint-based QA workflow from planning through review and retrospective; triggers include sprint testing workflow and iteration QA workflow.
---

# Sprint Testing Workflow

**中文版：** See the corresponding Chinese skill.

## When to Use

- Need a sprint cadence: planning → setup → execution → regression → stabilize → review.
- Need iteration gates and DoD with handoffs to type skills—not a one-off testing task.

## Workflow

1. Read and follow `prompts/sprint-testing-workflow.md` (stages, gates, DoD, handoffs).
2. Add sprint goal, story scope, capacity, and carryover defects that change the plan.
3. After locating the stage, hand off by skill name per `reference.md`; no relative-path links to other skill internals.
4. If input is incomplete, draft a usable sprint test plan and mark assumptions and gaps.

## Core Constraints

- Own iteration phases and exit evidence; hand full artifacts to type skills.
- Gates and DoD must be checkable.
- On scope change, re-rank and state gate impact.
- No relative-path links to other skill files.

## Progressive Disclosure

- Before producing output, read and follow `prompts/sprint-testing-workflow.md`.
- For step ↔ handoff mapping: read `reference.md`.
- For stage deep-dives: invoke the matching type skill; do not expand full artifacts here.
- Templates: `output-templates/`.

## Pre-delivery Checklist

- [ ] Followed the main prompt’s output structure
- [ ] Includes stage position, gate board, exit-criteria check, next skill
- [ ] High-risk items have priority and Owner
- [ ] Did not invent details the user did not provide
- [ ] Assumptions, tradeoffs, and carryover are marked

## Common Pitfalls

- Do not write a day diary with no gates.
- Do not dump full case bodies during planning.
- Do not claim regression passed while development is still open-ended.
- Do not replace exit evidence with “we tested a lot”.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/sprint-testing-workflow/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/sprint-testing-workflow/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/sprint-testing-workflow/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/sprint-testing-workflow/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/sprint-testing-workflow/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/sprint-testing-workflow/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/sprint-testing-workflow/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/sprint-testing-workflow/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/sprint-testing-workflow/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/sprint-testing-workflow/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/sprint-testing-workflow/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/sprint-testing-workflow/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill sprint-testing-workflow
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[sprint-testing-workflow](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/sprint-testing-workflow/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
