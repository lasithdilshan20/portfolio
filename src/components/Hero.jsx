import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium, faNpm } from '@fortawesome/free-brands-svg-icons';
import profilePic from '../assets/profile-pic.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.section
      className="hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-content">
        <div className="hero-text">
      <motion.h1 variants={itemVariants} className="hero-title">
        Lasitha Wijenayake
      </motion.h1>
      <motion.h2 variants={itemVariants} className="hero-subtitle">
        Software QA Engineer & Test Automation Specialist
      </motion.h2>
      <motion.p variants={itemVariants} className="hero-description">
        Cypress Ambassador with over 10 years of experience in Test Automation
      </motion.p>
      <motion.div variants={itemVariants} className="social-links">
        <a href="https://github.com/lasithdilshan20" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/lasitha-wijenayake-b8a43bb5/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://lasithdilshan20.medium.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <a href="https://www.npmjs.com/package/cypress-plugin-store" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faNpm} />
        </a>
      </motion.div>
        </div>
        <motion.div className="hero-image" variants={profileVariants}>
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="tech-circle"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;