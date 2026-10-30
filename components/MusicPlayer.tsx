"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { CoquetteBow } from "./icons/CoquetteBow";

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Soft romantic chords (frequencies in Hz: Fmaj7, Cmaj7, Dm7, Bbmaj7)
  const chordProgressions = [
    [174.61, 220.0, 261.63, 329.63], // F3, A3, C4, E4 (Fmaj7)
    [130.81, 196.0, 246.94, 329.63], // C3, G3, B3, E4 (Cmaj7)
    [146.83, 220.0, 261.63, 349.23], // D3, A3, C4, F4 (Dm7)
    [116.54, 174.61, 233.08, 293.66], // Bb2, F3, Bb3, D4 (Bbmaj7)
  ];

  // Play a single soft bell/music-box chime
  const playTone = (freq: number, time: number, duration: number, gainValue = 0.04) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Gentle sine tone with slight overtone
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.0001, time);
    // Smooth attack
    gain.gain.exponentialRampToValueAtTime(gainValue, time + 0.08);
    // Soft gentle decay
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + duration + 0.1);
  };

  const startMusic = () => {
    if (typeof window === "undefined") return;

    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioContextClass();
    }

    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }

    let chordIndex = 0;
    const playChordStep = () => {
      if (!audioCtxRef.current || audioCtxRef.current.state !== "running") return;
      const now = audioCtxRef.current.currentTime;
      const chord = chordProgressions[chordIndex % chordProgressions.length];

      // Arpeggiate chord notes softly like a music box
      chord.forEach((freq, i) => {
        playTone(freq, now + i * 0.28, 3.2, 0.035);
      });

      // Add a sparkling high note occasionally
      if (Math.random() > 0.3) {
        const sparkleFreq = chord[chord.length - 1] * 2;
        playTone(sparkleFreq, now + 1.2, 2.5, 0.015);
      }

      chordIndex++;
    };

    playChordStep();
    intervalRef.current = setInterval(playChordStep, 3600);
    setIsPlaying(true);
  };

  const stopMusic = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "running") {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    setHasInteracted(true);
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={toggleMusic}
        type="button"
        title={isPlaying ? "Mute soft melody" : "Play soft melody"}
        className="group relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-coquette-rose/40 text-coquette-text shadow-soft-pink hover:bg-white hover:border-coquette-deeprose hover:shadow-coquette transition-all duration-300 text-xs font-medium"
      >
        <span className="relative flex items-center justify-center text-coquette-deeprose">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 opacity-75" />
          )}
        </span>

        <span className="hidden sm:inline-block font-sans text-xs tracking-wider text-coquette-text/90">
          {isPlaying ? "Melody: Playing" : "Soft Melody"}
        </span>

        <CoquetteBow size={18} className="text-coquette-deeprose/80 group-hover:rotate-6 transition-transform" />

        {isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coquette-rose opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-coquette-deeprose"></span>
          </span>
        )}
      </button>
    </div>
  );
};
