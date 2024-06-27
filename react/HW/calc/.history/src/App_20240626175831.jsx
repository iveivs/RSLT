import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const numButtons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function App() {
    const [dispNum, showDispNum] = useState("");
    const [curOper, setCurOper] = useState()

    const showDisplay = (event) => {
        showDispNum((prev) => prev + event.target.textContent);
    };

    const calculate = () => {
      let indexOfOperation = dispNum.indexOf(curOper)
      console.log('indexOfOperation', indexOfOperation);
      let firstNum = dispNum.sl
      console.log('curOper', curOper);
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
                    // operation = e.target.textContent
                    // console.log('operation',operation);
                    setCurOper(e.target.textContent)
                }}
            >
                +
            </button>
            <button
                className="btnOperation"
                onClick={(e) => {
                    showDisplay(e);
                    // operation = e.target.textContent
                    // console.log('operation',operation);
                    setCurOper(e.target.textContent)
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
