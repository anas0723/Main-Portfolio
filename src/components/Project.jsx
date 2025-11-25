import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import TodoImg from "../assets/Pictures/Todo.png";
import DecentDetailers from "../assets/Pictures/decent-detailers.png";
import SayyamInternational from "../assets/Pictures/sayyan-internationl.png";

const projects = [
  {
    title: "Todo Productivity Hub",
    blurb:
      "Full-stack task manager with dynamic filters, collaboration-ready endpoints, and delightful motion states.",
    tech: ["React", "Express", "Tailwind"],
    image: TodoImg,
    alt: "Todo app dashboard",
    repoUrl: "https://github.com/anas0723/Todo-App",
    liveUrl: "https://anas-todoapp-express.surge.sh/",
    status: "Featured Build",
  },
  {
    title: "Decent Detailers Studio",
    blurb:
      "Conversion-focused detailing site with booking prompts, glassmorphism hero, and responsive service menus.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: DecentDetailers,
    alt: "Decent Detailers homepage",
    repoUrl: null,
    liveUrl: "https://decentdetailers-c5534.web.app/",
    status: "Client Launch",
  },
  {
    title: "Sayyam International",
    blurb:
      "Logistics landing experience inspired by the Figma blueprint, optimized for mobile-first conversions.",
    tech: ["React", "Tailwind"],
    image: SayyamInternational,
    alt: "Sayyam International hero section",
    repoUrl: "https://github.com/anas0723/Sayyan-international",
    liveUrl: "http://sayyam-internatinol.surge.sh/",
    status: "UI Refresh",
  },
];

const ProjectCard = ({ project }) => {
  const { title, blurb, tech, image, alt, repoUrl, liveUrl, status } = project;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#112240]/80 shadow-2xl backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-[#64ffda]/70">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
        <span className="absolute left-5 top-5 rounded-full bg-[#64ffda] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-black shadow-lg">
          {status}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">{blurb}</p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <li
              key={item}
              className="rounded-full bg-[#64ffda]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#64ffda]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 px-6 py-5 text-sm">
        {repoUrl ? (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold text-gray-200 transition-colors duration-200 hover:text-[#64ffda]"
          >
            <FaGithub className="text-lg" />
            Repo
          </a>
        ) : (
          <span className="flex items-center gap-2 font-semibold text-gray-400">
            <FaGithub className="text-lg text-gray-500" />
            Private Repo
          </span>
        )}
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-semibold text-gray-200 transition-colors duration-200 hover:text-[#64ffda]"
        >
          Live
          <FaExternalLinkAlt className="text-base" />
        </a>
      </div>
    </article>
  );
};

const Project = () => {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#64ffda] sm:text-sm">
            Highlight Reel
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-300 sm:text-base">
            Snapshots of shipped work, prototypes, and experiments designed for
            fast handoffs. Hover to explore the tech stack and quick links.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#64ffda] bg-[#0a192f] px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[#64ffda]"
          >
            View All Projects
          </Link>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
