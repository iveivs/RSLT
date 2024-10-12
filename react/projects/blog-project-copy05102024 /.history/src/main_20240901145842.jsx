import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Brouse
import Blog from './Blog.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Blog />
  </StrictMode>,
)
