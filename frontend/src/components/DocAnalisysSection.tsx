// src/components/DocAnalisysSection.tsx
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
import sectionSvg from "../assets/images/document-analysis.svg";
import { motion } from "framer-motion";

interface DocAnalisysSectionProps {
  backgroundColor: string;
}

const DocAnalisysSection: FC<DocAnalisysSectionProps> = ({ backgroundColor }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const textVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20, duration: 0.8 },
    },
  };
  const imgVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20, duration: 0.8, delay: 0.2 },
    },
  };

  const bg = backgroundColor || "#ffffff";

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
          color: theme.palette.text.primary,
        }}
      >
        {/* SVG animado */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imgVariants}
          style={{ flex: 1, display: "flex", justifyContent: "center" }}
        >
          <Box
            component="img"
            src={sectionSvg}
            alt="Fluxo de análise de documento"
            sx={{
              width: { xs: "80vw", sm: 180, md: 280, lg: 360 },
              height: "auto",
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
            <Typography
              variant={isMobile ? "h5" : "h4"}
              sx={{ mb: { xs: 2, md: 4 }, color: theme.palette.primary.main }}
            >
              <strong>Análise de Documentos</strong>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 4 },
                textAlign: "justify",
              }}
            >
              Nosso sistema de <strong>análise de documentos</strong> integra OCR e PLN para
              extrair informações de PDFs, contratos e relatórios. Detectamos padrões
              tipográficos e semânticos com redes neurais, identificando <strong>campos-chave</strong>
              como datas, valores e cláusulas, acelerando fluxos jurídicos, financeiros e
              administrativos.
            </Typography>
            <Button
              component={NavLink}
              to="/products/doc-analisys"
              startIcon={<ArrowForwardIcon />}
              sx={{
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 0.6, sm: 1, md: 1.5 },
                color: "#fff",
                bgcolor: theme.palette.primary.main,
                borderRadius: "12px",
                transition: "background-color 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                  transform: "translateX(8px)",
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

export default React.memo(DocAnalisysSection);
