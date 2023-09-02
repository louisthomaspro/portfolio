import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogCard, IBlog } from "@/components/blocks/blog/blog-card"
import { Icons } from "@/components/icons"

export const Blog = ({ className }: { className?: string }) => {
  const blogs: IBlog[] = [
    {
      source: "twitter",
      url: "https://twitter.com/leerob/status/1436400458939909120",
      title: "Lee Robinson on Twitter",
      description:
        "I'm excited to announce that I'm joining @vercel as a Senior Engineer! 🎉 I'll be working on the Vercel platform, helping to build the next generation of developer tools. I'm so grateful for the opportunity and can't wait to get started!",
      publicationDate: "Sep 10, 2021",
    },
    {
      source: "twitter",
      url: "https://twitter.com/leerob/status/1436400458939909120",
      title: "Lee Robinson on Twitter",
      description:
        "I'm excited to announce that I'm joining @vercel as a Senior Engineer! 🎉 I'll be working on the Vercel platform, helping to build the next generation of developer tools. I'm so grateful for the opportunity and can't wait to get started!",
      publicationDate: "Sep 10, 2021",
    },
  ]

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>
          <Icons.blog className="h-4 mr-2" />
          Blog
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={cn("flex flex-col px-5 bg-neutral-800 rounded-2xl border border-white/10", className)}>
          {blogs.map((item, index) => (
            <BlogCard key={index} blog={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
