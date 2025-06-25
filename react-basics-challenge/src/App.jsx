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
import Day5Card from './day5/Day5Card';
import Day6Card from './day6/Day6Card';
import Day7Card from './day7/Day7Card';


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
        <Day5Card />
        <Day6Card />
        <Day7Card />
      </main>
      <Footer />
    </div>
  )
}

export default App
