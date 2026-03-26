# test-strategy

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
- Who should use: Test leads and senior QAs responsible for quality planning.
- Best used when: You need a risk-based testing plan for a feature set or release.
- How to use: Provide business goals and constraints, prioritize scope by risk, then define gates and execution plan.


## Usage Guide
1. Install and enable `test-strategy` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with business constraints, for example: "Use `test-strategy` for version 2.3 with 5 days and 2 QA."
4. Require concrete outputs: priority scope, quality gates, deferred scope, and go/no-go criteria.
5. If scope or team capacity changes, ask the skill to output only the delta strategy.

## Skill Breakdown

### When
- A feature set or release needs a top-level testing approach.
- Team must balance quality risk against schedule pressure.
- Stakeholders need rationale for scope, depth, and resource allocation.

### What
- Deliver a practical test strategy.
- Define what to test first, what to defer, and why.
- Align QA, Dev, and product on risk-based quality goals.

### How
1. Define business objective and acceptable failure tolerance.
2. Build risk map by module criticality and change frequency.
3. Select test levels and methods for each risk bucket.
4. Allocate resources, environments, and automation budget.
5. Set quality gates, metrics, and escalation criteria.
6. Review and adapt strategy based on execution feedback.

### Reference
### Positive Example (Input -> Output)
Input:
- 4 modules, limited QA headcount, high payment risk

Output:
- Risk-first strategy prioritizing payment + order + rollback
- Clear gate metrics (blocker count, critical flow pass rate)
- Deferred low-risk scope with explicit tradeoff note

### Negative Example (Input -> Output)
Input:
- "Write a test strategy quickly"

Output (problem):
- Broad principles only, no scope prioritization or gate definition
- Cannot guide real execution decisions

### Limits
- Do not provide one-size-fits-all strategy.
- Do not separate strategy from resource constraints.
- Do not define gates without measurable metrics.
- Do not hide deferred scope decisions.
- Do not freeze strategy when risk profile changes.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-strategy/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-strategy/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-strategy/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-strategy/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-strategy/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-strategy/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-strategy/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-strategy/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-strategy/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-strategy/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-strategy/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-strategy/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [test-strategy](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/test-strategy/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
