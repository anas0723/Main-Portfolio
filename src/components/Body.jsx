import React from "react";
import FallingText from "./FallingText";
import Skill from "./Skill";
import Project from "./Project.jsx";
import SocialLinks from "./SocialLinks.jsx";
import { LiaAcquisitionsIncorporated } from "react-icons/lia";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import { TypeAnimation } from "react-type-animation";
import Cursor from  './Cursor.jsx';
import Header  from "./Header.jsx";

export default function Body(About, asdfsad, asdsad) {
  return (
  <>
    <Header />
    <div className="bg-[#0a192f] w-full min-h-screen flex justify-center items-center p-6">
      <div className="bg-[#112240] shadow-2xl rounded-lg w-full max-w-6xl p-8 text-white">
         
        <div className="">
          <h1 className="text-xl inline sm:text-2xl font-light">Hi, Myself</h1>
          <br />
          <h2 className="text-4xl inline sm:text-5xl font-bold text-[#64ffda] mt-2">
            Muhammad Anas
          </h2>
          <br />
          <h3 className="text-lg inline sm:text-2xl font-light text-gray-300 mt-2 delicious-handrawn-regular">
            I build sleek and interactive web experiences.
          </h3>

          <div className="mt-4 text-lg text-[#64ffda]">
            <TypeAnimation
              sequence={["Building sleek, responsive, and dynamic web apps", 1000,
                "Always learning new things & dedicated to my work", 1000,
                "I am MERN Stack Developer",  1000]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex justify-center mt-6">
            <ul className="text-xl sm:text-3xl px-6 py-3 rounded-lg border-2 border-[#64ffda] shadow-lg hover:shadow-[#64ffda] transition-all duration-300  ">
              About Me
            </ul>
          </div>

          <div id="about" className="flex justify-center">
            <p className="text-gray-300 text-base sm:text-lg mt-6 leading-relaxed max-w-6xl">
              Hi!{" "}
              <span className="font-semibold text-[#64ffda]">
                I'm Muhammad Anas Soomro,
              </span>{" "}
              a passionate
              <span className="font-semibold text-[#64ffda]">
                {" "}
                MERN Stack Developer
              </span>{" "}
              with a strong focus on building modern, scalable, and user
              friendly web applications. I specialize in
              <span className="font-semibold text-[#64ffda]">
                {" "}
                React, Tailwind CSS, and the MERN stack
              </span>
              , ensuring seamless frontend experiences. Currently, <br /> I am
              deepening my knowledge in frontend development while also
              exploring backend technologies. I believe in writing clean,
              maintainable code and love solving complex problems. Check out
              some of my work
              <span className="font-semibold text-[#64ffda] hover:underline ml-1">
                <a href="#Project" className="cursor-pointer">
                  Projects
                </a>
              </span>
              . Let's build something amazing together! 🚀
            </p>
          </div>
        </div>

        <div className="relative sm:hidden md:flex hidden text-full h-[230px] mt-10 border-[#64ffda] border rounded-lg overflow-hidden ">
          <FallingText
            text={`MERN Stack React & Tailwind Frontend Developer Code & Chai Sleek Designs Learning New Technologies`}
            highlightWords={[
              "MERN",
              "React",
              "Tailwind",
              "Developer",
              "Chai",
              "Designs",
              "New",
            ]}
            highlightClass="bg-gray-800 text-3xl border border-gray-500 px-2 py-1 rounded-md"
            trigger="hover"
            className="bg-amber-500"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            fontSize="2rem"
            mouseConstraintStiffness={0.9}
          />
        </div>
        {/* Mobile  */}
        <div className="relative sm:flex md:hidden text-full h-64 mt-10 border-[#64ffda] border rounded-lg overflow-hidden">
          <FallingText
            text={`MERN React Frontend Developer  Sleek Designs Learning New Technologies`}
            highlightWords={[
              "MERN",
              "Frontend",
              "Sleek",
              "Learning",
              "Technologies",
            ]}
            highlightClass="bg-gray-800 text-3xl border border-gray-500 px-2 py-1 rounded-md"
            trigger="hover"
            className="bg-amber-500"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            fontSize="1rem"
            mouseConstraintStiffness={0.9}
          />
        </div>
          
        <Skill />
        <Cursor />
        <Project />
        <SocialLinks />
        <Contact />
        <Footer />
      </div>
    </div>
    </>
  );
}
