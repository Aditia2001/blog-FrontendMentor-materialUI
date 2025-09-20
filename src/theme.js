import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import FigtreeMedium from "./assets/Fonts/Figtree-Medium.ttf";
import FigtreeExtraBold from "./assets/Fonts/Figtree-ExtraBold.ttf";

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    yellow: "#F4D04E",
    gray950: "#111111",
    gray500: "#6B6B6B",
  },
  warnaku: {
    kuning: "#F4D04E",
  },
  // typography: {
  //   fontFamily: ["Figtree-Medium", "Figtree-ExtraBold"],
  // },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Figtree-Medium";
          font-style: normal;
          font-weight: normal;
          src: local('Raleway'), local('Raleway-Regular'), url(${FigtreeMedium}) format('truetype');
        }
        @font-face {
          font-family: "Figtree-ExtraBold";
          font-style: normal;
          font-weight: normal;
          src: local('Raleway'), local('Raleway-Regular'), url(${FigtreeExtraBold}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

export default theme;
