import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <div>{name} в степени {degree} = {result}</div>
        <label>
          <span>Число:</span>
          <input type="number"  onChange={onNumChange} />
        </label>

    </div>
  )
}

export default App
