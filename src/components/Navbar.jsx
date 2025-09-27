import React, { useState, useEffect, useRef } from "react";
// GitHub icon SVG component
const GithubIcon = () => (
  <svg
    className="w-6 h-6 text-gray-200 hover:text-white transition-colors duration-200"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.48 2 2 6.58 2 12.15c0 4.45 2.865 8.222 6.84 9.56.5.092.683-.222.683-.493 0-.243-.009-.889-.014-1.745-2.782.613-3.369-1.366-3.369-1.366C5.288 17.588 4.7 17.32 4.7 17.32c-.908-.638.07-.625.07-.625 1.003.071 1.53 1.054 1.53 1.054.892 1.562 2.341 1.112 2.91.852.09-.65.35-1.113.637-1.37-2.222-.26-4.555-1.144-4.555-5.092 0-1.124.386-2.042 1.022-2.761-.103-.26-.445-1.309.097-2.73 0 0 .84-.273 2.75 1.046A9.42 9.42 0 0112 7.837c.851.004 1.71.115 2.513.339 1.91-1.319 2.75-1.046 2.75-1.046.542 1.421.2 2.47.097 2.73.637.72 1.022 1.637 1.022 2.761 0 3.958-2.336 4.828-4.564 5.085.36.315.68.936.68 1.887 0 1.363-.012 2.463-.012 2.797 0 .272.18.589.688.489C19.137 20.37 22 16.6 22 12.15 22 6.58 17.523 2 12 2Z" />
  </svg>
);

const AnimatedNavLink = ({ href, children, onClick }) => {
  const defaultTextColor = "text-gray-300";
  const hoverTextColor = "text-white";
  const textSizeClass = "text-sm";

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      className={`group relative inline-block overflow-hidden h-5 items-center ${textSizeClass}`}
    >
      <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
        <span className={defaultTextColor}>{children}</span>
        <span className={hoverTextColor}>{children}</span>
      </div>
    </a>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full");
  const shapeTimeoutRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass("rounded-xl");
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass("rounded-full");
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  // Four-dot logo (white dots) for visibility on black
  const logoElement = (
    <div className="relative w-6 h-6 flex items-center justify-center ">
      <span className="absolute w-2 h-2 rounded-full bg-white top-0 left-1/2 transform -translate-x-1/2"></span>
      <span className="absolute w-2 h-2 rounded-full bg-white left-0 top-1/2 transform -translate-y-1/2"></span>
      <span className="absolute w-2 h-2 rounded-full bg-white right-0 top-1/2 transform -translate-y-1/2"></span>
      <span className="absolute w-2 h-2 rounded-full bg-white bottom-0 left-1/2 transform -translate-x-1/2"></span>
    </div>
  );

  const navLinksData = [
    { label: "Home", href: "#1" },
    { label: "About", href: "#2" },
    { label: "Projects", href: "#3" },
    { label: "Certifications", href: "#4" },
    { label: "Contact Me", href: "#5" },
  ];

  const scrollToId = (id) => {
    if (id === "#1") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id.substring(1)); // remove #
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  // Function to open resume PDF in new tab
  const openResume = () => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  };

  const signupButtonElement = (
    <div className="relative group w-full sm:w-auto">
      <div className="absolute inset-0 -m-2 rounded-full hidden sm:block bg-gray-100 opacity-40 filter blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"></div>
      <button
        onClick={openResume}
        className="relative z-10 px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-gray-200 hover:to-gray-400 transition-all duration-200 w-full sm:w-auto"
      >
        Resume
      </button>
    </div>
  );

  return (
    <header
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center px-6 py-3 ${headerShapeClass} border border-white bg-black w-full max-w-4xl transition-[border-radius] duration-300 ease-in-out shadow-[0_0_20px_6px_rgba(255,255,255,0.3)]`}
      style={{ boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.7)" }}
    >
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        <div className="flex items-center space-x-3">
          {logoElement}
          <span className="text-blue-400 font-semibold select-none">
            Soumyosish
          </span>
        </div>

        <nav className="hidden sm:flex items-center space-x-4 sm:space-x-6 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink
              key={link.href}
              href={link.href}
              onClick={() => scrollToId(link.href)}
            >
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        {/* Desktop right side */}
        <div className="hidden sm:flex items-center gap-4 sm:gap-6">
          <a
            href="https://github.com/Soumyosish"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-200 hover:text-white transition-colors"
          >
            <GithubIcon />
          </a>
          {signupButtonElement}
        </div>

        {/* Mobile right side: hamburger and GitHub icon */}
        <div className="sm:hidden flex items-center gap-3">
          <button
            className="flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-200 hover:text-white transition-colors"
          >
            <GithubIcon />
          </a>
        </div>
      </div>

      <div
        className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden ${
          isOpen
            ? "max-h-[1000px] opacity-100 pt-4"
            : "max-h-0 opacity-0 pt-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 text-base w-full">
          {navLinksData.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(link.href);
              }}
              className="text-gray-300 hover:text-white transition-colors w-full text-center"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center space-y-4 mt-4 w-full">
          {signupButtonElement}
        </div>
      </div>
    </header>
  );
}
