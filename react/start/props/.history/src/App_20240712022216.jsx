import { useState } from "react";
import styles from "./App.module.css";

const AppLayout = () => (
  <div className={styles.app}>
    <div>A: {a}</div>
    <button onClick={()=> setA(a + 1)}> Прибавит 1 к А</button>
    <div>B: {b}</div>
    <button onClick={()=> setB(b + 1)}> Прибавит 1 к B</button>
    <div>Сумма A + <B>sum</B></div>
  </div>
)

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const sum = a + b
  return <AppLayout a={a} b={b} setA={setA}setA={setA} />
}

export default App