/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        encanto: {
          yellow: '#FFD166',
          green: '#06D6A0',
          blue: '#118AB2',
          lightYellow: '#FFF3D4',
          lightGreen: '#E6F9F5',
          lightBlue: '#E7F3F7',
          dark: '#073B4C'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
