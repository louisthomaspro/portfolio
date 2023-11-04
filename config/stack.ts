import { StackItem } from "@/types"

export const tags = [
  {
    label: "♥",
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
]
