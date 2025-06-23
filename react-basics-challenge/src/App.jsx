import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Day1Card from './day1/Day1Card';
import Day2Card from './day2/Day2Card';
import Day3Card from './day3/Day3Card';
import Day4Card from './day4/Day4Card';
import Header from './day3/Header';
import Footer from './day3/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-layout">
      <Header />
      <main className="cards-container">
        <Day1Card />
        <Day2Card />
        <Day3Card />
        <Day4Card />
      </main>
      <Footer />
    </div>
  )
}

export default App
