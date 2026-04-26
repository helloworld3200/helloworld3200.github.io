import type { Config } from "@react-router/dev/config";

export default {
  // Deploying for a static portfolio site thru gh pages
  // So we want CSR + prerendered pages (for SEO)
  ssr: false,
  prerender: true,
} satisfies Config;
