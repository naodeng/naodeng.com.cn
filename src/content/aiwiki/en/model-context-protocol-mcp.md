---
title: "MCP (Model Context Protocol)"
titleZh: "模型上下文协议（MCP）"
slug: "model-context-protocol-mcp"
lang: "en"
summary: "An open protocol for connecting AI models with external tools and data sources in a standardized way."
topic: "ai-vibe-coding"
aliases:
  - "Model Context Protocol"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "ai-agent"
  - "skill"
  - "rules-cursorrules"
lastReviewedAt: "2026-03-02"
---

# Model Context Protocol (MCP)

> One-line definition: An open standard developed by Anthropic that allows AI models to seamlessly connect to external data sources and tools (like Google Drive, Slack, or local databases).

## Quick Take

- Problem it solves: Define execution capability and governance boundaries for AI agents.
- When to use: Use for tool invocation, policy control, and multi-step task execution.
- Boundary: Risk increases without permission and audit controls.

## Overview

`MCP (Model Context Protocol)` matters less as a buzzword and more as an engineering control point for reliability, interpretability, and collaboration in AI-enabled development.

## Core Definition

### Formal Definition

MCP is an open-source, JSON-RPC 2.0 based protocol that establishes a standardized communication layer between AI applications (clients) and external data/tool providers (servers). It enables models to discover and utilize **Resources** (data), **Tools** (functions), and **Prompts** (templates) through a consistent interface.

### Plain-Language Explanation

Think of it as a foundational control point in AI engineering: it reduces randomness, improves reuse, and turns team know-how into repeatable practice.
Think of MCP as the **"USB standard"** for the AI computing world. Whether your data is in a notepad, on GitHub, or in AWS, as long as you provide an MCP-compliant "plug," the AI can read, understand, and operate on it.

## Background and Evolution

### Origin

- **Context**: AI models' knowledge is often confined to their training data. To complete real-world engineering tasks, they urgently need access to private data and real-time tools.
- **Founder**: Anthropic (released late 2024).

### Evolution

- **Pre-MCP Era**: Tool developers had to write different interfaces for different models (GPT, Claude, Gemini).
- **MCP Era**: **Write Once, Run Everywhere**. Developers only need to build one MCP Server to be integrated into all mainstream model clients.

## How It Works

1.  **MCP Client (Host)**: For example, Claude Desktop or an IDE, which manages sessions and integrates user intent.
2.  **MCP Server**: A lightweight background executable responsible for exposing **Resources**, **Tools**, and **Prompts**.
3.  **Communication Channel**: Usually based on standard input/output (stdio) or HTTP/SSE (Server-Sent Events).
4.  **Resource Discovery**: When the client starts, it automatically asks the server: "What superpowers can you provide?" The server lists options (e.g., `/search-files`, `/read-db`), and the AI calls them as needed.

## Applications in Software Development and Testing

-   **Local Engineering Environment Connectivity**: Through MCP, AI can directly read your local Git commit history or query real-time logs of services running locally.
-   **Custom Evaluation Toolsets**: QA engineers can write an MCP Server to wrap internal proprietary testing platform interfaces, allowing the AI to trigger automation pipelines directly.
-   **Instant Documentation Sync**: Connect Confluence or Notion to an AI assistant via MCP to reference the latest business context while writing code.

## Strengths and Limitations

### Strengths

-   **Ecosystem Unification**: Dramatically lowers the cost of integrating developer tools with AI models.
-   **Security**: The MCP Server runs locally or in a controlled environment; developers can precisely control which data and commands the AI is allowed to touch.
-   **Real-time**: AI gains access to the latest data rather than outdated knowledge from training.

### Limitations and Risks

-   **Early Stage**: The tool ecosystem (MCP Servers) is still in a rapid growth phase; some advanced features are not yet fully mature.
-   **Latencey Jitter**: Frequent cross-process or cross-network MCP calls can increase AI response times.
-   **Configuration Complexity**: Average users might find configuring multiple local MCP Servers technically challenging.

## Comparison with Similar Terms

| Dimension | MCP Protocol | API Calling | LSP (Language Server) |
| :--- | :--- | :--- | :--- |
| **Main Goal** | **Universal Model Interface** | Basic program comms | Code completion/diagnostics|
| **Observability** | Strong (displayed by Host) | Weak (hidden in code) | Strong |
| **Architecture** | C/S architecture, self-describing | Request/Response | C/S architecture |

## Best Practices

-   **Keep Tools Atomic**: An MCP Tool should do one thing (e.g., read a single file), allowing the AI to combine these tools itself.
-   **Provide Detailed Self-Description (Docstrings)**: Since the AI decides which tool to call based on descriptions, the server's function descriptions must be as precise as a well-written Prompt.
-   **Leverage the Ecosystem**: Prioritize `mcp-get` or official repositories to find existing servers (e.g., GitHub, PostgreSQL, Linear) instead of reinventing the wheel.

## Common Pitfalls

-   **Hardcoding Sensitive Info**: In writing MCP Servers, use environment variables for keys instead of writing them directly in code.
-   **Vague Error Handling**: If an MCP Server fails, it should return clear text error messages instead of just crashing; this allows the AI to attempt "self-correction" based on the error.

## FAQ

### Q1: Should beginners master this immediately?

A: Learn the core purpose first, then adopt it gradually in real workflows.

### Q2: How do teams know adoption is working?

A: Check for more stable delivery, less rework, and smoother collaboration.

## Related Resources

### Related Terms

- [ai-agent](https://inaodeng.com/en/AIWiki/ai-agent/)
- [skill](https://inaodeng.com/en/AIWiki/skill/)
- [function-calling](https://inaodeng.com/en/AIWiki/function-calling/)

### External References

- [MCP Official Introduction](https://modelcontextprotocol.io/)
- [Anthropic: Introducing MCP](https://www.anthropic.com/news/model-context-protocol)
