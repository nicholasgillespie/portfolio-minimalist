import { defineConfig } from "astro/config";
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss()],
  site: "https://nicholasgillespie.github.io",
  base: "/portfolio-minimalist",
  trailingSlash: "never",
});
