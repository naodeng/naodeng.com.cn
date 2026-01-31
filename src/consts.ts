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
- Support me by [**becoming a sponsor**](https://inaodeng.com/sponsor)`,
  "zh-cn": `- 当前工作在 [Awesome QA Prompt](https://github.com/naodeng/awesome-qa-prompt)
- 正在学习 **AI 辅助测试**
- 定期在 [inaodeng.com](https://inaodeng.com) 发布技术文章
- 联系方式：**dengnao@gmail.com**
- Twitter: [**@inaodeng**](https://twitter.com/inaodeng)
- 赞助我 [**成为一个支持者**](https://inaodeng.com/sponsor)`,
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

// 顶部导航：赞助
export const NAV_SPONSOR: Multilingual = {
  en: "Sponsor",
  "zh-cn": "赞助",
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

// 赞助页文案
export const SPONSOR_PAGE_TITLE: Multilingual = {
  en: "Sponsor & Support",
  "zh-cn": "赞助支持",
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
  en: "Ways to Sponsor",
  "zh-cn": "赞助方式",
};
export const SPONSOR_BENEFITS_TITLE: Multilingual = {
  en: "Sponsor Benefits",
  "zh-cn": "赞助者权益",
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
- Support me by [becoming a sponsor](https://inaodeng.com/sponsor)`,
  "zh-cn": `你好，我是 naodeng。

- 当前工作在 [Awesome QA Prompt](https://github.com/naodeng/awesome-qa-prompt)
- 正在学习 **AI 辅助测试**
- 定期在本站 [软件测试同学](https://inaodeng.com) 发布技术文章
- 联系方式：**dengnao@gmail.com**
- Twitter: [**@inaodeng**](https://twitter.com/inaodeng)
- 赞助我 [成为一个支持者](https://inaodeng.com/sponsor)`,
};
export const ABOUT_TECH_TITLE: Multilingual = {
  en: "Tech Stack",
  "zh-cn": "技术栈",
};
export const ABOUT_TECH_TESTING: Multilingual = {
  en: "Testing Tools",
  "zh-cn": "测试工具",
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
// 赞助链接在关于页中由 getRelativeLocaleUrl(locale, "/sponsor") 动态替换，保证始终指向本站
export const ABOUT_SUPPORT_BODY: Multilingual = {
  en: "If you find my work helpful, consider [becoming a sponsor](/sponsor).",
  "zh-cn": "如果你觉得我的项目对你有帮助，欢迎 [赞助我](/sponsor)。",
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
