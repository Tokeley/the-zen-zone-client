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
        offwhite: "#e0e0e0",
        gray: "#424242",
        lightGray: "#424242", 
        darkGray: "#424242",
        nicewhite: "#eeeeee"
      },
      fontFamily: {
        titleFont: ['Cormorant'],
        headingFont: ['Cabin']
      },
    },
  },
  plugins: [require("daisyui")],
}
