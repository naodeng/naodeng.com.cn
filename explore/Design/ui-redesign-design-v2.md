# UI Redesign Design v2

## 设计原则
- Token-first、组件可复用、渐进增强、低侵入改造。

## 实现架构
1. `src/styles/base.css`：统一设计令牌。
2. `src/layouts/Article.astro`：文章排版、代码块增强。
3. 新组件：`ReadingProgressBar.astro`、`ScrollToTop.astro`。
4. `TableOfContents.astro`：active 高亮 + mobile details。
5. 页面改造：`/[lang]/wiki/*`、`/[lang]/guild/*`、`/[lang]/index`。

## 关键技术点
- 使用 CSS variables + `prefers-color-scheme`。
- `IntersectionObserver` 驱动 TOC active。
- 代码复制使用 `navigator.clipboard`，失败 graceful fallback。
- `prefers-reduced-motion` 全局关闭装饰动效。

## 兼容与风险
- 风险：样式重构引发局部回归。
- 控制：组件级快照 + E2E 关键路径验证。

## 验证方案
- 视觉回归：首页、文章、wiki、guild 四类页面。
- 功能回归：TOC、复制按钮、搜索筛选、滚动组件。
