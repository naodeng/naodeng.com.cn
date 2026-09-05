---
name: "Nao's Blog: Astro Editorial"
description: "双语技术知识库，内容优先、浅深双主题、克制表面"
colors:
  theme: "#2563eb"
  theme-dark: "#78a9ff"
  canvas: "#f8fafc"
  surface: "#ffffff"
  ink: "#172033"
  secondary: "#526071"
  border: "#dce2ea"
  canvas-dark: "#111827"
  surface-dark: "#18212f"
  ink-dark: "#e6eaf0"
  secondary-dark: "#aab4c3"
  border-dark: "#2c394b"
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

# Design System: Astro Editorial

## Overview

面向中英文软件开发者与测试者的技术知识库。沿用已批准的 Astro 编辑化方向：内容优先、低饱和中性表面、清楚的层级与克制的蓝色强调。本文是现行规范；旧 Zenix / Diffuse Glass 文档只作历史追溯。

实现依据：`src/styles/base.css`、`src/styles/layout.css` 和组件样式。详细需求见 [主题方案](docs/superpowers/specs/2026-09-04-astro-editorial-theme-design.md)，验收状态见 [实施计划](docs/superpowers/plans/2026-09-04-astro-editorial-theme.md)。规范目标与尚存兼容实现必须分别说明。

## Colors

浅色：画布 #f8fafc、表面 #ffffff、正文 #172033、次级文字 #526071、边框 #dce2ea、强调 #2563eb。
深色：画布 #111827、表面 #18212f、正文 #e6eaf0、次级文字 #aab4c3、边框 #2c394b、强调 #78a9ff。

主题支持系统偏好与手动切换，持久化键为 `themePreference`。微信品牌绿 #07c160、错误与警告语义色是品牌蓝之外的特定用途例外，不能推广为普通卡片装饰。旧 `color-glass-*` 变量为兼容别名，不代表允许恢复玻璃主题。

## Typography

标题和正文均使用 Noto Sans / Noto Sans SC 回退栈，当前 CSS 不再使用 Sora 作为标题字体。
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
兼容阴影 token 保留，但不应将旧 glass/product shadow 作为新页面默认材质。

## Shapes

现有 token 为 8/12/18px 与 9999px。新普通按钮优先 8px，卡片优先 12px；药丸用于标签和过滤控件。旧组件尚有局部药丸/大圆角，不表示所有组件都已完成形状迁移。

## Components

- Header：保留导航、语言、搜索、主题切换及原有 URL，近不透明表面与细底边。
- Footer：中文左侧二维码与 RSS，右侧导航；社交与法律信息各占独立整行。英文无中文公众号块。
- 主按钮：实色强调底；次按钮：中性或轻强调表面。键盘焦点清晰，不依赖颜色传达状态。
- 卡片：正文和内容入口清晰；hover 上浮最多 2px，颜色/边框承担主要反馈。尊重 reduced-motion。
- QA Skills：正文列上限 768px，侧栏保留；窄屏使用现有堆叠行为。
- 链接：视觉修订不能改动既有 href、博客路径、内容、SEO 或部署配置。

## Do's and Don'ts

- Do 使用语义 token，并同时验证浅深主题和双语页面。
- Do 同步 DESIGN.md、.impeccable/design.json 和实施记录。
- Don't 恢复默认紫色渐变、色雾和大面积玻璃卡片。
- Don't 用测试通过替代方案验收；历史记录保留事实，不补造测试证据。
