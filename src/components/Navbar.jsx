import { useEffect, useState, useRef } from "react";
import Lenis from "lenis";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home");
  const activeSectionRef = useRef(activeSection); 

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
 
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({behavior:"smooth"});
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let currentSection = activeSectionRef.current;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            if (currentSection !== id) {
              activeSectionRef.current = id;
              setActiveSection(id);
            }
            break;
          }
        }
      }
    };

    const onScroll = () => requestAnimationFrame(handleScroll); 
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            onClick={() => scrollToSection("home")}
            className="font-mono text-xl font-bold text-white cursor-pointer"
          >
            Khoa<span className="text-blue-500"> An</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-gray-300 transition-[top,left] duration-500 ease-in-out cursor-pointer px-4 py-2 ${
                  activeSection === section
                    ? "bg-blue-500 text-white rounded-lg shadow-lg"
                    : "hover:text-white"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
