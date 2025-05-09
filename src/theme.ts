import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#213448",       // Azul escuro
      light: "#547792",      // Azul intermediário
      contrastText: "#ECEFCA", // Verde muito claro como texto sobre primário
    },
    secondary: {
      main: "#94B4C1",       // Azul claro
      contrastText: "#213448",
    },
    background: {
      default: "#ECEFCA",    // Verde pálido
      paper: "#ffffff",
    },
    text: {
      primary: "#213448",    // Azul escuro
      secondary: "#547792",  // Azul intermediário
    },
    success: {
      main: "#94B4C1",       // Azul claro como tom suave de sucesso
    },
    warning: {
      main: "#E1C16E",       // Amarelo discreto (adicionado para robustez)
    },
    error: {
      main: "#B00020",       // Padrão de erro do MUI
    },
    info: {
      main: "#547792",       // Azul intermediário
    },
    divider: "#94B4C1",
  },
  typography: {
    fontFamily: `"Raleway", "Helvetica", "Arial", sans-serif`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(135deg, #213448, #547792)",
          color: "#213448",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontWeight: 600,
          textTransform: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
        },
      },
    },
  },
});

export default theme;
