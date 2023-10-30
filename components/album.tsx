import { useState } from "react"
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"

import "keen-slider/keen-slider.min.css"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export const Album = ({ className, ...props }: React.ComponentProps<typeof Card>) => {
  const [currentSlide, setCurrentSlide] = useState(0) // keenSlider
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider: any) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const medias = ["/2.jpg", "/1.jpg"]

  return (
    <Card className={cn("relative p-0 overflow-hidden", className)} {...props}>
      <CardContent className="absolute w-full h-full">
        <div className={"grid w-full h-full relative opacity-90 hover:opacity-100 transition-opacity"}>
          <div ref={sliderRef} className="keen-slider">
            {medias.map((url, i) => (
              <Image
                src={url}
                alt="ads"
                width={400}
                height={400}
                key={i}
                className="keen-slider__slide h-full w-full object-cover absolute transition-opacity duration-150"
                priority={i === 0}
              />
            ))}
          </div>
          {loaded && instanceRef.current && (
            <>
              {/* Chevron left */}
              <div
                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                className={cn(
                  "w-8 h-8 p-2 rounded-full bg-white font-black left-[5px] inset-y-0 my-auto absolute cursor-pointer shadow-sm",
                  "opacity-80 hover:scale-100 scale-90 active:scale-[99%] transition-all",
                  "flex items-center justify-center"
                )}
              >
                <Icons.chevronLeft className="text-gray-700" />
              </div>
              {/* Chevron right */}
              <div
                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                className={cn(
                  "w-8 h-8 rounded-full bg-white font-black right-[5px] inset-y-0 my-auto absolute cursor-pointer shadow-sm",
                  "opacity-80 hover:scale-100 scale-90 active:scale-[99%] transition-all",
                  "flex items-center justify-center"
                )}
              >
                <Icons.chevronRight className="text-gray-700" />
              </div>
              {/* Dots */}
              <div className="absolute bottom-0 w-full flex py-2 justify-center">
                {[...Array(instanceRef.current?.track?.details?.slides?.length).keys()].map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx)
                      }}
                      className={cn(
                        "dot border-none w-2 h-2 bg-white opacity-50 rounded-full mx-1 cursor-pointer select-none",
                        currentSlide === idx && "opacity-100"
                      )}
                    ></button>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}