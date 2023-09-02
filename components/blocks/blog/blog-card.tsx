import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export interface IBlog {
  source: "twitter" | "medium"
  url: string
  title: string
  description: string
  publicationDate: string
  className?: string
}

export const BlogCard = ({ blog, className }: { blog: IBlog; className?: string }) => {
  return (
    <div className={cn("flex gap-4 py-2.5 border-b border-white/10", className)}>
      <div>
        <Icons.twitter className="h-4 border border-white/30 rounded-xl p-3" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-semibold">{blog.title}</div>
        <div className="line-clamp-2">{blog.description}</div>
        <div>{blog.publicationDate}</div>
      </div>
      <div className="flex items-center">
        <Icons.chevronRight className="h-4 px-3" />
      </div>
    </div>
  )
}
