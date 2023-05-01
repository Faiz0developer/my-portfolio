import React from "react";
import ProjectHero from "./ProjectHero";
import Work from "./Work";

const ProjectMain = () => {
  return (
    <div className="hero-img1 ">
      <div className="flex flex-col w-11/12 mx-auto py-20 text-white gap-10">
        <ProjectHero />
        <Work />
      </div>
    </div>
  );
};

export default ProjectMain;
