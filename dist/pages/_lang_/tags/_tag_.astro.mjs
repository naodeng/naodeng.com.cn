import { c as createAstro, a as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_D4o_drMZ.mjs';
import 'piccolore';
import { L as LOCALES, u as useTranslations } from '../../../chunks/i18n_JArgBu_T.mjs';
import { $ as $$Base } from '../../../chunks/Base_DDgaX0SB.mjs';
import { $ as $$Image } from '../../../chunks/_astro_assets_Dj_SzgrA.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_Cj66tl1I.mjs';
import { $ as $$PageHeadline } from '../../../chunks/PageHeadline_BUaKzQUD.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://naodeng.com.cn");
async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  const paths = [];
  for (const lang of Object.keys(LOCALES)) {
    const langPosts = allPosts.filter((post) => post.id.startsWith(`${lang}/`));
    const tags = [...new Set(langPosts.flatMap((post) => post.data.tags || []))];
    for (const tag of tags) {
      paths.push({
        params: { lang, tag },
        props: { posts: langPosts.filter((post) => post.data.tags?.includes(tag)) }
      });
    }
  }
  return paths;
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { lang, tag } = Astro2.params;
  const { posts } = Astro2.props;
  const locale = lang;
  const t = useTranslations(locale);
  const sortedPosts = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const title = `#${tag}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": title, "data-astro-cid-uqfqet3v": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeadline", $$PageHeadline, { "title": title, "data-astro-cid-uqfqet3v": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="tag-meta" data-astro-cid-uqfqet3v>${posts.length} ${t({ en: "posts found", "zh-cn": "\u7BC7\u6587\u7AE0" })}</p> ` })} <div class="blog-container" data-astro-cid-uqfqet3v> <div class="post-grid" data-astro-cid-uqfqet3v> ${sortedPosts.map((post) => {
    const [, ...id] = post.id.split("/");
    const postUrl = `/${locale}/blog/${id.join("/")}/`;
    const dateStr = post.data.date.toLocaleDateString(
      locale === "zh-cn" ? "zh-CN" : "en-US",
      { year: "numeric", month: "short", day: "numeric" }
    );
    return renderTemplate`<article class="post-card" data-astro-cid-uqfqet3v> <a${addAttribute(postUrl, "href")} class="post-link" data-astro-cid-uqfqet3v> ${post.data.cover && renderTemplate`<div class="post-cover" data-astro-cid-uqfqet3v> ${renderComponent($$result2, "Image", $$Image, { "src": post.data.cover, "alt": post.data.title, "width": 600, "height": 337, "data-astro-cid-uqfqet3v": true })} </div>`} <div class="post-content" data-astro-cid-uqfqet3v> <time class="post-date" data-astro-cid-uqfqet3v>${dateStr}</time> <h2 class="post-title" data-astro-cid-uqfqet3v>${post.data.title}</h2> ${post.data.description && renderTemplate`<p class="post-desc" data-astro-cid-uqfqet3v>${post.data.description}</p>`} </div> </a> ${post.data.tags && renderTemplate`<div class="post-tags" data-astro-cid-uqfqet3v> ${post.data.tags.map((t2) => renderTemplate`<a${addAttribute(`/${locale}/tags/${t2}/`, "href")}${addAttribute(`tag-link ${t2 === tag ? "active" : ""}`, "class")} data-astro-cid-uqfqet3v>
#${t2} </a>`)} </div>`} </article>`;
  })} </div> </div> ` })} `;
}, "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/tags/[tag].astro", void 0);

const $$file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/tags/[tag].astro";
const $$url = "/[lang]/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
