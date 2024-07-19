import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')

  return (
    <>
      <h1>Forms</h1>
      <input type="text" value={value}  />
    </>
  )
}

export default App
