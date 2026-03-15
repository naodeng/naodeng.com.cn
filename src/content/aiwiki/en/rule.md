---
title: "Rule"
titleZh: "Rule（规则）"
slug: "rule"
lang: "en"
summary: "A Rule is a concrete constraint unit that governs AI behavior, output format, and execution boundaries in coding workflows."
topic: "ai-vibe-coding"
aliases:
  - "Instruction Rule"
  - "Constraint Rule"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "rules-cursorrules"
  - "skill"
  - "prompt-driven-development"
lastReviewedAt: "2026-03-02"
---

# Rule

> One-line definition: A Rule is an "Explicit Contract" used in AI collaboration to constrain behavior, align intent, and ensure output quality—the underlying infrastructure that transforms "Casual Chatting" into "Professional Engineering."

## Quick Take

- Problem it solves: Turn abstract AI behavior constraints into executable team rules.
- When to use: Use in team projects, compliance-sensitive workflows, and policy-driven automation.
- Boundary: Rules without verification quickly become outdated documentation.

## Overview

In the Vibe Coding lexicon, **Rule** is the heart of all controllable AI. AI is like creative but unstable "Water," and the Rule is the "Container." Without rules, AI might write code that runs fast but is unmaintainable, or code with messy styles. Through a carefully designed rule system (like `.cursorrules`), we can synchronize a team's decade of engineering experience and taboos to an AI assistant in milliseconds, instantly giving it the "Common Sense" of a senior employee.

## Core Definition

### Formal Definition

A Rule is a set of explicitly defined constraint instructions or guidelines, typically written in natural language, designed to limit the decision space of an AI model when handling tasks. It covers code style, security guidelines, output structure, tool-calling tendencies, and specific business logic limits.

### Plain-Language Explanation

You can think of a Rule as **"The AI Agent's Onboarding Manual + Automated Redlines."** You don't have to remind it every time: "Don't forget Type Hints when writing Python"; you just write it in the rule, and it will be like your double—always remembering the company's code standards. It's the "Guardrail" you set for the AI.

## Background and Evolution

### Origin

- **Context**: Early Prompt Engineering was too random and hard to manage, leading to serious "Inconsistent Output Style" issues when large teams promoted AI-assisted tools.
- **Focus**: How to extract rules from a single conversation in a declarative, persistent way.

### Evolution

- **Generation 1.0 (System Prompt)**: One-way instruction injection, hard to modify, hard to split, and consumed massive context.
- **Generation 2.0 (Config-based Rules)**: Represented by `.cursorrules`, rules began to coexist with project files, gaining the ability to be "Automatically activated per project."
- **Generation 3.0 (Dynamic & Managed Rules)**: Rules began to have a hierarchical system (Global Rules, Project Rules, Micro-rules for specific files) and could be version-controlled and distributed via Git.

## How It Works

1. **Declaration**: Describe constraints in precise, unambiguous natural language (e.g., "All SQL must use parameterized queries").
2. **Retrieval**: When a developer calls for AI in a specific directory, the IDE automatically searches for nearby `.cursorrules` files and injects them into the prompt header.
3. **Alignment**: During the reasoning process, the model treats rules as strong constraints, prioritizing the filtering out of candidate solutions that do not satisfy the rules.
4. **Verification**: In coordination with Linters and automated testing, AI outputs that violate rules are intercepted and errored.

## Applications in Software Development and Testing

- **Unified Architectural Style**: A rule "Strictly forbids writing SQL directly in the Controller layer," forcing the AI to call through the Service layer.
- **Automated Testing Standards**: A rule "Must synchronously generate corresponding unit tests for every new function, with coverage of no less than 80%."
- **Security Warning**: A rule "Prohibits hardcoding any API Keys or password placeholders in code blocks."

## Strengths and Limitations

### Strengths

- **Ultra-low Learning Cost**: Writing a few sentences in English or Chinese can significantly change AI behavior, no complex fine-tuning required.
- **Knowledge Inheritance**: "Pitfalls" summarized by veteran employees can be taught to all new employees assisted by AI in one second via rules.
- **High Transparency**: Rules are written in the codebase; everyone can see why the AI made a certain suggestion, making auditing easy.

## Limitations and Risks

- **Rule Conflicts**: When global rules and project rules contradict each other, it can easily lead to model "Deadlock" or nonsense.
- **Rule Bloat**: Injecting too many rules eats up a large amount of context Tokens, reducing the amount of code the model can read.
- **Bypassing Risk**: Extremely smart models (like o1) occasionally "Take shortcuts" to complete a task, even unintentionally violating ambiguous rules.

## Comparison with Similar Terms

| Dimension | Rule | Prompt | Logic (Hardcode) |
| :--- | :--- | :--- | :--- |
| **Persistence** | **Long-term, Shared** | Temporary, Session-only | Absolute, Immutable |
| **Flexibility** | High, Natural Language | Extremely High | Extremely Low |
| **Mechanism** | Semantic Constraint | Intent Guidance | Deterministic Execution |

## Best Practices

- **Atomic Description**: Don't write "Write good code"; write "Variable names must use camelCase and be no longer than 25 characters."
- **Use Markdown Structure**: Use headers and bolding in rule files to help the model locate key constraints faster.
- **Build a "Rule Repository"**: Establish a curated library of excellent rules (Awesome Rules) internally for various projects to reference.

## Common Pitfalls

- **Thinking More is Better**: Too many rules increase the model's cognitive load. Keeping the 10-15 most important rules often provides the best value.
- **Ignoring Negative Constraints**: Telling the AI "What NOT to do" is often more effective than telling it "What TO do" (e.g., "Prohibit the use of jQuery").

## FAQ

### Q1: Do Rules need to be written in code comments?
A: No. While helpful, the best practice is to write them in separate config files (like `.cursorrules`), keeping the code clean and outside the formal compilation scope.

### Q2: Will AI ever write bugs again now that we have Rules?
A: Definitely not. Rules significantly reduce "low-level style errors" and "common logical oversights," but intrinsic algorithmic flaws still require resolution through Code Review.

## Related Resources

### Related Terms

- [rules-cursorrules](https://inaodeng.com/en/AIWiki/rules-cursorrules/)
- [skill](https://inaodeng.com/en/AIWiki/skill/)
- [prompt-driven-development](https://inaodeng.com/en/AIWiki/prompt-driven-development/)

### Term Metadata

- Aliases: Instruction Rule, Constraint Rule
- Tags: AI Vibe Coding, Wiki

## References

- [Anthropic: Model Context Protocol (MCP)](https://docs.anthropic.com/en/docs/mcp)
- [Cursor Docs: Rules](https://docs.cursor.com/context/rules)
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
