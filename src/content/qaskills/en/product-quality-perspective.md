# Product Quality Perspective

Author: naodeng

## Metadata
- slug: product-quality-perspective
- category: workflow
- hasEvals: true
- syncedAt: 2026-09-03
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/product-quality-perspective/SKILL.md
- description: Use this skill when product-quality responsibility is needed across requirements, strategy, review, test-case, or reporting stages; triggers include product quality perspective, product quality review..

## When to Use

- A quality stage needs a product perspective on user value, business rules, scope, acceptance, and release risk.
- Product, engineering, and QA need to move a quality decision forward from the same facts, gaps, and actions.

## Workflow

1. Validate `stage`. If it is missing or unsupported, return **Not applicable**, name the supported stages, and request a valid `stage`; do not generate filler findings.
2. Load and follow exactly one prompt from the table for the valid `stage`; never combine prompts from multiple stages.
3. Use the supplied materials to decide whether the stage is applicable. If materials are insufficient or the stage is not applicable, explain why, list known facts, gaps, and needed material, and do not invent findings.
4. Produce a standalone product-quality report that distinguishes facts, evidence, inferences, and unverified items.

| `stage` | Only prompt to load |
| --- | --- |
| `requirements-analysis` | `prompts/requirements-analysis.md` |
| `test-strategy` | `prompts/test-strategy.md` |
| `test-strategy-review` | `prompts/test-strategy-review.md` |
| `code-review` | `prompts/code-review.md` |
| `test-case-writing` | `prompts/test-case-writing.md` |
| `test-case-review` | `prompts/test-case-review.md` |
| `test-reporting` | `prompts/test-reporting.md` |
| `test-report-review` | `prompts/test-report-review.md` |

## Progressive Disclosure

- Only after validating `stage`, read the one corresponding file in `prompts/`.
- For evaluation or regression, use `evals/` and skill-up validation; do not treat eval cases as project evidence.

## Pre-delivery Checklist

- [ ] The `stage` is valid and exactly one matching prompt was loaded
- [ ] Applicability was assessed first; a non-applicable result contains no filler findings
- [ ] The report has every contract field and separates facts, evidence, inferences, and gaps
- [ ] No business rules, code correctness, passed tests, or release conclusion was invented
- [ ] Actions have an accountable role and confidence reflects evidence completeness

## Common Pitfalls

- Do not turn a product-quality perspective into unsupported code-review or test-pass conclusions.
- Do not equate “the requirement is met” with “the code is correct” or “tests have passed.”
- Do not hide critical information gaps behind a generic checklist.

## Raw SKILL.md

```markdown
---
name: product-quality-perspective
description: Use this skill when product-quality responsibility is needed across requirements, strategy, review, test-case, or reporting stages; triggers include product quality perspective, product quality review..
---

# Product Quality Perspective (English)

**Chinese version：** See the corresponding Chinese skill.

## When to Use

- A quality stage needs a product perspective on user value, business rules, scope, acceptance, and release risk.
- Product, engineering, and QA need to move a quality decision forward from the same facts, gaps, and actions.

## Inputs

- `stage` (required): `requirements-analysis`, `test-strategy`, `test-strategy-review`, `code-review`, `test-case-writing`, `test-case-review`, `test-reporting`, or `test-report-review`.
- Project materials: supplied requirements, PR/diff, test assets, reports, or other evidence.
- Optional stage context: target users, release goal, scope, dependencies, constraints, and known risks.

## Workflow

1. Validate `stage`. If it is missing or unsupported, return **Not applicable**, name the supported stages, and request a valid `stage`; do not generate filler findings.
2. Load and follow exactly one prompt from the table for the valid `stage`; never combine prompts from multiple stages.
3. Use the supplied materials to decide whether the stage is applicable. If materials are insufficient or the stage is not applicable, explain why, list known facts, gaps, and needed material, and do not invent findings.
4. Produce a standalone product-quality report that distinguishes facts, evidence, inferences, and unverified items.

| `stage` | Only prompt to load |
| --- | --- |
| `requirements-analysis` | `prompts/requirements-analysis.md` |
| `test-strategy` | `prompts/test-strategy.md` |
| `test-strategy-review` | `prompts/test-strategy-review.md` |
| `code-review` | `prompts/code-review.md` |
| `test-case-writing` | `prompts/test-case-writing.md` |
| `test-case-review` | `prompts/test-case-review.md` |
| `test-reporting` | `prompts/test-reporting.md` |
| `test-report-review` | `prompts/test-report-review.md` |

## Product Responsibilities and Boundaries

- Focus on user value, business rules, scope, acceptance criteria, clarity, consistency, decision risk, and next actions.
- Use project materials as evidence. When evidence is absent, say unknown or needs confirmation; never invent rules, metrics, test results, defects, or code behavior.
- Do not replace engineering code review, test design/execution, security assessment, or release approval. Without their evidence, do not assess code correctness, claim tests have passed, or approve a release.

## Report Contract

Unless the result is Not applicable, every report includes: Summary, Facts, Evidence, Findings, Risks, Information gaps, Questions, Actions, and Confidence. Prioritize findings, risks, and actions by impact, and state each conclusion's evidence basis.

## Pre-delivery Checklist

- [ ] The `stage` is valid and exactly one matching prompt was loaded
- [ ] Applicability was assessed first; a non-applicable result contains no filler findings
- [ ] The report has every contract field and separates facts, evidence, inferences, and gaps
- [ ] No business rules, code correctness, passed tests, or release conclusion was invented
- [ ] Actions have an accountable role and confidence reflects evidence completeness

## Progressive Disclosure

- Only after validating `stage`, read the one corresponding file in `prompts/`.
- For evaluation or regression, use `evals/` and skill-up validation; do not treat eval cases as project evidence.

## Common Pitfalls

- Do not turn a product-quality perspective into unsupported code-review or test-pass conclusions.
- Do not equate “the requirement is met” with “the code is correct” or “tests have passed.”
- Do not hide critical information gaps behind a generic checklist.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/product-quality-perspective/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/product-quality-perspective/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/product-quality-perspective/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/product-quality-perspective/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/product-quality-perspective/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/product-quality-perspective/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/product-quality-perspective/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/product-quality-perspective/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/product-quality-perspective/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/product-quality-perspective/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/product-quality-perspective/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/product-quality-perspective/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill product-quality-perspective
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[product-quality-perspective](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/product-quality-perspective/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
