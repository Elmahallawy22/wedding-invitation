"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type IntroScreenProps = {
  children: React.ReactNode;
  onOpen?: () => Promise<void> | void;
};

export default function IntroScreen({ children, onOpen }: IntroScreenProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
  if (!showIntro) return;

  const previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = previousOverflow;
  };
}, [showIntro]);

  const handleEnter = async () => {
    if (isOpening) return;
    setIsOpening(true);

    if (onOpen) {
      await onOpen();
    }
    // Delay the hiding of the intro screen to allow the animation to complete
    setTimeout(() => setShowIntro(false), 1300);
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
              <div className="absolute inset-4 border border-text" />

              <div className="absolute left-6 top-6 h-8 w-8 border-l border-t border-text" />

              <div className="absolute bottom-6 left-6 h-8 w-8 border-b border-l border-text" />
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
              <div className="absolute inset-4 border border-text" />

              <div className="absolute right-6 top-6 h-8 w-8 border-r border-t border-text" />

              <div className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-text" />
            </motion.div>

            {/* Seam */}
            <motion.div
              key="seam"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-text"
            />

            {/* Content */}
            <motion.div
              key="content"
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-none absolute inset-0 flex flex-col items-center justify-between"
            >
              {/* button for opening */}
              <motion.button
                key="seal"
                type="button"
                onClick={handleEnter}
                aria-label="Click To Open"
                initial={{ scale: 1, rotate: 0, opacity: 1 }}
                animate={isOpening ? { scale: 0.55, rotate: 30, opacity: 0, y: -15 } : { scale: [1, 1.1, 1] }}
                transition={isOpening ? { duration: 1, ease: "easeIn" } : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                className="pointer-events-auto group absolute left-1/2 top-[48%] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full md:h-28 md:w-28 text-3xl text-bg font-extrabold font-italic"
                style={{
                  background: "radial-gradient(circle at 32% 28%, var(--color-fg), var(--color-text) 72%)",
                  borderRadius: "47% 53% 51% 49% / 48% 52% 48% 52%",
                  boxShadow:
                    "0 12px 24px -8px rgba(122,23,35,0.45), inset 0 2px 5px rgba(255,255,255,0.45), inset 0 -4px 8px rgba(0,0,0,0.25)",
                }}
              >
                Y & H
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
