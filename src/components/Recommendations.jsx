import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Recommendations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const recommendations = [
    {
      id: 1,
      name: 'Willem Germishuys',
      title: 'Senior Manager, Software Engineering - ANZ at Teletrac Navman',
      date: 'July 29, 2024',
      relationship: 'Willem managed Lasitha directly',
      text: 'Lasitha was a QA in one of the teams I\'m working with. He was always willing to go above and beyond of what was asked of him. He completed his work on time and was a shining start when it got to our QA automation. Lasitha is a great asset to any team.'
    },
    {
      id: 2,
      name: 'Ronald Williams',
      title: 'Ecosystem Builder | Event Producer | Alchemist | Your Biggest Advocate',
      date: 'April 17, 2023',
      relationship: 'Ronald worked with Lasitha on the same team',
      text: 'I have the pleasure of supporting Lasitha as the Manager of our Ambassador program. His commitment to educating new users on such a complex tool is a true testament to his leadership and instructional abilities. It has been an honor to watch him Co-lead the Sri Lanka user group for Cypress!'
    },
    {
      id: 3,
      name: 'Anneli Björner',
      title: 'Senior Director RnD Quality & Support',
      date: 'September 5, 2022',
      relationship: 'Anneli managed Lasitha directly',
      text: 'Lasitha was a reliable and very skilled member of my QA-team for a time. With his deep knowledge about Cypress and end-to-end testing he contributed to increasing test coverage as well as the quality and stability of our tests. Lasitha is also a very humble and easy person to work with, and I will miss having him on my team.'
    },
    {
      id: 4,
      name: 'Adrian Miles Rosario Lopez',
      title: 'Software Architect QA',
      date: 'June 11, 2022',
      relationship: 'Adrian Miles managed Lasitha directly',
      text: 'I had the great pleasure to work with Lasitha at IFS as I was his mentor when he joined the company as Senior Engineer in QA. He did impress me with his proficiency in Cypress and how quickly he could understand the complexity of the product and improve our quality assurance overall. His soft skills made him a very appreciated team member in a very short time, contributing with his expertise yet always being truly humble and willing to listen and learn from others. I can say without a doubt that Lasitha would be a valuable asset for any QA team around the World.'
    },
    {
      id: 5,
      name: 'Karolis Gotoveckis',
      title: 'Product Owner Hosting & Deployment @ Coolblue',
      text: 'Lasitha has been a proactive and reliable team member with strong communication and collaboration skills. He has consistently delivered high-quality and timely results, and has contributed greatly in his critical role as test automation engineer to the successes of the Scrum team at Sana Commerce. With his knowledge, experience, and dedication, Lasitha will be a valuable asset in any development team.'
    },
    {
      id: 6,
      name: 'Bathiya Srinuwan',
      title: 'Head of Development - Product Add-ons at Sana Commerce | MBA | CSM | MCPD | BSc',
      text: 'Lasitha is a complete package who can maintain correct balance between work,team and other activities. He was a one big pillar who contributed to build Sana commerce add-ons team in Colombo. Test automation and realated researches and development are his strong areas. He picks things quickly.There is a no boudt to recommend him and you are so lucky to have him.'
    },
    {
      id: 7,
      name: 'Frank de Roon',
      title: 'Strategic Product Manager | B2B SaaS e-commerce | Transforming how professionals buy & sell',
      date: 'November 20, 2020',
      relationship: 'Frank managed Lasitha directly',
      text: 'It\'s a pleasure to work with Lasitha: Lasitha is a very positive person, committed to the work he\'s assigned to, delivering good quality. I\'ve work with Lasitha now for more than 2 years, in a remote (the Netherlands vs Sri Lanka vs Ukraine) and self-steering Scrum team. Lasitha is involved in stabilizing existing and testing new extensions to Sana\'s e-commerce platform. Automation is our key focus at the moment, which Lasitha is adapting very fast.'
    },
    {
      id: 8,
      name: 'Jehan Perinpanayagam',
      title: 'CEO Infomate, Past Chairman SLASSCOM, Past Chairman ACCA Member network panel ACCA Sri Lanka',
      date: 'December 13, 2018',
      relationship: 'Lasitha was Jehan\'s client',
      text: 'Lasitha implemented our very first bot project. The project was 100% successful and delivered on time and still works without any flaws 1 year on. I was impressed with Lasitha\'s knowledge, speed and attitude. He is knowledgeable in the highly sought after skill of RPA and will go far I\'m sure. All the best!'
    },
    {
      id: 9,
      name: 'Harsha Dinendra Hettiarachchige Don (MIITP)',
      title: 'Technical Consultant, Solutions Architect, Software Engineering, Automation, Data Analytics',
      date: 'August 28, 2018',
      relationship: 'Harsha Dinendra managed Lasitha directly',
      text: 'Lasitha worked on several projects at JKIT. He is very dedicated and flexible individual with a great skill set around RPA and QA automation. Quick Lerner with R&D skills and can work with less supervision. Great team player with good attitude who is always willing to help the other team members.'
    },
    {
      id: 10,
      name: 'Sakina Mustafa Telwala',
      title: 'Senior Recruitment Specialist @ Holcim European Business Services',
      date: 'June 13, 2018',
      relationship: 'Sakina worked with Lasitha on the same team',
      text: 'I recruited Lasitha in 2017 for the position of Software Quality Assurance. He is a dedicated, experienced, with a vast experience in all aspects of software quality assurance and also he helped in conducting interviews. Lasitha is also an excellent team player, with high integrity and work ethics. Lasitha can make great contributions to a company.He is fun to work with. I highly recommend Lasitha.'
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
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section
      className="recommendations" id="recommendations"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants} className="section-title">
        Recommendations
      </motion.h2>
      <div className="slider-container">
        <button className="nav-button prev" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="slider-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="recommendation-card"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="recommendation-header">
                <h3>{recommendations[currentIndex].name}</h3>
                <p className="title">{recommendations[currentIndex].title}</p>
                {recommendations[currentIndex].date && (
                  <p className="date">{recommendations[currentIndex].date}</p>
                )}
                {recommendations[currentIndex].relationship && (
                  <p className="relationship">
                    {recommendations[currentIndex].relationship}
                  </p>
                )}
              </div>
              <div className="recommendation-body">
                <p>"{recommendations[currentIndex].text}"</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button className="nav-button next" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <div className="slider-dots">
          {recommendations.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Recommendations;