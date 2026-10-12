---
title: "验证产物"
titleEn: "Verification Artifacts"
slug: "verification-artifacts"
lang: "zh-cn"
summary: "用于验证 AI 任务结果的证据性产物，如截图、录屏与测试报告。"
topic: "ai-vibe-coding"
aliases:
  - "Verification Artifacts"
  - "验证产物"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "artifacts"
  - "agent-evals"
  - "graders"
  - "trace-grading"
lastReviewedAt: "2026-10-12"
---
# 验证产物（Verification Artifacts）

## 科普速读

- **它是什么：** 验证产物是用于核对任务或改动结论的记录。
- **适合什么场景：** 检查测试、命令输出、截图或复现步骤。
- **主要边界：** 只有证据与改动和环境相符时，才能支持相应结论。

## 概览

补丁可能声称修复了某个 Bug。测试报告和复现步骤能帮助评审者核对这一结论，但证据必须对应正在评审的代码版本。

## 核心定义

验证产物是支持某项检查的已保存记录，例如测试结果、命令输出、截图、录屏或复现步骤。它可以支持核验，但不能单独证明结论正确。

## 背景与发展

开发任务分布在不同工具和人员之间后，团队需要把检查与生成结果的代码版本和环境关联起来。工具可以自动收集证据，但格式和来源记录各不相同。

## 工作机制（How It Works）

1. 明确要核验的结论。
2. 运行能够提供相关证据的检查。
3. 保存结果，并记录代码版本和环境。
4. 对照证据与待核验结论。
5. 记录证据缺口和未运行的检查。

## 在软件测试与开发中的应用

验证 Bug 修复时，可以附上相关测试命令、运行结果、代码版本和复现步骤。验证界面改动时，可以记录截图对应的页面、视口尺寸和浏览器版本。

## 优势与局限

产物可以让评审者了解检查了什么、检查在哪个环境进行。报告可能不完整，也可能来自其他代码版本。截图只能展示某个状态，不能证明所有设备上的行为。

## 与相近术语对比

产物是任何已保存的任务输出。验证产物用于支持某项检查。构建产物是构建过程生成的软件包或文件。Trace 会记录相互关联的执行事件。

## 实施建议（Best Practices）

将每份记录关联到待核验结论、代码版本和环境。证据应相关且易读。删除密钥和个人数据，并说明证据未覆盖的范围。

## 常见误区（Pitfalls）

检查之前，不要把输出称为证明。不要混用不同代码版本的结果。保存大量日志时，应标出相关内容。

## FAQ

### 测试报告显示通过，就能证明改动正确吗？

不能。它只说明指定测试在特定环境中通过。其他要求或条件仍可能没有测试。

## 相关资源

### 相关词条

- [产物反馈循环](/zh-cn/AIWiki/artifact-feedback-loop/)
- [轨迹评分](/zh-cn/AIWiki/trace-grading/)
- [Agent 评测](/zh-cn/AIWiki/agent-evals/)

### 外部参考

- [GitHub Actions：工作流产物](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflow-artifacts)
- [Playwright：截图](https://playwright.dev/docs/screenshots)
