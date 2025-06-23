import React from 'react';
import './Day4Card.css';
import Interval from './Interval';
import Theme from './Theme';
import Mount from './Mount';

const Day4Card = () => {
  return (
    <div className="day-card">
      <div className="day-card-header">
        <div className="date-badge">December 2024</div>
        <h1>Day 4</h1>
        <div className="progress-badge">
          <span className="completed-count">3</span>
          <span className="total-count"> / 3 completed</span>
        </div>
      </div>

      <div className="challenges-grid">
        <div className="challenge-card">
          <div className="challenge-header">
            <div className="challenge-number">1</div>
            <h3 className="challenge-title">useEffect with Cleanup</h3>
          </div>
          <p className="challenge-description">
            Learn how to use useEffect with cleanup function to manage intervals and prevent memory leaks.
          </p>
          <div className="challenge-demo">
            <h3>Demo:</h3>
            <Interval />
          </div>
        </div>

        <div className="challenge-card">
          <div className="challenge-header">
            <div className="challenge-number">2</div>
            <h3 className="challenge-title">Theme Toggle</h3>
          </div>
          <p className="challenge-description">
            Create a theme toggle component that switches between light and dark modes using useState.
          </p>
          <div className="challenge-demo">
            <h3>Demo:</h3>
            <Theme />
          </div>
        </div>

        <div className="challenge-card">
          <div className="challenge-header">
            <div className="challenge-number">3</div>
            <h3 className="challenge-title">Component Lifecycle</h3>
          </div>
          <p className="challenge-description">
            Understand component mounting with useEffect and observe lifecycle events in the console.
          </p>
          <div className="challenge-demo">
            <h3>Demo:</h3>
            <Mount />
          </div>
        </div>
      </div>

      <div className="day-card-footer">
        <div className="achievement-badge">
          🔄 Lifecycle Master
        </div>
      </div>
    </div>
  );
};

export default Day4Card; 