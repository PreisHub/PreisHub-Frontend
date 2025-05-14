import type { Config } from "tailwindcss";

const FONT_FAMILY = "'Plus Jakarta Sans', sans-serif";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [FONT_FAMILY],
      },
      colors: {
        brand: {
          50: "#FFF5F5", // very light
          100: "#FFE3E3",
          200: "#FFBDBD",
          300: "#FF9999",
          400: "#FF4A57", // light brand
          500: "#D7000F", // main brand
          600: "#B8000D",
          700: "#A3000B", // dark brand
          800: "#7A0009",
          900: "#520006", // very dark
        },
        neutral: {
          900: "#0F172A", // dark text
          700: "#334155",
          500: "#64748B",
          300: "#CBD5E1",
          100: "#F1F5F9", // light bg
        },
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontSize: {
        display1: ["4.5rem", { lineHeight: "1.4" }],
        display2: ["4rem", { lineHeight: "1.4" }],
        display3: ["3.5rem", { lineHeight: "1.4" }],
        title2: ["3rem", { lineHeight: "1.4" }],
        title3: ["2.25rem", { lineHeight: "1.4" }],
        heading1: ["1.875rem", { lineHeight: "1.4" }],
        heading2: ["1.5rem", { lineHeight: "1.4" }],
        heading3: ["1.25rem", { lineHeight: "1.4" }],
        body1: ["1.125rem", { lineHeight: "1.4" }],
        body2: ["1rem", { lineHeight: "1.4" }],
        body3: ["0.875rem", { lineHeight: "1.4" }],
        caption1: ["0.75rem", { lineHeight: "1.4" }],
        caption2: ["0.625rem", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [],
};

export default config;
