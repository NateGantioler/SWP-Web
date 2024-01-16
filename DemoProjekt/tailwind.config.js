/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'weihbg': "url('./../public/Weihnachtshintergrund.jpg')",
      }
    },
  },
  plugins: [],
}

