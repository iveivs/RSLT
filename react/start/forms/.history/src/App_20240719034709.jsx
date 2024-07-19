// npm i yup
import { useState, useRef } from "react";
import "./App.css";



// YAP  useRef STEP ONE
function App() {
    const [setState, setStateCounter] = useState(0);
    const refCounter = useRef(0)

    

    return (
        <>
            <h1>Forms</h1>
            <p>RefCounter: </p>
        </>
    );
}

export default App;
