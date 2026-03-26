# release-testing-workflow

作者：naodeng

## TOC
- [Quick Intro](#quick-intro)
- [Usage Guide](#usage-guide)
- [Skill Breakdown](#skill-breakdown)
  - [When](#when)
  - [What](#what)
  - [How](#how)
  - [Reference](#reference)
  - [Limits](#limits)
- [Install](#install)
- [Source](#source)
- [Last Synced](#last-synced)

## Quick Intro
- Who should use: QA coordinators, test leads, and cross-functional delivery teams.
- Best used when: You need release readiness checks and go/no-go coordination rather than ad-hoc test execution.
- How to use: Set scope and timeline, run the workflow by phase, then output status, risks, and next actions.


## Usage Guide
1. Install and enable `release-testing-workflow` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with a direct instruction, for example: "Use `release-testing-workflow` to build my testing workflow for this release/sprint/day."
4. Ask for deliverables explicitly: phase plan, owners, blockers, and decision checklist.
5. Run one feedback round: update changed constraints and ask the skill to regenerate only affected sections.

## Skill Breakdown

### When
- You need a structured QA workflow for release window.
- Multiple testing activities must be orchestrated, not run ad hoc.
- Team needs transparent status, dependency handling, and risk escalation.

### What
- Build an execution sequence from analysis to verification to reporting.
- Deliver go/no-go release decision with traceable evidence.
- Expose cross-module release risk early, with owner and due date.

### How
1. Confirm objective, scope, entry criteria, and exit criteria.
2. Split work into phases: preparation, execution, consolidation, sign-off.
3. Assign owner, deadline, and dependency for each phase task.
4. Run critical-path tests first, then supporting and edge checks.
5. Summarize findings by severity, business impact, and fix readiness.
6. Publish workflow result: pass/fail status, residual risk, next action.

### Reference
### Positive Example (Input -> Output)
Input:
- Scope: payment + coupon + order split
- Time: 3 days
- Goal: release confidence

Output:
- Workflow board with owner and schedule
- Priority execution order and risk log
- Final decision note with blocking and non-blocking issues

### Negative Example (Input -> Output)
Input:
- "Please test core flows before launch"

Output (problem):
- No phase split, no owners, no completion criteria
- Team cannot judge progress or release readiness

### Limits
- Do not run workflow without explicit entry/exit criteria.
- Do not hide blockers in summary-level status updates.
- Do not skip evidence collection for key decisions.
- Do not convert workflow into a static checklist without reprioritization.
- Do not output go/no-go recommendation when critical data is missing.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/release-testing-workflow/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [release-testing-workflow](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/release-testing-workflow/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
