// npm i yup
import { useState, useRef } from "react";
import "./App.css";



// YAP  useRef STEP ONE
function App() {
    const [stateCounter, setStateCounter] = useState(0);
    const refCounter = useRef(0)

    const incrementRefCounter = () => {
      refCounter.current = refCounter.current + 1
      console.log('refCounter', );
    }

    return (
        <>
            <h1>Forms</h1>
            <p>RefCounter: {refCounter.current}</p>
            <button onClick={incrementRefCounter}>Прибавить RefCounter</button>

            <p>RefCounter: {stateCounter}</p>
            <button onClick={incrementStateCounter}>Прибавить stateCounter</button>
        </>
    );
}

export default App;
