/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Google Analytics (GA4) 测量 ID，如 G-XXXXXXXXXX。设置后启用 GA4。 */
  readonly PUBLIC_GA_MEASUREMENT_ID?: string;
  /** Counterscale tracker 脚本 URL（默认：https://analytics.inaodeng.com/tracker.js） */
  readonly PUBLIC_COUNTERSCALE_TRACKER_URL?: string;
  /** Counterscale site id（默认：inaodeng.com） */
  readonly PUBLIC_COUNTERSCALE_SITE_ID?: string;
  /** Counterscale 允许上报的域名（逗号分隔，默认：inaodeng.com,www.inaodeng.com） */
  readonly PUBLIC_COUNTERSCALE_ALLOWED_HOSTS?: string;
  /** Counterscale 调试日志开关（true 时输出加载失败警告） */
  readonly PUBLIC_COUNTERSCALE_DEBUG?: string;
}
