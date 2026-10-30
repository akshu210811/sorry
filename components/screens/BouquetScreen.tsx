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
          For someone whose heart deserves the prettiest flowers{" "}
          <span className="font-serif italic text-coquette-deeprose">♡</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-sans text-base sm:text-lg text-coquette-text/85 max-w-lg mb-6 sm:mb-8 font-light leading-relaxed"
        >
          You&apos;re always finding ways to make other people&apos;s days a little better. Here&apos;s a little something to make yours a little prettier.
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

        {/* Personalized Appreciation Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="w-full max-w-xl mx-auto my-8 bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-9 text-left shadow-coquette border border-coquette-blush/70 coquette-border relative"
        >
          <div className="flex items-center gap-2.5 mb-5">
            <CoquetteBow size={28} color="#D96E92" />
            <h3 className="font-serif text-xl sm:text-2xl text-coquette-darkrose font-medium">
              To the girl with the kindest heart...
            </h3>
          </div>

          <div className="space-y-4 font-sans text-sm sm:text-base text-coquette-text/90 leading-relaxed font-normal">
            <p>
              Meet, there are people who make the world a little less difficult just by being in it. And I genuinely think you&apos;re one of those people.
            </p>
            <p>
              You&apos;re someone who notices when others need help, someone who cares about the little things and someone who makes an effort to be there when people need her.
            </p>
            <p>
              You have this beautiful way of making people feel that they&apos;re not alone. You give your time, attention and kindness, sometimes without even realising how much it means to someone.
            </p>
            <p className="font-medium text-coquette-darkrose">
              And that&apos;s something I admire about you.
            </p>
            <p>
              I hope you realise how rare that kind of heart is. The world needs more people who care the way you do.
            </p>
            <p>
              But there&apos;s something I hope you remember too: the person who is always there for everyone deserves someone who is there for her, too.
            </p>
            <p className="font-medium text-coquette-darkrose">
              You deserve the same kindness, patience and care that you give to everyone else.
            </p>
          </div>
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
