// src/components/ContactSection.tsx
import React, { FC, useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

interface ContactSectionProps {
  backgroundColor: string;
}

const ContactSection: FC<ContactSectionProps> = ({ backgroundColor }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const textVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20, duration: 0.8 },
    },
  };
  const formVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20, duration: 0.8, delay: 0.2 },
    },
  };

  const bg = backgroundColor || "#ffffff";

  const handleSend = () => {
    console.log("Email:", email);
    console.log("Assunto:", subject);
    console.log("Mensagem:", message);
    setEmail("");
    setSubject("");
    setMessage("");
  };

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
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "space-between",
          gap: { xs: 3, sm: 5, md: 7 },
          color: theme.palette.text.primary, // texto escuro
        }}
      >
        {/* Texto de introdução */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          style={{ flex: 1 }}
        >
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              maxWidth: { xs: "80vw", sm: "80vw", md: "100%" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Typography
              variant={isMobile ? "h5" : "h4"}
              sx={{
                mb: { xs: 2, md: 8 },
                color: theme.palette.primary.main, // título primário
              }}
            >
              <strong>Fale Conosco</strong>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 4 },
                textAlign: "justify",
              }}
            >
              Tem alguma dúvida ou precisa de mais informações? Preencha o formulário ao lado e
              entraremos em contato o mais rápido possível.
            </Typography>
          </Box>
        </motion.div>

        {/* Formulário de contato */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={formVariants}
          style={{ flex: 1 }}
        >
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2, sm: 3 },
              maxWidth: { xs: "80vw", sm: "80vw", md: "100%" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            {/** Email **/}
            <TextField
              label="Seu e-mail"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                "& .MuiInputLabel-root": { color: theme.palette.text.primary },
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#fff",
                  borderRadius: 1,
                  "& input": { color: theme.palette.text.primary },
                  "& fieldset": { borderColor: theme.palette.text.primary },
                  "&:hover fieldset": { borderColor: theme.palette.primary.main },
                  "&.Mui-focused fieldset": { borderColor: theme.palette.primary.main },
                },
              }}
            />

            {/** Assunto **/}
            <TextField
              label="Assunto"
              variant="outlined"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              sx={{
                "& .MuiInputLabel-root": { color: theme.palette.text.primary },
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#fff",
                  borderRadius: 1,
                  "& input": { color: theme.palette.text.primary },
                  "& fieldset": { borderColor: theme.palette.text.primary },
                  "&:hover fieldset": { borderColor: theme.palette.primary.main },
                  "&.Mui-focused fieldset": { borderColor: theme.palette.primary.main },
                },
              }}
            />

            {/** Mensagem **/}
            <TextField
              label="Mensagem"
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              multiline
              minRows={4}
              sx={{
                "& .MuiInputLabel-root": { color: theme.palette.text.primary },
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#fff",
                  borderRadius: 1,
                  "& textarea": { color: theme.palette.text.primary },
                  "& fieldset": { borderColor: theme.palette.text.primary },
                  "&:hover fieldset": { borderColor: theme.palette.primary.main },
                  "&.Mui-focused fieldset": { borderColor: theme.palette.primary.main },
                },
              }}
            />

            <Button
              variant="contained"
              onClick={handleSend}
              sx={{
                alignSelf: { xs: "center", md: "flex-start" },
                px: { xs: 3, sm: 4 },
                py: { xs: 0.8, sm: 1 },
                bgcolor: theme.palette.primary.main,
                color: "#fff",
                borderRadius: "12px",
                transition: "background-color 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                  transform: "translateY(-2px)",
                },
              }}
            >
              Enviar Mensagem
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default React.memo(ContactSection);
  