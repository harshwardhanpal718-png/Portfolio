/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          bg: '#06070D',
          secondary: '#0B0D16',
          card: '#101321',
          surface: '#15192c',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        accent: {
          violet: '#7C3AED',
          cyan: '#06B6D4',
          amber: '#F59E0B',
        },
        text: {
          light: '#F8FAFC',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'obsidian-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'cyan-glow': '0 0 25px rgba(6, 182, 212, 0.35)',
        'violet-glow': '0 0 25px rgba(124, 58, 237, 0.35)',
        'amber-glow': '0 0 25px rgba(245, 158, 11, 0.35)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'float 8s ease-in-out infinite 2s',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};
