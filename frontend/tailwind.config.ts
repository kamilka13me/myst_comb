import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/vievs/**/*.{js,ts,jsx,tsx,mdx}',
    './src/vievs/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/ui/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px', // Small screens
        md: '768px', // Medium screens
        lg: '1024px', // Large screens
        xl: '1280px', // Extra large screens
        '2xl': '1536px', // 2X extra large screens
      },
      colors: {
        'base-text_accent': '#151515',
        'base-stroke-btn-act': '#B6B6B6',
        'base-bg-block': '#FFF',
        'base/BG_card': 'rgba(21, 21, 21, 0.03)',
        BG_card_dark: '#1C1C1C',
        'base-text_light_2': '#616161',
        'base-text_light': '#DCDCDC',
        'base-text_dark': '#474747',
        'base-text': '#E8E8E8',
        'icons-symbols-blue-200': '#9E92EE',
        'icons_symbols-blue_500': '#2C05F2',
        'icons-symbols-mint-500': '#0F9',
        'icons-symbols-purple-300': '#Eb99FF',
        'icons-symbols-purple-400': '#D633FF',
        'icons-symbols-orange-200': '#ffb899',
        'icons-symbols-orange-500': '#FF4E00',
        'icons-symbols-yellow-500': '#E7FF00',
        'icons-symbols-yellow-300': '#F1FF66',
        'white-translucent': 'rgba(255, 255, 255, 0.03)',
        'base-title': 'rgba(255, 255, 255, 0.03)',
      },
      fontFamily: {
        'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif'],
        'ibm-plex-serif': ['IBM Plex Serif', 'serif'],
        'fixel-display': ['"Fixel Display"', 'sans-serif'],
      },
      fontSize: {
        '3xs': ['12px', '13.2px'],
        '2xs': ['14px', '18.9px'],
        xs: '16px',
        s: '18px',
        l: '24px',
        '2xl': '32px',
        '3xl': '36px',
        '4xl': '48px',
        '7xl': '70px',
      },
      lineHeight: {
        '125': '125%',
        '135': '135%',
        '115': '115%',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-10vw)' },
          '100%': { transform: 'translateX(110vw)' },
        },
      },
      animation: {
        slide: 'slide 10s linear infinite', // 5s - час анімації
      },
      boxShadow: {
        hover_btn: '0 2px 2px 0 rgba(0, 0, 0, 0.25)',
        'user-card': '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.animate-slide': {
          animation: 'slide 10s linear infinite',
        },
      });
    }),
  ],
};
export default config;
