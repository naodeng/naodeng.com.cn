# Process Prose Trimming

Author: naodeng

## Metadata
- slug: skill-prose-trim
- category: type
- hasEvals: true
- syncedAt: 2026-08-30
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/skill-engineering/skill-prose-trim/SKILL.md
- description: Use this skill when auditing or trimming process residue from Skills, Prompts, comments, or docs; triggers include process prose cleanup, review residue, and current-state rewriting.

## Workflow

1. Confirm file scope, language pairs, and edit permission.
2. Classify each passage as current fact, contract, history, reasoning transcript, or review dialogue.
3. Delete pure process residue and restate durable facts in present tense.
4. Preserve negative guarantees, measured bounds, formal references, archives, and fixture fidelity.

## Raw SKILL.md

```markdown
---
name: skill-prose-trim
description: Use this skill when auditing or trimming process residue from Skills, Prompts, comments, or docs; triggers include process prose cleanup, review residue, and current-state rewriting.
---

# Process Prose Trimming

Use this Skill to remove text that cannot be understood from the repository's current state, while preserving contracts and durable facts.

## Workflow

1. Confirm file scope, language pairs, and edit permission.
2. Classify each passage as current fact, contract, history, reasoning transcript, or review dialogue.
3. Delete pure process residue and restate durable facts in present tense.
4. Preserve negative guarantees, measured bounds, formal references, archives, and fixture fidelity.

## Constraints

- Never turn an assumption into a shipped capability.
- Do not edit generated files, sealed archives, or recorded fixtures without explicit authorization.
- Keep bilingual meaning aligned.

Read `prompts/skill-prose-trim.md` before producing output.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-trim/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-trim/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-trim/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-trim/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-trim/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-trim/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-trim/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-trim/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-trim/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-trim/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-trim/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-trim/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill skill-prose-trim
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[skill-prose-trim](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/skill-engineering/skill-prose-trim/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
