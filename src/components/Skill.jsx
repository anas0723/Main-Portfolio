import FireBase from "../assets/Pictures/fire-base-icons.svg";
import Git from "../assets/Pictures/git-icons.svg";
import GitHub from "../assets/Pictures/github-icons.svg";
import Html from "../assets/Pictures/html-icons.svg";
import Js from "../assets/Pictures/js-icons.svg";
import MongoDb from "../assets/Pictures/mongodb-icons.svg";
import Mui from "../assets/Pictures/mui-icons.svg";
import Next from "../assets/Pictures/Next-icons.svg";
import PostMan from "../assets/Pictures/postman-icons.svg";
import React from "../assets/Pictures/react-icons.svg";
import Tailwind from "../assets/Pictures/tailwind-icons.svg";
import TypeScript from "../assets/Pictures/type-scrtip-icons.svg";
import Vercel from "../assets/Pictures/vercel-icons.svg";
import VsCode from "../assets/Pictures/vscode-icons.svg";
import Css from "../assets/Pictures/css-icon.png";

export default function Skill() {
  const images = [
    { src: FireBase, alt: "Firebase" },
    { src: Git, alt: "Git" },
    { src: GitHub, alt: "GitHub" },
    { src: Html, alt: "HTML 5" },
    { src: Js, alt: "JavaScript" },
    { src: MongoDb, alt: "MongoDB" },
    { src: Mui, alt: "Material-UI" },
    { src: Next, alt: "Next.JS" },
    { src: PostMan, alt: "Postman" },
    { src: React, alt: "React.JS" },
    { src: Tailwind, alt: "Tailwind CSS" },
    { src: TypeScript, alt: "TypeScript" },
    { src: Vercel, alt: "Vercel" },
    { src: VsCode, alt: "VS Code" },
    { src: Css, alt: "CSS 3" },
  ];

  return (
    <div id="skills" className="">
    <div className="bg-[#112240]  p-8">
    <div className="flex justify-center mt-13">
      <h1 className="text-xl sm:text-3xl px-6 py-3 rounded-lg border-2 border-[#64ffda] shadow-lg hover:shadow-[#64ffda] transition-all duration-300 mb-10 ">
        Languages & Tools
      </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative p-4 rounded-lg transition-all duration-300 hover:scale-110 bg-[#0a192f] hover:bg-[#64ffda] hover:shadow-lg hover:shadow-[#64ffda]"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-20 w-20 md:h-20 md:w-20 object-contain transition-all duration-300 group-hover:brightness-35"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-lg">{image.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}
