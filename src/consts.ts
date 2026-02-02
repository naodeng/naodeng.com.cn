// 站点常量：Nao's Blog / 软件测试同学
// 可在项目中通过 import 使用

import type { Multilingual } from "@/i18n";

export const SITE_TITLE: string | Multilingual = {
  en: "Nao's Blog",
  "zh-cn": "软件测试同学",
};

export const SITE_DESCRIPTION: string | Multilingual = {
  en: "naodeng, inaodeng.com, personal blog, software testing, performance testing, API testing, automation testing, agile testing.",
  "zh-cn": "naodeng，inaodeng.com，个人博客，软件测试，性能测试，接口测试，自动化测试，敏捷测试。",
};

/** SEO 关键词（meta keywords） */
export const SITE_KEYWORDS: Multilingual = {
  en: "software testing, QA, quality analyst, automation testing, API testing, performance testing, agile testing, test automation, inaodeng, Nao Deng",
  "zh-cn": "软件测试, 质量分析, 自动化测试, 接口测试, 性能测试, 敏捷测试, 测试自动化, inaodeng, naodeng",
};

/** 网站 slogan（用于站点头部等） */
export const SITE_SLOGAN: Multilingual = {
  en: "Quality Analyst, Not Quality Assurance.",
  "zh-cn": "质量分析师，而非质量保证师。",
};

export const X_ACCOUNT: string | Multilingual = "@inaodeng";

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
  en: "This page is not available in your language.",
  "zh-cn": "此页面不支持您的语言。",
};

// 首页简介问候语（展示在 logo 下方）
export const HOME_INTRO_GREETING: Multilingual = {
  en: "I'm Nao Deng.",
  "zh-cn": "我是 naodeng。",
};

// 首页简介（与 GitHub README 保持一致）
export const HOME_INTRO: Multilingual = {
  en: `- Currently working on [Awesome QA Prompt](https://github.com/naodeng/awesome-qa-prompt)
- Currently learning **AI-assisted Testing**
- I regularly write articles on [inaodeng.com](https://inaodeng.com)
- How to reach me: **dengnao@gmail.com**
- Twitter: [**@inaodeng**](https://twitter.com/inaodeng)
- WeChat: **软件测试同学**
- Support me by [**supporting this blog**](https://inaodeng.com/sponsor)`,
  "zh-cn": `- 当前工作在 [Awesome QA Prompt](https://github.com/naodeng/awesome-qa-prompt)
- 正在学习 **AI 辅助测试**
- 定期在 [inaodeng.com](https://inaodeng.com) 发布技术文章
- 联系方式：**dengnao@gmail.com**
- Twitter: [**@inaodeng**](https://twitter.com/inaodeng)
- 微信公众号：**软件测试同学**
- 支持我 [**成为支持者**](https://inaodeng.com/sponsor)`,
};

// 首页作者标签（简介区域右侧）
export const HOME_AUTHOR_TAGS: Multilingual[] = [
  { en: "Testing", "zh-cn": "测试" },
  { en: "Automation Testing", "zh-cn": "自动化测试" },
  { en: "AI Testing", "zh-cn": "AI测试" },
  { en: "Performance Testing", "zh-cn": "性能测试" },
  { en: "Mobile Testing", "zh-cn": "移动端测试" },
  { en: "Test Process Improvement", "zh-cn": "测试流程改进" },
];

// 顶部导航：首页
export const NAV_HOME: Multilingual = {
  en: "Home",
  "zh-cn": "首页",
};

// 顶部导航：关于
export const NAV_ABOUT: Multilingual = {
  en: "About",
  "zh-cn": "关于",
};

// 顶部导航：项目
export const NAV_PROJECTS: Multilingual = {
  en: "Projects",
  "zh-cn": "项目",
};

// 顶部导航：归档
export const NAV_ARCHIVE: Multilingual = {
  en: "Archive",
  "zh-cn": "归档",
};

// 顶部导航：支持
export const NAV_SPONSOR: Multilingual = {
  en: "Support",
  "zh-cn": "支持",
};

// 系列 / 标签聚合页（Footer、博客标题区）
export const NAV_SERIES: Multilingual = {
  en: "Series",
  "zh-cn": "系列",
};
export const NAV_TAGS: Multilingual = {
  en: "Tags",
  "zh-cn": "标签",
};

/** 底部导航：状态页（跳转 status.inaodeng.com） */
export const NAV_STATUS: Multilingual = {
  en: "Status",
  "zh-cn": "状态",
};

/** 底部导航：版权信息 */
export const NAV_COPYRIGHT: Multilingual = {
  en: "Copyright",
  "zh-cn": "版权信息",
};

/** 底部导航：隐私政策 */
export const NAV_PRIVACY: Multilingual = {
  en: "Privacy",
  "zh-cn": "隐私政策",
};

/** 底部导航：友情链接 */
export const NAV_LINKS: Multilingual = {
  en: "Friends",
  "zh-cn": "友情链接",
};

/** 底部导航：访问统计（Counterscale 仪表盘） */
export const NAV_ANALYTICS: Multilingual = {
  en: "Analytics",
  "zh-cn": "访问统计",
};

/** 博文版权/许可（展示在日期行） */
export const ARTICLE_LICENSE = "CC BY-SA 4.0";

/** 博文阅读时长文案：X 分钟阅读 / X min read */
export const READING_TIME_LABEL: Multilingual = {
  en: "min read",
  "zh-cn": "分钟阅读",
};

// 搜索
export const NAV_SEARCH: Multilingual = {
  en: "Search",
  "zh-cn": "搜索",
};
export const SEARCH_PLACEHOLDER: Multilingual = {
  en: "Search posts…",
  "zh-cn": "搜索文章…",
};
export const SEARCH_NO_RESULTS: Multilingual = {
  en: "No results.",
  "zh-cn": "暂无结果。",
};
export const SEARCH_OPEN_HINT: Multilingual = {
  en: "⌘K or Ctrl+K to open search",
  "zh-cn": "⌘K 或 Ctrl+K 打开搜索",
};

// 归档页文案
export const ARCHIVE_PAGE_TITLE: Multilingual = {
  en: "Archive",
  "zh-cn": "归档",
};

// 站点地图页文案
export const SITEMAP_PAGE_TITLE: Multilingual = {
  en: "Sitemap",
  "zh-cn": "站点地图",
};
export const SITEMAP_XML_LABEL: Multilingual = {
  en: "XML Sitemap (for search engines)",
  "zh-cn": "XML 站点地图（供搜索引擎使用）",
};

// 支持页文案
export const SPONSOR_PAGE_TITLE: Multilingual = {
  en: "Support",
  "zh-cn": "支持",
};

// 版权信息页
export const COPYRIGHT_PAGE_TITLE: Multilingual = {
  en: "Copyright",
  "zh-cn": "版权信息",
};

// 隐私政策页
export const PRIVACY_PAGE_TITLE: Multilingual = {
  en: "Privacy Policy",
  "zh-cn": "隐私政策",
};

// 友情链接页
export const LINKS_PAGE_TITLE: Multilingual = {
  en: "Friends",
  "zh-cn": "友情链接",
};
export const SPONSOR_WHY_TITLE: Multilingual = {
  en: "Why Support Me?",
  "zh-cn": "为什么需要您的支持？",
};
export const SPONSOR_WHY_BODY: Multilingual = {
  en: `Nao's Blog (inaodeng.com) is my personal site where I share articles on software testing, automation, and QA. Your support helps me:
- **Keep writing**: More time for tutorials, experiences, and testing practices
- **Improve the site**: Better experience, search, and accessibility
- **Stay independent**: No ads, content remains free and open
- **Cover costs**: Hosting, domains, and tools that keep the site running`,
  "zh-cn": `软件测试同学（inaodeng.com）是我的个人博客，分享软件测试、自动化与 QA 相关文章。您的支持将帮助我：
- **持续写作**：有更多时间写教程、经验与测试实践
- **优化网站**：提升访问体验、搜索与可用性
- **保持独立**：无广告，内容继续免费开放
- **覆盖成本**：服务器、域名与维护工具等`,
};
export const SPONSOR_METHODS_TITLE: Multilingual = {
  en: "Ways to Support",
  "zh-cn": "支持方式",
};
export const SPONSOR_BENEFITS_TITLE: Multilingual = {
  en: "Supporter Benefits",
  "zh-cn": "支持者权益",
};
export const SPONSOR_BENEFITS_BODY: Multilingual = {
  en: `As a supporter of this site, you can expect:
- **Thank You**: A thank you message or email from me
- **Recognition** (optional): Your name or handle listed on this page if you wish
- **Ongoing content**: Your support encourages me to keep publishing and improving the blog`,
  "zh-cn": `作为本站的支持者，您可以期待：
- **感谢**：来自我的感谢留言或邮件
- **致谢**（可选）：如您愿意，可在本页展示您的名字或昵称
- **持续更新**：您的支持会鼓励我继续写文章、优化博客`,
};

// 项目展示页文案
export const PROJECTS_PAGE_TITLE: Multilingual = {
  en: "Projects",
  "zh-cn": "项目",
};
export const PROJECTS_TECH_STACK_LABEL: Multilingual = {
  en: "Tech Stack",
  "zh-cn": "技术栈",
};

// 首页区块文案
export const HOME_LATEST_POSTS: Multilingual = {
  en: "Latest posts",
  "zh-cn": "最新文章",
};
export const HOME_PROJECTS_TITLE: Multilingual = {
  en: "Featured Projects",
  "zh-cn": "精选项目",
};
export const HOME_TAGS_TITLE: Multilingual = {
  en: "Popular Tags",
  "zh-cn": "热门标签",
};
export const HOME_VIEW_ALL: Multilingual = {
  en: "View all posts",
  "zh-cn": "查看全部",
};
export const HOME_VIEW_ALL_PROJECTS: Multilingual = {
  en: "View all projects",
  "zh-cn": "查看全部项目",
};

// 博客首页标题区介绍文案（约 200 字）
export const BLOG_INTRO: Multilingual = {
  en: "Articles on software testing, quality analysis, and test engineering: automation testing, API testing, performance testing, UI testing, and AI-assisted testing. Series like \"30 Days of AI in Testing Challenge\" and \"UI Testing Best Practices\" share hands-on experience and tooling. Written for testers and developers who care about quality.",
  "zh-cn": "记录软件测试、质量分析与测试工程相关的实践与思考，涵盖自动化测试、接口测试、性能测试、UI 测试以及 AI 辅助测试等方向。本站包含「30 Days of AI in Testing Challenge」「UI 测试最佳实践」等系列，分享工具选型、测试策略与实战经验；文章以中英双语更新，主题涉及测试设计、自动化框架、持续集成与 AI 在测试中的应用，面向关心质量的测试与开发同学。欢迎通过系列与标签浏览专题内容。",
};

// 博客页：系列 / Top 标签
export const BLOG_SERIES_TITLE: Multilingual = {
  en: "Series",
  "zh-cn": "系列",
};
export const BLOG_TOP_TAGS_TITLE: Multilingual = {
  en: "Top 20 Tags",
  "zh-cn": "热门标签 Top 20",
};

// 博客分页
export const BLOG_POSTS_PER_PAGE = 12;
export const PAGINATION_PREV: Multilingual = {
  en: "Previous",
  "zh-cn": "上一页",
};
export const PAGINATION_NEXT: Multilingual = {
  en: "Next",
  "zh-cn": "下一页",
};
export const PAGINATION_PAGE: Multilingual = {
  en: "Page",
  "zh-cn": "第",
};
export const PAGINATION_OF: Multilingual = {
  en: "of",
  "zh-cn": "页，共",
};

// 关于页文案（与首页简介一致，为本站 Nao's Blog / 软件测试同学）
export const ABOUT_PAGE_TITLE: Multilingual = {
  en: "About",
  "zh-cn": "关于",
};
export const ABOUT_ME_TITLE: Multilingual = {
  en: "About Me",
  "zh-cn": "关于我",
};
export const ABOUT_ME_BODY: Multilingual = {
  en: `Hi, I'm Nao Deng.

- Currently working on [Awesome QA Prompt](https://github.com/naodeng/awesome-qa-prompt)
- Currently learning **AI-assisted Testing**
- I regularly write articles on this site [Nao's Blog](https://inaodeng.com)
- How to reach me: **dengnao@gmail.com**
- Twitter: [**@inaodeng**](https://twitter.com/inaodeng)
- Support me by [supporting this blog](https://inaodeng.com/sponsor)`,
  "zh-cn": `你好，我是 naodeng。

- 当前工作在 [Awesome QA Prompt](https://github.com/naodeng/awesome-qa-prompt)
- 正在学习 **AI 辅助测试**
- 定期在本站 [软件测试同学](https://inaodeng.com) 发布技术文章
- 联系方式：**dengnao@gmail.com**
- Twitter: [**@inaodeng**](https://twitter.com/inaodeng)
- 支持我 [成为支持者](https://inaodeng.com/sponsor)`,
};
export const ABOUT_TECH_TITLE: Multilingual = {
  en: "Tech Stack",
  "zh-cn": "技术栈",
};
export const ABOUT_TECH_TESTING: Multilingual = {
  en: "Testing Tools (UI / E2E / API)",
  "zh-cn": "测试工具（UI / E2E / API）",
};
export const ABOUT_TECH_API_PERF: Multilingual = {
  en: "API & Performance",
  "zh-cn": "API 与性能",
};
export const ABOUT_TECH_LANGUAGES: Multilingual = {
  en: "Languages",
  "zh-cn": "编程语言",
};
export const ABOUT_TECH_DEVOPS: Multilingual = {
  en: "DevOps",
  "zh-cn": "DevOps",
};
export const ABOUT_PROJECTS_TITLE: Multilingual = {
  en: "Featured Projects",
  "zh-cn": "精选项目",
};
export const ABOUT_SUPPORT_TITLE: Multilingual = {
  en: "Support",
  "zh-cn": "支持我",
};
// 支持链接在关于页中由 getRelativeLocaleUrl(locale, "/sponsor") 动态替换，保证始终指向本站
export const ABOUT_SUPPORT_BODY: Multilingual = {
  en: "If you find my work helpful, consider [supporting me](/sponsor).",
  "zh-cn": "如果你觉得我的项目对你有帮助，欢迎 [支持我](/sponsor)。",
};
export const ABOUT_CONNECT_TITLE: Multilingual = {
  en: "Connect",
  "zh-cn": "联系我",
};
export const ABOUT_CONNECT_BODY: Multilingual = {
  en: "**Email:** dengnao@gmail.com · **Twitter:** [@inaodeng](https://twitter.com/inaodeng)",
  "zh-cn": "**邮箱：** dengnao@gmail.com · **Twitter：** [@inaodeng](https://twitter.com/inaodeng)",
};

// 精选项目（关于页）
export const FEATURED_PROJECTS: Array<{
  url: string;
  title: Multilingual;
  description: Multilingual;
}> = [
    {
      url: "https://github.com/orgs/Automation-Test-Starter/repositories",
      title: { en: "Automation-Test-Starter", "zh-cn": "Automation-Test-Starter" },
      description: {
        en: "Collection of automation testing starter projects with various frameworks and languages.",
        "zh-cn": "包含各种框架和语言的自动化测试启动项目集合。",
      },
    },
    {
      url: "https://github.com/naodeng/QAWiki",
      title: { en: "QA Wiki", "zh-cn": "QA Wiki" },
      description: {
        en: "Comprehensive quality assurance knowledge base covering testing methodologies and best practices.",
        "zh-cn": "全面的质量保证知识库，涵盖测试方法论和最佳实践。",
      },
    },
    {
      url: "https://github.com/naodeng/awesome-qa-prompt",
      title: { en: "Awesome QA Prompt", "zh-cn": "Awesome QA Prompt" },
      description: {
        en: "Curated collection of AI prompts for QA and testing scenarios.",
        "zh-cn": "专为 QA 和测试场景设计的 AI 提示词精选集合。",
      },
    },
  ];
