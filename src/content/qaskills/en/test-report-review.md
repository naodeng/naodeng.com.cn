# Test Report Review

Author: naodeng

## Metadata
- slug: test-report-review
- category: type
- hasEvals: true
- syncedAt: 2026-09-03
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/test-report-review/SKILL.md
- description: Use this skill when a test report needs an evidence-consistency review before Human approval; triggers include test report review, quality report audit, test evidence review..

## Workflow

1. Read [prompts/test-report-review.md](prompts/test-report-review.md) and follow the complete specification.
2. Inventory every source with identifier, version, accountable role, and availability; write `not supplied` for an absent version instead of guessing.
3. Check each report claim against execution evidence, defect evidence, tested/untested scope, role reports, and project actions.
4. Separately list contradictions, hidden or unknown scope, residual risks, conditions, and open actions with their sources.
5. Apply blocker and condition rules to issue an AI-assisted `pass`, `conditional_pass`, or `reject` recommendation.
6. Before delivery, check evidence boundaries, source versions, ownership, and pending Human authority.

## Raw SKILL.md

```markdown
---
name: test-report-review
description: Use this skill when a test report needs an evidence-consistency review before Human approval; triggers include test report review, quality report audit, test evidence review..
---

# Test Report Review

## Goal

Check a test report against source evidence, scope, role reports, and project actions, then produce a traceable AI-assisted recommendation. Review only supplied material; a Human retains the final decision.

## When to use

- A report claims tests passed, gates are met, or release is ready and needs source-evidence review.
- Untested scope, evidence contradictions, residual risk, or open actions need to be visible.
- Schedule or management input may conflict with QA, technical, or source quality facts.

## Workflow

1. Read [prompts/test-report-review.md](prompts/test-report-review.md) and follow the complete specification.
2. Inventory every source with identifier, version, accountable role, and availability; write `not supplied` for an absent version instead of guessing.
3. Check each report claim against execution evidence, defect evidence, tested/untested scope, role reports, and project actions.
4. Separately list contradictions, hidden or unknown scope, residual risks, conditions, and open actions with their sources.
5. Apply blocker and condition rules to issue an AI-assisted `pass`, `conditional_pass`, or `reject` recommendation.
6. Before delivery, check evidence boundaries, source versions, ownership, and pending Human authority.

## Invariants

- When execution evidence and defect evidence are both absent, the state is **not executed or insufficient evidence** and the recommendation is `reject`. A report summary, role opinion, or schedule cannot convert it to pass.
- Counts such as 80/80 or 100% prove only their explicitly evidenced execution scope; never extrapolate them to untested, omitted, or version-unknown scope.
- PM input supplies schedule, resources, dependencies, ownership, and action status only. It cannot change execution results, defect severity/status, quality facts, risk, or the Human decision.
- Cite a source and version for every conclusion. Preserve conflicting sources until an authorized resolution is supplied; never select the more convenient source.
- Always label the output an **AI-assisted recommendation** and keep `human_final_decision: pending`. Never claim approval, release authorization, or risk acceptance occurred.

## Recommendation rules

- `reject`: a blocker exists, such as no reviewable report; both execution and defect evidence absent; hidden critical untested scope; an open P0/P1; a critical source contradiction; or unauthorized quality-fact override.
- `conditional_pass`: no blocker exists, but a bounded non-blocking condition has traceable ownership, an observable closure gate, and verifiable closure evidence.
- `pass`: report and source evidence align with no blocker or condition; optional improvements may remain.

Do not vote by finding count. Positive evidence never cancels one critical blocker.

## Output contract

Output in this order: **Review Status, Sources and Versions, Evidence Consistency Matrix, Tested and Untested Scope, Contradictions, Blockers and Conditions, Residual Risks, Open Actions, Recommendation Basis and Limitations, Human Decision Questions**. Keep every required section and explicitly state none when empty.

## Progressive loading

- Read `prompts/test-report-review.md` on every run; it is the complete standalone review specification.
- This Skill has no dependency on another Skill, project path, or database object. Treat missing role reports as input gaps; do not read another Skill's private files.

## Common mistakes

- Treating a report's "all passed" sentence as raw execution evidence.
- Listing tested counts but omitting approved exclusions, unknown scope, or hidden untested items.
- Treating `fixed` as `verified`, or no defect record as proof of no defects.
- Rewriting a failure, defect severity, or risk because a release date is close.
- Issuing `conditional_pass` without an owner or `unassigned` state, closure gate, and verification evidence.

## Pre-delivery check

- [ ] Execution and defect evidence availability and versions are explicit
- [ ] Report claims, scope, counts, and gates are checked against source evidence
- [ ] Contradictions, untested scope, residual risk, and open actions are visible
- [ ] Every condition has an owner or `unassigned`, closure gate, and verification evidence
- [ ] PM input does not override quality facts
- [ ] Recommendation follows the rules and `human_final_decision: pending`
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-report-review/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-report-review/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-report-review/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-report-review/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-report-review/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-report-review/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-report-review/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-report-review/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-report-review/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-report-review/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-report-review/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-report-review/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill test-report-review
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[test-report-review](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/test-report-review/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
