import React from "react";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="div-h1 my-5 w-11/12 lg:w-4/5 mx-auto">
      <h1 className="sm:h-[100px] text-4xl sm:text-7xl mt-2 mb-4 text-white font-bold">
        My Projects
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        <WorkCard />
      </div>
    </div>
  );
};

export default Work;
