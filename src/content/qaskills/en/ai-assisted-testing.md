# ai-assisted-testing

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
- Who should use: QAs who use AI to accelerate analysis and test design.
- Best used when: You need faster QA drafts while preserving human quality control.
- How to use: Feed structured context, generate targeted outputs, then validate and refine before adoption.


## Usage Guide
1. Install and enable `ai-assisted-testing` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with task type, for example: "Use `ai-assisted-testing` to draft test points from this requirement."
4. Ask the skill to separate draft content vs. assumptions needing human confirmation.
5. Keep an approved prompt template and reuse it for the next similar task.

## Skill Breakdown

### When
- QA team wants to accelerate analysis, case generation, and defect triage using AI.
- Test scope changes rapidly and manual drafting is too slow.
- Team needs consistent prompt patterns for repeatable QA outputs.

### What
- Use AI to boost QA productivity while keeping human quality control.
- Produce faster drafts for test points, risks, and bug analysis.
- Establish a safe AI usage pattern with validation checkpoints.

### How
1. Define task objective and non-negotiable quality constraints.
2. Provide structured input context (requirement, data, boundaries).
3. Use focused prompts by task stage (analysis, cases, review, reporting).
4. Validate AI output against requirement and risk model.
5. Correct hallucination, ambiguity, and missing edge conditions.
6. Save validated prompt patterns for reuse.

### Reference
### Positive Example (Input -> Output)
Input:
- Requirement excerpt + known risks + output format template

Output:
- Draft test points with traceability and risk ranking
- Reviewer notes on unclear assumptions requiring human confirmation

### Negative Example (Input -> Output)
Input:
- "Generate all tests for this feature"

Output (problem):
- Overconfident generic list, missing system-specific edge conditions
- No human validation checkpoint

### Limits
- Do not treat AI draft as final QA deliverable.
- Do not input sensitive production data without policy approval.
- Do not skip human review for high-impact decisions.
- Do not use one prompt for all task types.
- Do not hide uncertainty in AI-generated conclusions.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-assisted-testing/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-assisted-testing/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-assisted-testing/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-assisted-testing/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-assisted-testing/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-assisted-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-assisted-testing/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-assisted-testing/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-assisted-testing/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-assisted-testing/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-assisted-testing/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-assisted-testing/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [ai-assisted-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/ai-assisted-testing/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
