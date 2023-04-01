/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './dist/index.html',     
],
  theme: {
    screens:{
      sm:"480px",
      
      md: "768px",
      lg: "976px",
      xlg : "1440px"


    },
    extend: {
      colors:{
        BrightRed: "hsl(12, 88%, 59%)",
        DarkBlue: "hsl(228, 39%, 23%)",
        DarkGrayisBlue:"hsl(227, 12%, 61%)",
        VeryDarkBlue: "hsl(233, 12%, 13%)",
        VeryPaleRed: "hsl(13, 100%, 96%)",
        VaryLightGray: "hsl(0, 0%, 98%)",
      }
    },
  },
  plugins: [],
}
