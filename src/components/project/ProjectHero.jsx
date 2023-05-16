import React from "react";
import "../../styles/ProjectHero.css";

const ProjectHero = (props) => {
  return (
    <div className="flex w-full h-full flex-col items-center mt-20 sm:mt-28 ">
      <h1 className="highlight text-[34px] sm:text-7xl  text-[#0F172A] font-semibold">
        <span>MY </span>
        <span> PROJECTS </span>
        {/* <br /> */}
        <span> BUNDLE</span>
      </h1>
      <div className="flex flex-col gap-2 my-16 text-xl sm:text-2xl text-[#E2E8F0]">
        <p className="mb-10">Hey, have a look on some of my recent works</p>
        <p className="flex gap-2">
          Click <p className="highlight-1 px-1 text-black">View</p> to 👇
          <br />
        </p>
        <span className="ml-24"> see live projects</span>
        <p className="flex gap-2">
          Click <p className="highlight-1 px-1 text-black">Code</p>for 👇
          <br />
        </p>
        <span className="ml-24"> source code</span>
      </div>
    </div>
  );
};

export default ProjectHero;
