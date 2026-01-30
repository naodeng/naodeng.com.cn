# Welcome to my blog

Welcome to my blog! This blog is dedicated to sharing my thoughts and ideas on various topics.

I value feedback and contributions from my readers. If you notice any errors or omissions in my blog posts, or if you have suggestions for additional content, please don't hesitate to submit a Pull Request (PR) on GitHub. I will review your changes and merge them into the main branch if they are appropriate.

我非常重视读者的反馈和贡献。如果您在我的博客文章中发现任何错误或遗漏，或者如果您有额外的内容建议，请不要犹豫，直接在 GitHub 上提交 Pull Request（PR）。

## 部署到 Cloudflare Workers

本项目为静态站点，使用 [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) 部署。

### GitHub Actions 自动部署

推送到 `main` 分支时会自动构建并部署到 Cloudflare Workers。

**配置步骤：**

1. 在 [Cloudflare 控制台](https://dash.cloudflare.com/) 创建 API Token：  
   **My Profile** → **API Tokens** → **Create Token** → 使用 **Edit Cloudflare Workers** 模板，或自定义权限（Account: Workers Scripts Edit、Account: Workers KV Storage Edit 等按需勾选）。
2. 在 GitHub 仓库 **Settings** → **Secrets and variables** → **Actions** 中新增 Secret：
   - 名称：`CLOUDFLARE_API_TOKEN`
   - 值：上一步复制的 API Token

保存后，每次推送到 `main` 都会触发部署。

### 本地预览（Worker 环境）

```bash
npm run build
npm run preview:worker
```

### 本地手动部署

1. 登录 Cloudflare：`npx wrangler login`
2. 构建并部署：`npm run deploy`

部署完成后会得到 `*.workers.dev` 预览地址；如需绑定自定义域名，在 [Cloudflare 控制台](https://dash.cloudflare.com/) 中为该 Worker 添加域名。
