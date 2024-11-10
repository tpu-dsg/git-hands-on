// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "入門 Git/GitHub",
      defaultLocale: "ja",
      social: {
        github: "https://github.com/tpu-dsg/git-hands-on",
      },
      sidebar: [
        {
          label: "Introduction",
          autogenerate: { directory: "introduction" },
        },
      ],
    }),
    tailwind(),
  ],
});
