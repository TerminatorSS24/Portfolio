import TopBar from "../components/TopBar";
import GridBackground from "../components/GridBackground";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import { Github, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Grid Background */}
      <GridBackground />

      {/* Top Bar */}
      <TopBar />

      {/* Main Content */}
      <div className="relative z-10 pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Education Section */}
        <Education />

        {/* Contact Section */}
        <Contact />

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
