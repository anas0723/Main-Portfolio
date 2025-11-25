import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Header from "../components/header.jsx";
import Footer from "../components/Footer.jsx";

const projects = [
  {
    title: "Nebula Analytics Dashboard",
    description:
      "A data-rich admin experience with modular widgets, realtime KPI insights, and collaborative notes for distributed teams.",
    tech: ["React", "Tailwind", "TypeScript", "Recharts"],
    repoUrl: "https://github.com/example/nebula-dashboard",
    liveUrl: "https://example.com/nebula-dashboard",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
    label: "Concept Studio",
  },
  {
    title: "Lumen Design System",
    description:
      "An accessible UI kit with dark mode, robust component tokens, and a Figma-aligned theming pipeline ready for production teams.",
    tech: ["Next.js", "Tailwind", "Storybook", "Framer Motion"],
    repoUrl: "https://github.com/example/lumen-design-system",
    liveUrl: "https://example.com/lumen-design-system",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    label: "Design Ops",
  },
  {
    title: "Pulse Health Platform",
    description:
      "A patient-first portal featuring appointment triage, wearable integrations, and visual care journeys across devices.",
    tech: ["Vue", "Tailwind", "Supabase", "Chart.js"],
    repoUrl: "https://github.com/example/pulse-health",
    liveUrl: "https://example.com/pulse-health",
    image:
      "https://images.unsplash.com/photo-1517142089942-ba376ce32a0b?auto=format&fit=crop&w=1200&q=80",
    label: "Product Sprint",
  },
  {
    title: "Orbit Commerce Suite",
    description:
      "A conversion-focused storefront with personalized recommendations, A/B testing hooks, and streamlined checkout flows.",
    tech: ["Remix", "Tailwind", "Stripe", "Cloudflare"],
    repoUrl: "https://github.com/example/orbit-commerce",
    liveUrl: "https://example.com/orbit-commerce",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
    label: "E-Commerce",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#112240]/80 shadow-2xl backdrop-blur transition-transform duration-300 hover:-translate-y-2 hover:border-[#64ffda]/70">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
        <span className="absolute left-5 top-5 rounded-full bg-[#64ffda] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-black shadow-lg">
          {project.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-6 p-6">
        <div>
          <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            {project.description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-[#64ffda]/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#64ffda]"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 px-6 py-5 text-sm">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-semibold text-gray-200 transition-colors duration-200 hover:text-[#64ffda]"
        >
          <FaGithub className="text-lg" />
          Repo
        </a>
        <a
          href={project.liveUrl}
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

const AllProjects = () => {
  return (
    <div className="min-h-screen w-full bg-[#0a192f] text-white">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#64ffda]">
            Project Archive
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Every Build in One Place
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300 sm:text-base">
            Explore polished concepts, production-ready builds, and UI systems.
            Swap in your live data to highlight every deployment, redesign, and
            experiment.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllProjects;
