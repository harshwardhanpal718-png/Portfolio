/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: '#FAF8F5',          // Soft warm ivory / cream
          secondary: '#F3EFEA',   // Secondary warm linen
          card: '#FFFFFF',        // Pure crisp white cards
          cardHover: '#FCFAF7',
          border: '#E8DFD5',      // Soft warm brown-sand border
          borderHover: '#C4A88E',
        },
        coffee: {
          50: '#FAF6F2',
          100: '#F3EAE0',
          200: '#E4D3C0',
          300: '#D2B79B',
          400: '#B89370',
          500: '#9B714B',
          600: '#7E5331',         // Primary warm rich brown
          700: '#643F23',
          800: '#462A16',         // Dark espresso brown
          900: '#2A170B',         // Deepest roast
          950: '#1A0E06',
        },
        ink: {
          primary: '#1C1612',     // Primary rich dark text
          muted: '#63564C',       // Muted warm text
          subtle: '#8C7C70',      // Lighter tertiary text
        }
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'warm-sm': '0 1px 3px rgba(42, 23, 11, 0.05), 0 1px 2px rgba(42, 23, 11, 0.03)',
        'warm-md': '0 4px 16px -2px rgba(69, 45, 27, 0.08), 0 2px 6px -1px rgba(69, 45, 27, 0.04)',
        'warm-lg': '0 12px 30px -4px rgba(69, 45, 27, 0.12), 0 4px 12px -2px rgba(69, 45, 27, 0.06)',
      }
    },
  },
  plugins: [],
}
