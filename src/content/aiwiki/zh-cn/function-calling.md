---
title: "函数调用"
titleEn: "Function Calling"
slug: "function-calling"
lang: "zh-cn"
summary: "允许模型在受控流程中选择并调用带类型参数的工具函数。"
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
# 函数调用（Function Calling）

## 科普速读

- **它是什么：** 函数调用让模型通过结构化参数请求工具。
- **适合什么场景：** 将 AI 响应连接到应用接口或测试工具。
- **主要边界：** 应用必须校验请求，并控制是否执行。

## 概览

模型可以请求测试运行器执行指定测试。应用检查参数和权限，再运行测试并返回结果。模型不会自行执行函数。

## 核心定义

函数调用允许模型选择已声明的函数，并按规定格式返回参数。宿主应用决定是否执行请求，以及向模型返回什么结果。

## 背景与发展

早期聊天系统只返回文字，由用户自行操作。函数调用接口让应用能把模型输出连接到已定义的操作。不同 API 的名称和格式各不相同。

## 工作机制（How It Works）

1. 应用提供可用函数名称和参数格式。
2. 模型返回普通回答或结构化的函数请求。
3. 应用校验请求，并检查访问规则。
4. 请求获准后，应用执行函数并返回结果。
5. 模型可以在后续回答中使用该结果。

## 在软件测试与开发中的应用

助手可以请求只读查询失败测试名称。应用先校验项目和筛选条件，再调用测试服务。对于会修改文件或系统的操作，可以另设人工审核步骤。

## 优势与局限

结构化请求便于解析和监控工具调用。模型仍可能请求不合适的函数或提供无效参数。格式符合 schema 不代表操作已获授权或一定安全。

## 与相近术语对比

函数调用用于请求操作。结构化输出用于限制回答格式，但不一定调用工具。MCP 定义客户端与工具之间的连接协议。权限和执行仍由应用负责。

## 实施建议（Best Practices）

只开放任务所需的函数。在应用代码中校验所有参数。遵循最小权限原则，记录操作，并对高影响操作设置人工批准。

## 常见误区（Pitfalls）

不要自动执行每个模型请求。不要把 schema 当成访问控制。要处理无效参数、超时和工具错误。

## FAQ

### 函数调用意味着模型直接运行代码吗？

不意味着。模型只返回请求；宿主应用会校验请求，并决定是否执行。

## 相关资源

### 相关词条

- [structured-outputs](https://inaodeng.com/zh-cn/AIWiki/structured-outputs/)
- [hooks](https://inaodeng.com/zh-cn/AIWiki/hooks/)
- [permission-policies-allowed-command-list](https://inaodeng.com/zh-cn/AIWiki/permission-policies-allowed-command-list/)
- [custom-commands](https://inaodeng.com/zh-cn/AIWiki/custom-commands/)

### 外部参考

- [OpenAI API Docs](https://developers.openai.com/api/docs)
- [OpenAI Platform Docs](https://platform.openai.com/docs/overview)
