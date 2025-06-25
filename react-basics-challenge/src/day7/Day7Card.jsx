import React from 'react';
import QuoteDemo from './QuoteDemo';
import ButtonDemo from './ButtonDemo';
import UserList from './UserList';
import './Day7Card.css';

const Day7Card = () => {
  const challenges = [
    {
      id: 1,
      title: "Reusable Quote Component",
      description: "Built a reusable Quote component that accepts text and author props for displaying formatted quotes",
      component: <QuoteDemo />
    },
    {
      id: 2,
      title: "Custom Button Component",
      description: "Created a flexible Button component with customizable props for label, onClick, type, and styling",
      component: <ButtonDemo />
    },
    {
      id: 3,
      title: "User List with Cards",
      description: "Implemented UserList and UserCard components to display user data in a structured format",
      component: <UserList />
    }
  ];

  return (
    <div className="day-card">
      <div className="day-card-header">
        <h1>Day 7</h1>
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

export default Day7Card; 