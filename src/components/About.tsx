// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 py-20 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          About Me
        </h2>

        {/* About Paragraph */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed tracking-wide">
          Hi, I’m <span className="font-bold text-blue-600">[Your Name]</span>, a passionate web developer focused on creating user-friendly, responsive, and efficient web applications. With expertise in technologies such as <span className="font-semibold text-purple-600">React</span>, <span className="font-semibold text-yellow-500">TypeScript</span>, and <span className="font-semibold text-teal-500">Tailwind CSS</span>, I am committed to delivering high-quality solutions that exceed client expectations.
        </p>
      </div>
    </section>
  );
};

export default About;
