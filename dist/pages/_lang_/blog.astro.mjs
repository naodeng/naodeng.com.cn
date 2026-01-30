import { c as createAstro, a as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_D4o_drMZ.mjs';
import 'piccolore';
import { u as useTranslations, L as LOCALES } from '../../chunks/i18n_JArgBu_T.mjs';
import { $ as $$Base } from '../../chunks/Base_DDgaX0SB.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Dj_SzgrA.mjs';
import { g as getCollection } from '../../chunks/_astro_content_Cj66tl1I.mjs';
import { $ as $$PageHeadline } from '../../chunks/PageHeadline_BUaKzQUD.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://naodeng.com.cn");
const getStaticPaths = () => Object.keys(LOCALES).map((lang) => ({
  params: { lang }
}));
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const locale = Astro2.currentLocale;
  const t = useTranslations(locale);
  const posts = (await getCollection("blog")).filter((post) => post.id.split("/")[0] === locale).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const title = t({ en: "Blog", "zh-cn": "\u535A\u5BA2" });
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": title, "data-astro-cid-hrno2mm7": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeadline", $$PageHeadline, { "title": title, "data-astro-cid-hrno2mm7": true })} ${maybeRenderHead()}<div class="blog-container" data-astro-cid-hrno2mm7> <div class="post-grid" data-astro-cid-hrno2mm7> ${posts.map((post) => {
    const [, ...id] = post.id.split("/");
    const postUrl = `/${locale}/blog/${id.join("/")}/`;
    const dateStr = post.data.date.toLocaleDateString(
      locale === "zh-cn" ? "zh-CN" : "en-US",
      { year: "numeric", month: "short", day: "numeric" }
    );
    return renderTemplate`<article class="post-card" data-astro-cid-hrno2mm7> <a${addAttribute(postUrl, "href")} class="post-link" data-astro-cid-hrno2mm7> ${post.data.cover && renderTemplate`<div class="post-cover" data-astro-cid-hrno2mm7> ${renderComponent($$result2, "Image", $$Image, { "src": post.data.cover, "alt": post.data.title, "width": 600, "height": 337, "data-astro-cid-hrno2mm7": true })} </div>`} <div class="post-content" data-astro-cid-hrno2mm7> <time class="post-date" data-astro-cid-hrno2mm7>${dateStr}</time> <h2 class="post-title" data-astro-cid-hrno2mm7>${post.data.title}</h2> ${post.data.description && renderTemplate`<p class="post-desc" data-astro-cid-hrno2mm7>${post.data.description}</p>`} </div> </a> ${post.data.tags && renderTemplate`<div class="post-tags" data-astro-cid-hrno2mm7> ${post.data.tags.slice(0, 3).map((tag) => renderTemplate`<a${addAttribute(`/${locale}/tags/${tag}/`, "href")} class="tag-link" data-astro-cid-hrno2mm7>
#${tag} </a>`)} </div>`} </article>`;
  })} </div> </div> ` })} `;
}, "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/blog/index.astro", void 0);

const $$file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/blog/index.astro";
const $$url = "/[lang]/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
