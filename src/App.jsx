import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1)
  }
  
  const restCount = () => {
    setCount(count - 1)
  }
  

  return (
    <div className="App">
        <p>{count}</p>
        <button onClick={() => addCount()}> suma </button>
        <button onClick={() => restCount()}> resta </button>
    </div>
  )
}

export default App
