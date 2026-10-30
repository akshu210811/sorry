import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coquette: {
          babypink: "#FCE4EC",
          blush: "#F8BBD0",
          rose: "#EFA6BF",
          deeprose: "#C75B82",
          cream: "#FFF8F5",
          white: "#FFFFFF",
          text: "#684454",
          softborder: "#F3C5D5",
          darkrose: "#A34164",
          lightcream: "#FFFCFB",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'DM Sans'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        handwriting: ["'Caveat'", "cursive", "sans-serif"],
      },
      boxShadow: {
        'soft-pink': '0 10px 25px -5px rgba(239, 166, 191, 0.3), 0 8px 10px -6px rgba(239, 166, 191, 0.2)',
        'coquette': '0 15px 35px -5px rgba(199, 91, 130, 0.2), 0 0 15px 0 rgba(248, 187, 208, 0.4)',
        'envelope': '0 20px 40px -10px rgba(104, 68, 84, 0.15), 0 1px 3px 0 rgba(199, 91, 130, 0.1)',
        'letter': '0 25px 50px -12px rgba(104, 68, 84, 0.2)',
        'button-glow': '0 4px 20px rgba(199, 91, 130, 0.35)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-gentle': 'floatGentle 4s ease-in-out infinite',
        'sway-soft': 'sway 5s ease-in-out infinite alternate',
        'sway-leaf': 'swayLeaf 3.5s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 2.5s ease-in-out infinite',
        'petal-fall': 'petalFall 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        sway: {
          '0%': { transform: 'rotate(-2deg)' },
          '100%': { transform: 'rotate(2deg)' },
        },
        swayLeaf: {
          '0%': { transform: 'rotate(-4deg) scale(0.98)' },
          '100%': { transform: 'rotate(4deg) scale(1.02)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '0.9' },
        },
        petalFall: {
          '0%': { transform: 'translate(0, -10px) rotate(0deg)', opacity: '0' },
          '20%': { opacity: '0.8' },
          '80%': { opacity: '0.8' },
          '100%': { transform: 'translate(100px, 100vh) rotate(360deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
