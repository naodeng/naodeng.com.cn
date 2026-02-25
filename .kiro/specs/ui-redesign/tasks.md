https://x.com/inaodeng# Implementation Tasks: UI Redesign

## Task List

- [x] 1. 扩展设计令牌系统（`src/styles/base.css`）
  - [x] 1.1 新增 `--color-surface`、`--color-border`、`--color-warn` 颜色令牌
  - [x] 1.2 新增 `--shadow-sm`、`--shadow-md`、`--shadow-lg` 阴影令牌
  - [x] 1.3 新增 `--text-xs` ~ `--text-xl` 字体尺寸令牌
  - [x] 1.4 新增 `--sp-xs` 间距令牌（保留现有 `--sp-s/m/l` 不变）
  - [x] 1.5 新增 `--radius-sm`、`--radius-md`、`--radius-lg`（16px）、`--radius-xl` 圆角令牌
  - [x] 1.6 新增 `--transition-base` 过渡令牌
  - [x] 1.7 在 `@media (prefers-reduced-motion: reduce)` 中禁用所有装饰性动效
  - [x] 1.8 新增 `--glow-theme: color-mix(in srgb, var(--color-theme) 20%, transparent)` 光晕令牌
  - [x] 1.9 新增 `--gradient-hero: radial-gradient(ellipse at top, ...)` 装饰渐变令牌
  - [x] 1.10 新增 `--font-sans: 'Inter', system-ui, -apple-system, sans-serif` 字体令牌
  - [x] 1.11 更新深色模式颜色令牌（参考 astro.build）：`--color-base: #13151a`、`--color-surface: rgba(255,255,255,0.06)`、`--color-border: rgba(255,255,255,0.1)`、`--color-main: #e8e8e8`
  - [x] 1.12 更新浅色模式颜色令牌：`--color-surface: rgba(0,0,0,0.03)`、`--color-border: rgba(0,0,0,0.1)`
  - [x] 1.13 通过 Google Fonts CDN 引入 Inter 字体（`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap')`）
  - [x] 1.14 将 `--font-sans` 应用到 `body` 的 `font-family`

- [x] 2. 排版与文章页信息层级优化（`src/layouts/Article.astro`）
  - [x] 2.1 将 `h2` 样式更新为 `font-size: 1.5rem`，左边框 `4px solid var(--color-theme)`，`padding-inline-start: var(--sp-s)`（参考 astro.build 博客文章页）
  - [x] 2.2 将 `h3` 样式更新为 `font-size: 1.25rem`，底部边框 `1px solid var(--color-border)`
  - [x] 2.3 将正文 `p` 的 `line-height` 设为 `1.8`，`font-weight: 400`
  - [x] 2.4 将文章正文区域最大宽度限制为 `68ch`（参考 astro.build 博客文章页约 65–70ch 正文宽度）
  - [x] 2.5 新增文章 meta bar（作者、日期、阅读时间），使用 `var(--text-sm)` 和 `opacity: 0.65`（参考 astro.build 博客文章页 meta bar）
  - [x] 2.6 实现阅读时间计算工具函数 `readingTime(wordCount)` 并在 meta bar 中使用
  - [x] 2.7 在 meta bar 下方渲染 Tag_Pill 组件（当文章有标签时）
  - [x] 2.8 将行内代码样式更新为 `color-mix` 背景、`var(--color-theme)` 文字、`var(--radius-sm)` 圆角
  - [x] 2.9 将 `pre` 代码块样式更新为 `var(--radius-md)` 圆角、`var(--color-border)` 边框、左侧 `3px solid var(--color-theme)` 装饰线

- [x] 3. 代码块复制功能增强（`src/layouts/Article.astro` 客户端脚本）
  - [x] 3.1 编写客户端脚本，遍历所有 `<pre>` 元素，提取语言标签并插入 header bar（语言标签左对齐 + 复制按钮右对齐，参考 astro.build 博客文章页代码块）
  - [x] 3.2 实现复制按钮点击逻辑：`navigator.clipboard.writeText()`，2000ms 后恢复按钮文字
  - [x] 3.3 实现 Clipboard API 不可用时的降级处理（隐藏复制按钮，不抛出错误）

- [x] 4. 新增 `ReadingProgressBar.astro` 组件
  - [x] 4.1 创建 `src/components/ReadingProgressBar.astro`，渲染固定在视口顶部的进度条（`height: 3px`，`background: var(--color-theme)`）
  - [x] 4.2 实现 `scroll` 事件监听，计算并更新进度条宽度百分比
  - [x] 4.3 设置 `z-index` 高于页面 header
  - [x] 4.4 在 `prefers-reduced-motion: reduce` 时移除 CSS transition
  - [x] 4.5 在 `src/layouts/Article.astro` 中引入该组件

- [x] 5. 新增 `ScrollToTop.astro` 组件
  - [x] 5.1 创建 `src/components/ScrollToTop.astro`，渲染固定在右下角的圆形按钮（`44px × 44px`）
  - [x] 5.2 实现 `scroll` 事件监听，`scrollY > 400px` 时显示（`0.2s ease-out` 淡入），否则隐藏
  - [x] 5.3 实现点击滚动到顶部，`prefers-reduced-motion` 时使用 `behavior: 'instant'`
  - [x] 5.4 通过 `lang` prop 和 `useTranslations()` 设置本地化 `aria-label`
  - [x] 5.5 在 `src/layouts/Base.astro` 中引入该组件

- [x] 6. 首页 Post Card 视觉升级
  - [x] 6.1 更新 Post Card 基础样式为玻璃态风格：`background: var(--color-surface)`、`border: 1px solid var(--color-border)`、`border-radius: var(--radius-lg)`（参考 astro.build 博客列表页卡片）
  - [x] 6.2 更新 Post Card hover 状态：`transform: translateY(-4px)`、`border-color: var(--color-theme)`、`box-shadow: 0 0 20px var(--glow-theme)`，过渡 `0.25s cubic-bezier(0.4, 0, 0.2, 1)`
  - [x] 6.3 封面图区域设置 `aspect-ratio: 16 / 9`，`object-fit: cover`
  - [x] 6.4 无封面图时渲染基于 `var(--color-theme)` 的渐变占位符
  - [x] 6.5 在卡片底部显示阅读时间估算
  - [x] 6.6 在封面图区域左上角添加分类 badge overlay（`background: rgba(0,0,0,0.5)`，`color: #fff`，参考 astro.build showcase 页 hover overlay 模式）
  - [x] 6.7 在 `prefers-reduced-motion: reduce` 时禁用 transform hover 动效

- [x] 7. TOC 组件交互增强（`src/components/TableOfContents.astro`）
  - [x] 7.1 将 `tocItems` 过滤扩展为包含 `depth === 2` 和 `depth === 3`
  - [x] 7.2 为 h3 项添加 `padding-inline-start: 0.75rem` 缩进样式（参考 astro.build docs 页 TOC 层级缩进）
  - [x] 7.3 移动端（< 960px）将 TOC 改为 `<details>` 折叠组件（参考 astro.build docs 页移动端 TOC）
  - [x] 7.4 确保 TOC 内部滚动时保持活跃链接可见（`scrollIntoView`）
  - [x] 7.5 验证所有 TOC 链接可通过键盘导航（Tab + Enter）

- [x] 8. 可访问性基线改进
  - [x] 8.1 在 `Base.astro` 中添加跳转到主内容的 skip link 作为第一个可聚焦元素
  - [x] 8.2 确认所有交互元素的 focus indicator 样式（`outline: 2px solid var(--color-theme); outline-offset: 2px`）已在 `base.css` 中定义
  - [x] 8.3 检查并补全页面布局中的语义 HTML 元素（`<article>`、`<aside>`、`<nav>`、`<section>`、`<time>`）
  - [x] 8.4 为装饰性图片添加 `aria-hidden="true"`

- [x] 9. 响应式布局优化
  - [x] 9.1 确认文章页在 < 960px 时为单列布局，TOC 折叠至文章标题下方
  - [x] 9.2 首页 post grid 在 < 480px 时为单列，480px–960px 时为双列
  - [x] 9.3 文章页在 < 480px 时 `font-size: 1rem`，`line-height: 1.75`
  - [x] 9.4 代码块在窄视口下可横向滚动（`overflow-x: auto`）
  - [x] 9.5 所有内容容器使用 `max-inline-size` + `padding-inline`，不使用固定像素宽度

- [x] 10. Wiki 首页视觉与交互增强（`src/pages/[lang]/wiki/index.astro`）
  - [x] 10.1 新增 Hero section：`background: var(--gradient-hero)`，大标题 + 统计 banner（词条总数、字母组数，数字用 `var(--color-theme)` 强调，参考 astro.build docs 页 hero）
  - [x] 10.2 将词条列表改为 CSS Grid 卡片布局（`grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))`）
  - [x] 10.3 每个词条卡片应用玻璃态风格：`background: var(--color-surface)`、`border: 1px solid var(--color-border)`、`border-radius: var(--radius-lg)`
  - [x] 10.4 卡片 hover 状态：`border-color: var(--color-theme)`、`transform: translateY(-2px)`、`box-shadow: 0 0 20px var(--glow-theme)`
  - [x] 10.5 添加搜索 `<input>`，样式参考 astro.build themes 页搜索框：`background: var(--color-surface)`、`border: 1px solid var(--color-border)`、`border-radius: var(--radius-md)`，focus 时 `border-color: var(--color-theme)`
  - [x] 10.6 通过 `input` 事件过滤词条（大小写不敏感，100ms 内响应）
  - [x] 10.7 搜索时动态隐藏空字母组（无匹配词条的字母 section 和 pill 按钮）
  - [x] 10.8 搜索清空时恢复完整词条列表和所有字母组
  - [x] 10.9 字母 pill 导航样式参考 astro.build themes 页 category filter pills：`background: var(--color-surface)`、`border: 1px solid var(--color-border)`，active 时 `background: var(--color-theme)`、`color: #fff`
  - [x] 10.10 在 `prefers-reduced-motion: reduce` 时禁用卡片 hover transform 动效
  - [x] 10.11 视口 < 480px 时卡片网格改为单列

- [x] 11. Wiki 词条页阅读体验优化（`src/pages/[lang]/wiki/[...slug].astro`）
  - [x] 11.1 添加词条 hero block：`font-size: var(--text-xl)`，底部 `2px solid var(--color-theme)` 边框，`padding-block-end: var(--sp-s)`
  - [x] 11.2 正文区域应用 `max-width: 68ch`、`line-height: 1.8`，h2/h3 样式与 Article_Page 一致（参考 astro.build docs 页内容区）
  - [x] 11.3 读取 `entry.data.related` 字段，渲染 Related Terms pill 列表（每个 pill 链接到对应词条页，`var(--color-theme)` 描边）
  - [x] 11.4 `related` 字段缺失或为空时完全不渲染 Related Terms section
  - [x] 11.5 在 `src/content.config.ts` 的 wiki schema 中添加可选 `related: z.array(z.string()).optional()` 字段
  - [x] 11.6 侧栏按字母分组为 `<details>` 折叠元素，当前词条所在字母组默认 `open`（参考 astro.build docs 页左侧折叠侧栏）
  - [x] 11.7 侧栏高亮当前词条（`color: var(--color-theme)`，`font-weight: 600`，左侧 `3px solid var(--color-theme)` 指示线），页面加载时 `scrollIntoView`
  - [x] 11.8 确认面包屑导航已正确渲染（"Wiki › [词条标题]"）

- [x] 12. Guild 首页与框架卡片视觉升级
  - [x] 12.1 更新 `GuildHero.astro`：背景 `background: var(--gradient-hero)`，标题使用渐变文字（`linear-gradient(135deg, var(--color-theme), var(--color-accent))`，参考 astro.build 首页 Hero）
  - [x] 12.2 `GuildHero.astro` 统计数字使用 `var(--color-theme)` 强调色
  - [x] 12.3 更新 `FrameworkCard.astro`：新增文章数量、学习时长（`articleCount * 8` 分钟）展示（参考 astro.build themes 页卡片信息密度）
  - [x] 12.4 实现难度徽章：Beginner 用 `--color-theme` 15% 透明度，Intermediate 用 `--color-accent` 15%，Advanced 用 `--color-warn` 15%
  - [x] 12.5 将 `FrameworkCard.astro` 基础样式更新为玻璃态风格：`background: var(--color-surface)`、`border: 1px solid var(--color-border)`、`border-radius: var(--radius-lg)`
  - [x] 12.6 更新 `FrameworkCard.astro` hover 动效：`transform: translateY(-4px)`、`box-shadow: 0 0 20px var(--glow-theme)`、`border-color: var(--color-theme)`
  - [x] 12.7 在 `src/config/guild.config.ts` 的 `Framework` 接口中添加可选 `difficulty` 字段
  - [x] 12.8 Guild 首页 section 标题添加左侧 `3px solid var(--color-theme)` 装饰线
  - [x] 12.9 新增测试类型过滤 pills（参考 astro.build themes 页 category filter）：`background: var(--color-surface)`、`border: 1px solid var(--color-border)`，active 时 `background: var(--color-theme)`、`color: #fff`；通过 vanilla JS 实现客户端过滤
  - [x] 12.10 在 `prefers-reduced-motion: reduce` 时禁用 Framework Card hover transform 动效
  - [x] 12.11 视口 < 480px 时框架卡片网格改为单列

- [x] 13. Guild 文章页学习体验增强（`src/pages/[lang]/guild/[...slug].astro`）
  - [x] 13.1 更新 `.guild-meta` 区块：补充 test type、framework name、阅读时间（`ceil(wordCount / 200)` 分钟）（参考 astro.build 博客文章页 meta bar）
  - [x] 13.2 meta bar 中的难度徽章样式与 FrameworkCard 一致（按级别使用对应颜色令牌）
  - [x] 13.3 正文区域应用 `max-width: 68ch`、`line-height: 1.8`，h2/h3 样式与 Article_Page 一致（参考 astro.build docs 页内容区）
  - [x] 13.4 更新前后导航 hover 样式：`background: var(--color-surface)`，`border: 1px solid var(--color-theme)`，`transform: translateX(±4px)`
  - [x] 13.5 侧栏文章列表按 stage 分组，每个 stage 显示非交互式标题（参考 astro.build docs 页左侧分组侧栏）
  - [x] 13.6 侧栏高亮当前文章（`color: var(--color-theme)`，`font-weight: 600`，左侧 `3px solid var(--color-theme)` 边框）
  - [x] 13.7 页面加载时侧栏滚动至当前文章链接可见
  - [x] 13.8 确认面包屑导航已正确渲染（"Guild › [Test Type] › [Framework] › [文章标题]"）
  - [x] 13.9 在 `prefers-reduced-motion: reduce` 时禁用导航 hover transform 动效

- [x] 14. 编写工具函数单元测试与属性测试
  - [x] 14.1 创建 `src/utils/readingTime.ts` 导出 `readingTime(wordCount)` 函数
  - [x] 14.2 创建 `src/utils/readingTime.test.ts`，使用 fast-check 编写 Property 1 属性测试（≥100 次迭代）
  - [x] 14.3 创建 `src/utils/progressBar.ts` 导出进度条宽度计算函数
  - [x] 14.4 创建 `src/utils/progressBar.test.ts`，使用 fast-check 编写 Property 2 属性测试（≥100 次迭代）
  - [x] 14.5 创建 `src/utils/scrollToTop.ts` 导出按钮可见性判断函数
  - [x] 14.6 创建 `src/utils/scrollToTop.test.ts`，使用 fast-check 编写 Property 3 属性测试（≥100 次迭代）
  - [x] 14.7 创建 `src/utils/wikiFilter.ts` 导出词条过滤函数
  - [x] 14.8 创建 `src/utils/wikiFilter.test.ts`，使用 fast-check 编写 Property 8 属性测试（≥100 次迭代）

- [x] 15. 编写 E2E 测试（`e2e/` 目录）
  - [x] 15.1 创建 `e2e/reading-progress.spec.ts`：验证滚动时进度条宽度变化
  - [x] 15.2 创建 `e2e/scroll-to-top.spec.ts`：验证按钮显隐逻辑和点击行为
  - [x] 15.3 创建 `e2e/code-block.spec.ts`：验证语言标签、复制按钮、确认状态
  - [x] 15.4 创建 `e2e/wiki-search.spec.ts`：验证搜索过滤和清空恢复
  - [x] 15.5 创建 `e2e/toc.spec.ts`：验证 h3 缩进、移动端折叠、键盘导航
