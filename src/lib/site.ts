export const siteConfig = {
  name: "Yeganeh",
  title: "Yeganeh",
  description:
    "Research, writing, and projects — a personal site by Yeganeh.",
  url: "https://theyeganeh.com",
  author: "Yeganeh",
  links: {
    email: "mailto:hello@theyeganeh.com",
    github: "https://github.com/Yegi03",
    scholar: "https://scholar.google.com/citations?user=FvN4JSMAAAAJ&hl=en",
    linkedin:
      "https://www.linkedin.com/in/yeganeh-abdollahinejad-70163124b/",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
] as const;
