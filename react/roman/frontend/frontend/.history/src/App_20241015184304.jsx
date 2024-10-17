
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageHome from './pages/PageHome'
import PageProducts from './pages/PageProducts'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />}></Route>
        <Route path="/products" element={<PageProducts />}></Route>
        <Route path="/products/:id" element={<Sing/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
