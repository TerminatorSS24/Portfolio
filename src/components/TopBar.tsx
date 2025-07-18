import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { FaGithub, FaMedium } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ${
        isScrolled
          ? "bg-topbar/95 backdrop-blur-sm shadow-md border-b border-grid-line"
          : "bg-topbar/95 backdrop-blur-sm border-b border-grid-line"
      } h-16`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="text-topbar-foreground font-bold text-xl">
          &lt;Subhraneel /Saha&gt;
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center space-x-8">
            <a
              href="#herosection"
              className="text-topbar-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-topbar-foreground hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-topbar-foreground hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-topbar-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-topbar-foreground hover:text-primary transition-colors"
            >
              Education
            </a>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/TerminatorSS24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-topbar-foreground hover:text-primary"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://medium.com/@subhraneelsaha_9631"
            target="_blank"
            rel="noopener noreferrer"
            className="text-topbar-foreground hover:text-primary"
          >
            <FaMedium size={20} />
          </a>
          <a
            href="https://hashnode.com/@TerminatorSS24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-topbar-foreground hover:text-primary"
          >
            <SiHashnode size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-topbar-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-topbar border-t border-grid-line">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#herosection"
              className="text-topbar-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-topbar-foreground hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-topbar-foreground hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-topbar-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-topbar-foreground hover:text-primary transition-colors"
            >
              Education
            </a>
            {/* Social icons in mobile */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/TerminatorSS24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-topbar-foreground hover:text-primary"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://medium.com/@subhraneelsaha_9631"
                target="_blank"
                rel="noopener noreferrer"
                className="text-topbar-foreground hover:text-primary"
              >
                <FaMedium size={20} />
              </a>
              <a
                href="https://hashnode.com/@TerminatorSS24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-topbar-foreground hover:text-primary"
              >
                <SiHashnode size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default TopBar;
