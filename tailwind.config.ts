import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      '3xs': '0.75rem',
      '2xs': '0.875rem',
      xs: '1rem',
      sm: '1.125rem',
      md: '1.25rem',
      lg: '1.5rem',
      xl: '1.75rem',
      '2xl': '2rem',
      '3xl': '2.25rem',
      '4xl': '3rem',
      '5xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          50: '#ffffff',
          100: '#f0f0ff',
          200: '#e1e2ff',
          300: '#d2d3ff',
          400: '#c3c4ff',
          500: '#b4b6ff',
          600: '#a5a7ff',
          700: '#9698ff',
          800: '#8789ff',
          900: '#787bff',
          950: '#696cff',
          DEFAULT: '#696cff',
        },
        primaryDark: {
          50: '#f2f3f8',
          100: '#e0e2ee',
          200: '#bfc1d9',
          300: '#9ea0c3',
          400: '#7e80ad',
          500: '#5e6097',
          600: '#4b4d7a',
          700: '#383a5d',
          800: '#24263f',
          900: '#101220',
          950: '#30334e',
          DEFAULT: '#30334e',
        },
        neutral: {
          50: '#FCFCFD',
          100: '#F9FAFB',
          200: '#F2F4F7',
          300: '#EAECF0',
          400: '#D0D5DD',
          500: '#98A2B3',
          600: '#667085',
          700: '#475467',
          800: '#344054',
          900: '#1D2939',
          950: '#101828',
          DEFAULT: '#101828',
        },
        error: {
          50: '#FFFBFA',
          100: '#FEF3F2',
          200: '#FEE4E2',
          300: '#FECDCA',
          400: '#FDA29B',
          500: '#F97066',
          600: '#F04438',
          700: '#D92D20',
          800: '#B42318',
          900: '#912018',
          950: '#7A271A',
          DEFAULT: '#F04438',
        },
        warning: {
          50: '#FFFCF5',
          100: '#FFFAEB',
          200: '#FEF0C7',
          300: '#FEDF89',
          400: '#FEC84B',
          500: '#FDB022',
          600: '#F79009',
          700: '#DC6803',
          800: '#B54708',
          900: '#93370D',
          950: '#7A2E0E',
          DEFAULT: '#F79009',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
