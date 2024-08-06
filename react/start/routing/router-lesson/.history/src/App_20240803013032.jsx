import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Router</h1>
      <h3>Меню</h3>
      <ul>
        <li><a href="/">Главная</a></li>
        <li><a href="/">Главная</a></li>
        <li><a href="/">Главная</a></li>
        <li></li>
        <li></li>
      </ul>
    </>
  )
}

export default App
