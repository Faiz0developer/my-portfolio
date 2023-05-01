import React from "react";
import HeroImg from "../../assets/img3.jpg";
import { Link } from "react-router-dom";
import "../../styles/Home.css";

const Hero = () => {
  return (
    <div className="h-full w-full">
      <div className="mask w-full h-[100vh] relative">
        <img
          src={HeroImg}
          alt="This is an image"
          className="w-full h-full bg-cover bg-center object-cover"
        />
      </div>
      <div className="flex flex-col absolute  top-1/4 text-center w-full gap-4 ">
        <p className="text-slate-300 text-2xl">HI, I'M A Developer.</p>
        <h1 className="text-5xl sm:text-6xl text-white py-2 px-6">
          React Developer
        </h1>
        <div className="flex justify-center gap-4">
          <Link
            to={"/project"}
            className="btn bg-[#065F46] text-white border-[#064E3B] border-2 hover:bg-[#064E3B] active:scale-75 duration-300"
          >
            PROJECTS
          </Link>
          <Link
            to={"/about"}
            className="btn btn-light bg-transparent text-white border-white border-2 hover:bg-white hover:text-black active:scale-75 duration-300"
          >
            ABOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
