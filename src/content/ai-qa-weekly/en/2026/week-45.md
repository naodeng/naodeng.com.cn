---
title: "AI-Native QA Weekly｜Week 45"
description: "Week 45 of AI-Native QA Weekly, covering test-repair benchmarks, agent evaluation and governance, long-horizon software building, test automation, and quality engineering research."
lang: "en"
slug: "2026/week-45"
weekNumber: 45
publishedAt: "2026-11-11"
periodStart: "2026-11-02"
periodEnd: "2026-11-08"
timeZone: "Asia/Shanghai"
itemCount: 10
---

# AI-Native QA Weekly｜Week 45

This issue covers 2026-11-02 00:00 through 2026-11-08 23:59 (Asia/Shanghai) and was published on 2026-11-11. It selects ten developments under the ai-qa-weekly rules, ranking domestic and international sources together across AI testing, agent evaluation, test automation, and quality engineering. Research results, vendor releases, and community surveys are identified according to their evidence type; figures based on vendor reports or specific test conditions should not be generalized without further evidence. The QA takeaways are editorial guidance; they do not mean that the tools were executed or the studies reproduced for this issue.

## 1. LLM test-repair study builds 500 cases of source-test co-evolution

**Category:** AI Testing

**Source:** arXiv · Software engineering research

**Updated:** 2026-11-02

**Summary:**

This study examines how to repair tests that become obsolete as source code evolves. The authors assemble 500 real source-test co-evolution cases from 15 open-source Java projects and study how failure symptoms, source changes, and supporting code affect LLM test repair. They also analyze the actions models take over multiple self-repair rounds. The paper derives a taxonomy of repair actions from execution traces and reports a substantial improvement on challenging cases when its method is applied to Codex. For QA teams, the work suggests that test maintenance should not hand a model only a failure stack trace: it needs context tied to the change, a record of each repair round, and real assertions and regression runs to confirm the result. The benchmark comes from Java open-source projects, so the findings do not guarantee the same effect in other languages, repositories, or production systems.

**Link:** [https://arxiv.org/abs/2611.03197](https://arxiv.org/abs/2611.03197)

## 2. Terminal-Bench 2.1 turns benchmark maintenance into continuous validation

**Category:** Agent Testing

**Source:** arXiv · Terminal-Bench research

**Updated:** 2026-11-05

**Summary:**

This paper treats an agent benchmark as software that needs ongoing maintenance, rather than a fixed set of tasks after release. The authors combine community reports, task artifacts, agent traces, automated oracle checks, and human-gated repairs into a validation workflow, then use it to audit Terminal-Bench 2.0. The audit finds issues in roughly 30% of the benchmark, leading to Terminal-Bench 2.1. After repairs, accuracy changes by more than 10 percentage points, and some model rankings move by as many as three places, while overall ranking correlation remains 0.958. The study also shows that time limits, memory, and sandbox configuration can change results, making task definitions, verifiers, resource budgets, and execution environments part of the measurement specification. QA and evaluation teams should continuously check whether tasks remain valid, whether legitimate solutions are wrongly rejected, and whether environment differences distort scores, rather than mistaking benchmark defects for model progress or regression.

**Link:** [https://arxiv.org/abs/2611.08417](https://arxiv.org/abs/2611.08417)

## 3. FutureAGI v1.58.0 adds must-pass protection to agent simulation and repair

**Category:** AI Testing

**Source:** GitHub · FutureAGI Releases

**Updated:** 2026-11-03

**Summary:**

FutureAGI v1.58.0 updates its agent simulation and failure-repair workflow. Simulation records can include the agent prompt and tool calls, connecting results to the behavior that produced them. The repair flow can validate a candidate change against a failing run and propose opening a pull request. The release also adds must-pass case protection so teams can identify behaviors that must continue to pass; if the check vetoes a candidate, teams can still choose to ship it after recording a reason. Another evaluation change skips empty few-shot inputs. For QA, the update puts “fix the failing case” and “preserve required behavior” in the same verification loop, while retaining evidence about prompts, tool calls, and override decisions. Teams still need to maintain a representative, stable must-pass set, and the tool’s guard does not replace independent regression testing or code review.

**Link:** [https://github.com/future-agi/future-agi/releases](https://github.com/future-agi/future-agi/releases)

## 4. Testkube adds model, access, cost, and call-audit controls for test agents

**Category:** Quality Engineering

**Source:** Testkube

**Updated:** 2026-11-03

**Summary:**

Testkube’s November release adds governance controls for AI agents running inside test infrastructure. Administrators can restrict which models an agent may use, decide which roles or resource groups can see and run it, and set token budgets by user, agent, environment, or organization. The platform also records which tools an agent called and related interactions, making the execution path easier to review. The release additionally mentions GitLab support and a new test-execution timeline. For quality engineering teams, these controls extend agent testing beyond “was the output correct?” to who can trigger it, what it can access, how much it costs, and what it actually called. Testkube notes that token limits depend on providers returning usable token usage, so integrations should still verify metering completeness across models, role-isolation boundaries, and whether logs cover failures and retries.

**Link:** [https://testkube.io/blog/testkube-november-2026-release-ai-agent-governance](https://testkube.io/blog/testkube-november-2026-release-ai-agent-governance)

## 5. Katalon True runs AI-assisted manual tests once for each dataset row

**Category:** AI Testing

**Source:** Katalon True Release Notes

**Updated:** 2026-11-05

**Summary:**

Katalon True’s November 5 release notes add dataset-driven manual test execution. Teams can import multiple rows from a CSV, use column placeholders in test steps, and have AI start a separate session and record a separate result for each row. This lets one flow cover many input sets without duplicating the test case. The notes also describe account-level AI feature settings and history for administrators, as well as MCP-based test-case creation or updates across writable fields with approval required first. For QA, independent sessions and results can make data-specific failures easier to isolate, but teams should check CSV nulls, special characters, state leakage between rows, retries, and reproducibility of AI results. Approval and settings history also belong in permission testing, so that the actual change, operator, and approval record can be matched.

**Link:** [https://docs.katalon.com/katalon-platform/release-notes/katalon-testops-release-notes](https://docs.katalon.com/katalon-platform/release-notes/katalon-testops-release-notes)

## 6. ViBench 2.0 tests long-horizon coding agents with browser checks on whole products

**Category:** Agent Testing

**Source:** arXiv · Replit research

**Updated:** 2026-11-03

**Summary:**

ViBench 2.0 evaluates an agent that builds a complete web product from an empty project through a sequence of feature requests. The benchmark contains 17 full-stack products and 241 incremental feature requests, then uses a browser agent to run 544 test plans. A product build passes only when every plan passes. Across nine evaluated models, the strongest models pass as many as 98% of individual plans, yet their success rate for delivering a fully working product reaches at most 65%. This gap between strong individual checks and an incomplete end product shows why long-running software agents need evaluation against the final product, rather than only the last request they completed. For QA, the benchmark highlights cross-request regression, whole-product acceptance, and grader reliability. Its scope is functional correctness for full-stack web products under a particular harness; it does not directly measure visual quality, speed, or other agent configurations.

**Link:** [https://arxiv.org/abs/2611.05620](https://arxiv.org/abs/2611.05620)

## 7. SWT-Bench records a 91.5% Bugstack result in unit-test mode

**Category:** AI Testing

**Source:** SWT-Bench

**Updated:** 2026-11-02

**Summary:**

On November 2, SWT-Bench’s Verified leaderboard recorded a new Bugstack result: in unit-test mode, using Claude Sonnet 5.5 and Opus 5.5 for test selection, it achieved 91.5% success and a 72.2% mean increase in line coverage on the resolving patch. SWT-Bench measures whether generated tests reproduce software issues and reports how much line coverage they add to the patch that fixes each issue. Its site says it independently executed submitted predictions for verification. This is comparable evidence for test-generation agents under a defined benchmark and execution mode, but it is not a defect-capture rate for arbitrary repositories, and scores from different modes should not be treated as equivalent. QA teams can adopt the joint reporting of issue reproduction and patch coverage, then check on their own samples whether tests fail for the target defect, produce false positives, and remain stable on reruns.

**Link:** [https://swtbench.com/](https://swtbench.com/)

## 8. SWEOps-Bench measures an incident agent from detection through verified recovery

**Category:** Performance & Reliability

**Source:** arXiv · Software operations agent research

**Updated:** 2026-11-04

**Summary:**

SWEOps-Bench provides an interactive end-to-end evaluation for software-induced cloud incidents, with 55 reproducible tasks derived from confirmed historical defects across 16 Kubernetes operator projects. Each task starts from a healthy cluster and triggers a fault with a controlled workload. An agent must inspect runtime evidence, submit a source or configuration repair, and have the evaluation harness build and deploy the change. Metrics cover detection, staged localization, verified recovery, lifecycle latency, and token use. Across six agent-model configurations, fault-state detection ranges from 72.7% to 90.9%, while end-to-end recovery ranges only from 14.5% to 52.7%; the reported diagnosis and eventual recovery do not always agree. For reliability engineering, the finding is a reminder to verify a repair functionally instead of treating a diagnosis narrative or cleared symptom as proof that an incident is resolved.

**Link:** [https://arxiv.org/abs/2611.06099](https://arxiv.org/abs/2611.06099)

## 9. DistDebug-Bench offers 120 real-world distributed-system bugs for agent evaluation

**Category:** Agent Testing

**Source:** arXiv · NeurIPS 2026 Evaluations and Datasets track

**Updated:** 2026-11-07

**Summary:**

DistDebug-Bench targets agents’ code-level diagnosis of failures in distributed systems. It curates 120 real-world bugs from 11 widely used systems, spanning five programming languages and ten failure patterns. The paper evaluates multiple LLMs and agents and finds a gap between current systems and real debugging needs. Recurring problems include “tunnel vision” when agents lack explicit reasoning structure and nondeterminism when their tool-use scope varies. The authors also release the benchmark and evaluator, along with agent traces and a leaderboard, to support reproduction and further analysis. The paper was revised on November 7, within this issue’s coverage period. For QA and SRE teams, it offers a more realistic evaluation direction than single-file coding tasks, but the benchmark and model configurations cannot represent every production system; teams still need to add their own services, logs, topology, and access constraints.

**Link:** [https://arxiv.org/abs/2611.03523](https://arxiv.org/abs/2611.03523)

## 10. TestMu AI survey finds gaps in AI-code verification and agent evaluation

**Category:** Research & Trends

**Source:** TestMu AI · State of AI in Quality Engineering 2026

**Updated:** 2026-11-02

**Summary:**

TestMu AI published its State of AI in Quality Engineering 2026 report on November 2, based on an online survey conducted through its global community from late July to early October. The report says 81% of surveyed teams had merged AI-generated code or tests they did not fully understand, and 44% said escaped defects or production incidents had increased as AI-generated code grew. Among teams building agents, 37% reported having no systematic agent-evaluation approach. The report also says only 41% run an automated check on AI-generated code before merge. For QA leaders, these findings can prompt a review of pre-merge verification, agent regression, and adversarial-test coverage. However, respondents came from a vendor-run community survey, not a random sample of the whole industry, and the reported association does not establish that AI-generated code caused the increase in defects. Teams should compare the findings against their own data and definitions.

**Link:** [https://www.testmuai.com/research/state-of-ai-in-quality-engineering/](https://www.testmuai.com/research/state-of-ai-in-quality-engineering/)
