import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const numButtons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function App() {
    const [count, setCount] = useState(0);
    const [dispNum, showDispNum] = useState('')

    const handleClick = (event) => {
      console.log(event.target);
    }

    return (
        <>
            <p>Calc</p>
            <div className="display"></div>
            <div className="btn__cover" onClick={(e) => {handleClick(e)}}>
                {numButtons.map((btn) => (
                    <button key={btn}>{btn}</button>
                ))}
            </div>
            <button>+</button>
            <button>-</button>
        </>
    );
}

export default App;
