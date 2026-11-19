/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#050505',
          secondary: '#0B0B0B',
          card: '#111111',
          surface: '#161616',
          border: '#242424',
        },
        crimson: {
          DEFAULT: '#C81024',
          light: '#E31B32',
          dark: '#9B0B1B',
          subtle: 'rgba(200, 16, 36, 0.15)',
          glow: 'rgba(200, 16, 36, 0.25)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Bebas Neue"', 'Anton', 'sans-serif'],
        script: ['Caveat', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'crimson-card': '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px #242424',
        'crimson-glow': '0 0 35px rgba(200, 16, 36, 0.35)',
        'crimson-button': '0 10px 25px rgba(200, 16, 36, 0.4)',
      },
    },
  },
  plugins: [],
};
