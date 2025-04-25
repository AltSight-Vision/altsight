import { FC, useState, useEffect, useRef } from "react";
import heroVideo from "../assets/sections/drone-footage.mp4";
import agroBrasilLogo from "../assets/logos/2k-logo.png";
import fazendaFuturoLogo from "../assets/logos/americanexpress-logo.png";
import terraNovaLogo from "../assets/logos/avon-logo.png";
import agroTopLogo from "../assets/logos/axa-logo.png";
import platformScreenshot from "../assets/screenshots/ss-1.png";
import { FaUserCircle } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "../styles/home-style.css";

// Dados da empresa
const companyStats = [
  { value: "97%", label: "Precisão na detecção de pragas" },
  { value: "40%+", label: "Redução no uso de defensivos" },
  { value: "500+", label: "Fazendas atendidas" },
  { value: "24/7", label: "Monitoramento contínuo" },
];

const partners = [
  { name: "AgroBrasil", logo: agroBrasilLogo },
  { name: "Fazenda Futuro", logo: fazendaFuturoLogo },
  { name: "TerraNova", logo: terraNovaLogo },
  { name: "Grupo AgroTop", logo: agroTopLogo },
];

const testimonials = [
  {
    quote:
      "A tecnologia revolucionou nosso controle de pragas, reduzindo custos em 35%.",
    author: "Carlos Mendes, Fazenda São João",
  },
  {
    quote:
      "Pela primeira vez temos dados precisos sobre cada hectare da plantação.",
    author: "Ana Silva, Agropecuária Nova Era",
  },
  {
    quote:
      "Visão computacional nos deu liberdade para tomar decisões em tempo real.",
    author: "Roberto Costa, AgroTech",
  },
  {
    quote:
      "Conseguimos aumentar o rendimento da colheita em 20% com as recomendações preditivas.",
    author: "Mariana Oliveira, Fazenda Primavera",
  },
  {
    quote:
      "A integração com máquinas nos permitiu reduzir o tempo de pulverização pela metade.",
    author: "Eduardo Lima, Agro Integrado",
  },
  {
    quote:
      "O monitoramento de estresse hídrico salvou nossa plantação durante a seca do último verão.",
    author: "Patrícia Souza, Sítio Verde Vida",
  },
  {
    quote:
      "O time-lapse de crescimento facilitou treinamentos e decisões de manejo para toda a equipe.",
    author: "Felipe Rocha, Fazenda São Lucas",
  }
];

const features = [
  {
    title: "Automação Inteligente",
    text: "Robôs de software que aprendem com seus dados e otimizam processos automaticamente.",
    icon: "🤖",
  },
  {
    title: "Visão Computacional",
    text: "Análise de imagens de drones e satélites para identificar pragas, doenças e déficit nutricional.",
    icon: "👁️",
  },
  {
    title: "Previsão Preditiva",
    text: "Modelos que antecipam safras, necessidades de irrigação e riscos climáticos.",
    icon: "🔮",
  },
  {
    title: "Detecção de Estresse Hídrico",
    text: "Monitoração contínua do nível de umidade do solo utilizando sensores IoT e visão computacional.",
    icon: "💧",
  },
  {
    title: "Análise de Crescimento",
    text: "Time-lapse automatizado de plantações para avaliar taxas de crescimento e vigor.",
    icon: "📈",
  },
  {
    title: "Integração com Máquinas",
    text: "Conexão e controle remoto de tratores e pulverizadores inteligentes via API.",
    icon: "🚜",
  },
  {
    title: "Mapeamento de Solo",
    text: "Geração de mapas de composição do solo e nutrientes com sensoriamento remoto.",
    icon: "🗺️",
  },
  {
    title: "Alertas em Tempo Real",
    text: "Notificações instantâneas via app e SMS sobre eventos críticos na plantação.",
    icon: "📲",
  },
  {
    title: "Dashboard Personalizado",
    text: "Interface intuitiva com gráficos e relatórios customizáveis para tomada de decisão.",
    icon: "📊",
  }
];


const VideoHero: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [containerHeight, setContainerHeight] = useState("70vh");

  useEffect(() => {
    const updateHeight = () => {
      setContainerHeight(window.innerWidth < 768 ? "50vh" : "70vh");
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
        <h1 className="name">AgroTech Solution</h1>
        <h1>Revolucionando a Agricultura com Visão Computacional</h1>
      </div>
    </div>
  );
};

const Home: FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const { clientWidth } = carouselRef.current;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };

  const [showcaseAnimated, setShowcaseAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowcaseAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <section className="section hero-section">
        <VideoHero />
      </section>

      <section className="section stats">
        <div className="stats-grid">
          {companyStats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section features">
        <h2 className="section-title">Nossas Tecnologias</h2>
        <div className="features-grid">
          {features.map((feat, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Parceiros */}
      <section className="section partners">
        <h2 className="section-title">Parceiros e Clientes</h2>
        <div className="partners-grid">
          {partners.map((partner, idx) => (
            <div key={idx} className="partner-card">
              <img src={partner.logo} alt={partner.name} />
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="section testimonials">
        <h2 className="section-title">O que dizem nossos clientes</h2>
        <div className="testimonials-wrapper">
          <button
            className="testimonial-nav prev"
            onClick={() => scroll("left")}
            aria-label="Anterior"
          >
            <MdChevronLeft size={28} />
          </button>
          <div className="testimonials-grid" ref={carouselRef}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <FaUserCircle className="user-icon" size={48} />
                <blockquote>"{t.quote}"</blockquote>
                <cite>- {t.author}</cite>
              </div>
            ))}
          </div>
          <button
            className="testimonial-nav next"
            onClick={() => scroll("right")}
            aria-label="Próximo"
          >
            <MdChevronRight size={28} />
          </button>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section cta">
        <div className="cta-content">
          <h2>Pronto para transformar sua operação agrícola?</h2>
          <p>
            Agende uma demonstração gratuita e descubra como nossa tecnologia
            pode aumentar sua produtividade.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Fale com um especialista</button>
            <button className="btn-secondary">Ver casos de sucesso</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
