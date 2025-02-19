import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'career-highlights', label: 'Highlights' },
    { id: 'experience', label: 'Experience' },
    { id: 'blog', label: 'Blog' },
    { id: 'recommendations', label: 'Recommendations' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.scrollY + elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const menuVariants = {
    closed: {
      width: '50px',
      height: '50px',
      borderRadius: '50%'
    },
    open: {
      width: '200px',
      height: 'auto',
      borderRadius: '25px'
    }
  };

  const listVariants = {
    closed: {
      opacity: 0,
      display: 'none'
    },
    open: {
      opacity: 1,
      display: 'block',
      transition: {
        delay: 0.2
      }
    }
  };

  return (
    <motion.div
      className="floating-nav"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={menuVariants}
    >
      <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="nav-links"
            variants={listVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {sections.map((section) => (
              <motion.li
                key={section.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button onClick={() => scrollToSection(section.id)}>
                  {section.label}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FloatingNav;