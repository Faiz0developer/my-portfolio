import React from "react";
import AboutHero from "./AboutHero";
import Education from "./about-content/Education";
import Skills from "./about-content/Skills";
import "../../styles/AboutHero.css";

const AboutMain = () => {
  return (
    <div className="hero-img lg:h-[900px]">
      <div className="flex flex-col w-11/12 mx-auto justify-center items-center py-20 text-white gap-10">
        <AboutHero />
        <div className="flex flex-col md:flex-row justify-between w-3/4  gap-20 md:ml-32">
          <Education />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
