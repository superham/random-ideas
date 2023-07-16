import { createTheme } from "@mui/material";
// import IBMVGA from './Fonts/Web437_IBM_VGA_8x16-2x.woff'
import IBMVGA from "./fonts/WebPlus_IBM_VGA_8x16.woff";

const ibmVGA = {
  fontFamily: "IBMVGA",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "400",
  src: `
      local('IBMVGA'),
      local('IBMVGA-SemiBold'),
      url(${IBMVGA}) format('woff')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

// TODO: Add color

const theme = createTheme({
  palette: {
    primary: {
      main: "#00aa00",
    },
    background: {
      default: "#000000",
      paper: "#292929",
    },
    text: {
      primary: "#aaaaaa",
      secondary: "#00AA00",
    },
    divider: "#444444",
  },
  typography: {
    fontFamily: "IBMVGA, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'IBMVGA';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('IBMVGA'), local('IBMVGA-Regular'), url(${IBMVGA}) format('woff');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
    },
  },
});

export default theme;
