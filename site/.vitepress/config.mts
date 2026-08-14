import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XBOT Programming",
  description: "A guide and reference for new and existing members",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Curriculum', link: '/edu/' },
    ],

    sidebar: {
      "/edu/": {
        text: 'Curriculum',
        items: [
          { text: 'Introduction & Setup', link: '/edu/' },
        ]
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Team488' }
    ],
  },
  vite: {
    base: "/Programming-Docs/",
  },
});
