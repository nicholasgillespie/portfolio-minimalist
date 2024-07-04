import { defineConfig } from "astro/config";
import purgecss from "astro-purgecss";
import { SITE_BASE } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss()],
  site: "https://nicholasgillespie.github.io",
  base: SITE_BASE,
  trailingSlash: "never",
});
