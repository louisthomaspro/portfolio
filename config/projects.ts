import LighthouseGuard from "@/public/projects/lighthouse-guard.jpg"
import MonPanier from "@/public/projects/mon-panier.png"
import SeaLife from "@/public/projects/sea-life.png"
import { Project } from "@/types"

export const projects: Project[] = [
  {
    url: "https://play.google.com/store/apps/details?id=app.vercel.sea_life.twa",
    title: "Sea Life",
    imageSrc: SeaLife,
    description: "Explore the marine life of many places with more than 1000 cards of common or unusual species.",
    tags: ["Next.js", "Firebase", "Play Store"],
  },
  {
    url: "https://vercel.com/integrations/lighthouse-guard",
    title: "Lighthouse Guard",
    imageSrc: LighthouseGuard,
    description: "Streamline your performance monitoring process. Check which commits dropped your Lighthouse score.",
    tags: ["Next.js", "Vercel Integration"],
  },
  {
    url: "https://www.figma.com/proto/1o5wSNJooIAmzh9BqtYrec/Design-system?type=design&node-id=1265-4084&t=RbZgc3FYgeAHHXAG-0&scaling=scale-down&page-id=420%3A283&starting-point-node-id=1265%3A4084&show-proto-sidebar=1",
    title: "MonPanier",
    imageSrc: MonPanier,
    description: "Connect with your local shops and order online. Eat local, eat fresh.",
    tags: ["Prototype", "Figma"],
  },
]
