import { FC, useRef, useState, useEffect } from "react";
import heroVideo from "../assets/videos/drone-footage.mp4";
import "../styles/components/video-hero-style.css";

interface VideoHeroProps {
  companyName?: string;
  tagline?: string;
}

const VideoHero: FC<VideoHeroProps> = ({
  companyName = "AltSight Vision",
  tagline = "Revolucionando a Agricultura com Visão Computacional",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [containerHeight, setContainerHeight] = useState<string>("70vh");

  useEffect(() => {
    const handleResize = () => {
      setContainerHeight(window.innerWidth < 768 ? "50vh" : "70vh");
    };
    
    // Set initial height
    handleResize();
    
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    
    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero-container" style={{ height: containerHeight }}>
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="responsive-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Drone footage of agricultural fields"
        />
      </div>
      <div className="hero-content">
        <h1 className="company-name">{companyName}</h1>
        <h2 className="company-tagline">{tagline}</h2>
      </div>
    </section>
  );
};

export default VideoHero;