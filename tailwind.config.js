/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mp: {'min': '0px', 'max': '640px'},
        ml: {'min': '481px', 'max': '768px'},
        tp: {'min': '769px', 'max': '834px'},
        tl: {'min': '835px', 'max': '1024px'},
        mx: {'min': '1025px', 'max': '1440px'},
      },

      fontSize: {
        tMo: '36px',
      }
    },
  },
  plugins: [],
}

