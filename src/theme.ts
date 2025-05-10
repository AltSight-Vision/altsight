// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#105744",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#2b9693",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f0faf0", // Cor sólida fallback
      paper: "#105744", // Cor sólida fallback
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
    error: { main: "#B00020" },
    warning: { main: "#E1C16E" },
    success: { main: "#3e8e63" },
    info: { main: "#2b9693" },
  },
  typography: {
    fontFamily: `"Raleway", sans-serif`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // só garante que o body ocupe toda a altura
        body: {
          minHeight: "100vh",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          textTransform: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          // o background do Paper já vai ser o `palette.background.paper`
        },
      },
    },
  },
});

export default theme;
