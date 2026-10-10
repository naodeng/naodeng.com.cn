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
  tertiary: "#627275"
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
  sm: "6px"
  md: "10px"
  lg: "14px"
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

浅色：画布 #faf9f6、表面 #ffffff、正文 #202a30、次级文字 #5c6b6d、三级文字 #627275、边框 #dfe4e1、强化边框 #b9cfcb、代码表面 #f1f5f3、强调 #176b75、强调焦点 #0f5962、成功状态文字 #16803a、错误状态文字 #b42318、警告状态文字 #9a6700。
深色：画布 #13191c、表面 #1a2226、抬升表面 #202b2f、正文 #e7eceb、次级文字 #a8b6b5、三级文字 #819390、边框 #344247、强化边框 #4d686c、代码表面 #202b2f、强调 #12ccd8、强调焦点 #7de6ec、成功状态文字 #76c893、错误状态文字 #ff9388、警告状态文字 #e8c27a。

强调色是稀缺的信号色，只用于 CTA、链接交互、当前项、状态和少量指标/标记；正文标题、普通导航文字、默认表面和普通边框使用中性色，不把青绿色扩展成页面主色。
面包屑、日期、目录说明与学习路径标签使用语义文字颜色，不叠加文字透明度；状态标签使用随主题切换的语义状态色。代码高亮在明暗主题下都与正文色轻度混合，提升小字号语法词的可读性。
归档日期与系列文章数使用不叠加透明度的次级文字色，确保浅深主题下辅助信息仍清晰可读。

主题支持系统偏好与手动切换，持久化键为 `themePreference`。语义变量至少包括 `--color-base`、`--color-canvas`、`--color-surface`、`--color-surface-elevated`、`--color-main`、`--color-text-secondary`、`--color-text-tertiary`、`--color-border`、`--color-border-strong`、`--color-theme`、`--color-theme-focus`、`--color-theme-soft`、`--color-theme-soft-hover`、`--color-code-surface`、`--color-success-text`、`--color-caution` 和 `--color-warn`。成功、错误与警告状态只使用各自语义色，并须在明暗主题分别满足 WCAG AA 文本对比度；主题切换不改变布局。

微信品牌绿 #07c160、错误与警告语义色是青绿色主题之外的特定用途例外，不能推广为普通卡片装饰。旧 `color-glass-*`、`color-mist-secondary`、`gradient-theme`、`shadow-glass-*` 和 `shadow-product` 变量可以作为迁移期兼容别名保留；它们不得作为新页面默认表面、渐变、阴影或布局依据。实现和测试必须区分“别名仍存在”与“默认组件仍在消费”。

## Typography

标题和正文均使用 Noto Sans / Noto Sans SC 回退栈；Proofline 迁移目标不再使用 Sora 作为标题字体，Task 7 会清理产品页当前遗留的局部声明。
代码使用 `ui-monospace, monospace`，只用于代码、命令和复制控件，不参与正文标题或导航。
实际基础字号为 `--text-base: 1.0625rem`，基础行高 1.65；方案中的 16px 是原始目标，不能描述为当前实现。display token 为 2.5rem，具体 hero 可使用响应式字号。
正文阅读列默认上限 768px，代码和表格在自身区域滚动，不扩大页面；页面族可以有明确记录的宽屏布局例外，但文章段落仍须有可读行宽上限。
较长的行内代码允许在窄屏自然折行，保持完整文本与页面宽度；代码块仍在自身区域横向滚动。
长文的多列表格在手机保留可读列宽，只在表格区域横向滚动；可滚动时提供键盘焦点和双语辅助说明。
博客详情在常规桌面使用最多 1440px 的页面容器，标题、元信息与正文左边缘一致，正文行宽受目录和间距约束，行高 1.8。1600px 及以上视口下，带目录文章可扩展至最多 2160px，标题最多 1600px，正文段落最多 1200px 并左对齐标题；无目录文章正文最多 1440px。这个宽屏例外减少 4K/5K Retina 浏览器中的空白，同时保留清晰阅读行宽。首页区块标题使用响应式字号，保持主标题、区块标题、卡片标题的清楚层级。
博客详情的标题、元信息与正文左边缘一致，移除重复内边距与标题后的叠加留白。1100px 起右侧独立目录吸顶，低于该宽度使用正文前的折叠目录；没有章节的短文保留相同正文宽度，不渲染空侧栏。
文末作者卡片使用中性浅底、1px 边框和现有 14px 圆角：宽列中头像、身份与社交链接横排，窄列自然堆叠，统计用紧凑数值与标签展示。内容许可单独成行，名称链接到对应语言的版权页；目录控件、社交和许可链接至少 44px，评论区沿用中性分隔与紧凑留白。
共享评论组件的默认配色跟随站点当前主题；首次加载、切换主题及延迟加载 iframe 后都同步，明确指定的固定或自定义主题继续保留。
目录首页保留局部的阅读字号阶梯：主标题为 2–2.65rem，区块标题 1.2rem，字母分组 1.35rem，词条 0.95rem，目录说明 1rem，统计数字 1.25rem，辅助标签 0.8125rem，字母按钮 0.875rem。周刊最新一期标题为 1.3–1.65rem，日期和期数沿用现有小字号；这些值只用于目录首页。

## Layout

统一 `--layout-max:clamp(1280px, 92vw, 4096px)`、`--reading-max:768px`、`--sidebar-layout-max:var(--layout-max)`。页面族可用自身上限收束内容；宽屏扩展不能让长文正文失去明确行宽上限。
容器宽度为 `min(var(--layout-max), calc(100% - 2 * var(--layout-gutter)))`。
gutter 默认 24px，768px 起为 32px。首页 main 全宽，内部区块应用一次容器约束，避免重复缩窄。

桌面 Header 最小高度 80px，1100px 以下为 60px 折叠导航，避免品牌与导航互相挤压；480px 以下顶栏公众号入口隐藏，页脚二维码仍可访问。Footer 在 760px 以下堆叠，导航为两列。
吸顶目录和侧栏统一使用 `--sticky-offset`（Header 高度加 1rem）；Docs 在 900px 以下堆叠，正文与主容器不重复叠加外边距。
共享侧栏也在 900px 以下折叠，让百科、Guild 和周刊正文在平板首屏即可开始阅读。折叠按钮与窄屏导航项至少 44px，按钮保留键盘焦点和展开状态；图标反馈沿用共享 180ms 动效。
周刊正文以期数标题和内容为主：顶部周期选择保留，重复名称移除；900px 以下元信息以紧凑行展示，覆盖日期可自然换行，避免前置控件占满首屏。
百科与周刊首页显式使用 Docs 的 `index` 模式：左侧导航与完整主列组成两栏，主列不受长文 768px 上限约束。百科在主区提供吸顶字母索引，手机横向滚动；词条详情和周刊正文继续使用阅读布局与右侧目录。
`/[lang]/docs/*` 的 Astro 模板示例页已移除；Docs 布局仍是上述内容区的共享实现。旧示例地址返回带 noindex 的 404，不进入导航、搜索索引和站点地图。
检查中文与英文在 375/390、768、1024、1440、1920px，以及 5K Retina 常见的约 2560 CSS px 视口布局；不得以全页面裁切掩盖内容溢出。

## Elevation & Depth

默认不透明表面、1px 中性边框、轻阴影。仅 sticky Header 和移动导航覆盖层允许轻微背景模糊。Footer 弹窗和语言标签使用实色。
`--shadow-sm` 可用于需要层次的表面；`--shadow-md`、`--shadow-lg` 和旧 glass/product shadow 只保留兼容性或经过明确说明的特殊场景，不应作为新页面默认材质。默认页面不得使用紫色 glow、玻璃雾面或 `backdrop-filter`。

## Shapes

现有 CSS token 为 6/10/14px 与 9999px，本轮保留实际圆角风格；药丸用于标签、状态和紧凑过滤控件。旧组件尚有局部药丸/大圆角，不表示所有组件都已完成形状迁移。

## Components

- Header：保留导航、语言、搜索、主题切换及原有 URL，近不透明表面与细底边。
- Footer：中文左侧二维码与 RSS，右侧导航；社交与法律信息各占独立整行。英文无中文公众号块。
- 主按钮：实色强调底；次按钮：中性或轻强调表面。键盘焦点清晰，不依赖颜色传达状态。
- 卡片：正文和内容入口清晰；hover 上浮最多 2px，颜色/边框承担主要反馈。尊重 reduced-motion。
- 动效：共享反馈使用 180ms 的指数式 ease-out；首页引导线仅在首次呈现时伸展，内容默认可见。阅读和目录进度通过 transform 更新，减少布局重算。
- 主题切换：文字与背景同步更新，避免短暂低对比度；完成绘制后恢复悬停与按压的过渡反馈。
- 浏览器细节：选区、输入光标、代码与导航区域滚动条使用语义配色；辅助文字和 placeholder 保持可读对比度。
- QA Skills：正文列上限 768px，侧栏保留；窄屏使用现有堆叠行为。
- 链接：视觉修订不能改动既有 href、博客路径、内容、SEO 或部署配置。

## Do's and Don'ts

- Do 使用语义 token，并同时验证浅深主题和双语页面。
- Do 同步 DESIGN.md、.impeccable/design.json、设计规格和实施计划。
- Don't 恢复默认紫色渐变、色雾和大面积玻璃卡片。
- Don't 用测试通过替代方案验收；历史记录保留事实，不补造测试证据。
