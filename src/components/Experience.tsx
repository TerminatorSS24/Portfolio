// import React from "react";

// const Experience = () => {
//   return (
//     <section id="experience" className="container mx-auto px-4 py-20">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//           EXPERIENCE
//         </h2>
//         <div className="w-20 h-1 bg-gradient-purple mx-auto mb-6"></div>
//         <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//           My professional journey and the roles that have shaped my
//           expertise
//         </p>
//       </div>

//       <div className="max-w-4xl mx-auto space-y-8">
//         {/* Experience 1 */}
//         <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300">
//           <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
//             <h3 className="text-2xl font-bold text-card-foreground">
//               FrontEnd Developer Intern
//             </h3>
//             <span className="text-primary font-medium">2024</span>
//           </div>
//           <h4 className="text-lg text-muted-foreground mb-4">
//             <a href="https://www.linkedin.com/company/shadowfoxinfo/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
//               ShadowFox
//             </a>{" "}
//             • Remote
//           </h4>
//           <p className="text-muted-foreground leading-relaxed">
//             Created a terminal based well looking portfolio of mine. Fully
//             functional. Used only simple Javascript.
//             <br />
//             Also created a simple e-commerce website, which is a static
//             one, named EzShopping.
//           </p>
//         </div>

//         {/* Experience 2 */}
//         <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300">
//           <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
//             <h3 className="text-2xl font-bold text-card-foreground">
//               FrontEnd Developer Intern
//             </h3>
//             <span className="text-primary font-medium">2025</span>
//           </div>
//           <h4 className="text-lg text-muted-foreground mb-4">
//             <a href="https://www.linkedin.com/company/codsoft/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
//               CodSoft
//             </a>{" "}
//             • Remote
//           </h4>
//           <p className="text-muted-foreground leading-relaxed">
//             Built responsive user interfaces using React and modern CSS
//             frameworks. Optimized web applications for maximum speed and
//             scalability.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React from "react";
import shadowfox from "../assets/company_logo/shadowfox.jpeg";
import codsoft from "../assets/company_logo/codsoft.jpeg";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My professional journey and the roles that have shaped my expertise
        </p>
      </div>

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
          <div className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] sm:mr-44 ml-1 transform transition-transform duration-300 hover:scale-105">
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
                <p className="text-sm text-gray-500 mt-2">2025</p>
              </div>
            </div>

            <p className="mt-4 text-gray-400">
              Built responsive user interfaces using React and modern CSS
              frameworks. Optimized web applications for maximum speed and
              scalability.
            </p>
            <div className="mt-4">
              <h5 className="font-medium text-white">Skills:</h5>
              <ul className="flex flex-wrap mt-2">
                <li className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400">
                  React.js
                </li>
                <li className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400">
                  CSS
                </li>
                <li className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400">
                  Optimization
                </li>
              </ul>
            </div>
          </div>
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
          <div className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] sm:ml-44 ml-8 transform transition-transform duration-300 hover:scale-105">
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
                <p className="text-sm text-gray-500 mt-2">2024</p>
              </div>
            </div>

            <p className="mt-4 text-gray-400">
              Created a terminal based well looking portfolio of mine. Fully
              functional. Used only simple Javascript.
              <br />
              Also created a simple e-commerce website, which is a static
              one, named EzShopping.
            </p>
            <div className="mt-4">
              <h5 className="font-medium text-white">Skills:</h5>
              <ul className="flex flex-wrap mt-2">
                <li className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400">
                  JavaScript
                </li>
                <li className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400">
                  HTML/CSS
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
