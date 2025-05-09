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
    <Box component="section" py={8} px={2} maxWidth="md" mx="auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Fale com a gente
        </Typography>
        <Typography variant="body1" align="center" mb={4}>
          Fale com um de nossos especialistas e <strong>transforme</strong> os processos da sua empresa.
        </Typography>

        <Paper elevation={3} sx={{ p: 4 }}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={3}>
              <TextField
                label="Nome completo"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
              />

              <TextField
                label="E-mail"
                type="email"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
              />

              <TextField
                label="Mensagem"
                {...register("message")}
                error={!!errors.message}
                helperText={errors.message?.message}
                multiline
                rows={5}
                fullWidth
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
                <Alert severity="success">Mensagem enviada com sucesso!</Alert>
              )}
            </Stack>
          </form>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default ContactSection;

