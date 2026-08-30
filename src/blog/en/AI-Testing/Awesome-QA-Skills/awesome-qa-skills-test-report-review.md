---
title: "Test Report Review, review findings need evidence and impact"
description: "Test Report Review field guide: inputs, sample output, evidence boundaries, installation, and common mistakes."
date: 2026-09-06T09:00:00.000Z
author: "nao.deng"
tags: ["AI Testing", "Agent Skills", "Test Report Review"]
categories: ["AI Testing", "QA Skills"]
series: ["Awesome QA Skills Field Guides"]
---

Test Report Review is easiest to understand with imperfect project material. The working task is simple: Check a release report for metric definitions, evidence links, risk conclusions, and the decision recommendation.

[Awesome QA Skills](https://github.com/naodeng/awesome-qa-skills) organizes Skills by language and testing stage. The [series overview](https://inaodeng.com/en/blog/ai-testing/introduction_of_awesome_qa_skills/) covers repository structure and shared installation options; this guide stays with Test Report Review.

## Read the source Skill first

The main prompt covers Task and authority, Allowed inputs, Input gates, Source and version inventory, Evidence-consistency checks. Those headings are navigation; the project artifacts still provide the facts.

This Skill has no separate examples directory. The sample below is derived from its entry point, main prompt, and eval constraints.

## Findings need a location

Check a release report for metric definitions, evidence links, risk conclusions, and the decision recommendation

“This could be better” gives the author nothing to act on.

| Severity | Location | Finding | Fix |
| --- | --- | --- | --- |
| P1 | Input contract | Source priority is undefined | Add conflict and degradation rules |
| P2 | Output contract | Conclusions have no evidence field | Add source, status, and owner |

Every finding needs a location, impact, and practical fix. Otherwise it is review noise.

## Compare one finding before and after revision

For Check a release report for metric definitions, evidence links, risk conclusions, and the decision recommendation, the first draft often contains a broad quality request.

```text
Before: Check output quality and make the result accurate and complete.

After: Every conclusion carries source, status, and owner.
Use assumption when no source exists. Do not use passed without a run record.
```

The second contract is testable. During a Task and authority and Allowed inputs review, also inspect trigger overlap, degraded behavior for missing input, and examples that imply execution without evidence.

| Recheck | Method | Passing signal |
| --- | --- | --- |
| Trigger | Run positive and neighboring negative requests | Correct activation boundary |
| Contract | Try input with missing fields | Missing facts are named |
| Example | Trace each claim to a source | No invented files or results |
| Scope | Read the diff | Unrelated rules remain untouched |

## A prompt you can adapt

Replace the bracketed fields with project facts. Specific material leaves less room for guessing.

```text
Use the test-report-review Skill.

Task: Check a release report for metric definitions, evidence links, risk conclusions, and the decision recommendation
Version and environment: [requirement / build / environment]
Inputs: [file paths or links]
Scope: [included and excluded journeys]
Constraints: [accounts, data, time, compliance]

Give location, severity, impact, and a proposed edit for every finding. Separate contract gaps, factual defects, and preference; include a recheck method.
Finish with open questions. Do not invent missing facts.
```

Use the first pass to inspect structure and gaps. Supply missing material before asking for the handoff-ready artifact.

## Advanced use, from one call to a maintained flow

Turn representative findings into regression examples. After a Test Report Review edit, run expected-pass, expected-reject, and missing-input checks.

### A three-Skill chain

`test-reporting` → `test-report-review` → `release-testing-workflow`

| Handoff | Payload | Receiver check |
| --- | --- | --- |
| Upstream to test-report-review | Source versions, scope, risks, open questions | Test Report Review staleness and conflicts |
| test-report-review to downstream | Primary artifact, evidence index, unfinished work | Test Report Review executability and owners |
| Feedback to test-report-review | Runs, defects, new risks | Test Report Review baseline and regression update |

Do not paste three complete outputs into one large prompt. Give Test Report Review a structured summary and accessible source artifacts. It saves context and makes defects traceable.

### Team gates

| Gate | Check | Failure action |
| --- | --- | --- |
| test-report-review input | Version, environment, owner, accessible sources | Stop Test Report Review and list gaps |
| test-report-review artifact | Material claims carry basis and status | Return Test Report Review for evidence |
| test-report-review execution | Command, exit status, report are reproducible | Classify infrastructure or test failure |
| test-report-review decision | Residual risks have accepter and date | Do not enter the next stage |

Review Test Report Review adoption, human edit rate, unsupported claims, and failure-to-diagnosis time each sprint. Record a baseline for several cycles before setting targets.

## Keep the original text and evidence in the review

Quote a location before describing the problem. Separate contract gaps, wording defects, and personal preference. Findings related to Task and authority should explain the behavioral drift they can cause. Recheck behavior after the edit.

## Install and invoke

Install the individual Skill. The series overview carries the longer installation explanation.

```bash
npx skills add https://github.com/naodeng/awesome-qa-skills/tree/main/skills/en/testing-types/test-report-review -g -a codex -y
```

Invoke it with “Use the test-report-review Skill,” then attach the real artifacts.

## Two practical questions

### Must every review finding be accepted?

No. Use severity and contract impact. A preference can be declined if the choice is recorded.

### Does shorter prose mean a better Skill?

No. Triggers, inputs, outputs, and risk boundaries still need to survive the edit.

### When is human review mandatory?

Require an accountable person for scope trade-offs, risk acceptance, release decisions, and source conflicts.

### What should be archived?

Keep the input version, Skill output, human edits, and final evidence so the conclusion can be reconstructed.

Run Test Report Review against one real artifact and keep the input, output, and review notes. The fragments here establish structure; project evidence must still come from the project.

## References
- [Awesome QA Skills project](https://github.com/naodeng/awesome-qa-skills)
- [Awesome QA Skills series overview](https://inaodeng.com/en/blog/ai-testing/introduction_of_awesome_qa_skills/)
- [Awesome QA Skills: Test Report Review Skill source](https://github.com/naodeng/awesome-qa-skills/tree/main/skills/en/testing-types/test-report-review)
- [Test Report Review Skill details](https://inaodeng.com/en/qaskills/test-report-review/)
