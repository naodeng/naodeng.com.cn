# Release Testing Workflow

Author: naodeng

## Metadata
- slug: release-testing-workflow
- category: workflow
- hasEvals: true
- syncedAt: 2026-08-05
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/release-testing-workflow/SKILL.md
- description: Use this skill when you need release-phase QA workflow from T-14 planning to go/no-go and post-release monitoring; triggers include release testing workflow and go/no-go QA.

## When to Use

- Need a release-window cadence: T-N planning → specialties → RC → Go/No-Go → post-release watch.
- Need release gates and a ship evidence pack, with specialty execution handed to type skills.

## Workflow

1. Read and follow `prompts/release-testing-workflow.md` (timeline, gates, Go/No-Go, handoffs).
2. Add release date, scope, freeze rules, candidate build, and known defects that change decisions.
3. After locating the T window, hand off by skill name per `reference.md`; invoke specialty type skills by name only.
4. If input is incomplete, still draft a gate board and mark assumptions—**never invent pass results**.

## Core Constraints

- Own release timeline and ship decision; hand specialty reports to `performance-testing` / `security-testing` / etc.
- Timelines may compress; gate criteria may not be deleted.
- Go/No-Go requires evidence; conditional Go must be verifiable.
- No relative-path links to other skill files.

## Progressive Disclosure

- Before producing output, read and follow `prompts/release-testing-workflow.md`.
- For step ↔ handoff mapping: read `reference.md`.
- For stage/specialty deep-dives: invoke the matching type skill; do not expand full specialty reports here.
- Templates: `output-templates/`.

## Pre-delivery Checklist

- [ ] Followed the main prompt’s output structure
- [ ] Includes scope/exclusions, T window, gate board, evidence gaps, next skill
- [ ] At decision point: Go / No-Go / conditional with rationale
- [ ] Did not invent pass results or unknown defect states
- [ ] Assumptions and open questions are marked

## Common Pitfalls

- Do not delete gates just to compress the calendar.
- Do not declare RC done before freeze.
- Do not write full specialty long-reports inside this skill.
- Do not replace conditional-Go terms with vague “keep watching”.

## Raw SKILL.md

```markdown
---
name: release-testing-workflow
description: Use this skill when you need release-phase QA workflow from T-14 planning to go/no-go and post-release monitoring; triggers include release testing workflow and go/no-go QA.
---

# Release Testing Workflow

**中文版：** See the corresponding Chinese skill.

## When to Use

- Need a release-window cadence: T-N planning → specialties → RC → Go/No-Go → post-release watch.
- Need release gates and a ship evidence pack, with specialty execution handed to type skills.

## Workflow

1. Read and follow `prompts/release-testing-workflow.md` (timeline, gates, Go/No-Go, handoffs).
2. Add release date, scope, freeze rules, candidate build, and known defects that change decisions.
3. After locating the T window, hand off by skill name per `reference.md`; invoke specialty type skills by name only.
4. If input is incomplete, still draft a gate board and mark assumptions—**never invent pass results**.

## Core Constraints

- Own release timeline and ship decision; hand specialty reports to `performance-testing` / `security-testing` / etc.
- Timelines may compress; gate criteria may not be deleted.
- Go/No-Go requires evidence; conditional Go must be verifiable.
- No relative-path links to other skill files.

## Progressive Disclosure

- Before producing output, read and follow `prompts/release-testing-workflow.md`.
- For step ↔ handoff mapping: read `reference.md`.
- For stage/specialty deep-dives: invoke the matching type skill; do not expand full specialty reports here.
- Templates: `output-templates/`.

## Pre-delivery Checklist

- [ ] Followed the main prompt’s output structure
- [ ] Includes scope/exclusions, T window, gate board, evidence gaps, next skill
- [ ] At decision point: Go / No-Go / conditional with rationale
- [ ] Did not invent pass results or unknown defect states
- [ ] Assumptions and open questions are marked

## Common Pitfalls

- Do not delete gates just to compress the calendar.
- Do not declare RC done before freeze.
- Do not write full specialty long-reports inside this skill.
- Do not replace conditional-Go terms with vague “keep watching”.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill release-testing-workflow
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[release-testing-workflow](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/release-testing-workflow/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
