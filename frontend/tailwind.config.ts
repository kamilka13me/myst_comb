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
      },
      fontFamily: {
        "ibm-plex-sans": ["IBM Plex Sans", "sans-serif"],
        "ibm-plex-serif": ["IBM Plex Serif", "serif"],
      },
      fontSize: {
        s: "18px",
        l: "24px",
        "3xl": "36px",
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
