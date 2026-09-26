---
title: "AI-Native QA Weekly｜Week 39"
description: "Week 39 of AI-Native QA Weekly, covering agent testing, LLM quality, AI test automation, quality gates, and reliability."
lang: "en"
slug: "2026/week-39"
weekNumber: 39
publishedAt: "2026-09-26"
periodStart: "2026-09-19"
periodEnd: "2026-09-25"
timeZone: "Asia/Shanghai"
itemCount: 10
---

# AI-Native QA Weekly｜Week 39

This issue covers agent risk remediation, production evals, deployment gates, sandbox execution, runtime safety, and the limits of coverage-driven test generation. Chinese-language and international candidates were ranked together; DABench was the only Chinese official source in the top ten.

## 1. Microsoft run-assert-eval: A repeatable evaluation loop for agent risk remediation

**Category:** Agent Testing

**Source:** Microsoft Command Line

**Updated:** 2026-09-24

**Summary:**

On September 24, Microsoft introduced run-assert-eval as a repeatable loop for discovering agent risks, evaluating them, generating runtime policies, and verifying remediation. Clarity first surfaces risks that may be absent from the original requirements; ASSERT turns those risks into observable behaviors and evaluation scenarios; Agent Control Specification policies are then generated; and the same behavior definitions, test set, and judge are rerun. Because policy is the main variable between runs, teams can measure whether violations fall while checking that normal capability has not been over-constrained. The workflow also keeps the behavior definition, test inputs, and judge fixed, so safety defects, policy regressions, and over-blocking can be recorded and compared. For AI-Native QA, this turns “find a defect, apply a control, and prove the fix with the same evaluation” into a workflow that can become a release gate rather than a one-off safety score.

**Link:** [Microsoft run-assert-eval](https://commandline.microsoft.com/run-assert-eval-responsible-ai-agent-risk-discovery-at-runtime/)

## 2. LangWatch Instant Evals: Turning production interactions into regression assets

**Category:** LLM Quality

**Source:** LangWatch

**Updated:** 2026-09-20

**Summary:**

On September 20, LangWatch released Instant Evals, bringing production conversations, traces, and LLM calls into a searchable continuous-evaluation workflow. A user can ask a quality question in natural language over a selected history window; the system returns matching samples with probabilities; and the workflow is available through the CLI, API, or MCP. Matches can also be exported as JSONL for regression sets, fine-tuning data, or prompt fixes. The QA value is the direct connection between production observations, defect diagnosis, and test-asset creation. Testers can mine real interactions for failure patterns and compare prompts, models, or policies before and after a change instead of relying only on a small manual sample. QA can also repeatedly extract samples by time window, label, and problem type to establish a traceable regression baseline and check after release whether the same defect reappears.

**Link:** [LangWatch Instant Evals](https://langwatch.ai/changelog/instant-evals)

## 3. Inspect AI 0.3.266-0.3.269: More model, sandbox, and approval coverage for agent evaluation

**Category:** Agent Testing

**Source:** Inspect AI

**Updated:** 2026-09-19, 2026-09-22, 2026-09-25

**Summary:**

Inspect AI released versions 0.3.266 through 0.3.269 on September 19, 22, and 25, expanding model, execution, and control support in its AI-agent evaluation framework. The updates cover LiteLLM Proxy, DeepSeek V4.1-Flash, an Anthropic SDK Agent Bridge, computer-use support for Claude Opus 5.5, approval policies for the Agent Bridge, sandbox-bridge enforcement, stronger checkpointing, and a recorded “no_response” reason for empty completions. They also address Docker sandbox behavior, retry cancellation, and task logs. The release sequence gives teams a more consistent validation entry point across providers, execution backends, and approval paths, so the same evaluation definition can reproduce model calls, tool calls, sandbox limits, and retry behavior. For an AI-Native QA team, this is more than model compatibility: it brings evaluation closer to real tool calls, permission boundaries, and abnormal execution while improving result explanation and reproducibility, making it a stronger basis for ongoing regression and failure attribution.

**Link:** [Inspect AI changelog](https://inspect.aisi.org.uk/CHANGELOG.html)

## 4. Testkube AI Test Creation: Connecting natural-language generation to infrastructure and pull requests

**Category:** AI Testing

**Source:** Testkube

**Updated:** 2026-09-22

**Summary:**

On September 22, Testkube published its September Release with AI Test Creation as a central feature. A user describes a test goal in natural language; the system generates and runs the test in real infrastructure; and the resulting change is delivered as a GitHub pull request in the repository. The feature covers E2E, API, load, and infrastructure testing and uses specialized testing skills so the output is not merely a chat-window example. Because the change enters the repository as a PR, teams can apply code review, branch protection, CI results, and rollback practices and manage generated tests like ordinary engineering changes; that is easier to maintain than a single saved chat transcript. For QA, the important shift is from “generate a script that might work” to a reviewable loop of generating, executing, inspecting, and merging. Environment realism, auditable changes, and repeatable execution remain the quality signals, rather than generation speed alone.

**Link:** [Testkube AI Test Creation](https://testkube.io/blog/ai-test-creation)

## 5. SWE-Serve: Using service-level E2E tests to validate agent-generated patches

**Category:** Agent Testing

**Source:** arXiv

**Updated:** 2026-09-22

**Summary:**

Submitted on September 22, SWE-Serve evaluates production-inference software-engineering tasks across 53 repository-grounded SGLang tasks and six engineering families. It uses hidden functional, regression, end-to-end, and performance tests, together with oracle, no-op, adversarial, and closed-book controls to determine whether a patch actually solves the problem; the best configuration reaches 75% mean pass@1. On 19 E2E tasks, service-level E2E verification rejects roughly one third of patches that pass the other tests. The study’s controls also show that a quality gate must ask more than whether a patch passes: it must distinguish a real fix from a no-op patch or a patch that merely targets the visible tests. The direct AI-Native QA lesson is that unit or local checks do not establish service usability: agent-generated patches need the real deployment path and an end-to-end quality gate.

**Link:** [SWE-Serve](https://arxiv.org/abs/2609.26777)

## 6. FDE-Bench: Four quality gates for evaluating agent deployment configuration

**Category:** Agent Testing

**Source:** arXiv

**Updated:** 2026-09-23

**Summary:**

FDE-Bench, submitted on September 23, measures whether agents can complete Docker, Compose, and Kubernetes deployment-configuration tasks, covering both greenfield setup and repair of existing environments. It evaluates four gates: build, readiness, behavior, and conformance, and adds three adversarial shortcut strategies; none reliably bypasses the complete evaluation. Across seven models, overall scores range from 52.9% to 75%, while readiness is the largest failure source, accounting for 110 of 313 unresolved gates. The four gate results and intermediate artifacts are inspectable and replayable, making it possible to locate whether the failure is in building, service readiness, actual behavior, or conformance; this is especially useful for deployment-agent regression analysis. For QA, the benchmark offers a stricter view than “the command ran successfully”: environment readiness, correct behavior, and conformance become separate, diagnosable, replayable quality signals.

**Link:** [FDE-Bench](https://arxiv.org/abs/2609.27571)

## 7. DOW-BENCH: Making agent cost, state, and tool safety testable at runtime

**Category:** Agent Testing

**Source:** arXiv

**Updated:** 2026-09-23

**Summary:**

Submitted on September 23, the Persistent Billable State paper introduces DOW-BENCH, which constrains prompt mass, context growth, recursive opportunity, and cumulative spend through four host invariants and includes a repeatable attack pattern in a 123-evaluation replay corpus. In experiments with 24 Mistral Small 4 workflows, a progress-authorized policy produced 22 oracle successes, compared with 13 under a fixed-cap policy; the authors also found that only 71 of 3,830 MCP repositories had the relevant safeguard proxy. The work makes cost, state, and tool-call safety testable runtime invariants, so QA should not check only the final answer. These constraints can become assertions and runtime monitors that, during workflow replay, detect state overflow, abnormal cost accumulation, and repeated reuse of tool permissions, bringing long-session risk into pre-release and production regression testing.

**Link:** [Persistent Billable State / DOW-BENCH](https://arxiv.org/abs/2609.28585)

## 8. DeepSeek DSec: An elastic, isolated execution layer for large-scale agent evaluation

**Category:** Performance & Reliability

**Source:** DeepSeek / arXiv

**Updated:** 2026-09-19

**Summary:**

Submitted on September 19, DeepSeek’s DSec paper describes an elastic sandbox infrastructure for large-scale agent training, evaluation, and data construction. A unified SDK connects function-call, container, microVM, and full-VM backends; stateful rollout execution is decoupled from preemptible GPU training; and the system supports state preservation, resource reclamation, and fine-grained network rules. The paper reports a production scale of about three million sandboxes per day, more than 380,000 concurrent sandboxes, and over 5,000 creations per second; sandboxes can execute commands and tool calls while collecting outputs and status. Execution results and state are also collectable evidence, so a failed evaluation can be traced to a command, tool call, network rule, or resource-reclamation step instead of ending as one final score. For AI-Native QA, an isolated, stable, scalable execution layer is foundational for agent regression, tool-call testing, and reward-hacking diagnosis.

**Link:** [DeepSeek DSec paper](https://arxiv.org/abs/2609.22978)

## 9. Study of LLM-generated test suites: Execution and coverage do not prove test effectiveness

**Category:** AI Testing

**Source:** arXiv

**Updated:** 2026-09-21

**Summary:**

A study submitted on September 21 evaluates LLM-generated Python test suites on ClassEval using execution success, line coverage, branch coverage, Cosmic Ray mutation scores, and structural quality. It finds that coverage can approach a ceiling and provide weak discrimination; executability varies materially across models; no prompt dominates on every metric; and model choice explains more variation than prompt choice. The authors therefore recommend combining an execution gate, coverage, mutation testing, and structural checks, while selecting the model before tuning prompts. For QA teams, the practical point is specific: runnable tests are not necessarily good tests, and a single coverage number cannot establish that AI-generated tests can discover defects.

**Link:** [LLM-generated test suites study](https://arxiv.org/abs/2609.24341)

## 10. Volcengine DABench: An agent benchmark for real-world data-analysis scenarios

**Category:** Agent Testing

**Source:** Volcengine Agent Community

**Updated:** 2026-09-22

**Summary:**

On September 22, the Volcengine Agent Community evaluation-set page recorded a DABench entry for agent evaluation on real data-analysis scenarios. It covers seven industries, including retail, finance, and automotive, and organizes knowledge-question tasks into simple, medium, and hard levels. Its value is not another generic model leaderboard; it supplies scenario- and difficulty-oriented material with which teams can build more concrete evaluations for data-analysis agents, including task completion, answer quality, and business-context complexity. This makes the results more suitable for layered regression than for collapsing different difficulties and business contexts into one opaque score. For AI-Native QA teams in China, this Chinese official source can help cover gaps in international benchmarks, while still competing in the same unified pool on relevance, actionability, evidence quality, and coverage value.

**Link:** [Volcengine Agent evaluation sets](https://developer.volcengine.com/evaluation-set)
