import { defineConfig } from "astro/config";
import purgecss from "astro-purgecss";
import { CONFIG_SITE, CONFIG_BASE } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss()],
  site: CONFIG_SITE,
  base: CONFIG_BASE,
  trailingSlash: "never",
});
