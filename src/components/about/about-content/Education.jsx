import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Education = () => {
  const educations = [
    {
      standard: "B.Tech",
      institute: "Bipin Tripathi Kumaun Institute of Technology",
      city: "Dwarahat,Almora",
      date: "08/2018 - 06/2022",
    },
    {
      standard: "Intermediate",
      institute: "Jawahar Navodaya Vidyalaya",
      city: "Suyalbari, Nainital",
      date: "04/2016 - 03/2017",
    },
    {
      standard: "High School",
      institute: "Jawahar Navodaya Vidyalaya",
      city: "Suyalbari, Nainital",
      date: "04/2014 - 04/2015",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl text-[#C2410C] font-bold underline">Education</h1>
      <div className="flex flex-col gap-3">
        {educations.map((education) => {
          return (
            <div className="flex gap-2" key={education.standard}>
              <FaAngleDoubleRight className="mt-1" size={20} />
              <div className="text-base">
                <strong>
                  <p>{education.standard}</p>
                </strong>
                <p> {education.institute}</p>
                <p>{education.city}</p>
                <strong>
                  <p> {education.date}</p>
                </strong>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
