// src/components/Projects.tsx
import React from 'react';
const projects = [
  {
    title: 'Pokedex',
    description: 'Mobile application built in React native and Nodejs displays the information of more than 1000+ pokemons.',
    url: 'https://github.com/parakh2001/Pokedex-React-Native.git',
  },
  {
    title: 'Expense Tracker',
    description: 'Simple Expense tracker built using Reactjs and tailwindCss for styling.It displays expenses and savings and save all transaction in local Storage.',
    url: 'https://myexpensetracker-reactjs.netlify.app/',
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application implemented using websockets that allows two or multiple people to create room and chat.Built using nodejs,flutter.',
    url: 'https://github.com/parakh2001/Chat-application.git',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-gradient-to-r from-purple-100 via-blue-100 to-teal-100 py-20 px-6">
      <div className="container mx-auto text-center max-w-6xl">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-10">My Projects</h2>
        
        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
