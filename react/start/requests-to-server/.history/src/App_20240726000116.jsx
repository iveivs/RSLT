import { useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  return (
    <>
      <h1>requests to server</h1>
      {products.map(())}
    </>
  )
}

export default App
