import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faCode } from '@fortawesome/free-solid-svg-icons';

const CareerHighlights = () => {
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

  const highlights = [
    {
      id: 1,
      title: 'Cypress Ambassador',
      icon: faAward,
      description: 'Recognized as a Cypress Ambassador for contributions to the testing community and expertise in test automation.',
      link: 'https://www.cypress.io/blog/cypress-ambassador-spotlight-lasitha',
      linkText: 'Read Ambassador Spotlight'
    },
    {
      id: 2,
      title: 'BrowserStack Champion',
      icon: faAward,
      description: 'Selected as a BrowserStack Champion for expertise in cross-browser testing and automation.',
      link: 'https://www.browserstack.com/blog/champions-spotlight-lasitha/',
      linkText: 'Read Champion Spotlight'
    },
    {
      id: 3,
      title: 'NPM Package Author',
      icon: faCode,
      description: 'Created and published cypress-plugin-store, a plugin that enhances Cypress testing capabilities.',
      link: 'https://www.npmjs.com/package/cypress-plugin-store',
      linkText: 'View on NPM'
    }
  ];

  return (
    <motion.section
      className="career-highlights" id="career-highlights"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants} className="section-title">
        Career Highlights
      </motion.h2>
      <div className="highlights-grid">
        {highlights.map((highlight) => (
          <motion.div
            key={highlight.id}
            className="highlight-card"
            variants={itemVariants}
          >
            <div className="highlight-icon">
              <FontAwesomeIcon icon={highlight.icon} />
            </div>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
            <a
              href={highlight.link}
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              {highlight.linkText}
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CareerHighlights;