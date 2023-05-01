import React from "react";
import { Link } from "react-router-dom";

const SocialLogo = ({ to, children }) => {
  return (
    <>
      <Link to={to} target="_blank">
        {children}
      </Link>
    </>
  );
};

export default SocialLogo;
