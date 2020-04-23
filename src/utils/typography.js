import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["300", "300i", "700"],
    },
    {
      name: "Roboto Slab",
      styles: ["700"],
    },
  ],
  headerFontFamily: ["Roboto Slab", "serif"],
  bodyFontFamily: ["Montserrat", "sans-serif"],
})

export default typography
