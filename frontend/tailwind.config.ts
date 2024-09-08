import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/vievs/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-text_accent": "#151515",
        "base-stroke-btn-act": "#B6B6B6",
        "base-bg-block": "#FFF",
        "base/BG_card": "rgba(21, 21, 21, 0.03)",
        "base-text_light_2": "#616161",
        "icons_symbols-blue_500": "#2C05F2",
      },
      fontFamily: {
        "ibm-plex-sans": ["IBM Plex Sans", "sans-serif"],
        "ibm-plex-serif": ["IBM Plex Serif", "serif"],
      },
      fontSize: {
        s: "18px",
        l: "24px",
        "2xl": "32px",
        "3xl": "36px",
        "4xl": "48px",
        "7xl": "70px",
      },
      lineHeight: {
        "135": "135%",
        "115": "115%",
      },
    },
  },
  plugins: [],
};
export default config;
