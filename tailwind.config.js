module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'md': '950px'
    },
    extend: {
      colors: {
        cream: "#dbd7c7",
        gray: "#424242",
        lightGray: "#706d6d"
      },
      fontFamily: {
        titleFont: ['Cormorant']
      },
    },
  },
  plugins: [],
}
