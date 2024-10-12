import { useState } from 'react'
import styles from './App.module.css'
import styled from 'styled-components'
// import styles from ''

const Div = styled.div

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles></div>
    </>
  )
}

export default App
