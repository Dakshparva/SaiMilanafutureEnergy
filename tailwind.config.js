/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-up': 'slide-up 1s ease-out forwards',
        'bounce-in': 'bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
      },
    },
  },
  plugins: [],
};