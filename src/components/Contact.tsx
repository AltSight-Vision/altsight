import { FC } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Stack,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { keyframes } from '@mui/system';

const schema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(5, "Mensagem muito curta"),
});

type FormData = z.infer<typeof schema>;

const gradientAnimation = keyframes`0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; }`;

const ContactSection: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("Dados do formulário:", data);
    await new Promise((res) => setTimeout(res, 1000));
    reset();
  };

  return (
    <>
      <Box
        component="section"
        width="100%"
        py={{ xs: 2, md: 2 }}
        px={2}
        sx={{
          background: `linear-gradient(135deg,rgb(29, 58, 44) 0%,rgb(61, 126, 94) 100%)`,
          backgroundSize: '200% 200%',
          animation: `${gradientAnimation} 15s ease infinite`,
          color: "#ffffff",
        }}
      >
        <Box
          py={2}
          px={2}
          maxWidth="md"
          mx="auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 4, md: 6 },
                alignItems: { md: "flex-start" },
              }}
            >
              <Box
                sx={{
                  flex: { md: 1 },
                  textAlign: { xs: "center", md: "center" },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
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
                  Fale com a gente
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
                  Fale com um de nossos <strong>especialistas</strong> e descubra
                  como podemos <strong>transformar</strong> os processos da sua
                  empresa com soluções <strong>inteligentes</strong> e{" "}
                  <strong>personalizadas</strong>.
                </Typography>

                <Stack spacing={2} sx={{ mt: 3, alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <EmailIcon sx={{ color: 'secondary.light' }} />
                    <Typography variant="body1" component="a" href="mailto:contato@suaempresa.com" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline'} }}>
                      contato@suaempresa.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <PhoneIcon sx={{ color: 'secondary.light' }} />
                    <Typography variant="body1" component="a" href="tel:+55XXYYYYYZZZZ" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline'} }}>
                      +55 (XX) XXXXX-XXXX
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Box
                sx={{
                  flex: { md: 1.2 },
                  width: "100%",
                }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: { xs: 3, sm: 4 },
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    borderRadius: 2,
                  }}
                >
                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Stack spacing={3}>
                      <TextField
                        label="Nome completo"
                        {...register("name")}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{ style: { color: "#000000" } }}
                        InputProps={{ style: { color: "#000000" } }}
                      />

                      <TextField
                        label="E-mail"
                        type="email"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{ style: { color: "#000000" } }}
                        InputProps={{ style: { color: "#000000" } }}
                      />

                      <TextField
                        label="Mensagem"
                        {...register("message")}
                        error={!!errors.message}
                        helperText={errors.message?.message}
                        multiline
                        rows={5}
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{ style: { color: "#000000" } }}
                        InputProps={{ style: { color: "#000000" } }}
                      />

                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                        fullWidth
                        size="large"
                        sx={{ py: 1.5 }}
                      >
                        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                      </Button>

                      {isSubmitSuccessful && (
                        <Alert
                          severity="success"
                          variant="filled"
                        >
                          Mensagem enviada com sucesso!
                        </Alert>
                      )}
                    </Stack>
                  </form>
                </Paper>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </>
  );
};

export default ContactSection;