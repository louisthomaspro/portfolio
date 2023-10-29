"use client"

import "mapbox-gl/dist/mapbox-gl.css"

import { use, useEffect, useState } from "react"
import { Fira_Code } from "next/font/google"
import { Map, Marker } from "react-map-gl"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const firaCode = Fira_Code({ subsets: ["latin"] })

const COORDINATES = [9.7905, 126.1563]

const INITIAL_VIEW_STATE = {
  zoom: 2,
  latitude: COORDINATES[0],
  longitude: COORDINATES[1],
}

export const Location = ({ className }: { className?: string }) => {
  const [latitude, setLatitude] = useState("0")
  const [longitude, setLongitude] = useState("0")

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

  return (
    <Card className={cn("relative p-0 overflow-hidden", className)}>
      <CardHeader className="p-3.5 absolute z-10">
        <CardTitle>
          <Icons.location className="h-3.5 mr-2" />
          Location
        </CardTitle>
      </CardHeader>
      <CardContent className="absolute w-full h-full">
        <div
          style={{ height: "-webkit-fill-available" }}
          className="flex-1 overflow-hidden relative before:absolute before:inset-0 before:shadow-inner before:bg-gradient-to-t before:from-black before:via-transparent before:to-transparent"
        >
          <Map
            initialViewState={INITIAL_VIEW_STATE}
            attributionControl={false}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            mapStyle="mapbox://styles/mapbox/dark-v9"
            projection={"globe" as any}
          >
            <Marker latitude={COORDINATES[0]} longitude={COORDINATES[1]}>
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-slate-400"></span>
              </span>
            </Marker>
          </Map>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="relative">
            <div className="absolute bottom-0 h-full w-full z-20 select-none bg-gradient-to-t from-black/40 to-100%" />
            <div className="flex flex-col text-sm p-3.5">
              <div className="font-bold">Siargao, Philippines</div>
              <div>Time: 4:34pm</div>
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
