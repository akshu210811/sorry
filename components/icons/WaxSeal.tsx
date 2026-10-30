import React from "react";

interface WaxSealProps {
  className?: string;
  size?: number;
  onClick?: () => void;
  isBroken?: boolean;
}

export const WaxSeal: React.FC<WaxSealProps> = ({
  className = "",
  size = 64,
  onClick,
  isBroken = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Wax Seal"
      className={`group relative outline-none focus-visible:ring-2 focus-visible:ring-coquette-rose transition-transform active:scale-95 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_8px_16px_rgba(163,65,100,0.45)] transition-all duration-300 group-hover:scale-105"
      >
        <defs>
          <radialGradient id="waxBase" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#E26A91" />
            <stop offset="50%" stopColor="#C75B82" />
            <stop offset="85%" stopColor="#9C345A" />
            <stop offset="100%" stopColor="#782343" />
          </radialGradient>
          <radialGradient id="innerRim" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#B3446C" />
            <stop offset="70%" stopColor="#902B51" />
            <stop offset="100%" stopColor="#6E1B3B" />
          </radialGradient>
          <filter id="waxInnerShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feOffset dx="1" dy="2" />
            <feGaussianBlur stdDeviation="2" result="offset-blur" />
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood floodColor="#4A0F24" floodOpacity="0.7" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>

        {/* Wax outer organic melted drips */}
        <path
          d="M50 4 
             C65 2, 75 10, 84 18 
             C93 26, 98 40, 96 52 
             C94 66, 88 78, 79 87 
             C70 96, 56 97, 46 96 
             C32 95, 20 92, 12 81 
             C4 70, 2 54, 5 40 
             C8 26, 18 14, 30 7 
             C38 3, 44 4, 50 4 Z"
          fill="url(#waxBase)"
        />

        {/* Melted wax ripples */}
        <path
          d="M32 12 C42 8 62 8 72 15 C82 22 88 34 87 46 C80 28 65 18 32 12 Z"
          fill="#FFAAC7"
          opacity="0.35"
        />
        <path
          d="M16 60 C12 45 18 30 25 22 C20 32 16 52 24 66 C20 64 17 62 16 60 Z"
          fill="#6E1B3B"
          opacity="0.3"
        />

        {/* Inner depressed stamp circle */}
        <circle
          cx="50"
          cy="51"
          r="30"
          fill="url(#innerRim)"
          stroke="#D86B91"
          strokeWidth="1.5"
          opacity="0.95"
        />

        {/* Inner stamp subtle dotted border */}
        <circle
          cx="50"
          cy="51"
          r="26"
          stroke="#EFA6BF"
          strokeWidth="1"
          strokeDasharray="2 3"
          opacity="0.6"
        />

        {/* Embossed Heart in center */}
        <path
          d="M50 63 
             C49 62, 36 52, 36 43 
             C36 37, 40 33, 45 33 
             C48 33, 49.5 35, 50 36.5 
             C50.5 35, 52 33, 55 33 
             C60 33, 64 37, 64 43 
             C64 52, 51 62, 50 63 Z"
          fill="#D96E92"
          stroke="#FFBBD0"
          strokeWidth="1.2"
        />

        {/* Heart highlight for embossed 3D look */}
        <path
          d="M40 40 C39 42 40 45 43 49"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Subtle shine on top edge of stamp */}
        <path
          d="M34 32 C42 26 58 26 66 32"
          stroke="#FFC4D7"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </button>
  );
};
