import React from 'react';
import Greeting from './Greeting';
import ControlledInput from './ControlledInput';
import CounterButton from './CounterButton';
import './Day1Card.css';

const Day1Card = () => {
  const challenges = [
    {
      id: 1,
      title: "Render a component with props",
      description: "Created a Greeting component that accepts and displays a name prop",
      component: <Greeting name="Rutika" />
    },
    {
      id: 2,
      title: "Controlled input (text field)",
      description: "Built an input component with controlled state that displays typed text in real-time",
      component: <ControlledInput />
    },
    {
      id: 3,
      title: "Button with onClick counter",
      description: "Implemented a counter button that increments count on each click using useState",
      component: <CounterButton />
    }
  ];

  return (
    <div className="day-card">
      <div className="day-card-header">
        <h1>Day 1</h1>
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

export default Day1Card; 