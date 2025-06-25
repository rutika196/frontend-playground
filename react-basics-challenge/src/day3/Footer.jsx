import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-main">
          <p className="footer-tagline">
            "Innovation distinguishes between a leader and a follower." - Steve Jobs
          </p>
          
          <div className="footer-links">
            <a 
              href="https://your-portfolio.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              Portfolio
            </a>
            <a 
              href="https://linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            Built with ❤️ and React • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;