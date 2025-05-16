"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Instagram, Facebook, Mail, ArrowUp } from "lucide-react"
import { motion, useAnimation, useScroll } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FC } from "react"
import { useRef } from "react"
import HeroBanner from "@/components/HeroBanner"
import MenuFadeSlider from "@/components/MenuFadeSlider"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 w-full h-20"
        style={{
          backgroundColor: "rgba(245, 240, 230, 0.95)",
          backdropFilter: "blur(8px)"
        }}
      >
        <div className="container mx-auto h-full px-4 flex justify-between items-center">
          <div className="logo h-20 flex items-center">
            <img 
              src="/paulies_logo3.png" 
              alt="PAULIE'S" 
              className="h-full w-auto object-contain pr-4" 
            />
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#home"
                  className="text-[#fc492d] hover:text-[#634d40] transition-colors cursor-pointer font-raleway"
                  onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById('home');
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  HOME
                </a>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-[#fc492d] hover:text-[#634d40] transition-colors cursor-pointer font-raleway"
                >
                  MENU
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[#fc492d] hover:text-[#634d40] transition-colors cursor-pointer font-raleway"
                  onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById('about');
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="#locations"
                  className="text-[#fc492d] hover:text-[#634d40] transition-colors cursor-pointer font-raleway"
                  onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById('locations');
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  LOCATIONS
                </a>
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
      </motion.header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-md flex flex-col items-center justify-center bg-white/95">
          <button className="absolute top-4 right-4" onClick={() => setMobileMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="#fc492d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="#fc492d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <ul className="space-y-8 text-2xl">
            <li>
              <a
                href="#home"
                onClick={e => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  const el = document.getElementById('home');
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="block font-bold text-[#fc492d] hover:text-[#634d40] transition-colors"
              >
                HOME
              </a>
            </li>
            <li>
              <Link
                href="/menu"
                onClick={() => setMobileMenuOpen(false)}
                className="block font-bold text-[#fc492d] hover:text-[#634d40] transition-colors"
              >
                MENU
              </Link>
            </li>
            <li>
              <a
                href="#about"
                onClick={e => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  const el = document.getElementById('about');
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="block font-bold text-[#fc492d] hover:text-[#634d40] transition-colors"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="#locations"
                onClick={e => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  const el = document.getElementById('locations');
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="block font-bold text-[#fc492d] hover:text-[#634d40] transition-colors"
              >
                LOCATIONS
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section - Full width image slider */}
      <section className="py-0 px-0 relative w-full overflow-hidden" id="home" style={{ marginTop: '-2px' }}>
        <div className="grid grid-cols-1 gap-0 h-[85vh] min-h-[550px] md:h-[75vh] md:min-h-[600px] items-stretch">
          {/* Full width image slider */}
          <HeroBanner />
        </div>
      </section>

      {/* Menu Section */}
      <section className="container mx-auto py-16 px-4" id="menu">
        <div className="relative w-full flex justify-center mb-8">
          <img
            src="/chef.png"
            alt="Paulie's Pizza Chef"
            className="w-48 h-48 object-contain"
          />
        </div>

        <AnimatedSection className="mt-[120px]">
          <h2 className="text-4xl font-raleway text-center mb-12 text-[#634d40]">Our Menu</h2>
        </AnimatedSection>

        {/* Menu Image Fade Slider */}
        <MenuFadeSlider />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Pizza Column */}
          <AnimatedSection delay={0.1} className="menu-column">
            <h3 className="text-2xl font-handwriting mb-6">Pizza</h3>

            <motion.div initial="hidden" animate="visible" variants={staggerChildren}>
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
                  name: "Gluten-Free Crust",
                  desc: "Available for any pizza",
                  price: "+$3",
                  tag: "(GF)",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeIn} className="menu-item mb-4">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-medium">
                      {item.name} {item.tag && <span className="text-xs">{item.tag}</span>}
                    </h4>
                    <div className="border-b border-dotted border-gray-400 flex-grow mx-2"></div>
                    <span>{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>

          {/* Pasta Column */}
          <AnimatedSection delay={0.2} className="menu-column">
            <h3 className="text-2xl font-handwriting mb-6">Pasta</h3>

            <motion.div initial="hidden" animate="visible" variants={staggerChildren}>
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
                  name: "Gluten-Free Pasta",
                  desc: "Available for any pasta dish",
                  price: "+$2",
                  tag: "(GF)",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeIn} className="menu-item mb-4">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-medium">
                      {item.name} {item.tag && <span className="text-xs">{item.tag}</span>}
                    </h4>
                    <div className="border-b border-dotted border-gray-400 flex-grow mx-2"></div>
                    <span>{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>

          {/* Sides Column */}
          <AnimatedSection delay={0.3} className="menu-column">
            <h3 className="text-2xl font-handwriting mb-6">Sides & Drinks</h3>

            <motion.div initial="hidden" animate="visible" variants={staggerChildren}>
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
                  name: "Tiramisu",
                  desc: "Coffee-soaked ladyfingers, mascarpone",
                  price: "$8",
                },
                {
                  name: "Italian Soda",
                  desc: "Various flavors available",
                  price: "$4",
                },
                {
                  name: "House Wine (Glass)",
                  desc: "Red or white",
                  price: "$8",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeIn} className="menu-item mb-4">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-medium">
                      {item.name} {item.tag && <span className="text-xs">{item.tag}</span>}
                    </h4>
                    <div className="border-b border-dotted border-gray-400 flex-grow mx-2"></div>
                    <span>{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-16 px-4" id="about">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mt-[120px]">
            <h2 className="text-4xl font-raleway text-center mb-12 text-[#634d40]">Our Story</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection className="space-y-4">
              <p className="mb-4">
                Our pizza journey began in New York, where we learned the art of brick oven pizza making from the best
                in the business. We brought that authentic New York style to our neighborhood, focusing on quality
                ingredients and traditional techniques.
              </p>
              <p>
                Every pizza is hand-stretched and baked in our custom brick oven, giving it that perfect
                crispy-yet-chewy crust that New York pizza is famous for. We're not just making pizza – we're continuing
                a legacy.
              </p>
            </AnimatedSection>

            <AnimatedSection className="relative h-64 md:h-full">
              <motion.div
                initial={{ rotate: -5, scale: 0.9 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="90" stroke="black" strokeWidth="2" />
                  <path
                    d="M50 100C50 72.3858 72.3858 50 100 50C127.614 50 150 72.3858 150 100C150 127.614 127.614 150 100 150C72.3858 150 50 127.614 50 100Z"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M75 100C75 86.1929 86.1929 75 100 75C113.807 75 125 86.1929 125 100C125 113.807 113.807 125 100 125C86.1929 125 75 113.807 75 100Z"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path d="M30 100H170" stroke="black" strokeWidth="2" />
                  <path d="M100 30V170" stroke="black" strokeWidth="2" />
                </svg>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="container mx-auto py-16 px-4" id="locations">
        <AnimatedSection className="mb-12 mt-[120px]">
          <h2 className="text-4xl font-raleway text-center mb-12 text-[#634d40]">Our Locations</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1264px] mx-auto">
          {/* Location 1 */}
          <div className="flex flex-col items-center">
            <div className="w-[400px] h-[400px] rounded-lg overflow-hidden shadow mb-4 relative group">
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
            <div className="text-lg font-bold mb-1 text-center">PARNAS MALL COEX SAMSUNG</div>
            <div className="text-xs text-gray-400 text-center">삼성동 파르나스몰</div>
            <div className="text-xs text-gray-400 text-center mt-1">서울특별시 강남구 테헤란로 521, 지하1층 F13호(삼성동, 파르나스타워)</div>
          </div>

          {/* Location 2 */}
          <div className="flex flex-col items-center">
            <div className="w-[400px] h-[400px] rounded-lg overflow-hidden shadow mb-4 relative group">
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
            <div className="text-lg font-bold mb-1 text-center">PARADISE CITY INCHEON</div>
            <div className="text-xs text-gray-400 text-center">인천 파라다이스시티</div>
            <div className="text-xs text-gray-400 text-center mt-1">인천 중구 영종해안남로 321번길 186, F 204호, (운서동, 파라다이스시티)</div>
          </div>

          {/* Location 3 */}
          <div className="flex flex-col items-center">
            <div className="w-[400px] h-[400px] rounded-lg overflow-hidden shadow mb-4 relative group">
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
            <div className="text-lg font-bold mb-1 text-center">D-TOWER GWANGHWAMUN</div>
            <div className="text-xs text-gray-400 text-center">광화문 디타워</div>
            <div className="text-xs text-gray-400 text-center mt-1">서울특별시 종로구 종로3길 17, 2층 5호 (청진동, 디타워)</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 relative">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-6"
          >
            <a href="#" className="text-black hover:text-[#f75b3b] transition-colors">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-black hover:text-[#f75b3b] transition-colors">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-black hover:text-[#f75b3b] transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-gray-600"
          >
            &copy; {new Date().getFullYear()} PAULIE'S. All rights reserved.
          </motion.p>
        </div>

        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute bottom-8 right-8 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
        >
          <ArrowUp size={20} />
          <span className="sr-only">Back to top</span>
        </motion.button>
      </footer>
    </div>
  )
}