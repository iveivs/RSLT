import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')
  console.log(v);
  return (
    <>
      <h1>Forms</h1>
      <input type="text" value={value} onChange={({target}) => setValue(target.value)} />
      <h3>{value}</h3>
    </>
  )
}

export default App
