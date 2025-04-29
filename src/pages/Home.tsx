import { FC, useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { partners } from "../data/home/partners";
import { testimonials } from "../data/home/testimonials";
import { features } from "../data/home/features";

import VideoHero from "../components/VideoHero";
import "../styles/home-style.css";

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
