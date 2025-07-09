"use client"
import { useEffect, useState, useCallback } from "react"
import Link from "next/link"

import { motion, useAnimation, useScroll } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel"
import HeroBanner from "@/components/HeroBanner"
import MenuFadeSlider from "@/components/MenuFadeSlider"
import { useLanguage } from "@/contexts/LanguageContext"
import { parseMarkdown } from "@/lib/utils"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [isUserInteracting, setIsUserInteracting] = useState(false)

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Scroll progress indicator
  const progressBar: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "#f75b3b",
    transformOrigin: "0%",
    zIndex: 50,
  }

  // Auto-slide functionality for carousel
  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })

    // Auto-slide every 6 seconds, but pause when user is interacting
    const autoSlide = setInterval(() => {
      if (!isUserInteracting) {
        if (api.canScrollNext()) {
          api.scrollNext()
        } else {
          api.scrollTo(0) // Go back to first slide when reaching the end
        }
      }
    }, 6000)

    return () => {
      clearInterval(autoSlide)
    }
  }, [api, isUserInteracting])

  // Reset user interaction flag after a delay
  useEffect(() => {
    if (isUserInteracting) {
      const resetTimer = setTimeout(() => {
        setIsUserInteracting(false)
      }, 10000) // Resume auto-slide after 10 seconds of no interaction

      return () => clearTimeout(resetTimer)
    }
  }, [isUserInteracting])

  // Section animations with intersection observer
  const AnimatedSection = ({ children, className, delay = 0 }: {children: React.ReactNode, className?: string, delay?: number}) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    })

    useEffect(() => {
      if (inView) {
        controls.start("visible")
      }
    }, [controls, inView])

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay,
            },
          },
        }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen font-sans" style={{ overflowX: 'hidden' }}>
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{
          ...progressBar,
          scaleX: scrollYProgress,
        }}
      />

      {/* Hero Section - Full width image slider */}
      <section className="py-0 px-0 relative w-full overflow-hidden" id="home" style={{ marginTop: '-2px' }}>
        <div className="grid grid-cols-1 gap-0 h-[60vh] min-h-[400px] sm:h-[70vh] sm:min-h-[500px] md:h-[75vh] md:min-h-[600px] lg:h-[85vh] lg:min-h-[650px] items-stretch">
          {/* Full width image slider */}
          <HeroBanner />
        </div>
        {/* 슬라이드 아래에 항상 보이는 빨간 라인 */}
        <div className="w-full h-8 bg-[#fd735a]" />
      </section>

      {/* Menu Section */}
      <section className="container mx-auto py-16 px-4" id="menu">
        <div className="relative w-full flex justify-center mb-8" style={{ background: 'transparent' }}>
          <img
            src="/chef_running.png"
            alt="Paulie's Pizza Chef"
            className="object-contain"
            style={{ width: '200px', height: 'auto', background: 'transparent' }}
          />
        </div>

        <AnimatedSection className="mt-8">
          <h2 className="text-4xl font-raleway text-center mb-12 text-[#634d40]">{t('main.menu.title')}</h2>
        </AnimatedSection>

        {/* Menu Image Fade Slider */}
        <MenuFadeSlider />

        <div className="w-full max-w-6xl mx-auto">
          <Carousel 
            className="w-full" 
            opts={{ loop: true }}
            setApi={setApi}
          >


          {/* Auto-slide indicator */}
          <div className="flex items-center justify-center gap-1 mb-6">
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current - 1 ? 'bg-[#634d40]' : 'bg-[#634d40]/30'
                }`}
              />
            ))}
          </div>

          <CarouselContent>
            {/* Page 1: Appetizers & Salads */}
            <CarouselItem className="basis-full">
              <div className="grid md:grid-cols-2 gap-8 p-8 border border-[#ff6b6b]/20 rounded-lg">
                <div className="menu-column">
                  <h3 className="text-lg font-handwriting mb-6 text-left text-[#634d40] underline">APPETIZERS</h3>
                  <div className="space-y-4">
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.garlic.fries.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.meatballs.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.honey.wings.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.buffalo.wings.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.bbq.wings.name')}</h4>
                    </div>
                  </div>
                </div>
                <div className="menu-column">
                  <h3 className="text-lg font-handwriting mb-6 text-left text-[#634d40] underline">SALADS</h3>
                  <div className="space-y-4">
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.house.salad.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.caesar.salad.name')}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Page 2: Classic Pizzas */}
            <CarouselItem className="basis-full">
              <div className="p-8 border border-[#ff6b6b]/20 rounded-lg">
                <h3 className="text-2xl font-black mb-8 text-center text-[#634d40] tracking-wide">CLASSIC PIZZAS</h3>
                
                <div className="max-w-2xl mx-auto">
                  <div className="space-y-4 flex flex-col">
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.ny.cheese.name')}</h4>
                    </div>
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.pepperoni.name')}</h4>
                    </div>
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.pepperoni.mushroom.name')}</h4>
                    </div>
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.margherita.name')}</h4>
                    </div>
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.hawaiian.name')}</h4>
                    </div>
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.godfather.name')}</h4>
                    </div>
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.ny.supreme.name')}</h4>
                    </div>
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.meat.lovers.name')}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Page 3: Signature Pizzas */}
            <CarouselItem className="basis-full">
              <div className="p-8 border border-[#ff6b6b]/20 rounded-lg">
                <h3 className="text-2xl font-black mb-8 text-center text-[#634d40] tracking-wide">SIGNATURE PIZZAS</h3>
                
                <div className="max-w-2xl mx-auto">
                  <div className="space-y-4 flex flex-col">
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.potato.bacon.name')}</h4>
                    </div>
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.spicy.cheddar.chicken.name')}</h4>
                    </div>
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.bbq.chicken.name')}</h4>
                    </div>
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.devils.delight.name')}</h4>
                    </div>
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.spicy.hawaiian.ricotta.name')}</h4>
                    </div>
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.white.pie.name')}</h4>
                    </div>
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.meatball.ricotta.name')}</h4>
                    </div>
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.bmo.name')}</h4>
                    </div>
                    <div className="menu-item py-2">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.pesto.chicken.name')}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Page 4: Pasta */}
            <CarouselItem className="basis-full">
              <div className="grid md:grid-cols-2 gap-8 p-8 border border-[#ff6b6b]/20 rounded-lg">
                <div className="menu-column">
                  <h3 className="text-lg font-handwriting mb-6 text-left text-[#634d40] underline">PASTA</h3>
                  <div className="space-y-4">
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.spaghetti.meatballs.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.shrimp.rosso.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.chicken.carbonara.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.bolognese.diavolo.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.rigatoni.arribiata.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.creamy.pesto.shrimp.name')}</h4>
                    </div>
                  </div>
                </div>
                <div className="menu-column">
                  <h3 className="text-lg font-handwriting mb-6 text-left text-[#634d40] underline">BAKED PASTA</h3>
                  <div className="space-y-4">
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.baked.ziti.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.item.baked.spinach.chicken.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40] flex items-center gap-2">
                        {t('menu.item.rigatoni.lasagna.name')}
                        <span className="inline-flex items-center w-2 h-2 bg-[#ff6b6b] rounded-full shadow-sm">
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Page 5: Drinks */}
            <CarouselItem className="basis-full">
              <div className="p-8 border border-[#ff6b6b]/20 rounded-lg">
                <h3 className="text-lg font-handwriting mb-6 text-left text-[#634d40] underline">DRINKS</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.beer.budweiser.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.beer.stella.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.beer.magpie.kolsh.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.beer.apricot.wheat.name')}</h4>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.drinks.coke.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.drinks.pellegrino.lemon.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.drinks.orange.juice.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.drinks.pellegrino.bottle.name')}</h4>
                    </div>
                    <div className="menu-item">
                      <h4 className="font-medium text-[#634d40]">{t('menu.drinks.arizona.tea.name')}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        </div>
        <div className="w-screen my-8 flex justify-center items-center" style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
          <img
            src="/tape_.png"
            alt="Tape Divider"
            className="block w-screen h-auto mt-[40px]"
            style={{ maxWidth: '100vw', height: 'auto' }}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 px-0 mt-20 relative overflow-hidden" id="about">
        {/* 밝은 베이지 배경 레이어 */}
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(245,240,230,0.92)' }} />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <AnimatedSection className="mt-8">
            <h2 className="text-4xl font-raleway text-center mb-12 text-[#634d40]">{t('main.about.title')}</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection className="space-y-4">
              <p className="mb-4">
                {t('main.about.description1')}
              </p>
              <p>
                {t('main.about.description2')}
              </p>
            </AnimatedSection>

            <AnimatedSection className="relative h-64 md:h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <video
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/vid.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="container mx-auto py-16 px-4" id="locations">
        <AnimatedSection className="mb-12 mt-[120px]">
          <h2 className="text-4xl font-raleway text-center mb-12 text-[#634d40]">{t('main.locations.title')}</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
          {/* Location 1 */}
          <div className="flex flex-col items-center max-w-sm mx-auto w-full">
            <div className="w-full aspect-square max-w-[400px] rounded-lg overflow-hidden shadow mb-4 relative group">
              <img
                src="/location-parnas.jpg"
                alt="Parnas Mall Photo"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 z-10 group-hover:opacity-0 group-hover:invisible"
              />
              <iframe
                src="https://www.google.com/maps?q=521,+Teheran-ro,+Gangnam-gu,+Seoul,+South+Korea&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Parnas Mall Coex Samsung Map"
                className="absolute inset-0 w-full h-full z-0"
              />
            </div>
            <div className="text-lg font-bold mb-1 text-center text-[#634d40]">{t('location.parnas')}</div>
            <div className="text-xs text-[#634d40] text-center">{t('location.parnas.korean')}</div>
            <div className="text-xs text-[#634d40] text-center mt-1">{t('location.parnas.address')}</div>
          </div>

          {/* Location 2 */}
          <div className="flex flex-col items-center max-w-sm mx-auto w-full">
            <div className="w-full aspect-square max-w-[400px] rounded-lg overflow-hidden shadow mb-4 relative group">
              <img
                src="/location-paradise.jpg"
                alt="Paradise City Photo"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 z-10 group-hover:opacity-0 group-hover:invisible"
              />
              <iframe
                src="https://www.google.com/maps?q=321beon-gil+186,+Yeongjonghaeannam-ro,+Jung-gu,+Incheon,+South+Korea&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Paradise City Incheon Map"
                className="absolute inset-0 w-full h-full z-0"
              />
            </div>
            <div className="text-lg font-bold mb-1 text-center text-[#634d40]">{t('location.paradise')}</div>
            <div className="text-xs text-[#634d40] text-center">{t('location.paradise.korean')}</div>
            <div className="text-xs text-[#634d40] text-center mt-1">{t('location.paradise.address')}</div>
          </div>

          {/* Location 3 */}
          <div className="flex flex-col items-center max-w-sm mx-auto w-full sm:col-span-2 lg:col-span-1">
            <div className="w-full aspect-square max-w-[400px] rounded-lg overflow-hidden shadow mb-4 relative group">
              <img
                src="/location-dtower.jpg"
                alt="D-Tower Photo"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 z-10 group-hover:opacity-0 group-hover:invisible"
              />
              <iframe
                src="https://www.google.com/maps?q=D+Tower+Gwanghwamun&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="D-Tower Gwanghwamun Map"
                className="absolute inset-0 w-full h-full z-0"
              />
            </div>
            <div className="text-lg font-bold mb-1 text-center text-[#634d40]">{t('location.dtower')}</div>
            <div className="text-xs text-[#634d40] text-center">{t('location.dtower.korean')}</div>
            <div className="text-xs text-[#634d40] text-center mt-1">{t('location.dtower.address')}</div>
          </div>
        </div>
      </section>


    </div>
  )
}
