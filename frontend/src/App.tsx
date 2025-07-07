// src/App.tsx
import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme";
import ScrollToTop from "./utils/ScrollToTop";

import HomePage from "./pages/HomePage";

import CompVisionPage from "./pages/CompVisionPage";
import DocAnalisysPage from "./pages/DocAnalisysPage";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          {/* Main sem padding/margin extra */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: "100%",
              m: 0,
              p: 0,
              boxSizing: "border-box",
            }}
          >
            <Routes>
              {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route
                path="/products/comp-vision"
                element={<CompVisionPage />}
              />
              <Route
                path="/products/doc-analisys"
                element={<DocAnalisysPage />}
              />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
