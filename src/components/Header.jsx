import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-3 px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">
          <Link to="/"> SkillLink </Link>
        </h1>

        {/* Hamburger Menu Button (visible on small screens) */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
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

        {/* Desktop Navigation (hidden on small screens) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            <li>
              <Link to="/services" className="text-black font-semibold hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/signup" className="text-black font-semibold hover:underline">
                Sign up / Log in
              </Link>
            </li>
            <li>
              <Link to="/workerLogin" className="border border-green-500 text-green-500 py-2 px-4 rounded-full hover:bg-green-100">
                Become a Tasker
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation (conditionally rendered) */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link 
                to="/services" 
                className="block text-black font-semibold hover:underline py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/signup" 
                className="block text-black font-semibold hover:underline py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up / Log in
              </Link>
            </li>
            <li>
              <Link 
                to="/workerLogin" 
                className="block border border-green-500 text-green-500 py-2 px-4 rounded-full hover:bg-green-100 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Become a Tasker
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;