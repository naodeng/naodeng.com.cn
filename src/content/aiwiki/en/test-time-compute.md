---
title: "Test-Time Compute"
titleZh: "推理时计算扩展"
slug: "test-time-compute"
lang: "en"
summary: "Test-time compute spends more sampling, search, or verification effort during inference, potentially improving hard tasks at added cost."
topic: "ai-foundations"
aliases:
  - "Inference-time compute"
tags:
  - "Inference"
  - "Model evaluation"
related:
  - "reasoning-models"
  - "predicted-outputs"
  - "agent-evals"
lastReviewedAt: "2026-10-12"
---

# Test-Time Compute

## Quick Take

- **In brief:** Test-time compute spends more processing effort while solving a task.
- **Useful for:** Hard problems that benefit from more candidates, search, or checks.
- **Main limit:** More computation adds latency and cost without guaranteeing success.

## Overview

A coding assistant can draft a patch, run tests, and revise it from failures. This may improve results, but repeated attempts can also waste time.

## Core Definition

Test-time compute is additional computation used during inference to explore, search, or verify possible answers.

## Background and Evolution

Model training and model inference are separate stages. Test-time compute increases work at answer time rather than updating model weights.

## How It Works

A system can sample multiple answers, search solution candidates, extend reasoning, or call tools such as code execution. A selector or verifier then chooses among results.

## Applications in Software Development and Testing

Give a difficult code change more attempts, run targeted tests, or compare candidate fixes. Set a retry limit and retain the test results used to select the patch.

## Strengths and Limitations

More compute can help on tasks where search or verification finds errors. It can increase cost and delay, and returns may diminish as the budget grows.

## Comparison with Similar Terms

Training changes model parameters before deployment. Test-time compute spends more resources on an active request. Agent evaluation measures performance across a set of tasks.

## Best Practices

Compare fixed task sets at several compute budgets. Track success, error types, time, and cost, not only the model's explanation.

## Common Pitfalls

Do not assume that a longer answer reflects more reliable reasoning. A generated explanation may not describe the system's actual internal process.

## FAQ

### Does more test-time compute always improve answers?

No. It may help some tasks, but the gain depends on the method, task, verification, latency, and cost.

## Related Resources

### Related terms

- [Reasoning models](/en/AIWiki/reasoning-models/)
- [Predicted outputs](/en/AIWiki/predicted-outputs/)
- [AI agent evaluations](/en/AIWiki/agent-evals/)

### References

- [Scaling LLM Test-Time Compute Optimally](https://arxiv.org/abs/2408.03314)
