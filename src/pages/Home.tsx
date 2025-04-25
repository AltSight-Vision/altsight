import { FC, useState, useEffect, useRef } from "react";
import heroVideo from "../assets/sections/drone-footage.mp4";
import "../styles/home-style.css";

const features = [
  { title: "Automação Inteligente", text: "Robôs de software que aprendem com seus dados e otimizam processos automaticamente." },
  { title: "Visão Computacional", text: "Análise de imagens e vídeos em alta velocidade para reconhecer padrões complexos." },
  { title: "Processamento de Linguagem", text: "Chatbots e assistentes virtuais capazes de compreender e gerar texto humano." },
  { title: "Previsão Preditiva", text: "Modelos que antecipam tendências e comportamentos a partir de séries temporais." },
];

const VideoHero: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [containerHeight, setContainerHeight] = useState("70vh");

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 768) {
        setContainerHeight("50vh");
      } else {
        setContainerHeight("70vh");
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="hero-container" style={{ height: containerHeight }}>
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="responsive-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="hero-content">
        <h1>Desenvolvendo Tecnologias para Visão Computacional Agronômica</h1>
      </div>
    </div>
  );
};

const Home: FC = () => {
  return (
    <div className="home">
      <section className="section hero-section">
        <VideoHero />
      </section>

      <section className="section features">
        {features.map((feat, idx) => (
          <div key={idx} className="feature-card">
            <h2>{feat.title}</h2>
            <p>{feat.text}</p>
          </div>
        ))}
      </section>

      <section className="section showcase">
        <div className="showcase-text">
          <h2>Veja nossa plataforma em ação</h2>
          <p>Interface intuitiva, dashboards inteligentes e relatórios em tempo real para você tomar decisões mais rápidas.</p>
        </div>
        <div className="showcase-image">
          <img src="/assets/platform-screenshot.png" alt="Screenshot da plataforma" />
        </div>
      </section>

      <section className="section cta">
        <h2>Pronto para revolucionar seu negócio?</h2>
        <button className="btn-secondary">Agende uma Demonstração</button>
      </section>
    </div>
  );
};

export default Home;