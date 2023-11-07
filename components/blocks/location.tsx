"use client"

import "mapbox-gl/dist/mapbox-gl.css"

import { useEffect, useState } from "react"
import { Fira_Code } from "next/font/google"
import { Map, Marker } from "react-map-gl"

import useWindowSize from "@/lib/hooks/use-windows-size"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const firaCode = Fira_Code({ subsets: ["latin"] })

const COORDINATES = [9.7905, 126.1563]

const PAGINATION_BREAKPOINT = 1024

const INITIAL_VIEW_STATE = {
  zoom: 2,
  latitude: COORDINATES[0],
  longitude: COORDINATES[1],
}

export const Location = ({ className, ...props }: React.ComponentProps<typeof Card>) => {
  const [latitude, setLatitude] = useState("0")
  const [longitude, setLongitude] = useState("0")
  const { width } = useWindowSize()

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      const randomLatitude = (Math.random() * 180 - 90).toFixed(4)
      const randomLongitude = (Math.random() * 360 - 180).toFixed(4)
      setLatitude(randomLatitude)
      setLongitude(randomLongitude)
    }, 50)

    setTimeout(() => {
      clearInterval(shuffleInterval)

      setLatitude(COORDINATES[0].toString())
      setLongitude(COORDINATES[1].toString())
    }, 1000)

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(shuffleInterval)
    }
  }, [])

  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Manila" }))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Manila" }))
    }, 1000)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, []) // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <Card className={cn("relative p-0 overflow-hidden", className)} {...props}>
      <CardHeader className="p-3.5 absolute z-10">
        <CardTitle>
          <Icons.location className="h-3.5 mr-2" />
          Location
        </CardTitle>
      </CardHeader>
      <CardContent className="absolute w-full h-full">
        <div className="flex-1 h-full overflow-hidden relative before:absolute before:inset-0 before:shadow-inner before:bg-gradient-to-t before:from-black before:via-transparent before:to-transparent">
          <Map
            style={{ height: "100%", width: "100%" }}
            initialViewState={INITIAL_VIEW_STATE}
            attributionControl={false}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            mapStyle="mapbox://styles/mapbox/dark-v9"
            projection={"globe" as any}
            dragPan={(width ?? 0) >= PAGINATION_BREAKPOINT}
          >
            <Marker latitude={COORDINATES[0]} longitude={COORDINATES[1]}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-400"></span>
              </span>
            </Marker>
          </Map>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="relative">
            <div className="absolute bottom-0 h-full w-full z-20 select-none bg-gradient-to-t from-black/40 to-100%" />
            <div className="flex flex-col p-3.5 text-[11px] relative z-30 opacity-90">
              <div className="font-semibold">Siargao, Philippines</div>
              <div className={cn(firaCode.className)} suppressHydrationWarning>
                {time} (GMT+8)
              </div>
            </div>
          </div>
        </div>
        {/* <div className={cn("text-right", firaCode.className)}>
          {latitude}° N, {longitude}° W
        </div> */}
      </CardContent>
    </Card>
  )
}
