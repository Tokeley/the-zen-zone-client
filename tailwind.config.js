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
        offwhite: "#E5E4E2",
        gray: "#424242",
        lightGray: "#4A4737", 
        darkGray: "#4A4737"
      },
      fontFamily: {
        titleFont: ['Cormorant'],
        headingFont: ['Cabin']
      },
    },
  },
  plugins: [require("daisyui")],
}
