"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="pt-20 pb-40 min-h-screen flex flex-col bg-transparent w-screen overflow-x-hidden">
      {/* Feature Section: 왼쪽에 paulies_poster.png 이미지 */}
      <section className="w-full flex justify-center bg-transparent py-10">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center p-6 md:p-10 gap-6 md:gap-10 bg-transparent">
          <div className="w-full md:w-2/5 flex-shrink-0">
            <img src="/paulies_poster.png" alt="Paulie's Poster" className="rounded-xl w-full h-auto object-contain" />
          </div>
          <div className="w-full md:w-3/5 flex flex-col justify-center text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#fc492d] mb-4 uppercase tracking-wide">{t('about.title')}</h2>
            <p className="text-base md:text-lg text-[#634d40] leading-relaxed whitespace-pre-line">
              {t('about.history')}
            </p>
          </div>
        </div>
      </section>

      {/* 섹션 구분 라인 */}
      <div className="w-full flex justify-center mt-[50px] mb-[50px]">
        <div className="w-full max-w-5xl h-[2px] bg-[#4b3a2f] opacity-30 rounded" />
      </div>
      {/* 특징 3칼럼 섹션 */}
      <section className="w-full flex justify-center bg-transparent pb-10 mt-[100px]">
        <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 프리미엄 재료 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img src="/aboutus.png" alt="프리미엄 재료" className="w-24 h-24 object-contain mx-auto" />
            </div>
            <div className="font-bold text-lg mb-2 text-[#4b3a2f]">{t('about.feature1.title')}</div>
            <div className="text-sm text-[#634d40] leading-relaxed">
              {t('about.feature1.description')}
            </div>
          </div>
          {/* 벽돌 오븐 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img src="/aboutus_oven.png" alt="정통 벽돌 오븐" className="w-24 h-24 object-contain mx-auto" />
            </div>
            <div className="font-bold text-lg mb-2 text-[#4b3a2f]">{t('about.feature2.title')}</div>
            <div className="text-sm text-[#634d40] leading-relaxed">
              {t('about.feature2.description')}
            </div>
          </div>
          {/* 반죽 기술 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img src="/aboutus_tech.png" alt="차별화된 기술" className="w-24 h-24 object-contain mx-auto" />
            </div>
            <div className="font-bold text-lg mb-2 text-[#4b3a2f]">{t('about.feature3.title')}</div>
            <div className="text-sm text-[#634d40] leading-relaxed">
              {t('about.feature3.description')}
            </div>
          </div>
        </div>
      </section>
      {/* 3칼럼 아래 섹션 구분 라인 */}
      <div className="w-full flex justify-center mt-[100px] mb-[50px]">
        <div className="w-full max-w-5xl h-[2px] bg-[#4b3a2f] opacity-30 rounded" />
      </div>

      {/* 가운데 정렬된 slice_bb.png 섹션 */}
      <section className="w-full flex justify-center items-center py-12">
        <img src="/slice_bb.png" alt="피자 조각 일러스트" className="mx-auto w-auto max-w-xs md:max-w-md lg:max-w-lg h-auto" />
      </section>

      {/* 광고성 문구 섹션 */}
      <section className="w-full flex justify-center items-center py-8">
        <blockquote className="relative text-center text-[#4b3a2f] font-semibold text-lg md:text-xl leading-8 md:leading-9 italic max-w-2xl mx-auto px-4">
          <span className="text-5xl md:text-7xl align-top text-[#4b3a2f] font-serif font-bold select-none mr-2" style={{verticalAlign:'top'}}>"</span>
          <span className="inline-block align-middle whitespace-pre-line">
            {t('about.quote')}
          </span>
          <span className="text-5xl md:text-7xl align-bottom text-[#4b3a2f] font-serif font-bold select-none ml-2" style={{verticalAlign:'bottom'}}>"</span>
        </blockquote>
      </section>
    </div>
  )
} 