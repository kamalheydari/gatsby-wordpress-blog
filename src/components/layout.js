import React from "react";
import { GlobalStyles as BaseStyles } from "twin.macro";

import { Navigation, Footer } from ".";
import { Container } from "../Styles/CustomStyles.styles";

const layout = ({ children }) => {
  return (
    <>
      <BaseStyles />
      <header>
        <Navigation />
      </header>
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default layout;
