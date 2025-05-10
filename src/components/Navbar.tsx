import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-8 items-center">
            <a href="#home" className="text-gray-300 hover:text-white text-sm font-medium transition">Home</a>
            <a href="#projects" className="text-gray-300 hover:text-white text-sm font-medium transition">Projects</a>
            <a href="#about" className="text-gray-300 hover:text-white text-sm font-medium transition">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white text-sm font-medium transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden ml-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2 bg-black/90 border-t border-gray-700 text-right">
          <a href="#home" className="block text-gray-300 hover:text-white text-sm font-medium">Home</a>
          <a href="#projects" className="block text-gray-300 hover:text-white text-sm font-medium">Projects</a>
          <a href="#about" className="block text-gray-300 hover:text-white text-sm font-medium">About</a>
          <a href="#contact" className="block text-gray-300 hover:text-white text-sm font-medium">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
