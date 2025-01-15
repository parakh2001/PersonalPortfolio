// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or Name */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="#hero">My Portfolio</a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li>
            <a
              href="#about"
              className="text-lg font-semibold hover:text-blue-600 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-lg font-semibold hover:text-blue-600 transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-lg font-semibold hover:text-blue-600 transition"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="text-lg font-semibold hover:text-blue-600 transition"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg font-semibold hover:text-blue-600 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.599.11.793-.26.793-.577v-2.234c-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.806 1.304 3.493.997.109-.775.418-1.305.762-1.604-2.665-.304-5.466-1.334-5.466-5.931 0-1.311.469-2.384 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.544 11.544 0 0 1 3-.404c1.018.005 2.04.138 3 .404 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.838 1.233 1.911 1.233 3.222 0 4.609-2.805 5.624-5.476 5.921.43.372.823 1.102.823 2.222v3.293c0 .32.192.694.8.577C20.565 21.798 24 17.303 24 12c0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-2.5v-9h2.5v9zm-1.25-10.2c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm14.5 10.2h-2.5v-4.6c0-2.751-3-2.543-3 0v4.6h-2.5v-9h2.5v1.378c1.162-2.151 5.5-2.312 5.5 2.048v5.574z"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.565-2.005.978-3.127 1.2-.897-.956-2.178-1.555-3.594-1.555-2.722 0-4.932 2.21-4.932 4.932 0 .386.043.762.127 1.124-4.1-.205-7.725-2.17-10.148-5.154-.426.729-.669 1.577-.669 2.483 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.061c0 2.388 1.698 4.382 3.946 4.833-.414.113-.849.173-1.296.173-.317 0-.626-.03-.927-.086.627 1.956 2.445 3.379 4.6 3.419-1.683 1.32-3.808 2.107-6.115 2.107-.397 0-.788-.023-1.175-.067 2.179 1.396 4.768 2.211 7.548 2.211 9.056 0 14.01-7.502 14.01-14.01 0-.213-.005-.425-.014-.636.961-.694 1.797-1.56 2.457-2.548l-.047-.02z"
              />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
