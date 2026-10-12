---
title: "MCP Tasks"
titleZh: "MCP Tasks 扩展"
slug: "mcp-tasks"
lang: "en"
summary: "MCP Tasks gives long-running tool calls queryable task handles so clients can inspect status, handle input, and retrieve results."
topic: "ai-agents"
aliases:
  - "MCP asynchronous tasks"
tags:
  - "MCP"
  - "Asynchronous execution"
related:
  - "model-context-protocol-mcp"
  - "asynchronous-agent-execution"
  - "mcp-elicitation"
  - "mcp-apps"
lastReviewedAt: "2026-10-12"
---

# MCP Tasks

## Quick Take

- **In brief:** MCP Tasks can give a long-running request a handle for later status and result queries.
- **Useful for:** Work such as report generation or an external CI job.
- **Main limit:** The Tasks extension is a draft and support can vary.

## Overview

A test report may take several minutes to generate. A task handle lets the client check progress without keeping the original request open.

## Core Definition

MCP Tasks is an extension for long-running requests that can return a task handle for later status and result queries.

## Background and Evolution

The 2026-07-28 MCP Tasks specification is marked as a draft. Its status and supported methods can change, so teams should check the specification and client support before adoption.

## How It Works

The server can return either a normal response or a task handle. The client can query status, retrieve the result, or request cancellation. A cancellation request may not stop underlying work immediately.

## Applications in Software Development and Testing

An agent can start report generation, poll the task at the suggested interval, and fetch the result when it completes. The task ID can support later queries if the connection drops.

## Strengths and Limitations

A task handle separates request submission from result retrieval. It does not schedule arbitrary background work or establish that the result is correct.

## Comparison with Similar Terms

MCP Tasks describes a protocol-level task lifecycle. Background agents and asynchronous execution describe broader system patterns that may use other mechanisms.

## Best Practices

Check permissions for every status or result request, use hard-to-guess handles, respect polling guidance, and define cleanup and cancellation behavior.

## Common Pitfalls

Do not treat a cancellation request as proof that work stopped. Do not expose a task result based only on possession of an ID.

## FAQ

### Can every MCP tool return a task handle?

No. The server determines whether to create a task, and the client must handle ordinary responses as well.

## Related Resources

### Related terms

- [MCP](/en/AIWiki/model-context-protocol-mcp/)
- [Asynchronous agent execution](/en/AIWiki/asynchronous-agent-execution/)
- [MCP Elicitation](/en/AIWiki/mcp-elicitation/)

### References

- [Current MCP Tasks draft (2026-07-28)](https://tasks.extensions.modelcontextprotocol.io/specification/draft/tasks)
