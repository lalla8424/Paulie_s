"use client"
import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full h-20" style={{ backgroundColor: "rgba(245, 240, 230, 0.95)", backdropFilter: "blur(8px)" }}>
      <div className="container mx-auto h-full px-4 flex justify-between items-center">
        <div className="logo h-20 flex items-center">
          <Link href="/" scroll={true} aria-label="Go to Home" className="h-full flex items-center block">
            <img
              src="/paulies_logo3.png"
              alt="PAULIE'S"
              className="h-full w-auto object-contain pr-4"
              style={{ display: 'block' }}
            />
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" scroll={false} className="text-[#fc492d] hover:text-[#634d40] transition-all duration-300 ease-out cursor-pointer font-raleway">{t('nav.home')}</Link>
            </li>
            <li>
              <Link href="/menu" scroll={false} className="text-[#fc492d] hover:text-[#634d40] transition-all duration-300 ease-out cursor-pointer font-raleway">{t('nav.menu')}</Link>
            </li>
            <li>
              <Link href="/about" scroll={false} className="text-[#fc492d] hover:text-[#634d40] transition-all duration-300 ease-out cursor-pointer font-raleway">{t('nav.about')}</Link>
            </li>
            <li>
              <Link href="/locations" scroll={false} className="text-[#fc492d] hover:text-[#634d40] transition-all duration-300 ease-out cursor-pointer font-raleway">{t('nav.locations')}</Link>
            </li>
            <li>
              <div className="text-[#fc492d] text-sm font-normal">
                <button 
                  className={`hover:text-[#634d40] transition-all duration-300 ease-out ${language === 'ko' ? 'font-bold' : ''}`}
                  onClick={() => setLanguage('ko')}
                >
                  KO
                </button>
                <span className="mx-1">/</span>
                <button 
                  className={`hover:text-[#634d40] transition-all duration-300 ease-out ${language === 'en' ? 'font-bold' : ''}`}
                  onClick={() => setLanguage('en')}
                >
                  EN
                </button>
              </div>
            </li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="#fc492d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 6H21" stroke="#fc492d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 18H21" stroke="#fc492d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="w-full h-2 bg-[#fd735a]" />
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center" style={{ backgroundColor: "#f5f0e6" }}>
          <button className="absolute top-4 right-4" onClick={() => setMobileMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="#fc492d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="#fc492d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <ul className="space-y-8 text-2xl">
            <li>
              <Link href="/" scroll={false} onClick={() => setMobileMenuOpen(false)} className="block font-bold text-[#fc492d] hover:text-[#634d40] transition-all duration-300 ease-out font-raleway">{t('nav.home')}</Link>
            </li>
            <li>
              <Link href="/menu" scroll={false} onClick={() => setMobileMenuOpen(false)} className="block font-bold text-[#fc492d] hover:text-[#634d40] transition-all duration-300 ease-out font-raleway">{t('nav.menu')}</Link>
            </li>
            <li>
              <Link href="/about" scroll={false} onClick={() => setMobileMenuOpen(false)} className="block font-bold text-[#fc492d] hover:text-[#634d40] transition-all duration-300 ease-out font-raleway">{t('nav.about')}</Link>
            </li>
            <li>
              <Link href="/locations" scroll={false} onClick={() => setMobileMenuOpen(false)} className="block font-bold text-[#fc492d] hover:text-[#634d40] transition-all duration-300 ease-out font-raleway">{t('nav.locations')}</Link>
            </li>
            <li>
              <div className="text-center">
                <div className="text-[#fc492d] text-sm font-raleway">
                  <button 
                    className={`hover:text-[#634d40] transition-all duration-300 ease-out ${language === 'ko' ? 'font-bold' : 'font-normal'}`}
                    onClick={() => setLanguage('ko')}
                  >
                    KO
                  </button>
                  <span className="mx-2 font-normal">/</span>
                  <button 
                    className={`hover:text-[#634d40] transition-all duration-300 ease-out ${language === 'en' ? 'font-bold' : 'font-normal'}`}
                    onClick={() => setLanguage('en')}
                  >
                    EN
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
} 