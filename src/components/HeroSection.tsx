import { Download } from "lucide-react";
import ReactTypingEffect from "react-typing-effect";
import { useTypewriter } from "react-simple-typewriter";
import Button from "./Button";
import profilePic from "../assets/pics/DSC_0752.jpeg";
import cv from "../assets/resume/Subhraneel_Saha.pdf";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: [
      `I am a front end developer with over 2 years of experience in building scalable web applications. Also skillful to some extent in Full Stack development to build real world solutions. I'm an intermediate competitive programmer. My fav subjects are DBMS and DSA.`,
    ],
    typeSpeed: 30,
    deleteSpeed: 0,
    delaySpeed: 1000,
    loop: 1,
  });

  return (
    <section className="container mx-auto px-4 py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl text-muted-foreground">
              Hi, I am
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Subhraneel Saha
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl text-muted-foreground">
                I am a
              </span>
              <ReactTypingEffect
                text={[
                  "Frontend Developer",
                  "Web Designer",
                  "Coder",
                  "Problem Solver",
                ]}
                speed={100}
                eraseSpeed={50}
                eraseDelay={2000}
                typingDelay={500}
                className="text-xl md:text-2xl bg-gradient-purple bg-clip-text text-transparent font-semibold"
              />
            </div>
          </div>

          {/* ✨ Typewriter Paragraph */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            {text}
          </p>

          {/* 📄 Download CV Button */}
          <a href={cv} download className="block mt-6">
            <Button variant="primary" className="group">
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              DOWNLOAD CV
            </Button>
          </a>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-purple p-1 animate-pulse">
              <div className="bg-background rounded-full h-full w-full"></div>
            </div>
            {/* Profile image */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow-purple">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
