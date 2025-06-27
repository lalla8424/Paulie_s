"use client"

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * @description 페이지 전환 시 페이드+슬라이드(오른쪽→왼쪽) 애니메이션을 적용하는 클라이언트 컴포넌트
 */
export default function PageTransitionWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.2,
          ease: "easeInOut"
        }}
        className="page-transition"
        style={{ 
          minHeight: "100vh",
          willChange: "opacity",
          transform: "translateZ(0)"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 