/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        comforter:['Fuggles', 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],
}
