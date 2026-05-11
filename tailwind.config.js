/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        heading: ['Barlow Condensed', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        steel: {
          50: '#f0f4fb',
          100: '#dde6f5',
          200: '#c0d0e8',
          300: '#96b1d4',
          400: '#6a90bc',
          500: '#4870a4',
          600: '#3b5a8a',
          700: '#2d4470',
          800: '#1e2f56',
          900: '#111b3c',
          950: '#080f28',
        },
        amber: {
          400: '#4a9de8',
          500: '#1a6dd4',
          600: '#145cb8',
        },
        rust: '#c0392b',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(26,109,212,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(26,109,212,0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
