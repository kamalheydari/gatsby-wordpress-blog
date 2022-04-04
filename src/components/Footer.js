import React from "react";
import { FooterWrapper } from "../Styles/CustomStyles.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        developed by{" "}
        <a href='http://heydari-dev.ir' target='_blank' rel='noreferrer'>
          Kamal Heydari
        </a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
