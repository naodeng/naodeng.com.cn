# Proofline 全站主题改造实施计划

> **Proofline — A QA-inspired editorial system built around evidence, signals, and clarity.**

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在不改变现有路由、链接目标和内容集合的前提下，将整个双语 Astro 站统一改造成 Proofline 主题（视觉参考 AIHOT 的编辑型系统），并修复前一轮 review 中确认的布局、信息架构、交互和路由治理问题。

**Architecture:** 先把现有蓝紫/玻璃样式收敛到一套 Proofline 语义化浅色/深色 token，再按共享组件、内容中心、产品页和内容/路由治理分任务迁移。所有页面共享同一套视觉系统，但保留 Blog 阅读布局、Wiki/Prompts/QA Skills 探索布局和产品页内容结构，不复制 AIHOT 的页面内容或固定侧栏结构。

**Tech Stack:** Astro 6, TypeScript, scoped CSS, global CSS custom properties, Vitest, Playwright。

**Spec:** `docs/superpowers/specs/2026-09-29-aihot-editorial-signal-redesign-design.md`

## Global Constraints

- 页面背景使用浅色 `#faf9f6` 和深色 `#13191c`。
- 内容表面使用浅色 `#ffffff` 和深色 `#1a2226`。
- 信号强调色使用浅色 `#176b75` 和深色 `#12ccd8`，只用于 CTA、交互状态、当前项、链接和少量指标/标记；标题、普通导航和默认表面保持中性。
- 继续使用现有 Noto Sans / Noto Sans SC fallback，不新增字体、UI 框架或运行时依赖。
- 保留现有路由、双语路径、href、SEO 入口、内容集合和产品功能。
- Docs 旧网站模板占位内容不补齐、不重写、不作为本轮内容问题处理。
- 不修改 `dist/`、`node_modules/`、测试产物、部署配置或域名配置。
- 不使用虚构内容填充 Bruno TODO；只替换已有正文对应的标题，或隐藏空章节。
- 主题切换必须在浅色、深色和跟随系统模式下保持跨页面、刷新后的行为一致。
- 所有 CSS 过渡使用明确属性；非必要动画必须遵守 `prefers-reduced-motion`。
- 设计事实来源必须同步：`DESIGN.md`、`.impeccable/design.json`、本实施计划和设计规格使用同一套 Proofline token。具体色值和派生公式以设计规格为准。
- 迁移期允许保留 `color-glass-*`、`color-mist-secondary`、`gradient-theme`、`shadow-glass-*` 和 `shadow-product` 兼容别名；新组件不得消费这些别名作为默认表面、渐变或阴影，测试必须区分“存在”与“被使用”。
- 每个实现任务只能修改其 `Files` 中列出的路径。扫描发现的新路径必须先补入对应任务并说明原因；不得以“remaining scoped declarations”作为无限制改动范围。
- 任何提交前先运行 `git status --short`，只暂存本任务明确列出的文件；禁止使用 `git add src tests` 这类会吸收无关用户改动的宽泛命令。

## Review Focus

- **主题持久化与跨页面一致性**：点击主题切换、刷新和切换中英文页面后，`html[data-theme]`、控件状态和 `meta[name="theme-color"]` 必须一致。由 Task 1 的主题 E2E 覆盖。
- **英文长文与窄屏布局**：标题、返回链接、周期选择器和双栏 Hero 在 375/390px 不得被挤压、截断或产生横向溢出。由 Task 4、Task 5 和 Task 9 的响应式测试覆盖。
- **导航与信息架构重复**：Wiki/AI Wiki 侧栏不得再次完整复制主区域术语列表，所有术语仍须可搜索、可点击、可回到当前项。由 Task 4 的 Wiki E2E 与链接测试覆盖。
- **产品页行为回归**：dsh-qa 的命令切换/复制/版本展开，Guild 的筛选/学习路径，AI Test Auditor 的安装与 release 展开必须在主题迁移后保持原行为。由 Task 6、Task 7 的现有 E2E 覆盖。
- **未完成状态与路由治理**：Links 空位、Bruno TODO、Prototype 路由和英文 Wiki 外部重定向必须被明确处理，不能把空内容或外部跳转伪装成正常页面。由 Task 8 的单元/链接/路由测试覆盖。

---

### Task 1: 建立 Proofline 语义 token 与主题契约

**Files:**
- Modify: `src/styles/base.css`
- Modify: `src/styles/layout.css`
- Modify: `src/layouts/Base.astro`
- Modify: `DESIGN.md`
- Update local ignored design record: `.impeccable/design.json` (synchronize, but do not stage unless repository policy changes)
- Modify: `tests/unit/editorialThemeTokens.test.ts`
- Modify: `tests/unit/zenixDesignTokens.test.ts`
- Modify: `tests/e2e/specs/theme.spec.ts`
- Modify: `tests/e2e/specs/accessibility-contrast.spec.ts`

**Interfaces:**
- Consumes: 现有 `data-theme`、`themePreference`、Shiki light/dark 变量和 Base 的主题脚本。
- Produces: 所有页面可消费的 `--color-base`、`--color-canvas`、`--color-surface`、`--color-surface-elevated`、`--color-main`、`--color-text-secondary`、`--color-text-tertiary`、`--color-border`、`--color-theme`、`--color-theme-focus`、`--color-code-surface` 和布局尺寸 token。

- [ ] **Step 1: 更新失败优先的 token 契约测试**

  在 `editorialThemeTokens.test.ts` 中把旧的 `#f8fafc/#2563eb/#78a9ff` 断言更新为设计规格中的完整 Proofline 色板，并增加浅色/深色背景、表面、主文字、次级文字、边框、代码表面和强调色断言；在 `zenixDesignTokens.test.ts` 中保留兼容别名存在性检查，但改为断言默认 token 不再把紫色 mist、gradient 或 glass/product shadow 作为新表面依据，并扫描新组件的消费路径。

- [ ] **Step 2: 运行单元测试确认旧实现不满足新契约**

  Run: `cd tests && npm run test:unit -- editorialThemeTokens.test.ts zenixDesignTokens.test.ts`

  Expected: FAIL，失败原因应集中在旧色板和旧 glass token 契约，不应出现解析或依赖错误。

- [ ] **Step 3: 实现语义 token 和统一主题色**

  在 `src/styles/base.css` 中替换默认蓝紫色 token，设置设计规格规定的浅色/深色值和 `color-mix` 派生公式；保留必要的兼容变量，但让组件最终只消费语义变量。将 `--transition-base` 从 `all` 改为明确的颜色/边框/阴影/transform 属性组合，增加数字 tabular figures、标题 `text-wrap` 和 Proofline 的半径层级。

- [ ] **Step 4: 同步布局和 Base 的 theme-color**

  在 `src/styles/layout.css` 保证标准内容宽度、gutter 和 reading width 继续由 token 控制；在 `src/layouts/Base.astro` 让初始 meta theme-color 与浅色/深色实际背景一致，并保留现有主题偏好持久化和系统主题监听。

- [ ] **Step 4a: 同步设计事实来源**

  将 `DESIGN.md` 与本地忽略的 `.impeccable/design.json` 更新为同一套 Proofline 色值、语义 token 和兼容别名政策；同时更新其中指向的规格/计划路径。两份文件中的主题名称、主色、画布、表面和文字色不得继续保留旧蓝色事实。`.impeccable/` 当前被 `.gitignore` 忽略，因此只同步本地设计记录，不把它强行加入提交。

- [ ] **Step 5: 运行 token、对比度和主题测试**

  Run: `cd tests && npm run test:unit -- editorialThemeTokens.test.ts zenixDesignTokens.test.ts && npm run test:e2e -- specs/theme.spec.ts specs/accessibility-contrast.spec.ts`

  Expected: PASS；两种主题的背景/文字对比度通过，主题偏好刷新和跨页面保持。

- [ ] **Step 6: Commit**

  ```bash
  git add -- src/styles/base.css src/styles/layout.css src/layouts/Base.astro DESIGN.md tests/unit/editorialThemeTokens.test.ts tests/unit/zenixDesignTokens.test.ts tests/e2e/specs/theme.spec.ts tests/e2e/specs/accessibility-contrast.spec.ts
  git commit -m "style: establish editorial signal theme tokens"
  ```

### Task 2: 统一 Header、Footer、PageHeadline 和全局交互表面

**Files:**
- Modify: `src/components/Header.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/components/PageHeadline.astro`
- Modify: `src/components/TableOfContents.astro`
- Modify: `src/components/PaginationNav.astro`
- Modify: `src/components/SearchModal.astro`
- Modify: `tests/e2e/specs/header.spec.ts`
- Modify: `tests/e2e/specs/footer.spec.ts`
- Modify: `tests/e2e/specs/layout.spec.ts`
- Modify: `tests/e2e/specs/interaction.spec.ts`
- Modify: `tests/e2e/specs/search.spec.ts`

**Interfaces:**
- Consumes: Task 1 的语义 token 和现有导航/页脚链接。
- Produces: 全站统一的顶栏、页脚、标题区、目录和分页表面，不改变任何导航目标。

- [ ] **Step 1: 增加共享 chrome 的视觉契约断言**

  在现有 Header/Footer/layout/interaction 测试中增加：桌面顶栏和移动抽屉使用当前主题 surface；Footer 不出现默认 gradient/blur；PageHeadline 支持 compact 类；所有主题控件有 focus ring；导航 active 状态可见。

- [ ] **Step 2: 运行受影响测试确认新契约未满足**

  Run: `cd tests && npm run test:e2e -- specs/header.spec.ts specs/footer.spec.ts specs/layout.spec.ts specs/interaction.spec.ts`

  Expected: 至少有针对旧表面、旧标题区或旧交互样式的失败；功能性导航断言不能因为测试更新而被删除。

- [ ] **Step 3: 重写 Header 的表面样式而不改导航数据**

  保留现有导航数组、语言面板、搜索、主题切换和移动菜单 DOM/脚本。移除默认玻璃/渐变/过宽 blur，使用中性背景、细底线、青绿色 active/focus 和明确的 mobile drawer 层级；清理移动端推荐 Blog 与普通 Blog 的重复展示。

- [ ] **Step 4: 重组 Footer 的视觉分区**

  保留现有链接、RSS、社交入口、二维码和法律信息，使用内容、导航、社交、法律四个低噪声分区；不引入新的链接或依赖。桌面保持宽内容画布，移动端按订阅/导航/社交/法律顺序堆叠。

- [ ] **Step 5: 为 PageHeadline 增加 compact 密度，并收口目录/分页表面**

  保留现有 title/slot 接口；默认内容页使用标准高度，Archive/Projects/Links/About/Sitemap 等工具页调用 compact 或等效类。TableOfContents、PaginationNav 和通用按钮使用细边框、低圆角、明确属性过渡。

- [ ] **Step 6: 运行共享 chrome 回归测试**

  Run: `cd tests && npm run test:e2e -- specs/header.spec.ts specs/footer.spec.ts specs/layout.spec.ts specs/interaction.spec.ts specs/navigation.spec.ts`

  Expected: PASS；中英文导航目标、移动抽屉、Footer 链接、focus 和 active 状态保持。

- [ ] **Step 7: Commit**

  ```bash
  git add -- src/components/Header.astro src/components/Footer.astro src/components/PageHeadline.astro src/components/TableOfContents.astro src/components/PaginationNav.astro src/components/SearchModal.astro tests/e2e/specs/header.spec.ts tests/e2e/specs/footer.spec.ts tests/e2e/specs/layout.spec.ts tests/e2e/specs/interaction.spec.ts tests/e2e/specs/search.spec.ts
  git commit -m "style: unify editorial signal site chrome"
  ```

### Task 3: 首页与通用集合页面迁移到编辑型模块

**Files:**
- Modify: `src/pages/[lang]/index.astro`
- Modify: `src/components/home/HomeGlassHero.astro`
- Modify: `src/components/home/HomeExploreHub.astro`
- Modify: `src/components/home/HomeCapabilityGuide.astro`
- Modify: `src/components/home/HomeTaskNavigator.astro`
- Modify: `src/components/home/HomeSectionHeading.astro`
- Modify: `src/components/CollectionPostGrid.astro`
- Modify: `src/pages/[lang]/archive/index.astro`
- Modify: `src/pages/[lang]/projects/index.astro`
- Modify: `src/pages/[lang]/resources.astro`
- Modify: `src/pages/[lang]/series/[series].astro`
- Modify: `src/pages/[lang]/tags/[tag].astro`
- Modify: `src/pages/[lang]/about.astro`
- Modify: `src/pages/[lang]/privacy.astro`
- Modify: `src/pages/[lang]/copyright.astro`
- Modify: `src/pages/[lang]/sponsor.astro`
- Modify: `src/pages/[lang]/sitemap.astro`
- Modify: `src/pages/404.astro`
- Modify: `src/pages/en/404.astro`
- Modify: `src/pages/zh-cn/404.astro`
- Modify: `tests/e2e/specs/home.spec.ts`
- Modify: `tests/e2e/specs/editorial-review.spec.ts`
- Modify: `tests/e2e/specs/responsive.spec.ts`
- Create: `tests/e2e/specs/site-pages.spec.ts`

**Interfaces:**
- Consumes: Task 1 的主题 token、Task 2 的 PageHeadline 和共享控件。
- Produces: 首页、列表页和资源入口使用 Proofline 栏目线、指标带和变量卡片，不改变现有 CTA、文章和项目 href。

- [ ] **Step 1: 固定首页和集合页的行为/链接契约**

  扩展现有 Home/editorial/reponsive 测试，断言现有 task、project、resource、post href 数量和目标不变；增加主内容宽度上限、浅色/深色 surface、移动端无横向溢出和首页 Hero 不使用 backdrop-filter 的断言。

- [ ] **Step 2: 运行测试确认现有视觉契约失败**

  Run: `cd tests && npm run test:e2e -- specs/home.spec.ts specs/editorial-review.spec.ts specs/responsive.spec.ts`

  Expected: 视觉契约先失败；链接、内容和可见性契约继续通过。

- [ ] **Step 3: 将 HomeGlassHero 转成 Proofline Hero**

  保留组件名称和传入内容，把玻璃/渐变层替换为强调线、标题、说明、CTA 和可选信号装饰；确保英文长标题使用可伸缩 grid 和平衡换行。

- [ ] **Step 4: 将首页卡片和模块改为信息带/编辑块**

  让 HomeExploreHub、HomeCapabilityGuide、HomeTaskNavigator 和 HomeSectionHeading 使用统一表面、编号、细线和低圆角；减少同质化的浮起卡片，但不改变 task 路由和数据映射。

- [ ] **Step 5: 迁移 Archive、Projects、Resources、Series、Tags、About 的密度与卡片样式**

  将简单页面切换到 compact PageHeadline；Projects/Resources/Series/Tags 使用分组列表或不等高网格，移除不必要的 9999px 标签和 `transition: all`，保留现有筛选、分页和链接。

- [ ] **Step 5a: 迁移法律、站点地图和错误页的共享表面**

  为 Privacy、Copyright、Sponsor、Sitemap 使用 compact PageHeadline 和同一套表面/边框/链接状态；只调整布局与样式，不改法律文本、版权信息、支付/赞助目标或站点地图数据。检查根 404、英文 404 和中文 404 的自动返回提示、手动返回入口、noindex 和移动布局；`SearchModal.astro` 的搜索行为由 Task 2 负责，本任务只验证这些页面能正常使用搜索入口。

- [ ] **Step 6: 验证首页和集合页面**

  Run: `cd tests && npm run test:e2e -- specs/home.spec.ts specs/editorial-review.spec.ts specs/responsive.spec.ts specs/site-pages.spec.ts`

  Expected: 中英文首页、列表、资源、法律/工具页和错误页的现有链接与关键文案保持；375/390/768/1024/1440px 无横向溢出，页面顶部留白收敛。

- [ ] **Step 7: Commit**

  ```bash
  git add -- 'src/pages/[lang]/index.astro' src/components/home src/components/CollectionPostGrid.astro 'src/pages/[lang]/archive' 'src/pages/[lang]/projects' 'src/pages/[lang]/resources.astro' 'src/pages/[lang]/series' 'src/pages/[lang]/tags' 'src/pages/[lang]/about.astro' 'src/pages/[lang]/privacy.astro' 'src/pages/[lang]/copyright.astro' 'src/pages/[lang]/sponsor.astro' 'src/pages/[lang]/sitemap.astro' src/pages/404.astro src/pages/en/404.astro src/pages/zh-cn/404.astro tests/e2e/specs/home.spec.ts tests/e2e/specs/editorial-review.spec.ts tests/e2e/specs/responsive.spec.ts tests/e2e/specs/site-pages.spec.ts
  git commit -m "style: apply editorial signal to content hubs"
  ```

### Task 4: 重构 Wiki / AI Wiki 的索引信息架构

**Files:**
- Modify: `src/pages/[lang]/wiki/index.astro`
- Modify: `src/pages/[lang]/AIWiki/index.astro`
- Modify: `src/components/DocsSidebar.astro`
- Modify: `src/layouts/Docs.astro`
- Modify: `src/pages/[lang]/wiki/[...slug].astro`
- Modify: `src/pages/[lang]/AIWiki/[...slug].astro`
- Modify: `tests/e2e/specs/wiki.spec.ts`
- Modify: `tests/e2e/specs/wiki-search.spec.ts`
- Modify: `tests/e2e/specs/related-terms.spec.ts`
- Modify: `tests/unit/wikiFilter.test.ts`

**Interfaces:**
- Consumes: 现有 Wiki/AI Wiki collection 数据、DocsSidebar 搜索接口、TableOfContents 和现有术语 href。
- Produces: 侧栏承担搜索/分类/当前项，主区域承担术语索引；移动端使用折叠筛选；所有详情链接和搜索行为保持。

- [ ] **Step 1: 增加重复渲染和链接完整性测试**

  在 Wiki/AI Wiki E2E 中记录主区域术语链接数量、侧栏重复项数量、搜索结果、当前项 aria/current 状态和移动端侧栏切换；要求侧栏不再渲染主区域的完整术语集合。

- [ ] **Step 2: 运行测试确认当前重复结构**

  Run: `cd tests && npm run test:e2e -- specs/wiki.spec.ts specs/wiki-search.spec.ts specs/related-terms.spec.ts`

  Expected: 新增的重复项断言在旧结构上失败，现有详情可见性和搜索行为通过。

- [ ] **Step 3: 拆分 Sidebar 的导航职责**

  为 `DocsSidebar` 增加仅搜索/分类/当前项的渲染路径或 props；不要在侧栏重复输出完整 letter group。保留 currentPath、basePath、locale、搜索结果和键盘导航接口。

- [ ] **Step 4: 调整 Wiki / AI Wiki 主索引**

  主区域继续按字母/分类输出完整术语链接，使用 Proofline 的 section heading、编号/计数和细线；侧栏只提供快速定位。两种语言使用同一结构，不改变 slug 和内容数据。

- [ ] **Step 5: 迁移 Docs 共享布局表面但不修改 Docs 内容**

  在 `Docs.astro` 中统一侧栏、正文、TOC 的背景、边框、radius、代码块和移动断点。Docs 内容页面即使继续显示旧模板占位，也只继承主题，不补写内容。

- [ ] **Step 6: 验证 Wiki / AI Wiki**

  Run: `cd tests && npm run test:e2e -- specs/wiki.spec.ts specs/wiki-search.spec.ts specs/related-terms.spec.ts specs/responsive.spec.ts && npm run test:unit -- wikiFilter.test.ts`

  Expected: 中英文代表词条、搜索、相关术语、移动侧栏和现有链接全部通过，重复列表断言通过。

- [ ] **Step 7: Commit**

  ```bash
  git add -- 'src/pages/[lang]/wiki' 'src/pages/[lang]/AIWiki' src/components/DocsSidebar.astro src/layouts/Docs.astro tests/e2e/specs/wiki.spec.ts tests/e2e/specs/wiki-search.spec.ts tests/e2e/specs/related-terms.spec.ts tests/unit/wikiFilter.test.ts
  git commit -m "refactor: simplify wiki editorial navigation"
  ```

### Task 5: 迁移 Blog、Prompts、QA Skills 并修复英文移动端

**Files:**
- Modify: `src/pages/[lang]/blog/index.astro`
- Modify: `src/pages/[lang]/blog/page/[page].astro`
- Modify: `src/pages/[lang]/blog/[...id].astro`
- Modify: `src/pages/[lang]/prompts/index.astro`
- Modify: `src/pages/[lang]/prompts/all/index.astro`
- Modify: `src/pages/[lang]/prompts/[testingType].astro`
- Modify: `src/pages/[lang]/prompts/workflows/[workflowType].astro`
- Modify: `src/pages/[lang]/qaskills/index.astro`
- Modify: `src/pages/[lang]/qaskills/[skillSlug].astro`
- Modify: `src/pages/[lang]/ai-native-qa-weekly/index.astro`
- Modify: `src/pages/[lang]/ai-native-qa-weekly/[...week].astro`
- Modify: `src/components/AiQaWeeklyPage.astro`
- Modify: `src/components/prompts/PromptExamples.astro`
- Modify: `src/components/qaskills/QASkillStarterPaths.astro`
- Modify: `tests/e2e/specs/blog-editorial.spec.ts`
- Modify: `tests/e2e/specs/prompts.spec.ts`
- Modify: `tests/e2e/specs/qaskills.spec.ts`
- Modify: `tests/e2e/specs/responsive.spec.ts`
- Create: `tests/e2e/specs/weekly.spec.ts`

**Interfaces:**
- Consumes: Task 1–4 的 token、PageHeadline、Docs layout、CollectionPostGrid 和现有 prompt/skill 数据。
- Produces: Blog 保持可读正文行宽，1600px 及以上视口的带目录文章采用最多 2160px 页面容器、最多 1200px 正文段落；Prompts/QA Skills 保留任务型筛选与详情结构，英文窄屏标题不被辅助链接挤压。

- [ ] **Step 1: 增加英文长标题和移动断点的回归断言**

  在 `responsive.spec.ts` 或对应页面 spec 中固定 `/en/prompts/all/`、`/en/blog/` 和 `/en/ai-native-qa-weekly/2026/week-39/` 的 390px 测试：标题 bounding box 不应被压缩到异常窄列，选择器文本必须完整或可访问，页面 scrollWidth 不得超过 clientWidth。`weekly.spec.ts` 同时覆盖 Weekly 首页、周刊详情、周期切换、TOC 和中英文入口。

- [ ] **Step 2: 运行回归测试确认当前问题**

  Run: `cd tests && npm run test:e2e -- specs/responsive.spec.ts specs/blog-editorial.spec.ts specs/prompts.spec.ts specs/qaskills.spec.ts`

  Expected: `/en/prompts/all/` 的 header grid 断言在当前双列实现上失败，其他内容行为测试保持可诊断。

- [ ] **Step 3: 修复 Prompts all 的窄屏 header**

  在 `src/pages/[lang]/prompts/all/index.astro` 的 640px 断点将 `.explorer-header` 改为单列，返回链接独立占行，保持筛选按钮、URL 和全部/分类数据不变。

- [ ] **Step 4: 迁移 Blog 精选、正文和 Prompt/QA Skill 表面**

  Blog 精选使用可伸缩 editorial lead；文章正文、TOC、related terms、code/table/callout 使用语义表面。Prompt/QA Skill 列表减少统一三列卡片，详情保留复制、输入输出、变体、生命周期和目录行为；移除 `rgba(79,70,229,...)` 残留。

- [ ] **Step 5: 验证双语内容页**

  Run: `cd tests && npm run test:e2e -- specs/blog-editorial.spec.ts specs/prompts.spec.ts specs/qaskills.spec.ts specs/responsive.spec.ts && npm run test:unit -- blogPagination.test.ts promptsListPage.test.ts promptsDetailPage.test.ts qaskillsFilter.test.ts`

  Expected: 中英文列表/详情、复制、筛选、侧栏、TOC、分页和移动布局通过。

- [ ] **Step 6: Commit**

  ```bash
  git add -- 'src/pages/[lang]/blog' 'src/pages/[lang]/prompts' 'src/pages/[lang]/qaskills' 'src/pages/[lang]/ai-native-qa-weekly/index.astro' 'src/pages/[lang]/ai-native-qa-weekly/[...week].astro' src/components/prompts/PromptExamples.astro src/components/qaskills/QASkillStarterPaths.astro tests/e2e/specs/blog-editorial.spec.ts tests/e2e/specs/prompts.spec.ts tests/e2e/specs/qaskills.spec.ts tests/e2e/specs/responsive.spec.ts tests/e2e/specs/weekly.spec.ts
  git commit -m "style: align editorial content pages"
  ```

### Task 6: 将 Guild 全面迁移到统一主题

**Files:**
- Modify: `src/components/guild/GuildOverviewPage.astro`
- Modify: `src/components/guild/GuildHero.astro`
- Modify: `src/components/guild/GuildFeatures.astro`
- Modify: `src/components/guild/LearningWorkflow.astro`
- Modify: `src/components/guild/TestTypeSection.astro`
- Modify: `src/components/guild/FrameworkCard.astro`
- Modify: `src/components/guild/FrameworkWorkflow.astro`
- Modify: `src/pages/[lang]/guild/[testType]/[framework]/index.astro`
- Modify: `src/pages/[lang]/guild/[...slug].astro`
- Modify: `tests/e2e/specs/guild.spec.ts`
- Modify: `tests/unit/guildContentQuality.test.ts`

**Interfaces:**
- Consumes: Task 1–5 的主题 token、通用 section/card/filter 状态和现有 Guild 配置/内容。
- Produces: Guild 首页、测试类型页、框架页和文章详情共享 Proofline 表面，同时保留学习路径、筛选和外部文档行为。

- [ ] **Step 1: 固定 Guild 行为和统一主题断言**

  扩展 Guild E2E：断言中英文标题、测试类型、统计、筛选、框架跳转、学习路径、外部链接、移动/平板布局不变；增加不使用独立蓝紫/玻璃表面、框架网格不出现孤立最后卡片的检查。

- [ ] **Step 2: 运行 Guild 测试确认基线**

  Run: `cd tests && npm run test:e2e -- specs/guild.spec.ts`

  Expected: 现有功能测试通过；新增统一视觉或网格断言提供待修复失败。

- [ ] **Step 3: 迁移 Guild overview 和测试类型模块**

  将 GuildHero、GuildFeatures、LearningWorkflow、TestTypeSection 的背景、边框、统计和筛选统一为暖白/深炭色 Proofline，不更改 config、data-filter、href 或文案。

- [ ] **Step 4: 迁移框架概述与文章详情**

  统一 `fw-hero`、`FrameworkWorkflow`、学习路径、article card、正文和 TOC；使用可伸缩 grid 解决框架卡片最后一张单独落行，明确替换 `transition: all` 和 9999px 非语义 pill。

- [ ] **Step 5: 验证 Guild**

  Run: `cd tests && npm run test:e2e -- specs/guild.spec.ts specs/responsive.spec.ts && npm run test:unit -- guildContentQuality.test.ts`

  Expected: Guild 全部页面在中英文、移动和平板视口通过，内容质量测试不受样式改动影响。

- [ ] **Step 6: Commit**

  ```bash
  git add -- src/components/guild 'src/pages/[lang]/guild' tests/e2e/specs/guild.spec.ts tests/unit/guildContentQuality.test.ts
  git commit -m "style: move guild to editorial signal theme"
  ```

### Task 7: 将 dsh-qa 与 AI Test Auditor 迁移到统一主题

**Files:**
- Modify: `src/pages/[lang]/dsh-qa/index.astro`
- Modify: `src/pages/[lang]/ai-test-auditor/index.astro`
- Modify: `tests/e2e/specs/dsh-qa.spec.ts`
- Modify: `tests/e2e/specs/responsive.spec.ts`
- Create or modify: `tests/e2e/specs/ai-test-auditor.spec.ts`

**Interfaces:**
- Consumes: Task 1 的主题 token、Task 2 的 Base/Header/Footer 和现有产品数据对象。
- Produces: 两个产品页使用统一 Proofline 主题，保留版本、安装、复制、release、外部链接和双语内容。

- [ ] **Step 1: 添加产品主题和行为契约**

  在现有 dsh-qa E2E 中增加 CSS token/surface 断言：页面与 body 使用相同主题色，不再使用独立 `--dsh-*` 蓝绿背景。为 AI Test Auditor 增加中英文加载、功能区、安装命令、release 展开、外部链接和主题切换断言。

- [ ] **Step 2: 运行产品测试确认视觉契约失败**

  Run: `cd tests && npm run test:e2e -- specs/dsh-qa.spec.ts specs/ai-test-auditor.spec.ts specs/responsive.spec.ts`

  Expected: 现有产品行为通过，独立产品色板断言先失败。

- [ ] **Step 3: 迁移 dsh-qa Hero、命令卡和内容分区**

  保留所有 `data-dsh-*`、命令切换/复制和 release details。将现有独立深色命令卡、蓝色代码色和网格装饰映射到全局 surface/theme/code token；Hero、feature、showcase、flow、install 和 release 使用统一 section/kicker/指标带。

- [ ] **Step 4: 迁移 AI Test Auditor 页面**

  保留 `AI_TEST_AUDITOR_SITE` 数据、安装命令、rules、ecosystem links 和 release details。将 `.auditor-page`、hero panel、feature/rules/install/release 表面改为统一主题，状态色只用于 FAKE/WEAK/UNASSESSED 的语义状态，不作为第二套产品主题。

- [ ] **Step 5: 验证产品页**

  Run: `cd tests && npm run test:e2e -- specs/dsh-qa.spec.ts specs/ai-test-auditor.spec.ts specs/responsive.spec.ts specs/links.spec.ts`

  Expected: 中英文产品页行为、命令复制、release 展开、外部链接和 375/390px 无溢出全部通过。

- [ ] **Step 6: Commit**

  ```bash
  git add -- 'src/pages/[lang]/dsh-qa' 'src/pages/[lang]/ai-test-auditor' tests/e2e/specs/dsh-qa.spec.ts tests/e2e/specs/ai-test-auditor.spec.ts tests/e2e/specs/responsive.spec.ts
  git commit -m "style: unify product pages with editorial signal"
  ```

### Task 8: 收口内容未完成状态与特殊路由治理

**Files:**
- Modify: `src/content/guild/en/api-testing/bruno/introduction.md`
- Modify: `src/content/guild/zh-cn/api-testing/bruno/introduction.md`
- Modify: `src/blog/en/API-Automation-Testing/Introduction_of_bruno.mdx`
- Modify: `src/blog/zh-cn/API-Automation-Testing/Introduction_of_bruno.mdx`
- Modify: `src/pages/[lang]/links.astro`
- Modify: `src/pages/[lang]/qaskills/detail-prototype.astro`
- Modify: `tests/unit/guildContentQuality.test.ts`
- Create: `tests/unit/qaskillsPrototypeIsolation.test.ts`
- Modify: `tests/e2e/specs/links.spec.ts`
- Modify: `tests/e2e/specs/seo.spec.ts`
- Create: `tests/e2e/specs/wiki-redirect.spec.ts`

**Interfaces:**
- Consumes: 现有双语内容、Prototype noindex 标记、链接 inventory 和 SEO assertions。
- Produces: 不再显示多个虚位以待卡片；Bruno TODO 不再暴露为未完成标题；Prototype 明确隔离；英文 Wiki 外部重定向意图有测试/文档边界。

- [ ] **Step 1: 写内容状态和路由契约测试**

  增加单元断言：Bruno 双语页面不含 `---TODO` 标题；Links 页面只渲染真实友链和现有邮件联系入口，不渲染 `href="#"` 占位；Prototype 保持 `noindex,nofollow` 且不进入 `Header.astro`、`Footer.astro`、`src/pages/[lang]/sitemap.astro`、`src/utils/seoUrls.ts`、`src/components/qaskills/RecommendedQASkills.astro`、`src/pages/[lang]/qaskills/index.astro`、`src/components/home/HomeGlassHero.astro`、`src/components/home/HomeCapabilityGuide.astro` 或 `src/components/home/HomeTaskNavigator.astro`；`wiki-redirect.spec.ts` 直接请求 `/en/wiki/acceptance-testing/`，在静态托管约束下断言 200 redirect artifact、meta refresh 和 canonical 均指向 `https://ray.run/wiki#acceptance-testing`。

- [ ] **Step 2: 运行测试确认当前未完成状态**

  Run: `cd tests && npm run test:unit -- guildContentQuality.test.ts qaskillsPrototypeIsolation.test.ts && npm run test:e2e -- specs/links.spec.ts specs/seo.spec.ts specs/wiki-redirect.spec.ts`

  Expected: Bruno/Links 的已知 TODO 与空占位提供可定位失败；Prototype 隔离如果当前已满足可以直接通过，不能为了制造失败而放宽或反转断言；外部 redirect 测试应明确报告静态 200 artifact 的 meta refresh/canonical 目标；现有内容质量测试不因路径错误失败。

- [ ] **Step 3: 收口 Bruno TODO**

  对已有正文的 TODO 标题改成与正文一致的双语描述；没有正文的空章节直接移除或不渲染，不添加未经提供的内容。保持 Blog 与 Guild 的双语结构一致。

- [ ] **Step 4: 收口 Links 和 Prototype**

  Links 页面删除 `friendLinks` 中的空占位数据，只保留现有真实友链；页面已有的邮件说明和 `mailto:dengnao@gmail.com` 作为唯一提交入口，不新增 CTA、路由或外部目标。Prototype 保留标识和 noindex，确认不进入导航、HTML 站点地图、XML sitemap 或推荐数据；不在本任务删除路由。

- [ ] **Step 5: 固化英文 Wiki 外部跳转边界**

  检查并测试 `/en/wiki/acceptance-testing/` 的目标；当前没有本地英文内容，保留 `https://ray.run/wiki#acceptance-testing` 外部目标并确保页面/redirect 语义可理解，不凭主题改造替换 URL。

- [ ] **Step 6: 验证内容/路由治理**

  Run: `cd tests && npm run test:unit -- guildContentQuality.test.ts qaskillsPrototypeIsolation.test.ts && npm run test:e2e -- specs/links.spec.ts specs/seo.spec.ts specs/wiki-redirect.spec.ts`

  Expected: 未完成状态不再出现在正常页面，Prototype/外部重定向边界清晰，现有链接检查通过。

- [ ] **Step 7: Commit**

  ```bash
  git add -- src/content/guild/en/api-testing/bruno/introduction.md src/content/guild/zh-cn/api-testing/bruno/introduction.md src/blog/en/API-Automation-Testing/Introduction_of_bruno.mdx src/blog/zh-cn/API-Automation-Testing/Introduction_of_bruno.mdx 'src/pages/[lang]/links.astro' 'src/pages/[lang]/qaskills/detail-prototype.astro' tests/unit/guildContentQuality.test.ts tests/unit/qaskillsPrototypeIsolation.test.ts tests/e2e/specs/links.spec.ts tests/e2e/specs/seo.spec.ts tests/e2e/specs/wiki-redirect.spec.ts
  git commit -m "content: close incomplete page states"
  ```

### Task 9: 全站收尾、构建验证与视觉采样

**Files:**
- Verify only: files already listed in Tasks 1–8.
- Modify only if Step 1 identifies a real regression in an already listed task file; first add the exact path and reason to that task's `Files` section.
- Do not use an unbounded `remaining scoped declarations` bucket, and do not modify `src/content/docs/`, `dist/`, `node_modules/`, generated reports or unrelated user files.

**Interfaces:**
- Consumes: Tasks 1–8 的主题 token、组件接口、路由和测试契约。
- Produces: 可构建、可预览、无明显横向溢出、双语和明暗主题一致的全站结果。

- [ ] **Step 1: 扫描残留旧视觉和未覆盖 transition**

  Run: `rg -n -- "color-glass|color-mist|gradient-theme|backdrop-filter|transition: all|rgba\\(79,70,229|border-radius: 999" src/styles src/components src/layouts 'src/pages/[lang]'`

  对每个结果判断是否是 reduced-motion、代码示例、兼容别名或语义状态例外；清理默认页面表面的旧视觉，不为了形式删除合法状态颜色。每个需要修改的结果必须归入 Tasks 1–8 的已列路径，并在对应任务中记录；没有任务归属的结果只能记录为后续工作，不能在 Task 9 直接扩展范围。

- [ ] **Step 2: 执行静态检查和单元测试**

  Run: `git diff --check && npm test && npm run seo:check && npm run wiki:style:check && npm run wiki:integrity:check`

  Expected: 全部通过；如失败，区分本轮回归与仓库既有问题，不降低断言。

- [ ] **Step 3: 执行构建和完整 E2E**

  Run: `npm run build && cd tests && npm run test:e2e`

  Expected: Astro check/build/SEO build gate 和完整 E2E 通过。

- [ ] **Step 4: 在精确构建预览中做视觉采样**

  使用构建后的 preview 检查中英文首页、Blog、Wiki、AI Wiki、Prompts、QA Skills、Guild、dsh-qa、AI Test Auditor、Weekly、Links、404；覆盖 375/390/768/1024/1440px 和浅色/深色。确认没有主题孤岛、标题截断、横向溢出、不可点击控件或异常空白。

- [ ] **Step 5: 检查 Git 范围和最终状态**

  Run: `git status --short --branch && git diff --name-only && git diff --cached --name-only`

  确认只包含本计划范围内的源码、测试和规格/计划文件；不包含 Docs 内容、dist、node_modules、测试产物或其他用户改动。对每个提交先执行 `git diff --cached --name-only`，发现无关路径立即取消暂存并保留原工作区内容。

- [ ] **Step 6: 结束 Task 9，不新增宽泛提交**

  Task 1–8 的变更已纳入 PR #120，并按 review 批次提交，不要求一任务一提交。Task 9 负责验证和视觉采样；发现真实回归时，可在对应源码与测试上做精确修复，并作为独立 review-fix 提交推送到同一 PR。每次提交前核对精确暂存路径；禁止用 `git add src tests` 兜底。

## Self-review 记录

- **Spec coverage:** 主题 token 在 Task 1；共享 chrome 和 PageHeadline 在 Task 2；首页与通用页面在 Task 3；Wiki/AI Wiki 在 Task 4；Blog/Prompts/QA Skills 和英文移动端在 Task 5；Guild 在 Task 6；dsh-qa/AI Test Auditor 在 Task 7；Bruno/Links/Prototype/外部重定向在 Task 8；全站验证在 Task 9。Docs 排除项在每个涉及 Docs 的任务中明确保留。
- **Review remediation:** 已将 `DESIGN.md` 与本地忽略的 `.impeccable/design.json` 纳入 Task 1 同步；颜色、派生 token 和 legacy alias policy 与规格对齐；Privacy/Copyright/Sponsor/Sitemap、三种 404、SearchModal、Weekly 首页/详情均有明确任务与专项验收；Links 固定为隐藏空占位并保留现有邮件入口；Prototype 隔离和英文 Wiki 外部重定向均绑定到具体源码与测试文件。
- **Step scan:** 每个任务按契约测试、失败验证、实现、通过验证、提交拆分；没有要求实现者自行决定未定义的接口或凭空添加内容。
- **Type consistency:** 任务间只通过 CSS semantic token、现有 Astro props/data attributes、现有页面数据对象和既有测试 selector 连接；没有新增跨任务的未定义函数接口。
- **Review Focus:** 五类高风险输入已分别绑定 Task 1、Task 4/5/9、Task 4、Task 6/7、Task 8 的测试。
- **Proportion:** 计划覆盖多个页面族，但每个任务只处理一个可验证的主题/结构边界；没有引入框架迁移或无关重构。

## Review 修正记录（2026-09-29）

- Standards P1：设计事实来源现在由 `DESIGN.md`、`.impeccable/design.json`、本规格和本计划共同同步，颜色和兼容 token policy 已写成可测试契约。
- Standards P1：legacy glass/mist/gradient/shadow 变量允许作为迁移别名保留；计划只禁止新组件消费它们，不再要求无条件删除。
- Standards P1：所有 commit 示例改为 `git add --` 精确路径；Task 9 明确禁止宽泛暂存，并要求先检查 cached path。
- Spec P1：页面覆盖矩阵补齐了法律/工具/错误页、SearchModal、Weekly 和专项测试映射。
- Spec P1：色板、次级文字、边框、代码表面、focus 和 theme-soft 派生公式全部明确。
- Spec P1：Links 行为固定为隐藏空占位，沿用现有邮件联系入口，不新增目标。
- Spec P1：Prototype 隔离增加具体入口源码清单与 `qaskillsPrototypeIsolation.test.ts`；英文 Wiki redirect 增加固定目标和静态 200 artifact 测试。
- Spec P2：英文 Wiki redirect 不再依赖同源链接扫描，使用独立 `wiki-redirect.spec.ts`。
