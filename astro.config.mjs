import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://fyncaluque.github.io",
  base: "/fyncaluque.github.io",
  integrations: [tailwind()],
});
