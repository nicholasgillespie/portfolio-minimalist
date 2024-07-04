import { defineConfig } from "astro/config";
import purgecss from "astro-purgecss";
import { SITE, BASE } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss()],
  site: SITE,
  base: BASE,
  trailingSlash: "never",
});
