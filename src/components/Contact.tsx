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

const schema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(5, "Mensagem muito curta"),
});

type FormData = z.infer<typeof schema>;

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
    await new Promise((res) => setTimeout(res, 1000));
    reset();
  };

  return (
    <>
      {/* Seção - Contato */}
      <Box
        component="section"
        width="100%"
        py={2}
        px={2}
        sx={{
          background: "linear-gradient(135deg, #14281e 0%, #105744 100%)",
          color: "#ffffff",
        }}
      >
        {/* Container limitado */}
        <Box py={2} px={2} maxWidth="sm" mx="auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                mb: 3,
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
              align="center"
              mb={4}
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.6,
                maxWidth: 600,
                mx: "auto",
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

            <Paper
              elevation={3}
              sx={{
                p: 4,
                backgroundColor: "#ffffff",
                color: "#000000",
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
                    InputLabelProps={{ style: { color: "#000000" } }}
                    InputProps={{ style: { color: "#000000" } }}
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>

                  {isSubmitSuccessful && (
                    <Alert
                      severity="success"
                      sx={{
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        border: (theme) =>
                          `1px solid ${theme.palette.primary.main}`,
                      }}
                    >
                      Mensagem enviada com sucesso!
                    </Alert>
                  )}
                </Stack>
              </form>
            </Paper>
          </motion.div>
        </Box>
      </Box>
    </>
  );
};

export default ContactSection;
