import React from "react";
import "../../styles/ProjectHero.css";

const ProjectHero = (props) => {
  return (
    <div className="flex w-full h-full flex-col items-center mt-20 sm:mt-28 ">
      <h1 className="text-3xl sm:text-5xl text-[#0F172A] font-semibold">
        PROJECTS
      </h1>
      <p className="text-xl sm:text-2xl text-[#E2E8F0]">
        Some of my most recent works
      </p>
    </div>
  );
};

export default ProjectHero;
