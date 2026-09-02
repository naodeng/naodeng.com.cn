# Skill Change Verification

Author: naodeng

## Metadata
- slug: skill-change-verification
- category: type
- hasEvals: true
- syncedAt: 2026-09-02
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/skill-engineering/skill-change-verification/SKILL.md
- description: Use this skill when selecting and reporting verification for Skill changes; triggers include Skill change verification, quality gates, and evidence levels.

## Workflow

1. Classify content, metadata/directory, script, Eval, and runtime impact.
2. Select static, structural, evaluation, runtime, and human-review evidence.
3. Record commands run, results, omitted checks, and reasons.
4. Report residual risks and claims that are and are not supported.

## Raw SKILL.md

```markdown
---
name: skill-change-verification
description: Use this skill when selecting and reporting verification for Skill changes; triggers include Skill change verification, quality gates, and evidence levels.
---

# Skill Change Verification

Use this Skill to select the smallest sufficient checks for a change and state exactly what the evidence supports.

## Workflow

1. Classify content, metadata/directory, script, Eval, and runtime impact.
2. Select static, structural, evaluation, runtime, and human-review evidence.
3. Record commands run, results, omitted checks, and reasons.
4. Report residual risks and claims that are and are not supported.

## Constraints

- `skill-up validate` is not runtime semantic validation.
- Mark undiscoverable commands as confirmation items; never guess.
- Cover the actual diff instead of hiding gaps behind a full-suite run.

Read `prompts/skill-change-verification.md` before producing a report.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-change-verification/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-change-verification/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-change-verification/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-change-verification/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-change-verification/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-change-verification/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-change-verification/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-change-verification/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-change-verification/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-change-verification/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-change-verification/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-change-verification/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill skill-change-verification
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[skill-change-verification](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/skill-engineering/skill-change-verification/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
