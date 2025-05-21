"use client"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

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
          {[
            0, 2, 3, 4, 5, 6, 7
          ].map((index, arrIdx, arr) => {
            let src = '';
            if (index === 0) src = '/oven.jpg';
            else if (index === 2) src = '/flour.jpg';
            else if (index === 3) src = '/cheese.jpg';
            else if (index === 4) src = '/tomato_.jpg';
            else if (index === 5) src = '/d_tower.jpg';
            else if (index === 6) src = '/location2.jpg';
            // 마지막 슬라이드는 항상 /location_3.jpg
            if (arrIdx === arr.length - 1) src = '/location_3.jpg';
            return (
              <CarouselItem key={index} className="!p-0 !pl-0 h-full min-h-0 flex items-stretch w-full">
                <div className="h-full w-full flex items-stretch">
                  <img
                    src={src}
                    alt={`Delicious pizza ${arrIdx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {/* Dot navigation */}
        <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex flex-row gap-2 z-10">
          {[0, 1, 2, 3, 4, 5, 6].map((idx) => (
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