import { defineConfig } from "astro/config";
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss()],
  site: "https://github.com/nicholasgillespie/",
  base: "/portfolio-minimalist/",
  trailingSlash: "always",
});
