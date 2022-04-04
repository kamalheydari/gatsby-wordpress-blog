import React from "react";
import { GlobalStyles as BaseStyles } from "twin.macro";

import {Navigation,Footer} from ".";

const layout = ({ children }) => {
  return (
    <>
      <BaseStyles />
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default layout;
