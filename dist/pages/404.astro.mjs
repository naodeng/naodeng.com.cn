import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as defineScriptVars, m as maybeRenderHead } from '../chunks/astro/server_D4o_drMZ.mjs';
import 'piccolore';
import 'clsx';
import { D as DEFAULT_LOCALE, L as LOCALES } from '../chunks/i18n_JArgBu_T.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://naodeng.com.cn");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const langs = Object.keys(LOCALES);
  const baseUrl = Astro2.site ;
  const defaultLocale = DEFAULT_LOCALE;
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><title>404 PAGE NOT FOUND</title><link rel="canonical"', ">", '<noscript><meta http-equiv="refresh"', "></noscript><script>(function(){", '\n      const urlHasLang = langs.includes(location.pathname.split("/")[1]);\n      const localStorageHasLang =\n        localStorage.selectedLang && langs.includes(localStorage.selectedLang);\n      const referrerHasLang =\n        document.referrer &&\n        new URL(document.referrer).host == location.host &&\n        langs.includes(new URL(document.referrer).pathname.split("/")[1]);\n\n      if (urlHasLang) {\n        localStorage.userAccessPath = location.pathname;\n        location.href = `${baseUrl + location.pathname.split("/")[1]}/404/`;\n      } else if (localStorageHasLang) {\n        location.href = baseUrl + localStorage.selectedLang + location.pathname;\n      } else if (referrerHasLang) {\n        const referrerLang = new URL(document.referrer).pathname.split("/")[1];\n        location.href = baseUrl + referrerLang + location.pathname;\n      } else {\n        location.href = baseUrl + defaultLocale + location.pathname;\n      }\n    })();</script>', "</head> <body> <h1>404 PAGE NOT FOUND</h1> <a", ">TOP PAGE</a> </body></html>"], ["<html", '> <head><meta charset="UTF-8"><title>404 PAGE NOT FOUND</title><link rel="canonical"', ">", '<noscript><meta http-equiv="refresh"', "></noscript><script>(function(){", '\n      const urlHasLang = langs.includes(location.pathname.split("/")[1]);\n      const localStorageHasLang =\n        localStorage.selectedLang && langs.includes(localStorage.selectedLang);\n      const referrerHasLang =\n        document.referrer &&\n        new URL(document.referrer).host == location.host &&\n        langs.includes(new URL(document.referrer).pathname.split("/")[1]);\n\n      if (urlHasLang) {\n        localStorage.userAccessPath = location.pathname;\n        location.href = \\`\\${baseUrl + location.pathname.split("/")[1]}/404/\\`;\n      } else if (localStorageHasLang) {\n        location.href = baseUrl + localStorage.selectedLang + location.pathname;\n      } else if (referrerHasLang) {\n        const referrerLang = new URL(document.referrer).pathname.split("/")[1];\n        location.href = baseUrl + referrerLang + location.pathname;\n      } else {\n        location.href = baseUrl + defaultLocale + location.pathname;\n      }\n    })();</script>', "</head> <body> <h1>404 PAGE NOT FOUND</h1> <a", ">TOP PAGE</a> </body></html>"])), addAttribute(DEFAULT_LOCALE, "lang"), addAttribute(Astro2.site, "href"), maybeRenderHead(), addAttribute(`0;url=${baseUrl + DEFAULT_LOCALE}/404/`, "content"), defineScriptVars({ langs, baseUrl, defaultLocale }), renderHead(), addAttribute(baseUrl, "href"));
}, "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/404.astro", void 0);
const $$file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
