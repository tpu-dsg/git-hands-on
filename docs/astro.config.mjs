// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://tpu-dsg.github.io',
  base: '/git-hands-on',
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
