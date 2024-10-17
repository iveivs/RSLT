import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Blog from './Blog'
import { Provider } from 'react-redux'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Blog />
  </BrowserRouter>,
)