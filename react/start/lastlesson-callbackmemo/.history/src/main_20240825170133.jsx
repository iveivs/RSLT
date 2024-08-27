import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { OldApp } from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <App message='Функциональный компонент'/>
    <OldApp  />
    )
