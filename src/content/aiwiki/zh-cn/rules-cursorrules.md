---
title: "规则 / .cursorrules"
titleEn: "Rules / .cursorrules"
slug: "rules-cursorrules"
lang: "zh-cn"
summary: "Cursor 项目规则通过提示词提供指引。新规则使用 .cursor/rules；.cursorrules 是旧格式。"
topic: "ai-vibe-coding"
aliases:
  - "Cursor rules"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "rule"
  - "skill"
  - "ai-agent"
  - "prompt-driven-development"
lastReviewedAt: "2026-10-12"
---

# 规则 / .cursorrules（Rules / .cursorrules）

> 一句话定义：Cursor 项目规则通过提示词提供指引。新规则使用 .cursor/rules；.cursorrules 是旧格式。

## 科普速读

- **它是什么：** Cursor 规则用编辑器支持的格式提供项目指引。
- **适合什么场景：** 让 Cursor 在项目中参考统一的编码和测试约定。
- **主要边界：** 规则只能引导模型响应；`.cursorrules` 已是旧格式。

## 概览

Cursor 项目规则为 Agent 提供可复用的代码库指引。当前项目规则存放在 .cursor/rules。Cursor 文档将 .cursorrules 标为旧格式，并建议迁移。

## 核心定义

Cursor 规则是提供给 Agent 的提示词级指引。项目规则存放在 .cursor/rules 目录下，可应用于整个项目、指定文件或手动触发的任务。产品还支持用户规则和团队规则。

旧的 .cursorrules 文件不是当前项目规则格式。规则只能引导模型行为，不能实施操作系统或应用权限控制。

## 背景与发展

团队会用项目规则保存编码约定和任务指引，避免每次请求都重复输入。Cursor 当前文档介绍了项目规则、用户规则、团队规则以及对 AGENTS.md 的支持。

Cursor 将 .cursorrules 标为旧格式，并提供迁移到 .cursor/rules 的指引。规则类型和行为可能变化，应查看当前产品文档。

## 工作机制（How It Works）

1. 开发者在受支持的规则文件中写入指引。
2. Cursor 根据规则类型、范围或启用设置应用规则。
3. 适用的文本会成为 Agent 的上下文。
4. 模型生成回复或执行操作时，可能遵循这些指引。

规则是否生效取决于当前产品和规则配置。应用仍需单独检查权限并验证结果。

## 在软件测试与开发中的应用

- **编码约定：** 说明命名、格式和架构偏好。
- **测试要求：** 提醒 Agent 修改代码时考虑测试。
- **范围化指引：** 对指定目录或文件类型应用不同说明。
- **可复用流程：** 将工作步骤链接到项目模板或检查清单。

对不能跳过的要求，应使用代码检查、测试和权限控制来落实。

## 优势与局限

### 优势

- 团队可以把项目指引和代码一起进行版本管理。
- 范围化规则可以让指引更贴近相关文件。
- 可复用规则可以减少重复输入。

### 局限与风险

- 规则通过上下文引导，不能保证模型遵守。
- 过长或冲突的规则会降低清晰度。
- 代码库变化后，规则也可能过时。
- 规则不能替代测试、代码检查或访问控制。

## 与相近术语对比

| 机制 | 作用 |
|---|---|
| Cursor 规则 | 为 Cursor Agent 提供提示词级指引 |
| AGENTS.md | 部分编码 Agent 支持的通用指令文件 |
| 权限策略 | 限制工具或应用可以执行的操作 |
| Linter 或测试 | 按可执行规则或预期行为检查代码 |

规则可以描述要求；需要由其他控制机制来强制执行。

## 实施建议（Best Practices）

- 新建 Cursor 项目规则时使用 .cursor/rules。
- 按照 Cursor 当前指引迁移旧的 .cursorrules 内容。
- 使用短句，每句话写一个要求。
- 只在相关文件或任务范围内启用规则。
- 用 Linter、测试或权限检查验证关键要求。

## 常见误区（Pitfalls）

不要把规则当成安全边界。模型可能漏掉或错误应用指引。应定期检查旧规则，并依据 Cursor 当前文档迁移。

## FAQ

### 新的 Cursor 项目还应该使用 .cursorrules 吗？

Cursor 将 .cursorrules 标为旧格式。新建项目规则应使用 .cursor/rules，并按当前迁移指引处理旧文件。

### 规则能阻止 Agent 运行被禁止的命令吗？

单靠提示词规则不能强制执行权限边界。应配置产品权限或外部策略，并验证最终行为。

## 相关资源

### 相关词条

- [rule](https://inaodeng.com/zh-cn/AIWiki/rule/)
- [skill](https://inaodeng.com/zh-cn/AIWiki/skill/)
- [ai-agent](https://inaodeng.com/zh-cn/AIWiki/ai-agent/)
- [prompt-driven-development](https://inaodeng.com/zh-cn/AIWiki/prompt-driven-development/)

### 参考资料
- [Cursor 文档：Rules](https://cursor.com/docs/rules)
