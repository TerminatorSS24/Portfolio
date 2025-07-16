import React from "react";
import nitLogo from "../assets/education_logo/narula_institute_of_technology.jpeg";
import wbbse from "../assets/education_logo/wbbse.jpeg";
import wbchse from "../assets/education_logo/wbchse.jpeg";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic background and qualifications
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* College */}
        <div className="flex flex-col sm:flex-row items-center mb-16 sm:justify-start">
          {/* Timeline Circle with logo */}
          <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 overflow-hidden">
            <img
              src={nitLogo}
              alt="Narula Institute of Technology"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Content Card */}
          <div className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] sm:mr-44 ml-1 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                <img
                  src={nitLogo}
                  alt="Narula Institute of Technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  B.Tech in Computer Science and Engineering
                </h3>
                <h4 className="text-md sm:text-sm text-gray-300">
                  Narula Institute of Technology
                </h4>
                <p className="text-sm text-gray-500 mt-2">2022 - 2026</p>
              </div>
            </div>
            <p className="mt-4 text-gray-400">Current GPA: 8.52</p>
          </div>
        </div>

        {/* Class XII */}
        <div className="flex flex-col sm:flex-row items-center mb-16 sm:justify-end">
          {/* Timeline Circle with wbchse logo */}
          <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 overflow-hidden">
            <img
              src={wbchse}
              alt="WBCHSE"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Content Card */}
          <div className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] sm:ml-44 ml-8 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                <img
                  src={wbchse}
                  alt="WBCHSE"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  Class XII (PCMB)
                </h3>
                <h4 className="text-md sm:text-sm text-gray-300">
                  Belgharia High School • WBCHSE
                </h4>
                <p className="text-sm text-gray-500 mt-2">2020 - 2022</p>
              </div>
            </div>
            <p className="mt-4 text-gray-400">Percentage: 86.4%</p>
          </div>
        </div>

        {/* Class X */}
        <div className="flex flex-col sm:flex-row items-center mb-16 sm:justify-start">
          {/* Timeline Circle with wbbse logo */}
          <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 overflow-hidden">
            <img
              src={wbbse}
              alt="WBBSE"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Content Card */}
          <div className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] sm:mr-44 ml-1 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                <img
                  src={wbbse}
                  alt="WBBSE"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  Class X
                </h3>
                <h4 className="text-md sm:text-sm text-gray-300">
                  Belgharia High School • WBBSE
                </h4>
                <p className="text-sm text-gray-500 mt-2">2019 - 2020</p>
              </div>
            </div>
            <p className="mt-4 text-gray-400">Percentage: 92.14%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
