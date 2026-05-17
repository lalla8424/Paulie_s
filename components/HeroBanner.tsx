"use client"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

/**
 * Hero 슬라이드 정의
 * - src: 이미지 경로
 * - objectPosition: object-cover로 좌우/상하가 잘릴 때 보여줄 기준점.
 *   이미지 내부 텍스트/주요 피사체가 화면 중앙에서 벗어나 보일 때 보정에 사용.
 *   미지정 시 'center'(50% 50%) 기본값 사용.
 */
type HeroSlide = { src: string; objectPosition?: string }

const HERO_SLIDES: readonly HeroSlide[] = [
  { src: '/oven.jpg' },
  // flour.jpg: "All trump" 텍스트가 이미지 가로 약 48% 위치 → 화면 중앙으로 보정
  { src: '/flour.jpg', objectPosition: '48% center' },
  { src: '/cheese.jpg' },
  { src: '/tomato_.jpg' },
  { src: '/d_tower_2.jpg' },
  { src: '/location2.jpg' },
  { src: '/location_3.jpg' },
  { src: '/one_grove_2.jpg' },
] as const

const HeroBanner = () => {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    if (!api) return
    // 가장 일반적인 웹사이트 hero 슬라이드 자동 전환 간격 (Bootstrap carousel 기본값과 동일)
    const SLIDE_INTERVAL_MS = 5000
    const interval = setInterval(() => {
      api.scrollNext()
    }, SLIDE_INTERVAL_MS)
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
          {HERO_SLIDES.map((slide, idx) => (
            <CarouselItem key={slide.src} className="!p-0 !pl-0 h-full min-h-0 flex items-stretch w-full">
              <div className="h-full w-full flex items-stretch">
                <img
                  src={slide.src}
                  alt={`Paulie's hero slide ${idx + 1}`}
                  className="w-full h-full object-cover"
                  style={{
                    minHeight: "300px",
                    objectPosition: slide.objectPosition ?? "center",
                  }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Dot navigation */}
        <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex flex-row gap-2 z-10">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.src}
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
