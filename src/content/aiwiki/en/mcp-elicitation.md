---
title: "MCP Elicitation"
titleZh: "MCP Elicitation"
slug: "mcp-elicitation"
lang: "en"
summary: "MCP Elicitation lets a server request missing information through a client; sensitive credentials should use an external URL flow."
topic: "ai-agents"
aliases:
  - "Elicitation"
  - "MCP user-input request"
tags:
  - "MCP"
  - "Human-computer interaction"
related:
  - "human-in-the-loop"
  - "mcp-tasks"
  - "model-context-protocol-mcp"
lastReviewedAt: "2026-10-12"
---

# MCP Elicitation

## Quick Take

- **In brief:** Elicitation lets an MCP server request more information through the client.
- **Useful for:** Collecting a missing parameter during a tool workflow.
- **Main limit:** It is an input exchange, not a full approval process.

## Overview

A tool may need a target branch name before it can run. The server can ask the client to show a form so the user can provide the value or cancel.

## Core Definition

MCP Elicitation is a protocol mechanism that lets a server request additional user input through the client.

## Background and Evolution

Interactive workflows need a clear boundary between a server request and a user's response. The 2026-07-28 specification describes form and URL modes; support depends on the MCP client and server version.

## How It Works

In form mode, the client collects structured input. In URL mode, the client directs the user to an external site, which is intended for sensitive information or third-party authorization.

## Applications in Software Development and Testing

A deployment tool can request a target environment or change ticket number before continuing. Test missing, invalid, cancelled, and timed-out input paths.

## Strengths and Limitations

Elicitation makes a missing value visible to the user and keeps the exchange within the protocol. It does not by itself verify authority or approve a high-impact operation.

## Comparison with Similar Terms

Elicitation requests information. Human approval is a workflow decision that may require risk details, authorization records, and execution-time checks.

## Best Practices

Show which server made the request, let the user review or cancel it, validate returned values, and use the external URL flow for sensitive credentials.

## Common Pitfalls

Do not ask users to enter passwords, API keys, or payment credentials into an ordinary form sent through an MCP client.

## FAQ

### Does an elicitation response approve the requested action?

No. It supplies input; the application still needs its own authorization and approval checks.

## Related Resources

### Related terms

- [Human-in-the-loop](/en/AIWiki/human-in-the-loop/)
- [MCP Tasks](/en/AIWiki/mcp-tasks/)
- [MCP](/en/AIWiki/model-context-protocol-mcp/)

### References

- [MCP Elicitation specification 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation)
