import { FC } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { keyframes } from "@mui/system";

import street1 from "../assets/videos/drone-footage.mp4";
import trio from "../assets/images/trio-1.png";

const gradientAnimation = keyframes`0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; }`;

const WhatWeDoSection: FC = () => {
  return (
    <>
      {/* Seção 1 - Visão Computacional */}
      <Box
        component="section"
        width="100%"
        py={2}
        sx={{
          background: `linear-gradient(135deg,rgb(29, 58, 44) 0%,rgb(61, 126, 94) 100%)`,
          backgroundSize: "200% 200%",
          animation: `${gradientAnimation} 15s ease infinite`,
          color: "#ffffff",
        }}
      >
        {/* Container limitado */}
        <Box py={2} px={2} maxWidth="lg" mx="auto">
          {/* <Typography variant="h4" align="center" gutterBottom>
            O que nós fazemos?
          </Typography> */}

          {/* Conteúdo da seção 1 */}
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row-reverse" }}
            alignItems="center"
            gap={4}
          >
            {/* Texto */}
            <Box
              sx={{
                flex: { md: 1 },
                textAlign: { xs: "center", md: "center" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "#ffffff",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1,
                  mb: 3,
                  textAlign: "center",
                  "&::after": {
                    content: '""',
                    display: "block",
                    width: 80,
                    height: 4,
                    backgroundColor: "secondary.main",
                    margin: "16px auto 0",
                    borderRadius: 2,
                  },
                }}
              >
                Visão Computacional
              </Typography>

              <Typography
                variant="body1"
                mb={4}
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  textAlign: { xs: "center", md: "center" },
                  "& strong": {
                    color: "secondary.light",
                    fontWeight: 600,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      width: "100%",
                      height: 2,
                      backgroundColor: "secondary.main",
                      opacity: 0.7,
                    },
                  },
                }}
              >
                Como a <strong>Visão Computacional</strong> pode melhorar o seu
                processo? Na AltSight, usamos visão computacional para
                transformar imagens e vídeos em informações valiosas.
                Desenvolvemos soluções inteligentes para{" "}
                <strong>detecção de objetos</strong>, <strong>automação</strong>
                , <strong>segurança</strong> e <strong>análise visual</strong>{" "}
                em diversos setores. Nosso foco é entregar tecnologia{" "}
                <strong>eficiente</strong>, <strong>precisa</strong> e pronta
                para resolver problemas do mundo real.
              </Typography>
            </Box>

            {/* Vídeo */}
            <Box
              flex={1}
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: "50%",
                  height: "50%",
                  zIndex: 1,

                  transform: "translateY(-25%) translateX(25%)",
                }}
              >
                <Box
                  component="video"
                  src={street1}
                  sx={{
                    display: "block",
                    borderRadius: 2,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "50%",
                  height: "50%",
                  zIndex: 2,

                  transform: "translateY(25%) translateX(-25%)",
                }}
              >
                <Box
                  component="video"
                  src={street1}
                  sx={{
                    display: "block",
                    borderRadius: 2,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Seção 2 - Análise de Documentos */}
      <Box
        component="section"
        width="100%"
        py={2}
        sx={{
          background: `linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(180, 226, 203) 100%)`,
          backgroundSize: "200% 200%",
          animation: `${gradientAnimation} 15s ease infinite`,

          color: "#000000",
        }}
      >
        {/* Container limitado (mesma largura da seção 1) */}
        <Box py={2} px={2} maxWidth="lg" mx="auto">
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            gap={4}
          >
            {/* Texto */}
            <Box
              sx={{
                flex: { md: 1 },
                textAlign: { xs: "center", md: "center" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "primary.text",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1,
                  mb: 3,
                  textAlign: "center",
                  "&::after": {
                    content: '""',
                    display: "block",
                    width: 80,
                    height: 4,
                    backgroundColor: "primary.main",
                    margin: "16px auto 0",
                    borderRadius: 2,
                  },
                }}
              >
                Análise Inteligente de Documentos
              </Typography>

              <Typography
                variant="body1"
                mb={4}
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  textAlign: { xs: "center", md: "center" },
                  "& strong": {
                    color: "primary.light",
                    fontWeight: 600,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      width: "100%",
                      height: 2,
                      backgroundColor: "primary.main",
                      opacity: 0.7,
                    },
                  },
                }}
              >
                A <strong>Análise Inteligente de Documentos</strong> pode
                automatizar o seu processo. Nossa solução de análise de
                documentos inteligente utiliza inteligência artificial para ler,
                entender e estruturar informações contidas em documentos como
                notas fiscais, boletos e formulários. Automatizamos a extração
                de dados com alta precisão, reduzindo erros manuais e agilizando
                processos que tomam tempo e recursos. Com essa tecnologia,
                transformamos documentos em dados prontos para uso, oferecendo
                mais eficiência, segurança e inteligência na tomada de decisões.
              </Typography>
            </Box>

            {/* Imagem */}
            <Box
              flex={1}
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "80%",
                  maxWidth: "300px",
                  marginBottom: "-15%",
                  zIndex: 2,
                }}
              >
                <Paper
                  elevation={3}
                  sx={{ borderRadius: 2, overflow: "hidden" }}
                >
                  <Box
                    component="img"
                    src={trio}
                    alt="Imagem Topo"
                    sx={{ width: "100%", display: "block" }}
                  />
                </Paper>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "90%",
                  mt: "-10%",
                }}
              >
                <Box sx={{ width: "45%", maxWidth: "150px", zIndex: 1 }}>
                  <Paper
                    elevation={3}
                    sx={{ borderRadius: 2, overflow: "hidden" }}
                  >
                    <Box
                      component="img"
                      src={trio}
                      alt="Imagem Base Esquerda"
                      sx={{ width: "100%", display: "block" }}
                    />
                  </Paper>
                </Box>
                <Box
                  sx={{
                    width: "45%",
                    maxWidth: "150px",
                    marginLeft: "-10%",
                    zIndex: 1,
                  }}
                >
                  <Paper
                    elevation={3}
                    sx={{ borderRadius: 2, overflow: "hidden" }}
                  >
                    <Box
                      component="img"
                      src={trio}
                      alt="Imagem Base Direita"
                      sx={{ width: "100%", display: "block" }}
                    />
                  </Paper>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WhatWeDoSection;
