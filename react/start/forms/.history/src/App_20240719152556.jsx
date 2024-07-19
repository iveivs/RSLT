// npm i yup
import { useState, useRef } from "react";
import "./App.css";
import { useForm } from "react-hook-form";


function App() {
    

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
