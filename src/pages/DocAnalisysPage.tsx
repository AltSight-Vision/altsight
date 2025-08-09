// src/pages/DocAnalisysPage.tsx
import React, { FC } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Navbar from "../components/Navbar";

import HeroAux from "../components/HeroAux";
import DocAnalisysDetail from "../components/DocAnalisysDetail";
import Footer from "../components/Footer";

const DocAnalisysPage: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const BACKGROUND_COLOR = "#222831";

  return (
    <>
      <Navbar />
      <HeroAux backgroundColor={BACKGROUND_COLOR} />
      <DocAnalisysDetail backgroundColor={BACKGROUND_COLOR} />
      <Footer />
    </>
  );
};

export default DocAnalisysPage;
