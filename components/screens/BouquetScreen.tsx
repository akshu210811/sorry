"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles, ArrowRight } from "lucide-react";
import { FlowerBouquet } from "../illustrations/FlowerBouquet";
import { CoquetteBow } from "../icons/CoquetteBow";

interface BouquetScreenProps {
  onContinue: () => void;
  onBack?: () => void;
}

export const BouquetScreen: React.FC<BouquetScreenProps> = ({ onContinue, onBack }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 z-10">
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95, y: -25 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-2xl mx-auto flex flex-col items-center text-center"
      >
        {/* Subtle decorative top ribbon pin */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-coquette-blush text-coquette-deeprose text-xs font-sans tracking-widest uppercase font-medium shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-coquette-rose" />
            FRESH BLOOMS FOR YOU
            <Sparkles className="w-3.5 h-3.5 text-coquette-rose" />
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-coquette-text font-normal tracking-tight mb-3 leading-tight"
        >
          These are for you, sweetheart{" "}
          <span className="font-serif italic text-coquette-deeprose">♡</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-sans text-base sm:text-lg text-coquette-text/85 max-w-lg mb-6 sm:mb-8 font-light leading-relaxed"
        >
          Because you deserve flowers, even on the days when I don&apos;t get my words right.
        </motion.p>

        {/* Visual Highlight: The Animated Flower Bouquet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.65, type: "spring", stiffness: 140, damping: 18 }}
          className="my-2 sm:my-4"
        >
          <FlowerBouquet />
        </motion.div>

        {/* Navigation Button to Apology Letter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          {onBack && (
            <button
              onClick={onBack}
              type="button"
              className="text-xs text-coquette-text/60 hover:text-coquette-deeprose transition-colors font-sans underline underline-offset-4 order-2 sm:order-1"
            >
              ← Back to welcome
            </button>
          )}

          <motion.button
            onClick={onContinue}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden px-8 py-4 sm:px-10 sm:py-4 rounded-full bg-gradient-to-r from-coquette-deeprose via-[#D6658D] to-coquette-deeprose text-white font-sans text-sm sm:text-base font-medium tracking-wide shadow-button-glow hover:shadow-coquette transition-all duration-300 order-1 sm:order-2"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

            <span className="relative flex items-center justify-center gap-3">
              <Mail className="w-4 h-4 text-pink-200 group-hover:scale-110 transition-transform" />
              <span className="tracking-wider uppercase text-xs sm:text-sm font-semibold">
                THERE&apos;S SOMETHING I WANT TO SAY...
              </span>
              <ArrowRight className="w-4 h-4 text-pink-200 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};
