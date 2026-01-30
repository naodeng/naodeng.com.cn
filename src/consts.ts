// 站点常量：Nao's Blog / 软件测试同学
// 可在项目中通过 import 使用

import type { Multilingual } from "@/i18n";

export const SITE_TITLE: string | Multilingual = {
  en: "Nao's Blog",
  "zh-cn": "软件测试同学",
};

export const SITE_DESCRIPTION: string | Multilingual = {
  en: "naodeng, naodeng.com.cn, personal blog, software testing, performance testing, API testing, automation testing, agile testing.",
  "zh-cn": "naodeng，naodeng.com.cn，naodeng，个人博客，软件测试，性能测试，接口测试，自动化测试，敏捷测试。",
};

export const X_ACCOUNT: string | Multilingual = "@inaodeng";

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
  en: "This page is not available in your language.",
  "zh-cn": "此页面不支持您的语言。",
};

// 首页简介（与 GitHub README 保持一致）
export const HOME_INTRO: Multilingual = {
  en: `Hi, I'm Nao Deng — **Quality Analyst, Not Quality Assurance.**
- Currently working on [Automation-Test-Starter](https://github.com/orgs/Automation-Test-Starter/repositories) and [QA Wiki](https://github.com/naodeng/QAWiki)
- Currently learning **Playwright** and **AI-assisted Testing**
- I regularly write articles on [naodeng.com.cn](https://naodeng.com.cn)
- How to reach me: **dengnao@gmail.com**
- Twitter: [**@inaodeng**](https://twitter.com/inaodeng)
- Support me by [**becoming a sponsor**](https://naodeng.com.cn/sponsor)`,
  "zh-cn": `你好，我是naodeng — **质量分析师，而非质量保证师。**
- 当前工作在 [Automation-Test-Starter](https://github.com/orgs/Automation-Test-Starter/repositories) 和 [QA Wiki](https://github.com/naodeng/QAWiki)
- 正在学习 **Playwright** 和 **AI 辅助测试**
- 定期在 [naodeng.com.cn](https://naodeng.com.cn) 发布技术文章
- 联系方式：**dengnao@gmail.com**
- Twitter: [**@inaodeng**](https://twitter.com/inaodeng)
- 赞助我 [**成为一个支持者**](https://naodeng.com.cn/sponsor)`,
};

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
export const HOME_VIEW_ALL: Multilingual = {
  en: "View all posts",
  "zh-cn": "查看全部",
};

// 关于页文案
export const ABOUT_PAGE_TITLE: Multilingual = {
  en: "About",
  "zh-cn": "关于",
};
export const ABOUT_ME_TITLE: Multilingual = {
  en: "About Me",
  "zh-cn": "关于我",
};
export const ABOUT_ME_BODY: Multilingual = {
  en: `- Currently working on [Automation-Test-Starter](https://github.com/orgs/Automation-Test-Starter/repositories) and [QA Wiki](https://github.com/naodeng/QAWiki)
- Currently learning **Playwright** and **AI-assisted Testing**
- I regularly write articles on [naodeng.com.cn](https://naodeng.com.cn)
- How to reach me: **dengnao@gmail.com**
- Twitter: [**@inaodeng**](https://twitter.com/inaodeng)`,
  "zh-cn": `- 当前工作在 [Automation-Test-Starter](https://github.com/orgs/Automation-Test-Starter/repositories) 和 [QA Wiki](https://github.com/naodeng/QAWiki)
- 正在学习 **Playwright** 和 **AI 辅助测试**
- 定期在 [naodeng.com.cn](https://naodeng.com.cn) 发布技术文章
- 联系方式：**dengnao@gmail.com**
- Twitter: [**@inaodeng**](https://twitter.com/inaodeng)`,
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
export const ABOUT_SUPPORT_BODY: Multilingual = {
  en: "If you find my work helpful, consider [becoming a sponsor](https://naodeng.com.cn/sponsor).",
  "zh-cn": "如果你觉得我的项目对你有帮助，欢迎 [赞助我](https://naodeng.com.cn/sponsor)。",
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
