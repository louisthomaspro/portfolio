import Blime from "@/public/projects/blime.jpg"
import SeaLife from "@/public/projects/sea-life.png"
import { Project } from "@/types"

export const projects: Project[] = [
  {
    website: "https://sealife.guide/",
    title: "SeaLife",
    imageSrc: SeaLife,
    description:
      "Marine species guide with more than 1,000 species. Search by name or filter by color, shape, and habitat, and find a species from a description with an AI assistant. Free on the web, iOS, and Android.",
    tags: ["Next.js", "iOS", "Android"],
  },
  {
    title: "Blime",
    imageSrc: Blime,
    description:
      "YouTube creator search and analysis for brands and marketing teams. A search engine of 10 million indexed creators, enriched with video links, posting frequency, and median views.",
    tags: ["Next.js", "Supabase", "Elasticsearch"],
  },
]
