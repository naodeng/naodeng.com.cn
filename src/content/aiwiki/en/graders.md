---
title: "Graders"
titleZh: "评分器"
slug: "graders"
lang: "en"
summary: "Programmatic evaluators that score model or agent outputs against quality criteria."
topic: "ai-vibe-coding"
aliases:
  - "Graders"
  - "评分器"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "agent-evals"
  - "trace-grading"
  - "verification-artifacts"
  - "structured-outputs"
lastReviewedAt: "2026-03-02"
---

# Graders

> One-sentence definition: A specialized "judge" model or script responsible for evaluating, classifying, or quantitatively scoring the output of AI tasks.

## Quick Take

- Problem it solves: Turn “feels good” into measurable quality.
- When to use: Use it for regression, acceptance, and policy comparison.
- Boundary: Not suitable when judging from a single run only.

## Overview

`Graders` is often viewed as a niche feature, but it actually solves practical delivery problems: unreliable outputs, weak reuse, and poor traceability. From a science-communication perspective, it helps move AI from “answers” to “operational outcomes.”

## Core Definition

### Standard Definition

A Grader is the execution unit within an evaluation framework. It receives the task input, the model output, and optionally a reference answer (Ground Truth). Based on specific rubrics, it outputs a score, a rationale, or a classification.

### Metaphor: The "AI Class Monitor"

Imagine the **"Class Monitor"** in a school. Every day, the AI completes its homework, and the Class Monitor checks it. Based on a scoring sheet (Rubric) provided by the teacher, the Monitor verifies: Is the handwriting neat? (Format) Did it go off-topic? (Relevance) Is there any cheating? (Hallucination detection). Only tasks that pass the monitor's check are considered valid.

## Background and Evolution

### Origin

- **Context**: As Agent tasks became complex (e.g., generating hundreds of lines of code), manual human verification became impossible.
- **Focus**: Balancing "Accuracy" and "Efficiency" in evaluation.

### Evolution

- **Scripted Grader Era**: Using Regex or Assert statements. Good for format, but cannot understand logic.
- **LLM-as-a-Judge Era**: Using frontier models as graders. Intelligent but expensive and prone to their own hallucinations.
- **Specialized Small-Model Era**: Training dedicated graders on high-quality human-labeled data to achieve high performance with low latency and extreme objectivity.

## How It Works

1. **Context Reception**: The Grader receives the original user request and the Agent's response.
2. **Rubric Loading**: For example: "Deduct 10 points if output contains sensitive words; 100 points if the bug is fixed with consistent style."
3. **Inference & Analysis**:
   - **Code-based Grader**: Runs `npm test` or `pytest`.
   - **Semantic Grader**: Uses an LLM to perform logical deduction, determining if the response satisfies the user's implicit intent.
4. **Report Generation**: Returns a Score, specific Metrics, and a detailed Rationale.

## Applications in Software Development and Testing

- **Automated Answer Selection**: An Agent generates three variations of a fix; the Grader selects the one with the highest test coverage and cleanest code.
- **Hallucination Filtering**: Before publishing AI-generated docs, a Grader cross-checks facts against a database to intercept potential hallucinations.
- **Regression Test Factories**: In CI environments, thousands of Grader instances score historical cases simultaneously to identify negative impacts of model upgrades.

## Pros & Cons

### Pros

- **Scalable Productivity**: Can process tens of thousands of "homework assignments" per minute.
- **Consistency**: Graders don't get tired or let mood swings affect their scoring.
- **Structured Feedback**: Provides specific reasons for point deductions, helping developers refine Prompts.

### Cons & Risks

- **Judge Bias**: If the Grader model has a preference, it can mislead developers.
- **Overfitting**: Developers might optimize Prompts just to please the Grader, which may not translate to real-user value.
- **Self-referential Fallacy**: Avoid using a Grader derived from Model A to evaluate Model A, as it leads to circular reasoning.

## Comparison with Related Terms

| Dimension | Graders | Deterministic Tests | Evaluators (Frameworks) |
| :--- | :--- | :--- | :--- |
| **Logic** | **Semantic-heavy** | Logical Matching (True/False) | Orchestration Layer |
| **Semantic Ability** | Strong | None | Medium |
| **Determinism** | Lower | Extremely High | Depends on the Grader |

## Best Practices

- **Hybrid Grading**: Use scripts for "Hard Metrics" (e.g., JSON validity) and LLMs for "Soft Metrics" (e.g., readability).
- **Reasoning-First (CoT Grading)**: Require the Grader to write down its grading logic before giving a score—this significantly improves accuracy.
- **Regular Calibration**: Review 1% of Grader results manually every month to ensure the "AI Judge" isn't drifting.

## Pitfalls

- **Treating Graders as Absolute Truth**: Graders are proxies. Tasks with extreme safety requirements still need human sign-off.
- **Ignoring Latency**: If the Grader is too slow, it throttles the developer's feedback loop.

## FAQ

### Q1: Should beginners adopt this immediately?

A: Not always. For simple tasks, start lightweight; for team workflows or production-risk tasks, adopt it early.

### Q2: How do teams avoid overengineering with too many mechanisms?

A: Start with clear metrics, add mechanisms incrementally, and change one variable at a time.

## Related Resources

### Related Terms

- [agent-evals](https://inaodeng.com/en/AIWiki/agent-evals/)
- [trace-grading](https://inaodeng.com/en/AIWiki/trace-grading/)
- [self-healing-code](https://inaodeng.com/en/AIWiki/self-healing-code/)

### External References

- [How to build a reliable Grader (LangSmith)](https://docs.smith.langchain.com/concepts/evaluation)
- [The Art of Evaluation: Evaluators and Graders in AI](https://docs.qoder.com/)
