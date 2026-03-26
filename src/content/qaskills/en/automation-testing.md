# automation-testing

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
- Who should use: Automation QAs and teams running CI/CD quality gates.
- Best used when: Manual regression is too costly and key flows need repeatable checks.
- How to use: Select stable high-value scenarios, automate in layers, and maintain suite health continuously.


## Usage Guide
1. Install and enable `automation-testing` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with candidate scope, for example: "Use `automation-testing` to select top 20 automation candidates."
4. Ask for outputs: ROI ranking, layer recommendation (API/UI), and CI gate proposal.
5. Re-run monthly to refresh candidates and retire low-value scripts.

## Skill Breakdown

### When
- Regression scope is large and repetitive manual runs are costly.
- Team needs stable quality checks in CI/CD.
- Critical flows require fast feedback on each build.

### What
- Build reliable automated checks for high-value regression paths.
- Reduce release risk through continuous verification.
- Improve feedback speed while controlling maintenance cost.

### How
1. Select automation candidates by business criticality and stability.
2. Design layered checks (API/service/UI) for best ROI.
3. Implement robust data handling and environment isolation.
4. Add deterministic assertions and failure diagnostics.
5. Integrate into pipeline with clear quality gates.
6. Maintain suite health by removing flaky/obsolete tests.

### Reference
### Positive Example (Input -> Output)
Input:
- Weekly regressions: login, payment, refund, invoice

Output:
- Automated suite with build-level smoke + nightly full run
- Flakiness dashboard and owner-based fix workflow

### Negative Example (Input -> Output)
Input:
- "Automate everything"

Output (problem):
- Low-value unstable UI scripts dominate effort
- Slow pipeline and poor trust in failures

### Limits
- Do not automate volatile low-value scenarios first.
- Do not ignore test maintainability and ownership.
- Do not merge flaky tests into release gate.
- Do not treat automation coverage as total quality coverage.
- Do not skip manual exploratory testing for unknown risks.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/automation-testing/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/automation-testing/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/automation-testing/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/automation-testing/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/automation-testing/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/automation-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/automation-testing/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/automation-testing/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/automation-testing/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/automation-testing/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/automation-testing/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/automation-testing/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [automation-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/automation-testing/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
