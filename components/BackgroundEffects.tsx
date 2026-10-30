"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CoquetteBow } from "./icons/CoquetteBow";

interface BackgroundEffectsProps {
  dimmed?: boolean;
}

interface FloatingItem {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotate: number;
  opacity: number;
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ dimmed = false }) => {
  const [mounted, setMounted] = useState(false);
  const [hearts, setHearts] = useState<FloatingItem[]>([]);
  const [petals, setPetals] = useState<FloatingItem[]>([]);

  useEffect(() => {
    setMounted(true);
    // Generate static random positions on mount to avoid hydration mismatch
    const generatedHearts: FloatingItem[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 95,
      size: Math.random() * 14 + 10,
      duration: Math.random() * 10 + 14,
      delay: Math.random() * 8,
      drift: (Math.random() - 0.5) * 60,
      rotate: (Math.random() - 0.5) * 45,
      opacity: Math.random() * 0.35 + 0.25,
    }));

    const generatedPetals: FloatingItem[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 95,
      size: Math.random() * 12 + 12,
      duration: Math.random() * 12 + 15,
      delay: Math.random() * 10,
      drift: Math.random() * 120 + 30,
      rotate: Math.random() * 360,
      opacity: Math.random() * 0.3 + 0.2,
    }));

    setHearts(generatedHearts);
    setPetals(generatedPetals);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none overflow-hidden transition-opacity duration-1000 z-0 ${
        dimmed ? "opacity-30" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Soft romantic ambient gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F5] via-[#FCE4EC]/50 to-[#F8BBD0]/30" />

      {/* Subtle radial glow accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#FCE4EC] to-[#F8BBD0]/40 blur-3xl opacity-70" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-gradient-to-bl from-[#F8BBD0]/50 to-[#EFA6BF]/30 blur-3xl opacity-60" />
      <div className="absolute -bottom-32 left-1/4 w-[30rem] h-[30rem] rounded-full bg-gradient-to-t from-[#FCE4EC] to-transparent blur-3xl opacity-70" />

      {/* Floating Gentle Hearts */}
      {hearts.map((h) => (
        <motion.div
          key={`heart-${h.id}`}
          initial={{
            y: "105vh",
            x: `${h.x}vw`,
            opacity: 0,
            rotate: h.rotate,
          }}
          animate={{
            y: "-10vh",
            x: `${h.x + h.drift / 20}vw`,
            opacity: [0, h.opacity, h.opacity, 0],
            rotate: [h.rotate, h.rotate + 20, h.rotate - 15],
          }}
          transition={{
            duration: h.duration,
            repeat: Infinity,
            delay: h.delay,
            ease: "easeInOut",
          }}
          className="absolute text-coquette-rose select-none"
          style={{ fontSize: `${h.size}px` }}
        >
          <svg
            width={h.size}
            height={h.size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-coquette-rose/40 hover:text-coquette-rose/60 transition-colors"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Floating Soft Flower Petals */}
      {petals.map((p) => (
        <motion.div
          key={`petal-${p.id}`}
          initial={{
            y: "-8vh",
            x: `${p.x}vw`,
            opacity: 0,
            rotate: p.rotate,
          }}
          animate={{
            y: "108vh",
            x: `${p.x + p.drift / 15}vw`,
            opacity: [0, p.opacity, p.opacity, 0],
            rotate: [p.rotate, p.rotate + 180, p.rotate + 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          className="absolute select-none pointer-events-none"
        >
          <svg
            width={p.size}
            height={p.size * 1.3}
            viewBox="0 0 30 40"
            fill="none"
            className="drop-shadow-[0_2px_4px_rgba(239,166,191,0.25)]"
          >
            <path
              d="M15 0 C25 8, 30 20, 24 32 C18 42, 6 40, 2 28 C-2 16, 5 4, 15 0 Z"
              fill="url(#petalGrad)"
              opacity="0.8"
            />
            <defs>
              <linearGradient id="petalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF0F5" />
                <stop offset="60%" stopColor="#F8BBD0" />
                <stop offset="100%" stopColor="#EFA6BF" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}

      {/* Delicate static ambient coquette bows in subtle corners */}
      <div className="absolute top-6 left-6 opacity-40 hover:opacity-70 transition-opacity">
        <CoquetteBow size={28} />
      </div>
      <div className="absolute top-6 right-6 opacity-40 hover:opacity-70 transition-opacity">
        <CoquetteBow size={28} />
      </div>
    </div>
  );
};
