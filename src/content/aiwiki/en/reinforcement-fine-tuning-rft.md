---
title: "Reinforcement Fine-Tuning (RFT)"
titleZh: "强化微调（RFT）"
slug: "reinforcement-fine-tuning-rft"
lang: "en"
summary: "Fine-tune models using reinforcement signals to improve task-specific performance."
topic: "ai-vibe-coding"
aliases:
  - "Reinforcement Fine-Tuning (RFT)"
  - "强化微调（RFT）"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "direct-preference-optimization-dpo"
  - "reasoning-models"
  - "agent-evals"
  - "trace-grading"
lastReviewedAt: "2026-10-12"
---
# Reinforcement Fine-Tuning (RFT)

## Quick Take

- **In brief:** RFT adjusts a model using scores from a task-specific reward or grader.
- **Useful for:** Tasks with clear goals and results that can be evaluated.
- **Main limit:** The model learns the grader's signal, which may not capture the full goal.

## Overview

A team can train a model to generate test cases and score each result against a schema and executable checks. A high score matters only if those checks measure useful behavior.

## Core Definition

Reinforcement fine-tuning (RFT) applies reinforcement-learning methods during fine-tuning. A reward signal or grader evaluates candidate outputs, and training updates the model to favor higher-scoring behavior. Implementations differ in their algorithms and supported tasks.

## Background and Evolution

RFT applies reward-based learning to a pretrained model. Some providers use the term for a specific API workflow. Availability and exact behavior can change, so check current documentation.

## How It Works

1. Define the task and reward criteria.
2. Generate candidate outputs.
3. Score the candidates with a grader or reward function.
4. Update the model using the training method.
5. Evaluate the result on separate data and safety cases.

## Applications in Software Development and Testing

A team can use executable tests to score generated code or a structured rubric to score bug explanations. The grader should cover correctness and constraints, not only formatting.

## Strengths and Limitations

RFT can optimize behavior for a task with a useful reward signal. It can be costly and sensitive to grader errors. A model may learn to exploit the scoring rule instead of solving the intended task.

## Comparison with Similar Terms

Supervised fine-tuning trains on target examples. DPO trains from preference pairs with a direct objective. RLHF commonly uses preference-trained rewards with reinforcement learning. RFT is a broader label for fine-tuning with reward-based feedback; provider definitions vary.

## Best Practices

Check whether independent reviewers agree on task criteria. Make the reward hard to game. Keep evaluation data separate. Inspect examples with high and low scores and re-evaluate after training.

## Common Pitfalls

Do not assume a high reward means the output is useful or safe. Do not evaluate only with the grader used for training. Confirm current provider support before planning an implementation.

## FAQ

### Does RFT work for every task?

No. It is more suitable when the goal can be evaluated with a meaningful and reliable signal.

## Related Resources

### Related Terms

- [Direct preference optimization](/en/AIWiki/direct-preference-optimization-dpo/)
- [Reasoning models](/en/AIWiki/reasoning-models/)
- [Agent evaluations](/en/AIWiki/agent-evals/)
- [Trace grading](/en/AIWiki/trace-grading/)

### External References

- [OpenAI: Reinforcement fine-tuning guide](https://developers.openai.com/api/docs/guides/reinforcement-fine-tuning)
