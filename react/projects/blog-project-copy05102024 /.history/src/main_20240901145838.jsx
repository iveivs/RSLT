import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
imp
import Blog from './Blog.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Blog />
  </StrictMode>,
)