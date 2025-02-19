import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lasithdilshan20'
        );
        if (response.data.status === 'ok' && response.data.items) {
          const processedArticles = response.data.items.slice(0, 6).map(article => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(article.content, 'text/html');
            const firstImage = doc.querySelector('img');
            const thumbnail = firstImage ? firstImage.src : article.thumbnail || 'https://placehold.co/600x400?text=Blog+Post';
            
            return {
              ...article,
              description: article.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
              thumbnail: thumbnail
            };
          });
          setArticles(processedArticles);
        } else {
          throw new Error('Invalid RSS feed response');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Medium articles:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

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

  return (
    <motion.section
      className="blog"
      id="blog"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants} className="section-title">
        Blog
      </motion.h2>
      <div className="blog-grid">
        {loading ? (
          <div className="loading">Loading articles...</div>
        ) : error ? (
          <div className="error">Error loading articles: {error}</div>
        ) : articles.length > 0 ? (
          articles.map((article) => (
            <motion.a
              key={article.guid}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
              variants={itemVariants}
            >
              <div className="blog-card-image">
                <img 
                  src={article.thumbnail} 
                  alt={article.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/600x400?text=Blog+Post';
                  }} 
                />
              </div>
              <div className="blog-card-content">
                <h3>{article.title}</h3>
                <p>{article.description.substring(0, 150)}...</p>
                <span className="read-more">Read More</span>
              </div>
            </motion.a>
          ))
        ) : (
          <div className="error">No articles found</div>
        )}
      </div>
    </motion.section>
  );
};

export default Blog;