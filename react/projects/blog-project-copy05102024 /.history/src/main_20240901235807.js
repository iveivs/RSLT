import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Blog from './log.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Blog />
  </BrowserRouter>,
)
