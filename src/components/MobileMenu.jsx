
import { useEffect, useState } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let currentSection = activeSection; 
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            if (currentSection !== id) {
              currentSection = id;
              setActiveSection(id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  const handleClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out 
                  ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {["home", "about", "projects", "contact"].map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`text-2xl font-semibold my-4 transform transition-transform duration-300
                      ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} 
                      ${activeSection === section ? "text-blue-500" : "text-white"} 
                      transition-colors duration-300`}
          onClick={() => handleClick(section)}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </div>
  );
};
