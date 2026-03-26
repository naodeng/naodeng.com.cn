# bug-reporting

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
- Who should use: QAs who hand off defects to engineering and product.
- Best used when: Defects must be reproduced clearly for fast diagnosis and fix.
- How to use: Capture environment, steps, evidence, and impact, then track fix and retest to closure.


## Usage Guide
1. Install and enable `bug-reporting` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with defect evidence, for example: "Use `bug-reporting` to create a developer-ready bug ticket."
4. Require fixed structure: environment, repro steps, expected/actual, logs, impact, retest criteria.
5. After fix, ask the skill to generate a closure verification checklist.

## Skill Breakdown

### When
- Defects are found and must be communicated for fast fix and retest.
- Team has recurring misunderstandings about issue severity or reproduction.
- Management needs clear defect status and impact visibility.

### What
- Produce actionable bug reports with clear reproduction and impact.
- Improve fix turnaround by reducing back-and-forth clarification.
- Enable reliable prioritization by severity and business risk.

### How
1. Capture environment, precondition, and minimal reproduction steps.
2. Document expected vs. actual behavior with objective evidence.
3. Assess severity, scope impact, and user/business consequence.
4. Attach logs/screenshots/api payloads for quick diagnosis.
5. Propose verification points after fix.
6. Track lifecycle and closure evidence.

### Reference
### Positive Example (Input -> Output)
Input:
- Checkout failure under expired-token refresh path

Output:
- Repro steps, request id, failing response payload
- Severity rationale (payment interruption)
- Retest checklist for fix validation

### Negative Example (Input -> Output)
Input:
- "Payment has bug"

Output (problem):
- No environment, no reproducible steps, no expected result
- Developer cannot verify root cause efficiently

### Limits
- Do not submit bugs without reproducible evidence.
- Do not overstate severity without impact rationale.
- Do not mix multiple unrelated issues in one ticket.
- Do not close issue without retest proof.
- Do not hide intermittent behavior; mark and track it explicitly.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/bug-reporting/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/bug-reporting/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/bug-reporting/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/bug-reporting/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/bug-reporting/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/bug-reporting/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/bug-reporting/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/bug-reporting/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/bug-reporting/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/bug-reporting/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/bug-reporting/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/bug-reporting/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [bug-reporting](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/bug-reporting/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
