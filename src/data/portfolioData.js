export const siteConfig = {
  name: "Terrence Udin",
  role: "Frontend Developer",
  location: "United States",
  tagline: "I build polished web products with clean UX and reliable performance.",
};

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/R3FL3X99",
    icon: "/assets/github.png",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/terrence-udin-371667235/",
    icon: "/assets/linkedin.png",
  },
];

export const hero = {
  greeting: "Hello, I'm",
  name: "Terrence Udin",
  description:
    "Frontend engineer focused on modern interfaces, smooth interactions, and scalable component architecture.",
  ctas: [
    { label: "View Projects", href: "#projects", type: "primary" },
    {
      label: "Download Resume",
      href: "/assets/Terrence-Udin-Resume.pdf",
      type: "secondary",
      external: true,
    },
  ],
  image: "/assets/profile--picc-modified.png",
};

export const about = {
  image: "/assets/web-developer-4506461-3738664.webp",
  summary:
    "With five years in frontend development, I have built responsive, performant interfaces with HTML, CSS, JavaScript, and TypeScript. I also work across the stack with Node.js, Express, and PostgreSQL to ship production-ready products end to end.",
  highlights: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "20+" },
    { label: "Primary Focus", value: "UI Engineering" },
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "CSS", "SASS", "Material UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Workflow",
    items: ["Git", "Vite", "Responsive Design", "Performance Optimization"],
  },
];

export const projects = [
  {
    title: "Pulse",
    summary: "Modern wine-focused web experience with polished UI and smooth interactions.",
    image: "/assets/pulse.png",
    tags: ["React", "UI", "Responsive"],
    github: "https://github.com/R3FL3X99/Pulse",
    live: "https://pulse-wine-five.vercel.app/",
    featured: true,
  },
  {
    title: "Peepers",
    summary: "Clean product-style website built with strong visual hierarchy and usability.",
    image: "/assets/peepers.png",
    tags: ["Frontend", "UX", "Landing Page"],
    github: "https://github.com/R3FL3X99/Peepers",
    live: "https://peepers.vercel.app/",
    featured: false,
  },
];

export const experience = [
  {
    period: "2023 - Present",
    role: "Fullstack Engineer",
    company: "Freelance",
    details:
      "Designing and building modern portfolio and business websites with a strong focus on UI quality, performance, and maintainability.",
  },
  {
    period: "2021 - 2023",
    role: "Web Developer",
    company: "Independent Projects",
    details:
      "Delivered full-stack web applications using Node.js and PostgreSQL while improving frontend usability and responsiveness.",
  },
  {
    period: "2019 - 2021",
    role: "Junior Frontend Developer",
    company: "Client Work",
    details:
      "Built production UI components, improved CSS architecture, and supported ongoing feature releases.",
  },
];

export const contact = {
  email: "Terrencejames162@gmail.com",
  headline: "Let's build something great.",
  description:
    "Open to freelance work, collaboration, and frontend-focused opportunities.",
};
