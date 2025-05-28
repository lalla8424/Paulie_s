"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import React from "react"

const menuImages = [
  "/menu-1.png",
  "/menu-2.png",
  "/menu-3.png",
  "/paradise.png",
]

const MENU_CATEGORIES = [
  { key: 'APPETIZERS', label: 'APPETIZERS' },
  { key: 'PIZZA', label: 'BRICK OVEN PIZZA' },
  { key: 'PASTA', label: 'PASTA' },
  { key: 'DRINKS', label: 'DRINKS' },
];

export default function MenuPage() {
  const [current, setCurrent] = useState(0)
  const total = menuImages.length
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total)
  const next = () => setCurrent((prev) => (prev + 1) % total)
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // 메뉴 카테고리 상태
  const [selectedCategory, setSelectedCategory] = useState('PIZZA');

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
            src={menuImages[current]}
            alt={`Menu Slide ${current + 1}`}
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
          {menuImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2.5 h-2.5 rounded-full ${current === idx ? 'bg-[#fc492d]' : 'bg-[#634d40]/30'} transition-all`}
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
              className={`font-black text-[#634d40] text-lg md:text-xl whitespace-nowrap ${selectedCategory === cat.key ? 'text-[#fc492d]' : ''}`}
              onClick={() => setSelectedCategory(cat.key)}
            >
              {cat.label}
            </button>
            {idx < MENU_CATEGORIES.length - 1 && (
              <span className="text-[#634d40] shrink-0 hidden md:inline">|</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center w-full">
            {selectedCategory === 'APPETIZERS' && (
              <div className="flex flex-col items-center w-full">
                <h2 className="text-2xl font-raleway text-[#fc492d] mt-8 mb-2 uppercase">APPETIZERS</h2>
                <ul className="w-full max-w-2xl">
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">Garlic Cheese Fries</div>
                    <div className="text-sm text-center text-[#634d40]">향긋한 마늘향이 입안을 감도는 감자튀김</div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">Buffalo Hot Wings🌶️ (6pcs/10pcs)</div>
                    <div className="text-sm text-center text-[#634d40]">버팔로 소스를 입혀 매콤상큼한 타바스코 향을 느낄 수 있는 치킨윙</div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">Sweet Honey Hot Wings🌶️ (6pcs/10pcs)</div>
                    <div className="text-sm text-center text-[#634d40]">매콤한 버팔로 소스와 달콤한 꿀을 입힌 치킨윙</div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">Paulie's BBQ Wings (6pcs/10pcs)</div>
                    <div className="text-sm text-center text-[#634d40]">바비큐 소스로 맛을 낸 치킨윙</div>
                  </li>
                  <li className="mb-4">
                    <div className="text-lg font-black text-center text-[#634d40]">Paulie's Meatballs</div>
                    <div className="text-sm text-center text-[#634d40]">폴리스 오리지널 레시피로 만든 미트볼 (치즈 옵션 가능)</div>
                  </li>
                </ul>
                <h2 className="text-2xl font-raleway text-[#fc492d] mt-8 mb-2 uppercase">SALADS</h2>
                <ul className="w-full max-w-2xl">
                  <li className="mb-2 text-center text-[#634d40] font-black">Paulie's House Salad (Ranch or Balsamic)</li>
                  <li className="mb-2 text-center text-[#634d40] font-black">Chicken Caesar Salad</li>
                  <li className="mb-2 text-center text-[#634d40] font-black">Pesto Pasta Salad</li>
                </ul>
              </div>
            )}
            {selectedCategory === 'PIZZA' && (
              <>
                <h2 className="text-2xl font-raleway text-[#fc492d] mt-8 mb-2 uppercase">Pizza</h2>
                <ul className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  {[
                    { name: "Margherita", desc: "Tomato sauce, mozzarella, basil" },
                    { name: "Pepperoni", desc: "Tomato sauce, mozzarella, pepperoni" },
                    { name: "Mushroom Truffle", desc: "Truffle cream, mozzarella, mushrooms", tag: "(V)" },
                    { name: "Brooklyn Special", desc: "Tomato sauce, mozzarella, sausage, peppers, onions" },
                    { name: "Quattro Formaggi", desc: "Four cheese blend, herbs" },
                    { name: "Vegetarian", desc: "Tomato sauce, vegetables, mozzarella", tag: "(V)" },
                  ].map((item, index) => (
                    <li key={index} className="mb-8">
                      <div className="text-lg font-black text-center text-[#634d40]">{item.name} {item.tag && <span className="text-xs">{item.tag}</span>}</div>
                      <div className="text-sm text-center text-[#634d40]">{item.desc}</div>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {selectedCategory === 'PASTA' && (
              <>
                <h2 className="text-2xl font-raleway text-[#fc492d] mt-8 mb-2 uppercase">Pasta</h2>
                <ul className="w-full max-w-2xl">
                  {[
                    { name: "Spaghetti Pomodoro", desc: "Tomato sauce, basil, olive oil", tag: "(V)" },
                    { name: "Fettuccine Alfredo", desc: "Cream sauce, parmesan, black pepper" },
                    { name: "Penne Arrabbiata", desc: "Spicy tomato sauce, garlic, parsley", tag: "(V)" },
                    { name: "Linguine Vongole", desc: "Clams, white wine, garlic, parsley" },
                    { name: "Rigatoni Bolognese", desc: "Meat sauce, parmesan" },
                    { name: "Gnocchi", desc: "Potato dumplings, choice of sauce" },
                  ].map((item, index) => (
                    <li key={index} className="mb-4">
                      <div className="text-lg font-black text-center text-[#634d40]">{item.name} {item.tag && <span className="text-xs">{item.tag}</span>}</div>
                      <div className="text-sm text-center text-[#634d40]">{item.desc}</div>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {selectedCategory === 'DRINKS' && (
              <>
                <h2 className="text-2xl font-raleway text-[#fc492d] mt-8 mb-2 uppercase">Sides & Drinks</h2>
                <ul className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  {[
                    { name: "Garlic Knots", desc: "Garlic butter, parsley, parmesan", tag: "(V)" },
                    { name: "Caesar Salad", desc: "Romaine, croutons, parmesan, caesar dressing" },
                    { name: "Caprese Salad", desc: "Tomatoes, fresh mozzarella, basil", tag: "(V)" },
                    { name: "Italian Soda", desc: "Various flavors available" },
                    { name: "House Wine", desc: "Red or white (Glass/Bottle)" },
                    { name: "Craft Beer", desc: "Local and imported selection" },
                  ].map((item, index) => (
                    <li key={index} className="mb-8">
                      <div className="text-lg font-black text-center text-[#634d40]">{item.name} {item.tag && <span className="text-xs">{item.tag}</span>}</div>
                      <div className="text-sm text-center text-[#634d40]">{item.desc}</div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
      <div style={{height: '100px'}} aria-hidden="true" />
    </div>
  )
} 