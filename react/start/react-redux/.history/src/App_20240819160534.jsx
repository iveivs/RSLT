import { useState } from 'react'
import { ControlPanel, User } from './components/index'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React - Redux</h1>
      <User  />
      < ControlPanel />
    </>
  )
}

export default App
