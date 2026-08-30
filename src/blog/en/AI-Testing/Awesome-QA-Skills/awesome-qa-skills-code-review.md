---
title: "Review behavior and risk before debating style"
description: "Code Review field guide: inputs, sample output, evidence boundaries, installation, and common mistakes."
date: 2026-09-11T09:00:00.000Z
author: "nao.deng"
tags: ["AI Testing", "Agent Skills", "Code Review"]
categories: ["AI Testing", "QA Skills"]
series: ["Awesome QA Skills Field Guides"]
---

Start with the task: Review a refund state-machine change for behavioral regressions, concurrency risk, and missing tests. Code Review supplies a reviewable path through it.

[Awesome QA Skills](https://github.com/naodeng/awesome-qa-skills) organizes Skills by language and testing stage. The [series overview](https://inaodeng.com/en/blog/ai-testing/introduction_of_awesome_qa_skills/) covers repository structure and shared installation options; this guide stays with Code Review.

## Read the source Skill first

The main prompt covers Code Review Blocked, Quality Bar, Workflow, Core Constraints, Progressive Disclosure. Those headings are navigation; the project artifacts still provide the facts.

The source directory contains 2 example files, 1 references, 17 script entries. Start with [Code Review examples and usage notes](https://github.com/naodeng/awesome-qa-skills/tree/main/skills/en/testing-types/code-review/examples/README.md), [Code review dimensions](https://github.com/naodeng/awesome-qa-skills/tree/main/skills/en/testing-types/code-review/references/review-dimensions.md), [Template conversion script](https://github.com/naodeng/awesome-qa-skills/tree/main/skills/en/testing-types/code-review/scripts/batch_convert_templates.py).

## Findings need a location

Review a refund state-machine change for behavioral regressions, concurrency risk, and missing tests

“This could be better” gives the author nothing to act on.

| Severity | Location | Finding | Fix |
| --- | --- | --- | --- |
| P1 | Input contract | Source priority is undefined | Add conflict and degradation rules |
| P2 | Output contract | Conclusions have no evidence field | Add source, status, and owner |

Every finding needs a location, impact, and practical fix. Otherwise it is review noise.

## Compare one finding before and after revision

For Review a refund state-machine change for behavioral regressions, concurrency risk, and missing tests, the first draft often contains a broad quality request.

```text
Before: Check output quality and make the result accurate and complete.

After: Every conclusion carries source, status, and owner.
Use assumption when no source exists. Do not use passed without a run record.
```

The second contract is testable. During a Code Review Blocked and Quality Bar review, also inspect trigger overlap, degraded behavior for missing input, and examples that imply execution without evidence.

| Recheck | Method | Passing signal |
| --- | --- | --- |
| Trigger | Run positive and neighboring negative requests | Correct activation boundary |
| Contract | Try input with missing fields | Missing facts are named |
| Example | Trace each claim to a source | No invented files or results |
| Scope | Read the diff | Unrelated rules remain untouched |

## A prompt you can adapt

Replace the bracketed fields with project facts. Specific material leaves less room for guessing.

```text
Use the code-review Skill.

Task: Review a refund state-machine change for behavioral regressions, concurrency risk, and missing tests
Version and environment: [requirement / build / environment]
Inputs: [file paths or links]
Scope: [included and excluded journeys]
Constraints: [accounts, data, time, compliance]

Give location, severity, impact, and a proposed edit for every finding. Separate contract gaps, factual defects, and preference; include a recheck method.
Finish with open questions. Do not invent missing facts.
```

Use the first pass to inspect structure and gaps. Supply missing material before asking for the handoff-ready artifact.

## Advanced use, from one call to a maintained flow

Turn representative findings into regression examples. After a Code Review edit, run expected-pass, expected-reject, and missing-input checks.

### A three-Skill chain

`test-case-writing` → `code-review` → `test-reporting`

| Handoff | Payload | Receiver check |
| --- | --- | --- |
| Upstream to code-review | Source versions, scope, risks, open questions | Code Review staleness and conflicts |
| code-review to downstream | Primary artifact, evidence index, unfinished work | Code Review executability and owners |
| Feedback to code-review | Runs, defects, new risks | Code Review baseline and regression update |

Do not paste three complete outputs into one large prompt. Give Code Review a structured summary and accessible source artifacts. It saves context and makes defects traceable.

### Team gates

| Gate | Check | Failure action |
| --- | --- | --- |
| code-review input | Version, environment, owner, accessible sources | Stop Code Review and list gaps |
| code-review artifact | Material claims carry basis and status | Return Code Review for evidence |
| code-review execution | Command, exit status, report are reproducible | Classify infrastructure or test failure |
| code-review decision | Residual risks have accepter and date | Do not enter the next stage |

Review Code Review adoption, human edit rate, unsupported claims, and failure-to-diagnosis time each sprint. Record a baseline for several cycles before setting targets.

## Keep the original text and evidence in the review

Quote a location before describing the problem. Separate contract gaps, wording defects, and personal preference. Findings related to Code Review Blocked should explain the behavioral drift they can cause. Recheck behavior after the edit.

## Install and invoke

Install the individual Skill. The series overview carries the longer installation explanation.

```bash
npx skills add https://github.com/naodeng/awesome-qa-skills/tree/main/skills/en/testing-types/code-review -g -a codex -y
```

Invoke it with “Use the code-review Skill,” then attach the real artifacts.

## Two practical questions

### Must every review finding be accepted?

No. Use severity and contract impact. A preference can be declined if the choice is recorded.

### Does shorter prose mean a better Skill?

No. Triggers, inputs, outputs, and risk boundaries still need to survive the edit.

### When is human review mandatory?

Require an accountable person for scope trade-offs, risk acceptance, release decisions, and source conflicts.

### What should be archived?

Keep the input version, Skill output, human edits, and final evidence so the conclusion can be reconstructed.

Run Code Review against one real artifact and keep the input, output, and review notes. The fragments here establish structure; project evidence must still come from the project.

## References
- [Awesome QA Skills project](https://github.com/naodeng/awesome-qa-skills)
- [Awesome QA Skills series overview](https://inaodeng.com/en/blog/ai-testing/introduction_of_awesome_qa_skills/)
- [Code Review examples and usage notes](https://github.com/naodeng/awesome-qa-skills/tree/main/skills/en/testing-types/code-review/examples/README.md)
- [Code Review supporting references](https://github.com/naodeng/awesome-qa-skills/tree/main/skills/en/testing-types/code-review/references/review-dimensions.md)
- [Code Review helper script: batch_convert_templates.py](https://github.com/naodeng/awesome-qa-skills/tree/main/skills/en/testing-types/code-review/scripts/batch_convert_templates.py)
- [Awesome QA Skills: Code Review Skill source](https://github.com/naodeng/awesome-qa-skills/tree/main/skills/en/testing-types/code-review)
- [Code Review Skill details](https://inaodeng.com/en/qaskills/code-review/)
