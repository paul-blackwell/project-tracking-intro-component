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
      height: {
        test: '50vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
