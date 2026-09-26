# Baidu URL Push Integration Design

## Goal

在 Cloudflare 部署成功后，把本次发布涉及的规范 URL 推送到百度搜索资源平台，同时保持现有 IndexNow 流程不变；百度接口异常、配额不足或密钥未配置时不得阻塞部署结果。

## Scope and constraints

- 百度推送是部署后的独立通知步骤，不参与 Astro 构建或 Cloudflare 部署步骤。
- 准入密钥只从 `BAIDU_PUSH_TOKEN` 环境变量读取，不写入源码、示例配置的实际值、日志或提交信息。
- 站点默认值为 `https://inaodeng.com`，可通过 `BAIDU_PUSH_SITE` 覆盖。
- `BAIDU_PUSH_SITE` 作为 canonical URL 来源保留完整 origin；发给百度的 query `site` 参数使用去掉协议和末尾斜杠的主机名格式。
- URL 选择复用现有 IndexNow 的变更范围与 sitemap 判断，抽到共享 helper，避免两套提交范围漂移。
- 首次接入或需要补推时，提供显式的手动全量 sitemap 模式；普通 `push main` 不因代码/文档变更而重复消耗百度配额。
- 请求使用百度 URL 推送接口 `http://data.zz.baidu.com/urls` 的 `text/plain` 换行格式；百度接口每批最多提交 2,000 条 URL。
- 脚本本身对 HTTP 错误、网络/超时、非法 JSON、缺少必需反馈字段和部分失败返回非零退出码；GitHub Actions 步骤使用 `continue-on-error: true`，因此这些状态只产生可见告警，不会影响已经完成的 Cloudflare 部署。

## Design

### Script boundary

新增 `scripts/submit-baidu.mjs` 负责 CLI 参数、批量请求和摘要输出；新增 `scripts/baidu-push-utils.mjs` 负责请求构造、响应分类和批量提交，便于单元测试。新增共享的 `scripts/submission-utils.mjs`，由 IndexNow 与百度脚本共同负责 CLI 参数、git range、sitemap、去重和 canonical URL 收集；现有 IndexNow 只做必要的导入调整，不改变行为。

脚本支持现有提交脚本的三类输入：位置参数 URL、`--git-range` 计算变更 URL，以及 `--sitemap` 作为大范围变更的回退来源；`--all` 显式读取 sitemap 中的全部 URL，用于手动补推。URL 收集沿用 `canonicalUrls` 的 HTTPS、同源、无 query/hash 约束；sitemap 不存在或无法读取时返回明确错误。没有可提交 URL 时直接退出，不要求读取密钥。

每个最多 2,000 条 URL 的批次向 `http://data.zz.baidu.com/urls` 发送：

- 查询参数：`site`（例如 `inaodeng.com`）和 `token`；
- Header：`Content-Type: text/plain`；
- Body：每行一个 canonical URL。

实现不把完整请求 URL写入日志，因为 token 位于 query 参数中。响应分类要求 `success` 和 `remain` 为整数；`not_same_site` 与 `not_valid` 缺省为空数组。非 2xx、非法 JSON、必需字段缺失或类型错误均为失败；两个拒绝数组任一非空时为部分失败。所有批次都会尝试完成，最后统一以非零状态报告失败。

网络请求使用 15 秒超时；网络异常按当前批次失败处理，不泄露 token，随后继续剩余批次。

### Workflow behavior

在 `.github/workflows/deploy-cloudflare.yml` 增加 `workflow_dispatch` 的 `submit_all_baidu` 布尔输入，并在 Cloudflare 部署之后、现有 IndexNow 步骤之前增加百度通知步骤；同时为 Cloudflare 部署步骤增加 `id: deploy`：

- `BAIDU_PUSH_TOKEN` 来自 `${{ secrets.BAIDU_PUSH_TOKEN }}`；
- `BAIDU_PUSH_SITE` 固定为 `https://inaodeng.com`；
- 百度通知要求 `steps.deploy.conclusion == 'success'`，IndexNow 在 `push main` 中增加事件条件；因此构建或部署失败不会误推送，手动全量百度推送也不会触发 IndexNow；
- `push main` 时百度使用 git range 推送变更 URL；手动运行且勾选 `submit_all_baidu` 时使用完整 sitemap；手动运行不勾选时跳过百度步骤，IndexNow 只在 `push main` 时运行；
- 使用 `continue-on-error: true`，确保百度服务故障不会回滚或阻塞已完成的部署。
- 该步骤仍会在同一 Job 中等待请求结束；“不阻塞部署”指不影响 Cloudflare 部署结果，不承诺工作流立即结束。

`.env.example` 只补充 `BAIDU_PUSH_SITE` 和 `BAIDU_PUSH_TOKEN` 的变量说明，不填写真实 token，也不假设 Node 会自动加载 `.env`。部署前需要在仓库 Settings → Secrets and variables → Actions 中创建 `BAIDU_PUSH_TOKEN`；本地运行时由调用者显式导出该变量。由于 token 会出现在百度要求的 HTTP query 中，使用前应在百度后台轮换已公开的旧 token，并避免任何 verbose 请求日志。

`package.json` 增加 `seo:baidu` 入口，与现有 `seo:indexnow` 保持对称。

## Verification

- 单元测试覆盖请求 query/header/body 构造、HTTPS 同源 canonical URL 过滤、200 成功反馈、部分失败反馈、已知 400 原因的安全提示、非 2xx 响应、非法 JSON、缺字段、网络异常、15 秒超时、无 token、2,000/2,001 条批次边界，以及批次失败后继续提交。
- 运行受影响的 Vitest 文件和完整 `npm test`。
- 运行 `npm run build`，确认 Astro 构建和现有 SEO 构建门禁不受影响。
- 检查工作流 diff，确认百度步骤位于部署之后和 IndexNow 之前，使用 `steps.deploy.conclusion`、具有 `continue-on-error`，且仓库中没有出现用户提供的明文 token。
