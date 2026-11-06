# Change-to-Regression Workflow

Author: naodeng

## Metadata
- slug: change-to-regression
- category: workflow
- hasEvals: true
- syncedAt: 2026-11-06
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/change-to-regression/SKILL.md
- description: Use this skill when you need to select explainable regression scope from a change and its risk; triggers include change-to-regression, 变更回归, and Change-to-Regression Workflow.

## When to Use

Use this Skill to select explainable regression scope from a change and its risk.

## Workflow

Read `prompts/change-to-regression.md` first; validate inputs, complete each stage, preserve sources, and return risk and handoff details. Use `README.md` for invocation examples and FAQ.

## Common Pitfalls

Do not invent input, assume dependencies are installed, or present recommendations as execution or approval.

## Raw SKILL.md

```markdown
---
name: change-to-regression
description: Use this skill when you need to select explainable regression scope from a change and its risk; triggers include change-to-regression, 变更回归, and Change-to-Regression Workflow.
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

# Change-to-Regression Workflow

## When to Use

Use this Skill to select explainable regression scope from a change and its risk.

## Output Format Options

Default to Markdown with a required/deferred/excluded regression table. If JSON is requested, preserve the prompt's separate facts, inferences, plans, execution states, and sources.

## Core constraints

Compose existing specialist Skills without copying their analysis rules. Mark host installation `UNKNOWN` without evidence. Do not report plans or static analysis as executed results. Read-only by default; external writes require authorization.

## How to Use

Read `prompts/change-to-regression.md` first; validate inputs, complete each stage, preserve sources, and return risk and handoff details. Use `README.md` for invocation examples and FAQ.

## Reference Files

- `prompts/change-to-regression.md`: full workflow, coverage, output, and recovery rules.
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

Provide exact base/head SHA, the full diff, test runtimes, and environment limits. After execution, attach its time, Commit, and run record.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/change-to-regression/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/change-to-regression/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/change-to-regression/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/change-to-regression/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/change-to-regression/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/change-to-regression/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/change-to-regression/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/change-to-regression/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/change-to-regression/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/change-to-regression/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/change-to-regression/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/change-to-regression/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill change-to-regression
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[change-to-regression](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/change-to-regression/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
