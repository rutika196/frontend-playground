import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="header-title">React Basics Challenge</h1>
        <p className="header-subtitle">30-Day Challenge Journey • Master React fundamentals step by step</p>
        <div className="header-stats">
          <div className="stat-item days-stat">
            <span className="stat-number">7/30</span>
            <span className="stat-label">Days</span>
          </div>
          <div className="stat-item challenges-stat">
            <span className="stat-number">19</span>
            <span className="stat-label">Challenges</span>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-header">
              <span className="progress-percentage">23%</span>
              <span className="progress-label">Complete</span>
            </div>
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{width: '23%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;