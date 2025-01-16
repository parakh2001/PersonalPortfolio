import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-opacity-80 backdrop-blur-md bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or Name */}
        <div className="text-2xl font-extrabold text-white tracking-wide">
          <a href="#hero" className="hover:text-yellow-300 transition duration-300">
            Parakh's Portfolio
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          {['About', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg font-semibold text-white hover:text-yellow-300 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          {[
            { href: 'https://github.com/parakh2001', icon: 'github' },
            { href: 'https://linkedin.com/in/parakhgupta', icon: 'linkedin' },
            { href: 'https://x.com/Parakh_25', icon: 'twitter' },
          ].map(({ href, icon }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              <i className={`fab fa-${icon} text-xl`}></i>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
