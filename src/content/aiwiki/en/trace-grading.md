---
title: "Trace Grading"
titleZh: "轨迹评分"
slug: "trace-grading"
lang: "en"
summary: "Score intermediate reasoning/action traces rather than only final outputs."
topic: "ai-vibe-coding"
aliases:
  - "Trace Grading"
  - "轨迹评分"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "agent-evals"
  - "graders"
  - "verification-artifacts"
  - "artifact-feedback-loop"
lastReviewedAt: "2026-10-12"
---
# Trace Grading

## Quick Take

- **In brief:** Trace grading checks recorded actions and results from an agent run.
- **Useful for:** Finding failures in multi-step workflows and tool use.
- **Main limit:** A score depends on the rubric and recorded events.

## Overview

A coding agent may call a test tool, read the result, and then edit a file. A trace can show these recorded events. It does not necessarily show the model's private reasoning.

## Core Definition

Trace grading evaluates a recorded agent run against a rubric. A trace may include requests, tool calls, returned results, state changes, and timing. The grader can assess only data the system records. A score alone does not prove that the final answer is correct.

## Background and Evolution

The final answer may not show where a multi-step task failed. Teams therefore record selected execution events to investigate errors, policy issues, or repeated work. The amount of detail depends on instrumentation and settings.

## How It Works

1. Record selected requests, tool calls, results, and timing.
2. Connect related events with trace or span identifiers when available.
3. Apply a rubric to observable behavior.
4. Review flagged events with the task and policy in view.
5. Compare traces across versions when the same conditions are available.

A flag is a reason to investigate, not proof of a violation.

## Applications in Software Development and Testing

Use traces to find repeated calls, failed commands, or missing results. Compare recorded actions with the final code diff and test output.

## Strengths and Limitations

Traces can help locate a failure and show recorded call counts or latency. Missing events can hide important steps. A rigid rubric may reject a valid alternative. Traces may also contain sensitive data.

## Comparison with Similar Terms

Logs record events, often as messages. A trace connects related events in a task. Trace grading applies criteria to recorded events. Output evaluation checks the final result.

## Best Practices

Record only data needed for review. Link events to the task and code revision. Protect sensitive information. Use clear rubrics and review flagged cases before treating them as failures.

## Common Pitfalls

Do not claim a trace reveals private reasoning. Do not use a score as a substitute for checking the output. Do not assume every relevant event was recorded.

## FAQ

### What can trace grading tell a team?

It can help identify recorded actions that need review. It cannot show unrecorded events or prove correctness by itself.

## Related Resources

### Related Terms

- [Agent evaluations](/en/AIWiki/agent-evals/)
- [Graders](/en/AIWiki/graders/)
- [AI agents](/en/AIWiki/ai-agent/)

### External References

- [OpenTelemetry: Traces](https://opentelemetry.io/docs/concepts/signals/traces/)
