// src/components/DepthPerDetail.tsx
import React, { FC } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

// Substitua pelos caminhos reais das suas imagens
import depthImageA from "../assets/images/01-image.jpg";
import depthImageB from "../assets/images/02-image.jpg";

interface DepthPerDetailProps {
  backgroundColor: string;
}

const DepthPerDetail: FC<DepthPerDetailProps> = ({ backgroundColor }) => {
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
          <strong>Visão de Profundidade em Tempo Real</strong>
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#fff", textAlign: "justify", lineHeight: 1.6 }}
        >
          Nossos algoritmos de percepção de profundidade utilizam visão estéreo
          e redes neurais profundas para construir mapas tridimensionais de alta
          precisão. Capturamos imagens simultâneas de câmeras calibradas ou
          usamos sensores de tempo de voo (ToF) para medir distância em cada
          pixel. Com esses dados, fornecemos modelagens 3D que auxiliam em
          navegação autônoma, inspeção de ambientes industriais e
          reconstrução de cenas. Todo processamento ocorre em tempo real,
          garantindo respostas imediatas para sistemas embarcados e aplicações
          de robótica.
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
          src={depthImageA}
          alt="Exemplo de Mapa de Profundidade"
          sx={{
            width: { xs: "100%", sm: "80%", md: "45%" },
            borderRadius: 2,
            boxShadow: 3,
            objectFit: "cover",
          }}
        />

        <Box
          component="img"
          src={depthImageB}
          alt="Visualização 3D de Cena"
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
          Através desses mapas, conseguimos extrair medidas métricas, detectar
          obstáculos e avaliar volumes em ambientes internos e externos. Isso
          é crucial para veículos autônomos, onde a distância exata a cada objeto
          deve ser conhecida para evitar colisões. Em inspeções industriais, a
          visão de profundidade ajuda a identificar defeitos em estruturas e
          componentes, garantindo segurança e eficiência. Além disso, nossas
          soluções são otimizadas para rodar em hardware embarcado, mantendo
          baixo consumo de energia sem comprometer a acurácia.
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(DepthPerDetail);
