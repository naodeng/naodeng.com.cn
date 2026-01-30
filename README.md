# Welcome to my blog

Welcome to my blog! This blog is dedicated to sharing my thoughts and ideas on various topics.

I value feedback and contributions from my readers. If you notice any errors or omissions in my blog posts, or if you have suggestions for additional content, please don't hesitate to submit a Pull Request (PR) on GitHub. I will review your changes and merge them into the main branch if they are appropriate.

我非常重视读者的反馈和贡献。如果您在我的博客文章中发现任何错误或遗漏，或者如果您有额外的内容建议，请不要犹豫，直接在 GitHub 上提交 Pull Request（PR）。

## 部署到 Cloudflare Workers

本项目为静态站点，使用 [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) 部署。

### 前置条件

- [Cloudflare 账号](https://dash.cloudflare.com/sign-up)
- 已安装依赖：`npm install`

### 本地预览（Worker 环境）

```bash
npm run build
npm run preview:worker
```

### 部署

1. 登录 Cloudflare：`npx wrangler login`
2. 构建并部署：`npm run deploy`

部署完成后会得到 `*.workers.dev` 预览地址；如需绑定自定义域名，在 [Cloudflare 控制台](https://dash.cloudflare.com/) 中为该 Worker 添加域名。
