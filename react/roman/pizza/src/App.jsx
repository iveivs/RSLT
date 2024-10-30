import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PageHome from './pages/PageHome'
import PageProducts from './pages/PageProducts'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <PageHome /> } />
        <Route path="/products" element={ <PageProducts /> } />
        <Route path="/products/:id" element={ <SingleProduct /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
