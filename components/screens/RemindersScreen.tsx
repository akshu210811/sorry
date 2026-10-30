"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, Sparkles, MessageCircleHeart, Check, ArrowLeft, RefreshCw } from "lucide-react";
import { CoquetteBow } from "../icons/CoquetteBow";

interface RemindersScreenProps {
  onBackToLetter: () => void;
  onBackToFlowers: () => void;
  onRestart: () => void;
}

export const RemindersScreen: React.FC<RemindersScreenProps> = ({
  onBackToLetter,
  onBackToFlowers,
  onRestart,
}) => {
  const [hugSent, setHugSent] = useState(false);

  const reminders = [
    {
      number: "01",
      title: "You matter to me.",
      body: "Even when I don't get my words right or my replies seem brief, you are never far from my mind. You are my favorite person, always.",
      accent: "♡",
    },
    {
      number: "02",
      title: "I'm listening, always.",
      body: "Your feelings will never be too much or unimportant to me. You deserve someone who listens with an open heart, and I am here for you.",
      accent: "🌷",
    },
    {
      number: "03",
      title: "I want to do better.",
      body: "Not with empty promises, but with real effort every single day—putting more thought into my words, sharing my world with you, and making sure you feel cherished.",
      accent: "💌",
    },
  ];

  const handleSendHug = () => {
    setHugSent(true);

    const colors = ["#F8BBD0", "#EFA6BF", "#C75B82", "#FFF8F5", "#FCE4EC"];
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors,
      scalar: 1.2,
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 z-10">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Header Ribbon & Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="p-2.5 bg-white/80 rounded-full border border-coquette-rose/40 shadow-soft-pink">
            <CoquetteBow size={42} color="#D96E92" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-coquette-text font-normal tracking-tight text-center mb-3 leading-tight"
        >
          Just in case you forget...{" "}
          <span className="font-serif italic text-coquette-deeprose">❤️</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-sans text-base sm:text-lg text-coquette-text/80 text-center max-w-md mb-12 font-light"
        >
          Three little truths and promises I hold close to my heart.
        </motion.p>

        {/* Three Animated Cards Displayed Staggered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-14">
          {reminders.map((reminder, idx) => (
            <motion.div
              key={reminder.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + idx * 0.2,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative group bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-coquette border border-coquette-blush/70 flex flex-col justify-between transition-all"
            >
              {/* Subtle top card ribbon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-sans tracking-widest text-coquette-deeprose/70 font-semibold uppercase">
                  Promise {reminder.number}
                </span>
                <span className="text-base select-none">{reminder.accent}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl text-coquette-text font-medium mb-3 leading-snug group-hover:text-coquette-darkrose transition-colors">
                {reminder.title}
              </h3>

              {/* Body */}
              <p className="font-sans text-sm text-coquette-text/85 leading-relaxed font-normal">
                {reminder.body}
              </p>

              {/* Bottom decorative line */}
              <div className="mt-5 pt-3 border-t border-coquette-babypink/60 flex items-center justify-between text-coquette-rose/60">
                <Heart className="w-3.5 h-3.5 fill-coquette-blush group-hover:fill-coquette-rose transition-colors" />
                <span className="h-[1px] flex-1 mx-2 bg-coquette-babypink" />
                <Sparkles className="w-3 h-3 text-coquette-rose group-hover:rotate-45 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Beautiful Final Message Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="w-full max-w-xl bg-gradient-to-br from-white/90 via-[#FFF8F5] to-coquette-babypink/40 rounded-3xl p-8 sm:p-10 shadow-coquette border border-coquette-rose/40 text-center relative overflow-hidden mb-10"
        >
          {/* Subtle background glow */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-coquette-rose/20 blur-2xl pointer-events-none" />

          <div className="flex justify-center mb-4">
            <Heart className="w-8 h-8 fill-coquette-deeprose text-coquette-deeprose animate-pulse" />
          </div>

          <h4 className="font-serif text-2xl text-coquette-text font-normal mb-3">
            No pressure, always love.
          </h4>

          <p className="font-sans text-sm sm:text-base text-coquette-text/85 leading-relaxed mb-6 font-light">
            You don&apos;t have to brush this off or reply right away. Take all the time you need. I just wanted you to know that you are deeply valued, listened to, and worth every effort. ♡
          </p>

          {/* Interactive Hug Button */}
          <div className="flex flex-col items-center gap-3">
            <motion.button
              onClick={handleSendHug}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={`px-8 py-3.5 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-button-glow ${
                hugSent
                  ? "bg-coquette-cream text-coquette-darkrose border-2 border-coquette-deeprose"
                  : "bg-gradient-to-r from-coquette-deeprose via-[#D6658D] to-coquette-deeprose text-white hover:shadow-coquette"
              }`}
            >
              {hugSent ? (
                <>
                  <Check className="w-4 h-4 text-coquette-deeprose" />
                  <span>Hug received & held close ♡</span>
                </>
              ) : (
                <>
                  <MessageCircleHeart className="w-4 h-4 text-pink-200" />
                  <span>Send a little hug back ♡</span>
                </>
              )}
            </motion.button>

            {hugSent && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-handwriting text-coquette-deeprose text-base"
              >
                Thank you for being you, sweetheart ♡
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Gentle Navigation / Revisit Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-6 text-xs font-sans text-coquette-text/70"
        >
          <button
            onClick={onBackToLetter}
            type="button"
            className="hover:text-coquette-deeprose transition-colors underline underline-offset-4 flex items-center gap-1.5"
          >
            <span>💌 Read letter again</span>
          </button>
          <span>•</span>
          <button
            onClick={onBackToFlowers}
            type="button"
            className="hover:text-coquette-deeprose transition-colors underline underline-offset-4 flex items-center gap-1.5"
          >
            <span>🌷 View your flowers</span>
          </button>
          <span>•</span>
          <button
            onClick={onRestart}
            type="button"
            className="hover:text-coquette-deeprose transition-colors underline underline-offset-4 flex items-center gap-1.5"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Start from beginning</span>
          </button>
        </motion.div>

        {/* Final signature footer */}
        <div className="mt-12 text-center select-none">
          <p className="font-handwriting text-2xl text-coquette-deeprose/80">
            Forever yours ♡
          </p>
        </div>
      </div>

      {/* Discrete Corner Signature */}
      <div className="absolute bottom-4 right-6 text-[11px] font-handwriting text-coquette-deeprose/50 tracking-wider select-none">
        made by akshu ♡
      </div>
    </section>
  );
};
