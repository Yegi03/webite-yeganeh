export const siteConfig = {
  name: "Yeganeh",
  title: "Yeganeh",
  description:
    "Research, writing, and projects — a personal site by Yeganeh.",
  url: "https://theyeganeh.com",
  author: "Yeganeh",
  links: {
    email: "mailto:hello@theyeganeh.com",
    github: "https://github.com",
    scholar: "https://scholar.google.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
] as const;
