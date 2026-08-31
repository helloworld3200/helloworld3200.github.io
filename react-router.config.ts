import type { Config } from "@react-router/dev/config";

const config = {
  // Deploying for a static portfolio site thru gh pages
  // So we want CSR + prerendered pages (for SEO)
  ssr: false,
  prerender: true,
}

export default config satisfies Config;
