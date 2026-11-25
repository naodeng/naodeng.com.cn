# AI Feature Release Workflow

Author: naodeng

## Metadata
- slug: ai-feature-release-workflow
- category: workflow
- hasEvals: true
- syncedAt: 2026-11-25
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/ai-feature-release-workflow/SKILL.md
- description: Use this skill when taking an AI feature from evaluation design through a release gate, canary or shadow rollout, monitoring, and rollback planning; triggers include AI feature release, AI go/no-go, and AI 灰度发布流程.

## When to Use

- The user wants an AI feature lifecycle that connects evaluation assets, a release gate, staged rollout, monitoring, and rollback.
- A model, prompt, dataset, judge, or serving change needs one evidence chain across pre-release and production stages.

## Workflow

1. Read `prompts/ai-feature-release-workflow.md` and `workflow.yaml`.
2. Record the feature, model/prompt/data/judge versions, owners, environments, and release scope.
3. Build the phase and evidence contract; use the explicit status for every gate and stage.
4. Hand evaluation design, gate design, release coordination, and production verification to their named Skills as needed.
5. Produce a recommendation and handoff; an authorized human owns release approval and production actions.

## Core Constraints

- `PASS`, `FAIL`, `BLOCKED`, `NOT_RUN`, `UNKNOWN`, and `STALE` describe evidence state; missing run evidence cannot be `PASS`.
- Bind every evaluation and rollout claim to model, prompt, dataset, judge, and run identities that apply.
- This Skill defines stages and evidence; it does not implement an evaluation runner, execute a production rollout, or approve release.
- Canary or shadow plans require sourced thresholds, cohort, observation window, owner, stop condition, and rollback path.

## Progressive Disclosure

- Always read the main prompt and `workflow.yaml` for the lifecycle contract.
- Load `references/` only when the user needs a detailed evidence-pack schema or a stage handoff example.
- Read `evals/` when evaluating this Skill; real model evaluations require separate authorization.

## Pre-delivery Checklist

- [ ] Every phase has entry evidence, exit criteria, owner, and state.
- [ ] Evaluation and rollout artifacts bind to versions and run identity.
- [ ] Missing, stale, and unrun evidence remains explicit.
- [ ] Human approval, production execution, stop, and rollback authority are clear.

## Common Pitfalls

- Treating a planned evaluation as a completed run.
- Reusing a gate result after model, prompt, dataset, judge, or serving configuration changes.
- Treating canary success as formal release approval.
- Writing a runner or hardcoding a provider-specific release engine into this host-neutral Workflow.

## Raw SKILL.md

```markdown
---
name: ai-feature-release-workflow
description: Use this skill when taking an AI feature from evaluation design through a release gate, canary or shadow rollout, monitoring, and rollback planning; triggers include AI feature release, AI go/no-go, and AI 灰度发布流程.
license: PolyForm-Noncommercial-1.0.0
metadata:
  version: "1.0.0"
  compatibility: ""
  author: "Awesome QA Skills contributors"
  language: "en"
  category: "testing-workflows"
  source: "https://github.com/naodeng/awesome-qa-skills"
  license-url: "https://polyformproject.org/licenses/noncommercial/1.0.0"
---

# AI Feature Release Workflow

**Chinese version:** See the corresponding Chinese skill.

## When to Use

- The user wants an AI feature lifecycle that connects evaluation assets, a release gate, staged rollout, monitoring, and rollback.
- A model, prompt, dataset, judge, or serving change needs one evidence chain across pre-release and production stages.

## Workflow

1. Read `prompts/ai-feature-release-workflow.md` and `workflow.yaml`.
2. Record the feature, model/prompt/data/judge versions, owners, environments, and release scope.
3. Build the phase and evidence contract; use the explicit status for every gate and stage.
4. Hand evaluation design, gate design, release coordination, and production verification to their named Skills as needed.
5. Produce a recommendation and handoff; an authorized human owns release approval and production actions.

## Core Constraints

- `PASS`, `FAIL`, `BLOCKED`, `NOT_RUN`, `UNKNOWN`, and `STALE` describe evidence state; missing run evidence cannot be `PASS`.
- Bind every evaluation and rollout claim to model, prompt, dataset, judge, and run identities that apply.
- This Skill defines stages and evidence; it does not implement an evaluation runner, execute a production rollout, or approve release.
- Canary or shadow plans require sourced thresholds, cohort, observation window, owner, stop condition, and rollback path.

## Progressive Disclosure

- Always read the main prompt and `workflow.yaml` for the lifecycle contract.
- Load `references/` only when the user needs a detailed evidence-pack schema or a stage handoff example.
- Read `evals/` when evaluating this Skill; real model evaluations require separate authorization.

## Pre-delivery Checklist

- [ ] Every phase has entry evidence, exit criteria, owner, and state.
- [ ] Evaluation and rollout artifacts bind to versions and run identity.
- [ ] Missing, stale, and unrun evidence remains explicit.
- [ ] Human approval, production execution, stop, and rollback authority are clear.

## Common Pitfalls

- Treating a planned evaluation as a completed run.
- Reusing a gate result after model, prompt, dataset, judge, or serving configuration changes.
- Treating canary success as formal release approval.
- Writing a runner or hardcoding a provider-specific release engine into this host-neutral Workflow.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-feature-release-workflow/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-feature-release-workflow/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-feature-release-workflow/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-feature-release-workflow/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-feature-release-workflow/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-feature-release-workflow/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-feature-release-workflow/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-feature-release-workflow/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-feature-release-workflow/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-feature-release-workflow/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-feature-release-workflow/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ai-feature-release-workflow/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill ai-feature-release-workflow
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[ai-feature-release-workflow](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/ai-feature-release-workflow/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
