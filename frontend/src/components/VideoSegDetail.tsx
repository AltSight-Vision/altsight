// src/components/VideoSegDetail.tsx
import React, { FC } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

// Substitua pelos caminhos reais das suas imagens de segmentação
import videoSegImageA from "../assets/images/01-image.jpg";
import videoSegImageB from "../assets/images/02-image.jpg";

interface VideoSegDetailProps {
  backgroundColor: string;
}

const VideoSegDetail: FC<VideoSegDetailProps> = ({ backgroundColor }) => {
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
          <strong>Segmentação de Imagens</strong>
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#fff", textAlign: "justify", lineHeight: 1.6 }}
        >
          Nosso módulo de segmentação de imagens aplica redes neurais convolucionais
          treinadas para identificar e separar objetos dentro de uma cena. Utilizamos
          arquiteturas como U-Net e Mask R-CNN para gerar máscaras precisas de cada
          região de interesse. Primeiro, o input passa por camadas de convolução
          para extrair características, depois por blocos de upsampling que refinam
          a máscara em resolução original. O resultado é um mapa de segmentação onde
          cada pixel pertence a uma classe específica — por exemplo, pessoas, veículos,
          edifícios ou áreas de fundo. Dessa forma, podemos analisar cada objeto
          isoladamente e extrair informações contextuais com alta fidelidade.
        </Typography>
      </Box>

      {/* Duas imagens lado a lado */}
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
          component="img"
          src={videoSegImageA}
          alt="Exemplo de Máscara de Segmentação"
          sx={{
            width: { xs: "100%", sm: "80%", md: "45%" },
            borderRadius: 2,
            boxShadow: 3,
            objectFit: "cover",
          }}
        />

        <Box
          component="img"
          src={videoSegImageB}
          alt="Visualização de Segmentação de Objetos"
          sx={{
            width: { xs: "100%", sm: "80%", md: "45%" },
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
          A segmentação de imagens permite identificação precisa de objetos em diversas áreas:
          diagnóstico médico, onde isolamos órgãos ou tumores em exames; agricultura, ao
          mapear plantações e detectar falhas; e vigilância, identificando indivíduos ou
          comportamentos suspeitos. Com as máscaras geradas, podemos calcular métricas como
          área ocupada, contornos e relações espaciais entre objetos. Nossa solução é otimizada
          para rodar em tempo real em GPUs ou dispositivos embarcados, garantindo que sistemas de
          segurança, saúde e automação industrial recebam respostas rápidas e confiáveis.
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(VideoSegDetail);
