---
name: "Nao's Blog — Zenix"
description: "双语技术知识库的克制弥散玻璃设计体系"
colors:
  indigo: "#4f46e5"
  indigo-deep: "#4338ca"
  indigo-light: "#818cf8"
  indigo-on-dark: "#a5b4fc"
  indigo-soft: "color-mix(in srgb, #4f46e5 10%, white)"
  canvas: "#f8fafc"
  surface: "#ffffff"
  surface-elevated: "rgba(255, 255, 255, 0.86)"
  ink: "#0f172a"
  slate: "#334155"
  slate-soft: "#64748b"
  surface-muted: "#f1f5f9"
  border: "#e2e8f0"
  border-strong: "rgba(79, 70, 229, 0.16)"
  caution: "#be123c"
  warn: "#f59e0b"
typography:
  scale:
    display: "2.5rem"
    headline: "1.3rem"
    title: "1.25rem"
    body: "1.0625rem"
    label: "0.875rem"
    labelSmall: "0.75rem"
  display:
    fontFamily: '"Sora", "Noto Sans", "Noto Sans SC", ui-sans-serif, system-ui, sans-serif'
    fontSize: "2.5rem"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: "0"
  body:
    fontFamily: '"Noto Sans", "Noto Sans SC", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.47
  label:
    fontFamily: '"Sora", "Noto Sans", "Noto Sans SC", ui-sans-serif, system-ui, sans-serif'
    fontSize: "0.875rem"
    fontWeight: 700
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
  section: "80px"
components:
  button-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.indigo}"
    rounded: "{rounded.pill}"
    height: "2.875rem"
    padding: "0 1rem"
  chip:
    backgroundColor: "{colors.indigo-soft}"
    textColor: "{colors.indigo}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.75rem"
  input:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    height: "2.875rem"
  card:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "1rem"
---

# Design System: Nao's Blog — Zenix

## Overview

**Creative North Star: "The Frosted Lab"**

Diffuse Glass 是一套为**双语技术知识库**打造的克制弥散玻璃设计体系：冷静、清晰、高效、具有轻盈的空间层级。柔和色雾建立画布氛围，半透明表面区分信息层级，内容页始终保持阅读优先。

视觉权威在弥散画布、壳层（顶栏 / 页脚）与首页重点表面；内容页（博客 / Wiki / Guild / Docs 阅读页）使用更弱的玻璃层级，避免过度卡片化。indigo（#4f46e5）是全站唯一主色，承担链接、主 CTA、焦点环与强调；Light / Dark / System 只改变画布、文字、边框和玻璃对比度。

**Key Characteristics:**

- indigo 单一主色 + slate 冷灰中性色，无第二个 accent
- 磨砂玻璃（backdrop-filter blur 22px）作为壳层标志材质
- Strong / Medium / Weak 三级玻璃建立清晰的空间层级
- Light / Dark / System 三种主题选择
- 四档圆角（8 / 12 / 18 / 药丸），交互元素一律药丸形
- 内容优先、低噪、克制；hairline 边框 + 克制阴影，不重阴影
- 已确认的视觉反例：苹果风（已废弃）、16px 点阵背景、emoji 当图标、重阴影、内容页卡片化

## Colors

冷色系由「单一 indigo 主色」和「slate 冷灰中性色」两族构成。indigo 只做强调，冷灰负责结构。

### Primary

- **Zenix Indigo** (#4f46e5): 全站唯一 accent。用于链接、主 CTA、焦点环、强调色与品牌渐变起点。
- **Deep Indigo** (#4338ca): 聚焦态与品牌渐变的深端，比主色更沉、更有分量。
- **Light Indigo** (#818cf8): 品牌渐变浅端与装饰性强调。
- **Indigo On Dark** (#a5b4fc): 深色表面（旧顶栏）上的链接色；浅色壳层中较少直接使用。

### Neutral

- **Cool Canvas** (#f8fafc): 全站画布底色，冷灰中带一丝蓝。
- **Surface** (#ffffff): 卡片、输入框、面板的白色底。
- **Ink** (#0f172a): 正文主文字，近黑的 off-black（slate 900 系），也是旧顶栏背景。
- **Slate** (#334155): 次级文字与说明。
- **Slate Soft** (#64748b): 三级文字、元信息、占位符。
- **Surface Muted** (#f1f5f9): 冷灰弱表面，用于分区、弱背景带。
- **Border** (#e2e8f0): 常规 hairline 边框。
- **Border Strong** (rgba(79, 70, 229, 0.16)): indigo 色 hairline，用于强调边框与药丸控件描边。

### Semantic

- **Caution** (#be123c): 错误场景专用。
- **Warn** (#f59e0b): 警告场景专用。

### Named Rules

**The One Accent Rule.** indigo 是唯一主色。禁止新增第二个 accent 色；主题切换只改变画布、文字、边框、玻璃透明度与对比度。

## Diffuse Glass Language

- Strong Glass 用于 Header、Footer 和需要稳定承载交互的浮层。
- Medium Glass 用于 Hero、首页卡片、侧栏与目录。
- Weak Glass 用于正文承载和大面积弱分区，保证阅读舒适。
- 色雾只存在于画布层，不压在文字上；模糊、透明度和阴影必须克制。

## Theme Modes

- Light：冷白画布、低饱和 indigo 色雾与半透明白玻璃。
- Dark：炭黑/深蓝画布、低亮度 indigo 色雾与半透明深色玻璃。
- System：首次访问跟随系统；手动选择写入 `localStorage.themePreference`。

## Typography

**Display Font:** Sora (with "Noto Sans", "Noto Sans SC", system-ui fallback)
**Body Font:** Noto Sans (with "Noto Sans SC", system-ui fallback)
**Label Font:** Sora（中文一律走系统栈）

**Character:** 几何无衬线 Sora 承担标题与强调数字，Noto Sans 承担正文——干净、现代、略偏工程/工具气质。中文字体走系统栈，不额外加载中文字体。

### Hierarchy

- **Display** (800, 2.5rem, 1.4): 首页 hero 与超大标题。
- **Headline** (600–800, ~1.3rem, 1.4): 区块标题、卡片标题；`h1–h4` 统一 Sora。
- **Title** (700, 1.25rem, 1.4): 小节标题、强调数字。
- **Body** (400, 1.0625rem, 1.47): 正文与阅读内容，最长行宽 65–75ch。
- **Label** (700, 0.875rem / 0.75rem, 1.3): 导航、页脚、元信息、徽章。

## Layout

单一居中内容列，宽度随场景收紧：正文 `max-width: 1000px`，带侧栏页面 `1280px`，首页内容区 `1400px`，顶栏壳 `1440px`，页脚容器 `1120px`。水平内边距 `32px`（顶栏用 `clamp(1rem, 3vw, 2rem)`）。

间距节奏：区块间距 `80px`（`--spacing-section`）；四级 `64 / 32 / 16 / 8px`，在 `<480px` 收窄为 `48 / 16 / 8px`。全站背景由低对比度弥散色雾建立氛围，不使用固定点阵、字符纹理或大面积装饰网格。

响应断点：`834px`（导航桌面/移动切换）、`600px`（页脚两列）、`480px`（间距收紧）。移动端导航折叠为抽屉，桌面端为药丸导航胶囊。

## Elevation & Depth

**扁平优先 + 层次靠 tonal 分层与 hairline 边框**，阴影只做环境光，不做装饰。静止表面基本无阴影；卡片用 1px hairline 边框 + 极淡阴影，hover 上浮 2–4px 并换 indigo 边框，绝不重阴影。

### Shadow Vocabulary

- **sm** (`0 1px 2px rgba(15, 23, 42, 0.06)`): 药丸控件、社交图标。
- **md** (`0 14px 35px rgba(15, 23, 42, 0.08)`): 常规卡片、玻璃卡。
- **lg** (`0 24px 70px rgba(15, 23, 42, 0.12)`): 大面板、下拉菜单。
- **product** (`0 18px 48px rgba(79, 70, 229, 0.16)`): indigo 色调的产品光晕，用于需要强调的悬浮元素。

### Named Rules

**The Flat-By-Default Rule.** 表面静止时是平的。阴影只响应状态（hover / 悬浮 / 焦点）与层级，且一律 slate 色相——禁用纯黑阴影。

## Shapes

**四档圆角 + 例外（硬规则）**：小 `8px`（控件、徽章、输入框）、中 `12px`（常规卡片、面板）、大 `18px`（大容器、玻璃卡、hero 面板）、药丸 `9999px`（交互药丸：按钮、chip、filter-pill、导航项）。例外：头像/圆形图标 `50%`、滚动条滑块 `2–3px`、个别跳转角标 `0`。

**The Four-Radius Rule.** 新增界面不得出现 8/12/18/药丸 之外的散值，一律写 `var(--radius-*)`。

## Components

### Buttons（药丸 CTA）

- **Shape:** 药丸（`9999px`），最小高 `44px`（`--control-height` 2.875rem），水平内边距 1rem。
- **Primary:** 白底 + indigo 文字 + indigo-16% hairline 描边 + `--shadow-sm`。
- **Hover / Focus:** 背景转 indigo-soft-hover，描边转 indigo；焦点环 `2px solid indigo` + `2px` 偏移。
- **Active:** `scale(0.95)` 按压反馈。

### Chips / Tags（药丸标签）

- **Style:** indigo-soft 底 + indigo 文字 + indigo-16% 描边，最小高 44px，内边距 `0.35rem 0.75rem`。
- **State:** hover/focus 背景转 indigo-soft-hover、描边转 indigo。

### Inputs / Fields（搜索框）

- **Style:** 白玻璃底（`rgba(255,255,255,0.86)`）+ indigo-16% 描边 + 中圆角（12px）+ 最小高 44px。
- **Focus:** 描边转 indigo + 外圈 `0 0 0 3px color-mix(indigo 18%, transparent)` 光环。
- **Placeholder:** slate-soft。

### Cards / Containers

- **Corner Style:** 大圆角（18px）。
- **Background:** 白玻璃底（`rgba(255,255,255,0.86)`）。
- **Shadow Strategy:** `--shadow-md` + 1px hairline 边框；hover 上浮 2–4px + indigo 边框。

### Navigation（顶栏）

- **Style:** 白色磨砂玻璃壳（`color-mix(canvas 78%)` + `backdrop-filter: blur(22px)` + hairline 底边 + 淡阴影），高 72px；导航项装进一个药丸胶囊（白玻璃底 + hairline 描边）。
- **Nav Item:** 药丸形，14px / 700，次级灰文字；hover/active 转 indigo 文字 + indigo-9% 底。
- **Submenu:** 白玻璃面板（`rgba(255,255,255,0.94)` + blur 24px + 18px 圆角 + `--shadow-lg`），条目 hover 转 indigo。
- **Mobile:** 折叠为抽屉，顶部三格「推荐入口」网格。

### Footer（页脚玻璃卡）

- **Style:** 冷灰渐变底（透明 → indigo 5.5% → canvas）上悬浮一张白色玻璃卡（`rgba(255,255,255,0.74)` + blur 22px + 18px 圆角 + `--shadow-md`）。
- **社交图标:** 52px 圆形（50%），白玻璃底 + hairline 描边，悬浮在玻璃卡顶边，hover 上浮 2px 转 indigo。

## Do's and Don'ts

### Do:

- **Do** 使用四档圆角 `var(--radius-sm/md/lg/xl)`，交互元素一律药丸。
- **Do** 用 indigo 单一主色承担强调；渐变只走 indigo 系。
- **Do** 用 hairline 边框（1px，slate 22% / indigo 16%）区分表面，阴影保持克制（slate 色相）。
- **Do** 图标统一 Material Icons Sharp（`<span class="material-icons-sharp">` 连字），禁止 emoji 当图标。
- **Do** 内容页（博客 / Wiki / Guild / Docs）保持克制排版，不卡片化，只继承 token。

### Don't:

- **Don't** 新增第二个 accent 色。
- **Don't** 使用纯黑阴影（阴影一律 slate 色相）。
- **Don't** 用固定点阵替代字符主视觉。
- **Don't** 在四档圆角之外散布新散值。
- **Don't** 让玻璃覆盖所有内容区域或牺牲正文对比度。
- **Don't** 在英文 UI 与英文文案中用 em-dash / en-dash 作分隔符（用冒号、逗号或句号；中文正文「——」保留）。
- **Don't** 在卡片上堆重阴影或夸张渐变。
