/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Google Analytics (GA4) 测量 ID，如 G-XXXXXXXXXX。设置后启用 GA4。 */
  readonly PUBLIC_GA_MEASUREMENT_ID?: string;
}
