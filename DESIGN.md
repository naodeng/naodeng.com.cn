---
name: "Nao's Blog: Proofline"
description: "Proofline — A QA-inspired editorial system built around evidence, signals, and clarity."
colors:
  theme: "#176b75"
  theme-dark: "#12ccd8"
  theme-focus: "#0f5962"
  theme-focus-dark: "#7de6ec"
  canvas: "#faf9f6"
  surface: "#ffffff"
  surface-elevated: "#ffffff"
  ink: "#202a30"
  secondary: "#5c6b6d"
  tertiary: "#738184"
  border: "#dfe4e1"
  border-strong: "#b9cfcb"
  code-surface: "#f1f5f3"
  success-text: "#16803a"
  canvas-dark: "#13191c"
  surface-dark: "#1a2226"
  surface-elevated-dark: "#202b2f"
  ink-dark: "#e7eceb"
  secondary-dark: "#a8b6b5"
  tertiary-dark: "#819390"
  border-dark: "#344247"
  border-strong-dark: "#4d686c"
  code-surface-dark: "#202b2f"
  success-text-dark: "#76c893"
  wechat: "#07c160"
typography:
  body:
    fontFamily: '"Noto Sans", "Noto Sans SC", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  display:
    fontFamily: '"Noto Sans", "Noto Sans SC", ui-sans-serif, system-ui, sans-serif'
    fontSize: "2.5rem"
    fontWeight: 800
rounded:
  sm: "8px"
  md: "12px"
  lg: "18px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "32px"
  lg: "64px"
components:
  button-primary:
    backgroundColor: "{colors.theme}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
---

# Design System: Proofline

## Overview

Proofline — A QA-inspired editorial system built around evidence, signals, and clarity. 面向中英文软件开发者与测试者的技术知识库；视觉参考 AIHOT 的编辑型情报站语言，但主题名称、设计事实和产品表达统一归属于 Proofline。本文是现行规范；旧 Zenix / Diffuse Glass 文档只作历史追溯。

实现依据：`src/styles/base.css`、`src/styles/layout.css` 和组件样式。详细需求见 [Proofline 设计规格](docs/superpowers/specs/2026-09-29-aihot-editorial-signal-redesign-design.md)，实施步骤见 [Proofline 实施计划](docs/superpowers/plans/2026-09-29-aihot-editorial-signal-redesign.md)。规范目标与尚存兼容实现必须分别说明。

## Colors

浅色：画布 #faf9f6、表面 #ffffff、正文 #202a30、次级文字 #5c6b6d、三级文字 #738184、边框 #dfe4e1、强化边框 #b9cfcb、代码表面 #f1f5f3、强调 #176b75、强调焦点 #0f5962、成功状态文字 #16803a。
深色：画布 #13191c、表面 #1a2226、抬升表面 #202b2f、正文 #e7eceb、次级文字 #a8b6b5、三级文字 #819390、边框 #344247、强化边框 #4d686c、代码表面 #202b2f、强调 #12ccd8、强调焦点 #7de6ec、成功状态文字 #76c893。

强调色是稀缺的信号色，只用于 CTA、链接交互、当前项、状态和少量指标/标记；正文标题、普通导航文字、默认表面和普通边框使用中性色，不把青绿色扩展成页面主色。

主题支持系统偏好与手动切换，持久化键为 `themePreference`。语义变量至少包括 `--color-base`、`--color-canvas`、`--color-surface`、`--color-surface-elevated`、`--color-main`、`--color-text-secondary`、`--color-text-tertiary`、`--color-border`、`--color-border-strong`、`--color-theme`、`--color-theme-focus`、`--color-theme-soft`、`--color-theme-soft-hover`、`--color-code-surface` 和 `--color-success-text`。成功状态只使用成功语义色，并须在明暗主题分别满足 WCAG AA 文本对比度；主题切换不改变布局。

微信品牌绿 #07c160、错误与警告语义色是青绿色主题之外的特定用途例外，不能推广为普通卡片装饰。旧 `color-glass-*`、`color-mist-secondary`、`gradient-theme`、`shadow-glass-*` 和 `shadow-product` 变量可以作为迁移期兼容别名保留；它们不得作为新页面默认表面、渐变、阴影或布局依据。实现和测试必须区分“别名仍存在”与“默认组件仍在消费”。

## Typography

标题和正文均使用 Noto Sans / Noto Sans SC 回退栈；Proofline 迁移目标不再使用 Sora 作为标题字体，Task 7 会清理产品页当前遗留的局部声明。
代码使用 `ui-monospace, monospace`，只用于代码、命令和复制控件，不参与正文标题或导航。
实际基础字号为 `--text-base: 1.0625rem`，基础行高 1.65；方案中的 16px 是原始目标，不能描述为当前实现。display token 为 2.5rem，具体 hero 可使用响应式字号。
正文阅读列上限 768px，代码和表格在自身区域滚动，不扩大页面。

## Layout

统一 `--layout-max:1280px`、`--reading-max:768px`、`--sidebar-layout-max:1280px`。
容器宽度为 `min(var(--layout-max), calc(100% - 2 * var(--layout-gutter)))`。
gutter 默认 24px，768px 起为 32px。首页 main 全宽，内部区块应用一次容器约束，避免重复缩窄。

桌面 Header 最小高度 80px，834px 以下为 60px 折叠导航；480px 以下顶栏公众号入口隐藏，页脚二维码仍可访问。Footer 在 760px 以下堆叠，导航为两列。
检查中文与英文在 375/390、768、1024、1440、1920px 的布局；不得以全页面裁切掩盖内容溢出。

## Elevation & Depth

默认不透明表面、1px 中性边框、轻阴影。仅 sticky Header 和移动导航覆盖层允许轻微背景模糊。Footer 弹窗和语言标签使用实色。
`--shadow-sm` 可用于需要层次的表面；`--shadow-md`、`--shadow-lg` 和旧 glass/product shadow 只保留兼容性或经过明确说明的特殊场景，不应作为新页面默认材质。默认页面不得使用紫色 glow、玻璃雾面或 `backdrop-filter`。

## Shapes

现有 token 为 8/12/18px 与 9999px。新普通按钮优先 8px，卡片优先 12px；药丸用于标签、状态和紧凑过滤控件。旧组件尚有局部药丸/大圆角，不表示所有组件都已完成形状迁移。

## Components

- Header：保留导航、语言、搜索、主题切换及原有 URL，近不透明表面与细底边。
- Footer：中文左侧二维码与 RSS，右侧导航；社交与法律信息各占独立整行。英文无中文公众号块。
- 主按钮：实色强调底；次按钮：中性或轻强调表面。键盘焦点清晰，不依赖颜色传达状态。
- 卡片：正文和内容入口清晰；hover 上浮最多 2px，颜色/边框承担主要反馈。尊重 reduced-motion。
- QA Skills：正文列上限 768px，侧栏保留；窄屏使用现有堆叠行为。
- 链接：视觉修订不能改动既有 href、博客路径、内容、SEO 或部署配置。

## Do's and Don'ts

- Do 使用语义 token，并同时验证浅深主题和双语页面。
- Do 同步 DESIGN.md、.impeccable/design.json、设计规格和实施计划。
- Don't 恢复默认紫色渐变、色雾和大面积玻璃卡片。
- Don't 用测试通过替代方案验收；历史记录保留事实，不补造测试证据。
