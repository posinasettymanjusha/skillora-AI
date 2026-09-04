/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Main background — near-black navy
        surface: '#080A12',
        // Amber/gold primary accent (replaces blue)
        brand: {
          50: '#1a1610',
          100: '#241e14',
          200: '#332a18',
          300: '#4a3d20',
          400: '#705a30',
          500: '#9a7a3e',
          600: '#c99a3e',
          700: '#e0b04a',
          800: '#f0c050',
          900: '#f8d062',
          950: '#fde080',
        },
        // Coral/orange secondary accent (replaces green)
        accent: {
          50: '#1c1210',
          100: '#2a1815',
          200: '#3a1f1a',
          300: '#4d2820',
          400: '#7a3a2a',
          500: '#a04a30',
          600: '#d05a35',
          700: '#e87040',
          800: '#f58050',
          900: '#fa9060',
          950: '#fdaa78',
        },
        // AI violet accent
        ai: {
          50: '#12101c',
          100: '#1a1828',
          200: '#241f38',
          300: '#332a4d',
          400: '#4a3d70',
          500: '#6b5a9a',
          600: '#8a75c0',
          700: '#a895d8',
          800: '#c0b0e8',
          900: '#d4c8f0',
          950: '#e4dcf8',
        },
        // Ink ramp — INVERTED for dark theme:
        // Low numbers (50-300) = dark surfaces/borders
        // High numbers (700-950) = light text
        ink: {
          50: '#080A12',
          100: '#10131D',
          200: '#141824',
          300: '#1e2433',
          400: '#3a4252',
          500: '#6b7589',
          600: '#8b95a9',
          700: '#b0b8c8',
          800: '#d8dde6',
          900: '#eceef3',
          950: '#f8f9fb',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)',
        card: '0 1px 3px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.25)',
        pop: '0 4px 12px rgba(0, 0, 0, 0.4), 0 16px 40px rgba(0, 0, 0, 0.35)',
        glow: '0 0 20px rgba(201, 154, 62, 0.15), 0 0 40px rgba(201, 154, 62, 0.08)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.7' },
          '70%': { transform: 'scale(1.1)', opacity: '0' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        shimmer: 'shimmer 1.6s linear infinite',
        'pulse-ring': 'pulse-ring 1.8s ease-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
