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
import Turborepo from "@/public/stack/turborepo.svg"
import Vercel from "@/public/stack/vercel.png"
import { BrandIcon, StackItem } from "@/types"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faAws, faOpenai } from "@fortawesome/free-brands-svg-icons"
import { faBolt } from "@fortawesome/free-solid-svg-icons"
import { siAnthropic, siClickhouse, siModelcontextprotocol, siNodedotjs, siPostgresql, siPosthog } from "simple-icons"

const fromFontAwesome = ({ icon: [width, height, , , path] }: IconDefinition, hex: string): BrandIcon => ({
  path: Array.isArray(path) ? path.join(" ") : path,
  viewBox: `0 0 ${width} ${height}`,
  hex,
})

const brand = ({ path, hex }: { path: string; hex: string }): BrandIcon => ({ path, hex })

export const tags = [
  { label: "Front", value: "front" },
  { label: "Back", value: "back" },
  { label: "Data", value: "data" },
  { label: "IA", value: "ia" },
  { label: "Infra", value: "infra" },
  { label: "Outils", value: "tools" },
]

export const stack: StackItem[] = [
  {
    id: "nextjs",
    title: "Next.js",
    description: "Framework React fullstack",
    url: "https://nextjs.org/",
    icon: Nextjs,
    tags: ["front"],
  },
  {
    id: "tanstack-start",
    title: "TanStack Start",
    description: "Framework React fullstack et type-safe",
    url: "https://tanstack.com/start",
    icon: TanstackStart,
    tags: ["front"],
  },
  {
    id: "react",
    title: "React",
    description: "Bibliothèque JavaScript pour les interfaces",
    url: "https://react.dev/",
    icon: ReactLogo,
    tags: ["front"],
  },
  {
    id: "tailwindcss",
    title: "Tailwind CSS",
    description: "Framework CSS utilitaire",
    url: "https://tailwindcss.com/",
    icon: Tailwindcss,
    tags: ["front"],
  },
  {
    id: "shadcn",
    title: "shadcn/ui",
    description: "Pour construire sa propre bibliothèque de composants",
    url: "https://ui.shadcn.com/",
    icon: Shadcn,
    tags: ["front"],
  },
  {
    id: "nodejs",
    title: "Node.js",
    description: "Environnement d’exécution JavaScript côté serveur",
    url: "https://nodejs.org/",
    icon: brand(siNodedotjs),
    tags: ["back"],
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    description: "Base de données relationnelle",
    url: "https://www.postgresql.org/",
    icon: brand(siPostgresql),
    tags: ["back", "data"],
  },
  {
    id: "supabase",
    title: "Supabase",
    description: "Alternative open source à Firebase",
    url: "https://supabase.com/",
    icon: Supabase,
    tags: ["back", "data"],
  },
  {
    id: "stripe",
    title: "Stripe",
    description: "Plateforme de paiement",
    url: "https://stripe.com/",
    icon: Stripe,
    tags: ["back"],
  },
  {
    id: "clickhouse",
    title: "ClickHouse",
    description: "Base de données analytique orientée colonnes",
    url: "https://clickhouse.com/",
    icon: brand(siClickhouse),
    tags: ["data"],
  },
  {
    id: "elasticsearch",
    title: "Elasticsearch",
    description: "Moteur de recherche et d’analyse",
    url: "https://www.elastic.co/elasticsearch",
    icon: Elasticsearch,
    tags: ["data"],
  },
  {
    id: "openai",
    title: "OpenAI",
    description: "Modèles de langage et embeddings",
    url: "https://platform.openai.com/",
    icon: fromFontAwesome(faOpenai, "412991"),
    tags: ["ia"],
  },
  {
    id: "claude",
    title: "Claude",
    description: "Modèles de langage d’Anthropic",
    url: "https://www.anthropic.com/claude",
    icon: brand({ ...siAnthropic, hex: "D97757" }),
    tags: ["ia"],
  },
  {
    id: "mcp",
    title: "Model Context Protocol",
    description: "Protocole pour connecter les LLM aux outils et aux données",
    url: "https://modelcontextprotocol.io/",
    icon: brand({ ...siModelcontextprotocol, hex: "FFFFFF" }),
    tags: ["ia"],
  },
  {
    id: "grok-bot",
    title: "Grok Bot",
    description: "Agents IA pour automatiser ses workflows",
    url: "https://play.google.com/store/apps/details?id=ai.x.grok.bot",
    icon: GrokBot,
    tags: ["ia", "tools"],
  },
  {
    id: "trigger",
    title: "Trigger.dev",
    description: "Jobs de fond et workflows durables",
    url: "https://trigger.dev/",
    icon: fromFontAwesome(faBolt, "F97316"),
    tags: ["ia", "infra"],
  },
  {
    id: "vercel",
    title: "Vercel",
    description: "Plateforme d’hébergement et de déploiement",
    url: "https://vercel.com/",
    icon: Vercel,
    tags: ["infra"],
  },
  {
    id: "aws",
    title: "AWS",
    description: "Services cloud d’Amazon",
    url: "https://aws.amazon.com/",
    icon: fromFontAwesome(faAws, "FF9900"),
    tags: ["infra"],
  },
  {
    id: "turborepo",
    title: "Turborepo",
    description: "Système de build performant pour monorepos",
    url: "https://turborepo.com/",
    icon: Turborepo,
    tags: ["infra"],
  },
  {
    id: "posthog",
    title: "PostHog",
    description: "Analytics produit et session replay",
    url: "https://posthog.com/",
    icon: brand({ ...siPosthog, hex: "F54E00" }),
    tags: ["tools"],
  },
  {
    id: "cursor",
    title: "Cursor",
    description: "Éditeur de code avec IA",
    url: "https://cursor.com/",
    icon: Cursor,
    tags: ["tools"],
  },
  {
    id: "figma",
    title: "Figma",
    description: "Outil de design collaboratif",
    url: "https://figma.com/",
    icon: Figma,
    tags: ["tools"],
  },
  {
    id: "linear",
    title: "Linear",
    description: "Outil de planification et de suivi produit",
    url: "https://linear.app/",
    icon: Linear,
    tags: ["tools"],
  },
]
