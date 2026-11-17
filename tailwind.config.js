/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#0E0B16',
          surface: '#151022',
          card: '#181228',
          hover: '#1F1735',
          border: 'rgba(71, 23, 246, 0.25)',
          borderHover: 'rgba(162, 57, 202, 0.5)',
        },
        fuschia: {
          DEFAULT: '#A239CA',
          light: '#B755DB',
          dark: '#8624AC',
        },
        jewel: {
          DEFAULT: '#4717F6',
          light: '#6134F8',
          dark: '#350EC5',
        },
        stark: {
          DEFAULT: '#E7DFDD',
          muted: '#A99F9D',
          subtle: '#786F6E',
        }
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'jewel-sm': '0 2px 10px rgba(71, 23, 246, 0.2)',
        'jewel-md': '0 6px 20px rgba(71, 23, 246, 0.3)',
        'fuschia-glow': '0 0 25px rgba(162, 57, 202, 0.25)',
        'purple-glow': '0 0 30px rgba(71, 23, 246, 0.18)',
      }
    },
  },
  plugins: [],
}
