/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Google Analytics (GA4) 测量 ID，如 G-XXXXXXXXXX。设置后启用 GA4。 */
  readonly PUBLIC_GA_MEASUREMENT_ID?: string;
  /** Umami 网站 ID（在 Umami 后台「编辑网站」→ 跟踪代码中获取）。设置后启用 Umami。 */
  readonly PUBLIC_UMAMI_WEBSITE_ID?: string;
  /** Umami 脚本地址，默认 https://analytics.umami.is/script.js，自建时可改为自己的 script 地址。 */
  readonly PUBLIC_UMAMI_SRC?: string;
  /** Umami 自建时数据上报地址（data-host-url）。 */
  readonly PUBLIC_UMAMI_HOST_URL?: string;
}
