// src/pages/Home.tsx
import React, { FC } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Navbar from "../components/Navbar";

import HeroMain from "../components/HeroMain";
import CompVisionDemo from "../components/CompVisionDemo";
import DocAnalisysDemo from "../components/DocAnalisysDemo";
import ContactDemo from "../components/ContactDemo";
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
      <CompVisionDemo backgroundColor={BACKGROUND_COLOR} />
      
      <DocAnalisysDemo backgroundColor={BACKGROUND_COLOR} />
      <AboutUs backgroundColor={BACKGROUND_COLOR} />
      
      <ContactDemo backgroundColor={BACKGROUND_COLOR} />
      <Footer />
    </>
  );
};

export default Home;
