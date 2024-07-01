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
        offwhite: "#f5f5f4",
        gray: "#e2e2e2",
        lightGray: "#e2e2e2", 
        darkGray: "#e2e2e2"
      },
      fontFamily: {
        titleFont: ['Cormorant'],
        headingFont: ['Cabin']
      },
    },
  },
  plugins: [require("daisyui")],
}
