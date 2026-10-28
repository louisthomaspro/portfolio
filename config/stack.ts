import Cursor from "@/public/stack/cursor.svg"
import Elasticsearch from "@/public/stack/elasticsearch.svg"
import Figma from "@/public/stack/figma.png"
import GrokBot from "@/public/stack/grok-bot.png"
import Linear from "@/public/stack/linear.png"
import Nextjs from "@/public/stack/nextjs.png"
import ReactLogo from "@/public/stack/react.png"
import Shadcn from "@/public/stack/shadcn.png"
import Stripe from "@/public/stack/stripe.png"
import Supabase from "@/public/stack/supabase.png"
import Tailwindcss from "@/public/stack/tailwindcss.png"
import TanstackStart from "@/public/stack/tanstack-start.svg"
import Trigger from "@/public/stack/trigger.svg"
import Turborepo from "@/public/stack/turborepo.svg"
import Vercel from "@/public/stack/vercel.png"
import { BrandIcon, StackItem } from "@/types"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faAws, faOpenai } from "@fortawesome/free-brands-svg-icons"
import { siAnthropic, siClickhouse, siModelcontextprotocol, siNodedotjs, siPostgresql, siPosthog } from "simple-icons"

import { Locale } from "@/i18n/config"

const fromFontAwesome = ({ icon: [width, height, , , path] }: IconDefinition, hex: string): BrandIcon => ({
  path: Array.isArray(path) ? path.join(" ") : path,
  viewBox: `0 0 ${width} ${height}`,
  hex,
})

const brand = ({ path, hex }: { path: string; hex: string }): BrandIcon => ({ path, hex })

export const tagDefs = [
  { value: "front", label: { fr: "Front", en: "Front" } },
  { value: "back", label: { fr: "Back", en: "Back" } },
  { value: "data", label: { fr: "Data", en: "Data" } },
  { value: "ia", label: { fr: "IA", en: "AI" } },
  { value: "infra", label: { fr: "Infra", en: "Infra" } },
  { value: "tools", label: { fr: "Outils", en: "Tools" } },
] as const

export const getStackTags = (lang: Locale) =>
  tagDefs.map((tag) => ({ value: tag.value, label: tag.label[lang] }))

export const stack: StackItem[] = [
  {
    id: "nextjs",
    title: "Next.js",
    description: { fr: "Framework React fullstack", en: "Full-stack React framework" },
    url: "https://nextjs.org/",
    icon: Nextjs,
    tags: ["front"],
  },
  {
    id: "tanstack-start",
    title: "TanStack Start",
    description: { fr: "Framework React fullstack et type-safe", en: "Type-safe full-stack React framework" },
    url: "https://tanstack.com/start",
    icon: TanstackStart,
    tags: ["front"],
  },
  {
    id: "react",
    title: "React",
    description: { fr: "Bibliothèque JavaScript pour les interfaces", en: "JavaScript library for user interfaces" },
    url: "https://react.dev/",
    icon: ReactLogo,
    tags: ["front"],
  },
  {
    id: "tailwindcss",
    title: "Tailwind CSS",
    description: { fr: "Framework CSS utilitaire", en: "Utility-first CSS framework" },
    url: "https://tailwindcss.com/",
    icon: Tailwindcss,
    tags: ["front"],
  },
  {
    id: "shadcn",
    title: "shadcn/ui",
    description: {
      fr: "Pour construire sa propre bibliothèque de composants",
      en: "Build your own component library",
    },
    url: "https://ui.shadcn.com/",
    icon: Shadcn,
    tags: ["front"],
  },
  {
    id: "nodejs",
    title: "Node.js",
    description: { fr: "Environnement d’exécution JavaScript côté serveur", en: "Server-side JavaScript runtime" },
    url: "https://nodejs.org/",
    icon: brand(siNodedotjs),
    tags: ["back"],
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    description: { fr: "Base de données relationnelle", en: "Relational database" },
    url: "https://www.postgresql.org/",
    icon: brand(siPostgresql),
    tags: ["back", "data"],
  },
  {
    id: "supabase",
    title: "Supabase",
    description: { fr: "Alternative open source à Firebase", en: "Open-source Firebase alternative" },
    url: "https://supabase.com/",
    icon: Supabase,
    tags: ["back", "data"],
  },
  {
    id: "stripe",
    title: "Stripe",
    description: { fr: "Plateforme de paiement", en: "Payments platform" },
    url: "https://stripe.com/",
    icon: Stripe,
    tags: ["back"],
  },
  {
    id: "clickhouse",
    title: "ClickHouse",
    description: { fr: "Base de données analytique orientée colonnes", en: "Column-oriented analytics database" },
    url: "https://clickhouse.com/",
    icon: brand(siClickhouse),
    tags: ["data"],
  },
  {
    id: "elasticsearch",
    title: "Elasticsearch",
    description: { fr: "Moteur de recherche et d’analyse", en: "Search and analytics engine" },
    url: "https://www.elastic.co/elasticsearch",
    icon: Elasticsearch,
    tags: ["data"],
  },
  {
    id: "openai",
    title: "OpenAI",
    description: { fr: "Modèles de langage et embeddings", en: "Language models and embeddings" },
    url: "https://platform.openai.com/",
    icon: fromFontAwesome(faOpenai, "412991"),
    tags: ["ia"],
  },
  {
    id: "claude",
    title: "Claude",
    description: { fr: "Modèles de langage d’Anthropic", en: "Anthropic language models" },
    url: "https://www.anthropic.com/claude",
    icon: brand({ ...siAnthropic, hex: "D97757" }),
    tags: ["ia"],
  },
  {
    id: "mcp",
    title: "Model Context Protocol",
    description: {
      fr: "Protocole pour connecter les LLM aux outils et aux données",
      en: "Protocol to connect LLMs to tools and data",
    },
    url: "https://modelcontextprotocol.io/",
    icon: brand({ ...siModelcontextprotocol, hex: "FFFFFF" }),
    tags: ["ia"],
  },
  {
    id: "grok-bot",
    title: "Grok Bot",
    description: { fr: "Agents IA pour automatiser ses workflows", en: "AI agents to automate workflows" },
    url: "https://x.ai/bot",
    icon: GrokBot,
    tags: ["ia", "tools"],
  },
  {
    id: "trigger",
    title: "Trigger.dev",
    description: { fr: "Jobs de fond et workflows durables", en: "Background jobs and durable workflows" },
    url: "https://trigger.dev/",
    icon: Trigger,
    tags: ["ia", "infra"],
  },
  {
    id: "vercel",
    title: "Vercel",
    description: { fr: "Plateforme d’hébergement et de déploiement", en: "Hosting and deployment platform" },
    url: "https://vercel.com/",
    icon: Vercel,
    tags: ["infra"],
  },
  {
    id: "aws",
    title: "AWS",
    description: { fr: "Services cloud d’Amazon", en: "Amazon cloud services" },
    url: "https://aws.amazon.com/",
    icon: fromFontAwesome(faAws, "FF9900"),
    tags: ["infra"],
  },
  {
    id: "turborepo",
    title: "Turborepo",
    description: { fr: "Système de build performant pour monorepos", en: "High-performance build system for monorepos" },
    url: "https://turborepo.com/",
    icon: Turborepo,
    tags: ["infra"],
  },
  {
    id: "posthog",
    title: "PostHog",
    description: { fr: "Analytics produit et session replay", en: "Product analytics and session replay" },
    url: "https://posthog.com/",
    icon: brand({ ...siPosthog, hex: "F54E00" }),
    tags: ["tools"],
  },
  {
    id: "cursor",
    title: "Cursor",
    description: { fr: "Éditeur de code avec IA", en: "AI-powered code editor" },
    url: "https://cursor.com/",
    icon: Cursor,
    tags: ["tools"],
  },
  {
    id: "figma",
    title: "Figma",
    description: { fr: "Outil de design collaboratif", en: "Collaborative design tool" },
    url: "https://figma.com/",
    icon: Figma,
    tags: ["tools"],
  },
  {
    id: "linear",
    title: "Linear",
    description: { fr: "Outil de planification et de suivi produit", en: "Product planning and issue tracking" },
    url: "https://linear.app/",
    icon: Linear,
    tags: ["tools"],
  },
]

export const getLocalizedStack = (lang: Locale) =>
  stack.map(({ description, ...item }) => ({
    ...item,
    description: description[lang],
  }))
