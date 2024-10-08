import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[value, setValue] = useState(0)
  const [showText, setShowText] = useState(true)

  const incrOnClick = (event) => {
    setValue(updateValue => updateValue + 1)
    setValue(updateValue => updateValue + 1)
  }

  const toggleText = () => {
    setShowText(!showText)
  }

  // jsx не обязательно должен быть в return
  const someText = <div>TEXT</div>
  return (
    <>
      <div>
        
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={incrOnClick}>
          count is {value}
        </button>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={toggleText}>
          {showText ? 'Скрыть' : 'Показать'}
      </button>
      {showText && someText}
    </>
  )
}

export default App
