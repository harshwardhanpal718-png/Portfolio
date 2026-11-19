/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#03001e',
          surface: 'rgba(255, 255, 255, 0.03)',
          card: 'rgba(255, 255, 255, 0.04)',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.2)',
          purple: '#7300ff',
          pink: '#ec38bc',
          cyan: '#00f2fe',
        },
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1', filter: 'brightness(1.2)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'float 7s ease-in-out infinite 1s',
        pulseGlow: 'pulseGlow 2s infinite',
      },
      boxShadow: {
        'cyber-purple': '0 10px 30px rgba(115, 0, 255, 0.3)',
        'cyber-pink': '0 15px 35px rgba(236, 56, 188, 0.4)',
        'cyber-cyan': '0 0 25px rgba(0, 242, 254, 0.4)',
        'glass-card': '0 10px 30px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}