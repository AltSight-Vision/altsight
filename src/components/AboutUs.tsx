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
import avatarVitor from "../assets/images/avatars/avatar-vitor.png";
import avatarFelipe from "../assets/images/avatars/avatar-felipe.png";
import avatarGeorge from "../assets/images/avatars/avatar-george.png";

interface AboutUsProps {
  backgroundColor?: string;
}

interface Collaborator {
  name: string;
  knowledge: string; // antes era `role`
  avatarSrc: string;
}

const collaborators: Collaborator[] = [
  {
    name: "Vitor Custódio Chagas",
    knowledge:
      "Engenheiro de Visão Computacional — especialista em processamento da dados 3D e desenvolvimento de inteligência artificial para sistemas embarcados",
    avatarSrc: avatarVitor,
  },
  {
    name: "Felipe Manfio Barbosa",
    knowledge:
      "MSc em Ciência da Computação (ICMC-USP) — pesquisador em Deep Learning e Visão Computacional; foco em segmentação e depth estimation.",
    avatarSrc: avatarFelipe,
  },
  {
    name: "George de Borbas Nardes",
    knowledge:
      "PhD em Aprendizado de Máquina (Unicamp) — especialista em otimização de modelos e implantação de pipelines de ML.",
    avatarSrc: avatarGeorge,
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
          mx: { xs: "5%", sm: "8%", md: "10%", lg: "15%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, md: 6 },
          color: "#fff",
          textAlign: "center",
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
            A <strong>AltSight</strong> nasceu com o propósito de levar
            inovações em visão computacional para indústrias de diversos
            setores. Nosso time multidisciplinar combina expertise em
            aprendizado de máquina, processamento de imagens e desenvolvimento
            de hardware especializado, a fim de entregar soluções robustas e de
            alta performance. Desde o primeiro projeto, buscamos alinhar
            pesquisa acadêmica e aplicação prática, gerando valor para clientes
            que exigem precisão, velocidade e confiabilidade em ambientes reais.
            <br />
            <br />
            Além das soluções voltadas à <strong> visão computacional</strong>,
            desenvolvemos sistemas para elaboração e{" "}
            <strong>automação de documentos</strong>, otimizando processos
            internos e aumentando a eficiência operacional. Nossas ferramentas
            de análise inteligente de documentos permitem extrair informações
            relevantes de forma automática, acelerando tomadas de decisão e
            reduzindo retrabalho em fluxos administrativos complexos.
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
                  width: { xs: "40%", sm: "30%", md: "15%" },
                }}
              >
                <Avatar
                  src={col.avatarSrc}
                  alt={col.name}
                  sx={{
                    width: isMobile ? 100 : 140, // aumentado
                    height: isMobile ? 100 : 140, // aumentado
                    mb: 1,
                  }}
                />
                <Typography
                  variant={isMobile ? "subtitle2" : "subtitle1"}
                  sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                >
                  {col.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "white", fontStyle: "italic" }}
                >
                  {col.knowledge}
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
