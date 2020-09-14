import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const SelectedAnecdote = ({anecdotes, selected}) => (
  <p>{anecdotes[selected]}</p>
)

const App = () => {
  const [selected, setSelected] = useState(0)
  const initialPoints = new Array(anecdotes.length).fill(0)
  const [points, setPoints] = useState(initialPoints)

  const handleVote = () => {  
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max))
  const handleNext = () => {
    const newIndex = getRandomNumber(anecdotes.length)
    setSelected(newIndex)
  }
  return (
    <>
      <SelectedAnecdote anecdotes={anecdotes} selected={selected} />
      <section>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleNext}>next anecdote</button>
      </section>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
