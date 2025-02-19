import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (id) => {
    setExpandedCards(prev =>
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    );
  };

  const experiences = [
    {
      id: 1,
      title: 'Software Developer in Test',
      company: 'Trackman',
      location: 'Capital Region of Denmark, Denmark',
      duration: 'Aug 2024 - Present',
      type: 'Full-time',
      skills: ['Cypress.io', 'TypeScript', 'JavaScript', 'Automated Software Testing'],
      description: 'Currently working as a Software Developer in Test, focusing on test automation and quality assurance.'
    },
    {
      id: 2,
      title: 'Senior Software Quality Assurance Engineer',
      company: 'INSCALE',
      location: 'Federal Territory of Kuala Lumpur, Malaysia',
      duration: 'Sep 2022 - Jul 2024',
      type: 'Full-time',
      team: 'Teletrac Navman',
      responsibilities: [
        'Led and implemented test automation strategies with Cypress for GPS/Fleet Management applications.',
        'Designed, executed, and maintained comprehensive test cases and scenarios.',
        'Experienced in Functional, Regression, Smoke, Sanity, and Re-testing.',
        'Integrated automation testing into every phase of the software development lifecycle.',
        'Delivered scalable and efficient testing methodologies for web applications.',
        'Collaborated closely with product and development teams on long-term testing solutions.',
        'Utilized Agile methodologies to enhance testing processes and outcomes.',
        'Proficient with JIRA for defect tracking and Testrail for test case management.'
      ],
      technologies: ['Cypress', 'TypeScript', 'JavaScript', 'Git'],
      tools: ['IntelliJ IDEA', 'VS Code', 'Jenkins', 'Bitbucket']
    },
    {
      id: 3,
      title: 'Lead Software Engineer - Quality Assurance',
      company: 'IFS',
      location: 'Colombo, Western Province, Sri Lanka',
      duration: 'Jan 2022 - Aug 2022',
      type: 'Full-time',
      responsibilities: [
        'Developed scalable automation testing frameworks for web applications.',
        'Specialized in automated UI and API testing using Cypress Test Automation.',
        'Contributed to scalable testing strategies and code quality.',
        'Led the migration from Protractor to Cypress.',
        'Conducted CI/CD integration with Jenkins and Bitbucket.',
        'Worked with Angular-based applications for Swedish enterprise solutions.'
      ],
      skills: ['Cypress', 'Protractor', 'JavaScript', 'TypeScript', 'Git', 'Angular']
    },
    {
      id: 4,
      title: 'Test Automation Engineer',
      company: 'Sana Commerce Sri Lanka',
      location: 'Colombo, Western, Sri Lanka',
      duration: 'Jan 2021 - Dec 2021',
      type: 'Full-time',
      responsibilities: [
        'Developed web-based test automation framework using Cypress.',
        'Enhanced Selenium C# test automation framework.',
        'Implemented automation for complex eCommerce applications.',
        'Introduced comprehensive testing strategies.',
        'Conducted R&D and code reviews.',
        'Worked with ReactJS applications for Netherlands-based clients.'
      ]
    },
    {
      id: 5,
      title: 'Software Quality Assurance Engineer',
      company: 'ISM-APAC',
      location: 'Sri Lanka',
      duration: 'Aug 2018 - Jan 2021',
      type: 'Full-time',
      responsibilities: [
        'Tested various add-ons including payment providers and content blocks.',
        'Conducted mobile testing for iOS and Android platforms.',
        'Performed cross-browser testing and API automation.',
        'Worked with Selenium and C# frameworks.'
      ]
    }
  ];

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

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <motion.section
      className="section experience"
      id="experience"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants} className="section-title">
        Professional Experience
      </motion.h2>
      <div className="experience-grid">
        {displayedExperiences.map((exp) => (
          <motion.div
            key={exp.id}
            className={`experience-card ${expandedCards.includes(exp.id) ? 'expanded' : ''}`}
            variants={itemVariants}
            onClick={() => toggleCard(exp.id)}
          >
            <div className="experience-header">
              <div className="header-content">
                <h3>{exp.title}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <p className="location">{exp.location}</p>
              </div>
              <FontAwesomeIcon 
                icon={faAngleDown} 
                className={`expand-icon ${expandedCards.includes(exp.id) ? 'rotated' : ''}`}
              />
            </div>
            <AnimatePresence>
              {expandedCards.includes(exp.id) && (
                <motion.div
                  className="experience-details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {exp.responsibilities && (
                    <div className="responsibilities">
                      <h4>Key Responsibilities:</h4>
                      <ul>
                        {exp.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {exp.technologies && (
                    <div className="technologies">
                      <h4>Technologies:</h4>
                      <p>{exp.technologies.join(', ')}</p>
                    </div>
                  )}
                  {exp.tools && (
                    <div className="tools">
                      <h4>Tools:</h4>
                      <p>{exp.tools.join(', ')}</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      {experiences.length > 3 && (
        <motion.button
          className="show-more-btn"
          onClick={() => setShowAll(!showAll)}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? (
            <>
              Show Less <FontAwesomeIcon icon={faChevronUp} />
            </>
          ) : (
            <>
              Show More <FontAwesomeIcon icon={faChevronDown} />
            </>
          )}
        </motion.button>
      )}
    </motion.section>
  );
};

export default Experience;