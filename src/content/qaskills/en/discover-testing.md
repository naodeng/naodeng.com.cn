# discover-testing

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
- Who should use: QA leads, PMs, and engineers who need to choose the right testing skill quickly.
- Best used when: A request is vague and you need a fast decision on which QA skill to run first.
- How to use: Describe the problem and constraints, let this skill route to the best next skill, then execute that selected skill.


## Usage Guide
1. Install and enable `discover-testing` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with a direct instruction, for example: "Use `discover-testing` to build my testing workflow for this release/sprint/day."
4. Ask for deliverables explicitly: phase plan, owners, blockers, and decision checklist.
5. Run one feedback round: update changed constraints and ask the skill to regenerate only affected sections.

## Skill Breakdown

### When
- You receive a vague request like "help me test this" and must pick the right testing approach quickly.
- A PM or developer asks which QA skill should be used first under tight time.
- A new QA member needs a routing guide from problem type to executable skill.

### What
- Identify the best-fit next skill for the current problem and context.
- Produce a clear decision path (why this skill, why now, what next).
- Reduce trial-and-error and avoid starting with the wrong testing method.

### How
1. Classify request type: requirement quality, feature correctness, API, performance, security, release risk, or reporting.
2. Extract constraints: deadline, environment, data availability, automation maturity, and business criticality.
3. Match constraints to candidate skills and rank by impact vs. effort.
4. Pick one primary skill and one fallback skill with trigger conditions.
5. Define expected output from selected skill before execution.
6. Re-route only when evidence shows mismatch.

### Reference
### Positive Example (Input -> Output)
Input:
- "Login API changed, release in 2 days, no regression report yet."

Output:
- First: `api-testing` for contract and regression scope
- Second: `test-reporting` for release-readiness evidence
- Reason: highest risk is integration break before release

### Negative Example (Input -> Output)
Input:
- "Checkout flow fails intermittently on mobile"

Output (problem):
- Route directly to `test-case-writing` without reproducing failure context
- Misses `mobile-testing` as the first diagnostic step

### Limits
- Do not replace deep execution skills; this skill is for routing and prioritization.
- Do not provide random skill lists without decision logic.
- Do not ignore business priority and release window.
- Do not lock to one route when new evidence conflicts.
- Do not claim final quality status without downstream execution evidence.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/discover-testing/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/discover-testing/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/discover-testing/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/discover-testing/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/discover-testing/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/discover-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/discover-testing/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/discover-testing/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/discover-testing/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/discover-testing/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/discover-testing/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/discover-testing/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [discover-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/discover-testing/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
