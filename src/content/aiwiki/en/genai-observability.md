---
title: "GenAI Observability"
titleZh: "GenAI 可观测性"
slug: "genai-observability"
lang: "en"
summary: "GenAI observability records model calls, tool steps, latency, and errors to diagnose workflows and trace runtime behavior."
topic: "ai-safety-quality"
aliases:
  - "Generative AI observability"
tags:
  - "OpenTelemetry"
  - "Operations"
related:
  - "trace-grading"
  - "agent-evals"
  - "model-context-protocol-mcp"
lastReviewedAt: "2026-10-12"
---

# GenAI Observability

## Quick Take

- **In brief:** GenAI observability records how model and tool calls behave at runtime.
- **Useful for:** Finding latency, errors, and workflow paths behind an answer.
- **Main limit:** A trace is not a verdict on answer quality.

## Overview

A response may depend on retrieval, model calls, tools, retries, and post-processing. The final text alone may not show which step failed or took the most time.

## Core Definition

GenAI observability uses logs, metrics, and traces to inspect the runtime behavior of generative AI systems.

## Background and Evolution

Distributed tracing already follows requests across services. GenAI adds model calls, prompts, tool arguments, tokens, and model versions as possible telemetry fields.

## How It Works

A trace links operations to one request. Logs record events, metrics summarize counts or latency, and traces show the sequence and duration of steps.

## Applications in Software Development and Testing

Instrument a coding workflow to find whether a slow test run came from retrieval, model latency, or a tool retry. Compare traces across model and prompt changes.

## Strengths and Limitations

Telemetry can make failures easier to locate and compare. Prompts and tool arguments may contain secrets or personal data, and trace data does not prove correctness.

## Comparison with Similar Terms

Observability describes runtime behavior. Agent evaluation measures task outcomes. Trace grading scores selected actions or outputs in a trace.

## Best Practices

Record only what teams need, redact sensitive fields, restrict access, set retention periods, and pin the semantic-convention version.

## Common Pitfalls

Do not log full prompts and outputs by default. Do not treat complete traces as proof that a system produced a good answer.

## FAQ

### Does a complete trace tell you whether an answer is good?

No. It shows calls, timing, and state; quality requires evaluation or review.

## Related Resources

### Related terms

- [Trace grading](/en/AIWiki/trace-grading/)
- [AI agent evaluations](/en/AIWiki/agent-evals/)
- [MCP](/en/AIWiki/model-context-protocol-mcp/)

### References

- [OpenTelemetry GenAI Semantic Conventions](https://github.com/open-telemetry/semantic-conventions-genai)
