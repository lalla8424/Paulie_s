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
        <div className="relative w-full flex justify-center mb-8" style={{ background: 'transparent' }}>
          <img
            src="/chef_complex.png"
            alt="Paulie's Pizza Chef"
            className="object-contain"
            style={{ width: '450px', height: 'auto', mixBlendMode: 'multiply' }}
          />
        </div>

        <AnimatedSection className="mt-8">
          <h2 className="text-4xl font-raleway text-center mb-12 text-[#634d40]">Our Menu</h2>
        </AnimatedSection>

        {/* Menu Image Fade Slider */}
        <MenuFadeSlider />

        <Carousel className="w-full max-w-6xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {/* Page 1: Original Menu */}
            <CarouselItem className="basis-full">
              <div className="grid md:grid-cols-2 gap-8 p-8 border border-[#ff6b6b]/20 rounded-lg">
                <div className="menu-column">
                  <h3 className="text-2xl font-handwriting mb-6">Pizza Classics</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Margherita", desc: "Tomato sauce, mozzarella, basil", price: "$16" },
                      { name: "Pepperoni", desc: "Tomato sauce, mozzarella, pepperoni", price: "$18" },
                      { name: "Quattro Formaggi", desc: "Mozzarella, gorgonzola, parmesan, fontina", price: "$20" },
                      { name: "Marinara", desc: "Tomato sauce, garlic, oregano (no cheese)", price: "$14" },
                      { name: "Napoletana", desc: "Tomato sauce, mozzarella, anchovies, capers", price: "$19" },
                      { name: "Capricciosa", desc: "Tomato sauce, mozzarella, mushrooms, ham, olives", price: "$21" },
                    ].map((item, index) => (
                      <div key={index} className="menu-item">
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-medium">{item.name}</h4>
                          <div className="border-b border-dotted border-gray-400 flex-grow mx-1"></div>
                          <span className="ml-1">{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="menu-column">
                  <h3 className="text-2xl font-handwriting mb-6">Specialty Pizzas</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Truffle Mushroom", desc: "Truffle oil, wild mushrooms, mozzarella", price: "$24" },
                      { name: "Prosciutto & Arugula", desc: "Prosciutto, fresh arugula, parmesan", price: "$22" },
                      { name: "Seafood Special", desc: "Shrimp, calamari, mussels, garlic", price: "$26" },
                      { name: "Buffalo", desc: "Buffalo mozzarella, cherry tomatoes, basil", price: "$23" },
                      { name: "Calabrese", desc: "Spicy nduja, red onions, mozzarella", price: "$21" },
                      { name: "Mediterranean", desc: "Feta, olives, sun-dried tomatoes, oregano", price: "$20" },
                    ].map((item, index) => (
                      <div key={index} className="menu-item">
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-medium">{item.name}</h4>
                          <div className="border-b border-dotted border-gray-400 flex-grow mx-1"></div>
                          <span className="ml-1">{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Page 2: Pasta & Appetizers */}
            <CarouselItem className="basis-full">
              <div className="grid md:grid-cols-2 gap-8 p-8 border border-[#ff6b6b]/20 rounded-lg">
                <div className="menu-column">
                  <h3 className="text-2xl font-handwriting mb-6">Fresh Pasta</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Spaghetti Carbonara", desc: "Pancetta, egg, pecorino, black pepper", price: "$18" },
                      { name: "Rigatoni Vodka", desc: "Vodka sauce, cream, parmesan", price: "$17" },
                      { name: "Lobster Ravioli", desc: "Lobster filling, butter sage sauce", price: "$25" },
                      { name: "Fettuccine Alfredo", desc: "Cream sauce, parmesan, butter", price: "$16" },
                      { name: "Penne Arrabbiata", desc: "Spicy tomato sauce, garlic, parsley", price: "$15" },
                      { name: "Linguine Vongole", desc: "Clams, white wine, garlic, parsley", price: "$22" },
                    ].map((item, index) => (
                      <div key={index} className="menu-item">
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-medium">{item.name}</h4>
                          <div className="border-b border-dotted border-gray-400 flex-grow mx-1"></div>
                          <span className="ml-1">{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="menu-column">
                  <h3 className="text-2xl font-handwriting mb-6">Appetizers</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Bruschetta", desc: "Tomatoes, basil, garlic, olive oil", price: "$8" },
                      { name: "Calamari Fritti", desc: "Fried calamari, marinara sauce", price: "$12" },
                      { name: "Antipasto Misto", desc: "Selection of Italian meats and cheeses", price: "$16" },
                      { name: "Caprese Salad", desc: "Fresh mozzarella, tomatoes, basil", price: "$10" },
                      { name: "Garlic Knots", desc: "Garlic butter, parsley, parmesan", price: "$7" },
                      { name: "Meatballs", desc: "House-made meatballs in tomato sauce", price: "$11" },
                    ].map((item, index) => (
                      <div key={index} className="menu-item">
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-medium">{item.name}</h4>
                          <div className="border-b border-dotted border-gray-400 flex-grow mx-1"></div>
                          <span className="ml-1">{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Page 3: Desserts & Drinks */}
            <CarouselItem className="basis-full">
              <div className="grid md:grid-cols-2 gap-8 p-8 border border-[#ff6b6b]/20 rounded-lg">
                <div className="menu-column">
                  <h3 className="text-2xl font-handwriting mb-6">Desserts</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Tiramisu", desc: "Coffee-soaked ladyfingers, mascarpone", price: "$8" },
                      { name: "Cannoli", desc: "Sweet ricotta filling, pistachios", price: "$7" },
                      { name: "Panna Cotta", desc: "Vanilla cream with berry compote", price: "$7" },
                      { name: "Gelato", desc: "Selection of Italian ice creams", price: "$6" },
                      { name: "Affogato", desc: "Vanilla gelato, espresso shot", price: "$6" },
                      { name: "Chocolate Torta", desc: "Rich chocolate cake, whipped cream", price: "$8" },
                    ].map((item, index) => (
                      <div key={index} className="menu-item">
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-medium">{item.name}</h4>
                          <div className="border-b border-dotted border-gray-400 flex-grow mx-1"></div>
                          <span className="ml-1">{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="menu-column">
                  <h3 className="text-2xl font-handwriting mb-6">Drinks</h3>
                  <div className="space-y-4">
                    {[
                      { name: "House Red Wine", desc: "Glass / Bottle", price: "$8 / $32" },
                      { name: "House White Wine", desc: "Glass / Bottle", price: "$8 / $32" },
                      { name: "Italian Craft Beer", desc: "Selection of Italian beers", price: "$7" },
                      { name: "Espresso", desc: "Single / Double", price: "$3 / $4" },
                      { name: "Cappuccino", desc: "Traditional Italian style", price: "$4" },
                      { name: "Italian Soda", desc: "Various flavors available", price: "$4" },
                    ].map((item, index) => (
                      <div key={index} className="menu-item">
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-medium">{item.name}</h4>
                          <div className="border-b border-dotted border-gray-400 flex-grow mx-1"></div>
                          <span className="ml-1">{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 mt-4">
            <CarouselPrevious className="static relative translate-y-0 bg-[#634d40]/20 hover:bg-[#634d40]/40 border-[#634d40]/20 text-[#634d40]" />
            <CarouselNext className="static relative translate-y-0 bg-[#634d40]/20 hover:bg-[#634d40]/40 border-[#634d40]/20 text-[#634d40]" />
          </div>
        </Carousel>
        <div className="w-full flex justify-center my-8">
          <img src="/tape.png" alt="Tape Divider" className="w-full h-auto object-contain" />
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-16 px-4" id="about">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="mt-8">
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
            <div className="text-lg font-bold mb-1 text-center text-[#634d40]">PARNAS MALL COEX SAMSUNG</div>
            <div className="text-xs text-[#634d40] text-center">삼성동 파르나스몰</div>
            <div className="text-xs text-[#634d40] text-center mt-1">서울특별시 강남구 테헤란로 521, 지하1층 F13호(삼성동, 파르나스타워)</div>
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
            <div className="text-lg font-bold mb-1 text-center text-[#634d40]">PARADISE CITY INCHEON</div>
            <div className="text-xs text-[#634d40] text-center">인천 파라다이스시티</div>
            <div className="text-xs text-[#634d40] text-center mt-1">인천 중구 영종해안남로 321번길 186, F 204호, (운서동, 파라다이스시티)</div>
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
            <div className="text-lg font-bold mb-1 text-center text-[#634d40]">D-TOWER GWANGHWAMUN</div>
            <div className="text-xs text-[#634d40] text-center">광화문 디타워</div>
            <div className="text-xs text-[#634d40] text-center mt-1">서울특별시 종로구 종로3길 17, 2층 5호 (청진동, 디타워)</div>
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
