import { g as getCollection } from '../../chunks/_astro_content_Cj66tl1I.mjs';
export { renderers } from '../../renderers.mjs';

const getStaticPaths = () => [
  { params: { lang: "en" } },
  { params: { lang: "zh-cn" } }
];
const GET = async ({ params }) => {
  const lang = params.lang;
  const allPosts = await getCollection("blog");
  const posts = allPosts.filter((p) => p.id.startsWith(`${lang}/`));
  const index = posts.map((post) => {
    const [, ...idParts] = post.id.split("/");
    const url = `/${lang}/blog/${idParts.join("/")}/`;
    return {
      title: post.data.title,
      description: post.data.description,
      url,
      date: post.data.date.toISOString(),
      tags: post.data.tags
    };
  });
  return new Response(JSON.stringify(index), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
