# functional-testing

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
- Who should use: QAs validating business flow correctness end-to-end.
- Best used when: Core feature logic and state transitions need release confidence.
- How to use: Design main/edge/negative scenarios, execute with evidence, and summarize residual risk.


## Usage Guide
1. Install and enable `functional-testing` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with feature scope, for example: "Use `functional-testing` for refund and coupon rollback flow."
4. Ask for grouped outputs: main flow, edge cases, exception paths, and dependency checks.
5. Use one rerun for uncovered paths discovered during execution.

## Skill Breakdown

### When
- Core business features need correctness validation before release.
- Requirement changes may affect user journeys and business rules.
- Team needs confidence in end-to-end behavior under normal and abnormal inputs.

### What
- Verify feature behavior against business requirement and acceptance criteria.
- Detect logic gaps across state transitions and exception handling.
- Deliver a clear quality picture for functional readiness.

### How
1. Build function map from requirement and user workflow.
2. Identify main/edge/negative scenarios and decision branches.
3. Prepare representative test data and preconditions.
4. Execute and verify UI, API, and data consistency.
5. Record defects with business impact and reproducibility.
6. Summarize readiness and remaining functional risk.

### Reference
### Positive Example (Input -> Output)
Input:
- Feature: refund with partial amount and coupon rollback

Output:
- Validated normal and edge paths including rollback exceptions
- Found mismatch between UI state and settlement record

### Negative Example (Input -> Output)
Input:
- "Test refund feature quickly"

Output (problem):
- Only one happy path checked, no state/exception coverage
- False confidence before release

### Limits
- Do not reduce functional testing to superficial click-through.
- Do not skip exception and rollback paths.
- Do not validate UI only while ignoring data/state consistency.
- Do not mark pass without requirement traceability.
- Do not ignore cross-module dependency effects.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/functional-testing/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/functional-testing/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/functional-testing/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/functional-testing/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/functional-testing/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/functional-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/functional-testing/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/functional-testing/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/functional-testing/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/functional-testing/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/functional-testing/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/functional-testing/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [functional-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/functional-testing/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
