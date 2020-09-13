import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setFeedback] = useState([])

  const FeedbackLog = (props) => {
    if(props.allFeedback === 0){
      return (
        <p>Begin using the app by pressing one of the buttons above.</p>
      )
    }
    return(
      <div>
        <p>all {props.allFeedback}</p>
        <p>average {props.average}</p>
        <p>positive {props.positive}</p>
      </div>
    )
  }

  const positive = `${good/allFeedback.length} %`

  const getSum = (total, num) => total + num
  const average = allFeedback.reduce(getSum, 0) / allFeedback.length

  const handleGood = () => {
      setFeedback(allFeedback.concat(1))
      setGood(good + 1)
    }
  const handleNeutral = () => {
      setFeedback(allFeedback.concat(0))
      setNeutral(neutral + 1)
    }
  const handleBad = () => {
      setFeedback(allFeedback.concat(-1))
      setBad(bad + 1)
    }
  

  return (
    <>
      <h1>give feedback</h1>
      <section className="buttons">
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      </section>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <FeedbackLog 
        allFeedback={allFeedback.length} 
        average={average}
        positive={positive}/>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
