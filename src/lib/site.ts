export const siteConfig = {
  name: "Yeganeh",
  title: "Yeganeh",
  description:
    "Research, writing, and projects — a personal site by Yeganeh.",
  url: "https://theyeganeh.com",
  author: "Yeganeh",
  links: {
    email: "mailto:yeganeh.ab03@gmail.com",
    emailAlt: "mailto:yegi@msu.edu",
    github: "https://github.com/Yegi03",
    scholar: "https://scholar.google.com/citations?user=FvN4JSMAAAAJ&hl=en",
    linkedin:
      "https://www.linkedin.com/in/yeganeh-abdollahinejad-70163124b/",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/research", label: "Research I'm Chasing" },
  { href: "/projects", label: "Projects & Experiments" },
  { href: "/publications", label: "Publications" },
  { href: "/models", label: "Models, Math & Messy Data" },
  { href: "/resources", label: "Interesting Resources" },
  { href: "/notes", label: "Brain Notes & Memory Drawer" },
  { href: "/now", label: "Current Obsessions" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
] as const;
