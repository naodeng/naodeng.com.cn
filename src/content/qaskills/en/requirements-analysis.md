# requirements-analysis

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
- Who should use: QAs and BAs who analyze requirements before case writing.
- Best used when: Requirements are ambiguous, changing, or risky and need testability assessment.
- How to use: Input requirement context, identify ambiguities and risks, then output clarifications and test direction.


## Usage Guide
1. Install and enable `requirements-analysis` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with requirement input, for example: "Use `requirements-analysis` to analyze this PRD and list ambiguities/risk points."
4. Ask for fixed outputs: ambiguity list, clarification questions, risk ranking, and testability conclusion.
5. After PM/dev clarifications, rerun with updated answers to get a clean final version.

## Skill Breakdown

### When
- Requirement documents are incomplete, ambiguous, or frequently changing.
- Team asks QA to identify risk before test case implementation.
- You must decide what can be tested now vs. what needs clarification.

### What
- Produce a requirement-level risk and testability assessment.
- Output clarified scope, dependency list, and verification strategy.
- Turn unclear requirements into actionable QA questions and decisions.

### How
1. Decompose requirement into business rules, state transitions, and exception handling.
2. Mark ambiguity: missing inputs, unclear outcomes, or conflicting logic.
3. Map requirement to test dimensions: functional, data, interface, workflow, non-functional.
4. Prioritize by user impact and change volatility.
5. Create clarification questions with expected decision owner.
6. Finalize analysis report with recommended next QA actions.

### Reference
### Positive Example (Input -> Output)
Input:
- PRD: discount rules + tiered membership + refund exception

Output:
- Rule matrix with explicit boundaries
- High-risk list (rounding, overlap rules, rollback behavior)
- Clarification checklist and proposed acceptance criteria

### Negative Example (Input -> Output)
Input:
- "Read PRD and give me test points"

Output (problem):
- Generic test points without requirement conflict detection
- No unresolved-question tracking

### Limits
- Do not assume missing business rules as fixed truth.
- Do not jump to case writing before ambiguity triage.
- Do not ignore upstream/downstream dependency impact.
- Do not output risk ranking without rationale.
- Do not claim requirement is testable when acceptance criteria are absent.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/requirements-analysis/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/requirements-analysis/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/requirements-analysis/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/requirements-analysis/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/requirements-analysis/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/requirements-analysis/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/requirements-analysis/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/requirements-analysis/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/requirements-analysis/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/requirements-analysis/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/requirements-analysis/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/requirements-analysis/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [requirements-analysis](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/requirements-analysis/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
