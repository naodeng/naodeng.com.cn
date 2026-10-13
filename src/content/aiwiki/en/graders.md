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
lastReviewedAt: "2026-10-12"
---
# Graders

## Quick Take

- **In brief:** A grader applies criteria to an AI output or task result.
- **Useful for:** Checking expected behavior across a set of evaluation cases.
- **Main limit:** A grader can be incomplete, inconsistent, or biased.

## Overview

A grader can check whether generated tests compile and include an assertion. A separate reviewer may still need to check whether the tests cover the intended behavior.

## Core Definition

A grader is a person, program, or model that scores or classifies a result against defined criteria. It may check exact outputs, rules, references, or a rubric. Its reliability depends on the task and design.

## Background and Evolution

Evaluation systems use different graders because tasks need different kinds of judgment. Deterministic checks work well for exact conditions. Human or model review can assess outputs that do not have one exact answer.

## How It Works

1. Define the criterion and expected evidence.
2. Give the grader the result and required context.
3. Apply a rule, rubric, or reference comparison.
4. Record the score and any explanation.
5. Review disagreements or uncertain cases.

## Applications in Software Development and Testing

Use a script to check syntax and test results. Use a rubric to review whether an explanation cites the right code. Compare model graders with human judgments before using them for important decisions.

## Strengths and Limitations

Automated graders can apply repeatable checks at scale. Human and model graders can assess more open-ended work. Every grader can miss defects or reward the wrong signal. A score should be interpreted with the evaluation set and rubric.

## Comparison with Similar Terms

A grader applies criteria to one result. An evaluation is the broader process of testing a system against cases. A unit test checks defined software behavior. A trace grader evaluates recorded events from an agent run.

## Best Practices

Use deterministic checks where possible. Make rubrics explicit. Test graders on positive, negative, and borderline cases. Measure disagreement and review samples with people.

## Common Pitfalls

Do not assume a model grader is objective. Do not use a grader's explanation as proof that its score is correct. Avoid grading only surface features when the requirement concerns behavior.

## FAQ

### Can an LLM grader replace human review?

Not by default. It can assist with defined criteria, but teams should validate it and review uncertain or high-impact cases.

## Related Resources

### Related Terms

- [agent-evals](https://inaodeng.com/en/AIWiki/agent-evals/)
- [trace-grading](https://inaodeng.com/en/AIWiki/trace-grading/)
- [self-healing-code](https://inaodeng.com/en/AIWiki/self-healing-code/)

### External References

- [How to build a reliable Grader (LangSmith)](https://docs.smith.langchain.com/concepts/evaluation)
- [The Art of Evaluation: Evaluators and Graders in AI](https://docs.qoder.com/)
