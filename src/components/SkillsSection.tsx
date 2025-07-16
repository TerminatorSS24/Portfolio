import React from "react";
import Tilt from "react-parallax-tilt";

// Frontend logos
import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import javascriptLogo from "../assets/tech_logo/javascript.png";
import reactLogo from "../assets/tech_logo/reactjs.png";
import nextLogo from "../assets/tech_logo/nextjs.png";
import tailwindLogo from "../assets/tech_logo/css.png"; // Replace with tailwind.png if available
import muiLogo from "../assets/tech_logo/materialui.png";
import bootstrapLogo from "../assets/tech_logo/bootstrap.png";

// Backend logos
import nodeLogo from "../assets/tech_logo/javascript.png"; // Replace with nodejs.png if available
import expressLogo from "../assets/tech_logo/express.png";
import mongodbLogo from "../assets/tech_logo/mongodb.png";
import mysqlLogo from "../assets/tech_logo/mysql.png";
// import springbootLogo from "../assets/tech_logo/java.png"; // Replace with springboot.png if available
import djangoLogo from "../assets/tech_logo/python.png"; // Replace with django.png if available

// Languages logos
import cLogo from "../assets/tech_logo/c.png";
import cppLogo from "../assets/tech_logo/cpp.png";
import pythonLogo from "../assets/tech_logo/python.png";
import javaLogo from "../assets/tech_logo/java.png";
import tsLogo from "../assets/tech_logo/typescript.png";
import sqlLogo from "../assets/tech_logo/mysql.png";

// Tools logos
import gitLogo from "../assets/tech_logo/git.png";
import githubLogo from "../assets/tech_logo/github.png";
import vscodeLogo from "../assets/tech_logo/vscode.png";
import compassLogo from "../assets/tech_logo/mc.png";
import jupyterLogo from "../assets/tech_logo/jupyter.png";
import kaggleLogo from "../assets/tech_logo/kaggle.png";
import eclipseLogo from "../assets/tech_logo/eclipse.png";

type Skill = {
  name: string;
  logo?: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillLogos: Record<string, string> = {
  // Frontend
  "HTML": htmlLogo,
  "CSS": cssLogo,
  "JavaScript": javascriptLogo,
  "React JS": reactLogo,
  "Next JS": nextLogo,
  "Tailwind CSS": tailwindLogo,
  "Material UI": muiLogo,
  "Bootstrap": bootstrapLogo,

  // Backend
  "Node JS": nodeLogo,
  "Express JS": expressLogo,
  "MongoDB": mongodbLogo,
  "MySQL": mysqlLogo,
  // "Spring Boot": springbootLogo,
  "Django": djangoLogo,

  // Languages
  "C": cLogo,
  "C++": cppLogo,
  "Python": pythonLogo,
  "Java": javaLogo,
  "TypeScript": tsLogo,
  "SQL": sqlLogo,

  // Tools
  "Git": gitLogo,
  "GitHub": githubLogo,
  "VS Code": vscodeLogo,
  "Compass": compassLogo,
  "Jupyter": jupyterLogo,
  "Kaggle": kaggleLogo,
  "Eclipse": eclipseLogo,
};

const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React JS" },
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
      { name: "Bootstrap" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS" },
      { name: "Express JS" },
      { name: "MongoDB" },
      { name: "MySQL" },
      // { name: "Spring Boot" },
      { name: "Django" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C" },
      { name: "C++" },
      { name: "Python" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Compass" },
      { name: "Jupyter" },
      { name: "Kaggle" },
      { name: "Eclipse" },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
  <section
    id="skills"
    className="py-24 px-[8vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Grid Container */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skillsData.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          className="w-full h-full"
        >
          <div className="min-h-[350px] bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] flex flex-col justify-start">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-3 w-full"
                >
                  {skillLogos[skill.name] && (
                    <div className="min-w-0 w-6 h-6 shrink-0">
                      <img
                        src={skillLogos[skill.name]}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <span className="text-xs sm:text-sm text-gray-300 break-words whitespace-pre-wrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

};

export default SkillsSection;
