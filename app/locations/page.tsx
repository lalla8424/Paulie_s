"use client"

import Link from "next/link"
import { useState } from "react"

const images = [
  "/location2.jpg",
  "/location_3.jpg",
  "/d_tower.jpg",
  "/location-parnas.jpg",
  "/location-paradise.jpg",
  "/location-dtower.jpg",
]

export default function LocationsPage() {
  const [current, setCurrent] = useState(0)
  const total = images.length

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total)
  const next = () => setCurrent((prev) => (prev + 1) % total)

  return (
    <div className="pt-20 pb-0 min-h-screen flex flex-col w-full">
      {/* 슬라이드 배너 */}
      <section className="w-screen flex flex-col items-center justify-center py-8 relative">
        <div className="relative w-full flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-[#fc492d]/80 text-[#634d40] rounded-full shadow p-2 z-10"
            aria-label="Previous"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <img
            src={images[current]}
            alt={`Location Slide ${current + 1}`}
            className="w-full h-auto max-h-[70vh] object-cover rounded-xl shadow-lg transition-all duration-500"
            style={{ aspectRatio: "16/9" }}
          />
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-[#fc492d]/80 text-[#634d40] rounded-full shadow p-2 z-10"
            aria-label="Next"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2.5 h-2.5 rounded-full ${current === idx ? 'bg-[#fc492d]' : 'bg-[#634d40]/30'} transition-all`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 메뉴 텍스트 한 줄로 추가 (구조만, 스타일 없음) */}
      <div>
        <span>APPETIZERS</span>
        <span> | </span>
        <span>BRICK OVEN PIZZA</span>
        <span> | </span>
        <span>PASTA</span>
        <span> | </span>
        <span>DRINKS</span>
      </div>

      {/* 갤러리 섬네일 */}
      <div className="w-full flex justify-center gap-4 mt-6 mb-8">
        {images.map((img, idx) => (
          <button
            key={img}
            onClick={() => setCurrent(idx)}
            className={`border-2 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none ${current === idx ? 'border-[#fc492d] shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'}`}
            style={{ width: 100, height: 64 }}
            aria-label={`Go to slide ${idx + 1}`}
          >
            <img
              src={img}
              alt={`Gallery thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="container mx-auto max-w-4xl">
        <p className="text-lg text-[#634d40] text-center mb-8">
          Paulie's Pizza는 다양한 지점에서 여러분을 기다리고 있습니다.<br/>
          아래에서 가까운 매장을 확인해보세요!<br/>
          <br/>
          (이곳에 매장 정보, 지도, 연락처 등 원하는 내용을 자유롭게 추가하세요)
        </p>
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-[#fc492d] text-white rounded-lg hover:bg-[#634d40] transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 