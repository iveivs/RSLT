import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Blog from './blog.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Blog />
  </BrowserRouter>,
)
