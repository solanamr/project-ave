/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      mlg: "1130px",
      xl: "1440px"
    },
    colors: {
      black: "#000",
      blue: "#0C0535",
      blueLight: "#0B0051",
      white: "#fff",
      grey: "#252D39",
      otherBlue: "#3CCFCF",
      kindaBlack: "#252733",
      lightGrey: "#9FA2B4",
      blueGrey: "#374557",

      orange: "#FF9E0F",
      orangeLight: "#FFB13F",
      red: "#FD2816",
      redLight: "#FD2F1E",
      green: "#4CBC9A",
      greenLight: "#8CCA24",
      yellow: "#FEC64F",
      greyLight: "#F0F1F7",
      greyBackground: "#FAFAFA",
      greyBorder: "#e2e2e2",
      greyText: "#A098AE",
      searchBlue: "#0C4969",
      searchPrice: "#03889B",
      icon: "#C6C6C6",
      a: "#FCFCFC",
      suscriptionText: "#686868"
    },
    fontFamily: {
       sans: ["Roboto ", "sans-serif !important"],
    },
    extend: {},
  },
  plugins: [],
}
