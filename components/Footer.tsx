'use client';

import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-4 relative">
      <div className="container mx-auto text-center">
        {/* SOCIAL MEDIA ICONS */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mb-8"
        >
          <a href="https://www.instagram.com/paulies.pizza?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-[#634d40] hover:text-[#634d40]/70 transition-colors">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://www.facebook.com/pauliesbrickovenpizzeria/" target="_blank" rel="noopener noreferrer" className="text-[#634d40] hover:text-[#634d40]/70 transition-colors">
            <Facebook size={24} />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="mailto:maplegroup01@hanmail.net" className="text-[#634d40] hover:text-[#634d40]/70 transition-colors">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
        </motion.div>

        {/* HEAD OFFICE ADDRESS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h3 className="text-2xl font-raleway text-center mb-4 text-[#634d40] font-bold">
            {t('footer.office.title')}
          </h3>
          <p className="text-[#634d40] text-base font-medium max-w-2xl mx-auto">
            {t('footer.office.address')}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-sm text-[#634d40]"
        >
          &copy; {new Date().getFullYear()} {t('footer.copyright')}
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
  );
} 