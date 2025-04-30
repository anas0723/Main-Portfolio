import React, { useState } from "react";
import { decode } from "html-entities";
import { RxHamburgerMenu } from "react-icons/rx";
import MainCursor from "./MainCursor";

const links = [
  { title: "About", link: "#About" },
  { title: "ToolKit", link: "#ToolKit" },
  { title: "Projects", link: "#Projects" },
  { title: "LinksHub", link: "#LinksHub" }
];

export default function Header() {
  const [isHamburgerOpen, setIsHamBurgerOpen] = useState(false);

  return (
    <header className="custom-bg flex justify-between items-center w-full p-4 relative z-10">
      <h1>
        <a href="/" className="text-3xl text-right relative group cursor-pointer">
          {decode("&lt")}{" "}
          <span className="specific-color allura-regular text-4xl relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3fc1a3] after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full">
            M.Anas
          </span>{" "}
          {decode("&gt")}
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
          </li>
        ))}
        {/* Resume Button - Desktop */}
        <li className="ml-auto">
          <a
            className="rounded-2xl text-white px-4 py-2 border-2 border-transparent shadow-none hover:shadow-lg hover:border-[#64ffda] hover:shadow-[#64ffda] transition-all duration-300 cursor-pointer"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`absolute top-full right-0 w-full bg-[#0a192f] py-4 px-6 sm:hidden transition-all duration-300 ease-in-out transform ${
          isHamburgerOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
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
            </li>
          ))}
          {/* Resume Button - Mobile */}
          <li className="w-full flex justify-end pt-2">
            <a
              className="rounded-2xl text-white px-4 py-2 border-2 border-transparent hover:border-[#64ffda] shadow-none hover:shadow-lg hover:shadow-[#64ffda] transition-all duration-300 mr-[-13px] cursor-pointer"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <MainCursor />
    </header>
  );
}
