import { defineConfig } from 'vitepress'

const eduSidebar = [
  {
    text: "Curriculum",
    items: [
      { text: "Introduction", link: "/edu/" },
      { text: "Setting up your environment", link: "/edu/setup" },
      { text: "Java Basics", link: "/edu/java-basics" },
      { text: "Basic Robot Principles", link: "/edu/robot-principles" },
      { text: "Tank Drive", link: "/edu/tank-drive" },
      { text: "Altering Tank Drive", link: "/edu/altering-tank-drive" },
      { text: "Moving to a target position", link: "/edu/target-position" },
      { text: "Making a Pull Request", link: "/edu/pull-requests" },
      { text: "Rotating to a target orientation", link: "/edu/target-orientation" },
      { text: "Command Groups", link: "/edu/command-groups" },
      { text: "Factories", link: "/edu/factory" },
      { text: "The Power of Injection", link: "/edu/injection" },
      { text: "Dependency Injection with Dagger", link: "/edu/dagger" },
      { text: "Upgrading Using the SeriouslyCommonLib", link: "/edu/switch-to-scl" },
      { text: "Running XbotEDU on a Real Robot", link: "/edu/robox" },
      { text: "Auto Stopping Collector", link: "/edu/auto-stopping-collector" },    
    ],
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XBOT Programming",
  description: "A guide and reference for new and existing members",
  base: "/Programming-Docs/",
  head: [['link', { rel: 'icon', href: '/Programming-Docs/xbot.logomark.white-on-blue.square.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Curriculum', link: '/edu/' },
    ],

    sidebar: {
      "/edu/": eduSidebar,
    },

    logo: {
      light: "/xbot.logomark.black.svg",
      dark:  "/xbot.logomark.white.svg",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Team488' }
    ],
  },
});

