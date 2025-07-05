// src/components/DepthPerDetail.tsx
import React, { FC } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

// Substitua pelos caminhos reais das suas imagens de análise de documentos
import docAnalisysImageA from "../assets/images/01-image.jpg";
import docAnalisysImageB from "../assets/images/02-image.jpg";

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
          <strong>Análise Automática de Documentos</strong>
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#fff", textAlign: "justify", lineHeight: 1.6 }}
        >
          Nosso sistema de análise de documentos combina técnicas avançadas de OCR
          (Reconhecimento Óptico de Caracteres) e aprendizado de máquina para extrair
          informações estruturadas de textos em formatos diversos (PDF, imagens escaneadas,
          digitalizações). Primeiramente, aplicamos pré-processamento para melhorar a qualidade
          das imagens: correção de alinhamento, remoção de ruído e ajuste de contraste. Em seguida,
          utilizamos modelos de OCR treinados em múltiplos idiomas para converter o conteúdo gráfico
          em texto bruto. Por fim, algoritmos de NLP (Processamento de Linguagem Natural) identificam
          campos-chave, classificam seções e validam a integridade dos dados extraídos. Tudo é feito
          de forma automatizada, permitindo processamento em lote ou em tempo real, conforme a
          necessidade do cliente.
        </Typography>
      </Box>

      {/* Duas imagens lado a lado */}
      {/* <Box
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
          src={docAnalisysImageA}
          alt="Exemplo de OCR em Documento"
          sx={{
            width: { xs: "100%", sm: "80%", md: "45%" },
            borderRadius: 2,
            boxShadow: 3,
            objectFit: "cover",
          }}
        />

        <Box
          component="img"
          src={docAnalisysImageB}
          alt="Exemplo de Extração de Campos"
          sx={{
            width: { xs: "100%", sm: "80%", md: "45%" },
            borderRadius: 2,
            boxShadow: 3,
            objectFit: "cover",
          }}
        />
      </Box> */}

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
          <strong>Vantagens e Aplicações</strong>
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#fff", textAlign: "justify", lineHeight: 1.6 }}
        >
          Com essa abordagem, é possível reduzir drasticamente o tempo gasto em tarefas manuais
          de conferência e arquivamento. A extração estruturada de dados facilita a integração com
          sistemas ERP e CRMs, permitindo análises de métricas financeiras, verificação de conformidade
          regulatória e automação de fluxos de trabalho administrativos. Além disso, detectamos
          documentação incompleta ou ilegível e sinalizamos inconsistências entre campos, garantindo
          maior confiabilidade. Nossa solução pode ser personalizada para diferentes tipos de documentos:
          contratos, faturas, comprovantes de pagamento e relatórios fiscais, atendendo a diversos
          segmentos de mercado.
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(DepthPerDetail);
