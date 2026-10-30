"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { MusicPlayer } from "@/components/MusicPlayer";
import { WelcomeScreen } from "@/components/screens/WelcomeScreen";
import { BouquetScreen } from "@/components/screens/BouquetScreen";
import { LetterScreen } from "@/components/screens/LetterScreen";
import { RemindersScreen } from "@/components/screens/RemindersScreen";
import { CoquetteBow } from "@/components/icons/CoquetteBow";

type Screen = "welcome" | "bouquet" | "letter" | "reminders";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [isReadingLetter, setIsReadingLetter] = useState(false);

  // Scroll to top whenever screen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentScreen]);

  return (
    <main className="relative min-h-screen bg-coquette-cream selection:bg-coquette-blush selection:text-coquette-darkrose font-sans overflow-x-hidden">
      {/* Background Animated Effects (Hearts, Petals, Glows) */}
      <BackgroundEffects dimmed={isReadingLetter} />

      {/* Floating Ambient Music Player */}
      <MusicPlayer />

      {/* Top Subtle Progress Navigation Pill (shows after welcome) */}
      {currentScreen !== "welcome" && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-5 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-coquette-blush shadow-soft-pink text-xs font-sans"
        >
          <button
            onClick={() => setCurrentScreen("bouquet")}
            className={`px-3 py-1 rounded-full transition-colors flex items-center gap-1 ${
              currentScreen === "bouquet"
                ? "bg-coquette-deeprose text-white font-medium"
                : "text-coquette-text/70 hover:text-coquette-deeprose"
            }`}
          >
            <span>🌷 Bouquet</span>
          </button>

          <span className="text-coquette-blush">•</span>

          <button
            onClick={() => setCurrentScreen("letter")}
            className={`px-3 py-1 rounded-full transition-colors flex items-center gap-1 ${
              currentScreen === "letter"
                ? "bg-coquette-deeprose text-white font-medium"
                : "text-coquette-text/70 hover:text-coquette-deeprose"
            }`}
          >
            <span>💌 Letter</span>
          </button>

          <span className="text-coquette-blush">•</span>

          <button
            onClick={() => setCurrentScreen("reminders")}
            className={`px-3 py-1 rounded-full transition-colors flex items-center gap-1 ${
              currentScreen === "reminders"
                ? "bg-coquette-deeprose text-white font-medium"
                : "text-coquette-text/70 hover:text-coquette-deeprose"
            }`}
          >
            <span>❤️ Promises</span>
          </button>
        </motion.nav>
      )}

      {/* Main Screen Content with Smooth Transitions */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {currentScreen === "welcome" && (
            <WelcomeScreen
              key="welcome"
              onContinue={() => setCurrentScreen("bouquet")}
            />
          )}

          {currentScreen === "bouquet" && (
            <BouquetScreen
              key="bouquet"
              onContinue={() => setCurrentScreen("letter")}
              onBack={() => setCurrentScreen("welcome")}
            />
          )}

          {currentScreen === "letter" && (
            <LetterScreen
              key="letter"
              onContinue={() => setCurrentScreen("reminders")}
              onBack={() => setCurrentScreen("bouquet")}
              onReadingStateChange={(reading) => setIsReadingLetter(reading)}
            />
          )}

          {currentScreen === "reminders" && (
            <RemindersScreen
              key="reminders"
              onBackToLetter={() => setCurrentScreen("letter")}
              onBackToFlowers={() => setCurrentScreen("bouquet")}
              onRestart={() => setCurrentScreen("welcome")}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Subtle bottom footer credit */}
      <footer className="relative z-20 pb-5 text-center select-none pointer-events-none">
        <p className="text-[11px] font-sans text-coquette-deeprose/55 tracking-widest lowercase">
          made by akshu
        </p>
      </footer>
    </main>
  );
}
