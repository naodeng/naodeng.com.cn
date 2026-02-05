import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /
Disallow: /cdn-cgi/
Disallow: /index.xml

# 爬虫友好：优先抓取内容页
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL));
};
