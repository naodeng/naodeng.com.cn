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

  const index = [...blogIndex, ...guildIndex];

  return new Response(JSON.stringify(index), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
