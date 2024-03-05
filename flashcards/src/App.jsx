import { useState } from 'react'
import './App.css'
import { Flashcard } from './components/Flashcard'

function App() {

  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  const getNext = () => {
    setCount(0)
    if (index == 9) {
      setIndex(0);
    }
    else {
      setIndex(i => i + 1)
    }

  }

  const getPrev = () => {
    setCount(0)
    if (index == 0) {
      setIndex(9);
    }
    else {
      setIndex(i => i - 1)
    }
  }
  const handlechange = () => {
    let temp = count == 0 ? 1 : 0;
    setCount(temp)
  }

  return (
    <div>
      <h1>Guess the Celebrity</h1>
      <h3>Do you know all the celebrities? Test your knowledge with this Quiz</h3>
      <h3>Number of cards: 10</h3>
      <Flashcard index={index} handlechange={handlechange} count={count} />
      <button onClick={getPrev}>Prev</button>
      <button onClick={getNext}>Next</button>

    </div>
  )
}

export default App
