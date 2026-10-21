"use client"

import "mapbox-gl/dist/mapbox-gl.css"

import { useState } from "react"
import { Map, Marker } from "react-map-gl/mapbox"

import { cn } from "@/lib/utils"

type LocationMapProps = {
  latitude: number
  longitude: number
}

export default function LocationMap({ latitude, longitude }: LocationMapProps) {
  const [loaded, setLoaded] = useState(false)
  const [interactive] = useState(() => window.matchMedia("(min-width: 1024px)").matches)

  return (
    <div className={cn("size-full transition-opacity duration-1000", loaded ? "opacity-100" : "opacity-0")}>
      <Map
        style={{ height: "100%", width: "100%" }}
        initialViewState={{ zoom: 1.6, latitude, longitude }}
        attributionControl={false}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        projection="globe"
        dragPan={interactive}
        dragRotate={false}
        scrollZoom={false}
        touchZoomRotate={false}
        doubleClickZoom={false}
        keyboard={false}
        onLoad={(event) => {
          setLoaded(true)
          event.target.flyTo({ zoom: 2.4, duration: 2500, essential: false })
        }}
      >
        <Marker latitude={latitude} longitude={longitude}>
          <span className="relative flex size-2.5">
            <span className="motion-safe:animate-ping absolute inline-flex size-full rounded-full bg-slate-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full size-2.5 bg-slate-400"></span>
          </span>
        </Marker>
      </Map>
    </div>
  )
}
