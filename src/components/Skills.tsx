import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaLinux, FaCogs, FaTerminal } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiJavascript, SiFirebase, SiFlutter, SiMongodb, SiNextdotjs } from 'react-icons/si';

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  { name: "React.js", icon: <FaReact />, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "Flutter", icon: <SiFlutter />, color: "text-blue-300" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
  { name: "Databases", icon: <FaDatabase />, color: "text-purple-500" },
  { name: "Linux", icon: <FaLinux />, color: "text-green-500" },
  { name: "React Native", icon: <FaReact />, color: "text-indigo-500" },
  { name: "C++", icon: <FaCogs />, color: "text-blue-600" },
  { name: "Bash", icon: <FaTerminal />, color: "text-gray-500" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-black" }, // Added Next.js skill
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-gradient-to-b from-gray-800 to-gray-700 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8 text-gray-100">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className={`text-5xl ${skill.color} mb-4 group-hover:rotate-12 transition duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-100 group-hover:text-teal-400 transition duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
