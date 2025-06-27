"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const menuImages = [
  "/1pg.jpg",
  "/pizza.jpg",
  "/pizza_1.jpg",
  "/drink.jpg",
  "/menu-1.png",
];

export default function MenuPage() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const total = menuImages.length;
  const { t } = useLanguage();
  
  // 다국어 지원 메뉴 카테고리
  const MENU_CATEGORIES = [
    { key: "APPETIZERS", label: t('menu.category.appetizers') },
    { key: "PIZZA", label: t('menu.category.pizza') },
    { key: "PASTA", label: t('menu.category.pasta') },
    { key: "DRINKS", label: t('menu.category.drinks') },
  ];
  
  const prev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + total) % total);
      setIsTransitioning(false);
    }, 200);
  };
  
  const next = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
      setIsTransitioning(false);
    }, 200);
  };

  // 자동 슬라이드 기능 - 5초마다 자동으로 다음 슬라이드로
  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      next();
    }, 5000);

    return () => {
      clearInterval(autoSlideTimer);
    };
  }, [current, next]);

  // 메뉴 카테고리 상태
  const [selectedCategory, setSelectedCategory] = useState("PIZZA");

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
          <div 
            className={`w-full transition-opacity duration-500 ease-in-out overflow-hidden rounded-xl ${
              isTransitioning ? 'opacity-50' : 'opacity-100'
            }`}
          >
          <img
            src={menuImages[current]}
            alt={`Menu Slide ${current + 1}`}
              className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] object-cover shadow-lg transition-all duration-[8000ms] ease-out transform animate-zoom-in"
              style={{ 
                aspectRatio: "16/9",
                transformOrigin: "center center",
                minHeight: "200px"
              }}
            />
          </div>
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
          {menuImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2.5 h-2.5 rounded-full ${current === idx ? "bg-[#fc492d]" : "bg-[#634d40]/30"} transition-all`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 메뉴 카테고리 한 줄로 추가 (구조만, 스타일 없음) */}
      <div className="grid grid-cols-1 gap-y-4 md:flex md:flex-row md:items-center md:justify-center md:gap-x-8 w-full max-w-2xl mx-auto my-4">
        {MENU_CATEGORIES.map((cat, idx) => (
          <React.Fragment key={cat.key}>
            <button
              className={`font-black text-[#634d40] text-lg md:text-xl whitespace-nowrap ${
                selectedCategory === cat.key ? "text-[#fc492d]" : ""
              }`}
              onClick={() => setSelectedCategory(cat.key)}
            >
              {cat.label}
            </button>
            {idx < MENU_CATEGORIES.length - 1 && (
              <span className="text-[#634d40] shrink-0 hidden md:inline">
                |
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center w-full">
            {selectedCategory === "APPETIZERS" && (
              <div className="flex flex-col items-center w-full">
                <h2 className="text-2xl font-raleway text-[#fc492d] mt-8 mb-2 uppercase">
                  {t('menu.category.appetizers')}
                </h2>
                <ul className="w-full max-w-2xl">
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.garlic.fries.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.garlic.fries.desc')}
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.meatballs.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40] whitespace-pre-line">
                      {t('menu.item.meatballs.desc')}
                    </div>
                  </li>
                </ul>
                <h2 className="text-2xl font-raleway text-[#fc492d] mt-8 mb-2 uppercase">
                  {t('menu.category.wings')}
                </h2>
                <ul className="w-full max-w-2xl">
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.honey.wings.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.honey.wings.desc')}
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.buffalo.wings.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.buffalo.wings.desc')}
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.bbq.wings.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.bbq.wings.desc')}
                    </div>
                  </li>
                  <li className="mb-6">
                    <div className="text-center text-xs text-[#fc492d] italic">
                      {t('menu.wings.quality')}
                    </div>
                  </li>
                </ul>
                <h2 className="text-2xl font-raleway text-[#fc492d] mt-8 mb-2 uppercase">
                  {t('menu.category.salads')}
                </h2>
                <ul className="w-full max-w-2xl">
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.house.salad.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.house.salad.desc')}
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.caesar.salad.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.caesar.salad.desc')}
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {selectedCategory === "PIZZA" && (
              <div className="flex flex-col items-center w-full">
                <h2 className="text-2xl font-raleway text-[#fc492d] mt-8 mb-2 uppercase">
                  {t('menu.category.pizza.classic')}
                </h2>
                <ul className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.ny.cheese.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.ny.cheese.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.hawaiian.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.hawaiian.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.pepperoni.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.pepperoni.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.godfather.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.godfather.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.pepperoni.mushroom.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.pepperoni.mushroom.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.ny.supreme.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.ny.supreme.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.margherita.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.margherita.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.meat.lovers.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.meat.lovers.desc')}
                    </div>
                  </li>
                </ul>
                <h2 className="text-2xl font-raleway text-[#fc492d] mt-8 mb-2 uppercase">
                  {t('menu.category.pizza.signature')}
                </h2>
                <ul className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.potato.bacon.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.potato.bacon.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.white.pie.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.white.pie.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.spicy.cheddar.chicken.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.spicy.cheddar.chicken.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.meatball.ricotta.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.meatball.ricotta.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.bbq.chicken.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.bbq.chicken.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.bmo.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.bmo.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.devils.delight.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.devils.delight.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.pesto.chicken.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.pesto.chicken.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40] relative">
                      {t('menu.item.spicy.hawaiian.ricotta.name')}
                      <span className="inline-block ml-2 px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-lg animate-pulse">NEW</span>
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.spicy.hawaiian.ricotta.desc')}
                    </div>
                  </li>
                </ul>
                <h2 className="text-2xl font-raleway text-[#fc492d] mt-8 mb-2 uppercase">
                  {t('menu.category.pizza.combos')}
                </h2>
                <ul className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.combo.1.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.combo.1.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.combo.3.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.combo.3.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.combo.2.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.combo.2.desc')}
                    </div>
                  </li>
                  <li className="mb-8">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.combo.4.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.combo.4.desc')}
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {selectedCategory === "PASTA" && (
              <>
                <h2 className="text-2xl font-raleway text-[#fc492d] mt-8 mb-2 uppercase">
                  {t('menu.category.pasta.main')}
                </h2>
                <ul className="w-full max-w-2xl">
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.spaghetti.meatballs.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.spaghetti.meatballs.desc')}
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.shrimp.rosso.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.shrimp.rosso.desc')}
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.chicken.carbonara.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.chicken.carbonara.desc')}
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.bolognese.diavolo.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.bolognese.diavolo.desc')}
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.rigatoni.arribiata.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.rigatoni.arribiata.desc')}
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.creamy.pesto.shrimp.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.creamy.pesto.shrimp.desc')}
                    </div>
                  </li>
                </ul>
                <h2 className="text-2xl font-raleway text-[#fc492d] mt-8 mb-2 uppercase">
                  {t('menu.category.pasta.baked')}
                </h2>
                <ul className="w-full max-w-2xl">
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.baked.ziti.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.baked.ziti.desc')}
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.item.baked.spinach.chicken.name')}
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.baked.spinach.chicken.desc')}
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40] relative">
                      {t('menu.item.rigatoni.lasagna.name')}
                      <span className="inline-block ml-2 px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-lg animate-pulse">NEW</span>
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.item.rigatoni.lasagna.desc')}
                    </div>
                  </li>
                </ul>
              </>
            )}
            {selectedCategory === "DRINKS" && (
              <>
                <h2 className="text-2xl font-raleway text-[#fc492d] mt-8 mb-2 uppercase">
                  {t('menu.category.drinks.beer')}
                </h2>
                <div className="w-full max-w-4xl mb-8">
                  {/* 맥주 종류별 설명 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-[#f7eee1] p-4 rounded-lg">
                      <h3 className="text-lg font-black text-[#fc492d] mb-2">{t('menu.beer.lager.title')}</h3>
                      <p className="text-sm text-[#634d40]">
                        {t('menu.beer.lager.desc')}
                      </p>
                    </div>
                    <div className="bg-[#f7eee1] p-4 rounded-lg">
                      <h3 className="text-lg font-black text-[#fc492d] mb-2">{t('menu.beer.wheat.title')}</h3>
                      <p className="text-sm text-[#634d40]">
                        {t('menu.beer.wheat.desc')}
                      </p>
                    </div>
                    <div className="bg-[#f7eee1] p-4 rounded-lg">
                      <h3 className="text-lg font-black text-[#fc492d] mb-2">{t('menu.beer.ipa.title')}</h3>
                      <p className="text-sm text-[#634d40]">
                        {t('menu.beer.ipa.desc')}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-[#f7eee1] p-4 rounded-lg">
                      <h3 className="text-lg font-black text-[#fc492d] mb-2">{t('menu.beer.ale.title')}</h3>
                      <p className="text-sm text-[#634d40]">
                        {t('menu.beer.ale.desc')}
                      </p>
                    </div>
                    <div className="bg-[#f7eee1] p-4 rounded-lg">
                      <h3 className="text-lg font-black text-[#fc492d] mb-2">{t('menu.beer.stout.title')}</h3>
                      <p className="text-sm text-[#634d40]">
                        {t('menu.beer.stout.desc')}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* 맥주 메뉴 */}
                <ul className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  <li className="mb-6">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.beer.budweiser.name')} <span className="text-xs bg-[#8B4513] text-white px-2 py-1 rounded">LAGER</span>
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.beer.budweiser.desc')}
                    </div>
                  </li>
                  <li className="mb-6">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      <span className="text-xs text-[#fc492d]">{t('menu.limited')}</span> {t('menu.beer.magpie.kolsh.name')} <span className="text-xs bg-[#8B4513] text-white px-2 py-1 rounded">LAGER</span>
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.beer.magpie.kolsh.desc')}
                    </div>
                  </li>
                  <li className="mb-6">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.beer.stella.name')} <span className="text-xs bg-[#90EE90] text-black px-2 py-1 rounded">PILSNER</span>
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.beer.stella.desc')}
                    </div>
                  </li>
                  <li className="mb-6">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      <span className="text-xs text-[#fc492d]">{t('menu.limited')}</span> {t('menu.beer.apricot.wheat.name')} <span className="text-xs bg-[#DEB887] text-black px-2 py-1 rounded">WHEAT</span>
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.beer.apricot.wheat.desc')}
                    </div>
                  </li>
                  <li className="mb-6">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      <span className="text-xs text-[#fc492d]">{t('menu.limited')}</span> {t('menu.beer.raspberry.wheat.name')} <span className="text-xs bg-[#DEB887] text-black px-2 py-1 rounded">WHEAT</span>
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.beer.raspberry.wheat.desc')}
                    </div>
                  </li>
                  <li className="mb-6">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      <span className="text-xs text-[#fc492d]">{t('menu.limited')}</span> {t('menu.beer.weihenstephaner.name')} <span className="text-xs bg-[#DEB887] text-black px-2 py-1 rounded">WHEAT</span>
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.beer.weihenstephaner.desc')}
                    </div>
                  </li>
                  <li className="mb-6">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      <span className="text-xs text-[#fc492d]">{t('menu.limited')}</span> {t('menu.beer.gorilla.ipa.name')} <span className="text-xs bg-[#228B22] text-white px-2 py-1 rounded">IPA</span>
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.beer.gorilla.ipa.desc')}
                    </div>
                  </li>
                  <li className="mb-6">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      <span className="text-xs text-[#fc492d]">{t('menu.limited')}</span> {t('menu.beer.indica.ipa.name')} <span className="text-xs bg-[#228B22] text-white px-2 py-1 rounded">IPA</span>
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.beer.indica.ipa.desc')}
                    </div>
                  </li>
                  <li className="mb-6">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      <span className="text-xs text-[#fc492d]">{t('menu.limited')}</span> {t('menu.beer.magpie.pale.ale.name')} <span className="text-xs bg-[#CD853F] text-white px-2 py-1 rounded">ALE</span>
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.beer.magpie.pale.ale.desc')}
                    </div>
                  </li>
                  <li className="mb-6">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      <span className="text-xs text-[#fc492d]">{t('menu.limited')}</span> {t('menu.beer.peanut.butter.name')} <span className="text-xs bg-[#2F4F4F] text-white px-2 py-1 rounded">STOUT</span>
                    </div>
                    <div className="text-sm text-center text-[#634d40]">
                      {t('menu.beer.peanut.butter.desc')}
                    </div>
                  </li>
                </ul>

                <h2 className="text-2xl font-raleway text-[#fc492d] mt-12 mb-6 uppercase">
                  {t('menu.category.drinks.soft')}
                </h2>
                <ul className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.drinks.coke.name')}
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.drinks.pellegrino.lemon.name')}
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.drinks.orange.juice.name')}
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.drinks.pellegrino.bottle.name')}
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.drinks.arizona.tea.name')}
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">
                      {t('menu.drinks.pink.lemonade.name')}
                    </div>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
      <div style={{ height: "100px" }} aria-hidden="true" />
    </div>
  );
}
