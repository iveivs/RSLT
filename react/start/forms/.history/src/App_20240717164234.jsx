import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')
  console.log(value);
  return (
    <>
      <h1>Forms</h1>
      
      <h3>{value}</h3>
    </>
  )
}

export default App
