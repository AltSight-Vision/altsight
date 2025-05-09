import { FC } from "react";
import { Box, Typography } from "@mui/material";
import street1 from "../assets/videos/drone-footage.mp4";
import trio from "../assets/images/trio-1.png";

const WhatWeDoSection: FC = () => {
  return (
    <>
      {/* Seção 1 - Visão Computacional */}
      <Box
        component="section"
        width="100%"
        py={8}
        sx={{
          background: "linear-gradient(135deg, #14281e 0%, #105744 100%)",
          color: "#ffffff",
        }}
      >
        {/* Container limitado */}
        <Box py={2} px={2} maxWidth="md" mx="auto">
          <Typography variant="h4" align="center" gutterBottom>
            O que nós fazemos?
          </Typography>

          {/* Conteúdo da seção 1 */}
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row-reverse" }}
            alignItems="center"
            gap={4}
            pt={4}
          >
            {/* Vídeo */}
            <Box flex={1}>
              <Box
                component="video"
                src={street1}
                controls
                width="100%"
                sx={{ borderRadius: 2, boxShadow: 3 }}
              />
            </Box>

            {/* Texto */}
            <Box flex={1}>
              <Typography variant="h5" gutterBottom>
                Como a <strong>Visão Computacional</strong> pode melhorar o seu processo?
              </Typography>
              <Typography paragraph>
                Na AltSight, usamos visão computacional para transformar imagens e
                vídeos em informações valiosas. Desenvolvemos soluções inteligentes
                para detecção de objetos, automação, segurança e análise visual em
                diversos setores.
              </Typography>
              <Typography paragraph>
                Nosso foco é entregar tecnologia eficiente, precisa e pronta para
                resolver problemas do mundo real.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Seção 2 - Análise de Documentos */}
      <Box
        component="section"
        width="100%"
        py={8}
        sx={{
          background: "linear-gradient(135deg, #ffffff 0%, #f0faf0 100%)",
          color: "#000000",
        }}
      >
        {/* Container limitado (mesma largura da seção 1) */}
        <Box py={2} px={2} maxWidth="md" mx="auto">
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            gap={4}
          >
            {/* Texto */}
            <Box flex={1}>
              <Typography variant="h5" gutterBottom>
                A <strong>Análise Inteligente de Documentos</strong> pode automatizar o seu processo
              </Typography>
              <Typography paragraph>
                Nossa solução de análise de documentos inteligente utiliza
                inteligência artificial para ler, entender e estruturar informações
                contidas em documentos como notas fiscais, boletos e formulários.
              </Typography>
              <Typography paragraph>
                Automatizamos a extração de dados com alta precisão, reduzindo erros
                manuais e agilizando processos que tomam tempo e recursos.
              </Typography>
              <Typography paragraph>
                Com essa tecnologia, transformamos documentos em dados prontos para
                uso, oferecendo mais eficiência, segurança e inteligência na tomada
                de decisões.
              </Typography>
            </Box>

            {/* Imagem */}
            <Box flex={1}>
              <Box
                component="img"
                src={trio}
                alt="Trio de pessoas com laptop e tablet"
                sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WhatWeDoSection;