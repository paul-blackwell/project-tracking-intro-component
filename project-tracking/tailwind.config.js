module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xsm': {'min': '495px', 'max': '767px'}
      },
      colors: {
        primary: 'hsl(0, 100%, 68%)',
        neutral: {
          100: 'hsl(207, 33%, 95%)',
          200: 'hsl(231, 7%, 65%)',
          300: ' hsl(230, 11%, 40%)',
          400: 'hsl(230, 29%, 20%)'
        },
      },
      fontFamily: {
        body: ['Barlow Condensed']
      },
      inset: {
        heroSmall: '-30vw', // "right: -30vw or top: -30vw"
        heroMedium: '-20vw', // "right: -30vw or top: -30vw"
      },
      margin: {
        heroMedium: '30vh 0 0 0',
        headerSmall: '55vh 0 0 0',
        headerMedium: '30vh 0 0 0',
      },
      height: {
        hero: '35vh'
      },
      width: {
        hero: '140vw'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
