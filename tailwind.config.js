/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#312651",
        secondary: "#444262",
        tertiary: "#FF7754",
        gray: "#83829A",
        gray2: "#C1C0C8",
        white: "#F3F4F8",
        lightWhite: "#FAFAFC",
      },
      fontFamily: {
        regular: ["DMRegular"],
        medium: ["DMMedium"],
        bold: ["DMBold"],
      },
      fontSize: {
        xSmall: "10px",
        small: "12px",
        medium: "16px",
        large: "20px",
        xLarge: "24px",
        xxLarge: "32px",
      },
      boxShadow: {
        small: "0px 2px 3.84px rgba(0, 0, 0, 0.25)",
        medium: "0px 2px 5.84px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
