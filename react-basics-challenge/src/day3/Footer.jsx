import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">🚀 Keep Learning!</h3>
          <p className="footer-text">
            Great job completing these React challenges! Keep practicing to build amazing apps.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Next Steps:</h4>
          <ul className="footer-list">
            <li>Advanced React Hooks</li>
            <li>State Management (Redux/Zustand)</li>
            <li>React Router</li>
            <li>Testing with Jest & React Testing Library</li>
          </ul>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            Built with ❤️ while learning React • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;