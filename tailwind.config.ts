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
        black: "#000000",
        charcoal: {
          DEFAULT: "#111111",
          light: "#1a1a1a",
          medium: "#222222",
          dark: "#0a0a0a",
        },
        red: {
          DEFAULT: "#E53E3E",
          dark: "#C53030",
          bright: "#FF3B3B",
          glow: "#FF0000",
          muted: "#991B1B",
        },
        white: "#FFFFFF",
        gray: {
          100: "#F7FAFC",
          200: "#EDF2F7",
          300: "#E2E8F0",
          400: "#CBD5E0",
          500: "#A0AEC0",
          600: "#718096",
          700: "#4A5568",
          800: "#2D3748",
          900: "#1A202C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #000000 0%, #1a0a0a 50%, #000000 100%)",
        "card-gradient": "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
        "red-gradient": "linear-gradient(135deg, #E53E3E 0%, #C53030 100%)",
      },
      boxShadow: {
        "red-glow": "0 0 20px rgba(229, 62, 62, 0.5)",
        "red-glow-lg": "0 0 40px rgba(229, 62, 62, 0.4), 0 0 80px rgba(229, 62, 62, 0.2)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.6)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "pulse-red": "pulse-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ticker": "ticker 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        "pulse-red": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(229, 62, 62, 0.5)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 40px rgba(229, 62, 62, 0.8)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
