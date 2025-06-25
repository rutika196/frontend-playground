import React from 'react';
import './Day3Card.css';
import Parent from './Parent';

const Day3Card = () => {
  return (
    <div className="day-card">
      <div className="day-card-header">
        <div className="date-badge">December 2024</div>
        <h1>Day 3</h1>
        <div className="progress-badge">
          <span className="completed-count">1</span>
          <span className="total-count"> / 1 completed</span>
        </div>
      </div>

      <div className="challenges-grid">
        <div className="challenge-card">
          <div className="challenge-header">
            <div className="challenge-number">1</div>
            <h3 className="challenge-title">Lifting State Up</h3>
          </div>
          <p className="challenge-description">
            Learn how to pass data from child component to parent component by lifting state up.
          </p>
          <div className="challenge-demo">
            <h3>Demo:</h3>
            <Parent />
          </div>
        </div>
      </div>


    </div>
  );
};

export default Day3Card; 