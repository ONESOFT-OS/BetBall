/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontFamily:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },

    colors:{
      transparent: 'transparent',
      white: '#FFF',
      black: '#000',

      slate:{
        50: '#D9D9D9'
      },
      
      gray:{
       900: '#17181F',
       800: '#1E1E1E',
       500: '#636364'
      },

      green:{
        900:'#223707',
        700: '#78BA22',
        500: '#8EC04D'
      },
      
    },

    extend: {
      fontFamily:{
        sans: 'Raleway, sans-serif'
      }
    },
  },
  plugins: [],
}
