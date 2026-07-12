import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          onyx: "#1C1C1C",
          gold: "#C9A96E",
          ivory: "#FAF7F2",
          charcoal: "#2C2C2C",
          linen: "#F5F0E8",
          sand: "#E8E0D4",
          champagne: "#D4C5B0",
          graphite: "#3D3D3D",
          antiqueGold: "#B8860B",
          deepAmber: "#8B6914",
          sienna: "#A0522D",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-montserrat)", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        subtle: "4px",
        default: "8px",
        soft: "16px",
        round: "24px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.04)",
        cardHover: "0 8px 32px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;