import rss from '@astrojs/rss';
import { g as getCollection } from '../../chunks/_astro_content_Cj66tl1I.mjs';
import { S as SITE_TITLE, m as SITE_DESCRIPTION } from '../../chunks/consts_D5GAeagR.mjs';
import { l as localeParams } from '../../chunks/i18n_JArgBu_T.mjs';
export { renderers } from '../../renderers.mjs';

const getStaticPaths = () => localeParams;

async function GET(context) {
  const locale = context.params.lang;

  const localeTitle =
    typeof SITE_TITLE === "string" ? SITE_TITLE : SITE_TITLE[locale];
  const localeDescription =
    typeof SITE_DESCRIPTION === "string"
      ? SITE_DESCRIPTION
      : SITE_DESCRIPTION[locale];

  const posts = await getCollection("blog", ({ id }) => {
    return id.split("/")[0] === locale;
  });
  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: localeTitle,
    description: localeDescription,
    site: context.site,
    items: posts.map((post) => {
      const [, ...idParts] = post.id.split("/");
      const slug = idParts.join("/");
      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/${locale}/blog/${slug}/`,
      };
    }),
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
