export const siteConfig = {
  name: "Yeganeh",
  fullName: "Yeganeh Abdollahinejad",
  title: "Yeganeh Abdollahinejad",
  role: "Machine Learning & Computational Science Researcher",
  location: "Michigan State University",
  tagline:
    "Building trustworthy machine learning for health, human signals, and information integrity.",
  description:
    "Yeganeh Abdollahinejad — researcher working across machine learning, computational modeling, and data science for health and information integrity.",
  url: "https://theyeganeh.com",
  author: "Yeganeh Abdollahinejad",
  links: {
    email: "mailto:yeganeh.ab03@gmail.com",
    emailAlt: "mailto:yegi@msu.edu",
    github: "https://github.com/Yegi03",
    scholar: "https://scholar.google.com/citations?user=FvN4JSMAAAAJ&hl=en",
    linkedin:
      "https://www.linkedin.com/in/yeganeh-abdollahinejad-70163124b/",
  },
} as const;

export const researchAreas = [
  {
    title: "Trustworthy & multimodal ML",
    description:
      "Misinformation detection, cross-modal reasoning, and models that stay calibrated and honest under real-world shift.",
  },
  {
    title: "Human signals & affective computing",
    description:
      "EEG and physiological signals for emotion and fatigue recognition that generalize to unseen people.",
  },
  {
    title: "Computational modeling for health",
    description:
      "Mechanistic models, Bayesian inference, and ML for oncology, nanoparticle transport, and clinical decision support.",
  },
  {
    title: "Explainable & responsible AI",
    description:
      "Saliency, uncertainty, and fairness — making model decisions legible, especially in medicine.",
  },
] as const;

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
