# Puppeteer UI Testing (EN)

Author: naodeng

## Metadata
- slug: ui-test-puppeteer
- category: type
- hasEvals: true
- syncedAt: 2026-09-02
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/ui-test-puppeteer/SKILL.md
- description: Use this skill when you need to design Puppeteer automation for Chromium-driven checks, screenshots, PDFs, network interception, and CDP use cases; triggers include Puppeteer UI testing, UI automation testing, and ui-test-puppeteer.

## When to Use

- Need outputs that should land in a Puppeteer UI testing workflow.
- The project already uses Puppeteer or wants Puppeteer-ready planning.

## Workflow

1. Open `prompts/ui-test-puppeteer.md` and use it as the main prompt.
2. Add the real project context: scope, environment, constraints, risks, dependencies, and expected deliverable.
3. If the input is incomplete, return a usable first version and mark missing information and assumptions.

## Common Pitfalls

- Do not use it with vague scope and no context.
- Do not treat every area as equally important.
- Do not skip assumptions and missing information.

## Raw SKILL.md

```markdown
---
name: ui-test-puppeteer
description: Use this skill when you need to design Puppeteer automation for Chromium-driven checks, screenshots, PDFs, network interception, and CDP use cases; triggers include Puppeteer UI testing, UI automation testing, and ui-test-puppeteer.
---

# Puppeteer UI Testing (EN)

**中文版：** 见对应中文技能。

## When to Use

- Need outputs that should land in a Puppeteer UI testing workflow.
- The project already uses Puppeteer or wants Puppeteer-ready planning.

## Output Format Options

Markdown by default unless the request explicitly asks for another format.

## How to Use

1. Open `prompts/ui-test-puppeteer.md` and use it as the main prompt.
2. Add the real project context: scope, environment, constraints, risks, dependencies, and expected deliverable.
3. If the input is incomplete, return a usable first version and mark missing information and assumptions.

## Reference Files

- `prompts/ui-test-puppeteer.md`: main prompt for this skill.
- `references/framework-spec.md`: tool-specific structure and coverage notes.
- `references/setup-and-ci.md`: setup, execution, and CI notes.
- `examples/sample-context.md`: sample request context.
- `scripts/run-tests.sh`: lightweight local execution entry point.

## Common Pitfalls

- Do not use it with vague scope and no context.
- Do not treat every area as equally important.
- Do not skip assumptions and missing information.

## Best Practices

- Start from the prompt file, then add only the context that matters.
- Keep the output risk-driven and executable.
- If the request is incomplete, return a usable first version and mark gaps.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-puppeteer/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-puppeteer/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-puppeteer/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-puppeteer/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-puppeteer/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-puppeteer/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-puppeteer/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-puppeteer/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-puppeteer/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-puppeteer/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-puppeteer/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/ui-test-puppeteer/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill ui-test-puppeteer
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[ui-test-puppeteer](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/ui-test-puppeteer/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
