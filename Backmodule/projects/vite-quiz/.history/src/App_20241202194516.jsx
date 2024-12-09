import { useState } from 'react'
import './App.css'
import { Main } from './pages/main/Main'
import { getQuestions } from './utils/utils'

const questions = getQuestions()
console.log('questions', questions);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Main />
    </>
  )
}

export default App
