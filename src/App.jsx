import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='px-0 py-0'>
      <h1>Name</h1>
      <div className='container px-8 py-2'>
        <div className='container w-screen bg-pink'>name</div>
      </div>
    </div>
  )
}

export default App
