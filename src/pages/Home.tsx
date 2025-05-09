import { FC, useState, useEffect, useRef } from "react";
import { features } from "../data/home/features";

import VideoHero from "../components/VideoHero";
import ContactSection from "../components/Contact";
import WhatWeDoSection from "../components/WhatWeDo";
import "../styles/pages/home.scss";
import "../styles/components/features-style.scss";

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
      <WhatWeDoSection></WhatWeDoSection>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
