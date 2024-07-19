// npm i yup
import { useState, useRef } from "react";
import "./App.css";



// YAP  useRef STEP ONE
function App() {
    const [stateCounter, setStateCounter] = useState(0);
    const refCounter = useRef(0)

    

    return (
        <>
            <h1>Forms</h1>
            <p>RefCounter: {refCounter.current}</p>
            <button onClick={increment}>Прибавить RefCounter</button>

            <p>RefCounter: {stateCounter}</p>
            <button>Прибавить stateCounter</button>
        </>
    );
}

export default App;
