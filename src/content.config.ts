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
      tags: z.array(z.string()).min(4).max(6).optional(),
      categories: z.array(z.string()).optional(),
      series: z.array(z.string()).optional(),
    }),
});

export const collections = { blog };
