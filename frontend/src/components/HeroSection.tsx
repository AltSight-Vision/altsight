// src/components/HeroSection.tsx
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

interface HeroSectionProps {
  backgroundColor: string;
}

const HeroSection: FC<HeroSectionProps> = ({ backgroundColor }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "60vh", sm: "75vh", md: "100vh" },
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

      {/* Conteúdo do HeroSection */}
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
        {/* Título principal */}
        <Typography
          variant={isMobile ? "h4" : "h1"}
          gutterBottom
          sx={{
            position: "relative",
            display: "inline-block",
            textTransform: "uppercase",
            letterSpacing: { xs: "0.1em", sm: "0.15em", md: "0.2em" },
            fontWeight: 400,
            fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
            backgroundImage:
              "linear-gradient(45deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
            backdropFilter: "blur(12px)",
            px: { xs: 2, sm: 3 },
            py: { xs: 0.5, sm: 1 },
            borderRadius: "10px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.6)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            color: theme.palette.secondary.main,
          }}
        >
          AltSight
        </Typography>
        {/* Subtítulo */}
        <Typography
          variant={isMobile ? "body2" : "h6"}
          sx={{
            mb: 4,
            maxWidth: { xs: "90%", sm: "70%", md: "600px" },
            fontSize: { xs: "1rem", sm: "1.5rem", md: "1.75rem" },
            lineHeight: 1.5,
            textTransform: "none",
            fontWeight: 700, // fonte mais grossa
            color: theme.palette.primary.main,
            WebkitTextStroke: "1px #000",
          }}
        >
          Descubra aqui todas as soluções para seus projetos.
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(HeroSection);
