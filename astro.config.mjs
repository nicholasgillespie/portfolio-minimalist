import { defineConfig } from "astro/config";
import purgecss from "astro-purgecss";
import { CONFIG_BASE } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss()],
  site: "https://nicholasgillespie.github.io",
  base: CONFIG_BASE,
  trailingSlash: "never",
});
