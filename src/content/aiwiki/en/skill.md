---
title: "Skill"
titleZh: "技能"
slug: "skill"
lang: "en"
summary: "A reusable capability package that defines what an agent can do, how it should do it, and with which tools."
topic: "ai-vibe-coding"
aliases:
  - "Agent skill"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "ai-agent"
  - "model-context-protocol-mcp"
  - "rules-cursorrules"
lastReviewedAt: "2026-10-12"
---
# AI Agent Skills

## Quick Take

- **In brief:** An agent skill packages instructions and resources for a reusable task.
- **Useful for:** Giving an agent consistent guidance for a specialized workflow.
- **Main limit:** Skill formats, discovery, and loading behavior vary by product.

## Overview

A testing skill may explain how to reproduce a failure, which checks to run, and how to report the result. The agent still needs the right tools and permissions.

## Core Definition

An AI agent skill is a structured set of task instructions. A skill may also include reference files, examples, or scripts. The host decides how to discover and load it. A skill does not by itself grant permissions.

## Background and Evolution

As agents began handling specialized tasks, teams needed reusable instructions beyond a single prompt. Different products now define different skill formats and loading rules. The term can refer to product-specific features.

## How It Works

1. A developer writes task guidance and defines its scope.
2. The skill is stored in the format expected by the host.
3. The host or user makes the skill available for a task.
4. The agent follows the guidance with its available context and tools.
5. A person checks the result and updates the skill when requirements change.

## Applications in Software Development and Testing

A skill can describe a test triage workflow: inspect the failure, identify relevant code, rerun a focused check, and report evidence. Keep commands and assumptions current.

## Strengths and Limitations

Skills can make repeated workflows easier to follow and maintain. Instructions may be ignored, conflict with newer requirements, or depend on tools that are unavailable.

## Comparison with Similar Terms

A skill packages guidance and may include supporting resources. A rule provides an instruction that applies within a defined scope. A custom command starts a named task. An MCP tool provides an operation through a protocol.

## Best Practices

Keep each skill focused. State when it applies and what result it should produce. Separate instructions from reference material. Test it on representative tasks and review tool permissions separately.

## Common Pitfalls

Do not assume every agent loads skills automatically. Do not put secrets in skill files. Do not describe a tool permission as though it were granted by the skill.

## FAQ

### Does a skill give an agent access to a tool?

No. The host and its permission settings control tool access. A skill can explain when to use an available tool.

## Related Resources

### Related Terms

- [ai-agent](https://inaodeng.com/en/AIWiki/ai-agent/)
- [model-context-protocol-mcp](https://inaodeng.com/en/AIWiki/model-context-protocol-mcp/)
- [rules-cursorrules](https://inaodeng.com/en/AIWiki/rules-cursorrules/)

### References
- [MCP docs (tools/connectors context)](https://docs.anthropic.com/en/docs/mcp)
- [Cursor rules docs (reusable behavior control)](https://docs.cursor.com/context/rules)
