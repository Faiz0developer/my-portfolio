import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between p-4 md:gap-10 lg:mx-10 text-[#94A3B8]">
      <FooterLeft />
      <FooterRight />
    </footer>
  );
};

export default Footer;
