"use client"

import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="pt-20 pb-40 min-h-screen flex flex-col bg-transparent w-screen overflow-x-hidden">
      {/* Feature Section: 왼쪽에 paulies_poster.png 이미지 */}
      <section className="w-full flex justify-center bg-transparent py-10">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center p-6 md:p-10 gap-6 md:gap-10 bg-transparent">
          <div className="w-full md:w-2/5 flex-shrink-0">
            <img src="/paulies_poster.png" alt="Paulie's Poster" className="rounded-xl w-full h-auto object-contain" />
          </div>
          <div className="w-full md:w-3/5 flex flex-col justify-center text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#fc492d] mb-4 uppercase tracking-wide">OUR STORY</h2>
            <p className="text-base md:text-lg text-[#634d40] leading-relaxed">
              미국의 피자는 1900년대 후반, 남부 이탈리아 이민자 들에 의해 미국에 소개되었습니다.<br />
              뉴욕스타일의 피자는 풍부한 토핑과 흡사 마술같이 얇고 바삭한 도우입니다.<br />
              시간이 지나며 반죽은 점차 얇고 바삭하며 쫄깃한 식감으로 발전하였고, 이는 오늘날 우리가 알고 있는 뉴욕 스타일 피자의 탄생으로 이어졌습니다.<br />
              뉴욕 스타일의 조각피자의 접혀있는 이미지는 영화 및 대중문화에 자주 등장할 정도로 친숙한 모습입니다. 폴리스 브릭오븐 피제리아는 2015년, 이 정통 뉴욕의 맛을 한국에 전하고자 시작되었습니다.
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
            <div className="font-bold text-lg mb-2 text-[#4b3a2f]">직접 수입한 프리미엄 재료</div>
            <div className="text-sm text-[#634d40] leading-relaxed">
              정통 뉴욕 스타일 피자에 대한 저희의 고집을 지키기 위해, 폴리스는 핵심 재료인 밀가루, 토마토 소스, 치즈 등을 모두 미국에서 직접 수입하여 사용합니다. 정통 뉴욕 피자를 선보이기 위해 실제 뉴욕 피자 전문가와 같은 품질의 원재료를 사용하여, 우리는 정통 뉴욕피자와 동일한 맛과 품질의 결과를 재현할 수 있습니다.
            </div>
          </div>
          {/* 벽돌 오븐 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img src="/aboutus_oven.png" alt="정통 벽돌 오븐" className="w-24 h-24 object-contain mx-auto" />
            </div>
            <div className="font-bold text-lg mb-2 text-[#4b3a2f]">정통 벽돌 오븐 사용</div>
            <div className="text-sm text-[#634d40] leading-relaxed">
              뉴욕 피제리아의 오븐을 그대로 재현한 대형 벽돌 오븐을 맞춤 제작하여 사용하고 있습니다. 500-600°F(약 260-315°C)의 고온에서 구워내는 피자는 겉은 바삭하고 속은 쫄깃한 완벽한 식감을 자랑합니다.
            </div>
          </div>
          {/* 반죽 기술 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img src="/aboutus_tech.png" alt="차별화된 기술" className="w-24 h-24 object-contain mx-auto" />
            </div>
            <div className="font-bold text-lg mb-2 text-[#4b3a2f]">차별화된 기술</div>
            <div className="text-sm text-[#634d40] leading-relaxed">
              모든 메뉴는 매장에서 직접 신선하게 준비되며, 폴리스만의 독창적인 레시피와 숙련된 피자마스터의 전문 반죽 기술이 조화를 이루어, 어디서도 맛볼 수 없는 정통 뉴욕 스타일 피자를 선사합니다.
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
          <span className="text-5xl md:text-7xl align-top text-[#4b3a2f] font-serif font-bold select-none mr-2" style={{verticalAlign:'top'}}>“</span>
          <span className="inline-block align-middle">
            폴리스 피제리아는 한국의 고객들에게 진정한<br />
            뉴욕 핏자의 경험을 제공하는 것입니다.<br />
            진짜 뉴욕피자를 만드는 폴리스 핏제리아는<br />
            국내 최고의 정통 뉴욕 스타일 프리미엄 피자입니다.
          </span>
          <span className="text-5xl md:text-7xl align-bottom text-[#4b3a2f] font-serif font-bold select-none ml-2" style={{verticalAlign:'bottom'}}>”</span>
        </blockquote>
      </section>
    </div>
  )
} 