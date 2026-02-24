// 博客 collection：支持 tags、categories、series（与 Hugo 对应）
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/blog" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      author: z.string().optional(),
      tags: z.array(z.string()).min(1).max(3).optional(),
      categories: z.array(z.string()).optional(),
      series: z.array(z.string()).optional(),
    }),
});

// 文档 collection：用于 /docs 下的 Markdown/MDX，按语言分目录 en/、zh-cn/
const docs = defineCollection({
  loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/content/docs" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      /** 侧栏分组名（如 "Start"、"Guides"），用于生成导航 */
      section: z.string().optional(),
      /** 同组内排序，数字越小越靠前 */
      order: z.number().optional(),
    }),
});

// 测试百科（仅中文）：词条 Markdown，用于 /zh-cn/wiki/
// 推荐 frontmatter：title（中文 (English)）、description（一句话摘要，SEO）、section（首字母）、order（同组排序）
// generateId 加前缀 wiki--，避免条目 id 与正文 H1 的 rehype-slug id 相同导致 [glob-loader] Duplicate id 警告
const wiki = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/wiki",
    generateId: ({ entry }) => `wiki--${entry.replace(/\.md$/, "")}`,
  }),
  schema: () =>
    z.object({
      /** 页面标题，建议格式：中文 (English)，用于 SEO 与侧栏 */
      title: z.string().optional(),
      /** 页面描述，建议 1–2 句话、约 155 字内，用于 SEO */
      description: z.string().optional(),
      /** 侧栏分组首字母（A–Z/#），与 buildWikiSidebar 按字母分组一致 */
      section: z.string().optional(),
      /** 同组内排序，数字越小越靠前 */
      order: z.number().optional(),
    }),
});

// 测试自动化指南 collection：用于 /guild 下的学习路径内容
const guild = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guild" }),
  schema: () =>
    z.object({
      /** 文章标题 */
      title: z.string(),
      /** 文章描述 */
      description: z.string(),
      /** 测试类型：api-testing, ui-testing, performance-testing */
      testType: z.enum(['api-testing', 'ui-testing', 'performance-testing']),
      /** 测试框架：postman, pytest, rest-assured, supertest, bruno, playwright, cypress, k6, gatling */
      framework: z.string(),
      /** 编程语言 */
      language: z.string(),
      /** 学习阶段：getting-started, basic, advanced, ci-cd, best-practices */
      stage: z.enum(['getting-started', 'basic', 'advanced', 'ci-cd', 'best-practices']),
      /** 难度级别 */
      difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
      /** 预计学习时间（分钟） */
      duration: z.number().optional(),
      /** 排序权重 */
      order: z.number(),
      /** GitHub Demo 链接 */
      githubDemo: z.string().url().optional(),
      /** 官方文档链接 */
      officialDocs: z.string().url().optional(),
      /** 发布日期 */
      date: z.coerce.date().optional(),
      /** 更新日期 */
      updated: z.coerce.date().optional(),
    }),
});

export const collections = { blog, docs, wiki, guild };
