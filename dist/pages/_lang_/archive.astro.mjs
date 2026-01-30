import { c as createAstro, a as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_D4o_drMZ.mjs';
import 'piccolore';
import { u as useTranslations, L as LOCALES } from '../../chunks/i18n_JArgBu_T.mjs';
import { $ as $$Base } from '../../chunks/Base_DDgaX0SB.mjs';
import { g as getCollection } from '../../chunks/_astro_content_Cj66tl1I.mjs';
import { $ as $$PageHeadline } from '../../chunks/PageHeadline_BUaKzQUD.mjs';
import { l as ARCHIVE_PAGE_TITLE } from '../../chunks/consts_D5GAeagR.mjs';
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
  const title = t(ARCHIVE_PAGE_TITLE);
  const allPosts = (await getCollection("blog")).filter((post) => post.id.split("/")[0] === locale).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const postsByYear = allPosts.reduce((acc, post) => {
    const year = post.data.date.getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});
  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": title, "data-astro-cid-hvan72lk": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeadline", $$PageHeadline, { "title": title, "data-astro-cid-hvan72lk": true })} ${maybeRenderHead()}<div class="archive-list" data-astro-cid-hvan72lk> ${years.map((year) => renderTemplate`<section class="year-section" data-astro-cid-hvan72lk> <h2 class="year-title" data-astro-cid-hvan72lk>${year}</h2> <ul class="posts-list" data-astro-cid-hvan72lk> ${postsByYear[Number(year)].map((post) => {
    const [, ...idParts] = post.id.split("/");
    const postUrl = `/${locale}/blog/${idParts.join("/")}/`;
    const dateStr = post.data.date.toLocaleDateString(
      locale === "zh-cn" ? "zh-CN" : "en-US",
      { month: "short", day: "numeric" }
    );
    return renderTemplate`<li data-astro-cid-hvan72lk> <div class="post-item" data-astro-cid-hvan72lk> <span class="date" data-astro-cid-hvan72lk>${dateStr}</span> <a${addAttribute(postUrl, "href")} class="post-title" data-astro-cid-hvan72lk> ${post.data.title} </a> </div> </li>`;
  })} </ul> </section>`)} </div> ` })} `;
}, "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/archive/index.astro", void 0);

const $$file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/archive/index.astro";
const $$url = "/[lang]/archive";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
