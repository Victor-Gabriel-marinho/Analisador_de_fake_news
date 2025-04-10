/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js, jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins','sans-serife'],
      },
      colors: {
        fundo: '#f2f2c2',
      },
    },
  },
  plugins: [],
}

