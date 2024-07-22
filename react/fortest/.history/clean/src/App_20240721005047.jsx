import { useState } from 'react'
import './App.css'

function App() {
  const [someVar, setSomevar] = useState(false)
  const [someNum, setSomeNum] = useState(5)

  const changeSomeVar = () => {
    if(someNum > 2){
      setSomevar(true)
    }
  }
  return (
    <>
        <h1>testing</h1>
        bu
    </>
  )
}

export default App
