"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const images = [
  "/coex_2.jpg",      // COEX store wall artwork
  "/coex_1.jpg",      // COEX store interior 1
  "/d_tower_2.jpg",   // D-Tower store
  "/coex.jpg",        // COEX store interior 2
  "/d_tower_3.jpg",   // D-Tower store - new image
  "/hum.JPG"          // Camp Humphreys store
];

export default function LocationsPage() {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const [selectedStore, setSelectedStore] = useState(0);
  const { t } = useLanguage();

  // 다국어 지원 매장 데이터
  const STORES = [
    {
      name: t('locations.parnas.name'),
      sub: t('locations.parnas.sub'),
      address: t('locations.parnas.address'),
      tel: t('locations.parnas.tel'),
      hours: t('locations.parnas.hours'),
      parking: t('locations.parnas.parking'),
      transit: t('locations.parnas.transit'),
      map: "https://www.google.com/maps?q=파르나스몰&output=embed",
    },
    {
      name: t('locations.dtower.name'),
      sub: t('locations.dtower.sub'),
      address: t('locations.dtower.address'),
      tel: t('locations.dtower.tel'),
      hours: t('locations.dtower.hours'),
      parking: t('locations.dtower.parking'),
      transit: t('locations.dtower.transit'),
      map: "https://www.google.com/maps?q=디타워+광화문&output=embed",
    },
    {
      name: t('locations.humphreys.name'),
      sub: t('locations.humphreys.sub'),
      address: t('locations.humphreys.address'),
      tel: t('locations.humphreys.tel'),
      hours: t('locations.humphreys.hours'),
      parking: t('locations.humphreys.parking'),
      transit: t('locations.humphreys.transit'),
      map: "https://www.google.com/maps?q=118+Anjeong+Sunhwan-ro,+Paengseong-eup,+Pyeongtaek-si,+Gyeonggi-do&output=embed",
    },
  ];

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const next = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <div className="pt-20 pb-0 min-h-screen flex flex-col w-full">
      {/* 슬라이드 배너 */}
      <section className="w-screen flex flex-col items-center pb-8 justify-center relative">
        <div className="relative w-full flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-[#fc492d]/80 text-[#634d40] rounded-full shadow p-2 z-10"
            aria-label="Previous"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <img
            src={images[current]}
            alt={`Location Slide ${current + 1}`}
            className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] object-cover shadow-lg transition-all duration-500"
            style={{ 
              aspectRatio: "16/9",
              minHeight: "200px"
            }}
          />
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-[#fc492d]/80 text-[#634d40] rounded-full shadow p-2 z-10"
            aria-label="Next"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2.5 h-2.5 rounded-full ${
                current === idx ? "bg-[#fc492d]" : "bg-[#634d40]/30"
              } transition-all`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 갤러리 섬네일 */}
      <div className="w-full flex justify-center gap-2 sm:gap-4 mt-6 mb-8 px-4 overflow-x-auto">
        {images.map((img, idx) => (
          <button
            key={img}
            onClick={() => setCurrent(idx)}
            className={`border-2 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none flex-shrink-0 ${
              current === idx
                ? "border-[#fc492d] shadow-lg"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
            style={{ 
              width: "clamp(70px, 15vw, 100px)", 
              height: "clamp(45px, 10vw, 64px)"
            }}
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

      {/* 슬라이드/썸네일 아래 매장명 탭 */}
      <div className="flex justify-center gap-x-4 sm:gap-x-6 my-8 px-4 overflow-x-auto">
        {STORES.map((store, idx) => (
          <button
            key={store.name}
            onClick={() => setSelectedStore(idx)}
            className={`text-sm sm:text-lg font-bold tracking-wide px-2 py-1 border-b-2 transition-colors duration-200 flex-shrink-0 ${
              selectedStore === idx
                ? "text-[#fc492d] border-[#fc492d]"
                : "text-[#634d40] border-transparent hover:text-[#fc492d]"
            }`}
            style={{ minWidth: 100 }}
          >
            {store.name}
            <span className="block text-xs font-normal text-[#634d40]">
              {store.sub}
            </span>
          </button>
        ))}
      </div>

      {/* 선택된 매장 정보 */}
      <div className="container mx-auto max-w-4xl mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-gray-200 rounded-xl p-6 bg-[#f7eee1]">
          {/* 왼쪽: 텍스트 정보 */}
          <div>
            <div className="text-2xl font-bold text-[#fc492d] mb-2">
              {STORES[selectedStore].name}
            </div>
            <div className="text-base text-[#634d40] mb-2">
              {STORES[selectedStore].sub}
            </div>
            <div className="text-sm text-[#634d40] mb-2">
              {STORES[selectedStore].address}
            </div>
            <div className="text-sm text-[#634d40] mb-2">
              {t('locations.hours.label')} {STORES[selectedStore].hours}
            </div>
            <div className="text-sm text-[#634d40] mb-2">
              {t('locations.tel.label')} <a href={`tel:${STORES[selectedStore].tel}`} className="text-[#fc492d] hover:text-[#fc492d]/80 underline cursor-pointer">{STORES[selectedStore].tel}</a>
            </div>
            <div className="text-sm text-[#634d40] mb-2">
              {t('locations.parking.label')} {STORES[selectedStore].parking}
            </div>
            <div className="text-sm text-[#634d40]">
              {t('locations.transit.label')} {STORES[selectedStore].transit}
            </div>
          </div>
          {/* 오른쪽: 지도 */}
          <div className="w-full h-full flex items-center justify-center">
            <iframe
              src={STORES[selectedStore].map}
              width="100%"
              height="240"
              style={{ border: 0, borderRadius: 12 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={STORES[selectedStore].name + " 위치"}
            />
          </div>
        </div>
      </div>
      <div style={{ height: "100px" }} aria-hidden="true" />
    </div>
  );
}
