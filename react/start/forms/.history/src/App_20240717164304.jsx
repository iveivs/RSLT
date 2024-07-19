import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')
  console.log(value);
  return (
    <>
      <h1>Forms</h1>
      <form>
        <input type="email" name='email' />
      </form>
      <h3>{value}</h3>
    </>
  )
}

export default App
