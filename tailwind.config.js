/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["'Poppins'", "sans-serif"],
    },
    screens: {
      // sm: '480px',
      sm: '350px',
      // => @media (min-width: 350px) { ... }
      
      md: '768px',
      // => @media (min-width: 768px) { ... }
      
      lg: '976px',
      // => @media (min-width: 976px) { ... }
      
      xl: '1440px',
      // => @media (min-width: 1440px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        cream: '#FFF6DD',

        myriadShadeOne: '#F68E35',
        myriadShadeTwo: '#FAA53A',
        myriadShadeThree: '#FFC335',
        myriadShadeFour: '#FDE585',
      },
    },
  },
  plugins: [],
}

