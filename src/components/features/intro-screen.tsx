"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function IntroScreen({ duration = 3000, children }: { duration?: number; children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <div className="fixed inset-0 z-50 flex overflow-hidden" style={{ perspective: "1500px" }}>
            {/* Left panel */}
            <motion.div
              key="left-panel"
              initial={{ x: 0, rotateY: 0 }}
              exit={{ x: "-100%", rotateY: -8 }}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
              style={{ transformOrigin: "left center" }}
              className="relative w-1/2 h-full bg-gradient-to-br from-bg to-bg-alt shadow-brand"
            >
              <div className="absolute inset-4 border border-border" />
              <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-gold" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-gold" />
            </motion.div>

            {/* Right panel */}
            <motion.div
              key="right-panel"
              initial={{ x: 0, rotateY: 0 }}
              exit={{ x: "100%", rotateY: 8 }}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
              style={{ transformOrigin: "right center" }}
              className="relative w-1/2 h-full bg-gradient-to-bl from-bg to-bg-alt shadow-brand"
            >
              <div className="absolute inset-4 border border-border" />
              <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-gold" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-gold" />
            </motion.div>

            {/* Seam */}
            <motion.div
              key="seam"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gold"
            />

            {/* Static content */}
            <motion.div
              key="content"
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none"
            >
              <span className="text-gold text-xl tracking-[0.3em]">◇</span>
              <h1 className="font-script text-fg text-5xl md:text-6xl">Y & H</h1>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
