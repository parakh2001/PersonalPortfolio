// src/components/Hero.tsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-gray-900 to-gray-700 text-white min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left: Description */}
        <div className="md:w-1/2 flex flex-col items-start space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm <span className="text-yellow-300">Parakh Gupta</span>
          </h1>

          {/* Typewriter Effect */}
          <h2 className="text-xl md:text-2xl text-yellow-300 font-semibold mt-4">
            <Typewriter
              words={[
                "I'm a passionate software developer",
                "Specializing in building web & mobile apps",
                "Crafting seamless web & mobile experiences with precision.",
                "Building high-performance web & mobile apps that make an impact.",
                "Transforming visions into reality through code and creativity.",
                "Let's build something amazing together!",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={500}
              deleteSpeed={150}
              delaySpeed={1000}
            />
          </h2>

          {/* Contact Me Button */}
          <a
            href="#contact"
            className="bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Contact Me
          </a>

          {/* Download Resume Button */}
          <a
            href="/parakhResume.pdf"  // Correct path to the resume in the public folder
            download="Parakh_Gupta_Resume.pdf"  // Default name for the downloaded file
            className="mt-4" // Ensures there is some space between buttons
          >
            <button className="bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
              Download Resume
            </button>
          </a>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/Personal_image.jpeg"
            alt="Parakh Gupta"
            className="rounded-full shadow-lg max-w-xs object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
