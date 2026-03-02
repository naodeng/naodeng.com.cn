---
title: "Agentic Workflow"
titleZh: "智能体工作流"
slug: "agentic-workflow"
lang: "en"
summary: "A workflow pattern in which AI agents can plan, execute, observe, and self-correct tasks with limited human intervention."
topic: "ai-vibe-coding"
aliases:
  - "Agent workflow"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "ai-agent"
  - "human-in-the-loop"
  - "model-context-protocol-mcp"
lastReviewedAt: "2026-03-02"
---

# Agentic Workflow (智能体工作流)

> One-line definition: A design pattern where complex tasks are completed through iterative loops of planning, execution, and reflection by AI agents, rather than a single prompt.

## Quick Take

- Problem it solves: Turn “can code” into reliable delivery.
- When to use: Use for workflow design, testing collaboration, and quality governance.
- Boundary: Do not use without review and validation gates.

## Overview

`Agentic Workflow` matters less as a buzzword and more as an engineering control point for reliability, interpretability, and collaboration in AI-enabled development.

## Core Definition

### Formal Definition

An Agentic Workflow is a software engineering pattern that leverages Large Language Models (LLMs) as part of an iterative loop. It involves agents performing roles like planning, tool invocation, and outcome verification to complete multi-step goals over time.

### Plain-Language Explanation

Think of it as a foundational control point in AI engineering: it reduces randomness, improves reuse, and turns team know-how into repeatable practice.
- **Single Prompt**: You order a burger, you get a burger (hopefully). If it's wrong, you have to order again.
- **Agentic Workflow**: The chef plans the meal, tastes the sauce (Reflection), realizes it needs salt, adds it (Iteration), and finally presents the dish. You aren't just getting an answer; you're getting a managed process.

## Background and Evolution

### Origin

- **Context**: Andrew Ng (吴恩达) and other industry leaders popularized the term, noting that "iterative agentic workflows" often outperform even the most powerful models using simple zero-shot prompts.
- **Main focus**: Solving the "One-shot failure" problem in complex engineering.

### Evolution

- **Zero-shot**: "Write a login page." (Hits or misses).
- **Few-shot**: "Write a login page like this example." (Better, but static).
- **Agentic**: "Write a login page, run it, check for CSS errors, and fix them until it matches the design." (Dynamic and robust).

## How It Works

1. **Planning**: Breaking a high-level goal into actionable technical steps.
2. **Execution**: The agent performs the task (e.g., writing a Python script).
3. **Reflection**: The agent (or a second agent) reviews the code for bugs or style issues.
4. **Tool Use**: Executing tests, querying documentation, or checking environment variables.

## Applications in Software Development and Testing

- **Self-Healing Tests**: An agent detects a broken test, reads the error, updates the locator, and re-runs the test.
- **Continuous Documentation**: Automatically scanning code updates and rewriting documentation to stay in sync.
- **Complex Refactoring**: Iteratively moving logic between modules while running regression tests at each step.

## Strengths and Limitations

### Strengths

- **Lower Error Rates**: Reflection loops catch "hallucinations" before they reach the human.
- **Task Complexity**: Handles goals that are too large for a single context window or prompt.
- **Consistency**: Standardized workflows ensure different team members get similar quality results.

### Limitations and Risks

- **Execution Latency**: Iterative loops take more time than a single response.
- **Cost**: Every loop consumes extra tokens.
- **Token Usage**: Long-running loops can lead to context bloat or "forgetting" early instructions.

## Comparison with Similar Terms

| Dimension | Agentic Workflow | AI Agent | Traditional CI/CD |
| :--- | :--- | :--- | :--- |
| **Philosophy** | **Iterative System Design** | Individual Autonomous Entity | Deterministic Pipelines |
| **Logic** | Loops & Feedback | Autonomy & Tool Use | Linear & Scripted |
| **Goal** | Higher Accuracy | Task Execution | Repeatability |

## Best Practices

- **Explicit Reflection**: Explicitly ask the model to "Critique your own code" as a dedicated step.
- **Modular Steps**: Keep each workflow step focused to prevent the agent from getting "confused" by too many variables.
- **Quality Gates**: Always have a terminal "Test Pass" condition before completing a workflow.

## Common Pitfalls

- **Endless Loops**: Not setting a maximum number of iterations for self-correction.
- **Implicit Feedback**: Failing to provide the agent with enough "environment telemetry" (e.g., full error logs) to correctly reflect.

## FAQ

### Q1: Should beginners master this immediately?

A: Learn the core purpose first, then adopt it gradually in real workflows.

### Q2: How do teams know adoption is working?

A: Check for more stable delivery, less rework, and smoother collaboration.

## Related Resources

### Related Terms

- [ai-agent](/en/AIWiki/ai-agent/)
- [self-healing-code](/en/AIWiki/self-healing-code/)
- [zero-shot-coding](/en/AIWiki/zero-shot-coding/)

### Term Metadata

- Aliases: Agentic patterns
- Tags: AI Vibe Coding, Wiki

## References

- [DeepLearning.AI: AI Agentic Workflows](https://www.deeplearning.ai/the-batch/how-ai-agents-can-improve-workflows/)
- [Andrew Ng's keynote on Agentic AI](https://www.youtube.com/watch?v=sal78ACtGTc)
