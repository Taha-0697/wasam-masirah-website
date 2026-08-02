/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'stellar-navy': {
          950: '#060a12',
          900: '#081020',
          800: '#0c192e',
          700: '#13233f',
          600: '#1d3358',
        },
        'stellar-blue': {
          600: '#005bb5',
          500: '#0077c8',
          400: '#1ea1f2',
          300: '#38bdf8',
          100: '#eef7ff',
        },
        'stellar-gold': {
          500: '#d97706',
          400: '#f59e0b',
          300: '#fbbf24',
        }
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(0, 119, 200, 0.4)',
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.4)',
      }
    },
  },
  plugins: [],
}
