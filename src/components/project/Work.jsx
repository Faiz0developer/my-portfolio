import React from "react";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="my-5 w-11/12 lg:w-4/5 mx-auto">
      <h1 className="text-3xl mt-2 mb-4 text-white font-bold">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <WorkCard />
        {/* <div className="bg-black opacity-75 p-4 gap-3">
          <img src={Bitfinex} alt="Bitcoin app" className="object-cover" />

          <div>
            <h1>My heading</h1>
            <p>discription</p>
            <div>
              <button>View</button>
              <button>Code</button>
            </div>
          </div>
        </div> */}
        {/* {ProjectData.map((data) => {
          return (
            <div className="bg-black opacity-75 p-4 gap-3">
              <img src={data.img} alt="Bitcoin app" className="object-cover" />

              <div>
                <h1>{data.title}</h1>
                <p>{data.discription}</p>
                <div>
                  <button>View</button>
                  <button>Code</button>
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Work;
