import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md dark:bg-gray-900/80 text-white shadow-lg transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/browse" className="hover:text-yellow-400 transition">Browse</Link>
          <Link to="/dashboard" className="hover:text-yellow-400 transition">Dashboard</Link>
          <Link to="/login" className="hover:text-yellow-400 transition">Login</Link>
          <button
            onClick={toggleTheme}
            className="hover:text-yellow-400 transition"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="hover:text-yellow-400 transition"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none hover:text-yellow-400 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/90 dark:bg-gray-800 text-white px-4 py-4 space-y-3 text-center"
          >
            <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">Home</Link>
            <Link to="/browse" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">Browse</Link>
            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">Dashboard</Link>
            <Link to="/login" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">Login</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;