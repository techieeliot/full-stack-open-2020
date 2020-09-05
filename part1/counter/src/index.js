import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [counter, setCounter] = useState(0)
  
  // setTimeout(
  //   () => setCounter(counter + 1),
  // 1000
  // )

  const handleClick = () => {
    console.log('clicked');
    
  }

  console.log('rendering...', counter)

  return (
    <main className="container">
      <h1>{counter}</h1>
      <button className="btn" onClick={handleClick}>
        👍
      </button>
    </main>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
  )