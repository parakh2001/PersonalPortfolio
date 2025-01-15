// src/components/Projects.tsx
import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'A web application built using React.js that allows users to manage tasks efficiently.',
    url: 'https://github.com/yourusername/project1', // Replace with actual project URL
  },
  {
    title: 'Project 2',
    description: 'A mobile app developed using Flutter for tracking daily expenses with user authentication via Firebase.',
    url: 'https://github.com/yourusername/project2', // Replace with actual project URL
  },
  {
    title: 'Project 3',
    description: 'An e-commerce platform built with Node.js and MongoDB, featuring product listings and secure checkout functionality.',
    url: 'https://github.com/yourusername/project3', // Replace with actual project URL
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
