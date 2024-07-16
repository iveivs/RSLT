// Stateful и stateless-компоненты

import { useState } from "react";
import styles from "./App.module.css";

const AppLayout = ({a, b, setA, setB, sum}) => (
  <div className={styles.app}>
    <div>A: {a}</div>
    <button onClick={()=> setA(a + 1)}> Прибавить 1 к А</button>
    <div>B: {b}</div>
    <button onClick={()=> setB(b + 1)}> Прибавить 1 к B</button>
    <div>Сумма A + {sum}</div>
  </div>
)

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const sum = a + b
  return <AppLayout a={a} b={b} setA={setA} setB={setB} sum={sum} />
}

export default App