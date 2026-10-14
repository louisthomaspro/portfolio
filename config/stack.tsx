import Cursor from "@/public/stack/cursor.svg"
import Elasticsearch from "@/public/stack/elasticsearch.svg"
import Figma from "@/public/stack/figma.png"
import GoogleWorkspace from "@/public/stack/google-workspace.png"
import Grafana from "@/public/stack/grafana.png"
import GrokBot from "@/public/stack/grok-bot.png"
import Linear from "@/public/stack/linear.png"
import Nextjs from "@/public/stack/nextjs.png"
import Notion from "@/public/stack/notion.png"
import Polar from "@/public/stack/polar.svg"
import React from "@/public/stack/react.png"
import Shadcn from "@/public/stack/shadcn.png"
import Slack from "@/public/stack/slack.png"
import Stripe from "@/public/stack/stripe.png"
import Supabase from "@/public/stack/supabase.png"
import Tailwindcss from "@/public/stack/tailwindcss.png"
import TanstackStart from "@/public/stack/tanstack-start.svg"
import Turborepo from "@/public/stack/turborepo.svg"
import Vercel from "@/public/stack/vercel.png"
import { StackItem } from "@/types"

import { Icons } from "@/components/icons"

export const tags = [
  {
    label: <Icons.favorite width={10} />,
    value: "favorite",
  },
  {
    label: "Web framework",
    value: "framework",
  },
  {
    label: "Design",
    value: "design",
  },
  {
    label: "Hosting",
    value: "hosting",
  },
  {
    label: "Productivity",
    value: "productivity",
  },
  {
    label: "Database",
    value: "database",
  },
  {
    label: "Analytics",
    value: "analytics",
  },
  {
    label: "Payments",
    value: "payments",
  },
]

export const stack: StackItem[] = [
  {
    id: "cursor",
    title: "Cursor",
    description: "AI code editor",
    url: "https://cursor.com/",
    imageSrc: Cursor,
    tags: ["favorite", "productivity"],
  },
  {
    id: "grok-bot",
    title: "Grok Bot",
    description: "AI agents for your workflows",
    url: "https://play.google.com/store/apps/details?id=ai.x.grok.bot",
    imageSrc: GrokBot,
    tags: ["favorite", "productivity"],
  },
  {
    id: "vercel",
    title: "Vercel",
    description: "Hosting and deployment platform",
    url: "https://vercel.com/",
    imageSrc: Vercel,
    tags: ["favorite", "framework", "hosting"],
  },
  {
    id: "tanstack-start",
    title: "TanStack Start",
    description: "Full-stack React framework",
    url: "https://tanstack.com/start",
    imageSrc: TanstackStart,
    tags: ["favorite", "framework"],
  },
  {
    id: "nextjs",
    title: "Next.js",
    description: "Framework built on top of React",
    url: "https://nextjs.org/",
    imageSrc: Nextjs,
    tags: ["framework"],
  },
  {
    id: "figma",
    title: "Figma / Figjam",
    description: "Collaborative design tool",
    url: "https://figma.com/",
    imageSrc: Figma,
    tags: ["design"],
  },
  {
    id: "react",
    title: "React",
    description: "JavaScript UI library",
    url: "https://react.dev/",
    imageSrc: React,
    tags: ["framework"],
  },
  {
    id: "shadcn",
    title: "Shad/cn",
    description: "Build your own component library",
    url: "https://ui.shadcn.com/",
    imageSrc: Shadcn,
    tags: ["favorite", "framework"],
  },
  {
    id: "linear",
    title: "Linear",
    description: "Productivity and planning tool",
    url: "https://linear.app/",
    imageSrc: Linear,
    tags: ["productivity"],
  },
  {
    id: "google-workspace",
    title: "Google Workspace",
    description: "Productivity and collaboration suite",
    url: "https://workspace.google.com/",
    imageSrc: GoogleWorkspace,
    tags: ["productivity"],
  },
  {
    id: "supabase",
    title: "Supabase",
    description: "Open source Firebase alternative",
    url: "https://supabase.com/",
    imageSrc: Supabase,
    tags: ["favorite", "database"],
  },
  {
    id: "slack",
    title: "Slack",
    description: "Team communication app",
    url: "https://slack.com/",
    imageSrc: Slack,
    tags: ["productivity"],
  },
  {
    id: "tailwindcss",
    title: "TailwindCSS",
    description: "CSS framework",
    url: "https://tailwindcss.com/",
    imageSrc: Tailwindcss,
    tags: ["framework"],
  },
  {
    id: "notion",
    title: "Notion",
    description: "All-in-one workspace",
    url: "https://www.notion.so/",
    imageSrc: Notion,
    tags: ["productivity"],
  },
  {
    id: "grafana",
    title: "Grafana",
    description: "Observability platform",
    url: "https://grafana.com/",
    imageSrc: Grafana,
    tags: ["analytics"],
  },
  {
    id: "elasticsearch",
    title: "Elasticsearch",
    description: "Search and analytics engine",
    url: "https://www.elastic.co/elasticsearch",
    imageSrc: Elasticsearch,
    tags: ["favorite", "database", "analytics"],
  },
  {
    id: "turborepo",
    title: "Turborepo",
    description: "High-performance build system for monorepos",
    url: "https://turbo.build/",
    imageSrc: Turborepo,
    tags: ["favorite", "framework"],
  },
  {
    id: "stripe",
    title: "Stripe",
    description: "Payment processing platform",
    url: "https://stripe.com/",
    imageSrc: Stripe,
    tags: ["payments"],
  },
  {
    id: "polar",
    title: "Polar",
    description: "Monetization platform for developers",
    url: "https://polar.sh/",
    imageSrc: Polar,
    tags: ["favorite", "payments"],
  },
]
