module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'lg': '1200px',
      'md': '1052px',
      'page-width': '1050px',
      'sm': '640px',
      'xs': '430px'
    },
    extend: {
      colors: {
        cream: "#dbd7c7",
        gray: "#424242",
        lightGray: "#706d6d", 
        darkGray: "#1f1e1e"
      },
      fontFamily: {
        titleFont: ['Cormorant'],
        headingFont: ['Cabin']
      },
    },
  },
  plugins: [require("daisyui")],
}
