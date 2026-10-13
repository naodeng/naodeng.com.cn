---
title: "MCP Tasks 扩展"
titleEn: "MCP Tasks"
titleZh: "MCP Tasks 扩展"
slug: "mcp-tasks"
lang: "zh-cn"
summary: "MCP Tasks 为较长工具调用提供可查询的任务句柄，让客户端能获取状态、处理输入并取回结果。"
topic: "ai-agents"
aliases:
  - "MCP Tasks"
  - "MCP 异步任务"
tags:
  - "MCP"
  - "异步执行"
related:
  - "model-context-protocol-mcp"
  - "asynchronous-agent-execution"
  - "mcp-elicitation"
  - "mcp-apps"
lastReviewedAt: "2026-10-12"
---

# MCP Tasks 扩展

## 科普速读

- **它是什么：** MCP Tasks 可为长时间请求生成句柄，供后续查询状态和结果。
- **适合什么场景：** 生成报告或等待外部 CI 作业完成。
- **主要边界：** Tasks 扩展仍是草案，支持情况可能不同。

## 概览

测试报告可能要几分钟才能生成。任务句柄让客户端稍后查询进度，不必一直保持原请求连接。

## 核心定义

MCP Tasks 是面向长时间请求的扩展，可返回任务句柄供后续查询状态和结果。

## 背景与发展

2026-07-28 版 MCP Tasks 规范标注为草案。规范状态和支持的方法可能变化，采用前应查看当前规范和客户端支持。

## 工作机制（How It Works）

服务器可以返回普通响应，也可以返回任务句柄。客户端可查询状态、获取结果或请求取消；取消请求不保证底层工作立即停止。

## 在软件测试与开发中的应用

Agent 可以启动报告生成任务，按建议间隔查询状态，并在完成后获取结果。若连接中断，任务 ID 可继续用于查询。

## 优势与局限

任务句柄把请求提交和结果获取分成两个阶段。它不负责调度任意后台工作，也不能证明结果正确。

## 与相近术语对比

MCP Tasks 描述协议层的任务生命周期；后台 Agent 和异步执行描述更广泛的系统模式，也可能使用其他机制。

## 实施建议（Best Practices）

每次读取状态或结果都检查权限，使用难以猜测的句柄，遵循轮询建议，并明确取消和清理行为。

## 常见误区（Pitfalls）

收到取消请求，不等于工作已经停止。也不能只凭任务 ID 就公开任务结果。

## FAQ

### 每个 MCP 工具都能返回任务句柄吗？

不能。是否创建任务由服务器决定，客户端仍须处理普通响应。

## 相关资源

### 相关词条

- [MCP](/zh-cn/AIWiki/model-context-protocol-mcp/)
- [异步 Agent 执行](/zh-cn/AIWiki/asynchronous-agent-execution/)
- [MCP Elicitation](/zh-cn/AIWiki/mcp-elicitation/)

### 参考资料

- [MCP Tasks 当前草案（2026-07-28）](https://tasks.extensions.modelcontextprotocol.io/specification/draft/tasks)
