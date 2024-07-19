import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 onClick={(e)=> console.log({target})} >Forms</h1>
    </>
  )
}

export default App
