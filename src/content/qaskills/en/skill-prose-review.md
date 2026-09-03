# Skill Prose Contract Review

Author: naodeng

## Metadata
- slug: skill-prose-review
- category: type
- hasEvals: true
- syncedAt: 2026-09-03
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/skill-engineering/skill-prose-review/SKILL.md
- description: Use this skill when reviewing the contract completeness of Skills, Prompts, metadata, or QA documentation; triggers include Skill prose review, Prompt review, and contract audit.

## Workflow

1. Confirm scope and document role.
2. Trace trigger → input → rules → output → constraints → verification.
3. Report blockers, important suggestions, location, impact, and evidence.
4. List missing information and unverified claims.

## Raw SKILL.md

```markdown
---
name: skill-prose-review
description: Use this skill when reviewing the contract completeness of Skills, Prompts, metadata, or QA documentation; triggers include Skill prose review, Prompt review, and contract audit.
---

# Skill Prose Contract Review

## When to use

- Review a Skill, Prompt, metadata, example, or output format.
- Check whether prose is executable, independently installable, and verifiable.

## Workflow

1. Confirm scope and document role.
2. Trace trigger → input → rules → output → constraints → verification.
3. Report blockers, important suggestions, location, impact, and evidence.
4. List missing information and unverified claims.

## Constraints

- Do not invent behavior, tools, or facts.
- Do not report static reading as runtime validation.
- Do not rewrite files unless explicitly requested.

## On-demand loading

- Read `prompts/skill-prose-review.md` before producing the review.
- Use `evals/` for evaluation and report static and runtime evidence separately.

## Final checklist

- [ ] Scope and document role are explicit
- [ ] Input, output, constraints, and verification are covered
- [ ] Gaps and evidence levels are stated
- [ ] No unauthorized file changes
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-review/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-review/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-review/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-review/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-review/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-review/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-review/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-review/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-review/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-review/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-review/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-prose-review/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill skill-prose-review
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[skill-prose-review](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/skill-engineering/skill-prose-review/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
