
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />}></Route>
        <Route path="/" element={<PageProduct />}></Route>
        <Route path="/" element={<PageHome />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App