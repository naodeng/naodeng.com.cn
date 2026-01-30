import { c as createAstro, a as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../../chunks/astro/server_D4o_drMZ.mjs';
import 'piccolore';
import { u as useTranslations, L as LOCALES } from '../../chunks/i18n_JArgBu_T.mjs';
import { $ as $$Base } from '../../chunks/Base_DDgaX0SB.mjs';
import { marked } from 'marked';
import { $ as $$PageHeadline } from '../../chunks/PageHeadline_BUaKzQUD.mjs';
import { A as ABOUT_PAGE_TITLE, a as ABOUT_ME_BODY, b as ABOUT_SUPPORT_BODY, c as ABOUT_CONNECT_BODY, d as ABOUT_ME_TITLE, e as ABOUT_TECH_TITLE, f as ABOUT_TECH_TESTING, g as ABOUT_TECH_LANGUAGES, h as ABOUT_TECH_DEVOPS, i as ABOUT_PROJECTS_TITLE, F as FEATURED_PROJECTS, j as ABOUT_SUPPORT_TITLE, k as ABOUT_CONNECT_TITLE } from '../../chunks/consts_D5GAeagR.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://naodeng.com.cn");
const getStaticPaths = () => Object.keys(LOCALES).map((lang) => ({
  params: { lang }
}));
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const locale = Astro2.currentLocale;
  const t = useTranslations(locale);
  const title = t(ABOUT_PAGE_TITLE);
  const testingBadges = [
    { alt: "Playwright", src: "https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" },
    { alt: "Selenium", src: "https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white" },
    { alt: "Cypress", src: "https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" },
    { alt: "Postman", src: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
    { alt: "K6", src: "https://img.shields.io/badge/K6-7D64FF?style=for-the-badge&logo=k6&logoColor=white" }
  ];
  const languageBadges = [
    { alt: "Python", src: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
    { alt: "JavaScript", src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
    { alt: "TypeScript", src: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" },
    { alt: "Java", src: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" }
  ];
  const devOpsBadges = [
    { alt: "GitHub Actions", src: "https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" },
    { alt: "Docker", src: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" }
  ];
  const aboutMeHtml = marked(t(ABOUT_ME_BODY), { gfm: true });
  const supportHtml = marked(t(ABOUT_SUPPORT_BODY), { gfm: true });
  const connectHtml = marked(t(ABOUT_CONNECT_BODY), { gfm: true });
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "title": title, "data-astro-cid-xxsk6khd": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeadline", $$PageHeadline, { "title": title, "data-astro-cid-xxsk6khd": true })} ${maybeRenderHead()}<section class="about-section" data-astro-cid-xxsk6khd> <h2 class="section-title" data-astro-cid-xxsk6khd>${t(ABOUT_ME_TITLE)}</h2> <div class="prose" data-astro-cid-xxsk6khd>${unescapeHTML(aboutMeHtml)}</div> </section> <section class="about-section" data-astro-cid-xxsk6khd> <h2 class="section-title" data-astro-cid-xxsk6khd>${t(ABOUT_TECH_TITLE)}</h2> <h3 class="subsection-title" data-astro-cid-xxsk6khd>${t(ABOUT_TECH_TESTING)}</h3> <div class="badges" data-astro-cid-xxsk6khd> ${testingBadges.map((b) => renderTemplate`<img${addAttribute(b.src, "src")}${addAttribute(b.alt, "alt")} width="128" height="28" loading="lazy" data-astro-cid-xxsk6khd>`)} </div> <h3 class="subsection-title" data-astro-cid-xxsk6khd>${t(ABOUT_TECH_LANGUAGES)}</h3> <div class="badges" data-astro-cid-xxsk6khd> ${languageBadges.map((b) => renderTemplate`<img${addAttribute(b.src, "src")}${addAttribute(b.alt, "alt")} width="128" height="28" loading="lazy" data-astro-cid-xxsk6khd>`)} </div> <h3 class="subsection-title" data-astro-cid-xxsk6khd>${t(ABOUT_TECH_DEVOPS)}</h3> <div class="badges" data-astro-cid-xxsk6khd> ${devOpsBadges.map((b) => renderTemplate`<img${addAttribute(b.src, "src")}${addAttribute(b.alt, "alt")} width="128" height="28" loading="lazy" data-astro-cid-xxsk6khd>`)} </div> </section> <section class="about-section" data-astro-cid-xxsk6khd> <h2 class="section-title" data-astro-cid-xxsk6khd>${t(ABOUT_PROJECTS_TITLE)}</h2> <ul class="project-list" data-astro-cid-xxsk6khd> ${FEATURED_PROJECTS.map((proj) => renderTemplate`<li data-astro-cid-xxsk6khd> <a${addAttribute(proj.url, "href")} target="_blank" rel="noopener noreferrer" class="project-card" data-astro-cid-xxsk6khd> <strong data-astro-cid-xxsk6khd>${t(proj.title)}</strong> <span class="project-desc" data-astro-cid-xxsk6khd>${t(proj.description)}</span> <span class="material-icons-sharp dir" data-astro-cid-xxsk6khd>open_in_new</span> </a> </li>`)} </ul> </section> <section class="about-section" data-astro-cid-xxsk6khd> <h2 class="section-title" data-astro-cid-xxsk6khd>${t(ABOUT_SUPPORT_TITLE)}</h2> <div class="prose" data-astro-cid-xxsk6khd>${unescapeHTML(supportHtml)}</div> </section> <section class="about-section" data-astro-cid-xxsk6khd> <h2 class="section-title" data-astro-cid-xxsk6khd>${t(ABOUT_CONNECT_TITLE)}</h2> <div class="prose" data-astro-cid-xxsk6khd>${unescapeHTML(connectHtml)}</div> </section> ` })} `;
}, "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/about.astro", void 0);

const $$file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/pages/[lang]/about.astro";
const $$url = "/[lang]/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
