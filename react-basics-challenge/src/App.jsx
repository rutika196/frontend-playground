import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Day1Card from './Day1Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="cards-container">
      <Day1Card />
    </div>
  )
}

export default App
