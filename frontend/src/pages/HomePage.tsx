// src/pages/Home.tsx
import React, { FC } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Navbar from "../components/Navbar";

import HeroMain from "../components/HeroMain";
import VideoSegDemo from "../components/VideoSegDemo";
import DepthPerDemo from "../components/DepthPerDemo";
import DocAnalisysDemo from "../components/DocAnalisysDemo";
import ContactSection from "../components/ContactSection";
import AboutUs from "../components/AboutUs";

import Footer from "../components/Footer";

const Home: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const BACKGROUND_COLOR = "#222831";

  return (
    <>
      <Navbar />
      <HeroMain backgroundColor={BACKGROUND_COLOR} />
      <VideoSegDemo backgroundColor={BACKGROUND_COLOR} />
      <DepthPerDemo backgroundColor={BACKGROUND_COLOR} />
      <DocAnalisysDemo backgroundColor={BACKGROUND_COLOR} />
      <AboutUs backgroundColor={BACKGROUND_COLOR} />
      
      <ContactSection backgroundColor={BACKGROUND_COLOR} />
      <Footer />
    </>
  );
};

export default Home;
