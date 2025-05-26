// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#fb8500",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffb703",
      contrastText: "#ffffff",
    },
    background: {
      default: "#023047",
      paper: "#023047",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
    error: {
      main: "#B00020",
    },
    warning: {
      main: "#E1C16E",
    },
    success: {
      main: "#3e8e63",
    },
    info: {
      main: "#2b9693",
    },
  },

  typography: {
    // Usa Exo 2. O browser já o carregou via <link> no index.html
    fontFamily: `"Exo 2", sans-serif`,

    h4: {
      fontWeight: 800,
      fontSize: "1.5rem", // xs
      "@media (min-width:600px)": {
        fontSize: "1.75rem", // sm
      },
      "@media (min-width:900px)": {
        fontSize: "2.25rem", // md
      },
      "@media (min-width:1200px)": {
        fontSize: "2.75rem", // lg
      },
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "0.9rem", // xs
      "@media (min-width:600px)": {
        fontSize: "1rem", // sm
      },
      "@media (min-width:900px)": {
        fontSize: "1.125rem", // md+
      },
      lineHeight: 1.8,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: "0.8rem", // xs
      "@media (min-width:600px)": {
        fontSize: "0.9rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1rem",
      },
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: "100vh",
          backgroundColor: "#023047",
          color: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& strong": {
            color: theme.palette.primary.main,
            fontWeight: 800,
          },
        }),
      },
    },
  },
});

export default theme;
