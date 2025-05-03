// src/components/ContactSection.tsx
import { FC, useState } from "react";

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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section section-contact">
      <div className="section-header">
        <h2 className="section-title">Fale conosco</h2>
      </div>
      <form className="section-body section-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          required
          value={formData.name}
          onChange={handleChange}
          className="input"
        />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          required
          value={formData.email}
          onChange={handleChange}
          className="input"
        />
        <textarea
          name="message"
          placeholder="Sua mensagem"
          required
          value={formData.message}
          onChange={handleChange}
          className="textarea"
        />
        <div className="section-actions">
          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : "Enviar mensagem"}
          </button>
        </div>
        {status === "success" && <p className="form-feedback success">Mensagem enviada!</p>}
        {status === "error" && <p className="form-feedback error">Falha ao enviar. Tente novamente.</p>}
      </form>
    </section>
  );
};

export default ContactSection;
