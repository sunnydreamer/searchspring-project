/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'banner': "url('/src/images/banner3.jpg')",

      })


    },
  },
  plugins: [],
}

