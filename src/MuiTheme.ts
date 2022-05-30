import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    background: {
      default: "hsl(230, 17%, 14%)",
      paper: "hsl(280, 20%, 18%)",
    },
    primary: {
      main: "hsl(280, 20%, 18%)",
      light:"hsl(0, 0%, 100%)"
    },
    secondary: {
      main: "hsl(0, 0%, 100%)",
    },
    typography: {
      fontFamily: "Nunito Sans",
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
    },
    contrastText:'#fff'
  },
});

export const lightTheme = createTheme({
  palette: {
    type: "light",
    background: {
      default: "hsl(0,0%,96%)",
      paper: "hsl(0, 0%, 100%)",
    },
    primary: {
      main: "hsl(0, 0%, 100%)",
      light:"hsl(230, 17%, 14%)"
    },
    secondary: {
      main: "hsl(0, 0%, 52%)",
    },
    typography: {
      fontFamily: "Nunito Sans",
    },
  },
});

