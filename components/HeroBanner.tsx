"use client"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const HERO_SLIDES = [
  '/oven.jpg',
  '/flour.jpg',
  '/cheese.jpg',
  '/tomato_.jpg',
  '/d_tower_2.jpg',
  '/location2.jpg',
  '/location_3.jpg',
  '/one_grove_2.jpg',
] as const

const HeroBanner = () => {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 6000)
    return () => clearInterval(interval)
  }, [api])
  useEffect(() => {
    if (!api) return
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])
  return (
    <div className="relative h-full min-h-0 flex items-stretch w-screen left-1/2 right-1/2 -translate-x-1/2" style={{ position: 'relative' }}>
      <Carousel setApi={setApi} className="w-screen h-full min-h-0 flex items-stretch overflow-visible">
        <CarouselContent className="m-0 !-ml-0 h-full min-h-0 w-screen">
          {HERO_SLIDES.map((src, idx) => (
            <CarouselItem key={src} className="!p-0 !pl-0 h-full min-h-0 flex items-stretch w-full">
              <div className="h-full w-full flex items-stretch">
                <img
                  src={src}
                  alt={`Paulie's hero slide ${idx + 1}`}
                  className="w-full h-full object-cover"
                  style={{ minHeight: "300px" }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Dot navigation */}
        <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex flex-row gap-2 z-10">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api && api.scrollTo(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${current === idx ? 'bg-white' : 'bg-white/70'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  )
}

export default HeroBanner;
