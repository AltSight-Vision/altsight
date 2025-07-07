// src/pages/Home.tsx
import React, { FC } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CompVisionSection from "../components/CompVisionSection";
import DocAnalisysSection from "../components/DocAnalisysSection";
import AboutUs from "../components/AboutUs";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const darkBg = "#222831";
  const lightBg = "#f5f5f5";

  // Pequena barra de transição
  const TransitionBar: FC<{ from: string; to: string }> = ({ from, to }) => (
    <Box
      sx={{
        width: "100%",
        height: 40,
        backgroundImage: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    />
  );

  return (
    <>
      <Navbar />

      <HeroSection backgroundColor={darkBg} />
      <CompVisionSection backgroundColor={darkBg} />

      <TransitionBar from={darkBg} to={lightBg} />
      <DocAnalisysSection backgroundColor={lightBg} />

      <TransitionBar from={lightBg} to={darkBg} />
      <AboutUs backgroundColor={darkBg} />
      <ContactSection backgroundColor={darkBg} />

      <Footer />
    </>
  );
};

export default Home;
