import { FC, useState, useEffect, useRef } from "react";
import { features } from "../data/home/features";

import VideoHero from "../components/VideoHero";
import ContactSection from "../components/Contact";
import "../styles/pages/home-style.css";
import "../styles/components/features-style.css";

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
      <VideoHero />
      {/* Seção para as funcionalidades */}
      <section className="section features">
        {/* === BOLHAS ESQUERDA === */}
        <span className="bubble bubble-l1" />
        <span className="bubble bubble-l2" />
        <span className="bubble bubble-l3" />
        <span className="bubble bubble-l4" />
        {/* === BOLHAS DIREITA === */}
        <span className="bubble bubble-r1" />
        <span className="bubble bubble-r2" />
        <span className="bubble bubble-r3" />
        <span className="bubble bubble-r4" />

        <h2 className="section-title">Nossas Tecnologias</h2>
        <div className="features-grid">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="feature-card"
              style={{ "--i": idx } as React.CSSProperties}
            >
              <div className="feature-icon">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.text}</p>
            </div>
          ))}
        </div>
      </section>
<ContactSection></ContactSection>
    </div>
  );
};

export default Home;
