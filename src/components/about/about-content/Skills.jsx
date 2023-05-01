import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Skills = () => {
  const skills = [
    "HTML (Hyper Markup Language)",
    "CSS (Cascading Style Sheet)",
    "CSS Libraries- Tailwind CSS, Bootstrap",
    "JavaScript",
    "React",
    "Redux, Redux Toolkit",
    "Material UI",
    "Nextjs Basics",
    "Visual Studio ",
    "Git, Git bash",
    "Version Control",
    "SASS (Syntactically Awesome Style Sheets)",
    "SCSS (Sassy Cascading Style Sheets)",
  ];

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl text-[#C2410C] font-bold underline">Skills</h1>
      <ul>
        {skills.map((skill) => {
          return (
            <div className="flex gap-1" key={skill}>
              <FaAngleDoubleRight className="mt-1" />
              <li>{skill}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
