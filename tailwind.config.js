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
          DEFAULT: '#F8FAFC', // Ultra-clean light slate canvas
          surface: '#FFFFFF', // Pure white card
          subtle: '#F1F5F9', // Subtle contrast surface
          muted: '#E2E8F0', // Light border
        },
        accent: {
          DEFAULT: '#2563EB', // Premium royal blue
          hover: '#1D4ED8',
          light: '#3B82F6',
          subtle: '#EFF6FF',
          border: '#BFDBFE',
        },
        content: {
          heading: '#0F172A', // Sharp dark slate
          body: '#334155', // Balanced readable text
          muted: '#64748B', // Soft grey
          subtle: '#94A3B8',
        },
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'premium-sm': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'premium-md': '0 4px 14px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.03)',
        'premium-lg': '0 12px 30px -6px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(0, 0, 0, 0.03)',
        'accent-sm': '0 2px 10px rgba(37, 99, 235, 0.2)',
        'accent-md': '0 6px 20px rgba(37, 99, 235, 0.25)',
      }
    },
  },
  plugins: [],
}