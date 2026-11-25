# PR Test Impact Analysis

Author: naodeng

## Metadata
- slug: pr-test-impact-analysis
- category: type
- hasEvals: true
- syncedAt: 2026-11-25
- sourceSkillUrl: https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/pr-test-impact-analysis/SKILL.md
- description: Use this skill when you need to determine test impact from a pull request or code diff and predict how specific existing cases align with the change; triggers include PR test impact analysis and per-case change prediction.

## When to Use

- Use this skill when you need to derive the smallest sufficient test scope from a pull request's diff, dependencies, and historical risk.
- Use it to compare a change with existing case expectations and keep static predictions separate from actual run results.
- Use it to review an existing plan, result, or evidence set and produce actionable improvements.
- Use it when context is incomplete but a bounded first pass is still valuable.

## Workflow

1. Read and follow `prompts/pr-test-impact-analysis.md`, including its input contract, execution rules, minimum coverage, and output order.
2. Add only context that changes the decision: scope, environment, version, constraints, evidence, and success criteria.
3. Audit the input, then separate confirmed facts, working assumptions, and open questions.
4. Rank by risk and evidence strength, and produce an artifact that can be executed or reviewed directly.
5. If information is missing, deliver a bounded first pass and state which conclusions remain unsupported.
6. When case expectations are available, classify each case as `PREDICTED_PASS`, `PREDICTED_FAIL`, or `UNCERTAIN`; never present a prediction as an execution result.

## Core Constraints

- do not infer only from filenames
- provide evidence for test selection
- expand scope when risk is high and evidence is weak
- Never invent system behavior, fields, data, metrics, or root causes absent from the evidence.
- Link important conclusions to evidence; mark unsupported conclusions as hypotheses with a verification method.
- Explain priority using business impact, likelihood, or detectability.
- `PREDICTED_PASS` and `PREDICTED_FAIL` are static predictions, not real test results. Only run evidence matching the revision and case ID can establish `RUN_PASS` or `RUN_FAIL`.

## Common Pitfalls

- Listing checks without preconditions, expected outcomes, or evidence.
- Marking everything high priority and avoiding tradeoffs.
- Substituting tool names or generic theory for domain reasoning.
- Refusing incomplete input, or pretending incomplete evidence supports certainty.

## Raw SKILL.md

```markdown
---
name: pr-test-impact-analysis
description: Use this skill when you need to determine test impact from a pull request or code diff and predict how specific existing cases align with the change; triggers include PR test impact analysis and per-case change prediction.
license: PolyForm-Noncommercial-1.0.0
metadata:
  version: "1.1.0"
  compatibility: ""
  author: "Awesome QA Skills contributors"
  language: "en"
  category: "testing-types"
  source: "https://github.com/naodeng/awesome-qa-skills"
  license-url: "https://polyformproject.org/licenses/noncommercial/1.0.0"
---

# PR Test Impact Analysis

## When to Use

- Use this skill when you need to derive the smallest sufficient test scope from a pull request's diff, dependencies, and historical risk.
- Use it to compare a change with existing case expectations and keep static predictions separate from actual run results.
- Use it to review an existing plan, result, or evidence set and produce actionable improvements.
- Use it when context is incomplete but a bounded first pass is still valuable.

## Output Format Options

- Default to Markdown for review, execution, and incremental refinement.
- When the user requests tables, CSV, JSON, or ticket fields, preserve risk, evidence, priority, and boundary information.
- For machine-consumed output, confirm the schema, enums, and required fields first.

## How to Use

1. Read and follow `prompts/pr-test-impact-analysis.md`, including its input contract, execution rules, minimum coverage, and output order.
2. Add only context that changes the decision: scope, environment, version, constraints, evidence, and success criteria.
3. Audit the input, then separate confirmed facts, working assumptions, and open questions.
4. Rank by risk and evidence strength, and produce an artifact that can be executed or reviewed directly.
5. If information is missing, deliver a bounded first pass and state which conclusions remain unsupported.
6. When case expectations are available, classify each case as `PREDICTED_PASS`, `PREDICTED_FAIL`, or `UNCERTAIN`; never present a prediction as an execution result.

## Reference Files

- When calibrating domain outcomes, valid controls, or evidence gaps, read [references/domain-decision-example.md](references/domain-decision-example.md) for sanitized input, per-item oracles, and reproducible calculations.

- Always read `prompts/pr-test-impact-analysis.md`; it is the complete execution specification for this skill.
- For evaluation or regression, read `evals/eval.yaml` and the relevant cases under `evals/cases/`.
- Load `references/`, `examples/`, `scripts/`, or `output-formats.md` only when those directories exist and the task needs them.

## Domain Execution Essentials

1. Fix repository/base/head SHAs and diff scope. Source file/symbol/schema/config changes; names alone do not prove impact and results from different HEADs cannot be pooled.
2. Map changed symbol→direct/transitive consumer→obligation→test ID/layer/execution version. Label edges confirmed/candidate/unknown and stop only at evidenced isolation boundaries.
3. For removed/weakened tests check whether their obligations retain independent protection; selection from the remaining inventory alone can hide disappeared coverage.
4. Unknown dynamic dependencies/mappings trigger conservative contract/integration candidates with explicit gaps. Separate scope candidates, executed tests, and satisfied obligations; list expansion/escalation triggers.
5. For each locatable case with an expected result, record its ID, expected behavior, change evidence, prediction, and rationale. Use `UNCERTAIN` when expectation or implementation evidence is insufficient. Record execution evidence separately as `RUN_PASS`, `RUN_FAIL`, `NOT_RUN`, or `UNKNOWN`.

## Core Constraints

- do not infer only from filenames
- provide evidence for test selection
- expand scope when risk is high and evidence is weak
- Never invent system behavior, fields, data, metrics, or root causes absent from the evidence.
- Link important conclusions to evidence; mark unsupported conclusions as hypotheses with a verification method.
- Explain priority using business impact, likelihood, or detectability.
- `PREDICTED_PASS` and `PREDICTED_FAIL` are static predictions, not real test results. Only run evidence matching the revision and case ID can establish `RUN_PASS` or `RUN_FAIL`.

## Delivery Checklist

- [ ] Covered: change intent, direct and transitive impact, public interfaces, data changes, configuration, security, rollback, test gaps.
- [ ] Separated facts, assumptions, gaps, and recommendations.
- [ ] When per-case predictions are included, prediction and execution status are separate and each `UNCERTAIN` item has a reason.
- [ ] Gave high-risk items a priority, evidence basis, owner or next action.
- [ ] Defined verifiable decision criteria instead of generic advice.
- [ ] Performed no unauthorized production writes or destructive actions.

## Common Pitfalls

- Listing checks without preconditions, expected outcomes, or evidence.
- Marking everything high priority and avoiding tradeoffs.
- Substituting tool names or generic theory for domain reasoning.
- Refusing incomplete input, or pretending incomplete evidence supports certainty.

## Best Practices

- Start with paths most likely to cause business loss, safety issues, or release blockage.
- Reduce uncertainty through the smallest verifiable experiment and record reproduction conditions.
- Make the artifact executable and independently reviewable by another engineer.
```

## Install

### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-test-impact-analysis/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-test-impact-analysis/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-test-impact-analysis/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-test-impact-analysis/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-test-impact-analysis/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-test-impact-analysis/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-test-impact-analysis/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-test-impact-analysis/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-test-impact-analysis/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-test-impact-analysis/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-test-impact-analysis/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/pr-test-impact-analysis/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.

## Call Example

```text
@skill pr-test-impact-analysis
Using the current project context, produce an actionable result following this skill.
```

## Source
- Original Skill：[pr-test-impact-analysis](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/pr-test-impact-analysis/SKILL.md)
- Repository：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)
