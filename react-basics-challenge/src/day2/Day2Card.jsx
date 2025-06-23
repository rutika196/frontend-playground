import React from 'react';
import NameList from './Namelist';
import ShowHide from './ShowHide';
import SimpleForm from './SimpleForm';
import './Day2Card.css';

const Day2Card = () => {
  const challenges = [
    {
      id: 1,
      title: "Map array to list with key",
      description: "Created a NameList component that renders an array of names using map() with proper key attributes",
      component: <NameList />
    },
    {
      id: 2,
      title: "Conditional rendering (show/hide text)",
      description: "Built a ShowHide component with toggle functionality using conditional rendering and state management",
      component: <ShowHide />
    },
    {
      id: 3,
      title: "Simple form with submit handler",
      description: "Implemented a SimpleForm component with controlled input, form submission, and event handling",
      component: <SimpleForm />
    }
  ];

  return (
    <div className="day-card">
      <div className="day-card-header">
        <h1>Day 2 Challenge</h1>
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
          🌟 Day 2 Complete!
        </div>
      </div>
    </div>
  );
};

export default Day2Card; 