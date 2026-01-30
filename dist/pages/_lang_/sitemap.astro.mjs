import { c as createAstro, a as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_D4o_drMZ.mjs';
import 'piccolore';
import { u as useTranslations, L as LOCALES, g as getRelativeLocaleUrl } from '../../chunks/i18n_JArgBu_T.mjs';
import { $ as $$Base } from '../../chunks/Base_DDgaX0SB.mjs';
import { g as getCollection } from '../../chunks/_astro_content_Cj66tl1I.mjs';
import { $ as $$PageHeadline } from '../../chunks/PageHeadline_BUaKzQUD.mjs';
import { n as SITEMAP_PAGE_TITLE, N as NAV_HOME, o as NAV_ABOUT, p as NAV_ARCHIVE, q as NAV_PROJECTS, r as NAV_SPONSOR, s as SITEMAP_XML_LABEL } from '../../chunks/consts_D5GAeagR.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://naodeng.com.cn");
const getStaticPaths = () => Object.keys(LOCALES).map((lang) => ({
  params: { lang }
}));
const $$Sitemap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sitemap;
  const locale = Astro2.currentLocale;
  const t = useTranslations(locale);
  const title = t(SITEMAP_PAGE_TITLE);
  const posts = (await getCollection("blog")).filter((post) => post.id.split("/")[0] === locale).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const tags = [...new Set(posts.flatMap((p) => p.data.tags || []))].sort();
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": title, "data-astro-cid-jqeyb4sc": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeadline", $$PageHeadline, { "title": title, "data-astro-cid-jqeyb4sc": true })} ${maybeRenderHead()}<div class="sitemap-content" data-astro-cid-jqeyb4sc> <!-- 主要页面 --> <section class="sitemap-section" data-astro-cid-jqeyb4sc> <h2 class="section-title" data-astro-cid-jqeyb4sc>${locale === "zh-cn" ? "\u4E3B\u8981\u9875\u9762" : "Main Pages"}</h2> <ul class="link-list" data-astro-cid-jqeyb4sc> <li data-astro-cid-jqeyb4sc><a${addAttribute(getRelativeLocaleUrl(locale, "/"), "href")} data-astro-cid-jqeyb4sc>${t(NAV_HOME)}</a></li> <li data-astro-cid-jqeyb4sc><a${addAttribute(getRelativeLocaleUrl(locale, "/about"), "href")} data-astro-cid-jqeyb4sc>${t(NAV_ABOUT)}</a></li> <li data-astro-cid-jqeyb4sc><a${addAttribute(getRelativeLocaleUrl(locale, "/archive"), "href")} data-astro-cid-jqeyb4sc>${t(NAV_ARCHIVE)}</a></li> <li data-astro-cid-jqeyb4sc><a${addAttribute(getRelativeLocaleUrl(locale, "/blog"), "href")} data-astro-cid-jqeyb4sc>${locale === "zh-cn" ? "\u535A\u5BA2" : "Blog"}</a></li> <li data-astro-cid-jqeyb4sc><a${addAttribute(getRelativeLocaleUrl(locale, "/projects"), "href")} data-astro-cid-jqeyb4sc>${t(NAV_PROJECTS)}</a></li> <li data-astro-cid-jqeyb4sc><a${addAttribute(getRelativeLocaleUrl(locale, "/sponsor"), "href")} data-astro-cid-jqeyb4sc>${t(NAV_SPONSOR)}</a></li> </ul> </section> <!-- 按标签浏览 --> ${tags.length > 0 && renderTemplate`<section class="sitemap-section" data-astro-cid-jqeyb4sc> <h2 class="section-title" data-astro-cid-jqeyb4sc>${locale === "zh-cn" ? "\u6309\u6807\u7B7E\u6D4F\u89C8" : "Browse by Tag"}</h2> <div class="tags-wrap" data-astro-cid-jqeyb4sc> ${tags.map((tag) => renderTemplate`<a${addAttribute(getRelativeLocaleUrl(locale, `/tags/${tag}`), "href")} class="tag-pill" data-astro-cid-jqeyb4sc>#${tag}</a>`)} </div> </section>`} <!-- 博文列表（可折叠或截断） --> <section class="sitemap-section" data-astro-cid-jqeyb4sc> <h2 class="section-title" data-astro-cid-jqeyb4sc>${locale === "zh-cn" ? "\u5168\u90E8\u6587\u7AE0" : "All Posts"}</h2> <ul class="post-list" data-astro-cid-jqeyb4sc> ${posts.map((post) => {
    const [, ...idParts] = post.id.split("/");
    const url = getRelativeLocaleUrl(locale, `/blog/${idParts.join("/")}`);
    return renderTemplate`<li data-astro-cid-jqeyb4sc> <a${addAttribute(url, "href")} data-astro-cid-jqeyb4sc>${post.data.title}</a> </li>`;
  })} </ul> </section> <!-- XML 站点地图 --> <section class="sitemap-section xml-section" data-astro-cid-jqeyb4sc> <h2 class="section-title" data-astro-cid-jqeyb4sc>${locale === "zh-cn" ? "\u641C\u7D22\u5F15\u64CE" : "Search Engines"}</h2> <p data-astro-cid-jqeyb4sc> <a href="/sitemap-index.xml" target="_blank" rel="noopener noreferrer" class="xml-link" data-astro-cid-jqeyb4sc> ${t(SITEMAP_XML_LABEL)} </a> </p> </section> </div> ` })} `;
}, "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/sitemap.astro", void 0);

const $$file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/sitemap.astro";
const $$url = "/[lang]/sitemap";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sitemap,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
