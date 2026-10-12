---
title: "AI Red Teaming"
titleZh: "AI 红队测试"
slug: "ai-red-teaming"
lang: "en"
summary: "AI red teaming probes models, retrieval, tools, and permissions with adversarial scenarios to find risks that need remediation."
topic: "ai-safety-quality"
aliases:
  - "Generative AI red teaming"
tags:
  - "Security testing"
  - "Risk assessment"
related:
  - "prompt-injection"
  - "jailbreak-attack"
  - "agent-evals"
  - "metamorphic-testing-ai"
lastReviewedAt: "2026-10-12"
---

# AI Red Teaming

## Quick Take

- **In brief:** Red teaming probes an AI system with planned adversarial scenarios.
- **Useful for:** Finding attack paths across prompts, retrieval, tools, and permissions.
- **Main limit:** A clean exercise covers only the scenarios that were tested.

## Overview

A model can follow a malicious instruction hidden in a document, call a tool, and expose data. Testing only the chat response may miss that system-level path.

## Core Definition

AI red teaming is a structured effort to find ways an AI system can be misled, misused, or made to fail.

## Background and Evolution

Red-team methods come from security testing. AI systems add model behavior, retrieved content, tools, and human review to the set of components that testers need to examine.

## How It Works

The team defines scope, accounts, data, stop conditions, and evidence handling. Testers run adversarial scenarios, record reproducible results, and track fixes and retests.

## Applications in Software Development and Testing

Test prompt injection, unsafe tool calls, sensitive-data exposure, and failures in a coding workflow. Keep test inputs and affected versions so teams can reproduce each issue.

## Strengths and Limitations

Adversarial testing can reveal failures that ordinary task suites miss. Results do not prove the system secure, and tests must stay within an approved scope.

## Comparison with Similar Terms

Red teaming searches for unexpected attack paths. Evaluation measures performance against planned tasks. They can share test cases, but they answer different questions.

## Best Practices

Set rules of engagement, use synthetic or approved data, record impact and preconditions, assign an owner to each finding, and retest after fixes.

## Common Pitfalls

Do not equate “no issue found” with “no issue exists.” Do not report findings without affected versions, reproduction steps, and status.

## FAQ

### Does one clean red-team exercise prove a system is secure?

No. It describes only the tested versions, paths, and scenarios.

## Related Resources

### Related terms

- [Prompt injection](/en/AIWiki/prompt-injection/)
- [Jailbreak attacks](/en/AIWiki/jailbreak-attack/)
- [AI agent evaluations](/en/AIWiki/agent-evals/)

### References

- [NIST Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)
