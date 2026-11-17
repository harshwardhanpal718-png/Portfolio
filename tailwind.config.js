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
          DEFAULT: '#FAFAF9', // Ultra-premium warm alabaster / off-white
          surface: '#FFFFFF', // Pure crisp white card
          subtle: '#F4F4F5',  // Subtle zinc contrast
          muted: '#E4E4E7',   // Whisper-thin border
        },
        onyx: {
          DEFAULT: '#09090B', // Deep Obsidian Black
          hover: '#27272A',
          muted: '#3F3F46',
        },
        content: {
          heading: '#09090B', // Pitch black headings
          body: '#3F3F46',    // High readability dark neutral
          muted: '#71717A',   // Refined secondary text
          subtle: '#A1A1AA',
        },
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'premium-xs': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'premium-sm': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'premium-md': '0 4px 14px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.02)',
        'premium-lg': '0 12px 30px -6px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(0, 0, 0, 0.02)',
        'onyx-sm': '0 2px 10px rgba(9, 9, 11, 0.15)',
      }
    },
  },
  plugins: [],
}