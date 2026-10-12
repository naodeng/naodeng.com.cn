---
title: "Function Calling"
titleZh: "函数调用"
slug: "function-calling"
lang: "en"
summary: "Allow a model to select and call tools/functions with typed arguments in a controlled workflow."
topic: "ai-vibe-coding"
aliases:
  - "Function Calling"
  - "函数调用"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "structured-outputs"
  - "hooks"
  - "permission-policies-allowed-command-list"
  - "custom-commands"
lastReviewedAt: "2026-10-12"
---
# Function Calling

## Quick Take

- **In brief:** Function calling lets a model request a tool by returning structured arguments.
- **Useful for:** Connecting an AI response to an application API or test tool.
- **Main limit:** The application must validate the request and control execution.

## Overview

A model may request a test runner to execute a named test. The application checks the arguments and permissions, runs the test, and returns the result. The model does not run the function by itself.

## Core Definition

Function calling lets a model select a declared function and return arguments in a defined format. The host application decides whether to execute the request and what result to return.

## Background and Evolution

Chat systems first returned text for a person to act on. Function-calling interfaces let applications connect model output to defined operations. Names and formats differ among APIs.

## How It Works

1. The application provides function names and parameter schemas.
2. The model returns a normal response or a structured function request.
3. The application validates the request and checks access rules.
4. If approved, the application executes the function and returns its result.
5. The model may use that result in a later response.

## Applications in Software Development and Testing

An assistant can request a read-only query for failed test names. The application can validate the project and filters before calling the test service. A separate review step can approve actions that change files or systems.

## Strengths and Limitations

Structured requests can make tool integration easier to parse and monitor. The model may still request an unsuitable function or invalid values. A valid schema does not prove authorization or make an operation safe.

## Comparison with Similar Terms

Function calling requests an action. Structured outputs constrain response shape but do not necessarily invoke a tool. MCP defines a protocol for connecting clients and tools. The application remains responsible for permissions and execution.

## Best Practices

Expose only functions needed for the task. Validate every argument in application code. Apply least privilege, log the operation, and request human approval for high-impact actions.

## Common Pitfalls

Do not execute every model request automatically. Do not use a schema as access control. Handle invalid arguments, timeouts, and tool errors.

## FAQ

### Does function calling mean the model directly runs code?

No. The model returns a request. The host application validates it and decides whether to execute it.

## Related Resources

### Related Terms

- [structured-outputs](https://inaodeng.com/en/AIWiki/structured-outputs/)
- [hooks](https://inaodeng.com/en/AIWiki/hooks/)
- [permission-policies-allowed-command-list](https://inaodeng.com/en/AIWiki/permission-policies-allowed-command-list/)
- [custom-commands](https://inaodeng.com/en/AIWiki/custom-commands/)

### External References

- [OpenAI API Docs](https://developers.openai.com/api/docs)
- [OpenAI Platform Docs](https://platform.openai.com/docs/overview)
