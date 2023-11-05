import Aws from "@/public/stack/aws.jpg"
import Clipchamp from "@/public/stack/clipchamp.png"
import Figma from "@/public/stack/figma.png"
import Firebase from "@/public/stack/firebase.png"
import Framer from "@/public/stack/framer.png"
import GoogleWorkspace from "@/public/stack/google-workspace.png"
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
]

export const stack: StackItem[] = [
  {
    title: "Vercel",
    description: "Hosting and deployment platform",
    url: "https://vercel.com/",
    imageSrc: Vercel,
    tags: ["favorite", "framework", "hosting"],
  },
  {
    title: "Next.js",
    description: "Framework built on top of React",
    url: "https://nextjs.org/",
    imageSrc: Nextjs,
    tags: ["favorite", "framework", "hosting"],
  },
  {
    title: "Figma / Figjam",
    description: "Collaborative design tool",
    url: "https://figma.com/",
    imageSrc: Figma,
    tags: ["framework", "hosting"],
  },
  {
    title: "React",
    description: "JavaScript UI library",
    url: "https://react.dev/",
    imageSrc: React,
    tags: ["design"],
  },
  {
    title: "Prismic",
    description: "CMS Headless page builder",
    url: "https://prismic.io/",
    imageSrc: Prismic,
    tags: ["cms"],
  },
  {
    title: "Shad/cn",
    description: "Build your own component library",
    url: "https://ui.shadcn.com/",
    imageSrc: Shadcn,
    tags: ["cms"],
  },
  {
    title: "Linear",
    description: "Productivity and planning tool",
    url: "https://linear.app/",
    imageSrc: Linear,
    tags: ["project-management"],
  },
  {
    title: "Google Workspace",
    description: "Productivity and collaboration suite",
    url: "https://workspace.google.com/",
    imageSrc: GoogleWorkspace,
    tags: ["project-management"],
  },
  {
    title: "Framer",
    description: "Visual web design platform",
    url: "https://framer.com/",
    imageSrc: Framer,
    tags: ["project-management"],
  },
  {
    title: "Supabase",
    description: "Open source Firebase alternative",
    url: "https://supabase.com/",
    imageSrc: Supabase,
    tags: ["project-management"],
  },
  {
    title: "Slack",
    description: "Team communication app",
    url: "https://slack.com/",
    imageSrc: Slack,
    tags: ["project-management"],
  },
  {
    title: "Clipchamp",
    description: "Video editing tool",
    url: "https://clipchamp.com/",
    imageSrc: Clipchamp,
    tags: ["project-management"],
  },
  {
    title: "AWS",
    description: "Cloud computing platform",
    url: "https://aws.amazon.com/",
    imageSrc: Aws,
    tags: ["cloud"],
  },
  {
    title: "Firebase",
    description: "Developer-friendly cloud computing platform",
    url: "https://firebase.google.com/",
    imageSrc: Firebase,
    tags: ["cloud"],
  },
  {
    title: "TailwindCSS",
    description: "CSS framework",
    url: "https://tailwindcss.com/",
    imageSrc: Tailwindcss,
    tags: ["cloud"],
  },
  {
    title: "Jitsu",
    description: "Data event platform",
    url: "https://jitsu.com/",
    imageSrc: Jitsu,
    tags: ["cloud"],
  },
  {
    title: "Notion",
    description: "All-in-one workspace",
    url: "https://www.notion.so/",
    imageSrc: Notion,
    tags: ["cloud"],
  },
]
