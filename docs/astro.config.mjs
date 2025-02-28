// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://tpu-dsg.github.io",
  base: "/git-hands-on",
  integrations: [
    starlight({
      title: "Gitハンズオン",
      defaultLocale: "ja",
      social: {
        github: "https://github.com/tpu-dsg/git-hands-on",
      },
      sidebar: [
        {
          label: "1. Introduction",
          autogenerate: { directory: "introduction" },
        },
        {
          label: "2. Join GitHub",
          autogenerate: { directory: "join-github" },
        },
        {
          label: "3. Setup Git",
          autogenerate: { directory: "setup-git" },
        },
        {
          label: "4. Exercises",
          autogenerate: { directory: "exercises" },
        },
      ],
    }),
  ],
});
