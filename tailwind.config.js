/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      colors:{
        vuejs: '#49e659', 
        thatoneway: {
          100:'#0f4e85',
          200: '#247fce'
        }
      }
    },
  },
  plugins: [],
}
