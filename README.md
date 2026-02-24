# Nao's Blog

<div align="center">

[![Deploy to Cloudflare Workers](https://github.com/naodeng/naodeng.com.cn/actions/workflows/deploy-cloudflare.yml/badge.svg)](https://github.com/naodeng/naodeng.com.cn/actions/workflows/deploy-cloudflare.yml)
[![E2E Tests](https://github.com/naodeng/naodeng.com.cn/actions/workflows/e2e.yml/badge.svg)](https://github.com/naodeng/naodeng.com.cn/actions/workflows/e2e.yml)
[![Github Pages Deployment](https://github.com/naodeng/naodeng.com.cn/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/naodeng/naodeng.com.cn/actions/workflows/gh-pages.yml)
[![Last Commit](https://img.shields.io/github/last-commit/naodeng/naodeng.com.cn)](https://github.com/naodeng/naodeng.com.cn/commits/main)
[![License](https://img.shields.io/github/license/naodeng/naodeng.com.cn)](https://github.com/naodeng/naodeng.com.cn/blob/main/LICENSE)

🌐 [inaodeng.com](https://inaodeng.com) | 📝 [Blog](https://inaodeng.com/zh-cn/blog/) | 📚 [Wiki](https://inaodeng.com/zh-cn/wiki/)

</div>

## 📖 关于 | About

Welcome to my blog! This blog is dedicated to sharing my thoughts and ideas on various topics including software testing, automation, development practices, and more.

欢迎来到我的博客！这个博客致力于分享我在软件测试、自动化、开发实践等各个主题上的想法和见解。

## 🚀 技术栈 | Tech Stack

<div align="center">

### 核心技术 | Core Technologies

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![MDX](https://img.shields.io/badge/MDX-1B1F24?style=for-the-badge&logo=mdx&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### 部署与 CI/CD | Deployment & CI/CD

![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![Cloudflare Workers](https://img.shields.io/badge/Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Wrangler](https://img.shields.io/badge/Wrangler-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

### 测试与分析 | Testing & Analytics

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![Google Analytics](https://img.shields.io/badge/Google_Analytics-E37400?style=for-the-badge&logo=google-analytics&logoColor=white)

### 搜索与评论 | Search & Comments

![Algolia](https://img.shields.io/badge/Algolia-5468FF?style=for-the-badge&logo=algolia&logoColor=white)
![Giscus](https://img.shields.io/badge/Giscus-181717?style=for-the-badge&logo=github&logoColor=white)

</div>

## ✨ 特性 | Features

- 🌍 **双语支持 | Bilingual Support** - 完整支持中英文 | Full support for English and Chinese
- 🎨 **现代设计 | Modern Design** - 简洁响应式界面 | Clean and responsive UI
- 🔍 **Algolia 搜索 | Algolia Search** - 快速准确的搜索功能 | Fast and accurate search functionality
- 💬 **Giscus 评论 | Giscus Comments** - 基于 GitHub 的评论系统 | GitHub-based comment system
- 📊 **Google Analytics** - 访客数据分析 | Track visitor insights
- 🚀 **边缘部署 | Edge Deployment** - 部署在 Cloudflare Workers 实现全球高性能 | Deployed on Cloudflare Workers for global performance
- 🧪 **E2E 测试 | E2E Testing** - 使用 Playwright 进行全面的端到端测试 | Comprehensive end-to-end tests with Playwright
- 📱 **移动端友好 | Mobile Friendly** - 完全响应式设计 | Fully responsive design
- 🎯 **SEO 优化 | SEO Optimized** - 内置 SEO 最佳实践 | Built-in SEO best practices

## 🛠️ 开发 | Development

### 环境要求 | Prerequisites

- Node.js >= 20
- npm or yarn

### 安装 | Installation

```bash
# 克隆仓库 | Clone the repository
git clone https://github.com/naodeng/naodeng.com.cn.git

# 进入项目目录 | Navigate to the project directory
cd naodeng.com.cn

# 安装依赖 | Install dependencies
npm install
```

### 开发服务器 | Development Server

```bash
# 启动开发服务器 | Start the development server
npm run dev

# 在浏览器中打开 | Open in browser
npm run start
```

### 构建 | Build

```bash
# 生产环境构建 | Build for production
npm run build

# 预览生产构建 | Preview production build
npm run preview
```

### 测试 | Testing

```bash
# 运行 E2E 测试 | Run E2E tests
cd e2e
npm install
npm test
```

## 📝 内容管理 | Content Management

### 博客文章 | Blog Posts

博客文章位于 `src/blog/` 目录，按语言组织：

Blog posts are located in `src/blog/` directory, organized by language:
- 英文 | English: `src/blog/en/`
- 中文 | Chinese: `src/blog/zh-cn/`

### 百科词条 | Wiki Entries

百科词条位于 `src/content/wiki/` 目录。

Wiki entries are in `src/content/wiki/` directory.

### 实用脚本 | Scripts

```bash
# 生成博客封面 | Generate blog covers
npm run generate-covers

# 更新博客标签 | Update blog tags
npm run update-blog-tags

# 索引内容到 Algolia | Index content to Algolia
npm run algolia-index
```

## 🚀 部署 | Deployment

博客自动部署到以下平台：

The blog is automatically deployed to:
- **Cloudflare Workers** - 主要生产环境部署 | Main production deployment
- **GitHub Pages** - 备用部署 | Alternative deployment

当代码推送到 `main` 分支时，通过 GitHub Actions 自动触发部署。

Deployments are triggered automatically on push to the `main` branch via GitHub Actions.

## 🤝 贡献 | Contributing

我非常重视读者的反馈和贡献。如果您在我的博客文章中发现任何错误或遗漏，或者如果您有额外的内容建议，请不要犹豫，直接在 GitHub 上提交 Pull Request（PR）。

I value feedback and contributions from my readers. If you notice any errors or omissions in my blog posts, or if you have suggestions for additional content, please don't hesitate to submit a Pull Request (PR) on GitHub. I will review your changes and merge them into the main branch if they are appropriate.

### 如何贡献 | How to Contribute

1. Fork 本仓库 | Fork the repository
2. 创建特性分支 | Create your feature branch (`git checkout -b feature/amazing-feature`)
3. 提交更改 | Commit your changes (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 | Push to the branch (`git push origin feature/amazing-feature`)
5. 开启 Pull Request | Open a Pull Request

## 📄 许可证 | License

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 联系方式 | Contact

- 网站 | Website: [inaodeng.com](https://inaodeng.com)
- GitHub: [@naodeng](https://github.com/naodeng)

---

<div align="center">

Made with ❤️ by [Nao Deng](https://github.com/naodeng)

</div>
