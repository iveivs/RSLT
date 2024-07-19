// npm i yup
import { useState, useRef } from "react";
import "./App.css";



// YAP  useRef STEP ONE
function App() {
    const [, setStateCounter] = useState(0);
    const refCounter = useRef(0)

    

    return (
        <>
            <h1>Forms</h1>
            <p>RefCounter: {refCounter.current}</p>
            <button>Прибавить RefCounter</button>

            <p>RefCounter: {refCounter.current}</p>
            <button>Прибавить RefCounter</button>
        </>
    );
}

export default App;
