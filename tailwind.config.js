/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          bg: '#051F20',         // Primary Background
          secondary: '#0B2B26',  // Secondary Background
          card: '#163832',       // Card Background
          accent: '#235347',     // Primary Accent
          sage: '#8EB69B',       // Secondary Accent
          mint: '#DAF1DE',       // Primary Text
        }
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'forest-sm': '0 2px 8px rgba(5, 31, 32, 0.4)',
        'forest-md': '0 4px 20px rgba(5, 31, 32, 0.6), 0 0 1px rgba(142, 182, 155, 0.2)',
        'forest-lg': '0 12px 32px rgba(5, 31, 32, 0.75), 0 0 20px rgba(142, 182, 155, 0.08)',
        'sage-glow': '0 0 20px rgba(142, 182, 155, 0.15)',
      }
    },
  },
  plugins: [],
}
