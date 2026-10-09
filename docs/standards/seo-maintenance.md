# SEO 维护指南

新增内容、调整栏目、修改双语路由或排查搜索收录问题时使用。优化覆盖博客、测试百科、AI 百科、自动化指南、QA Skills、提示词、工作流、周刊及作者与项目页面。

## 开始与验证

先查看 `git status --short --branch`，确认本轮范围和已有修改。源码检查、构建输出、线上状态和搜索表现分别记录，不互相代替。

```bash
npm test
npm run seo:check:strict
npm run build
cd tests
npx playwright test e2e/specs/seo.spec.ts e2e/specs/seo-integrity.spec.ts
```

`npm run build` 包含 `seo:build:check`，检查所有生成内容页和 sitemap index 声明的分片。已有构建可单独运行 `npm run seo:build:check`，但源码改动后应重新构建。

`seo:check` 的源码范围是博客和两个百科；构建检查覆盖全站，二者都要看。源码中的摘要长度提示属于人工评估项，不能仅因超过 155 字就认定搜索摘要无效。`docs/temporary/seo/` 是生成输出，运行前保留已有报告修改，交付时避免混入无关重生成内容。

## 发布前规则

- 每个可收录页面的 canonical 指向自己的 HTTPS 正式地址，分页保留各自地址、标题和摘要。
- hreflang 只连接实际存在、可收录且互相返回的等价内容。没有对译时，语言切换可以回到栏目入口，但该入口不能伪装成对译。
- 中文测试百科只声明中文版本；英文 Wiki 是历史跳转入口。原型、空列表和兼容旧地址继续按现有 noindex 规则处理。
- XML sitemap 的语言链接从 HTML 读取，包含同一组真实版本与默认入口，避免再次按文件名猜测译文地址。
- 页面结构化数据使用真实标题、摘要、语言和 canonical。站点介绍保持稳定，文章发布时间与修改时间来自内容，不用构建时间冒充更新日期。
- 保留 BlogPosting、Article、TechArticle、DefinedTerm 和内容目录的实际含义。没有真实问答、评价或业务数据时，不添加相应标记。
- JSON-LD 通过统一序列化函数输出，避免正文中的特殊文本截断 script 元素。构建检查验证解析与关键字段；富媒体结果仍需上线后单独检查。
- 标题和摘要先回答页面能帮助读者完成什么，再自然包含主题词。内容更新保持中英文等价，并检查桌面和移动端入口。

## 内容与搜索意图

以下是基于本站已有内容的候选方向，没有搜索量或排名数据。先完善已有页面的答案、示例与相关链接，再根据 Search Console 数据决定是否新增专题，避免多页重复争夺同一问题。

| 内容入口 | 中文候选主题 | 英文候选主题 | 丰富内容的重点 |
| --- | --- | --- | --- |
| `/[lang]/` | 软件测试资源、AI 测试实践 | software testing resources, AI testing | 让读者能进入文章、工具指南、百科、Skills 与提示词 |
| `/[lang]/blog/` | 测试设计、AI 辅助测试、质量分析 | test design, AI assisted testing, quality analysis | 补真实问题、输入输出、工程示例与适用边界 |
| `/zh-cn/wiki/` | 软件测试术语、测试用例、测试方法 | 英文词条只作中文内容的术语对照 | 定义清楚，方法可比较，词条之间的链接确有关系 |
| `/[lang]/AIWiki/` | AI 智能体、模型评估、AI 工程概念 | AI agents, agent evals, AI engineering glossary | 解释术语、典型场景及与测试工作的联系 |
| `/[lang]/guild/` | 接口自动化、UI 自动化、性能测试教程 | API testing tutorial, test automation, performance testing | 保留可复现示例、配置步骤、常见错误与持续集成路径 |
| `/[lang]/qaskills/` | QA Skills、智能体测试技能、需求分析技能 | QA skills, testing agent skills, requirements analysis | 写清输入、交付物、调用方式和人工复核点 |
| `/[lang]/prompts/` | 软件测试提示词、测试用例提示词 | software testing prompts, test case prompts | 通过任务找到模板，提供完整输入与输出示例 |
| `/[lang]/prompts/workflows/` 下的 `daily/`、`sprint/`、`release/` | 日常测试流程、迭代质量、发布评审 | QA workflow, sprint testing, release review | 说明步骤、交接材料及继续或停止的判断依据 |
| `/[lang]/ai-native-qa-weekly/` | AI 测试周刊、AI 原生质量工程 | AI testing weekly, AI native QA | 标明期次、周期、原始来源与工程应用 |
| `/[lang]/about/`、`/[lang]/projects/` | naodeng、软件测试同学、开源 QA 项目 | Nao Deng, open source QA projects | 作者信息、实际项目与联系方式可核查 |

正文内链应指向解决当前问题的内容，使用描述性锚文本；不要为了入链数量增加无关词条。历史文章保留原日期、署名和链接结构，更新技术事实时记录实际修改时间。

## 下一轮优先级

1. 有 Search Console 数据后，比较最近 28 天与前 28 天的点击、展示、CTR、平均排名，并按页面、查询、语言和设备拆开。没有数据就标记“未评估”。
2. 优先检查高展示、低点击的现有页面，核对标题、摘要和正文是否回答同一个问题，再处理相关词条是否真正相关。
3. 核实线上 HTTP、canonical、语言链接、重定向和 sitemap；不要把历史兼容页的 noindex 自动当成故障。
4. 单独测量移动端 LCP、INP、CLS 与真实加载过程，按证据修复资源或交互问题。
5. 新增专题之前检查已有文章、百科、指南和 Skills，避免同一个搜索问题出现多个薄内容入口。

这份指南用于手动继续优化；当前没有定时任务。提交、推送和上线按当次明确要求执行。

## 2026-10-09 本轮记录

工作区基线为 `main` 的 `eb84c75c7`。构建生成 3,313 个内容页面，其中 2,150 个可收录页面全部保留在 sitemap。验证文件不作为内容页参与检查。

| 已确认问题 | 优化前 | 本轮结果 |
| --- | --- | --- |
| 可收录 HTML 的语言标记指向 noindex 页面 | 454 条，来自中文 Wiki 的英文版本与默认入口 | 0 条；已修正为真实中文版本与默认入口 |
| sitemap 的语言链接指向不收录页面 | 248 条，包括英文 Wiki 和空的归档版本 | 0 条；改为从 HTML 中读取实际关联 |
| 博客、标签与系列分页标题 | 各页重复使用栏目或分组标题 | 标题包含页码；102 个可收录分页均与入口页区分 |
| 全站 WebPage 信息 | 缺少页面与站点的明确关联 | 新增页面名称、摘要、语言、canonical、站点与面包屑关联 |
| 构建检查范围 | 摘要与部分历史地址；只读一个 sitemap 分片 | 增加全站 canonical、双语回链、sitemap 一致性与 JSON-LD 校验 |

同时更新中英文栏目摘要，移除提示词介绍中已经过时的固定数量，以及未对应实际搜索 URL 的 SearchAction。未改写历史正文、署名、日期或发布状态。

本地验证：`npm test` 的 44 个文件、259 项测试通过；`npm run seo:check:strict` 通过，保留 7 条摘要长度提示；`npm run build` 和全站构建检查通过；上述两个 SEO 浏览器 spec 共 81 项通过，其中覆盖中英文桌面与移动端。另用 Python HTMLParser 与 XML 解析器复核了 noindex 语言链接和分页标题。摘要长度提示不属于硬错误，本轮没有按固定字数批量改写历史内容。

线上验证边界：默认 Python 请求检查中英文首页、robots.txt、两个 sitemap 文件及中英文 A/B Testing 词条入口时，HEAD 和 GET 均返回 HTTP 403，GET 响应正文为 Cloudflare `error code: 1010`。用户反馈浏览器可正常访问；改用浏览器请求头复核中文首页时，GET 返回 HTTP 200。根据 [Cloudflare 1010 说明](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1010/)，该错误表示请求客户端签名被拒，因此本轮记录为默认脚本客户端访问受限，不能据此认定页面不可访问或搜索引擎抓取受阻。

尚未完成全站线上 SEO 元数据复核；没有本轮 Search Console、排名或流量数据。上述优化结果属于本地实现与验证，不代表已经部署、已经收录或搜索表现已经提升。

## 官方参考

- [Google：管理多语言页面](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google：搜索摘要与 meta description](https://developers.google.com/search/docs/appearance/snippet)
- [Google：创建和提交 sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Astro：sitemap 的 serialize 配置](https://docs.astro.build/en/guides/integrations-guide/sitemap/#serialize)
- [Google：站点链接搜索框已退出搜索结果](https://developers.google.com/search/blog/2024/10/sitelinks-search-box)
