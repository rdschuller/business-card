/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter']
      },
      colors: {
        'back': '#1A1B21',
        'role': '#F3BF99',
        'head': '#F5F5F5',
        'para': '#DCDCDC',
        'link': '#5093E2'
      }
    },
  },
  plugins: [],
}