"use client";

import {  useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type IntroScreenProps = {
  children: React.ReactNode;
  onOpen?: () => Promise<void> | void;
};

export default function IntroScreen({ children, onOpen }: IntroScreenProps) {
  const [showIntro, setShowIntro] = useState(true);

  const handleEnter = async () => {
    // Start music first
    if (onOpen) {
      await onOpen();
    }

    // Then close intro
    setShowIntro(false);
  };

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
              transition={{
                duration: 1.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{ transformOrigin: "left center" }}
              className="relative h-full w-1/2 bg-gradient-to-br from-bg to-bg-alt shadow-brand"
            >
              <div className="absolute inset-4 border border-border" />

              <div className="absolute left-6 top-6 h-8 w-8 border-l border-t border-gold" />

              <div className="absolute bottom-6 left-6 h-8 w-8 border-b border-l border-gold" />
            </motion.div>

            {/* Right panel */}
            <motion.div
              key="right-panel"
              initial={{ x: 0, rotateY: 0 }}
              exit={{ x: "100%", rotateY: 8 }}
              transition={{
                duration: 1.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{ transformOrigin: "right center" }}
              className="relative h-full w-1/2 bg-gradient-to-bl from-bg to-bg-alt shadow-brand"
            >
              <div className="absolute inset-4 border border-border" />

              <div className="absolute right-6 top-6 h-8 w-8 border-r border-t border-gold" />

              <div className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-gold" />
            </motion.div>

            {/* Seam */}
            <motion.div
              key="seam"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gold"
            />

            {/* Content */}
            <motion.div
              key="content"
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-none absolute inset-0 flex flex-col items-center justify-between"
            >
              <div className="bg-amber-600" />

              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-gold">◇</span>

                <h1 className="font-script text-5xl text-fg md:text-6xl">Y & H</h1>
              </div>

              {/* Enter Button */}
              <button
                onClick={handleEnter}
                className="pointer-events-auto mb-12 cursor-pointer font-italic text-2xl font-extrabold uppercase text-fg transition-all duration-300 animate-bounce md:mb-24"
              >
                Click To Open
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
