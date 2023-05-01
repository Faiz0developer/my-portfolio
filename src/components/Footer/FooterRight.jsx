import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "../../styles/Footer.module.css";
import SocialLogo from "./SocialLogo";

const FooterRight = () => {
  return (
    <div className="flex flex-col gap-4 mt-14 md:mt-0">
      <h4 className="font-semibold text-xl ">About Me</h4>
      <div>
        <p>
          This is me Faizan Siddiqui, Frontend Developer. I work on React and
        </p>
        <p>build projects using React. I love to code.</p>
      </div>
      <div className="flex">
        <SocialLogo to={"https://www.facebook.com/0faiz7?mibextid=ZbWKwL"}>
          <FaFacebook size={30} className={classes.logo} />
        </SocialLogo>
        <SocialLogo
          to={
            "https://twitter.com/FaizanS14160154?t=Krg7mQmRs5jEjHdc2GB_CQ&s=09"
          }
        >
          <FaTwitter size={30} className={classes.logo} />
        </SocialLogo>
        <SocialLogo
          to={"https://www.linkedin.com/in/faizan-siddiqui-6a40ba187"}
        >
          <FaLinkedin size={30} className={classes.logo} />
        </SocialLogo>
      </div>
    </div>
  );
};

export default FooterRight;
