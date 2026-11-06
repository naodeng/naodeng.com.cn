# Skill Evaluation

Author: naodeng

## Metadata
- slug: skill-evaluation
- category: type
- hasEvals: true
- syncedAt: 2026-11-06
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/skill-engineering/skill-evaluation/SKILL.md
- description: Use this skill when designing, running, interpreting, or reporting Agent Skill evaluations, selecting cases or judges, and analyzing trigger, benchmark, or regression evidence; triggers include Skill evaluation and evaluation design.

## Raw SKILL.md

```markdown
---
name: skill-evaluation
description: Use this skill when designing, running, interpreting, or reporting Agent Skill evaluations, selecting cases or judges, and analyzing trigger, benchmark, or regression evidence; triggers include Skill evaluation and evaluation design.
license: PolyForm-Noncommercial-1.0.0
metadata:
  version: "1.0.0"
  compatibility: ""
  author: "Awesome QA Skills contributors"
  language: "en"
  category: "skill-engineering"
  source: "https://github.com/naodeng/awesome-qa-skills"
  license-url: "https://polyformproject.org/licenses/noncommercial/1.0.0"
---

# Skill Evaluation

## When to use

- Design realistic eval cases, positive/negative triggers, or regression cases for a Skill.
- Validate or run evaluations with `skill-up` and interpret results and limitations.
- Select deterministic, script, or semantic judges, or distinguish a benchmark from a version regression.

## Output format options

- Default to a concise Markdown evaluation report with tables for case results and evidence states.
- Use JSON only when a downstream script needs machine-readable case results; keep the same evidence vocabulary and limitations.

## How to use

1. Read the Skill contract, existing `evals/`, historical failures, and the current change scope.
2. Identify critical behavior and evidence dimensions: Outcome, Process, Style/Quality, and Efficiency; select only meaningful dimensions.
3. Design HAPPY, INCOMPLETE, EXPLICIT_TRIGGER, IMPLICIT_TRIGGER, CONTEXTUAL_TRIGGER, NEGATIVE_TRIGGER, BOUNDARY, or REGRESSION cases.
4. Prefer deterministic `rule_based`; use `script` for executable artifacts; use a calibrated `agent_judge` only when semantic judgment is necessary.
5. Run `skill-up validate`; run `skill-up run` or the local trace runner only with authorized credentials and targets. Record run metadata, traces, judges, artifacts, and limitations.
6. Check Eval validity and distinguish Skill Defect, Eval Defect, Infrastructure Defect, and Unknown.
7. Report results, evidence states, benchmark/regression conclusions, blocked checks, and recommended actions; add a regression case only after a real failure has a confirmed root cause.

## Constraints

- `skill-up` is the primary Eval Engine. Trace checks are a deep-evidence layer; do not create another Engine, Judge, Benchmark, or Quality Score.
- A similar output is not observed trigger evidence; missing `skill.selection` trace evidence is `BLOCKED`.
- `skill-up validate` is not runtime semantic validation. Static checks, CLI smoke, Project Done, and one semantic observation cannot be promoted automatically to release or business claims.
- Do not modify the Skill or enter an unlimited optimization loop. Keep Benchmark (with/without Skill) separate from Version Regression (previous/current).
- Use `unknown` for unknown values; preserve `NOT_RUN`, `UNASSESSED`, `BLOCKED`, or `INSUFFICIENT_EVIDENCE` when evidence is incomplete.
- Even with minimal input, no runnable target, or no original trace, emit the minimum report skeleton and explicitly write the applicable canonical evidence state; do not replace `NOT_RUN`, `BLOCKED`, `UNASSESSED`, or `INSUFFICIENT_EVIDENCE` with natural language such as “not verified.”

## Reference files

- Read `prompts/skill-evaluation.md` for the complete execution and report contract.
- Read the target Skill's `evals/` and its fixtures before selecting a judge.
- Use repository governance contracts and trace rules as optional deep references, never as private dependencies of a copied Skill.

## Common pitfalls

- Treating `skill-up validate` or a dry-run as proof of runtime or semantic effectiveness.
- Calling a missing trigger event a negative result instead of `BLOCKED`.
- Mixing with/without Skill benchmarks with previous/current version regression.

## Best practices

- Start with the smallest deterministic case that demonstrates the intended behavior.
- Record the exact run identity, judge, environment, unavailable evidence, and limitations.
- Convert only confirmed real failures into regression cases, and preserve the original evidence.

## Progressive disclosure

- Read `prompts/skill-evaluation.md` before producing the report.
- Read the target Skill's own `evals/` first, then load fixtures, examples, and scripts as needed.
- Repository Evaluation Contract and local trace rules are optional deep references; an independently installed Skill must not depend on their private files.

## Pre-delivery checklist

- [ ] Every conclusion maps to a case, judge, and evidence state
- [ ] Run metadata, environment, model, and unexecuted checks are explicit
- [ ] Skill/Eval/Infrastructure/Unknown classifications are not conflated
- [ ] Trigger, benchmark, regression, and Quality Score boundaries are clear
```

## When to Use

- Design realistic eval cases, positive/negative triggers, or regression cases for a Skill.
- Validate or run evaluations with `skill-up` and interpret results and limitations.
- Select deterministic, script, or semantic judges, or distinguish a benchmark from a version regression.

## Workflow

### Output Format Options

- Default to a concise Markdown evaluation report with tables for case results and evidence states.
- Use JSON only when a downstream script needs machine-readable case results; keep the same evidence vocabulary and limitations.

### Evaluation Workflow

1. Read the Skill contract, existing `evals/`, historical failures, and the current change scope.
2. Identify critical behavior and evidence dimensions: Outcome, Process, Style/Quality, and Efficiency; select only meaningful dimensions.
3. Design HAPPY, INCOMPLETE, EXPLICIT_TRIGGER, IMPLICIT_TRIGGER, CONTEXTUAL_TRIGGER, NEGATIVE_TRIGGER, BOUNDARY, or REGRESSION cases.
4. Prefer deterministic `rule_based`; use `script` for executable artifacts; use a calibrated `agent_judge` only when semantic judgment is necessary.
5. Run `skill-up validate`; run `skill-up run` or the local trace runner only with authorized credentials and targets. Record run metadata, traces, judges, artifacts, and limitations.
6. Check Eval validity and distinguish Skill Defect, Eval Defect, Infrastructure Defect, and Unknown.
7. Report results, evidence states, benchmark/regression conclusions, blocked checks, and recommended actions; add a regression case only after a real failure has a confirmed root cause.

## Core Constraints

- `skill-up` is the primary Eval Engine. Trace checks are a deep-evidence layer; do not create another Engine, Judge, Benchmark, or Quality Score.
- A similar output is not observed trigger evidence; missing `skill.selection` trace evidence is `BLOCKED`.
- `skill-up validate` is not runtime semantic validation. Static checks, CLI smoke, Project Done, and one semantic observation cannot be promoted automatically to release or business claims.
- Do not modify the Skill or enter an unlimited optimization loop. Keep Benchmark (with/without Skill) separate from Version Regression (previous/current).
- Use `unknown` for unknown values; preserve `NOT_RUN`, `UNASSESSED`, `BLOCKED`, or `INSUFFICIENT_EVIDENCE` when evidence is incomplete.
- Even with minimal input, no runnable target, or no original trace, emit the minimum report skeleton and explicitly write the applicable canonical evidence state; do not replace it with natural language such as “not verified.”

## Progressive Disclosure

- Read `prompts/skill-evaluation.md` before producing the report.
- Read the target Skill's own `evals/` first, then load fixtures, examples, and scripts as needed.
- Repository Evaluation Contract and local trace rules are optional deep references; an independently installed Skill must not depend on their private files.

## Pre-delivery Checklist

- [ ] Every conclusion maps to a case, judge, and evidence state
- [ ] Run metadata, environment, model, and unexecuted checks are explicit
- [ ] Skill/Eval/Infrastructure/Unknown classifications are not conflated
- [ ] Trigger, benchmark, regression, and Quality Score boundaries are clear

## Common Pitfalls

- Treating `skill-up validate` or a dry-run as proof of runtime or semantic effectiveness.
- Calling a missing trigger event a negative result instead of `BLOCKED`.
- Mixing with/without Skill benchmarks with previous/current version regression.

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-evaluation/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-evaluation/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-evaluation/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-evaluation/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-evaluation/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-evaluation/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-evaluation/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-evaluation/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-evaluation/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-evaluation/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-evaluation/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/skill-evaluation/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill skill-evaluation
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[skill-evaluation](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/skill-engineering/skill-evaluation/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
