"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, ArrowRight, RotateCcw } from "lucide-react";
import { WaxSeal } from "../icons/WaxSeal";
import { CoquetteBow } from "../icons/CoquetteBow";

interface LetterScreenProps {
  onContinue: () => void;
  onBack?: () => void;
  onReadingStateChange?: (isReading: boolean) => void;
}

export const LetterScreen: React.FC<LetterScreenProps> = ({
  onContinue,
  onBack,
  onReadingStateChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenLetter = () => {
    if (isOpen || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(true);
      setIsAnimating(false);
      onReadingStateChange?.(true);
    }, 700);
  };

  const handleCloseLetter = () => {
    setIsOpen(false);
    onReadingStateChange?.(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 z-10">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Screen Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-coquette-blush text-coquette-deeprose text-xs font-sans tracking-widest uppercase font-medium mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-coquette-rose" />
            FROM MY HEART TO YOURS
            <Sparkles className="w-3.5 h-3.5 text-coquette-rose" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-coquette-text font-normal tracking-tight">
            A Letter For You{" "}
            <span className="font-serif italic text-coquette-deeprose">💌</span>
          </h2>
        </motion.div>

        {/* INTERACTIVE ENVELOPE / OPEN LETTER CONTAINER */}
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* CLOSED ENVELOPE VIEW */
            <motion.div
              key="closed-envelope"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center w-full"
            >
              {/* The Envelope */}
              <div className="relative w-80 sm:w-96 h-52 sm:h-60 rounded-2xl bg-gradient-to-b from-[#FCE4EC] to-[#F8BBD0] shadow-envelope border border-coquette-rose/50 perspective-1000 overflow-hidden flex items-center justify-center">
                
                {/* Envelope Back Texture */}
                <div className="absolute inset-0 bg-[#FCE4EC]/40" />

                {/* Cream paper edge peeking out top */}
                <div className="absolute top-3 w-64 sm:w-76 h-8 bg-coquette-cream rounded-t-md shadow-sm border border-coquette-softborder/40 opacity-80" />

                {/* Left Triangular Fold */}
                <div
                  className="absolute left-0 bottom-0 top-0 w-1/2 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(248,187,208,0.95) 0%, rgba(239,166,191,0.85) 100%)",
                    clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                  }}
                />

                {/* Right Triangular Fold */}
                <div
                  className="absolute right-0 bottom-0 top-0 w-1/2 pointer-events-none"
                  style={{
                    background: "linear-gradient(225deg, rgba(248,187,208,0.95) 0%, rgba(239,166,191,0.85) 100%)",
                    clipPath: "polygon(100% 0, 0 50%, 100% 100%)",
                  }}
                />

                {/* Bottom Triangular Fold */}
                <div
                  className="absolute left-0 right-0 bottom-0 h-32 sm:h-36 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, #F8BBD0 0%, #FCE4EC 100%)",
                    clipPath: "polygon(0 100%, 50% 15%, 100% 100%)",
                  }}
                />

                {/* Top Flap (animated when opening) */}
                <motion.div
                  animate={isAnimating ? { rotateX: 180, zIndex: 1 } : { rotateX: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{
                    transformOrigin: "top",
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  }}
                  className="absolute top-0 left-0 right-0 h-32 sm:h-36 bg-gradient-to-b from-[#FCE4EC] via-[#F8BBD0] to-[#EFA6BF] border-t border-white/50 shadow-sm z-20 pointer-events-none"
                />

                {/* Delicate Ribbon Across Front */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-3 bg-gradient-to-r from-coquette-rose via-white/50 to-coquette-rose opacity-60 z-10 pointer-events-none" />

                {/* Wax Seal at the center intersection */}
                <motion.div
                  animate={isAnimating ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-30 flex flex-col items-center"
                >
                  <WaxSeal
                    size={68}
                    onClick={handleOpenLetter}
                    className="cursor-pointer transition-transform hover:scale-110 active:scale-95"
                  />
                </motion.div>

                {/* Corner Bow Accents */}
                <div className="absolute top-2 left-2 z-20 opacity-70">
                  <CoquetteBow size={20} />
                </div>
                <div className="absolute top-2 right-2 z-20 opacity-70">
                  <CoquetteBow size={20} />
                </div>
              </div>

              {/* Action Button: OPEN MY LETTER */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-col items-center gap-3"
              >
                <motion.button
                  onClick={handleOpenLetter}
                  disabled={isAnimating}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative overflow-hidden px-9 py-4 rounded-full bg-gradient-to-r from-coquette-deeprose via-[#D6658D] to-coquette-deeprose text-white font-sans text-sm sm:text-base font-medium tracking-wide shadow-button-glow hover:shadow-coquette transition-all duration-300"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  <span className="relative flex items-center justify-center gap-3">
                    <Heart className="w-4 h-4 fill-pink-200 text-pink-200 group-hover:scale-125 transition-transform" />
                    <span className="tracking-wider uppercase text-xs sm:text-sm font-semibold">
                      OPEN MY LETTER ♡
                    </span>
                    <Sparkles className="w-4 h-4 text-pink-200 group-hover:rotate-12 transition-transform" />
                  </span>
                </motion.button>

                <p className="text-xs font-handwriting text-coquette-deeprose/80">
                  (or click the heart wax seal above ♡)
                </p>
              </motion.div>
            </motion.div>
          ) : (
            /* EXPANDED LETTER VIEW (READING STATION) */
            <motion.div
              key="opened-letter"
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              {/* The Beautiful Cream Letter Paper */}
              <div className="relative bg-[#FFFDFB] rounded-3xl p-7 sm:p-12 md:p-14 shadow-letter border-2 border-coquette-softborder/60 text-coquette-text coquette-border">
                
                {/* Decorative Vintage Stamp & Cancellation Mark (Top Right) */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 flex items-center gap-2 select-none opacity-85">
                  <div className="w-14 h-16 sm:w-16 sm:h-20 rounded border-2 border-dashed border-coquette-rose bg-coquette-babypink/60 flex flex-col items-center justify-center p-1 shadow-sm">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-coquette-deeprose text-coquette-deeprose" />
                    <span className="text-[9px] font-sans font-bold text-coquette-deeprose mt-1 tracking-tighter">
                      LOVE POST
                    </span>
                  </div>
                  <div className="hidden sm:flex flex-col gap-1 opacity-50">
                    <span className="w-8 h-[1px] bg-coquette-deeprose" />
                    <span className="w-12 h-[1px] bg-coquette-deeprose" />
                    <span className="w-8 h-[1px] bg-coquette-deeprose" />
                  </div>
                </div>

                {/* Top Bow Ribbon Accent */}
                <div className="flex justify-center -mt-11 sm:-mt-16 mb-4">
                  <div className="p-2.5 bg-coquette-cream rounded-full border border-coquette-rose/40 shadow-soft-pink">
                    <CoquetteBow size={46} color="#D96E92" />
                  </div>
                </div>

                {/* Salutation */}
                <div className="mb-6 pt-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-coquette-darkrose font-medium tracking-tight">
                    Hey, my love,
                  </h3>
                  <div className="w-12 h-[2px] bg-coquette-rose/50 mt-2" />
                </div>

                {/* Apology Letter Body (Verbatim, cleanly spaced, elegant typography) */}
                <div className="space-y-4 sm:space-y-5 font-sans text-sm sm:text-base leading-relaxed text-coquette-text/90 font-normal">
                  <p>
                    I know you&apos;ve been feeling that I dry text you, and I am genuinely sorry for making you feel that way.
                  </p>

                  <p>
                    I never want my replies to make you question how much you mean to me.
                  </p>

                  <p>
                    I know that sometimes my texts can be short or a little dry, and I understand why that can hurt. You deserve more than just a few words that make you feel like I&apos;m not interested in talking to you.
                  </p>

                  <p>
                    I don&apos;t want to make excuses. Even if I don&apos;t always know what to say or how to express myself properly, that doesn&apos;t mean I should make you feel unimportant.
                  </p>

                  <p>
                    I love talking to you, hearing about your day, knowing what&apos;s going on in your mind and being a part of your little everyday moments.
                  </p>

                  <p>
                    I&apos;m sorry if I haven&apos;t been showing that properly.
                  </p>

                  <p>
                    I want to make a genuine effort to communicate better, put more thought into my replies and make sure you feel heard and appreciated.
                  </p>

                  <p className="font-medium text-coquette-darkrose">
                    You shouldn&apos;t have to keep wondering whether I care.
                  </p>

                  <p>
                    I know a website and a letter cannot magically fix everything, but I hope this helps you understand that I do care, that I am listening and that your feelings matter to me.
                  </p>

                  <p className="text-coquette-darkrose font-medium">
                    I&apos;m sorry, sweetheart.
                  </p>
                </div>

                {/* Handwritten Sign-off */}
                <div className="mt-8 pt-6 border-t border-coquette-blush/40 flex flex-col items-end">
                  <p className="font-handwriting text-2xl sm:text-3xl text-coquette-darkrose leading-snug">
                    With all my love,
                  </p>
                  <p className="font-handwriting text-3xl sm:text-4xl text-coquette-deeprose font-bold">
                    Yours ♡
                  </p>
                </div>

                {/* Bottom Navigation Buttons */}
                <div className="mt-10 pt-6 border-t border-coquette-blush/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={handleCloseLetter}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs text-coquette-text/60 hover:text-coquette-deeprose transition-colors font-sans"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Fold letter back into envelope</span>
                  </button>

                  <motion.button
                    onClick={onContinue}
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-coquette-deeprose via-[#D6658D] to-coquette-deeprose text-white font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-button-glow hover:shadow-coquette transition-all flex items-center gap-2"
                  >
                    <span>ONE MORE THING... ♡</span>
                    <ArrowRight className="w-4 h-4 text-pink-200 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back Link */}
        {onBack && !isOpen && (
          <button
            onClick={onBack}
            type="button"
            className="mt-6 text-xs text-coquette-text/60 hover:text-coquette-deeprose transition-colors font-sans underline underline-offset-4"
          >
            ← Back to flowers
          </button>
        )}
      </div>
    </section>
  );
};
