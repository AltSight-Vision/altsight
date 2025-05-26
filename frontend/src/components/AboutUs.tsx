// src/components/AboutUs.tsx
import React, { FC } from "react";
import {
  Box,
  Typography,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

// Importação dos avatares
import avatarAna from "../assets/images/avatars/avatar-ana.png";
import avatarCarlos from "../assets/images/avatars/avatar-joao.png";
import avatarBeatriz from "../assets/images/avatars/avatar-marco.png";
import avatarDiego from "../assets/images/avatars/avatar-maria.png";
// import avatarMariana from "../assets/images/avatars/avatar-mariana.png";

interface AboutUsProps {
  backgroundColor?: string;
}

interface Collaborator {
  name: string;
  role: string;
  avatarSrc: string;
}

const collaborators: Collaborator[] = [
  {
    name: "Ana Souza",
    role: "CEO & Fundadora",
    avatarSrc: avatarAna,
  },
  {
    name: "Carlos Pereira",
    role: "CTO",
    avatarSrc: avatarCarlos,
  },
  {
    name: "Beatriz Lima",
    role: "Gerente de Produto",
    avatarSrc: avatarBeatriz,
  },
  {
    name: "Diego Alves",
    role: "Engenheiro de Software",
    avatarSrc: avatarDiego,
  },
];

const AboutUs: FC<AboutUsProps> = ({ backgroundColor }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const textVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const avatarsVariants = {
    hidden: { y: "20%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  const BACKGROUND_COLOR = backgroundColor || "#fafafa";

  return (
    <Box
      sx={{
        backgroundColor: BACKGROUND_COLOR,
        py: { xs: 4, sm: 6, md: 8 },
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
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, md: 6 },
          color: "#fff",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          style={{ width: "100%" }}
        >
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{ mb: { xs: 2, md: 8 }, color: theme.palette.primary.main }}
          >
            Sobre Nós
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: { xs: 3, md: 6 },
              maxWidth: { xs: "100%", md: "80%" },
              mx: "auto",
              textAlign: "justify",
              lineHeight: 1.6,
            }}
          >
            Fundada em 2015, a <strong>AltSight</strong> nasceu com
            o propósito de levar inovações em visão computacional para
            indústrias de diversos setores. Nosso time multidisciplinar combina
            expertise em aprendizado de máquina, processamento de imagens e
            desenvolvimento de hardware especializado, a fim de entregar
            soluções robustas e de alta performance. Desde o primeiro projeto,
            buscamos alinhar pesquisa acadêmica e aplicação prática, gerando
            valor para clientes que exigem precisão, velocidade e confiabilidade
            em ambientes reais.
            <br />
            <br />
            Ao longo dos anos, já implementamos sistemas de inspeção
            automatizada, algoritmos de detecção de anomalias em tempo real e
            plataformas de análise de dados que auxiliam na tomada de decisão.
            Nossa missão é continuar avançando os limites da tecnologia visual,
            mantendo sempre o foco na qualidade e na satisfação de nossos
            clientes. Conheça abaixo os colaboradores que tornam tudo isso
            possível.
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={avatarsVariants}
          style={{ width: "100%" }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: 3, sm: 4, md: 6 },
            }}
          >
            {collaborators.map((col) => (
              <Box
                key={col.name}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: { xs: "25%", sm: "20%", md: "15%" },
                }}
              >
                <Avatar
                  src={col.avatarSrc}
                  alt={col.name}
                  sx={{
                    width: isMobile ? 56 : 80,
                    height: isMobile ? 56 : 80,
                    mb: 1,
                  }}
                />
                <Typography
                  variant={isMobile ? "subtitle2" : "subtitle1"}
                  sx={{ fontWeight: 600, color: theme.palette.primary.main  }}
                >
                  {col.name}
                </Typography>
                <Typography variant="caption" sx={{color: "white"  }}>
                  {col.role}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default React.memo(AboutUs);
