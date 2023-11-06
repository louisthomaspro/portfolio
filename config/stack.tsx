import Aws from "@/public/stack/aws.jpg"
import Clipchamp from "@/public/stack/clipchamp.png"
import Figma from "@/public/stack/figma.png"
import Firebase from "@/public/stack/firebase.png"
import Framer from "@/public/stack/framer.png"
import GoogleWorkspace from "@/public/stack/google-workspace.png"
import Grafana from "@/public/stack/grafana.png"
import Jitsu from "@/public/stack/jitsu.png"
import Linear from "@/public/stack/linear.png"
import Nextjs from "@/public/stack/nextjs.png"
import Notion from "@/public/stack/notion.png"
import Prismic from "@/public/stack/prismic.png"
import React from "@/public/stack/react.png"
import Shadcn from "@/public/stack/shadcn.png"
import Slack from "@/public/stack/slack.png"
import Supabase from "@/public/stack/supabase.png"
import Tailwindcss from "@/public/stack/tailwindcss.png"
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
    label: "CMS",
    value: "cms",
  },
  {
    label: "Analytics",
    value: "analytics",
  },
]

export const stack: StackItem[] = [
  {
    id: "vercel",
    title: "Vercel",
    description: "Hosting and deployment platform",
    url: "https://vercel.com/",
    imageSrc: Vercel,
    tags: ["favorite", "framework", "hosting"],
  },
  {
    id: "nextjs",
    title: "Next.js",
    description: "Framework built on top of React",
    url: "https://nextjs.org/",
    imageSrc: Nextjs,
    tags: ["favorite", "framework"],
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
    id: "prismic",
    title: "Prismic",
    description: "CMS Headless page builder",
    url: "https://prismic.io/",
    imageSrc: Prismic,
    tags: ["cms"],
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
    id: "framer",
    title: "Framer",
    description: "Visual web design platform",
    url: "https://framer.com/",
    imageSrc: Framer,
    tags: ["design"],
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
    id: "clipchamp",
    title: "Clipchamp",
    description: "Video editing tool",
    url: "https://clipchamp.com/",
    imageSrc: Clipchamp,
    tags: ["design"],
  },
  {
    id: "aws",
    title: "AWS",
    description: "Cloud computing platform",
    url: "https://aws.amazon.com/",
    imageSrc: Aws,
    tags: ["hosting"],
  },
  {
    id: "firebase",
    title: "Firebase",
    description: "Developer-friendly cloud computing platform",
    url: "https://firebase.google.com/",
    imageSrc: Firebase,
    tags: ["database"],
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
    id: "jitsu",
    title: "Jitsu",
    description: "Data event platform",
    url: "https://jitsu.com/",
    imageSrc: Jitsu,
    tags: ["analytics"],
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
]
