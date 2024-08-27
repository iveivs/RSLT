import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react'

function App() {
  const [num, setNum] = useState(0)
  const [degree, setDegree] = useState(0)
  const [result, setResult] = useState(0)

  const onNumChange = ({ target }) => {
    setNum(Number(target.value))
    setResult(Math.pow(target.value, degree))
  }
  const onDegreeChange = ({ target }) => {
    setDegree(Number(target.value))
    setResult(Math.pow(num ,target.value))
  }
  // вариант 

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
