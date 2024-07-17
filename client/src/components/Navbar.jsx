import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { navItems } from "../utils/constants";
import logo from '../assets/logo.jpeg'; // Importing the logo

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-neutral-900 text-white">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-full mr-2" /> {/* Logo with circular styling */}
            <span className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg shadow-orange-800/50">
              LevelUpOrigin
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex space-x-4">
            <a href="https://www.instagram.com/mayank.chaubey09/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-600 hover:text-pink-800 transition-colors duration-300 text-xl" />
            </a>
            <a href="https://www.youtube.com/@Unfilteredmayank24" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-600 hover:text-red-800 transition-colors duration-300 text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/mayank-chaubey-8888a321a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 hover:text-blue-900 transition-colors duration-300 text-xl" />
            </a>
          </div>
          <div className="lg:hidden flex flex-col justify-end">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link
                    to={item.href}
                    className="hover:text-gray-300 transition-colors duration-300"
                    onClick={toggleNavbar} // Close the drawer when a link is clicked
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex space-x-4">
              <a href="https://www.instagram.com/mayank.chaubey09/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-600 hover:text-pink-800 transition-colors duration-300 text-xl" />
              </a>
              <a href="https://www.youtube.com/@Unfilteredmayank24" target="_blank" rel="noopener noreferrer ">
                <FaYoutube className="text-red-600 hover:text-red-800 transition-colors duration-300 text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/mayank-chaubey-8888a321a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-700 hover:text-blue-900 transition-colors duration-300 text-xl" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
