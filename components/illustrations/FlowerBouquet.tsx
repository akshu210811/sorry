"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { CoquetteBow } from "../icons/CoquetteBow";

interface FlowerBouquetProps {
  className?: string;
}

export const FlowerBouquet: React.FC<FlowerBouquetProps> = ({ className = "" }) => {
  const [activeNote, setActiveNote] = useState<string | null>(null);

  const flowers = [
    { id: "rose1", note: "For your warm, comforting presence ♡" },
    { id: "rose2", note: "For your sweet laugh that I always miss ♡" },
    { id: "rose3", note: "For your patience, even when I'm flawed ♡" },
    { id: "peony", note: "For your kind heart that means everything to me ♡" },
  ];

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Floating Interactive Love Whispers tooltip */}
      <AnimatePresence>
        {activeNote && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="absolute -top-12 z-30 px-4 py-2 rounded-full bg-white/95 shadow-coquette border border-coquette-rose/50 text-coquette-darkrose font-handwriting text-base sm:text-lg flex items-center gap-2 pointer-events-none"
          >
            <Sparkles className="w-3.5 h-3.5 text-coquette-deeprose animate-spin" style={{ animationDuration: "3s" }} />
            <span>{activeNote}</span>
            <Heart className="w-3.5 h-3.5 fill-coquette-deeprose text-coquette-deeprose" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating subtle hearts around bouquet */}
      <motion.div
        animate={{ y: [-4, 6, -4], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -left-6 text-coquette-rose/70 pointer-events-none"
      >
        <Heart className="w-5 h-5 fill-coquette-rose/50" />
      </motion.div>

      <motion.div
        animate={{ y: [6, -6, 6], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-12 -right-8 text-coquette-deeprose/60 pointer-events-none"
      >
        <Heart className="w-6 h-6 fill-coquette-blush" />
      </motion.div>

      <motion.div
        animate={{ y: [-5, 5, -5], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-24 -left-8 text-coquette-rose/60 pointer-events-none"
      >
        <Heart className="w-4 h-4 fill-coquette-rose/40" />
      </motion.div>

      {/* Main SVG Bouquet Container with Gentle Sway Animation */}
      <motion.div
        animate={{
          rotate: [-1.2, 1.2, -1.2],
          y: [0, -6, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-72 h-96 sm:w-80 sm:h-[26rem] drop-shadow-[0_20px_35px_rgba(239,166,191,0.35)]"
      >
        <svg
          viewBox="0 0 320 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Gradients for Roses */}
            <radialGradient id="roseMain" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#FFF0F5" />
              <stop offset="25%" stopColor="#F8BBD0" />
              <stop offset="65%" stopColor="#EFA6BF" />
              <stop offset="100%" stopColor="#C75B82" />
            </radialGradient>

            <radialGradient id="roseDark" cx="45%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#FCE4EC" />
              <stop offset="35%" stopColor="#EFA6BF" />
              <stop offset="75%" stopColor="#C75B82" />
              <stop offset="100%" stopColor="#A34164" />
            </radialGradient>

            <radialGradient id="peonyGrad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#FFF3F7" />
              <stop offset="70%" stopColor="#F8BBD0" />
              <stop offset="100%" stopColor="#EFA6BF" />
            </radialGradient>

            {/* Wrapping Paper Gradients */}
            <linearGradient id="wrapBack" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF5F8" />
              <stop offset="50%" stopColor="#FCE4EC" />
              <stop offset="100%" stopColor="#F3C5D5" />
            </linearGradient>

            <linearGradient id="wrapFrontLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#FDEBF2" />
              <stop offset="100%" stopColor="#F8BBD0" />
            </linearGradient>

            <linearGradient id="wrapFrontRight" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF0F5" />
              <stop offset="60%" stopColor="#F8BBD0" />
              <stop offset="100%" stopColor="#EFA6BF" />
            </linearGradient>

            {/* Leaves Gradients */}
            <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BBD5BD" />
              <stop offset="50%" stopColor="#8FAF91" />
              <stop offset="100%" stopColor="#5D7C60" />
            </linearGradient>

            <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CFDEC8" />
              <stop offset="60%" stopColor="#9AB89C" />
              <stop offset="100%" stopColor="#6C896E" />
            </linearGradient>

            {/* Ribbon Gradient */}
            <linearGradient id="ribbonWrap" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FCE4EC" />
              <stop offset="30%" stopColor="#EFA6BF" />
              <stop offset="70%" stopColor="#C75B82" />
              <stop offset="100%" stopColor="#9C3A60" />
            </linearGradient>
          </defs>

          {/* BACKGROUND FOLIAGE & LEAVES */}
          <g id="eucalyptus-and-leaves">
            {/* Top Left Leaf */}
            <path
              d="M100 130 C75 100 65 75 80 55 C98 50 115 80 118 115 Z"
              fill="url(#leafGrad1)"
              opacity="0.9"
            />
            <path d="M85 70 Q98 90 108 120" stroke="#48634A" strokeWidth="1" opacity="0.6" />

            {/* Top Right Leaf */}
            <path
              d="M210 120 C235 90 255 70 240 50 C220 50 200 80 195 110 Z"
              fill="url(#leafGrad2)"
              opacity="0.9"
            />
            <path d="M230 65 Q218 85 204 115" stroke="#48634A" strokeWidth="1" opacity="0.6" />

            {/* Far Left Sage Leaf */}
            <path
              d="M60 180 C35 160 30 135 50 125 C68 125 78 150 78 175 Z"
              fill="url(#leafGrad1)"
              opacity="0.85"
            />
            {/* Far Right Sage Leaf */}
            <path
              d="M255 175 C285 155 290 130 270 120 C250 120 240 145 240 170 Z"
              fill="url(#leafGrad2)"
              opacity="0.85"
            />
          </g>

          {/* BACK WRAPPING PAPER */}
          <path
            d="M50 180 L160 50 L270 180 L200 390 L120 390 Z"
            fill="url(#wrapBack)"
            stroke="#F8BBD0"
            strokeWidth="1.5"
          />

          {/* BABY'S BREATH (Gypsophila sprays) */}
          <g id="babys-breath" opacity="0.95">
            {/* Tiny delicate stems */}
            <path d="M120 140 Q105 105 85 90" stroke="#7A9A7C" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M100 110 Q85 105 75 110" stroke="#7A9A7C" strokeWidth="1" strokeLinecap="round" />
            <path d="M110 125 Q115 100 125 80" stroke="#7A9A7C" strokeWidth="1" strokeLinecap="round" />
            <path d="M200 135 Q220 100 240 85" stroke="#7A9A7C" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M215 115 Q235 115 245 105" stroke="#7A9A7C" strokeWidth="1" strokeLinecap="round" />
            <path d="M190 130 Q180 90 175 70" stroke="#7A9A7C" strokeWidth="1" strokeLinecap="round" />

            {/* Little white blossoms */}
            <circle cx="85" cy="90" r="4" fill="#FFFFFF" stroke="#FCE4EC" strokeWidth="0.8" />
            <circle cx="75" cy="110" r="3.5" fill="#FFFFFF" stroke="#FCE4EC" strokeWidth="0.8" />
            <circle cx="95" cy="80" r="3" fill="#FFFFFF" stroke="#FCE4EC" strokeWidth="0.8" />
            <circle cx="125" cy="80" r="4.2" fill="#FFFFFF" stroke="#FCE4EC" strokeWidth="0.8" />
            <circle cx="118" cy="95" r="3.2" fill="#FFFFFF" stroke="#FCE4EC" strokeWidth="0.8" />

            <circle cx="240" cy="85" r="4" fill="#FFFFFF" stroke="#FCE4EC" strokeWidth="0.8" />
            <circle cx="245" cy="105" r="3.5" fill="#FFFFFF" stroke="#FCE4EC" strokeWidth="0.8" />
            <circle cx="225" cy="75" r="3.2" fill="#FFFFFF" stroke="#FCE4EC" strokeWidth="0.8" />
            <circle cx="175" cy="70" r="4" fill="#FFFFFF" stroke="#FCE4EC" strokeWidth="0.8" />
            <circle cx="182" cy="85" r="3" fill="#FFFFFF" stroke="#FCE4EC" strokeWidth="0.8" />

            {/* Blossom centers */}
            <circle cx="85" cy="90" r="1.2" fill="#F8BBD0" />
            <circle cx="125" cy="80" r="1.2" fill="#F8BBD0" />
            <circle cx="240" cy="85" r="1.2" fill="#F8BBD0" />
            <circle cx="175" cy="70" r="1.2" fill="#F8BBD0" />
          </g>

          {/* MAIN FLOWERS */}
          {/* 1. Left Rose (Rose 1) */}
          <g
            id="flower-left-rose"
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setActiveNote(flowers[0].note)}
            onMouseLeave={() => setActiveNote(null)}
            onClick={() => setActiveNote(flowers[0].note)}
          >
            {/* Outer Petals */}
            <path
              d="M75 160 C65 140 80 120 105 125 C125 130 135 150 120 175 C100 185 85 180 75 160 Z"
              fill="url(#roseDark)"
              stroke="#EFA6BF"
              strokeWidth="0.8"
            />
            <path
              d="M78 145 C85 130 110 132 118 145 C120 160 105 170 90 168 C80 165 74 155 78 145 Z"
              fill="url(#roseMain)"
            />
            {/* Rose Swirl / Core */}
            <path
              d="M92 142 C98 138 108 140 106 148 C104 156 94 158 90 152 C88 148 90 144 94 144 C98 144 100 148 98 150"
              fill="none"
              stroke="#A34164"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>

          {/* 2. Right Peony (Pastel Blossom) */}
          <g
            id="flower-right-peony"
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setActiveNote(flowers[1].note)}
            onMouseLeave={() => setActiveNote(null)}
            onClick={() => setActiveNote(flowers[1].note)}
          >
            {/* Lush layered round petals */}
            <ellipse cx="225" cy="155" rx="36" ry="32" fill="url(#peonyGrad)" stroke="#F8BBD0" strokeWidth="1" />
            <path
              d="M200 140 C210 125 240 125 250 140 C255 155 245 170 225 172 C205 170 195 155 200 140 Z"
              fill="#FFF0F5"
              opacity="0.85"
            />
            <path
              d="M210 148 C218 138 238 138 242 148 C244 158 232 165 224 164 C216 162 210 155 210 148 Z"
              fill="#FCE4EC"
            />
            {/* Peony heart frills */}
            <path
              d="M218 150 Q225 144 232 150 Q226 158 220 154"
              fill="none"
              stroke="#C75B82"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </g>

          {/* 3. Top Center Sweet Rosebud */}
          <g
            id="flower-top-rosebud"
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setActiveNote(flowers[2].note)}
            onMouseLeave={() => setActiveNote(null)}
            onClick={() => setActiveNote(flowers[2].note)}
          >
            <path
              d="M140 115 C140 95 155 85 165 92 C175 85 190 95 188 115 C186 130 165 140 140 115 Z"
              fill="url(#roseDark)"
              stroke="#EFA6BF"
              strokeWidth="0.8"
            />
            <path
              d="M152 98 C158 92 172 92 176 100 C178 110 168 118 162 116 C156 114 150 108 152 98 Z"
              fill="url(#roseMain)"
            />
            <path
              d="M160 102 C164 98 170 100 169 106 C168 110 162 112 160 108"
              fill="none"
              stroke="#A34164"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>

          {/* 4. Centerpiece Queen Rose (Grand Rose) */}
          <g
            id="flower-queen-rose"
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setActiveNote(flowers[3].note)}
            onMouseLeave={() => setActiveNote(null)}
            onClick={() => setActiveNote(flowers[3].note)}
          >
            {/* Outer Petals */}
            <path
              d="M110 195 C95 160 120 135 160 135 C200 135 225 160 210 195 C195 230 125 230 110 195 Z"
              fill="url(#roseDark)"
              stroke="#F8BBD0"
              strokeWidth="1.2"
            />
            {/* Middle Petal Ring */}
            <path
              d="M125 185 C115 160 135 145 160 145 C185 145 205 160 195 185 C185 210 135 210 125 185 Z"
              fill="url(#roseMain)"
            />
            <path
              d="M135 178 C130 160 145 152 160 152 C175 152 190 160 185 178 C180 195 140 195 135 178 Z"
              fill="#FFF0F5"
            />
            {/* Velvet Rose Spiral Core */}
            <path
              d="M152 165 C158 158 168 160 168 167 C168 175 154 178 150 172 C146 166 152 162 158 162 C164 162 165 168 162 170"
              fill="none"
              stroke="#8A2548"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </g>

          {/* FRONT WRAPPING PAPER (Layered Fold Design) */}
          <g id="wrapping-front">
            {/* Left Wrap Flap */}
            <path
              d="M45 190 Q120 220 160 270 L115 395 L80 395 Z"
              fill="url(#wrapFrontLeft)"
              stroke="#F3C5D5"
              strokeWidth="1.2"
            />
            {/* Right Wrap Flap overlapping */}
            <path
              d="M275 190 Q200 220 155 270 L205 395 L115 395 L160 270 Z"
              fill="url(#wrapFrontRight)"
              stroke="#EFA6BF"
              strokeWidth="1.2"
            />
            {/* Center paper fold shadow line */}
            <path d="M160 270 L150 395" stroke="#C75B82" strokeWidth="1.5" opacity="0.3" />
          </g>

          {/* SATIN RIBBON TIED AROUND BOUQUET */}
          <g id="satin-ribbon">
            {/* Ribbon Band at Bouquet Waist */}
            <path
              d="M118 290 C145 285 175 285 202 290 L200 310 C175 305 145 305 120 310 Z"
              fill="url(#ribbonWrap)"
              stroke="#FFF"
              strokeWidth="0.8"
            />

            {/* Left Cascading Ribbon Tail */}
            <motion.path
              animate={{
                d: [
                  "M150 305 C135 330 115 365 105 385 C115 375 125 365 120 350 C130 340 148 315 150 305 Z",
                  "M150 305 C138 332 118 368 110 390 C118 378 128 368 122 352 C132 342 148 315 150 305 Z",
                  "M150 305 C135 330 115 365 105 385 C115 375 125 365 120 350 C130 340 148 315 150 305 Z",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              fill="#C75B82"
              opacity="0.9"
            />

            {/* Right Cascading Ribbon Tail */}
            <motion.path
              animate={{
                d: [
                  "M170 305 C185 330 205 365 215 385 C205 375 195 365 200 350 C190 340 172 315 170 305 Z",
                  "M170 305 C182 332 202 368 210 390 C202 378 192 368 198 352 C188 342 172 315 170 305 Z",
                  "M170 305 C185 330 205 365 215 385 C205 375 195 365 200 350 C190 340 172 315 170 305 Z",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              fill="#C75B82"
              opacity="0.9"
            />
          </g>
        </svg>

        {/* Center Coquette Bow tied right over the ribbon waist */}
        <div className="absolute top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <CoquetteBow size={52} color="#D96E92" />
        </div>
      </motion.div>

      {/* Little whisper prompt */}
      <p className="mt-2 text-xs font-handwriting text-coquette-deeprose/80 tracking-wide flex items-center gap-1.5">
        <span>(tap on any flower for a little thought ♡)</span>
      </p>
    </div>
  );
};
