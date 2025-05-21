"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const menuImages = [
  "/menu-1.png",
  "/menu-2.png",
  "/menu-3.png",
  "/paradise.png",
]

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

  return (
    <div className="pt-32 pb-16 px-4 min-h-screen">
      <div className="container mx-auto">
        {/* 메뉴 슬라이드 배너 */}
        <section className="w-full flex flex-col items-start justify-start py-8 relative">
          <div className="relative w-full max-w-3xl mx-0 flex items-start justify-start">
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-[#fc492d]/80 text-[#634d40] rounded-full shadow p-2 z-10"
              aria-label="Previous"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <img
              src={menuImages[current]}
              alt={`Menu Slide ${current + 1}`}
              className="w-[850px] max-w-full h-[430px] object-cover rounded-xl shadow-lg ml-8 transition-all duration-500"
            />
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-[#fc492d]/80 text-[#634d40] rounded-full shadow p-2 z-10"
              aria-label="Next"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </section>

        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-raleway text-center mb-12 text-[#634d40]"
        >
          Our Full Menu
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Pizza Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-raleway text-[#fc492d] mb-6">Pizza</h2>
            <div className="space-y-4">
              {[
                {
                  name: "Margherita",
                  desc: "Tomato sauce, mozzarella, basil",
                  price: "$16",
                },
                {
                  name: "Pepperoni",
                  desc: "Tomato sauce, mozzarella, pepperoni",
                  price: "$18",
                },
                {
                  name: "Mushroom Truffle",
                  desc: "Truffle cream, mozzarella, mushrooms",
                  price: "$20",
                  tag: "(V)",
                },
                {
                  name: "Brooklyn Special",
                  desc: "Tomato sauce, mozzarella, sausage, peppers, onions",
                  price: "$22",
                },
                {
                  name: "Quattro Formaggi",
                  desc: "Four cheese blend, herbs",
                  price: "$21",
                },
                {
                  name: "Vegetarian",
                  desc: "Tomato sauce, vegetables, mozzarella",
                  price: "$19",
                  tag: "(V)",
                },
              ].map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium">
                      {item.name} {item.tag && <span className="text-xs">{item.tag}</span>}
                    </h3>
                    <span className="text-[#fc492d]">{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pasta Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-raleway text-[#fc492d] mb-6">Pasta</h2>
            <div className="space-y-4">
              {[
                {
                  name: "Spaghetti Pomodoro",
                  desc: "Tomato sauce, basil, olive oil",
                  price: "$14",
                  tag: "(V)",
                },
                {
                  name: "Fettuccine Alfredo",
                  desc: "Cream sauce, parmesan, black pepper",
                  price: "$16",
                },
                {
                  name: "Penne Arrabbiata",
                  desc: "Spicy tomato sauce, garlic, parsley",
                  price: "$15",
                  tag: "(V)",
                },
                {
                  name: "Linguine Vongole",
                  desc: "Clams, white wine, garlic, parsley",
                  price: "$19",
                },
                {
                  name: "Rigatoni Bolognese",
                  desc: "Meat sauce, parmesan",
                  price: "$17",
                },
                {
                  name: "Gnocchi",
                  desc: "Potato dumplings, choice of sauce",
                  price: "$18",
                },
              ].map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium">
                      {item.name} {item.tag && <span className="text-xs">{item.tag}</span>}
                    </h3>
                    <span className="text-[#fc492d]">{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sides & Drinks Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-raleway text-[#fc492d] mb-6">Sides & Drinks</h2>
            <div className="space-y-4">
              {[
                {
                  name: "Garlic Knots",
                  desc: "Garlic butter, parsley, parmesan",
                  price: "$6",
                  tag: "(V)",
                },
                {
                  name: "Caesar Salad",
                  desc: "Romaine, croutons, parmesan, caesar dressing",
                  price: "$10",
                },
                {
                  name: "Caprese Salad",
                  desc: "Tomatoes, fresh mozzarella, basil",
                  price: "$12",
                  tag: "(V)",
                },
                {
                  name: "Italian Soda",
                  desc: "Various flavors available",
                  price: "$4",
                },
                {
                  name: "House Wine",
                  desc: "Red or white (Glass/Bottle)",
                  price: "$8/$32",
                },
                {
                  name: "Craft Beer",
                  desc: "Local and imported selection",
                  price: "$7",
                },
              ].map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium">
                      {item.name} {item.tag && <span className="text-xs">{item.tag}</span>}
                    </h3>
                    <span className="text-[#fc492d]">{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

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