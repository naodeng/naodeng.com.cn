import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export interface SearchIndexItem {
  title: string;
  description: string;
  url: string;
  date: string;
  tags?: string[];
}

export const getStaticPaths = () =>
  [
    { params: { lang: "en" } },
    { params: { lang: "zh-cn" } },
  ] as const;

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as string;
  const allPosts = await getCollection("blog");
  const posts = allPosts.filter((p) => p.id.startsWith(`${lang}/`));

  const index: SearchIndexItem[] = posts.map((post) => {
    const [, ...idParts] = post.id.split("/");
    const url = `/${lang}/blog/${idParts.join("/")}/`;
    return {
      title: post.data.title,
      description: post.data.description,
      url,
      date: post.data.date.toISOString(),
      tags: post.data.tags,
    };
  });

  return new Response(JSON.stringify(index), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
