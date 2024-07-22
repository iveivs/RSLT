import { useState } from 'react'
import './App.css'

function App() {
  const [someVar, setSomevar] = useState(false)
  const [someNum, setSomeNum] = useState(5)

  const changeSomeVar = () => {
    if(someNum > 2){
      setSomevar(())
      console.log('someVar', someVar);
    }
  }
  return (
    <>
        <h1>testing</h1>
        <button onClick={changeSomeVar} >Result </button>
    </>
  )
}

export default App
