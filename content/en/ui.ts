import type { ui as PtUi } from "@/content/ui";

/** Mirrors content/ui.ts. The type below keeps both in step. */
export const ui: typeof PtUi = {
  hero: {
    greeting: "Hello :)",
    scrollHint: "Scroll to explore",
  },
  skipToContent: "Skip to content",
  header: {
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "home",
    language: "Language",
  },
  projects: {
    eyebrow: "Work",
    heading: "Projects I helped build with a clearly defined purpose.",
  },
  collabs: {
    eyebrow: "In collaboration with",
  },
  soon: {
    eyebrow: "Under construction",
    heading: "More projects coming soon",
    body: "This site is still under construction. I'm preparing more work to publish here — among it branding, visual identity and digital product projects.",
    cta: "Get in touch",
  },
  about: {
    timeline: "Experience",
    education: "Education",
    certifications: "Certificates",
    skills: "Skills",
    tools: "Tools",
  },
  caseStudy: {
    client: "Client",
    role: "Role",
    services: "Services",
    next: "Next project",
    expand: "Expand",
    close: "Close",
  },
  footer: {
    nav: "Navigation",
    navAria: "Footer navigation",
    social: "Social",
    madeBy: "Made by me :)",
  },
  form: {
    sending: "Sending…",
    invalidName: "Please enter your name",
    invalidEmail: "Invalid email",
    shortMessage: "Message is too short",
    sendError: "Couldn't send your message.",
    retryError: "Couldn't send. Please try again.",
  },
};
