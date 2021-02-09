module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
      margin: {
        hero: '0 0 0 20vw',
        header: '55vh 0 0 0',
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
