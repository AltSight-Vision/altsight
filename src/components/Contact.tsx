import { FC, useState } from "react";
import "../styles/components/contacts-style.scss";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="section-title">Como nos contactar</h2>
          <div className="info-content">
            <div className="info-item">
              <h3>Telefone de Contato</h3>
              <p>(11) 98765-4321</p>
            </div>
            <div className="info-item">
              <h3>Email de Contato</h3>
              <p>contato@agrotechsolution.com.br</p>
            </div>
            <div className="info-item">
              <h3>Horário de Atendimento</h3>
              <p>
                Segunda a Sexta
                <br />
                9:00 - 18:00
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2 className="section-title">Fale conosco</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nome completo"
                required
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Sua mensagem..."
                required
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="submit-button"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
            </button>
            {status === "success" && (
              <p className="form-feedback success">
                Mensagem enviada com sucesso!
              </p>
            )}
            {status === "error" && (
              <p className="form-feedback error">
                Ocorreu um erro. Por favor, tente novamente.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
