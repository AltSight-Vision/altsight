import { FC, useRef, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import heroVideo from "../assets/videos/drone-footage.mp4";

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

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: containerHeight,
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component="video"
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Drone footage of agricultural fields"
          sx={{
            width: "100%",
            height: "auto",
            minHeight: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          padding: 3,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
          {companyName}
        </Typography>
        <Typography variant="h5" component="h2" sx={{ fontWeight: "medium" }}>
          {tagline}
        </Typography>
      </Box>
    </Box>
  );
};

export default VideoHero;