import { defineConfig } from 'vitepress'

const eduSidebar = [
  {
    text: "Curriculum",
    items: [
      { text: "Setting up your environment", link: "/edu/" },
      { text: "Java Basics", link: "/edu/" },
      { text: "Basic Robot Principles", link: "/edu/" },
      { text: "Tank Drive", link: "/edu/" },
      { text: "Altering Tank Drive", link: "/edu/" },
      { text: "Moving to a target position", link: "/edu/" },
      { text: "Making a Pull Request", link: "/edu/" },
      { text: "Rotating to a target orientation", link: "/edu/" },
      { text: "Command Groups", link: "/edu/" },
      { text: "Factories", link: "/edu/" },
      { text: "The Power of Injection", link: "/edu/" },
      { text: "Dependency Injection with Dagger", link: "/edu/" },
      { text: "Upgrading Using the SeriouslyCommonLib", link: "/edu/" },
      { text: "Running XbotEDU on a Real Robot", link: "/edu/" },
      { text: "Auto Stopping Collector", link: "/edu/" },    
    ],
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XBOT Programming",
  description: "A guide and reference for new and existing members",
  base: "/Programming-Docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Curriculum', link: '/edu/' },
    ],

    sidebar: {
      "/edu/": {
        text: 'Curriculum',
        items: eduSidebar,
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Team488' }
    ],
  },
});

