import React from "react";
import { GlobalStyles as BaseStyles } from "twin.macro";

import Navigation from "./Navigation";

const layout = ({ children }) => {
  return (
    <>
      <BaseStyles />
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  );
};

export default layout;
