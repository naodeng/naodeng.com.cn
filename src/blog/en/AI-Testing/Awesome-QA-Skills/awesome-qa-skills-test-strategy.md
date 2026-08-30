---
title: "Set scope, risk, and gates before execution starts"
description: "Test Strategy field guide: inputs, sample output, evidence boundaries, installation, and common mistakes."
date: 2026-09-01T09:00:00.000Z
author: "nao.deng"
tags: ["AI Testing", "Agent Skills", "Test Strategy"]
categories: ["AI Testing", "QA Skills"]
series: ["Awesome QA Skills Field Guides"]
---

A team needs a result it can hand off. Using “Define scope, levels, environments, data, roles, risks, automation, and quality gates for a new project,” we can see which inputs and evidence Test Strategy expects.

[Awesome QA Skills](https://github.com/naodeng/awesome-qa-skills) organizes Skills by language and testing stage. The [series overview](https://inaodeng.com/en/blog/ai-testing/introduction_of_awesome_qa_skills/) covers repository structure and shared installation options; this guide stays with Test Strategy.

## Read the source Skill first

The main prompt covers Quality Bar, Workflow, Core Constraints, Progressive Disclosure, Pre-delivery Checklist. Those headings are navigation; the project artifacts still provide the facts.

The source directory contains 1 references, 18 script entries. Start with [Test Strategy supporting references](https://github.com/naodeng/awesome-qa-skills/tree/main/skills/en/testing-types/test-strategy/references/local), [Template conversion script](https://github.com/naodeng/awesome-qa-skills/tree/main/skills/en/testing-types/test-strategy/scripts/batch_convert_templates.py).

## Work through one concrete task

Define scope, levels, environments, data, roles, risks, automation, and quality gates for a new project

Start with this compact input set.

```text
Sources: current requirements, relevant pages or interfaces, known defects
Scope: journeys affected by this change
Unknowns: environment, accounts, data preparation
Expected output: risk order, coverage list, open questions
```

This output fragment demonstrates the contract. It is not an execution result.

| Priority | Test point | Basis | Status |
| --- | --- | --- | --- |
| P0 | Core business journey | Acceptance criterion AC-01 | Not run |
| P1 | Error and recovery | Historical defect BUG-17 | Data missing |
| P1 | Boundary and state changes | Business rule BR-03 | Needs confirmation |

Do not write “passed” during static design. Runtime evidence comes later.

## Move from coverage ideas to a decision

The task is Define scope, levels, environments, data, roles, risks, automation, and quality gates for a new project. Split by risk before deciding how many cases to write.

| Risk question | Test design | Evidence |
| --- | --- | --- |
| Could the main journey block a transaction | End-to-end path with state assertions | Run record, order state, build ID |
| Could retry create duplicate data | Repeat submission and idempotency check | Request ID and data query |
| Can a user recover after failure | Timeout, refresh, and re-entry | UI state, logs, recovery result |

Grow the table after Quality Bar and Workflow has been checked against the change. For each test point, ask which requirement or risk supports it, which environment and data it needs, and what remains after failure. An unanswered item is still an idea, not an execution handoff.

## A prompt you can adapt

Replace the bracketed fields with project facts. Specific material leaves less room for guessing.

```text
Use the test-strategy Skill.

Task: Define scope, levels, environments, data, roles, risks, automation, and quality gates for a new project
Version and environment: [requirement / build / environment]
Inputs: [file paths or links]
Scope: [included and excluded journeys]
Constraints: [accounts, data, time, compliance]

Order coverage by business risk and distinguish design from execution status. Give each test point a basis, data need, and expected evidence.
Finish with open questions. Do not invent missing facts.
```

Use the first pass to inspect structure and gaps. Supply missing material before asking for the handoff-ready artifact.

## Advanced use, from one call to a maintained flow

Save the result of Define scope, levels, environments, data, roles, risks, automation, and quality gates for a new project as a baseline. After requirement or code changes, perform impact analysis and rerun affected journeys plus the fixed gate set.

### A three-Skill chain

`requirements-analysis` → `test-strategy` → `test-case-writing`

| Handoff | Payload | Receiver check |
| --- | --- | --- |
| Upstream to test-strategy | Source versions, scope, risks, open questions | Test Strategy staleness and conflicts |
| test-strategy to downstream | Primary artifact, evidence index, unfinished work | Test Strategy executability and owners |
| Feedback to test-strategy | Runs, defects, new risks | Test Strategy baseline and regression update |

Do not paste three complete outputs into one large prompt. Give Test Strategy a structured summary and accessible source artifacts. It saves context and makes defects traceable.

### Team gates

| Gate | Check | Failure action |
| --- | --- | --- |
| test-strategy input | Version, environment, owner, accessible sources | Stop Test Strategy and list gaps |
| test-strategy artifact | Material claims carry basis and status | Return Test Strategy for evidence |
| test-strategy execution | Command, exit status, report are reproducible | Classify infrastructure or test failure |
| test-strategy decision | Residual risks have accepter and date | Do not enter the next stage |

Review Test Strategy adoption, human edit rate, unsupported claims, and failure-to-diagnosis time each sprint. Record a baseline for several cycles before setting targets.

## What I would inspect during use

- Scope points to a real business journey instead of turning Test Strategy into an encyclopedia.
- Quality Bar is grounded in requirements, pages, interfaces, or defects.
- Happy paths, exceptions, boundaries, and recovery are ordered by risk.
- Status distinguishes designed, not run, passed, and failed.

## Install and invoke

Install the individual Skill. The series overview carries the longer installation explanation.

```bash
npx skills add https://github.com/naodeng/awesome-qa-skills/tree/main/skills/en/testing-types/test-strategy -g -a codex -y
```

Invoke it with “Use the test-strategy Skill,” then attach the real artifacts.

## Two practical questions

### Can I use Test Strategy with incomplete material?

Yes, but the result should degrade to known facts, assumptions, and open questions. Missing environments or data cannot support an execution claim.

### How do I know whether Workflow is sufficient?

Trace it back to requirements and risks. A handoff-ready result explains coverage, omissions, and the next action.

### When is human review mandatory?

Require an accountable person for scope trade-offs, risk acceptance, release decisions, and source conflicts.

### What should be archived?

Keep the input version, Skill output, human edits, and final evidence so the conclusion can be reconstructed.

Run Test Strategy against one real artifact and keep the input, output, and review notes. The fragments here establish structure; project evidence must still come from the project.

## References
- [Awesome QA Skills project](https://github.com/naodeng/awesome-qa-skills)
- [Awesome QA Skills series overview](https://inaodeng.com/en/blog/ai-testing/introduction_of_awesome_qa_skills/)
- [Test Strategy supporting references](https://github.com/naodeng/awesome-qa-skills/tree/main/skills/en/testing-types/test-strategy/references/local)
- [Test Strategy helper script: batch_convert_templates.py](https://github.com/naodeng/awesome-qa-skills/tree/main/skills/en/testing-types/test-strategy/scripts/batch_convert_templates.py)
- [Awesome QA Skills: Test Strategy Skill source](https://github.com/naodeng/awesome-qa-skills/tree/main/skills/en/testing-types/test-strategy)
- [Test Strategy Skill details](https://inaodeng.com/en/qaskills/test-strategy/)
