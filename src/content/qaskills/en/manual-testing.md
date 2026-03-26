# manual-testing

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
- Who should use: Exploratory testers and QAs handling uncertain product behavior.
- Best used when: Automation is not ready or unknown risks need human exploration.
- How to use: Set an exploration charter, test with heuristics, and log reproducible findings.


## Usage Guide
1. Install and enable `manual-testing` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with exploration charter, for example: "Use `manual-testing` for 60-minute exploratory session on onboarding."
4. Ask for outputs: session plan, heuristic checklist, note-taking template, and debrief format.
5. After session, ask the skill to convert notes into actionable defects and next tests.

## Skill Breakdown

### When
- Fast exploratory validation is needed before automation is ready.
- New features have many unknown behaviors requiring human judgment.
- Team needs contextual observation beyond scripted checks.

### What
- Discover issues through guided human exploration and scenario thinking.
- Validate user experience, workflow coherence, and error handling quality.
- Provide early risk signals for product and engineering decisions.

### How
1. Set exploration charter with objective and timebox.
2. Choose heuristics: boundary, interruption, data variation, role switching.
3. Execute scenarios while capturing observations and clues.
4. Investigate suspicious behavior with focused follow-up checks.
5. Record findings with evidence and reproduction notes.
6. Debrief: summarize discovered risks and suggested next tests.

### Reference
### Positive Example (Input -> Output)
Input:
- Charter: onboarding + profile completion in 45 minutes

Output:
- Found input validation inconsistency and dead-end navigation path
- Delivered actionable repro notes and risk summary

### Negative Example (Input -> Output)
Input:
- "Try around and see"

Output (problem):
- No objective, no notes, no evidence trail
- Insights cannot be reused by team

### Limits
- Do not run manual testing without exploration charter.
- Do not rely on memory-only findings.
- Do not skip reproduction confirmation before reporting.
- Do not treat exploratory output as random comments.
- Do not ignore timebox and scope discipline.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/manual-testing/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [manual-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/manual-testing/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
