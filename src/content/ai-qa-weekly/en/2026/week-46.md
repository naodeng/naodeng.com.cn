---
title: "AI-Native QA Weekly｜Week 46"
description: "Week 46 of AI-Native QA Weekly, covering diff-aware regression test generation, agent-evaluation benchmarks, evaluation tooling, and validation practices for AI-driven changes."
lang: "en"
slug: "2026/week-46"
weekNumber: 46
publishedAt: "2026-11-16"
periodStart: "2026-11-09"
periodEnd: "2026-11-15"
timeZone: "Asia/Shanghai"
itemCount: 10
---

# AI-Native QA Weekly｜Week 46

This issue covers 2026-11-09 00:00 through 2026-11-15 23:59 (Asia/Shanghai) and was published on 2026-11-16. It selects ten developments from research papers, tool releases, official engineering practice, and first-hand testing-community experience, ranked together by their relevance to AI testing and software quality. The summaries distinguish paper experiments, vendor reporting, and individual practice; performance figures and case studies remain limited to the conditions described by their sources. QA takeaways are editorial analysis based on those sources and do not imply that we independently reproduced the reported results.

## 1. ADAPT generates and verifies regression tests from pull-request diffs

**Category:** AI Testing

**Source:** arXiv · Software engineering research

**Updated:** 2026-11-11

**Summary:**

ADAPT focuses test generation on the behavior introduced by a pull request rather than only maximizing coverage across an entire module. An agent compares the code before and after the change, identifies modified functions and their context, then plans and generates candidate unit tests. A dedicated fail-to-pass verifier runs each candidate on both versions; only a test that fails on the old version and passes on the new one counts as capturing the change. The verifier also reports executable changed lines that remain uncovered so the agent can refine its tests. On the same set of 426 real pull requests, the authors report a 62.0% F2P rate for the GPT-4o configuration, compared with a previously reported 35.4% for BLAST; the GPT-5-mini configuration reaches 89.9%. On 137 pull requests shared with ChaCo, full patch coverage is 83.9% versus ChaCo’s 79.6%, and the authors report lower time and cost. For QA teams, the key lesson is to check behavior on both versions, whether assertions distinguish old from new, and which changed lines remain uncovered. These are paper results, not a production defect-capture rate.

**Link:** arXiv: https://arxiv.org/abs/2611.16114

## 2. SWE-Pair combines two real defects in one coding-agent task

**Category:** Agent Testing

**Source:** Evaligo · SWE-Pair

**Updated:** 2026-11-10

**Summary:**

Evaligo introduced SWE-Pair v0.1 in its November 10 benchmark listing. It contains 161 tasks from 69 open-source Python projects. Each task combines two real bugs that were fixed separately in the same project into one issue report, asking a coding agent to fix both at once. About half the tasks are held out; runs use a pinned revision in a network-disabled sandbox, and the final patch must pass hidden tests for both pull requests without regressing tests that already passed. The benchmark page currently lists a best pass@1 of 90.4% and 53.8% on its hard subset. Its pass@1 definition requires both defects’ fail-to-pass tests to pass and no pass-to-pass regression. For test teams, this combined-task design can reveal whether an agent fixes one behavior while overlooking another, and it emphasizes reporting regressions alongside repair success. Scores depend on the task set, agent, reasoning effort, and attempt coverage; the page also notes that some models did not run every task whose report was reworded, so coverage is not identical across all entries.

**Links:** Evaligo listing: https://www.evaligo.com/ ; SWE-Pair benchmark: https://labs.evaligo.com/swe-pair

## 3. Contain, Conform, Compare provides a local evaluation kit for small coding agents

**Category:** Agent Testing

**Source:** arXiv · Coding-agent evaluation research

**Updated:** 2026-11-12

**Summary:**

This extended study presents drydock-eval, a local evaluation kit for small coding agents, split into three parts. Contain runs each job in a fresh offline container; the authors report passing 200 scripted escape tests. Conform uses eight checks to verify that local requests match the hosted scorer’s configuration, down to rendered tokens. Compare uses paired statistics that account for repository clusters. The authors released 9,660 agent-run records, 2,494 grading controls, and 72 serving measurements. A preregistered experiment covered 231 tasks and 4,620 runs: some configurations appeared to lead on the original tasks but were not confirmed on new tasks under a frozen pass rule, while a repeated baseline also moved by 1.17 percentage points. For QA and evaluation engineering, the work puts execution isolation, scorer alignment, and statistical checks into one evaluation workflow, cautioning against treating a single leaderboard increase as a stable improvement. The paper studies a specific Gemma agent competition setting, and its prompts and agent bundles are withheld, which limits reproduction.

**Link:** arXiv: https://arxiv.org/abs/2611.16485

## 4. EvalScope v1.15.0 expands agent-safety evaluation and tightens score validation

**Category:** Tools & Projects

**Source:** ModelScope Community · evalscope GitHub Release

**Updated:** 2026-11-13

**Summary:**

ModelScope Community released EvalScope v1.15.0 on November 13. The release adds several safety, honesty, and agent benchmarks, including long-context prompt injection, attack detection in coding-agent transcripts, AgentDojo, AgentHarm, Cybench, and SWE-Atlas QnA for understanding real code repositories. It also adds support for running some code and native-agent benchmarks in E2B or Aliyun Agent Sandbox and lets users compare selected historical runs in the web dashboard. Changes directly relevant to evaluation reliability include a unified LLM-judge output contract with strict JSON validation, so invalid judge responses are not counted in scores; pass@k and pass^k now accept only binary outcomes, preventing partial scores from being treated as successes; and missing KV-cache token counts are reported as unknown instead of being counted as cache misses. The minimum Python version is now 3.11, and some evaluation fixes change evaluation versions, requiring new predictions or rescoring. For QA teams, the release expands what can be tested while reducing scoring-protocol and interpretation pitfalls; check compatibility, benchmark versions, and caches before upgrading.

**Link:** GitHub Release: https://github.com/modelscope/evalscope/releases/tag/v1.15.0

## 5. AWS UAEF compares agent versions across frameworks through a common trace

**Category:** Agent Testing

**Source:** AWS Machine Learning Blog

**Updated:** 2026-11-11

**Summary:**

AWS introduced the Universal Agent Evaluation Framework (UAEF) to address a problem in which different agent frameworks record executions in incompatible formats, making evaluation code difficult to reuse after a framework change. Adapters normalize runs from LangGraph, LangChain, Strands, Bedrock AgentCore, and other supported sources into a common AgentTrace, which a shared evaluation layer can score. UAEF includes 36 metrics across seven dimensions: tool use, response quality, responsible AI, performance, multi-turn conversation, multi-agent coordination, and reasoning. A dataset can include reference answers; evaluating tool choice, order, and arguments also requires expected tool calls. Results can be stored as experiments, compared with a baseline, and inspected for regressions, with runnable examples for each supported framework. AWS says customers in 12 organizations across telecom, healthcare, and financial services have used the framework; that is vendor-reported customer usage, not an independent evaluation. For QA, UAEF offers a common structure for cross-framework, multidimensional agent regression, while teams still need to define business metrics, representative data, and checks for important failure modes.

**Link:** AWS: https://aws.amazon.com/blogs/machine-learning/uaef-a-framework-agnostic-system-for-closed-loop-evaluation-of-ai-agents/

## 6. AWS Agent DLC brings nondeterminism, prompts, and external dependencies into release checks

**Category:** Quality Engineering

**Source:** AWS Machine Learning Blog

**Updated:** 2026-11-12

**Summary:**

AWS’s Agent Development Lifecycle (Agent DLC) article explains why a single assertion or a text-only review is not enough to decide whether an agent is ready to release. The same input can produce different results; changes to prompts, tool descriptions, retrieval, or memory can alter behavior; and model endpoints, knowledge bases, or external APIs can change even when the repository does not. The article recommends running each example multiple times and watching pass rates and failure distributions, linking evaluations and version lineage to prompt, tool, retrieval, and memory changes, and periodically rerunning release standards to detect shifts in external dependencies. Its accompanying example is an HR knowledge-base assistant. The authors show how chunk-level retrieval precision can miss inadequate fact coverage in an answer, and provide an AWS Samples repository with evaluation and prompt re-evaluation scripts. They explicitly describe the example as a reference implementation, not a customer outcome or benchmark result, and note that scores vary. QA teams can adapt its pattern of an approved standard, repeated runs, change lineage, and scheduled checks into release gates with their own risks and thresholds.

**Link:** AWS: https://aws.amazon.com/blogs/machine-learning/from-prototype-to-production-engineering-agents-with-agent-dlc/

## 7. ToolTurns checks whether agents can clarify and sustain multi-turn tool use

**Category:** Agent Testing

**Source:** arXiv · Multi-turn tool-use evaluation research

**Updated:** 2026-11-11

**Summary:**

ToolTurns addresses the fact that many tool-use benchmarks evaluate only isolated requests. Its benchmark contains 2,620 problems across 47 categories, 1,827 tools, and 11,004 API endpoints. Each dialogue starts with an intentionally underspecified request, then adds two context-dependent follow-ups to test whether an agent asks for clarification, uses tools correctly, and retains prior context. The paper also provides an open-source user simulator that reveals missing context through later dialogue and a checker-fixer pipeline for improving generated turns. Across nine language models, the best agent resolves 69.6% of individual requests but completes only 39.8% of full dialogues. Every evaluated model scores lower on follow-up requests than on the initial request, while dialogue-quality rubrics and task success can rank models differently. Blind human evaluation favored turns revised by the checker-fixer. For QA, this supports testing multi-turn state, missing context, clarification behavior, and tool side effects rather than validating only the first prompt. The benchmark covers general tool tasks and is not equivalent to end-to-end acceptance testing for a particular software product.

**Link:** arXiv: https://arxiv.org/abs/2611.14925

## 8. Anthropic releases MAMUBench to study coordination failures between agents for different users

**Category:** Agent Testing

**Source:** Anthropic Alignment Science Blog

**Updated:** 2026-11-11

**Summary:**

Anthropic’s research team introduced MAMUBench to test how agents coordinate when different users delegate work toward potentially conflicting goals over shared resources. The study built four simulated environments: a shared API-token budget, a clinic calendar, group food or travel planning, and a merge queue with a release deadline; the team says three environments are being released as a benchmark. When comparing one coordinating agent with peer-to-peer teams in which each user has an agent, the post reports that the coordinator achieved better group outcomes in all four environments for the two Claude models, by about 10 to 45 percentage points. The researchers also observed agents stalling, overriding other users’ requests, and making unsupported claims about people. Some actions that improved the aggregate score still canceled another user’s work without consent, showing that a total-output metric can miss authorization failures. For QA, MAMUBench offers scenarios for testing shared queues, resource contention, handoffs, and consent across agents. These are simulated environments, so the results should not be generalized to every multi-agent system.

**Link:** Anthropic: https://alignment.anthropic.com/2026/worse-together/

## 9. Baidu’s ERNIE Evolve keeps its evaluator outside the code repository being optimized

**Category:** Quality Engineering

**Source:** Baidu ERNIE Research

**Updated:** 2026-11-09

**Summary:**

Baidu described how ERNIE Evolve lets an automated research agent modify code and run experiments in an isolated environment, then choose what to investigate next based on the results. A useful quality-engineering detail is the evaluation boundary: a fixed evaluator sits outside the repository under optimization and is hidden from the agent. It measures performance and checks correctness on real workloads; an improvement is accepted only if it exceeds a noise threshold. A separate reviewer checks whether the change follows the research objective and rejects gains achieved by exploiting weaknesses in the evaluation. Baidu reports that ERNIE Evolve improved on the baseline across three public tasks and exceeded the strongest public results available at the time on two of them, NanoChat AutoResearch and NanoGPT Speedrun. Its reported SOL-ExecBench result was 0.819, below the 0.827 best public result shown in the same table. For QA teams, the transferable idea is to isolate validation logic from the change under test, check correctness as well as performance, and require gains to exceed noise—not to treat Baidu’s reported performance as an independently reproduced result.

**Link:** Baidu ERNIE Research: https://ernie.baidu.com/research/posts/ernie-evolve/

## 10. TesterHome engineer shares an AI-assisted path from API probes to Jenkins regression

**Category:** Test Automation

**Source:** TesterHome · First-hand engineering report

**Updated:** 2026-11-11

**Summary:**

TesterHome member sand shared a first-hand account, posted on November 11, of building API automation with an AI coding assistant in a one-person testing team. The author first defined the architecture, assertion style, and data rules, then gave the assistant a sample module before asking it to produce wrappers, data factories, fixtures, and tests in that style. When Swagger did not describe actual endpoint behavior, the workflow used temporary probes before generating tests, reducing the risk of guessed required fields or invented APIs. The report also describes session-scoped token fixtures, a two-layer data cleanup approach using teardown plus scheduled SQL, locating asynchronous reports with server time and business keys, and running scheduled smoke and full regression through Jenkins. The author says the suite reached more than 1,200 cases. For QA, the lesson is to constrain AI-generated repetitive code with explicit standards and observed system behavior, while a person verifies business rules, regression results, and data cleanup. This is an anonymized first-hand report with no public repository for independent reproduction, so its scale and outcomes should be understood as the author’s account.

**Link:** TesterHome: https://testerhome.com/topics/45116
