---
title: "Prompt Injection"
titleZh: "提示注入"
slug: "prompt-injection"
lang: "en"
summary: "Prompt injection hides malicious instructions in user input or retrieved content to change model behavior or misuse tools."
topic: "ai-safety-quality"
aliases:
  - "Prompt injection attack"
tags:
  - "LLM security"
  - "Agent security"
related:
  - "jailbreak-attack"
  - "agent-sandboxing"
  - "excessive-agency"
lastReviewedAt: "2026-10-12"
---

# Prompt Injection

## Quick Take

- **In brief:** Prompt injection hides instructions in content a model reads.
- **Useful for:** Testing systems that process user input or external documents.
- **Main limit:** A prompt rule alone cannot enforce a security boundary.

## Overview

A code-review agent may read a malicious README that asks it to upload environment variables. The risk depends on how the model treats that text and what tools it can use.

## Core Definition

Prompt injection places manipulative instructions in model input or external content to change its task, rules, or tool behavior.

## Background and Evolution

Prompt injection became a concern as language models began reading untrusted content and using tools. The attack can enter through a user message or through retrieved pages, emails, files, and code.

## How It Works

The system places text in the model's context. The model may fail to distinguish trusted instructions from untrusted content and follow the hostile text.

## Applications in Software Development and Testing

Test coding and retrieval agents with adversarial documents, comments, and issue descriptions. Check whether they reveal secrets or take actions outside the request.

## Strengths and Limitations

Prompt-injection tests can expose risks across the model and tool workflow. Detection filters and refusal behavior can reduce some cases but cannot guarantee prevention.

## Comparison with Similar Terms

Prompt injection focuses on hostile instructions entering context. A jailbreak focuses on persuading a model to bypass safety behavior. Both can occur in the same attack.

## Best Practices

Treat retrieved text as untrusted, isolate secrets, limit tool permissions, validate each action, and require review for high-impact operations.

## Common Pitfalls

Do not rely on a system prompt as the only defense. The host system must enforce permissions and restrict access to sensitive data.

## FAQ

### Can retrieved documents contain prompt injection?

Yes. Pages, files, messages, and other external content can contain instructions that a model may misinterpret.

## Related Resources

### Related terms

- [Jailbreak attacks](/en/AIWiki/jailbreak-attack/)
- [Agent sandboxing](/en/AIWiki/agent-sandboxing/)
- [Excessive agency](/en/AIWiki/excessive-agency/)

### References

- [OWASP Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
- [NIST Adversarial Machine Learning Taxonomy](https://csrc.nist.gov/pubs/ai/100/2/e2025/final)
