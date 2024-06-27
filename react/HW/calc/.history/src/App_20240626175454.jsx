import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const numButtons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function App() {
    // const [count, setCount] = useState(0);
    const [dispNum, showDispNum] = useState("");
    
    let operation;

    const showDisplay = (event) => {
        showDispNum((prev) => prev + event.target.textContent);
    };

    const calculate = () => {
      console.log('operation', operation);
      let indexOfOperation = dispNum.indexOf(operation)
      console.log('indexOfOperation', indexOfOperation);
      // let firstNum = dispNum
    }

    return (
        <>
            <div className="display">{dispNum}</div>
            <div
                className="btn__cover"
                onClick={(e) => {
                    showDisplay(e);
                }}
            >
                {numButtons.map((btn) => (
                    <button className="numButtons" key={btn}>
                        {btn}
                    </button>
                ))}
            </div>
            <button
                className="btnOperation"
                onClick={(e) => {
                    showDisplay(e);
                    operation = e.target.textContent
                    console.log('operation',operation);
                }}
            >
                +
            </button>
            <button
                className="btnOperation"
                onClick={(e) => {
                    showDisplay(e);
                    operation = e.target.textContent
                    console.log('operation',operation);
                }}
            >
                -
            </button>
            <br />
            <button className="btnEqual" onClick={()=> calculate()}>=</button>
            <br />
            <button>С</button>
        </>
    );
}

export default App;
