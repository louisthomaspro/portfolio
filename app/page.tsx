import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/layouts/site-header"

export default function Home() {
  return (
    <div className="flex flex-col items-center container pt-20 pb-8">
      <SiteHeader />
      <div className="flex flex-col gap-5 pt-8 sm:pt-12 w-full">
        <div className="flex gap-5">
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-5 sm:flex-row">
              <Card className="aspect-square lg:aspect-auto lg:h-[300px] w-full">
                <CardContent>...</CardContent>
              </Card>
              <Card className="aspect-square w-full block lg:hidden">
                <CardHeader>
                  <CardTitle>My stack</CardTitle>
                </CardHeader>
                <CardContent>...</CardContent>
              </Card>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row">
              <Card className="sm:flex-1 aspect-square">
                <CardHeader>
                  <CardTitle>Blog</CardTitle>
                </CardHeader>
                <CardContent>...</CardContent>
              </Card>
              <Card className="sm:flex-1 aspect-square">
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>...</CardContent>
              </Card>
            </div>
          </div>
          <Card className="min-w-[400px] hidden lg:block">
            <CardHeader>
              <CardTitle>My stack</CardTitle>
            </CardHeader>
            <CardContent>...</CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Selected projects</CardTitle>
          </CardHeader>
          <CardContent>...</CardContent>
        </Card>
      </div>
    </div>
  )
}
