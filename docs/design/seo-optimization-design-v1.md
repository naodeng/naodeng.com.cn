# SEO Optimization Design v1

## 1. 设计目标

以“统一输出、自动校验、可观测闭环”为核心，保证 SEO 能力可持续演进，并可被 QA 稳定验证。

## 2. 架构设计

### 2.1 输出层（模板）
- 统一由 `src/layouts/Base.astro` 提供：
  - `title/description/canonical`
  - `og:*`、`twitter:*`
  - `hreflang` 与 `x-default`
  - 通用 JSON-LD（`WebSite`、`Person`、`BreadcrumbList`）
- 详情页追加结构化数据：
  - Blog：`BlogPosting`
  - Wiki/AIWiki：`DefinedTerm`

### 2.2 规则层（SEO 策略）
- Canonical 规则：
  - 必须为绝对 URL；
  - 与最终访问 URL 保持一致；
  - 禁止跨语言错误 canonical。
- Indexability 规则：
  - 默认 index；
  - 仅特定页面（如重定向入口）允许 noindex，并记录理由。
- Sitemap 规则：
  - 只包含可索引且状态码为 200 的 URL；
  - 对 `/en/wiki/` 保持排除策略（当前业务规则）。

### 2.3 校验层（QA 自动化）
- 静态规则检查：
  - metadata 缺失/重复；
  - description 长度；
  - canonical 格式与冲突；
  - 结构化数据必填字段。
- 链接质量检查：
  - 内链 4xx/5xx；
  - 重定向链；
  - 孤儿页候选。
- E2E 校验增强：
  - 由“标签存在”升级为“值正确且唯一”。

### 2.4 观测层（发布后）
- Search Console 维度：
  - 覆盖率、已发现未编入索引、富结果状态、点击/展示/CTR。
- 站内巡检维度：
  - sitemap URL 健康；
  - 模板字段合规率；
  - 词条互链完整性。

## 3. 关键设计决策

- 保持“模板集中化”而不是“页面各自拼接 SEO 标签”，降低回归风险。
- SEO 检查接入 CI，先 warning 后 strict，降低一次性改造风险。
- `/[lang]/sitemap` 页面继续保留，但建议限制超长列表展示（分段或懒加载）以减少爬虫与用户负担。

## 4. 回滚方案

- 模板改动使用 feature flag 或独立 PR 分批上线。
- 若搜索指标异常，优先回滚 metadata 生成逻辑与 canonical 变更。

