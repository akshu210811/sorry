import React from "react";

interface CoquetteBowProps {
  className?: string;
  size?: number;
  color?: string;
  shadow?: boolean;
}

export const CoquetteBow: React.FC<CoquetteBowProps> = ({
  className = "",
  size = 40,
  color = "#EFA6BF",
  shadow = true,
}) => {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 100 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className} ${shadow ? "drop-shadow-[0_4px_6px_rgba(239,166,191,0.35)]" : ""}`}
    >
      <defs>
        <linearGradient id="bowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE8EF" />
          <stop offset="45%" stopColor={color} />
          <stop offset="100%" stopColor="#C75B82" />
        </linearGradient>
        <linearGradient id="knotGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE8EF" />
          <stop offset="60%" stopColor="#D96E92" />
          <stop offset="100%" stopColor="#A34164" />
        </linearGradient>
        <linearGradient id="ribbonTail" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8BBD0" />
          <stop offset="100%" stopColor="#C75B82" />
        </linearGradient>
      </defs>

      {/* Left Tail */}
      <path
        d="M45 42 C38 52 30 65 24 72 C28 66 32 60 28 54 C35 48 44 42 45 42 Z"
        fill="url(#ribbonTail)"
        opacity="0.9"
      />
      <path
        d="M46 42 C40 54 30 64 22 74 C29 67 34 65 31 56 C37 50 45 42 46 42 Z"
        fill="#C75B82"
        opacity="0.3"
      />

      {/* Right Tail */}
      <path
        d="M55 42 C62 52 70 65 76 72 C72 66 68 60 72 54 C65 48 56 42 55 42 Z"
        fill="url(#ribbonTail)"
        opacity="0.9"
      />
      <path
        d="M54 42 C60 54 70 64 78 74 C71 67 66 65 69 56 C63 50 55 42 54 42 Z"
        fill="#C75B82"
        opacity="0.3"
      />

      {/* Left Loop */}
      <path
        d="M48 38 C32 20 10 24 12 36 C14 47 34 46 48 40 Z"
        fill="url(#bowGrad)"
      />
      {/* Left Loop Fold/Crease */}
      <path
        d="M47 38 C35 32 24 33 20 37 C26 41 38 41 48 40 Z"
        fill="#C75B82"
        opacity="0.25"
      />
      {/* Left Loop Highlight */}
      <path
        d="M40 26 C28 25 18 29 17 34"
        stroke="#FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Right Loop */}
      <path
        d="M52 38 C68 20 90 24 88 36 C86 47 66 46 52 40 Z"
        fill="url(#bowGrad)"
      />
      {/* Right Loop Fold/Crease */}
      <path
        d="M53 38 C65 32 76 33 80 37 C74 41 62 41 52 40 Z"
        fill="#C75B82"
        opacity="0.25"
      />
      {/* Right Loop Highlight */}
      <path
        d="M60 26 C72 25 82 29 83 34"
        stroke="#FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Center Knot */}
      <ellipse
        cx="50"
        cy="39"
        rx="6.5"
        ry="8"
        fill="url(#knotGrad)"
      />
      {/* Knot highlight */}
      <path
        d="M48 34 C50 33 52 33 53 34"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.75"
      />
      {/* Knot center shadow */}
      <path
        d="M47 43 C49 44 51 44 53 43"
        stroke="#7A2244"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
};
