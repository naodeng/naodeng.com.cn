# API Testing

Author: naodeng

## Metadata
- slug: api-testing
- category: type
- hasEvals: true
- syncedAt: 2026-08-30
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/api-testing/SKILL.md
- description: Use this skill when you need to design API test plans or cases for REST, GraphQL, or gRPC interfaces; triggers include API testing and API test cases.

## When to Use

- Need an API test plan, API cases, or API risk analysis.
- The request involves REST, GraphQL, SOAP, gRPC, WebSocket, or mixed API behavior.

## Workflow

1. Read and follow the main prompt listed under Progressive disclosure (coverage, structure, quality bar).
2. Add only project context that changes the result: scope, environment, constraints, risks, dependencies, expected deliverable.
3. If input is incomplete, return a usable first draft and explicitly mark assumptions and gaps.
4. Default to Markdown; switch formats only when the user asks.

## Core Constraints

- Prioritize by risk / business impact — do not treat everything equally.
- Separate confirmed facts from current assumptions.
- Do not invent endpoints, fields, environments, or root causes the user did not provide.
- Keep output executable: concrete scenarios, clear priority, clear next steps.

## Progressive Disclosure

- Before producing output, read and follow `prompts/api-testing.md` (minimum coverage, output structure, quality bar).
- When Excel/CSV/JSON/Word is requested: read `output-formats.md` and honor the format.
- When a ready-made template fits: use matching files under `output-templates/`.
- For deep framework/troubleshoot/schema notes: read only the relevant file(s) under `references/`, do not load the whole directory.
- For format conversion or helper checks: prefer existing `scripts/` over reinventing.
- For evaluating/regressing this skill: use `evals/` with skill-up.

## Pre-delivery Checklist

- [ ] Followed the main prompt's output structure
- [ ] Minimum coverage focus: endpoints or business flows in scope, priority and risk level, positive scenarios, negative scenarios, boundary scenarios, auth and permission checks, request and response validation, error handling, ... (details in main prompt)
- [ ] Covered the minimum checklist, or explained omissions
- [ ] High-risk items have explicit priority
- [ ] Did not invent details the user did not provide
- [ ] Assumptions and gaps are marked

## Common Pitfalls

- Do not pretend completeness when scope/context is missing.
- Do not treat every item as equally important.
- Do not skip assumptions and information gaps.
- Do not dump generic theory unrelated to the current toolchain.

## Raw SKILL.md

```markdown
---
name: api-testing
description: Use this skill when you need to design API test plans or cases for REST, GraphQL, or gRPC interfaces; triggers include API testing and API test cases.
---

# API Testing (English)

**中文版：** See the corresponding Chinese skill.

## When to Use

- Need an API test plan, API cases, or API risk analysis.
- The request involves REST, GraphQL, SOAP, gRPC, WebSocket, or mixed API behavior.

## Workflow

1. Read and follow the main prompt listed under Progressive disclosure (coverage, structure, quality bar).
2. Add only project context that changes the result: scope, environment, constraints, risks, dependencies, expected deliverable.
3. If input is incomplete, return a usable first draft and explicitly mark assumptions and gaps.
4. Default to Markdown; switch formats only when the user asks.

## Core Constraints

- Prioritize by risk / business impact — do not treat everything equally.
- Separate confirmed facts from current assumptions.
- Do not invent endpoints, fields, environments, or root causes the user did not provide.
- Keep output executable: concrete scenarios, clear priority, clear next steps.

## Progressive Disclosure

- Before producing output, read and follow `prompts/api-testing.md` (minimum coverage, output structure, quality bar).
- When Excel/CSV/JSON/Word is requested: read `output-formats.md` and honor the format.
- When a ready-made template fits: use matching files under `output-templates/`.
- For deep framework/troubleshoot/schema notes: read only the relevant file(s) under `references/`, do not load the whole directory.
- For format conversion or helper checks: prefer existing `scripts/` over reinventing.
- For evaluating/regressing this skill: use `evals/` with skill-up.

## Pre-delivery Checklist

- [ ] Followed the main prompt's output structure
- [ ] Minimum coverage focus: endpoints or business flows in scope, priority and risk level, positive scenarios, negative scenarios, boundary scenarios, auth and permission checks, request and response validation, error handling, ... (details in main prompt)
- [ ] Covered the minimum checklist, or explained omissions
- [ ] High-risk items have explicit priority
- [ ] Did not invent details the user did not provide
- [ ] Assumptions and gaps are marked

## Common Pitfalls

- Do not pretend completeness when scope/context is missing.
- Do not treat every item as equally important.
- Do not skip assumptions and information gaps.
- Do not dump generic theory unrelated to the current toolchain.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill api-testing
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[api-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/api-testing/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
