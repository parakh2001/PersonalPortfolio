import React from "react";
import Typewriter from "typewriter-effect";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-gray-900 to-gray-700 text-white min-h-screen flex items-center justify-center px-4"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left: Description */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="text-yellow-300 whitespace-nowrap">
              Parakh Gupta
            </span>
          </h1>

          {/* Typewriter Effect */}
          <h2 className="text-lg sm:text-xl md:text-2xl text-yellow-300 font-semibold mt-4">
            <Typewriter
              options={{
                strings: [
                  "I'm a passionate software developer",
                  "Specializing in building web & mobile apps",
                  "Crafting seamless web & mobile experiences with precision.",
                  "Building high-performance web & mobile apps that make an impact.",
                  "Transforming visions into reality through code and creativity.",
                  "Let's build something amazing together!",
                ],
                autoStart: true,
                loop: true,
                delay: 30, // Controls character typing speed
                deleteSpeed: 30,
              }}
            />
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition w-full sm:w-auto text-center"
            >
              Contact Me
            </a>

            <a
              href="/parakhResume.pdf"
              download="Parakh_Gupta_Resume.pdf"
              className="mt-4 sm:mt-0 w-full sm:w-auto"
            >
              <button className="bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition w-full sm:w-auto">
                Download Resume
              </button>
            </a>
          </div>
        </div>
        {/* Right: Image */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img
              src="/Personal_image.jpeg"
              alt="Parakh Gupta"
              className="rounded-full shadow-lg max-w-[200px] sm:max-w-[220px] md:max-w-[250px] object-cover"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
