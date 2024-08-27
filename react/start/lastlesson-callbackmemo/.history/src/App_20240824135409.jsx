import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num, setNum] = useState()
  const [degree, setDegree] = useState()
  const [result, setDegree] = useState()

  return (
    <div>
        <div>{num} в степени {degree} = {result}</div>
        <label>
          <span>Число:</span>
          <input type="number" value={num} onChange={onNumChange} />
        </label>
        <label>
          <span>Степень:</span>
          <input type="number" value={degree} onChange={onDegreeChange} />
        </label>

    </div>
  )
}

export default App
