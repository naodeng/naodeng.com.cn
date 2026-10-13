---
title: "MCP Apps"
titleZh: "MCP Apps 扩展"
slug: "mcp-apps"
lang: "en"
summary: "MCP Apps lets tools link interactive UI resources that a host renders in a sandbox and connects to tool results."
topic: "ai-agents"
aliases:
  - "MCP Apps extension"
  - "MCP interactive UI"
tags:
  - "MCP"
  - "Protocol extensions"
related:
  - "model-context-protocol-mcp"
  - "mcp-tasks"
  - "mcp-elicitation"
lastReviewedAt: "2026-10-12"
---

# MCP Apps

## Quick Take

- **In brief:** MCP Apps links an MCP tool to an interactive interface.
- **Useful for:** Forms, charts, maps, or design views that need user interaction.
- **Main limit:** Client support and sandbox behavior can vary.

## Overview

A tool may return data that is easier to use in a chart or form than in plain text. MCP Apps lets a host render a related interface alongside the tool result.

## Core Definition

MCP Apps is an MCP extension that links interactive UI resources to server tools for a client host to render.

## Background and Evolution

MCP Apps extends the tool-and-resource model of MCP with a way to present interactive content. The 2026-01-26 specification is marked Stable; individual hosts still need to implement it.

## How It Works

The server declares a UI resource associated with a tool. The host fetches and renders it in a sandboxed frame, then brokers permitted communication between the view and the tool.

## Applications in Software Development and Testing

A test tool could show a table of failing checks with filters and links to logs. Test rendering, tool messages, sandbox rules, and error states in each supported host.

## Strengths and Limitations

An interactive view can make structured tool results easier to explore. The host decides what it supports and grants; UI content and tool results still need validation.

## Comparison with Similar Terms

A regular MCP tool returns data or performs an action. MCP Apps adds an interface for interacting with related results. MCP Elicitation asks the user for input.

## Best Practices

Pass only the data the view needs, keep permission boundaries in the host, and test message origins, content security rules, and error handling.

## Common Pitfalls

Do not assume every MCP client can render Apps or that the sandbox makes untrusted interface content harmless.

## FAQ

### Does MCP Apps run its interface directly inside the model?

No. The client host renders the interface and controls its interaction with tools.

## Related Resources

### Related terms

- [MCP](/en/AIWiki/model-context-protocol-mcp/)
- [MCP Tasks](/en/AIWiki/mcp-tasks/)
- [MCP Elicitation](/en/AIWiki/mcp-elicitation/)

### References

- [MCP Apps specification 2026-01-26](https://apps.extensions.modelcontextprotocol.io/specification/2026-01-26/apps.mdx)
