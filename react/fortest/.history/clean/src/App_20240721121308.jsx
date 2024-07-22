import { useState } from 'react'
import './App.css'

function App() {
  const [someVar, setSomevar] = useState(false)
  const [someNum, setSomeNum] = useState(5)
  const [secondSomeNum, setSecondSomeNum] = useState(0)
  
  const changeSomeVar = () => {
    if(someNum > 2){
      setSomevar(prev => !prev)
      console.log('someVar', someVar);
      setSecondSomeNum(someVar)
    }
  }
  return (
    <>
        <h1>testing</h1>
        <button onClick={changeSomeVar} >Result </button>
        <p>{someVar ? 'true' : 'false'}</p>
        <p>{secondSomeNum}</p>
    </>
  )
}

export default App
