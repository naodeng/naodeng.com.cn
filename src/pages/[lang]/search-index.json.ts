import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export interface SearchIndexItem {
  title: string;
  description: string;
  url: string;
  date: string;
  tags?: string[];
  type?: string; // 添加类型字段：blog, guild, wiki
}

export const getStaticPaths = () =>
  [
    { params: { lang: "en" } },
    { params: { lang: "zh-cn" } },
  ] as const;

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as string;
  
  // 获取博客文章
  const allPosts = await getCollection("blog");
  const posts = allPosts.filter((p) => p.id.startsWith(`${lang}/`));

  const blogIndex: SearchIndexItem[] = posts.map((post) => {
    const [, ...idParts] = post.id.split("/");
    const url = `/${lang}/blog/${idParts.join("/").toLowerCase()}/`;
    return {
      title: post.data.title,
      description: post.data.description,
      url,
      date: post.data.date.toISOString(),
      tags: post.data.tags,
      type: "blog",
    };
  });

  // 获取 Guild 文章
  const allGuildPosts = await getCollection("guild");
  const guildPosts = allGuildPosts.filter((p) => p.id.startsWith(`${lang}/`));

  const guildIndex: SearchIndexItem[] = guildPosts.map((post) => {
    // id 格式: zh-cn/api-testing/postman/getting-started
    const parts = post.id.split("/");
    const urlPath = parts.slice(1).join("/"); // 移除 locale 前缀
    const url = `/${lang}/guild/${urlPath}/`;
    return {
      title: post.data.title,
      description: post.data.description,
      url,
      date: post.data.date?.toISOString() || new Date().toISOString(),
      tags: [post.data.framework, post.data.testType, post.data.stage],
      type: "guild",
    };
  });

  // 获取 prompts 条目，按 testingType 去重，每个 testingType 生成一条索引项
  const allPrompts = await getCollection("prompts");
  const localePrompts = allPrompts.filter((p) => p.data.lang === lang);
  const promptTypeMap = new Map<string, typeof localePrompts[0]>();
  for (const p of localePrompts.sort((a, b) => a.data.order - b.data.order)) {
    if (!promptTypeMap.has(p.data.testingType)) {
      promptTypeMap.set(p.data.testingType, p);
    }
  }
  const promptsIndex: SearchIndexItem[] = Array.from(promptTypeMap.values()).map((p) => ({
    title: p.data.title,
    description: p.data.description,
    url: `/${lang}/prompts/${p.data.testingType}/`,
    date: new Date().toISOString(),
    tags: [p.data.testingType],
    type: "prompts",
  }));

  // 获取 workflows 条目，每条生成一条索引项
  const allWorkflows = await getCollection("workflows");
  const localeWorkflows = allWorkflows.filter((w) => w.data.lang === lang);
  const workflowsIndex: SearchIndexItem[] = localeWorkflows.map((w) => ({
    title: w.data.title,
    description: w.data.description,
    url: `/${lang}/prompts/workflows/${w.data.workflowType}/`,
    date: new Date().toISOString(),
    tags: [w.data.workflowType],
    type: "workflows",
  }));

  const fullIndex = [...blogIndex, ...guildIndex, ...promptsIndex, ...workflowsIndex];

  return new Response(JSON.stringify(fullIndex), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
