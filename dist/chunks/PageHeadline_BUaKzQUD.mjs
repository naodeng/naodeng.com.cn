import { c as createAstro, a as createComponent, m as maybeRenderHead, g as renderSlot, r as renderTemplate } from './astro/server_D4o_drMZ.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://naodeng.com.cn");
const $$PageHeadline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeadline;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-ql4jah75> <h1 data-astro-cid-ql4jah75>${title}</h1> ${renderSlot($$result, $$slots["default"])} </header> `;
}, "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/components/PageHeadline.astro", void 0);

export { $$PageHeadline as $ };
