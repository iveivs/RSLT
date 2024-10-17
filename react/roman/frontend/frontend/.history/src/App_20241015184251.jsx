
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageHome from './pages/PageHome'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />}></Route>
        <Route path="/products" element={<PageProduc />}></Route>
        <Route path="/products/:id" element={<PageHome />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
