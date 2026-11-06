# PR Quality Review Workflow

Author: naodeng

## Metadata
- slug: pr-quality-review
- category: workflow
- hasEvals: true
- syncedAt: 2026-11-06
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/pr-quality-review/SKILL.md
- description: Use this skill when you need to review PR code, test impact, test effectiveness, and evidence; triggers include pr-quality-review, PR 质量审查, and PR Quality Review Workflow.

## When to Use

Use this Skill to review PR code, test impact, test effectiveness, and evidence.

## Workflow

Read `prompts/pr-quality-review.md` first; validate inputs, complete each stage, preserve sources, and return findings and handoff details. Use `README.md` for invocation examples and FAQ.

## Common Pitfalls

Do not invent input, assume dependencies are installed, or present recommendations as execution or approval.

## Raw SKILL.md

```markdown
---
name: pr-quality-review
description: Use this skill when you need to review PR code, test impact, test effectiveness, and evidence; triggers include pr-quality-review, PR 质量审查, and PR Quality Review Workflow.
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

# PR Quality Review Workflow

## When to Use

Use this Skill to review PR code, test impact, test effectiveness, and evidence.

## Output Format Options

Default to Markdown using the review sections defined by the prompt. If JSON is requested, keep facts, inferences, plans, and execution evidence distinct and preserve their sources.

## Core constraints

Compose existing specialist Skills without copying their analysis rules. Mark host installation `UNKNOWN` without evidence. When test/CI results are absent, mark execution/result status `UNKNOWN`; use `NOT_RUN` only when non-execution is explicitly established. For an invalidated checkpoint, emit the exact uppercase status token `STALE`. Use only user-supplied PR/repository materials and identified sources as evidence; never cite agent-internal memory, system instructions, or session logs, or expose their paths. Do not report plans or static analysis as executed results. Read-only by default; external writes require authorization.

## How to Use

Read `prompts/pr-quality-review.md` first; validate inputs, complete each stage, preserve sources, and return findings and handoff details. Use `README.md` for invocation examples and FAQ.

## Reference Files

- `prompts/pr-quality-review.md`: full review scope, output, evidence, permission, and recovery rules.
- `README.md`: usage examples and FAQ.
- `evals/`: trigger and behavior regression cases.

## Before delivery

- [ ] Input scope and assumptions are explicit
- [ ] Handoffs preserve sources, status, and gaps
- [ ] Execution evidence is separate from plans
- [ ] Next steps and permission boundary are clear

## Common Pitfalls

Do not invent input, assume dependencies are installed, or present recommendations as execution or approval.

## Best Practices

Provide a complete diff and stable SHA. Attach command, exit code, environment, time, and source to run evidence; include the team's severity definitions.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-quality-review/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-quality-review/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-quality-review/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-quality-review/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-quality-review/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-quality-review/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-quality-review/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-quality-review/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-quality-review/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-quality-review/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-quality-review/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-quality-review/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill pr-quality-review
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[pr-quality-review](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/pr-quality-review/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
