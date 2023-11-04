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
    logo: "/stack/vercel.png",
    tags: ["favorite", "framework", "hosting"],
  },
  {
    title: "Next.js",
    description: "Framework built on top of React",
    url: "https://nextjs.org/",
    logo: "/stack/nextjs.png",
    tags: ["favorite", "framework", "hosting"],
  },
  {
    title: "Figma / Figjam",
    description: "Collaborative design tool",
    url: "https://figma.com/",
    logo: "/stack/figma.png",
    tags: ["framework", "hosting"],
  },
  {
    title: "React",
    description: "JavaScript UI library",
    url: "https://react.dev/",
    logo: "/stack/react.png",
    tags: ["design"],
  },
  {
    title: "Prismic",
    description: "CMS Headless page builder",
    url: "https://prismic.io/",
    logo: "/stack/prismic.png",
    tags: ["cms"],
  },
  {
    title: "Figma / Figjam",
    description: "Collaborative design tool",
    url: "https://figma.com/",
    logo: "/stack/figma.png",
    tags: ["design"],
  },
  {
    title: "Shad/cn",
    description: "Build your own component library",
    url: "https://ui.shadcn.com/",
    logo: "/stack/shadcn.png",
    tags: ["cms"],
  },
  {
    title: "Linear",
    description: "Productivity and planning tool",
    url: "https://linear.app/",
    logo: "/stack/linear.png",
    tags: ["project-management"],
  },
  {
    title: "Google Workspace",
    description: "Productivity and collaboration suite",
    url: "https://workspace.google.com/",
    logo: "/stack/google-workspace.png",
    tags: ["project-management"],
  },
  {
    title: "Framer",
    description: "Visual web design platform",
    url: "https://framer.com/",
    logo: "/stack/framer.png",
    tags: ["project-management"],
  },
  {
    title: "Supabase",
    description: "Open source Firebase alternative",
    url: "https://supabase.com/",
    logo: "/stack/supabase.png",
    tags: ["project-management"],
  },
  {
    title: "Slack",
    description: "Team communication app",
    url: "https://slack.com/",
    logo: "/stack/slack.png",
    tags: ["project-management"],
  },
  {
    title: "Clipchamp",
    description: "Video editing tool",
    url: "https://clipchamp.com/",
    logo: "/stack/clipchamp.png",
    tags: ["project-management"],
  },
  {
    title: "AWS",
    description: "Cloud computing platform",
    url: "https://aws.amazon.com/",
    logo: "/stack/aws.jpg",
    tags: ["cloud"],
  },
  {
    title: "Firebase",
    description: "Developer-friendly cloud computing platform",
    url: "https://firebase.google.com/",
    logo: "/stack/firebase.png",
    tags: ["cloud"],
  },
  {
    title: "TailwindCSS",
    description: "CSS framework",
    url: "https://tailwindcss.com/",
    logo: "/stack/tailwindcss.png",
    tags: ["cloud"],
  },
  {
    title: "Jitsu",
    description: "Data event platform",
    url: "https://jitsu.com/",
    logo: "/stack/jitsu.png",
    tags: ["cloud"],
  },
  {
    title: "Notion",
    description: "All-in-one workspace",
    url: "https://www.notion.so/",
    logo: "/stack/notion.png",
    tags: ["cloud"],
  },
]
