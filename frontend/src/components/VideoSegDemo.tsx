// src/components/VideoSegDemo.tsx
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
import sectionVideo from "../assets/videos/compvisionsegmentation.mp4";
import { motion } from "framer-motion";

interface VideoSegDemoProps {
  backgroundColor: string;
}

const VideoSegDemo: FC<VideoSegDemoProps> = ({
  backgroundColor,
}) => {
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

  const BACKGROUND_COLOR = backgroundColor || "#f0f0f0";

  return (
    <Box
      sx={{
        backgroundColor: BACKGROUND_COLOR,
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
      }}
    >
      <Box
        sx={{
          mx: {
            xs: "5%",
            sm: "8%",
            md: "10%",
            lg: "15%",
          },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 3, sm: 5, md: 7 },
          color: "#fff",
          overflow: "hidden",
        }}
      >
        {/* Vídeo vertical (razão 9:16) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imgVariants}
          style={{ flex: 1, display: "flex", justifyContent: "center" }}
        >
          <Box
            component="video"
            src={sectionVideo} // substitua por sua variável de vídeo
            autoPlay
            loop
            muted
            playsInline
            sx={{
              width: {
                xs: "80vw", // ocupa 80vw em mobile
                sm: 180,
                md: 280,
                lg: 360,
              },
              aspectRatio: "9 / 16", // mantém 9:16
              objectFit: "cover", // preenche sem distorcer
              borderRadius: 0,
            }}
          />
        </motion.div>

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
              maxWidth: { xs: "80vw", sm: "80vw", md: "100%" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            {/* O tema já define o tamanho responsivo para h4 */}
            <Typography
              variant={isMobile ? "h5" : "h4"}
              sx={{ mb: { xs: 2, md: 8 } }}
            >
              <strong>Segmentação de Imagens</strong>
            </Typography>

            {/* O tema já define o tamanho responsivo para body1 */}
            <Typography
              variant="body1"
              sx={{ mb: { xs: 2, md: 4 }, textAlign: "justify" }}
            >
              Nossa plataforma utiliza <strong>visão computacional</strong> com
              foco em
              <strong> segmentação de imagens</strong> para diversos setores,
              como agricultura, engenharia e logística. Com base em{" "}
              <strong>modelos de aprendizado profundo</strong>, realizamos a
              separação precisa de objetos e regiões de interesse, permitindo
              análises detalhadas em tempo real. A integração com infraestrutura
              em nuvem assegura escalabilidade e disponibilidade contínua,
              fornecendo
              <strong> insights quantitativos</strong> que reduzem custos
              operacionais e aumentam a eficiência de processos industriais.
            </Typography>

            {/* O tema já define o tamanho responsivo para button */}
            <Button
              component={NavLink}
              to="/services"
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

export default React.memo(VideoSegDemo);
