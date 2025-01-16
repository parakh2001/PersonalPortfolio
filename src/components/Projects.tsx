import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Pokedex",
    description:
      "Mobile application built in React Native and Node.js displaying information of 1000+ Pokémon.",
    url: "https://github.com/parakh2001/Pokedex-React-Native.git",
  },
  {
    title: "Expense Tracker",
    description:
      "A simple expense tracker built using React.js and Tailwind CSS, storing transactions in local storage.",
    url: "https://myexpensetracker-reactjs.netlify.app/",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application using WebSockets that allows multiple users to chat in rooms. Built with Node.js and Flutter.",
    url: "https://github.com/parakh2001/Chat-application.git",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-gradient-to-r from-gray-900 to-gray-700 py-20 px-6">
      <div className="container mx-auto text-center max-w-6xl">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-yellow-300 mb-12">My Projects</h2>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group bg-white/10 border border-white/20 shadow-lg rounded-lg p-6 backdrop-blur-lg transition transform hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-30 transition"></div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                {project.description}
              </p>

              {/* External Link Icon */}
              <div className="absolute top-4 right-4 text-yellow-300 opacity-70 group-hover:opacity-100 transition">
                <FaExternalLinkAlt size={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
