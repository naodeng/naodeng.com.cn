# test-reporting

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
- Who should use: QAs and leads responsible for quality communication.
- Best used when: Stakeholders need a decision-ready summary of test results and risks.
- How to use: Aggregate execution evidence, highlight blockers and trends, then provide clear next-step recommendations.


## Usage Guide
1. Install and enable `test-reporting` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with execution data, for example: "Use `test-reporting` to summarize this week's test results."
4. Ask for decision-oriented output: blocker list, trend, residual risk, and release recommendation.
5. Reuse the same report template each cycle for easy comparison.

## Skill Breakdown

### When
- Stakeholders need a clear quality status for decision-making.
- Testing has progressed and results must be consolidated.
- Team needs transparent evidence for release or rollback decisions.

### What
- Produce concise but evidence-based test reports.
- Translate test execution data into business-relevant risk status.
- Align teams on current quality, unresolved issues, and next actions.

### How
1. Collect execution data: scope, pass/fail, defect distribution, blocked items.
2. Normalize metrics and remove noise from unstable runs.
3. Highlight critical findings and unresolved decision blockers.
4. Map defects to business impact and release risk.
5. Summarize trend vs. previous cycle.
6. Publish decision-oriented report with recommended actions.

### Reference
### Positive Example (Input -> Output)
Input:
- 420 cases executed, 12 open defects, 2 critical unresolved

Output:
- Report with risk summary, blocker ownership, and ETA confidence
- Recommendation: no-go until payment rollback defect resolved

### Negative Example (Input -> Output)
Input:
- "Share testing progress"

Output (problem):
- Only pass rate shown, no risk context or blocker analysis
- Leadership cannot make release decision

### Limits
- Do not report metrics without context and scope.
- Do not hide blockers behind aggregate pass rate.
- Do not mix verified facts with assumptions.
- Do not omit trend and change explanation.
- Do not provide go/no-go recommendation without clear evidence.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-reporting/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [test-reporting](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/test-reporting/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
