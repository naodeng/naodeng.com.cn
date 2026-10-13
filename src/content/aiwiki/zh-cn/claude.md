---
title: "Claude"
titleEn: "Claude"
slug: "claude"
lang: "zh-cn"
summary: "Anthropic 的生成式 AI 模型家族。具体能力和访问方式取决于型号与产品。"
topic: "ai-vibe-coding"
aliases:
  - "Anthropic Claude"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "claude-3-5-sonnet"
  - "ai-agent"
  - "model-context-protocol-mcp"
lastReviewedAt: "2026-10-12"
---

# Claude

> 一句话定义：Anthropic 的生成式 AI 模型家族。

## 科普速读

- **它是什么：** Claude 是 Anthropic 的生成式 AI 模型家族。
- **适合什么场景：** 使用支持相应能力的型号处理文本、代码、分析或工具任务。
- **主要边界：** 不同型号和产品的能力、访问方式与生命周期各不相同。

## 概览

测试团队可以让 Claude 模型归纳失败记录并提出可能原因。团队仍需对照执行轨迹和源码核实这些判断。

## 核心定义

Claude 是 Anthropic 的生成式 AI 模型家族。Claude 应用和 Claude API 提供了不同的使用方式。产品也可能加入模型本身不具备的功能。

## 背景与发展

Anthropic 已发布多代 Claude 模型和多种型号。名称、访问方式和支持的功能会随时间变化。API 选型应以当前模型列表和生命周期说明为准。

## 工作机制（How It Works）

应用把输入上下文发送给模型，模型生成回复。应用也可以允许模型请求工具，再把工具结果发回模型继续处理。除非周边系统另行检查，模型不会自行验证输出。

## 在软件测试与开发中的应用

- **解释代码：** 让模型概括函数或代码变更，再对照源码检查。
- **规划测试：** 提供需求并要求模型列出候选用例，再检查覆盖范围和遗漏边界。
- **工具辅助：** 使用支持相应功能的开发产品检查文件或运行命令。限制权限，并复核每项修改。

## 优势与局限

根据型号和接口，Claude 产品可以辅助长文本和代码任务。输出仍可能包含错误或漏掉相关场景。上下文限制、工具支持、可用性和费用都因版本而异。

## 与相近术语对比

| 术语 | 含义 |
|---|---|
| Claude 模型 | Anthropic 模型家族中的具体型号 |
| Claude 应用 | 可能整合模型、工具和产品功能的用户产品 |
| Claude API | 开发者调用受支持 Anthropic 模型的接口 |

## 实施建议（Best Practices）

- 记录使用的准确模型 ID 和接口。
- 用代表性任务和预期结果进行评测。
- 只提供必要的上下文和权限。
- 升级集成前，查看模型生命周期说明。

## 常见误区（Pitfalls）

不要把“Claude”当成一个固定型号。家族名称无法说明具体版本、上下文限制、工具支持或下线状态。

## FAQ

### Claude 和 Claude 应用是一回事吗？

不是。Claude 是模型家族名称；应用是提供模型及其他产品功能的服务。

### Claude 会自动知道代码库的最新状态吗？

不会。应用需要提供最新文件或连接合适的工具。

## 相关资源

### 相关词条

- [GPT](/zh-cn/AIWiki/gpt/)
- [大语言模型](/zh-cn/AIWiki/large-language-models-llms/)
- [AI 智能体](/zh-cn/AIWiki/ai-agent/)

### 参考资料

- [Anthropic：模型概览](https://platform.claude.com/docs/en/models/overview)
- [Anthropic：模型下线说明](https://docs.anthropic.com/en/docs/about-claude/model-deprecations)
