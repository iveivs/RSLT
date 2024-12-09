import { useState } from 'react'
import './App.css'
import { Main } from './pages/main/Main'
import { getQuestions } from './utils/utils'



function App() {
  const [data, setData] = useState()
  const questions = getQuestions().then(())
console.log('questions', questions);
  return (
    <>
      <Main />
    </>
  )
}

export default App
