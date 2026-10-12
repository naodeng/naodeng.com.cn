---
title: "Reinforcement Learning from Human Feedback"
titleZh: "人类反馈强化学习"
slug: "rlhf"
lang: "en"
summary: "RLHF turns human preference signals into training feedback, often using preference comparisons, a reward model, and policy optimization."
topic: "ai-foundations"
aliases:
  - "RLHF"
tags:
  - "Model training"
  - "Preference alignment"
related:
  - "instruction-tuning"
  - "direct-preference-optimization-dpo"
  - "reinforcement-fine-tuning-rft"
lastReviewedAt: "2026-10-12"
---

# Reinforcement Learning from Human Feedback

## Quick Take

- **In brief:** RLHF uses human preference signals to adjust model behavior.
- **Useful for:** Making responses better match selected human preferences.
- **Main limit:** Preference does not equal factual correctness.

## Overview

Annotators compare two answers to the same question and select the one they prefer. A training process uses those comparisons to make similar responses more likely.

## Core Definition

Reinforcement learning from human feedback (RLHF) uses human feedback as a training signal to adjust a model's behavior.

## Background and Evolution

RLHF became widely known through work on instruction-following language models. The label covers a family of approaches; not every system uses the same training steps.

## How It Works

A common pipeline collects demonstrations and preference comparisons, trains a reward model, then optimizes a language model toward higher reward. Other methods can use feedback differently.

## Applications in Software Development and Testing

Teams may use preference data to favor concise, actionable code suggestions. They should still test whether the suggestions compile, pass tests, and meet security requirements.

## Strengths and Limitations

Preference training can shift tone, format, or response choices toward human judgments. The result reflects the feedback and reward design; it may sound more useful without becoming more accurate.

## Comparison with Similar Terms

Instruction tuning learns from example responses. RLHF uses preference feedback to shape behavior. DPO is a preference-training method that does not require a separate reward model.

## Best Practices

Give annotators clear criteria, track disagreement, evaluate correctness separately, and keep preference data and test data distinct.

## Common Pitfalls

Do not assume a preferred answer is factually correct. Do not treat all user behavior as direct training feedback.

## FAQ

### Does RLHF make a model more truthful?

Not by itself. It changes behavior according to preference signals; factual claims still need evidence and evaluation.

## Related Resources

### Related terms

- [Instruction tuning](/en/AIWiki/instruction-tuning/)
- [Direct preference optimization](/en/AIWiki/direct-preference-optimization-dpo/)
- [Reinforcement fine-tuning](/en/AIWiki/reinforcement-fine-tuning-rft/)

### References

- [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)
