---
title: "Excessive Agency"
titleZh: "过度代理权限"
slug: "excessive-agency"
lang: "en"
summary: "Excessive agency gives an AI application unnecessary tools, permissions, or autonomy, increasing the impact of a bad output."
topic: "ai-safety-quality"
aliases:
  - "Overly autonomous agent"
  - "Over-permissioned agent"
tags:
  - "Agent security"
  - "Least privilege"
related:
  - "ai-agent"
  - "agent-authorization"
  - "prompt-injection"
lastReviewedAt: "2026-10-12"
---

# Excessive Agency

## Quick Take

- **In brief:** Excessive agency gives an agent more tools or permissions than its task needs.
- **Useful for:** Assessing how a small model error could affect real systems.
- **Main limit:** Better prompting cannot remove permissions from a tool.

## Overview

An email-summary agent may need to read a mailbox. If it can also delete and forward messages, a mistaken action can expose or destroy data.

## Core Definition

Excessive agency occurs when an AI application grants more functionality, permission, or autonomy than a task requires.

## Background and Evolution

Tool-using agents make model output actionable. Security guidance treats unnecessary tools, broad permissions, and high autonomy as factors that can increase the impact of an error.

## How It Works

Risk depends on what the model can request and what the system will execute. A prompt injection or incorrect plan can cause harm only if tools and permissions allow the action.

## Applications in Software Development and Testing

Review the tools available to a coding agent. Test whether it can read unrelated files, change protected branches, delete data, or deploy without the intended approval.

## Strengths and Limitations

Reducing unnecessary access can limit the impact of mistakes and attacks. Least privilege cannot prevent incorrect answers or all misuse of allowed actions.

## Comparison with Similar Terms

Prompt injection is a way to influence model behavior. Excessive agency is a permission and system-design weakness that can make such influence consequential.

## Best Practices

Start with read-only access, expose task-specific tools, require separate approval for writes or external actions, and log each operation.

## Common Pitfalls

Do not rely on a system prompt to enforce operating-system or API permissions. The tool host must enforce access limits.

## FAQ

### Can a stronger system prompt fix excessive agency?

No. It may influence choices, but the tool permissions need to be narrowed separately.

## Related Resources

### Related terms

- [AI agents](/en/AIWiki/ai-agent/)
- [Agent authorization](/en/AIWiki/agent-authorization/)
- [Prompt injection](/en/AIWiki/prompt-injection/)

### References

- [OWASP LLM06:2025 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/)
