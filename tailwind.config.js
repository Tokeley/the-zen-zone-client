module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'md': '1032px'
    },
    extend: {
      colors: {
        cream: "#dbd7c7",
        gray: "#424242",
        lightGray: "#706d6d", 
        darkGray: "#1f1e1e"
      },
      fontFamily: {
        titleFont: ['Cormorant']
      },
    },
  },
  plugins: [],
}
