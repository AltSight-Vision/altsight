// src/components/Footer.tsx
import React, { FC } from "react";
import { Box, Typography, Link, useTheme, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";

const Footer: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const BACKGROUND_COLOR = "#222831";

  return (
    <Box
      sx={{
        backgroundColor: BACKGROUND_COLOR,
        color: "#fff",
        py: isMobile ? 2 : 4,
      }}
    >
      <Box
        sx={{
          mx: isMobile ? "10%" : "20%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          gap: isMobile ? 4 : 8, 
        }}
      >
        {/* Coluna 1: Logo & Tagline */}
        <Box flex={1} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
            AltSight
          </Typography>
          <Typography variant="body2" sx={{ mb: 4, lineHeight: 1.6, textAlign: "center" }}>
            Revolucione seus processos com visão computacional de ponta.
          </Typography>
          <Typography variant="caption" color="grey.500" sx={{ display: "block", mb: 0.5 }}>
            © {new Date().getFullYear()} AltSight •{" "}
            <Link component={NavLink} to="/termos" sx={{ color: "grey.500", textDecoration: "underline" }}>
              Termos
            </Link>{" "}
            &{" "}
            <Link component={NavLink} to="/privacidade" sx={{ color: "grey.500", textDecoration: "underline" }}>
              Privacidade
            </Link>
          </Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default React.memo(Footer);
