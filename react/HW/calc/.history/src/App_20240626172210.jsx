import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const numButtons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function App() {
    const [count, setCount] = useState(0);
    const [dispNum, showDispNum] = useState('')

    const showDisplay = (event) => {
      console.log(event.target.textContent);
      // let currentBtn = event.target.textContent
      showDispNum((prev) => prev + event.target.textContent)
      console.log(dispNum);
      // return event.target.textContent
    }

    return (
        <>
            <p>Calc</p>
            <div className="display">{dispNum}</div>
            <div className="btn__cover" onClick={(e) => {showDisplay(e)}}>
                {numButtons.map((btn) => (
                    <button className="numButtons" key={btn}>{btn}</button>
                ))}
            </div>
            <button onClick={(e) => {showDisplay(e)}}>+</button>
            <button onClick={(e) => {showDisplay(e)}}>-</button>
            <br />
            <button className="">=</button>
            <br />
            <button>С</button>

        </>
    );
}

export default App;
