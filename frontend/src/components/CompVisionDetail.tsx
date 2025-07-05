// src/components/CompVisionDetail.tsx
import React, { FC } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

// Substitua pelos caminhos reais dos seus vídeos
import videoSegA from "../assets/videos/compvisiondepth.mp4";
import videoSegB from "../assets/videos/compvisionsegmentation.mp4";

interface CompVisionDetailProps {
  backgroundColor: string;
}

const CompVisionDetail: FC<CompVisionDetailProps> = ({ backgroundColor }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const BG_COLOR = backgroundColor || "#f0f0f0";

  return (
    <Box
      sx={{
        backgroundColor: BG_COLOR,
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      {/* Texto explicativo superior */}
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "60%" },
          mx: "auto",
          mb: { xs: 3, md: 5 },
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{ mb: { xs: 1.5, md: 3 }, color: "#000", textAlign: "center" }}
        >
          <strong>Visão Computacional, Segmentação & Percepção de Profundidade</strong>
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#fff", textAlign: "justify", lineHeight: 1.6 }}
        >
          Nossa plataforma de visão computacional combina segmentação de imagens e
          percepção de profundidade para oferecer análises completas de cena. Empregamos
          U-Net e Mask R-CNN para gerar máscaras precisas de objetos, e algoritmos estéreo
          ou sensores ToF para criar mapas métricos de profundidade em tempo real. Cada
          pixel recebe não apenas uma classe, mas também um valor de profundidade, permitindo
          reconstruções 3D e insights espaciais refinados. Essa fusão de técnicas viabiliza
          aplicações em robótica, agricultura de precisão, inspeção industrial e
          navegação autônoma com altíssima fidelidade.
        </Typography>
      </Box>

      {/* Dois vídeos lado a lado */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 4 },
          justifyContent: "center",
          alignItems: "center",
          mb: { xs: 3, md: 5 },
        }}
      >
        <Box
          component="video"
          src={videoSegA}
          autoPlay
          loop
          muted
          playsInline
          sx={{
            width: { xs: "100%", sm: "80%", md: "45%" },
            aspectRatio: "16/9",
            borderRadius: 2,
            boxShadow: 3,
            objectFit: "cover",
          }}
        />

        <Box
          component="video"
          src={videoSegB}
          autoPlay
          loop
          muted
          playsInline
          sx={{
            width: { xs: "100%", sm: "80%", md: "45%" },
            aspectRatio: "16/9",
            borderRadius: 2,
            boxShadow: 3,
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Texto explicativo inferior */}
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "60%" },
          mx: "auto",
          mt: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{ mb: { xs: 1.5, md: 3 }, color: "#000", textAlign: "center" }}
        >
          <strong>Aplicações e Benefícios</strong>
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#fff", textAlign: "justify", lineHeight: 1.6 }}
        >
          A união de segmentação e dados de profundidade permite diagnósticos médicos
          mais precisos, inspeções 3D de estruturas, mapeamento de vegetação em altimetria
          real e controle avançado em robótica. Com informações sobre forma e distância,
          sistemas autônomos tomam decisões mais seguras e eficientes, reduzindo erros
          e otimizando processos industriais em ambiente real.
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(CompVisionDetail);
