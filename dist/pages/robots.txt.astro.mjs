export { renderers } from '../renderers.mjs';

const getRobotsTxt = (sitemapURL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;
const GET = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL));
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
