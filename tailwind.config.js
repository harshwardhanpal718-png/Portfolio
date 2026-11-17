/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0D14', // Deep charcoal / near black
          secondary: '#0F131D',
          card: '#121724',
          cardHover: '#161D2E',
          surface: '#182032',
        },
        accent: {
          DEFAULT: '#3B82F6', // Blue accent
          hover: '#2563EB',
          light: '#60A5FA',
          muted: 'rgba(59, 130, 246, 0.15)',
        },
        text: {
          primary: '#F8FAFC', // White
          secondary: '#94A3B8', // Soft grey
          muted: '#64748B',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(59, 130, 246, 0.35)',
        }
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'accent-sm': '0 2px 10px rgba(59, 130, 246, 0.2)',
        'accent-md': '0 6px 20px rgba(59, 130, 246, 0.25)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.35)',
      }
    },
  },
  plugins: [],
}