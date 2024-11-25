const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#0FF1F6",
        secondary:"#E9EEF1",
        similar:"#14BCB2",

      },
      fontFamily: { 
        work: `"Work Sans", "sans-serif"`,
        mon: `"Montserrat", sans-serif`,
       },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

