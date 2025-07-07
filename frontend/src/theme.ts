// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#34a8d7",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1c617e",
      contrastText: "#ffffff",
    },

    // fundo clarinho para destacar o primário
    background: {
      default: "#f0f8fd", // tom suave de azul-claro
      paper: "#ffffff", // branco para componentes
    },

    // texto escuro, mas com um toque de azul-escuro
    text: {
      primary: "#023047", // quase marinho
      secondary: "rgba(2, 48, 71, 0.7)", // mesma base, 70% de opacidade
    },

    // cores de status em tons que casam com o azul/ciano
    error: {
      main: "#d32f2f", // vermelho ligeiramente inclinado ao marrom
      contrastText: "#ffffff",
    },
    warning: {
      main: "#f9a825", // amarelo-ouro
      contrastText: "#000000",
    },
    info: {
      main: "#29b6f6", // azul-claro vibrante
      contrastText: "#000000",
    },
    success: {
      main: "#66bb6a", // verde claro
      contrastText: "#ffffff",
    },
  },

  typography: {
    fontFamily: `"Poppins", sans-serif`,

    h4: {
      fontWeight: 800,
      fontSize: "1.5rem",
      "@media (min-width:600px)": { fontSize: "1.75rem" },
      "@media (min-width:900px)": { fontSize: "2.25rem" },
      "@media (min-width:1200px)": { fontSize: "2.75rem" },
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "0.9rem",
      "@media (min-width:600px)": { fontSize: "1rem" },
      "@media (min-width:900px)": { fontSize: "1.125rem" },
      lineHeight: 1.8,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: "0.8rem",
      "@media (min-width:600px)": { fontSize: "0.9rem" },
      "@media (min-width:900px)": { fontSize: "1rem" },
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: "100vh",
          backgroundColor: "#f0f8fd",
          color: "#023047",
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
          // deixa todos <strong> no tom de primary
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
