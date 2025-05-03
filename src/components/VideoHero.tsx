import { FC, useRef, useState, useEffect } from "react";
import heroVideo from "../assets/sections/drone-footage.mp4";
import "../styles/components/video-hero-style.css";

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
          src="/videos/drone-footage.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="hero-content">
        <h1 className="name">AgroTech Solution</h1>
        <h1>Revolucionando a Agricultura com Visão Computacional</h1>
      </div>
    </div>
  );
};

export default VideoHero;
