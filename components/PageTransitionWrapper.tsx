"use client"

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * @description 깜빡거림 없는 부드러운 페이지 전환을 위한 최적화된 fade 애니메이션
 * - 매우 부드러운 opacity 전환으로 자연스러운 페이지 이동
 * - 깜빡거림 방지를 위한 최적화된 duration과 easing
 */
export default function PageTransitionWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ 
          opacity: 0.8
        }}
        animate={{ 
          opacity: 1
        }}
        exit={{ 
          opacity: 0.8
        }}
        transition={{ 
          duration: 0.25,
          ease: [0.25, 0.46, 0.45, 0.94] // 매우 부드러운 easing
        }}
        className="page-transition"
        style={{ 
          minHeight: "100vh",
          willChange: "opacity",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          isolation: "isolate"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 