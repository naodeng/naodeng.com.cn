# Implementation Plan: QA Prompts

## Overview

在现有 Astro 5 静态博客中新增「QA 提示词库」功能区。按以下顺序实现：内容 collection 定义 → 内容文件迁移 → 列表页 → 详情页（测试类型）→ 工作流程详情页 → 导航集成 → 搜索集成。

## Tasks

- [x] 1. 定义 content collections 并迁移内容文件
  - [x] 1.1 在 `src/content.config.ts` 中新增 `prompts` 和 `workflows` 两个 collection 的 schema 定义
    - `prompts` collection：`title`, `description`, `testingType`（15 个枚举值）, `promptVersion`（Standard/ROSES/LangGPT/ICIO/CRISPE/RISE）, `lang`（en/zh-cn）, `order`（number）
    - `workflows` collection：`title`, `description`, `workflowType`（daily/sprint/release）, `lang`（en/zh-cn）, `order`（number）
    - loader 使用 `glob`，路径分别为 `./src/content/prompts` 和 `./src/content/workflows`
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 1.2 将 `temp/testing-types/` 下的 Markdown 文件迁移至 `src/content/prompts/[lang]/[testingType]/[promptVersion].md`
    - 为每个文件补充符合 schema 的 frontmatter（title, description, testingType, promptVersion, lang, order）
    - 中文文件（无 `_EN` 后缀）放入 `zh-cn/` 目录，英文文件（`_EN` 后缀）放入 `en/` 目录
    - 忽略 `_Lite` 变体文件（不在 promptVersion 枚举中）
    - _Requirements: 1.4_

  - [x] 1.3 将 `temp/workflows/` 下的 Markdown 文件迁移至 `src/content/workflows/[lang]/[workflowType].md`
    - 为每个文件补充符合 schema 的 frontmatter（title, description, workflowType, lang, order）
    - `_CN.md` → `zh-cn/`，`_EN.md` → `en/`
    - _Requirements: 1.5_

- [x] 2. 新增 i18n 常量
  - [x] 2.1 在 `src/consts.ts` 中新增 QA Prompts 功能区所需的所有 `Multilingual` 常量
    - `NAV_QA_PROMPTS`：导航标签（"QA Prompts" / "提示词库"）
    - `PROMPTS_PAGE_TITLE`、`PROMPTS_PAGE_DESCRIPTION`：列表页 SEO
    - `PROMPTS_WORKFLOWS_SECTION_TITLE`：工作流程区块标题
    - `PROMPTS_COPY_BUTTON`、`PROMPTS_COPY_SUCCESS`：复制按钮文案
    - `PROMPTS_EMPTY_STATE`：无内容时的占位文案
    - _Requirements: 7.1, 2.6, 5.2_

- [x] 3. 实现提示词列表页
  - [x] 3.1 创建 `src/pages/[lang]/prompts/index.astro`
    - 实现 `getStaticPaths()` 返回 `en` 和 `zh-cn` 两个路由
    - 从 `prompts` collection 查询当前 locale 的所有条目，按 `testingType` 分组，每组取第一条用于卡片展示
    - 从 `workflows` collection 查询当前 locale 的所有条目
    - 使用 `Base.astro` 或合适的 layout，传入 `PROMPTS_PAGE_TITLE` 和 `PROMPTS_PAGE_DESCRIPTION` 作为 SEO meta
    - 渲染 15 个测试类型卡片（title、description、链接至 `/[lang]/prompts/[testingType]/`）
    - 渲染工作流程区块（3 个 workflow 卡片，链接至 `/[lang]/prompts/workflows/[workflowType]/`）
    - 使用 `useTranslations(lang)` 解析所有 UI 字符串
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 7.1, 7.2, 8.1_

  - [x] 3.2 为列表页编写 Vitest 单元测试
    - 测试 `getStaticPaths()` 返回正好 2 条路由（en、zh-cn）
    - _Requirements: 2.1, 8.1_

- [x] 4. 实现提示词详情页（测试类型 Tab 切换）
  - [x] 4.1 创建 `src/pages/[lang]/prompts/[testingType].astro`
    - 实现 `getStaticPaths()`：遍历 `prompts` collection，按 `[lang, testingType]` 组合去重，生成 30 条路由（15 类型 × 2 语言）
    - 每条路由的 props 包含该 testingType + lang 下的所有 prompt 条目（按 `order` 排序）
    - 使用 `render()` 将每个条目的 Markdown 渲染为 HTML
    - 渲染 Tab 控件：仅展示有内容的 promptVersion；默认激活第一个 Tab
    - 第一个 Tab 的内容以静态 HTML 渲染（SSG 兼容，JS 禁用时可见）；其余 Tab 内容以 `hidden` 属性隐藏
    - 实现 Tab 切换的客户端 `<script>`（点击 Tab → 切换 `hidden` 属性，无页面刷新）
    - 渲染复制按钮，点击后将当前 Tab 的原始 Markdown 文本写入剪贴板，并在 1500ms 内显示确认状态
    - 渲染 `ArticleShare` 组件（传入 canonical URL、localized title、locale）
    - 渲染 `GoogleAd` 组件（位于内容区与 ArticleShare 之间）
    - 渲染 `Giscus` 组件（位于 ArticleShare 之后，传入 lang、inputPosition="bottom"、loading="lazy"）
    - 使用 `useTranslations(lang)` 解析所有 UI 字符串
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 7.1, 7.2, 7.3, 7.4, 8.1, 8.2, 8.4, 9.1, 9.3, 9.4, 9.5, 10.1, 10.3, 10.4, 10.5, 11.1_

  - [x] 4.2 为 `getStaticPaths()` 编写属性测试
    - **Property 1: 路由完整性** — 对任意有效的 testingType × lang 组合，`getStaticPaths()` 必须包含对应路由
    - **Validates: Requirements 3.1, 8.1**

  - [x] 4.3 为 Tab 切换逻辑编写单元测试
    - 测试：点击非激活 Tab 后，对应内容区 `hidden` 属性被移除，其余内容区 `hidden` 属性被添加
    - 测试：JS 禁用时（所有 Tab 内容均渲染在 DOM 中，第一个无 `hidden`）
    - _Requirements: 3.3, 8.4_

  - [x] 4.4 为复制按钮编写单元测试
    - 测试：点击后 `navigator.clipboard.writeText` 被调用，按钮文案在 1500ms 内变为确认状态
    - _Requirements: 3.6, 3.7_

- [x] 5. 实现工作流程详情页
  - [x] 5.1 创建 `src/pages/[lang]/prompts/workflows/[workflowType].astro`
    - 实现 `getStaticPaths()`：遍历 `workflows` collection，生成 6 条路由（3 类型 × 2 语言）
    - 使用 `render()` 将 Markdown 渲染为 HTML
    - 渲染 workflow 的 title 和 description 作为页面 header
    - 设置 `<title>` 和 `<meta name="description">` 来自 frontmatter
    - 渲染 `ArticleShare` 组件（传入 canonical URL、localized title、locale）
    - 渲染 `GoogleAd` 组件（位于内容区与 ArticleShare 之间）
    - 渲染 `Giscus` 组件（位于 ArticleShare 之后，传入 lang、inputPosition="bottom"、loading="lazy"）
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 9.2, 9.3, 9.4, 9.5, 10.2, 10.3, 10.4, 10.5, 11.2_

  - [x] 5.2 为 `getStaticPaths()` 编写属性测试
    - **Property 2: 工作流程路由完整性** — 对任意有效的 workflowType × lang 组合，`getStaticPaths()` 必须包含对应路由
    - **Validates: Requirements 4.1, 8.1**

- [x] 6. Checkpoint — 确认静态生成正常
  - 运行 `npm run build`，确认所有 prompts 和 workflows 路由均生成静态 HTML，无构建错误
  - 确认 `astro check` 无类型错误
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. 集成顶部导航
  - [x] 7.1 在 `src/components/Header.astro` 中新增 QA Prompts 导航项
    - 导入 `NAV_QA_PROMPTS` 常量
    - 新增 `isPromptsSection()` helper（匹配 `/prompts` 及其子路径）
    - 在导航列表中插入链接，指向 `getRelativeLocaleUrl(locale, "/prompts")`，active 状态使用 `isPromptsSection()`
    - _Requirements: 5.1, 5.2, 5.3_

- [x] 8. 集成站内搜索索引
  - [x] 8.1 修改 `src/pages/[lang]/search-index.json.ts`，将 prompts 和 workflows 页面加入索引
    - 从 `prompts` collection 查询当前 locale 条目，按 testingType 去重，每个 testingType 生成一条索引项（url: `/[lang]/prompts/[testingType]/`，title、description 来自该 testingType 的第一条条目）
    - 从 `workflows` collection 查询当前 locale 条目，每条生成一条索引项（url: `/[lang]/prompts/workflows/[workflowType]/`）
    - 索引项 `type` 字段设为 `"prompts"` 和 `"workflows"`，遵循现有 `SearchIndexItem` schema
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [x] 8.2 为搜索索引生成逻辑编写属性测试
    - **Property 3: 搜索索引覆盖完整性** — 对任意 locale，索引中必须包含所有 testingType 详情页和所有 workflowType 详情页的条目
    - **Validates: Requirements 6.1, 6.2**

- [x] 9. Final Checkpoint — 全量验证
  - 运行 `npm run build`，确认无构建错误
  - 确认导航在两个 locale 下均正确显示 QA Prompts 链接及 active 状态
  - 确认搜索索引包含 prompts 和 workflows 条目
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- 标有 `*` 的子任务为可选测试任务，可跳过以加快 MVP 交付
- 每个任务均引用具体需求条款以保证可追溯性
- Property tests 使用 Vitest + fast-check（`tests/unit/` 目录）
- Tab 切换和复制按钮均为纯客户端 `<script>`，不依赖任何框架，保持 SSG 兼容
- `GoogleAd` 和 `SidebarAd` 在 `import.meta.env.DEV` 为 true 时不渲染广告标记（由组件自身处理）
- `Giscus` 在环境变量未配置时不渲染（由组件自身处理）
- 列表页（`/[lang]/prompts/`）不渲染 `SidebarAd`（无 TOC 侧栏）
