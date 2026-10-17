---
title: "AI-Native QA Weekly｜Week 42"
description: "Week 42 of AI-Native QA Weekly, covering agent evaluation, LLM quality, AI test automation, and quality engineering."
lang: "en"
slug: "2026/week-42"
weekNumber: 42
publishedAt: "2026-10-17"
periodStart: "2026-10-10"
periodEnd: "2026-10-16"
timeZone: "Asia/Shanghai"
itemCount: 10
---

# AI-Native QA Weekly｜Week 42

This issue covers 2026-10-10 00:00 through 2026-10-16 23:59 (Asia/Shanghai) and was published on 2026-10-17. It selects ten developments under the ai-qa-weekly rules, ranking domestic and international sources together and focusing on agent evaluation, LLM quality, test automation, and quality engineering. The QA takeaways are editorial guidance; they do not mean that the tools were executed or the studies reproduced for this issue.

## 1. Google Cloud: Agent evaluations should inspect execution trajectories, not only final answers

**Category:** Agent Testing

**Source:** Google Cloud Blog

**Updated:** 2026-10-16

**Summary:**

Google Cloud published four evaluation-engineering lessons from building its Google Cloud Developer plugin. The most direct finding is that asking a judge to read only an agent’s final written response can mark a successful run as a failure. In the initial 11-prompt evaluation suite, the automated grader first marked three prompts as failed, but the team checked the raw tool-call logs and full trajectories and confirmed that all three had actually completed the required execution steps. Google Cloud therefore recommends golden sets that cover the model, harness, plugins, and realistic workflows, with scores based on execution steps, tool calls, final state, and destructive side effects, and recommends treating the suite as continuous integration. QA teams should assert the final text, trajectory, and environment state separately, especially around permissions, deletion, and multi-step recovery. The lessons come from this plugin’s practice and do not prove equivalent results for another agent or business.

**Link:** [https://cloud.google.com/blog/topics/developers-practitioners/four-eval-engineering-lessons](https://cloud.google.com/blog/topics/developers-practitioners/four-eval-engineering-lessons)

## 2. OpenAI publishes the GPT-Live-1.1 system card: production and synthetic voice evaluations need separate interpretation

**Category:** LLM Quality

**Source:** OpenAI Deployment Safety Hub

**Updated:** 2026-10-15

**Summary:**

OpenAI published the system card for GPT-Live-1.1 and GPT-Live-1.1 Quip on October 15, explaining how the full-duplex voice models were evaluated with production prompts and synthetic prompts. The production evaluation uses real audio examples processed through privacy and eligibility safeguards, while the synthetic evaluation deliberately generates difficult, poorly sampled boundary cases from safety policies. The card states that neither set estimates the prevalence of unsafe behavior in production and that scores from older system cards should not be compared directly when policies, datasets, graders, or measurement details have changed. The production results were broadly at parity with the predecessors with no statistically significant regressions, while the synthetic set found statistically significant regressions in sexual, mental-health, emotional-reliance, and gore categories. QA teams testing voice or multimodal systems should maintain both a production-distribution set and a risk-discovery set, record evaluator and dataset versions, and avoid replacing a production-quality conclusion with a targeted synthetic score.

**Link:** [https://deploymentsafety.openai.com/gpt-live-1-1](https://deploymentsafety.openai.com/gpt-live-1-1)

## 3. LangChain explains agent evaluation: build a small dataset from real traces and feed failures back into regression

**Category:** Agent Testing

**Source:** LangChain

**Updated:** 2026-10-15

**Summary:**

LangChain published a practical agent-evaluation guide this week. Its starting workflow is to choose one behavior from real execution traces, build a small dataset of roughly 10 to 20 examples, run the current agent to establish a baseline, and add new failures from testing or production to the dataset. The guide recommends deterministic code evaluators wherever possible, LLM judges where code cannot decide the result, and human review both for subjective quality and for checking the other evaluators. For multi-step agents, teams should inspect the complete thread, tool-call path, and final state instead of grading only the final response. Offline evaluations compare prompt, model, or tool changes before release, while online evaluations expose failures in real traffic; the two loops should continuously inform one another. QA teams can separate a small PR-level regression set from a larger pre-release suite and version the datasets, evaluators, and agent configuration together. These are LangChain’s engineering recommendations, not an automatic guarantee of reliability for any business integration.

**Link:** [https://www.langchain.com/blog/common-questions-about-agent-evals](https://www.langchain.com/blog/common-questions-about-agent-evals)

## 4. Snowflake changes Cortex evaluation defaults: recalibrate quality gates when metric versions change

**Category:** LLM Quality

**Source:** Snowflake Documentation

**Updated:** 2026-10-13 (planned rollout; subject to change)

**Summary:**

Snowflake’s behavior-change notice says that the default evaluation settings for Cortex Agent and Cortex Analyst will move from the older v1 metric version and claude-4-sonnet judge model to v3 metrics and the claude-sonnet-4-6 model, with openai-gpt-5.4 as a fallback when the new model is unavailable. The notice is marked Pending and was expected to take effect by default on October 13; explicitly configured versions and models are not changed automatically. Because scores from different metric versions are not directly comparable, teams that use evaluation results in dashboards, alerts, or CI/CD thresholds should run representative samples with v3, recalibrate gates, and check judge-model permissions and cost before rollout. Snowflake notes that tool_selection_accuracy does not use a judge model and therefore is not affected in the same way. For QA, this is a reminder that an evaluation-platform upgrade is itself a regression risk: the same metric name does not necessarily mean the same measurement. Release evidence should pin the metric version, judge model, and threshold together.

**Link:** [https://docs.snowflake.com/en/release-notes/bcr-bundles/un-bundled/bcr-2442](https://docs.snowflake.com/en/release-notes/bcr-bundles/un-bundled/bcr-2442)

## 5. TesterArmy ships e2e 0.21.2: improving replay, model provenance, and failure attribution in agent tests

**Category:** Tools & Projects

**Source:** GitHub · tester-army/e2e

**Updated:** 2026-10-16

**Summary:**

TesterArmy released e2e 0.21.2, a patch release for its agent-driven end-to-end testing framework for web and mobile applications. The release adds modifier-key support to tap, double-tap, and right-click actions in agent.act and the MCP server, and records those key states in the action-replay cache. Cached replays can also report the model that produced the action, which helps teams identify replays made after a model change. The notes improve failure attribution in Markdown summaries, GitHub comments, and trace pages, correct duplicate skipped-test reporting across multiple workers, and list the project’s MCP server in the official MCP Registry. For QA, the value is better evidence around actions, models, and failure ownership rather than a claim that agent tests are inherently reliable. Teams still need to test cache invalidation, model changes, concurrent sharding, and deterministic assertions in their own suites; a patch release is not proof of business-level coverage or acceptance.

**Link:** [https://github.com/tester-army/e2e/releases/tag/e2e@0.21.2](https://github.com/tester-army/e2e/releases/tag/e2e@0.21.2)

## 6. Thunders improves AI test-run control with a live browser, human takeover, and step-level states

**Category:** Test Automation

**Source:** Thunders

**Updated:** 2026-10-15

**Summary:**

In its October 15 cloud update, Thunders added a live browser view so testers can watch a run in real time instead of seeing screenshots only. A tester can take control when a step fails or reaches a breakpoint, add the missing step, and resume the run; manual browser actions can also be recorded as test steps. The release adds effort levels for Thunders AI so teams can choose different reasoning investment for a quick edit or a long flow, and a redesigned timeline shows whether each step succeeded, failed, was interrupted, stopped, skipped, not run, or is running. It also adds authenticated-profile recording, CI upload of mobile builds, and warnings for undefined variables in Thunders MCP. These controls can shorten the diagnosis and repair loop for AI-assisted testing, but they do not make a result automatically trustworthy. Teams should verify that repaired steps become versioned assets, AI-generated actions have stable assertions, and the same flow behaves consistently across browsers, devices, and CI environments.

**Link:** [https://www.thunders.ai/resources/release-notes](https://www.thunders.ai/resources/release-notes)

## 7. Artificial Analysis launches Decision Index 1.0, adding tool calling and refusal behavior to a decision-model benchmark

**Category:** LLM Quality

**Source:** Artificial Analysis

**Updated:** 2026-10-13

**Summary:**

Artificial Analysis launched Decision Index 1.0 this week to compare decision models that return a fixed choice and a probability for each option. The first index combines four equally weighted evaluations: a knowledge and hallucination set built from 500 private questions, the 513-question HLE-MultiChoice reasoning set, NVIDIA’s When2Call tool-calling evaluation, and Ai2’s WildGuardTest safety-classification set. The article also runs language-model baselines, although those models return a structured choice without decision probabilities. It reports Jev 1.13 leading the index at 58, while other models score higher on the tool-calling evaluation, and it publishes cost per million tasks and median time per task. QA teams can use the index as one way to compare classification, tool-use decisions, hallucination, and refusal behavior, but it remains a fixed benchmark snapshot. It cannot replace business data, real permissions, repeated-run stability, or production cost checks, and a leaderboard position is not an approval decision.

**Link:** [https://artificialanalysis.ai/articles/artificial-analysis-decision-index](https://artificialanalysis.ai/articles/artificial-analysis-decision-index)

## 8. China’s Qiúsuǒ 4.0 launches as a full-chain AI evaluation benchmark covering models, agents, and security governance

**Category:** Research & Trends

**Source:** Digital China Summit / CCTV News

**Updated:** 2026-10-13 (formal launch; source page published 2026-10-14)

**Summary:**

Qiúsuǒ 4.0 was formally released on October 13. The Digital China Summit website, citing CCTV News, describes it as a full-chain artificial-intelligence evaluation benchmark covering computing infrastructure, model algorithms, intelligent systems and products, industry applications, and security governance. The system provides common test procedures and measurement criteria, together with realistic workloads from electricity, healthcare, and steel scenarios; the report says that pilot evaluations and product validation have already been carried out in finance, electricity, and petrochemical settings. It is organized into four areas—basic hardware and software, models and intelligent systems, security governance, and industry deployment—and includes 16 evaluation tools. Lightweight code tools for computing, large models, and agents are released to help reproduce evaluations and test hardware-software coordination. For QA teams, this offers a layered reference from model capability to industry workload, but publishing a benchmark does not mean a particular agent has passed business acceptance. Local teams still need to verify data, environment, permissions, and release gates.

**Link:** [https://www.digitalchina.gov.cn/2026/xwzx/szkx/202610/t20261014_5381616.htm](https://www.digitalchina.gov.cn/2026/xwzx/szkx/202610/t20261014_5381616.htm)

## 9. QA Wolf brings native Windows desktop testing to its agent-assisted workflow with disposable environments

**Category:** Test Automation

**Source:** QA Wolf

**Updated:** 2026-10-13

**Summary:**

QA Wolf made parallel end-to-end testing for native Windows desktop applications available this week. Users can select Windows as a target while authoring a flow, after which the platform provisions a clean Windows machine, delivers the application, and records the run. Windows flows use the same test-writing conventions as the web, iOS, and Android flows, including accessibility IDs for locating controls, and support exe, msi, and msix installers as well as custom disk images. QA Wolf says that each test receives its own Windows virtual machine that is destroyed after one run, reducing cross-test contamination from files, settings, and saved logins; desktop flows can also be combined with web and mobile steps through Run Rules and passed data. This expands AI-assisted testing beyond browsers and gives cross-platform regression a common entry point, but teams still need to verify images, dependencies, accessibility identifiers, cleanup, and recorded evidence. Platform execution capability is not the same as coverage of the business workflow.

**Link:** [https://www.qawolf.com/changelog/windows-desktop-app-testing](https://www.qawolf.com/changelog/windows-desktop-app-testing)

## 10. Harvard Library Innovation Lab publishes an agent risk-assessment tool comparing agents, humans, and expert baselines

**Category:** Research & Trends

**Source:** Harvard Library Innovation Lab

**Updated:** 2026-10-14

**Summary:**

Harvard Library Innovation Lab published the AI Benchmarking Exercise web tool and an accompanying report this week. The exercise tests whether an agent can assess federal datasets that require domain context, web research, and risk ratings against a concrete rubric. It compares three approaches on the same data: a human researcher working alone, a human steering an LLM, and a background agent that searches the internet independently; the results are compared with expert risk assessments from Data Index. The report covers 47 datasets and six risk categories, measures exact agreement and distance from the expert rating, and records model, search volume, runtime, and cost. DeepSeek V4 Pro achieved 55% exact agreement by category, all models stayed within one rating level on average, and prompt caching reduced one model’s cost from $17.58 to $3.74 per dataset. QA teams can reuse the pattern of testing task results, scoring baselines, search constraints, and cost together, but the findings are specific to this data-risk task and do not establish general agent capability or production reliability.

**Link:** [https://lil.law.harvard.edu/blog/2026/10/14/announcing-the-publication-of-an-agentic-assessment-tool/](https://lil.law.harvard.edu/blog/2026/10/14/announcing-the-publication-of-an-agentic-assessment-tool/)
