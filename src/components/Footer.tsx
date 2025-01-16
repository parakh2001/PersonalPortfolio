// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/parakh2001" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            GitHub
          </a>
          <a href="https://linkedin.com/in/parakhgupta" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            LinkedIn
          </a>
          <a href="https://x.com/Parakh_25" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
