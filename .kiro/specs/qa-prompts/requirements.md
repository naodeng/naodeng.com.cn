# Requirements Document

## Introduction

本功能在现有 Astro 5 静态博客站点（inaodeng.com）中新增「QA 提示词库」（QA Prompts）功能区。内容来源于 `/temp` 目录下已整理好的 15 个测试类型 × 6 种提示词框架版本 × 中英双语的 Markdown 文件，以及 3 种测试工作流程文档。

功能区包含两类页面：
1. **提示词列表页**（`/[lang]/prompts/`）：展示所有测试类型卡片 + 工作流程入口
2. **提示词详情页**（`/[lang]/prompts/[type]/`）：展示某测试类型下所有框架版本的提示词内容，支持 Tab 切换

该功能需融入现有 i18n 体系、顶部导航、站内搜索，并遵循现有 content collection 模式。

---

## Glossary

- **Prompts_Page**: QA 提示词库功能区，包含列表页与详情页
- **Testing_Type**: 15 个测试类型之一（如 requirements-analysis、api-testing 等），对应 `temp/testing-types/` 下的子目录
- **Prompt_Version**: 同一测试类型下的提示词框架变体（Standard、ROSES、LangGPT、ICIO、CRISPE、RISE）
- **Workflow**: 测试工作流程文档（daily、sprint、release），来源于 `temp/workflows/`
- **Content_Collection**: Astro content collection，用于管理结构化 Markdown 内容
- **Lang**: 语言标识符，取值为 `en` 或 `zh-cn`
- **Nav**: 顶部导航栏组件
- **Search_Index**: 站内搜索索引，现有实现为 `/[lang]/search-index.json`
- **Tab**: 详情页中用于切换不同 Prompt_Version 的 UI 控件
- **i18n**: 国际化，所有用户可见字符串通过 `src/consts.ts` 的 `Multilingual` 对象管理

---

## Requirements

### Requirement 1: 提示词内容 Collection

**User Story:** As a developer, I want to manage QA prompt content via Astro content collections, so that prompts are type-safe, queryable, and consistent with the existing content architecture.

#### Acceptance Criteria

1. THE Content_Collection SHALL define a `prompts` collection with the following required frontmatter fields: `title` (string), `description` (string), `testingType` (enum of 15 types), `promptVersion` (enum: Standard, ROSES, LangGPT, ICIO, CRISPE, RISE), `lang` (enum: en, zh-cn), `order` (number).
2. THE Content_Collection SHALL define a `workflows` collection with required frontmatter fields: `title` (string), `description` (string), `workflowType` (enum: daily, sprint, release), `lang` (enum: en, zh-cn), `order` (number).
3. WHEN the Astro build runs, THE Content_Collection SHALL validate all prompt Markdown files against the defined schema and report errors for any non-conforming files.
4. THE Content_Collection SHALL store prompt files under `src/content/prompts/` organized by `[lang]/[testingType]/[promptVersion].md`.
5. THE Content_Collection SHALL store workflow files under `src/content/workflows/` organized by `[lang]/[workflowType].md`.

---

### Requirement 2: 提示词列表页

**User Story:** As a QA engineer, I want to browse all testing type prompt cards on a single page, so that I can quickly find the prompt category I need.

#### Acceptance Criteria

1. THE Prompts_Page SHALL be accessible at the route `/[lang]/prompts/` for both `en` and `zh-cn` locales.
2. THE Prompts_Page SHALL render one card per Testing_Type (15 cards total), each displaying the type's localized title, description, and a link to its detail page.
3. THE Prompts_Page SHALL render a Workflow section displaying the 3 workflow types (daily, sprint, release) with localized titles and links to their respective detail pages.
4. WHEN a user navigates to `/en/prompts/`, THE Prompts_Page SHALL display all content in English.
5. WHEN a user navigates to `/zh-cn/prompts/`, THE Prompts_Page SHALL display all content in Simplified Chinese.
6. THE Prompts_Page SHALL include a `<title>` and `<meta name="description">` tag populated from `src/consts.ts` Multilingual constants.

---

### Requirement 3: 提示词详情页（测试类型）

**User Story:** As a QA engineer, I want to view all prompt framework versions for a specific testing type on one page with tab switching, so that I can compare and copy the version that best fits my workflow.

#### Acceptance Criteria

1. THE Prompts_Page SHALL generate a detail page at `/[lang]/prompts/[testingType]/` for each of the 15 Testing_Types in both locales (30 pages total).
2. THE Prompts_Page SHALL render a Tab control listing all available Prompt_Versions for the current Testing_Type and Lang.
3. WHEN a user clicks a Tab, THE Prompts_Page SHALL display the Markdown content of the corresponding Prompt_Version without a full page reload.
4. THE Prompts_Page SHALL render the active tab's Markdown content as formatted HTML (headings, code blocks, lists).
5. IF a Testing_Type has no prompt content for a given Prompt_Version in the current Lang, THEN THE Prompts_Page SHALL not render a Tab for that version.
6. THE Prompts_Page SHALL include a copy-to-clipboard button for the active tab's raw prompt text.
7. WHEN the copy button is clicked, THE Prompts_Page SHALL provide visual feedback (e.g., button label changes to a confirmation state) for at least 1500ms.

---

### Requirement 4: 工作流程详情页

**User Story:** As a QA engineer, I want to read the full workflow guide for daily, sprint, or release testing, so that I can apply structured testing workflows in my team.

#### Acceptance Criteria

1. THE Prompts_Page SHALL generate a workflow detail page at `/[lang]/prompts/workflows/[workflowType]/` for each of the 3 Workflow types in both locales (6 pages total).
2. THE Prompts_Page SHALL render the full Markdown content of the Workflow as formatted HTML.
3. THE Prompts_Page SHALL display the workflow's localized title and description in the page header.
4. THE Prompts_Page SHALL include a `<title>` and `<meta name="description">` tag derived from the workflow's frontmatter.

---

### Requirement 5: 顶部导航集成

**User Story:** As a site visitor, I want to access the QA Prompts section from the top navigation bar, so that I can discover and reach the feature from any page.

#### Acceptance Criteria

1. THE Nav SHALL include a "QA Prompts" / "提示词库" navigation item linking to `/[lang]/prompts/` for both locales.
2. THE Nav navigation item label SHALL be defined as a `Multilingual` constant in `src/consts.ts` (e.g., `NAV_QA_PROMPTS`).
3. WHEN the current page URL matches `/[lang]/prompts/` or any sub-path, THE Nav SHALL apply an active/current visual state to the "QA Prompts" item.

---

### Requirement 6: 站内搜索集成

**User Story:** As a site visitor, I want to search for QA prompt content using the existing site search, so that I can find relevant prompts without manually browsing all categories.

#### Acceptance Criteria

1. THE Search_Index SHALL include an entry for each Testing_Type detail page, containing the page URL, localized title, and description.
2. THE Search_Index SHALL include an entry for each Workflow detail page, containing the page URL, localized title, and description.
3. WHEN a user searches for a term matching a prompt title or description, THE Search_Index SHALL return the corresponding prompt page as a result.
4. THE Search_Index SHALL follow the existing `search-index.json` schema used by the current Algolia/local search implementation.

---

### Requirement 7: 双语支持（i18n）

**User Story:** As a bilingual user, I want all QA Prompts UI text to be available in both English and Simplified Chinese, so that the feature is consistent with the rest of the site.

#### Acceptance Criteria

1. THE Prompts_Page SHALL resolve all user-visible UI strings (page titles, section headings, button labels, empty states) from `Multilingual` constants defined in `src/consts.ts`.
2. THE Prompts_Page SHALL use `useTranslations(lang)` from `src/i18n.ts` to resolve locale-specific strings in all components and pages.
3. WHEN the locale is `en`, THE Prompts_Page SHALL display English prompt content (files with `_EN` suffix or `lang: en` frontmatter).
4. WHEN the locale is `zh-cn`, THE Prompts_Page SHALL display Chinese prompt content (files without `_EN` suffix or `lang: zh-cn` frontmatter).
5. THE Prompts_Page SHALL include a locale switcher link consistent with the existing locale switcher pattern used across the site.

---

### Requirement 8: 静态生成（SSG）兼容性

**User Story:** As a site operator, I want the QA Prompts pages to be fully statically generated at build time, so that they are served from the CDN edge with no runtime server dependency.

#### Acceptance Criteria

1. THE Prompts_Page SHALL export a `getStaticPaths()` function that generates all routes at build time for both locales.
2. WHEN `npm run build` is executed, THE Prompts_Page SHALL produce static HTML files for all prompt and workflow routes with no dynamic server-side rendering.
3. THE Prompts_Page SHALL not introduce any server-side runtime dependencies (no SSR adapters, no API routes with dynamic logic).
4. IF JavaScript is disabled in the browser, THEN THE Prompts_Page SHALL still render the default (first) tab's content as static HTML, ensuring content is accessible without JS.

---

### Requirement 9: 分享功能集成

**User Story:** As a site visitor, I want to share a prompt detail page or workflow detail page via social platforms or copy the link, so that I can spread useful QA prompts with my team.

#### Acceptance Criteria

1. THE Prompts_Page SHALL render the `ArticleShare` component on each prompt detail page (`/[lang]/prompts/[testingType]/`) below the main content area.
2. THE Prompts_Page SHALL render the `ArticleShare` component on each workflow detail page (`/[lang]/prompts/workflows/[workflowType]/`) below the main content area.
3. WHEN the `ArticleShare` component is rendered, THE Prompts_Page SHALL pass the page's canonical URL and localized title as props.
4. WHEN the locale is `zh-cn`, THE Prompts_Page SHALL pass `locale="zh-cn"` to the `ArticleShare` component so that Weibo sharing is enabled and labels are in Chinese.
5. WHEN the locale is `en`, THE Prompts_Page SHALL pass `locale="en"` to the `ArticleShare` component so that Weibo sharing is hidden and labels are in English.

---

### Requirement 10: 评论功能集成（Giscus）

**User Story:** As a site visitor, I want to leave comments on prompt detail pages and workflow detail pages, so that I can discuss and give feedback on QA prompts with the community.

#### Acceptance Criteria

1. THE Prompts_Page SHALL render the `Giscus` component on each prompt detail page (`/[lang]/prompts/[testingType]/`) below the `ArticleShare` component.
2. THE Prompts_Page SHALL render the `Giscus` component on each workflow detail page (`/[lang]/prompts/workflows/[workflowType]/`) below the `ArticleShare` component.
3. WHEN the locale is `zh-cn`, THE Prompts_Page SHALL pass `lang="zh-CN"` to the `Giscus` component.
4. WHEN the locale is `en`, THE Prompts_Page SHALL pass `lang="en"` to the `Giscus` component.
5. THE Prompts_Page SHALL pass `inputPosition="bottom"` and `loading="lazy"` to the `Giscus` component on all prompt and workflow detail pages.
6. IF the required Giscus environment variables (`PUBLIC_GISCUS_REPO`, `PUBLIC_GISCUS_REPO_ID`, `PUBLIC_GISCUS_CATEGORY`, `PUBLIC_GISCUS_CATEGORY_ID`) are not set, THEN THE `Giscus` component SHALL not render, and the page SHALL remain functional without comments.

---

### Requirement 11: 广告集成

**User Story:** As a site operator, I want ads to be displayed on prompt and workflow detail pages in designated positions, so that the site can generate revenue while maintaining a good reading experience.

#### Acceptance Criteria

1. THE Prompts_Page SHALL render the `GoogleAd` component on each prompt detail page (`/[lang]/prompts/[testingType]/`) between the main content area and the `ArticleShare` component (i.e., above the share section and comments).
2. THE Prompts_Page SHALL render the `GoogleAd` component on each workflow detail page (`/[lang]/prompts/workflows/[workflowType]/`) between the main content area and the `ArticleShare` component.
3. WHERE a sidebar is present on prompt or workflow detail pages, THE Prompts_Page SHALL render the `SidebarAd` component in the sidebar below the Table of Contents component.
4. IF the current environment is development (`import.meta.env.DEV` is true), THEN THE `GoogleAd` and `SidebarAd` components SHALL not render any ad markup, ensuring a clean development experience.
5. THE Prompts_Page SHALL not render the `SidebarAd` component on the prompts list page (`/[lang]/prompts/`), as that page does not have a TOC sidebar.
