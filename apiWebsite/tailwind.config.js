/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'weihbg': "url('./../public/Weihnachtshintergrund.jpg')",
      },
      colors: {
        'rose-bg': '#DBAAC5'
      },
      fontFamily: {
        lobster: '"Lobster Two"',
        koulen: '"Koulen"'      
      },

    },
  },
  plugins: [],
}

