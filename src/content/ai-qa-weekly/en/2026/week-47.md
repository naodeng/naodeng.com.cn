---
title: "AI-Native QA Weekly｜Week 47"
description: "Week 47 of AI-Native QA Weekly, covering agent regression evaluation, natural-language test execution, offline trace checks, and research on coding-agent and RAG-system evaluation."
lang: "en"
slug: "2026/week-47"
weekNumber: 47
publishedAt: "2026-11-23"
periodStart: "2026-11-16"
periodEnd: "2026-11-22"
timeZone: "Asia/Shanghai"
itemCount: 10
---

# AI-Native QA Weekly｜Week 47

This issue covers 2026-11-16 00:00 through 2026-11-22 23:59 (Asia/Shanghai) and is dated 2026-11-23. The ten developments are ranked together by how directly they affect AI-system quality assurance, spanning product releases, evaluation tools, research papers, and testing-community practice. The summaries distinguish vendor announcements, paper experiments, and an author's account; demos and research findings have not been independently reproduced here. The QA takeaways are editorial analysis based on the cited sources.

## 1. GitHub Copilot Evals opens preview for regression checks on agents and MCP tools

**Category:** Agent Testing

**Source:** GitHub Changelog · GitHub Copilot Evals

**Updated:** 2026-11-17

**Summary:**

GitHub opened Copilot Evals in public preview for teams evaluating their own skills, custom agents, and MCP tools. It defines an eval as a repeatable test of behavior: give an agent a realistic task, describe a good result, then inspect both the final output and the trajectory that produced it. After changing a prompt, model, skill, agent, or MCP setup, teams can rerun the same eval, review passed and failed checks, and compare behavior before and after the change. The preview is available for Copilot Individual, Business, and Enterprise, and GitHub says it uses the local Vally evaluation tool. QA teams can turn high-risk tasks, expected outcomes, and important execution steps into regression examples. Teams can also track outcome quality and trajectory compliance separately to pinpoint whether a regression came from the answer or the tool-use path. Passing those examples only describes behavior for the current task set and configuration; it does not replace broader exploratory testing.

**Link:** GitHub Changelog: https://github.blog/changelog/2026-11-17-github-copilot-evals-is-now-in-public-preview/

## 2. AWS DevOps Agent adds replay and automatic quality reviews for past investigations

**Category:** Agent Testing

**Source:** AWS Cloud Operations Blog · This Month in AWS DevOps Agent

**Updated:** 2026-11-20

**Summary:**

AWS DevOps Agent added investigation replay and automatic reviews to help teams validate changes to agent skills, instructions, and integrations. A replay reruns a completed investigation and compares its grader score, time to root cause, tools and skills used, and timeline with the original. AWS says replays take no mutative actions, but they query the current live environment, so data from the original investigation may no longer be available. A review returns a helpful or not-helpful verdict and pass, fail, or not-applicable results across five dimensions: scope alignment, evidence grounding, completeness, environment impact, and accuracy. Automatic reviews sample 10% by default, configurable from 1% to 100%. This gives teams comparable regression evidence for agent changes, while environment drift and sampling mean a replay or score should not be treated as a complete quality verdict.

**Link:** AWS: https://aws.amazon.com/blogs/mt/this-month-in-aws-devops-agent-november-2026/

## 3. TestSprite 4.0 generates and continuously runs tests against a specification

**Category:** Test Automation

**Source:** TestSprite · Product Blog

**Updated:** 2026-11-20

**Summary:**

TestSprite 4.0 targets teams using coding agents and lets them describe expected product behavior in plain language or provide a specification, ticket, or design. The vendor describes a flow in which the agent first explores the app in a real browser, then writes and runs tests and keeps applying them to later changes. Failures are classified as product bugs, test problems, or environment problems. When the specification is silent, the agent lists its assumptions and waits for an answer; expected behavior changes only after user approval. The article demonstrates a shopping-cart regression that appeared after a merge. The demonstration and its reported effects are vendor claims, not an independent comparative evaluation. For QA, the approach keeps product intent as the test oracle; reviews should still check that specifications cover edge cases, failure classifications are correct, and run evidence is traceable.

**Link:** TestSprite: https://www.testsprite.com/blog/introducing-testsprite-4-0

## 4. Katalon AI Test Runner uses a separate AI to verify manual test execution

**Category:** Test Automation

**Source:** Katalon · Product Blog

**Updated:** 2026-11-19

**Summary:**

Katalon introduced AI Test Runner in TestOps to execute existing natural-language manual test cases and compare each step with the observed application in a cloud browser. Before a run, it checks whether the cases are clear and complete, asking testers to fill gaps first. A separate, read-only AI verifies each step using screenshots and action evidence, so the AI performing the test does not approve its own result. The system retains video, screenshots, an AI log, and step-level verdicts for review; repeated runs do not use AI, making them deterministic. The product is aimed at teams with existing manual regression cases. Testers still choose coverage, investigate flagged problems, and make release decisions. Before relying on it, teams should sample whether verdicts match the screenshots and confirm that expected results remain valid as the application changes.

**Link:** Katalon: https://katalon.com/resources-center/blog/introducing-katalon-ai-test-runner

## 5. agentest 3.5.0 makes its first PyPI release and expands offline agent-trace tests

**Category:** Tools & Projects

**Source:** GitHub · agentest v3.5.0 Release

**Updated:** 2026-11-19

**Summary:**

The open-source agentest project published its first PyPI package, agentest-ai 3.5.0, on November 19. It reads recorded agent OpenTelemetry traces and applies repeatable rule-based checks. This release adds 30 opt-in tests; the default run remains 130 checks. It also publishes a 1.0.0 trace-format specification, JSON Schema, connectors, and readers. Supported log formats include OpenTelemetry, LangChain/LangGraph, OpenAI Agents SDK, n8n, AutoGen, and smolagents. The project says the tool can run offline without an API key or LLM judge; these are project feature claims, and coverage still depends on whether a trace contains the evidence a check needs. QA teams can first validate the rules and false-positive rate against redacted historical traces, then consider putting stable checks in CI. Teams should define which rules apply to each agent and review check changes when upgrading so the checklist stays aligned with the current trace format. Missing evidence should not be treated as a pass.

**Links:** GitHub release: https://github.com/srpadmanabhuni/agentest/releases/tag/v3.5.0 ; PyPI: https://pypi.org/project/agentest-ai/3.5.0/

## 6. Pentera Apps enters early access for agentic web and API penetration testing

**Category:** AI Testing

**Source:** Pentera · Press Release

**Updated:** 2026-11-18

**Summary:**

Pentera announced early access to Pentera Apps, its agentic web-application and API penetration-testing product. The vendor says the agent maps application exposure and uses emulated attacks to validate business-logic flaws, authentication and authorization weaknesses, technical vulnerabilities, data exposure, and API-security risks. It reports evidence developers can use to reproduce findings and supports rerunning attack paths after fixes. The product description emphasizes guardrails and simulated attacks, but it does not provide independent test results, so security, false-positive rates, and production impact still need hands-on evaluation. The approach connects finding a weakness with proving an attack path is exploitable and then checking the remediation. For security QA, that can make retesting more concrete; before a pilot, teams should constrain targets and permissions and verify execution boundaries and evidence quality for each attack class.

**Link:** Pentera: https://pentera.io/press-release/pentera-apps-unveiled-for-agentic-web-app-and-api-pentesting/

## 7. LangSmith Python SDK 0.15.1 can selectively upload evaluation runs

**Category:** LLM Quality

**Source:** LangSmith · Python SDK Release PR

**Updated:** 2026-11-20

**Summary:**

LangSmith Python SDK 0.15.1 adds the ability to upload only selected runs from evaluate(). The release notes say users can choose which runs are uploaded; PyPI records the package upload on November 20, while the GitHub release notes are dated November 19. For evaluations that include sensitive inputs or internal data, selective upload gives teams control over which execution traces reach the hosted platform while preserving their evaluation workflow. In practice, keep upload-selection rules separate from scoring criteria, check that excluded traces do not skew the dataset, and define how local results are retained. This change affects the data flow for evaluation records; it does not validate model quality by itself. Teams still need representative samples, evaluators, and reviewable scoring evidence.

**Links:** GitHub release PR: https://github.com/langchain-ai/langsmith-python/pull/110 ; PyPI: https://pypi.org/project/langsmith/0.15.1/

## 8. Study finds coding-agent unit-test coverage advantages weaken on larger projects

**Category:** Agent Testing

**Source:** arXiv · Software Engineering Research

**Updated:** 2026-11-20

**Summary:**

The paper “Can Coding Agents Write and Transpile Unit Tests” compares three coding agents on unit-test generation and cross-language test translation. The authors report that agent-generated suites exceed human-written suites on traditional coverage measures, but test quality drops sharply as project size grows. Much of the coverage advantage comes from writing more tests, rather than making each test more effective. The paper also finds agentic test translation inconsistent and unreliable. This is a reminder for QA teams to look beyond line coverage and test counts: inspect whether assertions expose regressions, whether tests distinguish correct from incorrect behavior, and whether translated tests still check the same behavior. The results are limited to the agents and projects in the study, rather than every model or codebase. The paper was first submitted on November 16 and revised on November 20.

**Link:** arXiv: https://arxiv.org/abs/2611.21797

## 9. TesterHome author shares statistical checks for agent release decisions

**Category:** Quality Engineering

**Source:** TesterHome · AI testing practice

**Updated:** 2026-11-16

**Summary:**

TesterHome author dengdagui described an automated evaluation and release-decision platform for comparing versions of an LLM agent. The post says the system uses LangChain to run the agent, Langfuse to record traces, DeepSeek as an LLM judge, and SciPy to run 1,000 Bootstrap resamples and calculate a 95% confidence interval and p-value for version scores. It also tracks tool-call counts, intent completion, and first-token and per-token latency. The author proposes requiring a statistical difference before treating a new version as an improvement, and cautions against deciding from the average score of a small sample. This is the author's account of an implementation and decision method, not an independently validated general recipe. Teams can borrow the idea of reviewing quality, cost, latency, and traces together, while checking the pairing method, statistical assumptions, and judge consistency.

**Link:** TesterHome: https://testerhome.com/topics/45137

## 10. AutoRAGBench evaluates agents that build RAG systems from scratch

**Category:** Agent Testing

**Source:** arXiv · RAG Agent Benchmark

**Updated:** 2026-11-19

**Summary:**

AutoRAGBench proposes a benchmark for measuring whether LLM agents can build and iteratively improve RAG systems in an open code space. It contains nine development tasks in which agents analyze data, implement retrieval pipelines, and refine them from experimental feedback without starter code or prescribed strategies. Each task has a six-hour limit on one H800 GPU. The authors evaluate nine agent configurations and analyze both final system performance and development trajectories. They report that GPT-6.1 Sol with Codex CLI achieves the highest average score at 56.1, compared with 44.4 for a composite Human-SOTA baseline; when starting from human-designed systems, that configuration improves the average by 16.6 points across seven tasks. These numbers apply only to the paper's tasks and resource limits. For QA, the benchmark evaluates process as well as outcome, but it measures RAG-development agents rather than general software-product testing.

**Link:** arXiv: https://arxiv.org/abs/2611.25582
