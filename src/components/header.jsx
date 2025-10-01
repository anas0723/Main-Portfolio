import React, { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import MainCursor from "./MainCursor.jsx";
import resume from "../assets/Pictures/anas-me-resume.pdf";

const links = [
  { title: "About", link: "#about" },
  { title: "ToolKit", link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" },
];

export default function Header() {
  const [isHamburgerOpen, setIsHamBurgerOpen] = useState(false);

  const handleOpenResume = () => {
    window.open(resume, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="custom-bg flex justify-between items-center w-full p-4 relative z-10">
      <h1>
        <a
          href="/"
          className="text-3xl text-right relative group cursor-pointer"
        >
          <span className="text-white">&lt;</span>{" "}
          <span className="specific-color allura-regular text-4xl relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3fc1a3] after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full">
            M.Anas
          </span>{" "}
          <span className="text-white">&gt;</span>
        </a>
      </h1>

      {/* Hamburger Menu Button */}
      <div
        className="text-3xl sm:hidden cursor-pointer transition-transform duration-300 ease-in-out"
        onClick={() => setIsHamBurgerOpen(!isHamburgerOpen)}
      >
        <RxHamburgerMenu />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex text-lg justify-evenly gap-10 mr-14 items-center">
        {links.map((item, i) => (
          <li className="navlinkStyle py-2 text-right relative group" key={i}>
            <a
              className="relative text-white after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3fc1a3] after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full after:left-0 cursor-pointer"
              href={item.link}
            >
              {item.title}
            </a>
            {/* Inline hover option for Projects */}
            {item.title === "Projects" && (
              <Link
                to="/projects"
                className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-lg text-white/80 hover:text-white opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 cursor-pointer whitespace-nowrap after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3fc1a3] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              >
                View All Projects
              </Link>
            )}
          </li>
        ))}
        {/* Resume Button - Desktop */}
        <li className="ml-auto">
          <button
            onClick={handleOpenResume}
            className="rounded-2xl text-white px-4 py-2 border-2 border-transparent shadow-none hover:shadow-lg hover:border-[#64ffda] hover:shadow-[#64ffda] transition-all duration-300 cursor-pointer"
          >
            Resume
          </button>
        </li>
      </ul>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`absolute top-full right-0 w-full bg-[#0a192f] py-4 px-6 sm:hidden transition-all duration-300 ease-in-out transform ${
          isHamburgerOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-end">
          {links.map((item, i) => (
            <li className="navlinkStyle py-2 text-right relative group" key={i}>
              <a
                href={item.link}
                className="relative text-white after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3fc1a3] after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full after:left-0 cursor-pointer"
              >
                {item.title}
              </a>
              {/* Mobile dropdown for Projects */}
              {item.title === "Projects" && (
                <Link
                  to="/projects"
                  onClick={() => setIsHamBurgerOpen(false)}
                  className="relative mt-1 pr-1 text-lg text-white transition-colors duration-300 cursor-pointer whitespace-nowrap after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3fc1a3] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  View All Projects
                </Link>
              )}
            </li>
          ))}
          {/* Resume Button - Mobile */}
          <li className="w-full flex justify-end pt-2">
            <button
              onClick={handleOpenResume}
              className="rounded-2xl text-white px-4 py-2 border-2 border-transparent hover:border-[#64ffda] shadow-none hover:shadow-lg hover:shadow-[#64ffda] transition-all duration-300 mr-[-13px] cursor-pointer"
            >
              Resume
            </button>
          </li>
        </ul>
      </div>
      <MainCursor />
    </header>
  );
}
