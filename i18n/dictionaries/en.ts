import Blime from "@/public/projects/blime.jpg"
import { Education, Experience, Link, SkillGroup, Venture } from "@/types"

import { siteUrl } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries/fr"

export const dictionary = {
  profile: {
    name: "Louis Thomas",
    headline: "Tech Lead / Dev Fullstack · TypeScript, React, AI",
    location: "Toulon, France",
    workMode: "Remote or hybrid",
    website: { label: "louisthomas.pro", url: siteUrl } satisfies Link,
    linkedin: { label: "linkedin.com/in/louis-thomas", url: "https://www.linkedin.com/in/louis-thomas" } satisfies Link,
    phone: { label: "+33 6 51 49 70 56", url: "tel:+33651497056" } satisfies Link,
    pitch:
      "Tech Lead / Dev Fullstack with 9+ years of TypeScript experience, former CTO at Minea. I enjoy building products end to end, from architecture to user experience, balancing technical requirements with business needs. Readable code and solutions that are easy to maintain.",
    summary:
      "Tech Lead / Dev Fullstack with 9+ years of TypeScript experience, including two and a half years as CTO at Minea (SaaS at €500k+ MRR). I enjoy building products end to end, from architecture to user experience, balancing technical requirements with business needs. When tackling complex technical challenges, I favor readable code and solutions that are easy to maintain and evolve.",
    availability: "Open to Tech Lead / Dev Fullstack or CTO roles, and freelance engagements.",
    availabilityDetails:
      "Open to Tech Lead / Dev Fullstack or CTO roles, as well as freelance work. Remote anywhere in France or hybrid around Toulon, with occasional trips to Paris.",
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
        "Collected competitor ads, customer reviews, and test history; LLM analysis and embeddings to cluster creatives and surface marketing trends.",
        "Dashboard and MCP server to explore brand analyses.",
      ],
    },
    {
      company: "Blime",
      role: "Co-founder & CTO",
      start: "2025-12",
      end: "2026-01",
      logo: Blime,
      summary: "YouTube creator search and analytics for brands, indexing up to 10 million creators.",
      description: "YouTube influencer search engine.",
      highlights: [
        "Data pipelines that ingest, enrich, and update millions of YouTube creators and videos.",
        "Launch to early users with paid subscriptions.",
      ],
    },
  ] satisfies Venture[],
  experiences: [
    {
      company: "Minea",
      role: "CTO & Full-stack developer",
      start: "2023-04",
      end: "2025-10",
      description:
        "Technical leadership and V2 development of a SaaS at €500k+ MRR with 4,000 sign-ups per day.",
      metrics: [
        { value: "€500k", label: "MRR" },
        { value: "4,000", label: "sign-ups / day" },
      ],
      highlights: [
        "Rebuilt the architecture on Next.js for greater flexibility and faster product iteration.",
        "Performance work to handle traffic spikes from marketing campaigns and webinars.",
        "Automated customer support with AI.",
        "Partnered with CDO and CMO on product, UX, and marketing.",
      ],
    },
    {
      company: "DBS Bank",
      role: "Product technical lead & Project manager",
      location: "Singapore",
      start: "2020-10",
      end: "2022-04",
      description: "Built an internal CRM with a team of 10 people.",
      highlights: [
        "Defined front-end architecture and technical roadmap.",
        "Coordinated teams across multiple countries.",
      ],
    },
    {
      company: "Decathlon",
      role: "Developer · IT Ops",
      location: "France · Singapore",
      start: "2017-09",
      end: "2020-08",
      highlights: [
        "Maintained and evolved training apps; built reporting and analytics tools for business teams.",
        "Backend work and agile coordination on a mobile e-commerce app (Singapore), with international teams.",
      ],
    },
  ] satisfies Experience[],
  skills: [
    { label: "Front", items: ["TypeScript", "Next.js", "React", "TanStack", "Tailwind"] },
    { label: "Back", items: ["Node.js", "PostgreSQL", "Supabase", "Stripe"] },
    { label: "Data & AI", items: ["ETL", "ClickHouse", "Elasticsearch", "LLM", "Embeddings", "MCP"] },
    { label: "Infra", items: ["Vercel", "AWS", "Docker", "CI/CD"] },
  ] satisfies SkillGroup[],
  education: [
    { school: "Polytech Tours", degree: "Master's-level engineering degree, computer science", start: 2017, end: 2020 },
  ] satisfies Education[],
  languages: [
    { label: "French", level: "Native" },
    { label: "English", level: "Fluent" },
  ],
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
