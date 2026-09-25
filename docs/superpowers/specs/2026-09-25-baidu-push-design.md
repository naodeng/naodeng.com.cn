# Baidu URL Push Integration Design

## Goal

在 Cloudflare 部署成功后，把本次发布涉及的规范 URL 推送到百度搜索资源平台，同时保持现有 IndexNow 流程不变；百度接口异常、配额不足或密钥未配置时不得阻塞部署结果。

## Scope and constraints

- 百度推送是部署后的独立通知步骤，不参与 Astro 构建或 Cloudflare 部署步骤。
- 准入密钥只从 `BAIDU_PUSH_TOKEN` 环境变量读取，不写入源码、示例配置的实际值、日志或提交信息。
- 站点默认值为 `https://inaodeng.com`，可通过 `BAIDU_PUSH_SITE` 覆盖。
- URL 选择复用现有 IndexNow 的变更范围与 sitemap 判断，避免两套提交范围漂移。
- 请求使用百度 URL 推送接口的 `text/plain` 换行格式，并按批次提交。
- 脚本本身对 HTTP 错误、非法 JSON、缺少必需反馈字段和部分失败返回非零退出码；GitHub Actions 步骤使用 `continue-on-error: true`，因此这些状态只产生可见告警，不会使部署失败。

## Design

### Script boundary

新增 `scripts/submit-baidu.mjs` 负责 CLI 参数、URL 收集、批量请求和摘要输出；新增 `scripts/baidu-push-utils.mjs` 负责请求构造与响应分类，便于单元测试。

脚本支持现有提交脚本的三类输入：位置参数 URL、`--git-range` 计算变更 URL，以及 `--sitemap` 作为大范围变更的回退来源。没有可提交 URL 时直接退出，不要求读取密钥。

每个批次向 `data.zz.baidu.com/urls` 发送：

- 查询参数：`site` 和 `token`；
- Header：`Content-Type: text/plain`；
- Body：每行一个 canonical URL。

响应分类保留百度反馈中的 `success`、`remain`、`not_same_site` 和 `not_valid`，日志只输出计数和配额，不输出带 token 的请求 URL。

### Workflow behavior

在 `.github/workflows/deploy-cloudflare.yml` 的 Cloudflare 部署之后增加百度通知步骤：

- `BAIDU_PUSH_TOKEN` 来自 `${{ secrets.BAIDU_PUSH_TOKEN }}`；
- `BAIDU_PUSH_SITE` 固定为 `https://inaodeng.com`；
- 仅当前置部署步骤成功时运行；
- 使用 `continue-on-error: true`，确保百度服务故障不会回滚或阻塞已完成的部署。

`.env.example` 只补充变量名称和配置说明，不填写真实 token。

## Verification

- 单元测试覆盖请求 query/header/body 构造、200 成功反馈、部分失败反馈、非 2xx 响应和非法 JSON。
- 运行受影响的 Vitest 文件和完整 `npm test`。
- 运行 `npm run build`，确认 Astro 构建和现有 SEO 构建门禁不受影响。
- 检查工作流 diff，确认百度步骤在部署之后、具有 `continue-on-error`，且仓库中没有出现用户提供的明文 token。
