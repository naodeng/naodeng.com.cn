// 站点常量：Nao's Blog / 软件测试同学
// 可在项目中通过 import 使用

import type { Lang, Multilingual } from "@/i18n";

export const SITE_TITLE: string | Multilingual = {
  en: "Nao's Blog",
  "zh-cn": "软件测试同学 X naodeng",
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
- X (Twitter): [**@inaodeng**](https://x.com/inaodeng)
- WeChat: **软件测试同学**
- Support me by [**supporting this blog**](https://inaodeng.com/en/sponsor)`,
  "zh-cn": `- 当前工作在 [Awesome QA Prompt](https://github.com/naodeng/awesome-qa-prompt)
- 正在学习 **AI 辅助测试**
- 定期在 [inaodeng.com](https://inaodeng.com) 发布技术文章
- 联系方式：**dengnao@gmail.com**
- X (Twitter): [**@inaodeng**](https://x.com/inaodeng)
- 微信公众号：**软件测试同学**
- 支持我 [**成为支持者**](https://inaodeng.com/zh-cn/sponsor)`,
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

// 顶部导航：文档
export const NAV_DOCS: Multilingual = {
  en: "Docs",
  "zh-cn": "文档",
};

/** 顶部导航：百科（中文站内）/ QA wiki（英文跳转 ray.run） */
export const NAV_QA_WIKI: Multilingual = {
  en: "QA wiki",
  "zh-cn": "软件测试百科",
};

/** 顶部导航：AI Wiki（中英文站内） */
export const NAV_AI_WIKI: Multilingual = {
  en: "AI Wiki",
  "zh-cn": "AI 百科",
};

/** 顶部导航：百科分组 */
export const NAV_ENCYCLOPEDIA: Multilingual = {
  en: "Wiki",
  "zh-cn": "百科",
};

/** 顶部导航：指南 / Guild */
export const NAV_GUILD: Multilingual = {
  en: "Guild",
  "zh-cn": "自动化测试指南",
};

/** 顶部导航：指南分组 */
export const NAV_GUIDES: Multilingual = {
  en: "Guides",
  "zh-cn": "指南",
};

/** 顶部导航：AI 测试分组 */
export const NAV_AI_TESTING: Multilingual = {
  en: "AI Testing",
  "zh-cn": "AI测试",
};

/** 顶部导航：更多分组 */
export const NAV_MORE: Multilingual = {
  en: "More",
  "zh-cn": "更多",
};

/** 站外学习计划站点（30 天系列）。目前仅在中文站的导航「更多」与页脚展示 */
export const LEARNING_SITES: ReadonlyArray<{
  key: string;
  label: { en: string; "zh-cn": string };
  url: string;
  icon: string;
}> = [
  {
    key: "agent-learning",
    label: { en: "Agent Learning", "zh-cn": "Agent学习" },
    url: "https://ai-agent-30-day-learning-plan.inaodeng.com/",
    icon: "smart_toy",
  },
  {
    key: "english-learning",
    label: { en: "English Learning", "zh-cn": "英语学习" },
    url: "https://30-day-qa-english-learning-plan.inaodeng.com/",
    icon: "school",
  },
  {
    key: "playwright-learning",
    label: { en: "Playwright Learning", "zh-cn": "Playwright学习" },
    url: "https://30-day-qa-playwright-learning-plan.inaodeng.com/",
    icon: "science",
  },
  {
    key: "deepseek-learning",
    label: { en: "DeepSeek Learning Plan", "zh-cn": "DeepSeek 学习计划" },
    url: "https://30-day-qa-deepseek-learning-plan.inaodeng.com/",
    icon: "psychology",
  },
];

/** 底部导航：软件测试百科 */
export const FOOTER_NAV_QA_WIKI: Multilingual = {
  en: "QA Wiki",
  "zh-cn": "软件测试百科",
};

/** 底部导航：AI Wiki */
export const FOOTER_NAV_AI_WIKI: Multilingual = {
  en: "AI Wiki",
  "zh-cn": "AI 百科",
};

/** 底部导航：自动化测试指南 */
export const FOOTER_NAV_GUILD: Multilingual = {
  en: "Automation Testing Guild",
  "zh-cn": "自动化测试指南",
};

/** 底部导航：提示词库 */
export const FOOTER_NAV_PROMPTS: Multilingual = {
  en: "QA Prompt Library",
  "zh-cn": "软件测试提示词库",
};

/** 底部导航：技能库 */
export const FOOTER_NAV_QASKILLS: Multilingual = {
  en: "QA Skill Library",
  "zh-cn": "软件测试技能库",
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
export const ARTICLE_LICENSE = "PolyForm Noncommercial 1.0.0";

/** 博文阅读时长文案：X 分钟阅读 / X min read */
export const READING_TIME_LABEL: Multilingual = {
  en: "min read",
  "zh-cn": "分钟阅读",
};

// 回到顶部按钮
export const SCROLL_TO_TOP: Multilingual = {
  en: "Back to top",
  "zh-cn": "回到顶部",
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
export const SEARCH_SOURCE_LOCAL: Multilingual = {
  en: "Local search",
  "zh-cn": "本地索引",
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
export const HOME_HERO_TITLE: Multilingual = {
  en: "Turn testing tasks into actionable next steps",
  "zh-cn": "把测试任务变成可执行的下一步",
};

export const HOME_HERO_SUBTITLE: Multilingual = {
  en: "Start from the work at hand, then use reusable QA Skills, Prompts, workflows, and practical guides to move it forward.",
  "zh-cn": "从手头的测试任务开始，再用可复用的 QA Skills、Prompts、工作流和实践指南推动下一步。",
};

export const HOME_CTA_TASK: Multilingual = {
  en: "Start with a testing task",
  "zh-cn": "从当前测试任务开始",
};

export const HOME_CTA_SKILLS: Multilingual = {
  en: "Browse QA Skills",
  "zh-cn": "浏览 QA Skills",
};

export const HOME_EXPLORE_TITLE: Multilingual = {
  en: "Explore",
  "zh-cn": "探索内容",
};

export const HOME_EXPLORE_SUBTITLE: Multilingual = {
  en: "Enter by topic instead of one overloaded page.",
  "zh-cn": "按主题进入，而不是一次塞满整页列表",
};

export const HOME_EXPLORE_MORE: Multilingual = {
  en: "Learn more",
  "zh-cn": "了解更多",
};

/** 首页探索卡片：中英各 4 张，避免与首页主入口重复。路径相对 locale。 */
export const HOME_EXPLORE_CARDS: Record<
  Lang,
  ReadonlyArray<{
    key: string;
    path: string;
    title: string;
    desc: string;
    icon: string;
  }>
> = {
  "zh-cn": [
    {
      key: "wiki",
      path: "/wiki",
      title: "测试百科",
      desc: "从测试基础到专项测试的系统化知识，按主题持续积累与更新。",
      icon: "menu_book",
    },
    {
      key: "aiwiki",
      path: "/AIWiki",
      title: "AI Wiki",
      desc: "AI 测试与智能体工程的知识沉淀，紧跟技术演进持续更新。",
      icon: "smart_toy",
    },
    {
      key: "guild",
      path: "/guild/",
      title: "Guild",
      desc: "测试流程与质量策略的框架化指南，可直接落地到项目。",
      icon: "groups",
    },
    {
      key: "projects",
      path: "/projects/",
      title: "Projects",
      desc: "开源项目与作品集，代码与文档一并公开。",
      icon: "code",
    },
  ],
  en: [
    {
      key: "aiwiki",
      path: "/AIWiki",
      title: "AI Wiki",
      desc: "A living knowledge base for AI testing and agent engineering, updated as the field evolves.",
      icon: "smart_toy",
    },
    {
      key: "guild",
      path: "/guild/",
      title: "Guild",
      desc: "Frameworks and playbooks for test processes and quality strategy, ready to apply to real projects.",
      icon: "groups",
    },
    {
      key: "projects",
      path: "/projects/",
      title: "Projects",
      desc: "Open source projects and a portfolio, with code and docs in the open.",
      icon: "code",
    },
  ],
};

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
export const HOME_PROMPTS_SUBTITLE: Multilingual = {
  en: "Prompts by testing type",
  "zh-cn": "按测试类型精选提示词",
};
export const HOME_VIEW_ALL_PROMPTS: Multilingual = {
  en: "View all prompts",
  "zh-cn": "查看全部提示词",
};
export const HOME_QASKILLS_TITLE: Multilingual = {
  en: "Professional QA Skill Library",
  "zh-cn": "专业质量保证技能库",
};
export const HOME_QASKILLS_SUBTITLE: Multilingual = {
  en: "Selected testing and workflow skills",
  "zh-cn": "测试类型与工作流技能精选",
};
export const HOME_VIEW_ALL_SKILLS: Multilingual = {
  en: "View all skills",
  "zh-cn": "查看全部技能库",
};
export const HOME_AIWIKI_TITLE: Multilingual = {
  en: "AI Wiki",
  "zh-cn": "AI 百科",
};
export const HOME_AIWIKI_SUBTITLE: Multilingual = {
  en: "Selected AI and engineering terms",
  "zh-cn": "精选 AI 与工程实践词条",
};
export const HOME_VIEW_AIWIKI: Multilingual = {
  en: "Browse AI Wiki",
  "zh-cn": "进入 AI 百科",
};

/** 首页软件测试百科区块：标题（仅中文首页展示） */
export const HOME_WIKI_SECTION_TITLE = "软件测试百科";

/** 首页软件测试百科区块：介绍文案（约 150 字） */
export const HOME_WIKI_INTRO =
  "本站整理软件测试与质量领域常用术语与概念，涵盖功能测试、自动化测试、性能测试、安全测试、敏捷测试等方向，每条词条配有中英文名称与简要说明，方便测试与开发同学快速查阅、统一理解。下方随机展示部分词条，点击可进入对应百科页面查看详情。";

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

/** SEO：列表页 meta description（简短，便于搜索结果展示） */
export const BLOG_INDEX_DESCRIPTION: Multilingual = {
  en: "Browse all blog posts on software testing, API testing, automation, and QA. Series and tutorials by Nao Deng.",
  "zh-cn": "浏览本站全部博文：软件测试、接口测试、自动化与 QA 相关系列与教程。",
};
export const TAGS_INDEX_DESCRIPTION: Multilingual = {
  en: "Browse blog posts by tag. Software testing, automation, API testing, and more.",
  "zh-cn": "按标签浏览博文：软件测试、自动化、接口测试等。",
};
export const ARCHIVE_PAGE_DESCRIPTION: Multilingual = {
  en: "Blog archive: all posts listed by year.",
  "zh-cn": "博文归档：按年份查看全部文章。",
};
export const SERIES_INDEX_DESCRIPTION: Multilingual = {
  en: "Blog series and topic collections. Browse by series.",
  "zh-cn": "博文系列与专题集合，按系列浏览。",
};

/** SEO：关于页、项目页 meta description */
export const ABOUT_PAGE_DESCRIPTION: Multilingual = {
  en: "About Nao Deng. Software testing, QA, automation. Contact and featured projects.",
  "zh-cn": "关于 naodeng。软件测试、QA、自动化。联系方式与精选项目。",
};
export const PROJECTS_PAGE_DESCRIPTION: Multilingual = {
  en: "Featured projects: API testing, performance testing, UI automation, and QA tools.",
  "zh-cn": "精选项目：接口测试、性能测试、UI 自动化与 QA 工具。",
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
export const PAGINATION_FIRST: Multilingual = {
  en: "First",
  "zh-cn": "首页",
};
export const PAGINATION_LAST: Multilingual = {
  en: "Last",
  "zh-cn": "尾页",
};
export const PAGINATION_GO: Multilingual = {
  en: "Go",
  "zh-cn": "跳转",
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
export const ABOUT_HERO_NAME: Multilingual = {
  en: "Nao Deng",
  "zh-cn": "naodeng",
};
export const ABOUT_HERO_TAGLINE: Multilingual = {
  en: "Software testing & QA. I write about test automation, quality, and AI-assisted testing.",
  "zh-cn": "软件测试与质量。持续输出测试自动化、质量保障与 AI 辅助测试的内容。",
};
export const ABOUT_STAT_ARTICLES: Multilingual = {
  en: "articles",
  "zh-cn": "篇文章",
};
export const ABOUT_STAT_PROJECTS: Multilingual = {
  en: "featured projects",
  "zh-cn": "精选项目",
};
export const ABOUT_STAT_TOPICS: Multilingual = {
  en: "content pillars",
  "zh-cn": "内容栏目",
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

// ── QA Prompts 功能区 ──────────────────────────────────────────────────────

/** 顶部导航：QA 提示词库 */
export const NAV_QA_PROMPTS: Multilingual = {
  en: "QA Prompts",
  "zh-cn": "提示词库",
};

/** 顶部导航：QA 技能库 */
export const NAV_QA_SKILLS: Multilingual = {
  en: "QA Skills",
  "zh-cn": "技能库",
};

/** 提示词列表页 SEO 标题 */
export const PROMPTS_PAGE_TITLE: Multilingual = {
  en: "Software Testing Prompt Library",
  "zh-cn": "软件测试提示词库",
};

/** 提示词列表页 SEO 描述 */
export const PROMPTS_PAGE_DESCRIPTION: Multilingual = {
  en: "A curated QA prompt library for software testing, covering 15 testing types and 6 prompt frameworks in English and Chinese.",
  "zh-cn": "面向 QA 与软件测试的提示词库，涵盖 15 种测试类型和 6 种提示词框架，支持中英双语。",
};

/** 工作流程区块标题 */
export const PROMPTS_WORKFLOWS_SECTION_TITLE: Multilingual = {
  en: "Testing Workflows",
  "zh-cn": "测试工作流程",
};

/** 复制按钮文案 */
export const PROMPTS_COPY_BUTTON: Multilingual = {
  en: "Copy Prompt",
  "zh-cn": "复制提示词",
};

/** 复制成功确认文案 */
export const PROMPTS_COPY_SUCCESS: Multilingual = {
  en: "Copied!",
  "zh-cn": "已复制！",
};

/** 无内容时的占位文案 */
export const PROMPTS_EMPTY_STATE: Multilingual = {
  en: "No prompts available for this selection.",
  "zh-cn": "当前选项暂无提示词内容。",
};

/** 快速开始区块标题 */
export const PROMPTS_QUICKSTART_TITLE: Multilingual = {
  en: "Quick Start",
  "zh-cn": "快速开始",
};

/** AI 辅助测试流程参考区块标题 */
export const PROMPTS_FLOW_TITLE: Multilingual = {
  en: "AI-assisted Testing Flow Reference",
  "zh-cn": "AI 辅助测试流程参考",
};

// ── 页面级 SEO 描述 ────────────────────────────────────────────────────────

/** 首页 SEO 描述 */
export const HOME_PAGE_DESCRIPTION: Multilingual = {
  en: "Nao Deng's personal blog on software testing, QA, and test automation. Covering API testing, performance testing, UI automation, AI-assisted testing, and more.",
  "zh-cn": "naodeng 的个人博客，专注软件测试、质量保证与测试自动化。涵盖接口测试、性能测试、UI 自动化、AI 辅助测试等方向，中英双语更新。",
};

/** 首页 SEO 关键词 */
export const HOME_PAGE_KEYWORDS: Multilingual = {
  en: "software testing, QA, test automation, API testing, performance testing, UI testing, AI testing, Nao Deng, inaodeng",
  "zh-cn": "软件测试, 质量保证, 测试自动化, 接口测试, 性能测试, UI测试, AI辅助测试, naodeng, inaodeng",
};

/** Wiki 页 SEO 描述 */
export const WIKI_PAGE_DESCRIPTION: Multilingual = {
  en: "QA Wiki: a comprehensive glossary of software testing terms and definitions, covering functional testing, automation, performance, security, and agile testing.",
  "zh-cn": "软件测试百科: 收录 200+ 软件测试与质量领域术语，涵盖功能测试、自动化测试、性能测试、安全测试、敏捷测试等方向，中英文对照，供测试与开发同学查阅。",
};

/** Wiki 页 SEO 关键词 */
export const WIKI_PAGE_KEYWORDS: Multilingual = {
  en: "QA wiki, software testing glossary, testing terms, test automation terminology, QA definitions",
  "zh-cn": "软件测试百科, 测试术语, 测试词汇, 质量保证术语, 自动化测试词汇",
};

/** Guild 页 SEO 描述 */
export const GUILD_PAGE_DESCRIPTION: Multilingual = {
  en: "Test Automation Guild: structured learning paths for test automation, from beginner to advanced. Covers API testing (REST Assured, SuperTest, pytest), UI testing (Playwright, Cypress), and performance testing (k6, Gatling).",
  "zh-cn": "测试自动化指南: 系统化的测试自动化学习路径，从入门到进阶。涵盖接口测试（REST Assured、SuperTest、pytest）、UI 测试（Playwright、Cypress）和性能测试（k6、Gatling）等框架教程。",
};

/** Guild 页 SEO 关键词 */
export const GUILD_PAGE_KEYWORDS: Multilingual = {
  en: "test automation, learning path, REST Assured, SuperTest, pytest, Playwright, Cypress, k6, Gatling, API testing tutorial, performance testing tutorial",
  "zh-cn": "测试自动化, 学习路径, REST Assured, SuperTest, pytest, Playwright, Cypress, k6, Gatling, 接口测试教程, 性能测试教程",
};

/** Prompts 详情页 SEO 关键词前缀 */
export const PROMPTS_DETAIL_KEYWORDS: Multilingual = {
  en: "QA prompt, AI testing prompt, software testing AI, ChatGPT testing",
  "zh-cn": "QA提示词, AI测试提示词, 软件测试AI, ChatGPT测试",
};
