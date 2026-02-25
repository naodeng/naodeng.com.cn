# Design Document: UI Redesign

## Overview

本设计文档描述 inaodeng.com（Nao's Blog）UI 改进计划的技术实现方案。改进目标是在不改变内容结构、不引入新 JS 框架依赖的前提下，通过统一设计令牌系统、增强组件视觉与交互、提升可访问性和响应式布局，使网站更具技术感与专业可信度，并明显改善长文阅读体验。

视觉风格深度参考 [astro.build](https://astro.build) 多个页面的设计语言：
- **首页**：渐变 Hero、统计徽章、卡片网格
- **博客列表页**：日期 + 标题 + 摘要卡片、分页
- **博客文章页**：全宽 Hero、作者信息、阅读时间、Tag Pills、68ch 正文宽度、代码块复制按钮
- **Docs 页**：左侧折叠侧栏、面包屑、右侧 TOC、内容宽度约 65ch
- **Themes 页**：卡片网格 + 分类过滤 Pills、卡片 hover overlay
- **Showcase 页**：图片卡片网格、hover overlay 显示名称与技术栈徽章

所有改进基于现有技术栈：Astro 5 SSG + TypeScript + vanilla JS + CSS Custom Properties。

---

## Architecture

改进采用**渐进增强**策略，分三个层次：

1. **设计令牌层**（`src/styles/base.css`）：扩展现有 CSS Custom Properties，补充 surface、border、shadow、radius、transition 等令牌。
2. **组件层**（`src/components/`）：新增 `ReadingProgressBar.astro`、`ScrollToTop.astro`；改进现有 `TableOfContents.astro`、`FrameworkCard.astro`、`GuildHero.astro`；Article 布局中通过 `<script>` 渐进增强代码块。
3. **页面层**（`src/pages/`、`src/layouts/`）：调整 `Article.astro` 布局；改进 Wiki 首页与词条页；改进 Guild 首页与文章页。

```
src/styles/base.css                ← 扩展设计令牌
src/components/
  ReadingProgressBar.astro         ← 新增：阅读进度条
  ScrollToTop.astro                ← 新增：回到顶部按钮
  TableOfContents.astro            ← 改进：h3 支持、details 折叠、IntersectionObserver
  guild/
    FrameworkCard.astro            ← 改进：难度徽章、学习时长、hover 动效
    GuildHero.astro                ← 改进：渐变文字、统计徽章、gradient-hero 背景
src/layouts/
  Article.astro                    ← 改进：meta bar、68ch 宽度、进度条、代码块增强脚本
src/pages/[lang]/
  wiki/index.astro                 ← 改进：hero section、卡片化、过滤搜索
  wiki/[...slug].astro             ← 改进：hero block、related terms、侧栏折叠
  guild/[...slug].astro            ← 改进：meta bar、前后导航、侧栏阶段分组
```

---

## Visual Style Reference

本节记录从 astro.build 各页面提取的设计语言，并映射到 inaodeng.com 对应页面。

### 1. 全局设计语言（跨页面共性）

从 astro.build 所有页面提取的共性规律：

| 元素 | astro.build 规律 | inaodeng.com 映射 |
|---|---|---|
| 深色背景 | `#13151a`（深海军蓝近黑） | `--color-base: #13151a`（dark mode） |
| 卡片背景 | `rgba(255,255,255,0.06~0.08)` 半透明 | `--color-surface: rgba(255,255,255,0.06)` |
| 卡片边框 | `1px solid rgba(255,255,255,0.1~0.12)` | `--color-border: rgba(255,255,255,0.1)` |
| 圆角 | 12–16px，大圆角风格 | `--radius-lg: 16px` |
| 字体 | Inter，无衬线，现代感 | `--font-sans: 'Inter', system-ui, sans-serif` |
| 主色调 | 紫色渐变（astro 品牌色） | **保持 `#ef4d1a` 橙红色不变** |
| Hover 光晕 | `box-shadow` 主色调 20% 透明度 | `--glow-theme: color-mix(in srgb, var(--color-theme) 20%, transparent)` |
| 过渡 | `0.2–0.25s ease` | `--transition-base: all 0.25s cubic-bezier(0.4,0,0.2,1)` |

### 2. 博客列表页（→ 首页 Post Card）

astro.build/blog/ 设计特征：
- 卡片布局：日期置顶左对齐（小字、低对比度）、标题大字加粗、摘要 2–3 行截断
- 无封面图时用纯色/渐变占位
- 标签 pill 在卡片底部，小圆角，主色调描边
- 卡片 hover：轻微上移 + 边框变亮

inaodeng.com 映射：Post_Card 采用相同结构，封面图 `aspect-ratio: 16/9`，无图时渐变占位，底部显示阅读时间 + tag pills。

### 3. 博客文章页（→ Article_Page）

astro.build 博客文章页设计特征：
- 文章标题区：大字号（2rem+）、作者头像 + 姓名 + 日期 + 阅读时间横排 meta bar
- 正文宽度：约 65–70ch，居中，两侧留白
- h2 标题：左侧有细竖线装饰（`border-left: 3–4px solid accent`）
- 代码块：深色背景、顶部语言标签 + 复制按钮、左侧 3px 主色调装饰线
- 行内代码：主色调 10% 背景 + 主色调文字
- TOC：右侧固定，当前节高亮主色调，移动端折叠

inaodeng.com 映射：完全对应，`68ch` 正文宽度，meta bar，代码块增强，TOC 改进。

### 4. Docs 页（→ Wiki_Entry_Page、Guild_Article_Page）

docs.astro.build 设计特征：
- 左侧侧栏：按分组折叠（`<details>`），当前页高亮主色调 + 左侧 3px 指示线
- 面包屑：顶部小字，`/` 分隔，链接低对比度
- 内容区：约 65ch 宽，h2/h3 有层级区分
- 右侧 TOC：固定，当前节高亮

inaodeng.com 映射：Wiki 词条页和 Guild 文章页均采用此三栏（侧栏 + 内容 + TOC）布局模式。

### 5. Themes 页（→ Guild_Homepage、Wiki_Homepage）

astro.build/themes/ 设计特征：
- 顶部 Hero：大标题 + 副标题 + 分类过滤 pills
- 过滤 pills：`background: surface`，`border: 1px solid border`，active 时 `background: accent`，`color: #fff`
- 卡片网格：`auto-fill, minmax(280px, 1fr)`，卡片有预览图 + 名称 + 技术栈徽章
- 搜索框：`background: surface`，`border: 1px solid border`，focus 时 `border-color: accent`

inaodeng.com 映射：
- Guild_Homepage：Hero + 测试类型过滤 pills + Framework_Card 网格
- Wiki_Homepage：Hero + 搜索框（同 Themes 页搜索框风格）+ 字母分组卡片网格

### 6. Showcase 页（→ Framework_Card hover overlay）

astro.build/showcase/ 设计特征：
- 图片卡片网格，hover 时显示半透明 overlay（`rgba(0,0,0,0.6)`）
- overlay 内显示网站名称 + 技术栈徽章
- 卡片圆角 12–16px，overflow hidden

inaodeng.com 映射：Post_Card 封面图区域 hover 时显示分类 badge overlay（参考此模式）。

---

## Components and Interfaces

### 1. 设计令牌扩展（`src/styles/base.css`）

```css
/* 字体 */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;

/* 颜色令牌（dark mode，参考 astro.build） */
/* @media (prefers-color-scheme: dark) */
--color-base: #13151a;
--color-surface: rgba(255, 255, 255, 0.06);
--color-border: rgba(255, 255, 255, 0.1);
--color-main: #e8e8e8;

/* 颜色令牌（light mode） */
/* @media (prefers-color-scheme: light) */
--color-base: #faf9f6;
--color-surface: rgba(0, 0, 0, 0.03);
--color-border: rgba(0, 0, 0, 0.1);
--color-main: #342c28;

/* 主色调（不变） */
--color-theme: #ef4d1a;
--color-accent: #ff6b35;
--color-warn: #f59e0b;

/* 光晕与渐变（自动跟随 --color-theme） */
--glow-theme: color-mix(in srgb, var(--color-theme) 20%, transparent);
--gradient-hero: radial-gradient(ellipse at top, color-mix(in srgb, var(--color-theme) 12%, transparent), transparent 70%);

/* 阴影 */
--shadow-sm: 0 1px 3px color-mix(in srgb, var(--color-main) 10%, transparent);
--shadow-md: 0 4px 12px color-mix(in srgb, var(--color-main) 12%, transparent);
--shadow-lg: 0 8px 24px color-mix(in srgb, var(--color-main) 15%, transparent);

/* 字体尺寸 */
--text-xs: 0.75rem;   --text-sm: 0.875rem;
--text-base: 1rem;    --text-lg: 1.125rem;   --text-xl: 1.25rem;

/* 间距（补充 xs，保留现有 s/m/l） */
--sp-xs: 8px;
/* 现有: --sp-s: 16px, --sp-m: 32px, --sp-l: 64px */

/* 圆角 */
--radius-sm: 4px;  --radius-md: 8px;
--radius-lg: 16px; --radius-xl: 24px;

/* 过渡 */
--transition-base: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
```

### 2. `ReadingProgressBar.astro`

```
Props: 无
位置: src/components/ReadingProgressBar.astro
引入: Article.astro layout（仅文章页）
```

渲染 `<div role="progressbar" aria-valuemin="0" aria-valuemax="100">` 固定在视口顶部，`height: 3px`，`background: var(--color-theme)`，`z-index` 高于 header。通过 `scroll` 事件更新 `width` 百分比。`prefers-reduced-motion` 时移除 CSS transition。

### 3. `ScrollToTop.astro`

```
Props: { lang: Lang }
位置: src/components/ScrollToTop.astro
引入: Base.astro layout（全站）
```

固定右下角圆形按钮（`44×44px`），`scrollY > 400` 时淡入显示（`0.2s ease-out`）。`aria-label` 通过 `useTranslations(lang)` 解析。`prefers-reduced-motion` 时 `behavior: 'instant'`。

### 4. `TableOfContents.astro`（改进）

- `tocItems` 过滤扩展为 `depth === 2 || depth === 3`
- h3 项 `padding-inline-start: 0.75rem` 缩进
- 移动端（< 960px）改为 `<details>` 折叠组件
- `scrollIntoView` 在 `prefers-reduced-motion` 时使用 `behavior: 'instant'`

### 5. 代码块增强（Article.astro `<script>`）

参考 astro.build 博客文章页代码块样式：
1. 遍历所有 `<pre>` 元素，从 `<code class="language-xxx">` 提取语言标签
2. 在 `<pre>` 前插入 header bar（语言标签左对齐 + 复制按钮右对齐）
3. 复制按钮：`navigator.clipboard.writeText()`，2000ms 后恢复
4. `navigator.clipboard` 不存在时隐藏复制按钮，不抛错

### 6. `FrameworkCard.astro`（改进）

新增展示（参考 astro.build themes 页卡片信息密度）：
- 文章数量 + 学习时长（`articleCount * 8` 分钟）
- 难度徽章（Beginner/Intermediate/Advanced，颜色令牌区分）

卡片样式（参考 astro.build themes 页卡片）：
- `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, `border-radius: var(--radius-lg)`
- Hover：`transform: translateY(-4px)`, `box-shadow: 0 0 20px var(--glow-theme)`, `border-color: var(--color-theme)`

### 7. `GuildHero.astro`（改进）

参考 astro.build 首页 Hero 模式：
- 背景：`background: var(--gradient-hero)`（径向渐变光晕）
- 标题：`background: linear-gradient(135deg, var(--color-theme), var(--color-accent)); background-clip: text; -webkit-text-fill-color: transparent`
- 统计徽章：总框架数、总文章数，数字用 `var(--color-theme)` 强调

### 8. Wiki 首页（`src/pages/[lang]/wiki/index.astro`）

参考 astro.build themes 页布局：
- **Hero section**：`background: var(--gradient-hero)`，大标题 + 统计 banner（词条总数、字母组数，数字用 `var(--color-theme)`）
- **搜索框**：`background: var(--color-surface)`, `border: 1px solid var(--color-border)`, `border-radius: var(--radius-md)`，focus 时 `border-color: var(--color-theme)`
- **字母 pill 导航**：同 themes 页 category filter pills 风格
- **词条卡片网格**：`grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))`，玻璃态卡片
- 客户端搜索：`input` 事件过滤，100ms 内响应，空字母组自动隐藏

### 9. Wiki 词条页（`src/pages/[lang]/wiki/[...slug].astro`）

参考 astro.build docs 页布局：
- 面包屑："Wiki › [词条标题]"
- Hero block：词条标题 + `2px solid var(--color-theme)` 底部边框
- 正文：`max-width: 68ch`，`line-height: 1.8`，h2/h3 同 Article_Page 样式
- Related Terms：pill 列表，`var(--color-theme)` 描边
- 侧栏：按字母 `<details>` 分组，当前词条所在组默认 `open`，当前词条高亮

### 10. Guild 首页（`src/pages/[lang]/guild/index.astro`）

参考 astro.build themes 页：
- Hero + 测试类型过滤 pills（active 时 `background: var(--color-theme)`, `color: #fff`）
- Framework_Card 网格，按 Test_Type 分组，section 标题左侧 `3px solid var(--color-theme)` 装饰线

### 11. Guild 文章页（`src/pages/[lang]/guild/[...slug].astro`）

参考 astro.build docs 页 + 博客文章页：
- 面包屑："Guild › [Test Type] › [Framework] › [文章标题]"
- Meta bar：test type、framework、难度徽章、阅读时间、stage 标签
- 正文：`max-width: 68ch`，`line-height: 1.8`
- 前后导航：hover 时 `transform: translateX(±4px)`，`border: 1px solid var(--color-theme)`
- 侧栏：按 stage 分组，当前文章高亮 + 左侧 `3px solid var(--color-theme)` 指示线

---

## Data Models

### 设计令牌（CSS Custom Properties）

| Token | 值（light） | 值（dark） |
|---|---|---|
| `--color-theme` | `#ef4d1a` | `#ef4d1a`（不变） |
| `--color-accent` | `#ff6b35` | `#ff6b35` |
| `--color-base` | `#faf9f6` | `#13151a` |
| `--color-main` | `#342c28` | `#e8e8e8` |
| `--color-surface` | `rgba(0,0,0,0.03)` | `rgba(255,255,255,0.06)` |
| `--color-border` | `rgba(0,0,0,0.1)` | `rgba(255,255,255,0.1)` |
| `--color-warn` | `#f59e0b` | `#f59e0b` |
| `--radius-lg` | `16px` | `16px` |
| `--transition-base` | `all 0.25s cubic-bezier(0.4,0,0.2,1)` | 同 |

### 阅读时间计算

```typescript
// src/utils/readingTime.ts
export function readingTime(wordCount: number): number {
  return Math.ceil(wordCount / 200);
}
```

### Wiki frontmatter 扩展

```typescript
// src/content.config.ts — wiki collection schema 新增可选字段
related?: z.array(z.string()).optional()  // 关联词条 slug 列表
```

### Guild Framework 接口扩展

```typescript
// src/config/guild.config.ts — Framework 接口新增可选字段
difficulty?: 'beginner' | 'intermediate' | 'advanced';
```

---

## Correctness Properties

### Property 1: 阅读时间计算正确性
*For any* 非负整数 `wordCount`，`readingTime(wordCount)` 应等于 `Math.ceil(wordCount / 200)`，且结果 ≥ 1。
**Validates: Requirements 2.6, 15.1**

### Property 2: 进度条宽度计算正确性
*For any* 合法的 `scrollY`（0 ≤ scrollY ≤ documentHeight - viewportHeight），进度条宽度百分比应在 `[0, 100]` 范围内。
**Validates: Requirements 4.2, 4.5**

### Property 3: 回到顶部按钮可见性
*For any* 滚动位置 `scrollY`，`scrollY > 400` 时按钮可见，`scrollY <= 400` 时隐藏。
**Validates: Requirements 5.2, 5.3**

### Property 4: 回到顶部按钮 aria-label 国际化
*For any* `lang`（`'en'` 或 `'zh-cn'`），`aria-label` 应为对应语言的非空本地化字符串。
**Validates: Requirements 5.6**

### Property 5: 颜色对比度合规性
*For any* `--color-main` 与 `--color-base` 组合，在浅色和深色模式下 WCAG 对比度比值均 ≥ 4.5:1。
**Validates: Requirements 9.1**

### Property 6: html lang 属性正确性
*For any* 路由 `lang` 参数（`'en'` 或 `'zh-cn'`），渲染后 `<html lang>` 属性应与路由参数一致。
**Validates: Requirements 9.7**

### Property 7: Wiki 空字母组隐藏
*For any* 词条数量为 0 的字母组，该字母的 pill 按钮和 section 均不应出现在渲染输出中。
**Validates: Requirements 12.4**

### Property 8: Wiki 客户端搜索过滤正确性
*For any* 非空搜索字符串 `query`，过滤后显示的每个词条的 title 或 description 均包含 `query`（大小写不敏感）；不匹配的词条均被隐藏。
**Validates: Requirements 12.5, 12.6**

### Property 9: Wiki 当前词条所在字母组默认展开
*For any* Wiki 词条页，侧栏中包含当前词条的字母 `<details>` 组 `open` 为 `true`；其他组 `open` 为 `false`。
**Validates: Requirements 13.5**

### Property 10: Framework Card 必填字段完整性
*For any* `FrameworkCard` 实例，渲染输出应包含：框架名称、描述、文章数量、学习时长、难度徽章。
**Validates: Requirements 14.2**

### Property 11: 难度徽章颜色令牌正确性
*For any* 难度级别，徽章应使用对应颜色令牌：Beginner → `--color-theme` 15% 透明度，Intermediate → `--color-accent` 15%，Advanced → `--color-warn` 15%。
**Validates: Requirements 14.3**

### Property 12: Guild 文章 meta bar 字段完整性
*For any* Guild 文章页，meta bar 应包含：测试类型、框架名称、难度徽章、阅读时间、阶段标签。
**Validates: Requirements 15.1**

---

## Error Handling

- **Clipboard API 不可用**：检测 `typeof navigator.clipboard === 'undefined'`，不渲染复制按钮，不抛错
- **Wiki `related` 字段缺失**：`entry.data.related` 为 `undefined` 或空数组时，Related Terms section 整体不渲染
- **Guild 文章无前后导航**：`prev`/`next` 为 `null` 时对应链接不渲染
- **图片加载失败**：Post Card 封面图失败时 CSS `background` 渐变占位符自动显示
- **`prefers-reduced-motion` 降级**：所有动效在 `@media (prefers-reduced-motion: reduce)` 下通过 CSS 覆盖为 `transition: none`

---

## Testing Strategy

### 测试框架

- **属性测试**：[fast-check](https://fast-check.dev/)（TypeScript 原生支持）
- **单元测试**：Vitest（与 Astro 生态兼容，支持 ESM）
- **E2E 测试**：Playwright（已有，位于 `e2e/` 目录）

安装：`npm install -D fast-check vitest`

### 属性测试实现

每个属性测试最少运行 100 次迭代，包含注释标记 `// Feature: ui-redesign, Property {N}: {text}`。

**Property 1 — 阅读时间**
```typescript
fc.assert(fc.property(fc.nat(), (n) => {
  const r = readingTime(n);
  return r === Math.ceil(n / 200) && r >= 1;
}), { numRuns: 100 });
```

**Property 2 — 进度条宽度**
```typescript
fc.assert(fc.property(
  fc.nat({ max: 10000 }), fc.nat({ max: 10000 }), fc.nat({ max: 10000 }),
  (scrollY, docH, vpH) => {
    fc.pre(docH > vpH && scrollY <= docH - vpH);
    const w = (scrollY / (docH - vpH)) * 100;
    return w >= 0 && w <= 100;
  }
), { numRuns: 100 });
```

**Property 8 — Wiki 搜索过滤**
```typescript
fc.assert(fc.property(
  fc.array(fc.record({ title: fc.string(), description: fc.string() })),
  fc.string({ minLength: 1 }),
  (entries, query) => {
    const results = filterEntries(entries, query);
    return results.every(e =>
      e.title.toLowerCase().includes(query.toLowerCase()) ||
      e.description.toLowerCase().includes(query.toLowerCase())
    );
  }
), { numRuns: 100 });
```

### 单元测试覆盖

| 测试文件 | 覆盖内容 |
|---|---|
| `src/utils/readingTime.test.ts` | 阅读时间（边界：0词、1词、200词、201词） |
| `src/utils/progressBar.test.ts` | 进度条宽度（边界：scrollY=0、scrollY=max） |
| `src/utils/wikiFilter.test.ts` | Wiki 搜索过滤（空查询、大小写、清空恢复） |
| `e2e/reading-progress.spec.ts` | 进度条 E2E：滚动时宽度变化 |
| `e2e/scroll-to-top.spec.ts` | 回到顶部 E2E：显隐逻辑、点击行为 |
| `e2e/code-block.spec.ts` | 代码块 E2E：语言标签、复制按钮 |
| `e2e/wiki-search.spec.ts` | Wiki 搜索 E2E：过滤、清空恢复 |
| `e2e/toc.spec.ts` | TOC E2E：h3 缩进、移动端折叠、键盘导航 |
