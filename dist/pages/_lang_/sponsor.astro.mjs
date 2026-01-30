import { c as createAstro, a as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_D4o_drMZ.mjs';
import 'piccolore';
import { u as useTranslations, L as LOCALES } from '../../chunks/i18n_JArgBu_T.mjs';
import { $ as $$Base } from '../../chunks/Base_DDgaX0SB.mjs';
import { $ as $$PageHeadline } from '../../chunks/PageHeadline_BUaKzQUD.mjs';
import { marked } from 'marked';
import { t as SPONSOR_PAGE_TITLE, u as SPONSOR_WHY_BODY, v as SPONSOR_BENEFITS_BODY, w as SPONSOR_WHY_TITLE, x as SPONSOR_METHODS_TITLE, y as SPONSOR_BENEFITS_TITLE } from '../../chunks/consts_D5GAeagR.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://naodeng.com.cn");
const getStaticPaths = () => Object.keys(LOCALES).map((lang) => ({
  params: { lang }
}));
const $$Sponsor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sponsor;
  const locale = Astro2.currentLocale;
  const t = useTranslations(locale);
  const title = t(SPONSOR_PAGE_TITLE);
  const whyBodyHtml = marked(t(SPONSOR_WHY_BODY), { gfm: true });
  const benefitsBodyHtml = marked(t(SPONSOR_BENEFITS_BODY), { gfm: true });
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": title, "data-astro-cid-zwblcp6s": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeadline", $$PageHeadline, { "title": title, "data-astro-cid-zwblcp6s": true })} ${maybeRenderHead()}<section class="sponsor-section" data-astro-cid-zwblcp6s> <h2 class="section-title" data-astro-cid-zwblcp6s>${t(SPONSOR_WHY_TITLE)}</h2> <div class="prose" data-astro-cid-zwblcp6s>${unescapeHTML(whyBodyHtml)}</div> </section> <section class="sponsor-section" data-astro-cid-zwblcp6s> <h2 class="section-title" data-astro-cid-zwblcp6s>${t(SPONSOR_METHODS_TITLE)}</h2> <div class="methods-grid" data-astro-cid-zwblcp6s> <div class="method-card" data-astro-cid-zwblcp6s> <h3 data-astro-cid-zwblcp6s>Buy Me A Coffee</h3> <p data-astro-cid-zwblcp6s>${locale === "zh-cn" ? "\u63A8\u8350\u56FD\u9645\u7528\u6237\u4F7F\u7528" : "Recommended for international users"}</p> <a href="https://www.buymeacoffee.com/naodeng" target="_blank" rel="noopener noreferrer" class="btn" data-astro-cid-zwblcp6s>
Buy Me A Coffee
</a> </div> <div class="method-card" data-astro-cid-zwblcp6s> <h3 data-astro-cid-zwblcp6s>Ko-fi</h3> <p data-astro-cid-zwblcp6s>${locale === "zh-cn" ? "\u652F\u6301\u4E00\u6B21\u6027\u6216\u5B9A\u671F\u8D5E\u52A9" : "Support one-time or recurring sponsorships"}</p> <a href="https://ko-fi.com/naodeng" target="_blank" rel="noopener noreferrer" class="btn" data-astro-cid-zwblcp6s>
Ko-fi
</a> </div> <div class="method-card qr-card" data-astro-cid-zwblcp6s> <h3 data-astro-cid-zwblcp6s>${locale === "zh-cn" ? "\u5FAE\u4FE1\u652F\u4ED8" : "WeChat Pay"}</h3> <img src="/images/wechat-qr-code.png" alt="WeChat Pay QR Code" loading="lazy" data-astro-cid-zwblcp6s> </div> <div class="method-card qr-card" data-astro-cid-zwblcp6s> <h3 data-astro-cid-zwblcp6s>${locale === "zh-cn" ? "\u652F\u4ED8\u5B9D" : "Alipay"}</h3> <img src="/images/alipay-qr-code.png" alt="Alipay QR Code" loading="lazy" data-astro-cid-zwblcp6s> </div> </div> </section> <section class="sponsor-section" data-astro-cid-zwblcp6s> <h2 class="section-title" data-astro-cid-zwblcp6s>${t(SPONSOR_BENEFITS_TITLE)}</h2> <div class="prose" data-astro-cid-zwblcp6s>${unescapeHTML(benefitsBodyHtml)}</div> </section> <section class="sponsor-section" data-astro-cid-zwblcp6s> <p class="tagline" data-astro-cid-zwblcp6s> <strong data-astro-cid-zwblcp6s>${locale === "zh-cn" ? "\u8BA9 AI \u6210\u4E3A\u6D4B\u8BD5\u5DE5\u7A0B\u5E08\u6700\u597D\u7684\u52A9\u624B\uFF01 \u{1F680}" : "Let AI be the best assistant for test engineers! \u{1F680}"}</strong> </p> </section> ` })} `;
}, "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/sponsor.astro", void 0);

const $$file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/sponsor.astro";
const $$url = "/[lang]/sponsor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sponsor,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
