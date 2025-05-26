// src/components/HeroAux.tsx
import React, { FC } from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import heroVideo from "../assets/videos/hero-video.mp4";

interface HeroAuxProps {
  backgroundColor: string;
}

const HeroAux: FC<HeroAuxProps> = ({ backgroundColor }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "25vh", sm: "35vh", md: "45vh" },
        position: "relative",
        overflow: "hidden",
        backgroundColor,
      }}
    >
      {/* Vídeo de fundo com máscara para fade */}
      <Box
        component="video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          maskImage: `linear-gradient(to bottom, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%)`,
          WebkitMaskImage: `-webkit-linear-gradient(top, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%)`,
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
          pointerEvents: "none",
        }}
      />

      {/* Conteúdo do HeroAux */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 1, sm: 2, md: 4 },
          textAlign: "center",
          color: theme.palette.primary.main,
          zIndex: 1,
        }}
      >

      </Box>
    </Box>
  );
};

export default React.memo(HeroAux);
