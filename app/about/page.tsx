"use client"

import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="pt-20 pb-0 min-h-screen flex flex-col bg-transparent w-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-screen bg-[#f5f0e6] flex flex-col items-center justify-center py-16 relative overflow-hidden px-0">
        <img src="/main2.png" alt="Bread Background" className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0" />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-raleway font-extrabold text-[#2d2d2d] mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-[#634d40] text-center max-w-2xl mb-8">
            Paulie's Pizza는 뉴욕 스타일의 정통 브릭 오븐 피자를 제공하는 최고의 피자 레스토랑입니다.<br/>
            신선한 재료와 전통 레시피로 만든 다양한 피자를 경험해보세요.
          </p>
        </div>
      </section>

      {/* Chef & Intro Section */}
      <section className="w-screen grid md:grid-cols-2 gap-8 bg-white/90 rounded-2xl shadow-lg px-0 py-12 mt-[-60px] relative z-20">
        <div className="flex items-center justify-center px-4">
          <img src="/chef_running.png" alt="Paulie's Pizza Chef" className="rounded-xl shadow-lg w-[320px] h-auto object-contain bg-transparent" />
        </div>
        <div className="flex flex-col justify-center px-4">
          <h2 className="text-3xl font-raleway font-bold text-[#634d40] mb-4">Home Sweet Pizzeria</h2>
          <p className="text-base text-[#634d40] mb-4">
            Paulie's Pizza는 뉴욕에서 시작된 정통 피자 레시피와 따뜻한 환대를 자랑합니다.<br/>
            매일 신선한 재료로 반죽을 만들고, 벽돌 오븐에서 구워내는 진짜 뉴욕 피자를 경험하세요.
          </p>
          <div className="bg-[#f5f0e6] rounded-lg p-4 mb-2">
            <div className="font-bold text-[#fc492d] mb-1">Opening Hours</div>
            <div className="text-sm text-[#634d40]">Monday - Friday: <span className="font-semibold">11:00 - 22:00</span></div>
            <div className="text-sm text-[#634d40]">Saturday - Sunday: <span className="font-semibold">11:00 - 23:00</span></div>
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-[#634d40] hover:text-[#fc492d]">Instagram</a>
            <a href="#" className="text-[#634d40] hover:text-[#fc492d]">Facebook</a>
            <a href="#" className="text-[#634d40] hover:text-[#fc492d]">Mail</a>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="w-screen flex flex-col md:flex-row items-center gap-8 py-16 px-0">
        <div className="md:w-1/2 w-full flex justify-center px-4">
          <img src="/tomato_.jpg" alt="Fresh Ingredients" className="rounded-xl shadow-lg w-[340px] h-auto object-cover" />
        </div>
        <div className="md:w-1/2 w-full px-4">
          <h3 className="text-2xl font-raleway font-bold text-[#634d40] mb-4">Freshly Baked Pizza Every Day</h3>
          <p className="text-base text-[#634d40] mb-6">
            매일 아침 신선한 재료로 반죽을 만들고, 정성껏 토핑을 올려 벽돌 오븐에서 구워냅니다.<br/>
            Paulie's Pizza는 언제나 최고의 맛과 품질을 약속합니다.
          </p>
          <button className="px-6 py-3 bg-[#fc492d] text-white rounded-lg hover:bg-[#634d40] transition-colors duration-300 font-bold">Visit Us</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-screen bg-white/90 py-16 px-0">
        <div className="w-full px-4">
          <h3 className="text-3xl font-raleway font-bold text-center text-[#634d40] mb-10">Benefits Of Paulie's Pizza</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f5f0e6] rounded-xl p-6 text-center shadow">
              <div className="text-2xl font-bold text-[#fc492d] mb-2">🍕</div>
              <div className="font-semibold mb-1">다양한 메뉴</div>
              <div className="text-sm text-[#634d40]">클래식부터 스페셜까지, 모두를 위한 피자</div>
            </div>
            <div className="bg-[#f5f0e6] rounded-xl p-6 text-center shadow">
              <div className="text-2xl font-bold text-[#fc492d] mb-2">🥗</div>
              <div className="font-semibold mb-1">신선한 재료</div>
              <div className="text-sm text-[#634d40]">매일 아침 준비하는 신선한 토핑</div>
            </div>
            <div className="bg-[#f5f0e6] rounded-xl p-6 text-center shadow">
              <div className="text-2xl font-bold text-[#fc492d] mb-2">🔥</div>
              <div className="font-semibold mb-1">벽돌 오븐</div>
              <div className="text-sm text-[#634d40]">전통 방식의 벽돌 오븐에서 구워내는 맛</div>
            </div>
            <div className="bg-[#f5f0e6] rounded-xl p-6 text-center shadow">
              <div className="text-2xl font-bold text-[#fc492d] mb-2">⭐</div>
              <div className="font-semibold mb-1">합리적 가격</div>
              <div className="text-sm text-[#634d40]">최고의 품질을 합리적인 가격에</div>
            </div>
            <div className="bg-[#f5f0e6] rounded-xl p-6 text-center shadow">
              <div className="text-2xl font-bold text-[#fc492d] mb-2">👨‍🍳</div>
              <div className="font-semibold mb-1">장인정신</div>
              <div className="text-sm text-[#634d40]">경험 많은 셰프의 손길</div>
            </div>
            <div className="bg-[#f5f0e6] rounded-xl p-6 text-center shadow">
              <div className="text-2xl font-bold text-[#fc492d] mb-2">🚚</div>
              <div className="font-semibold mb-1">빠른 배달</div>
              <div className="text-sm text-[#634d40]">언제 어디서나 빠르게 즐기는 피자</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Link */}
      <div className="text-center mt-12 mb-8 w-screen">
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-[#fc492d] text-white rounded-lg hover:bg-[#634d40] transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
} 