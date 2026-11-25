# Test Runtime Optimization

Author: naodeng

## Metadata
- slug: test-runtime-optimization
- category: type
- hasEvals: true
- syncedAt: 2026-11-25
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/test-runtime-optimization/SKILL.md
- description: Use this skill when you need evidence-bounded slow tests, profiling evidence, setup/teardown, parallelism, isolation, and baselines; triggers include 测试运行时间 and test runtime.

## When to Use

- Use this skill when you need evidence-bounded analysis, design, or validation preparation for slow tests, profiling evidence, setup/teardown, parallelism, isolation, and baselines.
- Use it to review a plan, result, or metric and turn the review into executable improvements.
- Use it when input is incomplete but a bounded first pass with assumptions, gaps, and human-decision boundaries is still useful.

## Workflow

1. Read and follow `prompts/test-runtime-optimization.md`, including its input audit, domain coverage, and output order.
2. Extract scope, environment, version, time window, constraints, success criteria, and available evidence, with attention to slow test, profiling evidence, setup and teardown, parallelism, isolation.
3. Separate confirmed facts, evidence-backed inferences, candidate recommendations, and Human decisions before ranking by risk and evidence strength.
4. Turn high-risk items into preconditions, steps, expected behavior or decision criteria, required evidence, and a validation method.
5. When input is incomplete, deliver a bounded first pass, state unsupported conclusions, and never present static material as execution evidence.

## Core Constraints

- Keep the analysis focused on slow tests, profiling evidence, setup/teardown, parallelism, isolation, and baselines; do not replace business owners or Human risk acceptance, exception approval, or release decisions.
- Never invent system behavior, fields, metrics, thresholds, data, root causes, execution records, or pass claims.
- Static design, plans, file presence, or a dry run retain their evidence state and cannot become proof of real execution.
- When evidence is insufficient, use pending confirmation, blocked, unassessed, or NOT_SCORED and give the smallest validation method.
- For production, privacy, or security work, use least privilege, masked data, mocks, dry runs, or isolation.

## Common Pitfalls

- Listing checks without triggers, expected concerns, owner roles, close conditions, and evidence.
- Treating adjacent metrics or tool names as a complete test runtime judgment.
- Using unexplained numbers for false precision or writing correlation as causation.
- Refusing incomplete input, or pretending that incomplete evidence is conclusive.

## Raw SKILL.md

```markdown
---
name: test-runtime-optimization
description: Use this skill when you need evidence-bounded slow tests, profiling evidence, setup/teardown, parallelism, isolation, and baselines; triggers include 测试运行时间 and test runtime.
license: PolyForm-Noncommercial-1.0.0
metadata:
  version: "1.0.0"
  compatibility: ""
  author: "Awesome QA Skills contributors"
  language: "en"
  category: "testing-types"
  source: "https://github.com/naodeng/awesome-qa-skills"
  license-url: "https://polyformproject.org/licenses/noncommercial/1.0.0"
---

# Test Runtime Optimization

## When to Use

- Use this skill when you need evidence-bounded analysis, design, or validation preparation for slow tests, profiling evidence, setup/teardown, parallelism, isolation, and baselines.
- Use it to review a plan, result, or metric and turn the review into executable improvements.
- Use it when input is incomplete but a bounded first pass with assumptions, gaps, and human-decision boundaries is still useful.

## Output Format Options

- Default to Markdown organized by domain risk, evidence state, priority, and boundary.
- When the user requests tables, CSV, JSON, or ticket fields, preserve the same finding fields, evidence, and decision boundaries.
- Before machine consumption, confirm the schema, enums, required fields, and evidence sources.

## How to Use

1. Read and follow `prompts/test-runtime-optimization.md`, including its input audit, domain coverage, and output order.
2. Extract scope, environment, version, time window, constraints, success criteria, and available evidence, with attention to slow test, profiling evidence, setup and teardown, parallelism, isolation.
3. Separate confirmed facts, evidence-backed inferences, candidate recommendations, and Human decisions before ranking by risk and evidence strength.
4. Turn high-risk items into preconditions, steps, expected behavior or decision criteria, required evidence, and a validation method.
5. When input is incomplete, deliver a bounded first pass, state unsupported conclusions, and never present static material as execution evidence.

## Reference Files

- When calibrating domain outcomes, valid controls, or evidence gaps, read [references/domain-decision-example.md](references/domain-decision-example.md) for sanitized input, per-item oracles, and reproducible calculations.

- Always read `prompts/test-runtime-optimization.md`; it is the complete execution specification for this skill.
- For evaluation, read `evals/eval.yaml` and the matching cases under `evals/cases/`.
- Load `references/`, `examples/`, `scripts/`, or `output-formats.md` only when those directories exist and the task needs them.

## Domain Execution Essentials

1. Profile setup, execution, teardown, and retries with matched commit, obligations, data, resources, and windows. Derive DAG critical paths without adding overlapping jobs.
2. Separate cold/warm cache, runner limits, concurrency, isolated data, and contention. Record changed factors; different test volumes/environments cannot prove speedups.
3. Recheck the same business fault against effective assertions while retaining failures/logs/traces. Parallelism cannot share conflicting accounts or swallow errors; faster time cannot offset lost protection.
4. Give baseline/candidate duration, resource cost, percentage gain, and rollback signals. Comparable actual runs establish observed gains; estimates remain candidates, not production guarantees.
## Core Constraints

- Keep the analysis focused on slow tests, profiling evidence, setup/teardown, parallelism, isolation, and baselines; do not replace business owners or Human risk acceptance, exception approval, or release decisions.
- Never invent system behavior, fields, metrics, thresholds, data, root causes, execution records, or pass claims.
- Static design, plans, file presence, or a dry run retain their evidence state and cannot become proof of real execution.
- When evidence is insufficient, use pending confirmation, blocked, unassessed, or NOT_SCORED and give the smallest validation method.
- For production, privacy, or security work, use least privilege, masked data, mocks, dry runs, or isolation.

## Delivery Checklist

- [ ] Covered slow test, profiling evidence, setup and teardown, parallelism, isolation, with source, evidence state, and validation method for each.
- [ ] Separated facts, inferences, candidate recommendations, gaps, and Human decisions.
- [ ] Gave high-risk items P0/P1/P2/P3 or an equivalent priority, owner role, and close condition.
- [ ] Did not turn plans, static checks, or dry runs into test execution, all-passed, or release-approved claims.
- [ ] Stated residual risk, stop/escalation conditions, and next actions.

## Common Pitfalls

- Listing checks without triggers, expected concerns, owner roles, close conditions, and evidence.
- Treating adjacent metrics or tool names as a complete test runtime judgment.
- Using unexplained numbers for false precision or writing correlation as causation.
- Refusing incomplete input, or pretending that incomplete evidence is conclusive.

## Best Practices

- Start with paths most likely to cause business loss, quality regression, or decision blockage.
- Use the smallest verifiable experiment to reduce uncertainty and record conditions, versions, sources, and evidence.
- Make the Skill independently installable, executable, and reviewable by another engineer.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-runtime-optimization/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-runtime-optimization/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-runtime-optimization/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-runtime-optimization/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-runtime-optimization/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-runtime-optimization/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-runtime-optimization/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-runtime-optimization/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-runtime-optimization/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-runtime-optimization/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-runtime-optimization/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/test-runtime-optimization/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill test-runtime-optimization
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[test-runtime-optimization](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/test-runtime-optimization/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
