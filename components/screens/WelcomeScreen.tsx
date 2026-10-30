"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, Sparkles } from "lucide-react";
import { CoquetteBow } from "../icons/CoquetteBow";

interface WelcomeScreenProps {
  onContinue: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onContinue }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenSurprise = () => {
    setIsOpening(true);

    // Trigger gentle pink heart confetti explosion
    const end = Date.now() + 1000;
    const colors = ["#F8BBD0", "#EFA6BF", "#C75B82", "#FFF8F5", "#FCE4EC"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0.2, y: 0.65 },
        colors,
        shapes: ["circle"],
        scalar: 1.2,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 0.8, y: 0.65 },
        colors,
        shapes: ["circle"],
        scalar: 1.2,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    setTimeout(() => {
      onContinue();
    }, 850);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 z-10">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl mx-auto"
      >
        {/* Central Romantic Card */}
        <div className="relative bg-white/75 backdrop-blur-md rounded-3xl p-8 sm:p-12 text-center shadow-coquette border border-coquette-blush/60 transition-all">
          
          {/* Decorative Top Bow Accent */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
            className="flex justify-center -mt-14 mb-4"
          >
            <div className="p-3 bg-coquette-cream rounded-full border border-coquette-rose/40 shadow-soft-pink">
              <CoquetteBow size={56} />
            </div>
          </motion.div>

          {/* Small Category Badge / Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex items-center justify-center gap-2 mb-5"
          >
            <span className="h-[1px] w-6 bg-coquette-rose/50" />
            <p className="text-[11px] sm:text-xs font-sans tracking-[0.22em] text-coquette-deeprose/90 uppercase font-semibold">
              A LITTLE SOMETHING FOR SOMEONE SPECIAL
            </p>
            <span className="h-[1px] w-6 bg-coquette-rose/50" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-coquette-text font-normal tracking-tight mb-6 leading-tight"
          >
            Hey, pretty girl...{" "}
            <span className="font-serif italic text-coquette-deeprose whitespace-nowrap">
              ♡
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="font-sans text-base sm:text-lg text-coquette-text/85 leading-relaxed max-w-md mx-auto mb-10 font-light"
          >
            I know things haven&apos;t felt quite right, and I wanted to do something a little different to tell you something.
          </motion.p>

          {/* Main Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={handleOpenSurprise}
              disabled={isOpening}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="relative group overflow-hidden px-8 py-4 sm:px-10 sm:py-4 rounded-full bg-gradient-to-r from-coquette-deeprose via-[#D6658D] to-coquette-deeprose text-white font-sans text-sm sm:text-base font-medium tracking-wide shadow-button-glow hover:shadow-coquette transition-all duration-300"
            >
              {/* Subtle shimmer effect on hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

              <span className="relative flex items-center justify-center gap-3">
                <Sparkles className="w-4 h-4 text-pink-200 group-hover:rotate-12 transition-transform duration-300" />
                <span className="tracking-wider uppercase text-xs sm:text-sm font-semibold">
                  OPEN THIS LITTLE SURPRISE ♡
                </span>
                <Heart className="w-4 h-4 fill-pink-200 text-pink-200 group-hover:scale-125 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>

          {/* Bottom subtle detail */}
          <div className="mt-8 pt-6 border-t border-coquette-blush/30 flex items-center justify-center gap-2 text-xs font-handwriting text-coquette-deeprose/70">
            <span>Made with all my care & love</span>
            <span>•</span>
            <span>Just for you</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
