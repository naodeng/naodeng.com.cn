# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

主要读者是**中英文的软件开发者与测试者**（两者并重，不分主次）。他们需要体系化、可检索、可引用的技术参考内容，主题集中在软件测试、自动化、开发实践、AI 应用与工作流等。

作者与维护者：Nao Deng（GitHub @naodeng），同时也是内容生产者。

## Product Purpose

一个**双语技术知识库 / 参考中心**。它把作者在软件测试、自动化、开发实践等主题上的知识组织成可长期沉淀、可搜索、可引用、可继续维护的内容体系，而非一次性博客文章。

成功标准：内容长期可被发现、可被检索 / 归档 / 引用，且维护成本可控。

## Positioning

与普通个人博客不同，它用成体系的多内容支柱（Blog、Docs、Wiki、AI Wiki、Guild、Prompts、Workflows、QA Skills）承载知识，双语（en / zh-cn）对等覆盖。相邻产品难以复制的机制是：长期稳定维护的双语、结构化、可校验的内容工程（含自动化测试、SEO / 完整性检查、内容生成脚本）。

## Operating Context

- 内容形态：Blog 用 MDX，其余多数为 Markdown，按 en / zh-cn 分目录组织。
- 技术栈：Astro + MDX + TypeScript；部署在 Cloudflare Workers（边缘）与 GitHub Pages；CI 用 GitHub Actions。
- 阅读与互动：本地索引搜索、Giscus（GitHub 评论）、Google Analytics。
- 质量保障：Playwright E2E、SEO 静态检查、Wiki 样式与完整性检查，以及封面 / 相关推荐等生成脚本。
- 变现：站点含广告位（近期把正文内广告移到页尾的持久 footer 插槽）。
- 双语约定：站点语言路径为 en 与 zh-cn，页面 / 导航 / 内容需两边可达，无对译时需明确说明。

## Capabilities and Constraints

- 内容支柱（用户确认的必保约束）：Blog / Docs / Wiki（测试百科）/ AI Wiki / Guild / Prompts / Workflows / QA Skills 都要保持可达。
- 双语：en 与 zh-cn 路径、内容、导航保持一致。
- 许可：CC BY-NC-SA 4.0（署名 - 非商业 - 相同方式共享）。
- 技术约束：Node.js ≥ 22.12、npm 10+、包管理用 npm（不换 pnpm / yarn）。
- 未决事项：README 中残留一处 "MIT 许可证" 字样，与 CC BY-NC-SA 4.0 矛盾，待确认后清理。

## Brand Commitments

- 名称："Nao's Blog"，主站 https://inaodeng.com。
- 作者署名：Nao Deng（GitHub @naodeng）。
- 许可与署名要求：CC BY-NC-SA 4.0（需署名、非商业、相同方式共享；商业使用需单独授权）。

## Evidence on Hand

- 已部署站点 https://inaodeng.com，以及仓库内双语内容（各内容支柱均有 en / zh-cn 或中文主体内容）。
- 真实的自动化测试与检查脚本（tests/、scripts/）。
- 未来工作不得编造：客户、证言、基准数据、价格、部署声明等。

## Product Principles

1. 双语对等 — en 与 zh-cn 路径、内容、导航保持一致，无对译时明确说明。
2. 长期可维护 — 内容适合搜索、归档、引用与继续维护，优先复用现有组件与脚本。
3. 内容支柱完整 — Blog / Wiki / AI Wiki / Guild / Prompts / Workflows / QA Skills 始终可达。
4. 质量可校验 — 改动有自动化测试与检查（构建、E2E、SEO、Wiki 完整性）兜底。
