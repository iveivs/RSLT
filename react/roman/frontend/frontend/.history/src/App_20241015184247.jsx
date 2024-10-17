
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHom />}></Route>
        <Route path="/products" element={<PageProducts />}></Route>
        <Route path="/products/:id" element={<PageHome />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
