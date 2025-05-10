import { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme"; // importa o theme.ts personalizado

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          className="App"
          sx={{
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <Box
            component="main"
            className="content"
            sx={{
              width: "100%",
              display: "flex",
              flexGrow: 1, // Faz o main crescer para ocupar o espaço restante
              flexDirection: "column",
              padding: 0,
              margin: 0,
              boxSizing: "border-box",
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/quemsomos" element={<AboutUs />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;