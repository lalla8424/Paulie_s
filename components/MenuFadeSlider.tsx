"use client"
import { useEffect, useState } from "react"

const MenuFadeSlider = () => {
  const [menuFadeIndex, setMenuFadeIndex] = useState(0)
  useEffect(() => {
    const fadeTimer = setInterval(() => {
      setMenuFadeIndex((prev) => (prev + 1) % 3)
    }, 6000)
    return () => clearInterval(fadeTimer)
  }, [])
  return (
    <div className="relative w-full mx-auto h-64 min-h-[160px] mb-12 flex items-center justify-center">
      {["menu-1.png", "menu-2.png", "menu-3.png"].map((img, idx) => (
        <img
          key={img}
          src={`/${img}`}
          alt={`Menu ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover rounded-xl shadow transition-opacity duration-1000 ${menuFadeIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          style={{ transitionProperty: "opacity" }}
        />
      ))}
    </div>
  )
}

export default MenuFadeSlider; 