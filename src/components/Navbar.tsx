import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Download , ExternalLink } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="sticky top-0 z-40 glass-card px-4 py-3 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold gradient-text">
          Portfolio
        </NavLink>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center space-x-2"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <motion.div variants={itemVariants}>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Projects
            </NavLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavLink to="/coding-profiles" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Coding Profiles
            </NavLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <a
              href="/Rajiv_Kumar_CV.pdf"
              download="Rajiv_Kumar_CV.pdf"
              className="btn btn-primary flex items-center gap-2 group"
              
            >
              <Download size={18} className="group-hover:animate-bounce" />
              <span>Download CV</span>
            </a>
          </motion.div>
        </motion.nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 glass-card p-4 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <nav className="flex flex-col space-y-3">
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                About
              </NavLink>
              <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                Projects
              </NavLink>
              <NavLink to="/coding-profiles" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                Coding Profiles
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                Contact
              </NavLink>
              <a
                href="/Rajiv_Kumar_CV.pdf"
                download="Rajiv_Kumar_CV.pdf"
                className="btn bg-white/10 hover:bg-white/20 flex items-center gap-2"
              >
                Download CV <ExternalLink size={18} />
            </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;