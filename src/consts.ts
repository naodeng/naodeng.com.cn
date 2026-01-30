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

// 顶部导航：赞助
export const NAV_SPONSOR: Multilingual = {
  en: "Sponsor",
  "zh-cn": "赞助",
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
  en: `Awesome QA Prompt is a completely open-source project dedicated to providing high-quality AI prompt collections for the QA community. Your support will help us:
- **Continuous Content Updates**: Keep the prompt library timely and professional
- **Feature Expansion**: Add more testing types and framework support
- **Multi-language Support**: Improve bilingual content in Chinese and English
- **Documentation Enhancement**: Improve documentation quality and user experience
- **Technical Maintenance**: Keep the website stable and optimize performance`,
  "zh-cn": `Awesome QA Prompt 是一个完全开源的项目，致力于为 QA 社区提供高质量的 AI 提示词集合。您的支持将帮助我们：
- **持续更新内容**：保持提示词库的时效性和专业性
- **扩展功能**：添加更多测试类型和框架支持
- **多语言支持**：完善中英文双语内容
- **文档优化**：改进文档质量和用户体验
- **技术维护**：保持网站稳定运行和性能优化`,
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
  en: `As a sponsor of the project, you will receive:
- **Priority Support**: Get priority notifications for new features and content updates
- **Thank You Email**: Receive a thank you email from the maintainer
- **Sponsor List**: Display your name in the project README and website (optional)
- **Feature Suggestions**: Priority consideration for your feature suggestions and needs`,
  "zh-cn": `作为项目的赞助者，您将获得：
- **优先支持**：优先获得新功能和内容的更新通知
- **感谢邮件**：收到来自维护者的感谢邮件
- **赞助者列表**：在项目 README 和网站中展示您的名字（可选）
- **功能建议**：优先考虑您的功能建议和需求`,
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
