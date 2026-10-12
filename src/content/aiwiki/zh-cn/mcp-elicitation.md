---
title: "MCP Elicitation"
titleEn: "MCP Elicitation"
titleZh: "MCP Elicitation"
slug: "mcp-elicitation"
lang: "zh-cn"
summary: "MCP Elicitation 让服务器经客户端向用户请求补充信息；敏感凭据应走外部 URL 流程。"
topic: "ai-agents"
aliases:
  - "Elicitation"
  - "MCP 用户输入请求"
tags:
  - "MCP"
  - "人机交互"
related:
  - "human-in-the-loop"
  - "mcp-tasks"
  - "model-context-protocol-mcp"
lastReviewedAt: "2026-10-12"
---

# MCP Elicitation

## 科普速读

- **它是什么：** Elicitation 让 MCP 服务器经客户端向用户请求补充信息。
- **适合什么场景：** 工具流程缺少参数，需要用户补充时。
- **主要边界：** 它负责请求输入，不等于完整审批流程。

## 概览

工具运行前可能需要目标分支名。服务器可以请求客户端显示表单，让用户填写，或取消操作。

## 核心定义

MCP Elicitation 是一种协议机制，让服务器通过客户端请求用户补充信息。

## 背景与发展

交互式工作流需要明确区分服务器请求和用户响应。2026-07-28 规范描述了表单和 URL 两种模式；客户端和服务器版本会影响支持情况。

## 工作机制（How It Works）

表单模式由客户端收集结构化输入；URL 模式引导用户前往外部网站，适用于敏感信息或第三方授权。

## 在软件测试与开发中的应用

部署工具可以在继续前请求目标环境或变更单号。测试缺少输入、无效输入、用户取消和超时等路径。

## 优势与局限

Elicitation 会把缺失信息交给用户处理，并让交互符合协议。它本身不能验证授权，也不等于批准高影响操作。

## 与相近术语对比

Elicitation 请求信息；人工审批是工作流决策，可能还需说明风险、记录授权并在执行时再次检查。

## 实施建议（Best Practices）

显示请求来自哪个服务器，让用户可以检查或取消，校验返回值；敏感凭据应走外部 URL 流程。

## 常见误区（Pitfalls）

不要让用户在经 MCP 客户端传递的普通表单中填写密码、API 密钥或支付凭据。

## FAQ

### 用户回应 Elicitation，就代表批准了操作吗？

不代表。它只提供输入；应用仍需执行自己的授权和审批检查。

## 相关资源

### 相关词条

- [人在回路中](/zh-cn/AIWiki/human-in-the-loop/)
- [MCP Tasks](/zh-cn/AIWiki/mcp-tasks/)
- [MCP](/zh-cn/AIWiki/model-context-protocol-mcp/)

### 参考资料

- [MCP Elicitation 规范 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation)
