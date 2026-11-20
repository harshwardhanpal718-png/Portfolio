/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7F2',
          secondary: '#F5F0E9',
          border: '#EBE5DC',
        },
        primary: {
          text: '#171923',
        },
        secondary: {
          text: '#62616A',
        },
        pastel: {
          sage: '#DCE9DF',
          mint: '#E8F1E8',
          peach: '#F9EBDD',
          blue: '#E5EEF8',
          pink: '#F4E9E7',
        },
        accent: {
          brown: '#A98468',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['Caveat', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(23, 25, 35, 0.05)',
        'soft-md': '0 8px 30px -4px rgba(23, 25, 35, 0.08)',
        'soft-lg': '0 16px 40px -6px rgba(23, 25, 35, 0.1)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
