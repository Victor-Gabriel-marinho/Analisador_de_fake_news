/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins','sans-serif'],
      },
      colors: {
        fundo: '#f2f2c2',
        detalhe: '#725353',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}