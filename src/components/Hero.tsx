// src/components/Hero.tsx
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left: Description */}
        <div className="md:w-1/2 flex flex-col items-start space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm <span className="text-yellow-300">Parakh Gupta</span>
          </h1>
          <ReactTypingEffect
            text={[
              "I'm a passionate developer",
              "Specializing in creating beautiful, responsive, and user-friendly websites",
              "Let's build something amazing together!",
            ]}
            speed={200} // Typing speed
            eraseSpeed={100} // Erase speed
            typingDelay={500} // Delay before typing starts
            eraseDelay={2000} // Delay before erasing starts
            className="text-xl md:text-2xl text-yellow-300 font-semibold mt-4"
          />
          <a
            href="#contact"
            className="bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/Personal_image.jpeg" // Correct path to the image
            alt="Parakh Gupta"
            className="rounded-full shadow-lg max-w-xs object-cover" // Adjusted for smaller height
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
