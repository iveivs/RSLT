import { useState } from 'react'
import './App.css'
import { Main } from './pages/main/Main'
import { getQuestions } from './utils/utils'



function App() {
  // const [data, setData] = useState(0)
  const questions = getQuestions()
console.log('questions', questions);
  return (
    <>
      <Main />
    </>
  )
}

export default App
