import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // "Vanilla Gray" — warm neutrals for soft luxury vibes
        vg: {
          50: "#faf9f6",
          100: "#f5f3ef",
          200: "#eae6df",
          300: "#d9d2c8",
          400: "#c3b9ad",
          500: "#a99f95",
          600: "#8e857d",
          700: "#706a63",
          800: "#544f4a",
          900: "#3c3835",
        },
      },
      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
      fontFamily: {
        // optional: install @next/font/google later
        // display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
