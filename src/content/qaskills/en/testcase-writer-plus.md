# testcase-writer-plus

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
- Who should use: QAs who need executable and reviewable test cases.
- Best used when: Scope is clarified and the team needs concrete cases for execution.
- How to use: Start from requirements and risks, write atomic cases with data and expected results, then run a quality self-review.


## Usage Guide
1. Install and enable `testcase-writer-plus` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with approved requirement + acceptance criteria, for example: "Use `testcase-writer-plus` to generate executable test cases."
4. Specify case format: preconditions, steps, expected result, priority, and traceability id.
5. Ask for split outputs: smoke cases first, then full regression cases.

## Skill Breakdown

### When
- Requirement/risk is ready and team needs executable test cases.
- Test coverage must be explicit before development freeze.
- Multiple testers need consistent case quality standard.

### What
- Produce complete, reviewable, and executable test cases and include reusable parameterized case patterns.
- Cover main flow, edge flow, negative flow, and data variation.
- Ensure each case has clear precondition, action, and expected result.

### How
1. Derive scenarios from business rule and user journey.
2. Split scenarios into atomic test objectives.
3. Define data set and environment prerequisites per case.
4. Write steps with observable checkpoints.
5. Add expected outcomes with verification source.
6. Run self-review for ambiguity, duplication, and missing boundaries.

### Reference
### Positive Example (Input -> Output)
Input:
- Story: apply coupon during checkout, with member/non-member variants

Output:
- Cases for valid coupon, expired coupon, overlap rule, rollback on payment failure
- Explicit expected totals and error messages
- Traceability to requirement clauses

### Negative Example (Input -> Output)
Input:
- "Write checkout test cases"

Output (problem):
- High-level bullet list only, no steps, no data, no expected results
- Not executable by another tester

### Limits
- Do not produce narrative-only pseudo cases.
- Do not skip failure-path validation.
- Do not mix multiple objectives into one case.
- Do not omit test data and preconditions.
- Do not claim coverage completeness without traceability.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/testcase-writer-plus/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/testcase-writer-plus/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/testcase-writer-plus/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/testcase-writer-plus/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/testcase-writer-plus/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/testcase-writer-plus/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/testcase-writer-plus/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/testcase-writer-plus/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/testcase-writer-plus/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/testcase-writer-plus/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/testcase-writer-plus/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/testcase-writer-plus/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [testcase-writer-plus](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/testcase-writer-plus/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
