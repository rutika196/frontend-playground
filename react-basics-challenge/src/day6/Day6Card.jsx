import React from 'react';
import ListObj from './ListObj';
import Dynamic from './Dynamic';
import ParentCounter from './ParentCounter';
import './Day6Card.css';

const Day6Card = () => {
  const challenges = [
    {
      id: 1,
      title: "List Rendering with Objects",
      description: "Created a component that renders a list of user objects using map() with proper key handling",
      component: <ListObj />
    },
    {
      id: 2,
      title: "Dynamic Class Rendering",
      description: "Built a component with dynamic CSS classes that toggle between active/inactive states",
      component: <Dynamic />
    },
    {
      id: 3,
      title: "Parent-Child Callback Communication",
      description: "Implemented parent-child communication using callback functions passed as props",
      component: <ParentCounter />
    }
  ];

  return (
    <div className="day-card">
      <div className="day-card-header">
        <h1>Day 6</h1>
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


    </div>
  );
};

export default Day6Card; 