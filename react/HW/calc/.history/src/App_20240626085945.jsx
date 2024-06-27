import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const numButtons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function App() {
  const [count, setCount] = useState(0)

  // let buttonNum = <button></button>

  return (
    <>
      <p>Calc</p>
      {numButtons.map((btn) => <button>btn</button>)}
    </>
  )
}

export default App
