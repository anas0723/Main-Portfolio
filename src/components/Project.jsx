import React from "react";
import { FaGithub } from "react-icons/fa";
import TodoImg from "../assets/Pictures/Todo.png";

const Project = () => {
  return (
    <>
      {/* First Card */}
      <div id="projects" className="flex justify-center mt-13">
      <h1 className="text-xl sm:text-3xl px-6 py-3 rounded-lg border-2 border-[#64ffda] shadow-lg hover:shadow-[#64ffda] transition-all duration-300  ">Project's</h1>
      </div>
      <div className=" min-h-screen flex items-center justify-center py-10 px-[30px]">
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg w-full max-w-6xl">
          {/* Project Image */}
          <div className="relative">
            <img
              src={TodoImg}
              alt="Todo App"
              className="w-full  h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-6 ">
              <h3 className="text-3xl font-semibold text-[#000000]">
                Todo App
              </h3>
              <p className="text-base mt-2  hidden sm:block text-gray-200">
                A full-stack Todo App using ReactJS, Express & TailwindCSS. Add,
                edit, and manage your tasks with a clean UI.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-[#64ffda] text-black px-4 py-1 rounded-full text-sm font-medium">
                  ReactJS
                </span>
                <span className="bg-[#64ffda] text-black px-4 py-1 rounded-full text-sm font-medium">
                  Express
                </span>
                <span className="bg-[#64ffda] text-black px-4 py-1 rounded-full text-sm font-medium">
                  TailwindCSS
                </span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between bg-[#64ffda] px-6 py-5 rounded-b-3xl text-center sm:text-left gap-4 sm:gap-0">
            <a
              href="https://github.com/anas0723/Todo-App"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold flex justify-center sm:justify-start items-center gap-2 hover:underline"
            >
              <FaGithub className="text-xl" />
              GitHub Repo
            </a>
            <a
              href="https://anas-todoapp-express.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold hover:underline"
            >
              Hosted Link ↗
            </a>
          </div>
        </div>
      </div>
      {/* Second Card */}
      <div className=" min-h-screen flex items-center justify-center pb-10 px-[30px]">
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg w-full max-w-6xl">
          {/* Project Image */}
          <div className="relative">
            <img
              src={TodoImg}
              alt="Todo App"
              className="w-full  h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-6 ">
              <h3 className="text-3xl font-semibold text-[#000000]">
                Todo App
              </h3>
              <p className="text-base mt-2  hidden sm:block text-gray-200">
                A full-stack Todo App using ReactJS, Express & TailwindCSS. Add,
                edit, and manage your tasks with a clean UI.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-[#64ffda] text-black px-4 py-1 rounded-full text-sm font-medium">
                  ReactJS
                </span>
                <span className="bg-[#64ffda] text-black px-4 py-1 rounded-full text-sm font-medium">
                  Express
                </span>
                <span className="bg-[#64ffda] text-black px-4 py-1 rounded-full text-sm font-medium">
                  TailwindCSS
                </span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between bg-[#64ffda] px-6 py-5 rounded-b-3xl text-center sm:text-left gap-4 sm:gap-0">
            <a
              href="https://github.com/anas0723/Todo-App"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold flex justify-center sm:justify-start items-center gap-2 hover:underline"
            >
              <FaGithub className="text-xl" />
              GitHub Repo
            </a>
            <a
              href="https://anas-todoapp-express.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold hover:underline"
            >
              Hosted Link ↗
            </a>
          </div>
        </div>
      </div>
      {/* Third Card */}
      <div className=" min-h-screen flex items-center justify-center   px-[30px]">
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg w-full max-w-6xl">
          {/* Project Image */}
          <div className="relative">
            <img
              src={TodoImg}
              alt="Todo App"
              className="w-full  h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-6 ">
              <h3 className="text-3xl font-semibold text-[#000000]">
                Todo App
              </h3>
              <p className="text-base mt-2  hidden sm:block text-gray-200">
                A full-stack Todo App using ReactJS, Express & TailwindCSS. Add,
                edit, and manage your tasks with a clean UI.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-[#64ffda] text-black px-4 py-1 rounded-full text-sm font-medium">
                  ReactJS
                </span>
                <span className="bg-[#64ffda] text-black px-4 py-1 rounded-full text-sm font-medium">
                  Express
                </span>
                <span className="bg-[#64ffda] text-black px-4 py-1 rounded-full text-sm font-medium">
                  TailwindCSS
                </span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between bg-[#64ffda] px-6 py-5 rounded-b-3xl text-center sm:text-left gap-4 sm:gap-0">
            <a
              href="https://github.com/anas0723/Todo-App"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold flex justify-center sm:justify-start items-center gap-2 hover:underline"
            >
              <FaGithub className="text-xl" />
              GitHub Repo
            </a>
            <a
              href="https://anas-todoapp-express.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold hover:underline"
            >
              Hosted Link ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
