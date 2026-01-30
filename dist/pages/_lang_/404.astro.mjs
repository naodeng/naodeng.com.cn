import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_D4o_drMZ.mjs';
import 'piccolore';
import { u as useTranslations, l as localeParams, L as LOCALES } from '../../chunks/i18n_JArgBu_T.mjs';
import { $ as $$Base } from '../../chunks/Base_DDgaX0SB.mjs';
/* empty css                                  */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://naodeng.com.cn");
const getStaticPaths = () => localeParams;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const t = useTranslations(Astro2.currentLocale);
  const title = t({
    en: "Page Not Found",
    "zh-cn": "\u9875\u9762\u672A\u627E\u5230"
  });
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  if (localStorage.userAccessPath) {\n    history.replaceState("", "", localStorage.userAccessPath);\n    document.querySelectorAll("a[data-lang-path]").forEach((a) => {\n      const pathnames = localStorage.userAccessPath.split("/");\n      const lang = a.getAttribute("data-lang-path");\n      pathnames[1] = lang;\n      a.href = pathnames.join("/");\n    });\n    localStorage.removeItem("userAccessPath");\n  }\n<\/script> '])), renderComponent($$result, "Layout", $$Base, { "title": title, "data-astro-cid-oiktujcs": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container" data-astro-cid-oiktujcs> <h1 data-astro-cid-oiktujcs> <b data-astro-cid-oiktujcs>404</b> ${title} </h1> <p data-astro-cid-oiktujcs> ${t({
    en: "The page you are looking for could not be found. Please return to the top or try another language.",
    "zh-cn": "\u60A8\u8981\u67E5\u627E\u7684\u9875\u9762\u4E0D\u5B58\u5728\u3002\u8BF7\u8FD4\u56DE\u9876\u90E8\u6216\u5C1D\u8BD5\u5176\u4ED6\u8BED\u8A00\u3002"
  })} </p> <a href="/" class="gotop" data-astro-cid-oiktujcs> ${t({ en: "Top Page", "zh-cn": "\u9996\u9875" })} </a> <section class="langList" data-astro-cid-oiktujcs> <h2 data-astro-cid-oiktujcs>${t({ en: "View in other languages", "zh-cn": "\u7528\u5176\u4ED6\u8BED\u8A00\u67E5\u770B" })}</h2> <ul data-astro-cid-oiktujcs> ${Object.entries(LOCALES).map(([lang, { label }]) => renderTemplate`<li data-astro-cid-oiktujcs> <a${addAttribute(`/${lang}/`, "href")}${addAttribute(lang, "data-lang-path")}${addAttribute(`localStorage.selectedLang = "${lang}"`, "onclick")}${addAttribute(LOCALES[lang].dir || null, "dir")} data-astro-cid-oiktujcs> ${label} </a> </li>`)} </ul> </section> </section> ` }));
}, "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/404.astro", void 0);

const $$file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/404.astro";
const $$url = "/[lang]/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
