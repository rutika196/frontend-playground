import React, { useState } from 'react'

export default function Dynamic() {
  const [stage, setStage] = useState('active');

  const handleEvent =() => {
    setStage(stage === 'active' ? 'inactive' : 'active');
  }

  return (
    <div>
      <h3>Render with dynamic class (active/inactive)</h3>
        <button className={`${stage === 'active' ? 'active' : 'inactive'}-button`} onClick={handleEvent}>{stage ==='active' ? 'Switch to Inactive' : 'Switch to Active'}</button>
        <p>Current state : {stage === 'active' ? 'Active' : 'Inactive'}</p>

    </div>
  )
}