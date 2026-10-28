import Blime from "@/public/projects/blime.jpg"
import { Education, Experience, Link, SkillGroup, Venture } from "@/types"

import { siteUrl } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries/fr"

export const dictionary = {
  profile: {
    name: "Louis Thomas",
    headline: "Tech Lead / Fullstack · TypeScript, React, AI, Remote or Toulon",
    location: "Toulon, France",
    workMode: "Remote or hybrid",
    website: { label: "louisthomas.pro", url: siteUrl } satisfies Link,
    linkedin: { label: "linkedin.com/in/louis-thomas", url: "https://www.linkedin.com/in/louis-thomas" } satisfies Link,
    phone: { label: "+33 6 51 49 70 56", url: "tel:+33651497056" } satisfies Link,
    pitch:
      "Tech Lead / Fullstack with 9+ years of TypeScript experience. I combine engineering rigor, product thinking, and applied AI to turn ideas into robust, scalable systems. I care about readable code and simple architectures.",
    summary:
      "Tech Lead / Fullstack with 9+ years of TypeScript experience, including two and a half years as CTO at Minea (SaaS at €500k+ MRR and 4,000 sign-ups per day). I combine engineering rigor, product thinking, and applied AI to turn ideas into robust, scalable systems. I value readable code, simple architectures, and teams that ship without getting stuck.",
    availability: "Open to Tech Lead / Fullstack or CTO roles, and freelance engagements.",
    availabilityDetails:
      "Open to Tech Lead / Fullstack or CTO roles, as well as freelance work. Remote anywhere in France or hybrid around Toulon, with occasional trips to Paris.",
  },
  ventures: [
    {
      company: "Hinter",
      role: "Co-founder & CTO",
      start: "2026-02",
      end: "2026-06",
      summary: "AI-powered ad intelligence for e-commerce brands and agencies, taken to prototype stage.",
      description: "AI-powered ad intelligence for e-commerce brands and agencies, taken to prototype stage.",
      note: "Taken to prototype stage.",
      highlights: [
        "Collected and matched competitor ads, customer reviews, and each brand’s testing history.",
        "Multimodal analysis, embedding, and content clustering pipelines.",
        "Dashboard and MCP server to explore brand analyses.",
      ],
      stack: ["TanStack Start", "Supabase", "Trigger.dev", "Vercel"],
    },
    {
      company: "Blime",
      role: "Co-founder & CTO",
      start: "2025-12",
      end: "2026-01",
      logo: Blime,
      summary: "YouTube creator search and analytics for brands, indexing up to 10 million creators.",
      highlights: [
        "Search engine capable of indexing up to 10 million YouTube creators.",
        "Profile enrichment pipelines: video links, posting frequency, median views.",
        "Launch to early users with paid subscriptions.",
      ],
      stack: ["Next.js", "Supabase", "Elasticsearch", "Stripe", "AWS"],
    },
  ] satisfies Venture[],
  experiences: [
    {
      company: "Minea",
      role: "CTO & Full-stack developer",
      start: "2023-04",
      end: "2025-10",
      description:
        "Led engineering and built V2 of a SaaS at €500k+ MRR with 4,000 sign-ups per day.",
      metrics: [
        { value: "€500k", label: "MRR" },
        { value: "4,000", label: "sign-ups / day" },
      ],
      highlights: [
        "Rebuilt the architecture on Next.js and led the V1 to V2 transition.",
        "Performance work to handle traffic spikes from marketing campaigns and webinars.",
        "Embedding pipelines for images and video, and large-scale automatic ad tagging.",
        "AI-powered support automation.",
        "Technical mentorship for two developers.",
        "Partnered with the CDO and CMO on features, UX, and marketing needs.",
      ],
      stack: ["Next.js", "Vercel", "PostgreSQL", "ClickHouse", "Elasticsearch", "Stripe"],
    },
    {
      company: "DBS Bank",
      role: "Product tech lead & Project manager",
      location: "Singapore",
      start: "2020-10",
      end: "2022-04",
      description:
        "Led the product engineering scope and project management in an 8–10 person team, paired with the data lead.",
      highlights: [
        "Defined front-end architecture and technical roadmap for an internal CRM.",
        "Supported developers and unblocked technical issues.",
        "Coordinated teams across multiple countries.",
      ],
    },
    {
      company: "Decathlon Singapore",
      role: "Scrum Master & Developer",
      location: "Singapore",
      start: "2020-03",
      end: "2020-08",
      highlights: [
        "Built Spring Boot APIs for a new mobile e-commerce app.",
        "Coordinated international teams and ran agile practices as Scrum Master.",
      ],
    },
    {
      company: "Decathlon France",
      role: "Developer & IT Ops",
      start: "2017-09",
      end: "2020-03",
      highlights: [
        "Maintained and evolved training apps, improving reliability and usability.",
        "Built reporting and analytics tools to track activity and support business decisions.",
      ],
    },
    {
      company: "Freelance",
      role: "Web developer",
      start: "2014-01",
      end: "2019-03",
      description:
        "Websites and custom work for tradespeople and freelancers, from scoping through delivery and follow-up.",
    },
  ] satisfies Experience[],
  skills: [
    { label: "Front", items: ["TypeScript", "Next.js", "React", "TanStack", "Tailwind CSS"] },
    { label: "Back", items: ["Node.js", "PostgreSQL", "Supabase", "Stripe"] },
    {
      label: "Data",
      items: ["ETL and enrichment pipelines", "ClickHouse", "Elasticsearch", "Vector search"],
    },
    { label: "AI", items: ["LLM orchestration", "Multimodal embeddings", "Automated workflows", "MCP"] },
    { label: "Infra", items: ["Vercel", "AWS", "Trigger.dev", "CI/CD"] },
    { label: "Leadership", items: ["Software architecture", "Engineering leadership", "Scrum", "Project management"] },
  ] satisfies SkillGroup[],
  education: [
    { school: "Polytech Tours", degree: "Engineering degree, computer science", start: 2017, end: 2020 },
    { school: "IUT de Lens", degree: "Associate degree in computer science", start: 2015, end: 2017 },
    { school: "Lycée Jean Monnet", degree: "High school diploma, engineering sciences", start: 2012, end: 2015 },
  ] satisfies Education[],
  languages: [
    { label: "French", level: "Native" },
    { label: "English", level: "Fluent, professional" },
  ],
  awards: [{ label: "UTC Compiègne Hackathon", detail: "Design prize, 2nd overall" }],
  ui: {
    viewCv: "View my resume",
    fullCv: "Full resume",
    experience: "Experience",
    home: "Home",
    downloadPdf: "Download PDF",
    about: "About",
    available: "Available",
    contactMe: "Contact me",
    location: "Location",
    myStack: "My stack",
    loadMore: "Load more",
    filterStack: "Filter stack",
    stackLabel: "Stack",
    cvPageTitle: "Resume",
    ogSubtitle: "Former CTO at Minea",
    sections: {
      profile: "Profile",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      languages: "Languages",
      awards: "Awards",
    },
    dates: {
      present: "present",
      since: "Since",
      year: "year",
      years: "years",
      month: "months",
    },
  },
} satisfies Dictionary
