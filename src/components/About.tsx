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
        
        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed tracking-wide mb-6">
          Hi, I’m <span className="font-bold text-blue-600">Parakh Gupta</span>, a passionate 
          <span className="font-semibold text-gray-800"> Android and Full-Stack Developer </span> 
          who loves crafting seamless digital experiences. I specialize in building full-stack web applications and Android apps, focusing on 
          <span className="font-semibold text-gray-800"> performance, scalability,</span> and <span className="font-semibold text-gray-800">user experience.</span>
        </p>

        {/* Tech Stack */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tech Stack</h3>
          <ul className="text-gray-700 text-lg space-y-2 text-left max-w-md mx-auto">
            <li>🚀 <span className="font-semibold">Frontend:</span> React.js, Next.js, React Native</li>
            <li>⚙️ <span className="font-semibold">Backend:</span> Node.js, Firebase</li>
            <li>📱 <span className="font-semibold">Mobile Development:</span> Flutter (Provider State Management, Clean Architecture)</li>
            <li>📊 <span className="font-semibold">Databases:</span> MongoDB, PostgreSQL</li>
            <li>🔧 <span className="font-semibold">DevOps:</span> Basic CI/CD, Deployment Strategies</li>
          </ul>
        </div>

        {/* Conclusion */}
        <p className="text-lg text-gray-700 mt-6 leading-relaxed">
          I thrive on solving complex problems and building innovative solutions. Whether it's designing scalable architectures, optimizing performance, or experimenting with new technologies, 
          I’m always eager to <span className="font-semibold text-blue-600">learn and improve.</span>
        </p>
        
        <p className="text-xl font-semibold text-gray-800 mt-4">
          Let’s connect and build something amazing! 🚀
        </p>
      </div>
    </section>
  );
};

export default About;
