import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export const Location = ({ className }: { className?: string }) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>
          <Icons.location className="h-4 mr-2" />
          Location
        </CardTitle>
      </CardHeader>
      <CardContent>
        <iframe
          width="100%"
          height="400px"
          src="https://api.mapbox.com/styles/v1/louisthomaspro/cllj5eeev018o01pb158o3vhq.html?title=false&access_token=pk.eyJ1IjoibG91aXN0aG9tYXNwcm8iLCJhIjoiY2xsajVhZW4xMW1hdzNscWxtMDBjaDZ4dSJ9.uz-LUcx45Lp6-FkFoMctHA&zoomwheel=false#8.16/9.734/126.284"
          title="Monochrome"
          style={{ border: "none" }}
        ></iframe>
      </CardContent>
    </Card>
  )
}
