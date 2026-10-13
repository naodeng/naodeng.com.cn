---
title: "MCP (Model Context Protocol)"
titleZh: "模型上下文协议（MCP）"
slug: "model-context-protocol-mcp"
lang: "en"
summary: "An open protocol that defines how AI applications connect to external tools and information sources."
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
lastReviewedAt: "2026-10-12"
---

# Model Context Protocol (MCP)

> One-line definition: An open protocol that defines how AI applications connect to external tools and information sources. Access still depends on the host, server, and configured permissions.

## Quick Take

- **In brief:** MCP defines a common way for AI applications to connect to tools and data.
- **Useful for:** Connecting an AI client to external services through a shared interface.
- **Main limit:** The protocol does not make a server safe or a tool call authorized.

## Overview

MCP is an open protocol that connects an AI application to external tools and information sources. A client and server can exchange requests through a host application. What the application can access depends on its configuration and permissions.

## Core Definition

### Formal Definition

The Model Context Protocol (MCP) defines how a host application, its client connection, and an MCP server communicate. Servers can expose capabilities such as tools, resources, and prompts. The protocol does not itself grant access to a user’s files or systems.

## Background and Evolution

### Background

Before MCP, each application often needed a separate integration for each tool or data source. MCP provides a shared protocol for these connections.

### Development

Anthropic introduced MCP in 2024. The specification has since evolved. Optional extensions and newer features require support from the client and server; compatible support is not automatic.

## How It Works

1. The host application starts or connects to an MCP client.
2. The client connects to an MCP server and negotiates supported capabilities.
3. The server lists tools or provides resources that it has been configured to expose.
4. The host decides what to show the model and whether a tool call needs user approval.

A connection does not make every available action safe. The host and server still need access controls.

## Applications in Software Development and Testing

- **Test reports**: A server can provide a tool that reads a test run or retrieves a report.
- **Repository information**: A server can expose selected files, issue data, or build results.
- **Controlled actions**: A server can start a permitted workflow. Use approval and logging for changes that affect shared systems.

## Strengths and Limitations

### Strengths

- **Reusable integration**: A shared protocol can reduce custom connection code.
- **Discoverable capabilities**: Clients can learn which tools or resources a server offers.

### Limitations and Risks

- **Partial support**: Clients and servers may implement different features or protocol versions.
- **Permission risk**: A server may expose sensitive data or actions. Apply least privilege and inspect tool behavior.
- **No automatic freshness**: Data freshness depends on the connected source and server implementation.

## Comparison with Similar Terms

| Term | Main role |
| :--- | :--- |
| MCP | Connects an AI application to tools and context providers |
| Function calling | Lets a model request a tool through a particular model API |
| REST API | Lets software exchange requests with a web service |

MCP can carry tool interactions, but it does not replace the APIs that the server uses behind the connection.

## Best Practices

- Start with read-only access and add write access only when needed.
- Review server identity, available tools, and required permissions.
- Require confirmation for destructive or externally visible actions.
- Log tool calls and test failure handling.
- Check client and server support before relying on an optional feature.

## Common Pitfalls

- **Treating MCP as a security boundary**: The protocol does not enforce every host or server permission.
- **Assuming “write once, run everywhere”**: Implementations support different features and policies.
- **Assuming current data**: The connected service may cache or delay updates.

## FAQ

### What can a team do with MCP in software testing?

A team can connect a client to a server that exposes a test-report lookup tool. The server should limit which reports the tool can access.

### Does MCP make a tool call safe?

No. The host and server must control access, validate inputs, and provide approval where needed. Review the actual operation before enabling it.

## Related Resources

### Related Terms

- [function-calling](https://inaodeng.com/en/AIWiki/function-calling/)
- [agent-authorization](https://inaodeng.com/en/AIWiki/agent-authorization/)
- [mcp-apps](https://inaodeng.com/en/AIWiki/mcp-apps/)
- [mcp-tasks](https://inaodeng.com/en/AIWiki/mcp-tasks/)

### External References

- [Model Context Protocol: Specification](https://modelcontextprotocol.io/specification)
- [Model Context Protocol: What is MCP?](https://modelcontextprotocol.io/introduction)
