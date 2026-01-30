import { c as createAstro, a as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_D4o_drMZ.mjs';
import 'piccolore';
import { u as useTranslations, L as LOCALES } from '../../chunks/i18n_JArgBu_T.mjs';
import { $ as $$Base } from '../../chunks/Base_DDgaX0SB.mjs';
import { $ as $$PageHeadline } from '../../chunks/PageHeadline_BUaKzQUD.mjs';
import { P as PROJECTS_LIST } from '../../chunks/projects_DNpYJzuN.mjs';
import { P as PROJECTS_PAGE_TITLE } from '../../chunks/consts_D5GAeagR.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://naodeng.com.cn");
const getStaticPaths = () => Object.keys(LOCALES).map((lang) => ({
  params: { lang }
}));
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const locale = Astro2.currentLocale;
  const t = useTranslations(locale);
  const title = t(PROJECTS_PAGE_TITLE);
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": title, "data-astro-cid-2zsj3y6l": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeadline", $$PageHeadline, { "title": title, "data-astro-cid-2zsj3y6l": true })} ${maybeRenderHead()}<div class="project-container" data-astro-cid-2zsj3y6l> <div class="project-grid" data-astro-cid-2zsj3y6l> ${PROJECTS_LIST.map((proj) => renderTemplate`<a${addAttribute(proj.url, "href")} target="_blank" rel="noopener noreferrer" class="project-card" data-astro-cid-2zsj3y6l> <div class="project-header" data-astro-cid-2zsj3y6l> <h2 class="project-name" data-astro-cid-2zsj3y6l>${t(proj.name)}</h2> <span class="external-icon" data-astro-cid-2zsj3y6l> <span class="material-icons-sharp" data-astro-cid-2zsj3y6l>open_in_new</span> </span> </div> <div class="project-tech-tags" data-astro-cid-2zsj3y6l> ${t(proj.techStack).split(/[、,，]/).map((tech) => renderTemplate`<span class="mini-tag" data-astro-cid-2zsj3y6l>${tech.trim()}</span>`)} </div> <p class="project-desc" data-astro-cid-2zsj3y6l>${t(proj.description)}</p> <div class="project-footer" data-astro-cid-2zsj3y6l> <span class="view-link" data-astro-cid-2zsj3y6l>${locale === "zh-cn" ? "\u67E5\u770B\u6E90\u7801" : "View Source"}</span> </div> </a>`)} </div> </div> ` })} `;
}, "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/projects/index.astro", void 0);

const $$file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/projects/index.astro";
const $$url = "/[lang]/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
