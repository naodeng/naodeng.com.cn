---
title: "MCP Apps 扩展"
titleEn: "MCP Apps"
titleZh: "MCP Apps 扩展"
slug: "mcp-apps"
lang: "zh-cn"
summary: "MCP Apps 扩展让 MCP 工具关联交互式界面资源，由宿主在沙箱中呈现并与工具结果交互。"
topic: "ai-agents"
aliases:
  - "MCP Apps"
  - "MCP 交互式界面"
tags:
  - "MCP"
  - "协议扩展"
related:
  - "model-context-protocol-mcp"
  - "mcp-tasks"
  - "mcp-elicitation"
lastReviewedAt: "2026-10-12"
---

# MCP Apps 扩展

## 科普速读

- **它是什么：** MCP Apps 把 MCP 工具与可交互界面关联起来。
- **适合什么场景：** 需要用户操作的表单、图表、地图或设计视图。
- **主要边界：** 不同客户端的支持和沙箱行为可能不同。

## 概览

有些工具结果用图表或表单查看，比阅读纯文本更方便。MCP Apps 让宿主在工具结果旁呈现相关界面。

## 核心定义

MCP Apps 是一种 MCP 扩展，让服务器把交互式界面资源关联到工具，再由客户端宿主呈现。

## 背景与发展

MCP Apps 在 MCP 的工具和资源模型上增加了交互式内容的呈现方式。2026-01-26 规范标注为 Stable，但各宿主仍需自行实现。

## 工作机制（How It Works）

服务器声明与工具关联的界面资源。宿主获取资源并在沙箱框架中呈现，再转发界面与工具之间获准的消息。

## 在软件测试与开发中的应用

测试工具可以把失败检查显示成可筛选的表格，并链接到日志。应在各支持的宿主中测试渲染、工具消息、沙箱规则和错误状态。

## 优势与局限

交互界面能让结构化工具结果更容易查看。宿主决定支持和开放哪些能力；界面内容和工具结果仍需校验。

## 与相近术语对比

普通 MCP 工具返回数据或执行操作；MCP Apps 为相关结果增加交互界面；MCP Elicitation 则向用户请求输入。

## 实施建议（Best Practices）

只向界面传递所需数据，让宿主负责权限边界，并测试消息来源、内容安全规则和错误处理。

## 常见误区（Pitfalls）

不要假设所有 MCP 客户端都能呈现 Apps，也不要认为沙箱会自动消除不可信界面的风险。

## FAQ

### MCP Apps 的界面直接运行在模型内部吗？

不是。界面由客户端宿主呈现，宿主控制它如何与工具交互。

## 相关资源

### 相关词条

- [MCP](/zh-cn/AIWiki/model-context-protocol-mcp/)
- [MCP Tasks 扩展](/zh-cn/AIWiki/mcp-tasks/)
- [MCP Elicitation](/zh-cn/AIWiki/mcp-elicitation/)

### 参考资料

- [MCP Apps 规范 2026-01-26](https://apps.extensions.modelcontextprotocol.io/specification/2026-01-26/apps.mdx)
