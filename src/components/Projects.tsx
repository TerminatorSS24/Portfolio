import React from "react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import chillhubLogo from "../assets/work_logo/chillhub.png";
import resumeScreenerApp from "../assets/work_logo/resume_screener.jpeg";
import galacticoTheme from "../assets/work_logo/image.png";

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          PROJECTS
        </h2>
        <div className="w-20 h-1 bg-gradient-purple mx-auto mb-6"></div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A showcase of my recent work and personal projects
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Project 1 */}
        <div className="relative group overflow-hidden rounded-xl border border-border min-h-[540px] flex flex-col justify-between bg-card transition-all duration-300 hover:border-primary/30">
          {/* Glowing Background on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl z-0 pointer-events-none" />

          <div className="h-48 overflow-hidden z-10 relative">
            <img
              src={chillhubLogo}
              alt="ChillHub Project Preview"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="p-6 z-10 relative">
            <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
              ChillHub
            </h3>
            <p className="text-muted-foreground mb-4">
              ChillHub is a Netflix clone built with React, Firebase, TMDB API,
              and Tailwind CSS. It features auth, watchlist, trailer view, and a
              responsive UI with Framer Motion animations.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Firebase", "TailwindCSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/TerminatorSS24/ChillHub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <FaGithub size={20} />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://chill-hub-rho.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="text-sm">Live Preview</span>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative group overflow-hidden rounded-xl border border-border min-h-[540px] flex flex-col justify-between bg-card transition-all duration-300 hover:border-primary/30">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl z-0 pointer-events-none" />

          <div className="h-48 overflow-hidden z-10 relative">
            <img
              src={resumeScreenerApp}
              alt="Resume Screener App"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6 z-10 relative">
            <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
              Resume Screener
            </h3>
            <p className="text-muted-foreground mb-4">
              An AI-powered web app that automates resume screening using NLP &
              ML. Built with Streamlit, this helps HRs classify resumes
              efficiently into job roles.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "Streamlit", "React"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/TerminatorSS24/Resume-Screening-App/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <FaGithub size={20} />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="text-sm">Coming Soon</span>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="relative group overflow-hidden rounded-xl border border-border min-h-[540px] flex flex-col justify-between bg-card transition-all duration-300 hover:border-primary/30">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl z-0 pointer-events-none" />

          <div className="h-48 overflow-hidden z-10 relative">
            <img
              src={galacticoTheme}
              alt="Galactico Theme Preview"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6 z-10 relative">
            <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
              Galactico Theme
            </h3>
            <p className="text-muted-foreground mb-4">
              Galactico Theme is my first Visual Studio Code theme, designed
              with a sleek dark mode and cosmic-inspired colors to enhance the
              coding experience. It’s lightweight, open-source, and I’m
              constantly improving it based on user feedback.
            </p>
            <div className="flex flex-wrap gap-2">
              {["json"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/TerminatorSS24/Galactico-Theme"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <FaGithub size={20} />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=SubhraneelSaha.galactico-theme"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="text-sm">Live Preview</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
