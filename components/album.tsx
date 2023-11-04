import { useEffect, useState } from "react"
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"

import "keen-slider/keen-slider.min.css"

import { motion, Variants } from "framer-motion"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const delay = 0
const animationDuration = 0.03
const letterAnimationDuration = 0.15

// Animate each letter
const container: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (i: number = 1) => ({
    opacity: 1,
    transition: { staggerChildren: animationDuration, delayChildren: i * delay },
  }),
}

const child: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: letterAnimationDuration,
      // type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
  hidden: {
    opacity: 0,
    y: 4,
    transition: {
      duration: letterAnimationDuration,
      // type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
}

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

  const medias = [
    {
      description: "Mount Rinjani, Lombok",
      url: "/album/2.jpg",
    },
    {
      description: "Countryside, Lombok",
      url: "/album/1.jpg",
    },
  ]

  return (
    <Card className={cn("relative p-0 overflow-hidden", className)} {...props}>
      <CardContent className="absolute w-full h-full">
        <div className={"grid w-full h-full relative opacity-90 hover:opacity-100 transition-opacity"}>
          <div ref={sliderRef} className="keen-slider">
            {medias.map((media, i) => (
              <motion.h1
                key={i}
                style={{ display: "flex", overflow: "hidden" }}
                variants={container}
                initial="hidden"
                animate={currentSlide === i ? "visible" : "hidden"}
                className="absolute top-3 right-4 opacity-80 z-30 text-[11px]"
                {...props}
              >
                {Array.from(media.description).map((letter, index) => (
                  <motion.span key={index} variants={child}>
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.h1>
            ))}
            {medias.map((media, i) => (
              <div className="relative keen-slider__slide">
                <div className="absolute top-0 h-16 w-full z-20 select-none bg-gradient-to-b from-black/40 to-100%" />
                <Image
                  src={media.url}
                  alt={media.description}
                  width={1000}
                  height={1000}
                  key={i}
                  className="h-full w-full object-cover absolute transition-opacity duration-150"
                />
              </div>
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
                <span className="sr-only">Previous</span>
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
                <span className="sr-only">Next</span>
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
                    >
                      <span className="sr-only">Slide {idx + 1}</span>
                    </button>
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
