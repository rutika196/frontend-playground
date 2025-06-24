import React from 'react';
import BindingInput from './BindingInput';
import Toggle from './Toggle';
import FragmentComponent from './FragmentComponent';
import './Day5Card.css';

const Day5Card = () => {
  const challenges = [
    {
      id: 1,
      title: "Two-way Data Binding Input",
      description: "Implemented input with bidirectional data flow using controlled components",
      component: <BindingInput />
    },
    {
      id: 2,
      title: "Toggle Component",
      description: "Created a toggle switch component with state management and visual feedback",
      component: <Toggle />
    },
    {
      id: 3,
      title: "React Fragment Component",
      description: "Built a component using React.Fragment to return multiple elements without wrapper div",
      component: <FragmentComponent />
    }
  ];

  return (
    <div className="day-card">
      <div className="day-card-header">
        <h1>Day 5</h1>
        <div className="date-badge">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
        <div className="progress-badge">
          <span className="completed-count">{challenges.length}</span>
          <span className="total-count">/{challenges.length} Completed</span>
        </div>
      </div>

      <div className="challenges-grid">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="challenge-card">
            <div className="challenge-header">
              <div className="challenge-number">#{challenge.id}</div>
              <h3 className="challenge-title">{challenge.title}</h3>
            </div>
            <p className="challenge-description">{challenge.description}</p>
            <div className="challenge-demo">
              {challenge.component}
            </div>
          </div>
        ))}
      </div>

      <div className="day-card-footer">
        <div className="achievement-badge">
          🏆 Day 5 Complete!
        </div>
      </div>
    </div>
  );
};

export default Day5Card; 