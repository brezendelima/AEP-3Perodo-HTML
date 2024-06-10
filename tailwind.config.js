/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        customBlue: '#EBFAFF',
        customPink: '#FFC6C2',
        customGray: '#89A6D1',
        customButton: '#959eb9',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      transitionProperty: {
        'width': 'width',
      },
    },
  },
  plugins: [],
}

