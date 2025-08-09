// src/components/CompVisionSection.tsx
import React, { FC } from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import sectionVideo1 from "../assets/videos/compvisionsegmentation.mp4";
import sectionVideo2 from "../assets/videos/compvisiondepth.mp4";
import { motion } from "framer-motion";

interface CompVisionSectionProps {
  backgroundColor: string;
}

const CompVisionSection: FC<CompVisionSectionProps> = ({ backgroundColor }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const textVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.8,
      },
    },
  };
  const imgVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  // esses offsets e cálculos continuam válidos para desktop
  const offsets = { xs: 40, sm: 40, md: 80, lg: 120 };
  const widths = { xs: "80vw", sm: 180, md: 280, lg: 360 };
  const wrapperHeights = {
    xs: `calc(${widths.xs} * 9/16 + ${offsets.xs}px)`,
    sm: `calc(${widths.sm}px * 9/16 + ${offsets.sm}px)`,
    md: `calc(${widths.md}px * 9/16 + ${offsets.md}px)`,
    lg: `calc(${widths.lg}px * 9/16 + ${offsets.lg}px)`,
  };
  const videoHeights = {
    xs: `calc(100% - ${offsets.xs}px)`,
    sm: `calc(100% - ${offsets.sm}px)`,
    md: `calc(100% - ${offsets.md}px)`,
    lg: `calc(100% - ${offsets.lg}px)`,
  };

  const bg = backgroundColor || "#f0f0f0";

  return (
    <Box
      sx={{
        backgroundColor: bg,
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
      }}
    >
      <Box
        sx={{
          mx: { xs: "5%", sm: "8%", md: "10%", lg: "15%" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 3, sm: 5, md: 7 },
          color: "#fff",
        }}
      >
        {/* Vídeos */}
        {isMobile ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imgVariants}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box
              component="video"
              src={sectionVideo1}
              autoPlay
              loop
              muted
              playsInline
              sx={{
                width: "100%",
                aspectRatio: "16/9",
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
            <Box
              component="video"
              src={sectionVideo2}
              autoPlay
              loop
              muted
              playsInline
              sx={{
                width: "100%",
                aspectRatio: "16/9",
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imgVariants}
            style={{ flex: 1, display: "flex" }}
          >
            <Box
              sx={{
                position: "relative",
                width: widths,
                height: wrapperHeights,
              }}
            >
              {/* vídeo de baixo */}
              <Box
                component="video"
                src={sectionVideo1}
                autoPlay
                loop
                muted
                playsInline
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: videoHeights,
                  objectFit: "cover",
                }}
              />
              {/* vídeo de cima */}
              <Box
                component="video"
                src={sectionVideo2}
                autoPlay
                loop
                muted
                playsInline
                sx={{
                  position: "absolute",
                  top: {
                    xs: `${offsets.xs}px`,
                    sm: `${offsets.sm}px`,
                    md: `${offsets.md}px`,
                    lg: `${offsets.lg}px`,
                  },
                  left: {
                    xs: `${offsets.xs}px`,
                    sm: `${offsets.sm}px`,
                    md: `${offsets.md}px`,
                    lg: `${offsets.lg}px`,
                  },
                  width: "100%",
                  height: videoHeights,
                  objectFit: "cover",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                  zIndex: 1,
                }}
              />
            </Box>
          </motion.div>
        )}

        {/* Texto + botão */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          style={{ flex: 1 }}
        >
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              mt: { xs: 3, md: 0 },
              maxWidth: { xs: "100%", md: "100%" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Typography
              variant={isMobile ? "h5" : "h4"}
              sx={{ mb: { xs: 2, md: 8 } }}
            >
              <strong>Visão Computacional</strong>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 4 },
                textAlign: "justify",
              }}
            >
              A Visão Computacional está transformando a forma como máquinas
              entendem o mundo visual. Seja para automatizar processos
              industriais, monitorar ambientes em tempo real, analisar imagens
              aéreas ou otimizar operações com inteligência artificial, essa
              tecnologia abre novas possibilidades para empresas que buscam
              inovação com eficiência. Na nossa equipe, aplicamos algoritmos
              avançados para extrair informações valiosas de imagens e vídeos,
              criando soluções sob medida que vão desde detecção de objetos e
              análise de qualidade até reconhecimento de padrões e reconstrução
              3D. Atuamos em diversos setores como{" "}
              <strong>
                agronegócio, logística, saúde, segurança, varejo e indústria
              </strong>{" "}
              .
            </Typography>

            <Button
              component={NavLink}
              to="/products/comp-vision"
              startIcon={<ArrowForwardIcon />}
              sx={{
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 0.6, sm: 1, md: 1.5 },
                color: "#fff",
                bgcolor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(6px)",
                borderRadius: "12px",
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.2)",
                  transform: "translateX(8px)",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
                },
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Saiba Mais
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default React.memo(CompVisionSection);
