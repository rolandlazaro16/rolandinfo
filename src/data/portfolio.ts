export const profile = {
  name: "Immaculatha Lazaro Muro",
  title: "Economist & University Lecturer",
  subtitle: "Agribusiness · Accounting · Financial Planning",
  location: "Mwanza, Tanzania",
  tagline:
    "Expert in economics, financial management, and budgeting with experience in government, NGOs, and higher education.",
  email: "immaculathamuro2550@gmail.com",
  whatsapp: "+255 769 551 065",
  whatsappLink: "https://wa.me/255769551065",
  experienceYears: 3,
};

export const education = [
  {
    level: "Primary School",
    institution: "St. Hellen Primary School",
    description: "Foundation in core academics and personal development.",
  },
  {
    level: "O Level Secondary",
    institution: "Sunrise Secondary School",
    description: "Ordinary level secondary education.",
  },
  {
    level: "A Level Secondary",
    institution: "Kirakala High School",
    description: "Advanced level secondary education.",
  },
  {
    level: "Bachelor's Degree",
    institution: "Sokoine University of Agriculture (SUA)",
    field: "Agribusiness & Accounting",
    description:
      "Undergraduate studies combining agricultural business, accounting principles, and applied economics.",
    highlight: true,
  },
  {
    level: "Master's Degree",
    institution: "Harvard University",
    field: "Advanced Studies",
    description:
      "Postgraduate qualification from one of the world's leading universities, strengthening expertise in economics and related disciplines.",
    highlight: true,
  },
] as const;

export const skills = [
  {
    name: "Economics",
    description:
      "Expert knowledge in economic theory, policy analysis, and applied economics for research and teaching.",
    icon: "economics",
  },
  {
    name: "Financial Management & Budgeting",
    description:
      "Skilled in financial planning, budgeting, and resource allocation for organizations and institutions.",
    icon: "finance",
  },
  {
    name: "University Lecturing",
    description:
      "University lecturer in economics and related fields — delivering lectures, guiding students, and academic mentorship.",
    icon: "lecture",
  },
] as const;

export const experience = {
  summary:
    "Over 3 years of professional experience working with government organizations and NGOs, combining public-sector insight with development-sector impact.",
  roles: [
    {
      type: "Government Organizations",
      description:
        "Contributed to economic and financial initiatives within public institutions, supporting policy implementation and organizational budgeting.",
    },
    {
      type: "NGOs",
      description:
        "Worked with non-governmental organizations on development programs, financial oversight, and community-focused economic projects.",
    },
    {
      type: "Higher Education",
      description:
        "Serves as a university lecturer in economics and related fields, bridging academic theory with real-world practice.",
    },
  ],
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;
