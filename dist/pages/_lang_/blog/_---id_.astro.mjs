import { c as createAstro, a as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, g as renderSlot, b as addAttribute } from '../../../chunks/astro/server_D4o_drMZ.mjs';
import 'piccolore';
import { $ as $$Base } from '../../../chunks/Base_DDgaX0SB.mjs';
/* empty css                                      */
import { r as renderEntry, g as getCollection } from '../../../chunks/_astro_content_Cj66tl1I.mjs';
import { $ as $$Image } from '../../../chunks/_astro_assets_Dj_SzgrA.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro$1 = createAstro("https://naodeng.com.cn");
const $$Article = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Article;
  const { title, description } = Astro2.props.frontmatter || Astro2.props;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "data-astro-cid-uwv4mmhs": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article data-astro-cid-uwv4mmhs> ${renderSlot($$result2, $$slots["default"])} </article> ` })} `;
}, "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/layouts/Article.astro", void 0);

const $$Astro = createAstro("https://naodeng.com.cn");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => {
    const [lang, ...id] = post.id.split("/");
    return {
      params: { lang, id: id.join("/") || void 0 },
      props: post
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { lang } = Astro2.params;
  const post = Astro2.props;
  const { Content } = await renderEntry(post);
  const title = post.data.title;
  return renderTemplate`${renderComponent($$result, "Layout", $$Article, { "title": title, "data-astro-cid-v3cnrnum": true }, { "default": async ($$result2) => renderTemplate`${post.data.cover && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": post.data.cover, "alt": post.data.title, "class": "cover", "data-astro-cid-v3cnrnum": true })}`}${maybeRenderHead()}<header data-astro-cid-v3cnrnum> <h1 data-astro-cid-v3cnrnum>${title}</h1> <time${addAttribute(post.data.date.toISOString(), "datetime")} data-astro-cid-v3cnrnum> ${post.data.date.toLocaleDateString(lang)} </time> ${post.data.tags && renderTemplate`<div class="tags" data-astro-cid-v3cnrnum> ${post.data.tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-v3cnrnum>${tag}</span>`)} </div>`} </header> ${renderComponent($$result2, "Content", Content, { "class": "material-icons", "data-astro-cid-v3cnrnum": true })} ` })} `;
}, "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/blog/[...id].astro", void 0);

const $$file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/blog/[...id].astro";
const $$url = "/[lang]/blog/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
