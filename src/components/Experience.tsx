import React from "react";
import { motion } from "framer-motion";

import shadowfox from "../assets/company_logo/shadowfox.jpeg";
import codsoft from "../assets/company_logo/codsoft.jpeg";

const cardVariantsLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const cardVariantsRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-white">
          EXPERIENCE
        </h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My professional journey and the roles that have shaped my expertise
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative">

        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience 1 */}
        <div className="flex flex-col sm:flex-row items-center mb-16 sm:justify-start">

          {/* Timeline Circle */}
          <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
            <img
              src={codsoft}
              alt="CodSoft"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Content Card */}
          <motion.div
            variants={cardVariantsLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
            className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] sm:mr-44 ml-1 transition-all duration-300"
          >
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                <img
                  src={codsoft}
                  alt="CodSoft"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    FrontEnd Developer Intern
                  </h3>

                  <h4 className="text-md sm:text-sm text-gray-300">
                    <a
                      href="https://www.linkedin.com/company/codsoft/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CodSoft
                    </a>{" "}
                    • Remote
                  </h4>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  2025
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-400">
              Built responsive user interfaces using React and modern CSS
              frameworks. Optimized web applications for maximum speed and
              scalability.
            </p>

            <div className="mt-4">
              <h5 className="font-medium text-white">
                Skills:
              </h5>

              <ul className="flex flex-wrap mt-2">
                {["React.js", "CSS", "Optimization"].map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Experience 2 */}
        <div className="flex flex-col sm:flex-row items-center mb-16 sm:justify-end">

          {/* Timeline Circle */}
          <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
            <img
              src={shadowfox}
              alt="ShadowFox"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Content Card */}
          <motion.div
            variants={cardVariantsRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
            className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] sm:ml-44 ml-8 transition-all duration-300"
          >
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                <img
                  src={shadowfox}
                  alt="ShadowFox"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    FrontEnd Developer Intern
                  </h3>

                  <h4 className="text-md sm:text-sm text-gray-300">
                    <a
                      href="https://www.linkedin.com/company/shadowfoxinfo/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ShadowFox
                    </a>{" "}
                    • Remote
                  </h4>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  2024
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-400">
              Created a terminal-based interactive portfolio using JavaScript.
              Also developed a static e-commerce website named EzShopping with
              responsive UI design.
            </p>

            <div className="mt-4">
              <h5 className="font-medium text-white">
                Skills:
              </h5>

              <ul className="flex flex-wrap mt-2">
                {["JavaScript", "HTML/CSS"].map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default Experience;
