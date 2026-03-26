# test-case-reviewer

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
- Who should use: Senior QAs reviewing case quality before execution.
- Best used when: Existing case sets are large and need quality, coverage, and maintainability review.
- How to use: Review traceability and scenario completeness, then output prioritized revision actions.


## Usage Guide
1. Install and enable `test-case-reviewer` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with existing case set, for example: "Use `test-case-reviewer` to review these 120 cases."
4. Require issue-based output: missing coverage, ambiguity, duplicates, and prioritized fixes.
5. After case updates, rerun review for changed cases only.

## Skill Breakdown

### When
- Existing test cases must be reviewed for quality before execution.
- Regression packs have grown and duplication risk is high.
- Team wants consistent review criteria across reviewers.

### What
- Identify quality defects in test cases.
- Output actionable revision items by impact priority.
- Improve case clarity, coverage balance, and maintainability.

### How
1. Check requirement traceability and scenario completeness.
2. Review atomicity, readability, and reproducibility.
3. Detect overlap, obsolete logic, and inconsistent expectations.
4. Assess risk coverage for critical/edge/negative paths.
5. Mark findings with severity and fix recommendation.
6. Produce review summary and re-review gate.

### Reference
### Positive Example (Input -> Output)
Input:
- 120 regression cases for account/profile modules

Output:
- 18 high-priority fixes (missing negative path, unstable data dependency)
- 27 merge/delete suggestions for duplicate cases
- Updated review checklist for next cycle

### Negative Example (Input -> Output)
Input:
- "Please review quickly"

Output (problem):
- Only spelling edits, no coverage or risk analysis
- No prioritized fix list

### Limits
- Do not rewrite all cases without issue evidence.
- Do not review in style-only mode.
- Do not ignore flaky data/environment dependency.
- Do not mark cases as passable when key assertion is missing.
- Do not close review without measurable acceptance criteria.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-case-reviewer/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-case-reviewer/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-case-reviewer/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-case-reviewer/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-case-reviewer/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-case-reviewer/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-case-reviewer/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-case-reviewer/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-case-reviewer/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-case-reviewer/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-case-reviewer/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-case-reviewer/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [test-case-reviewer](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/test-case-reviewer/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
