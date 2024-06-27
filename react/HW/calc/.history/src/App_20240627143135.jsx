import { useState } from "react";
import classes from "./App.module.css";

const numButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function App() {
    const [dispNum, showDispNum] = useState("");
    const [curOper, setCurOper] = useState();

    const showDisplay = (event) => {
        showDispNum((prev) => prev + event.target.textContent);
    };

    const calculate = () => {
        let indexOfOperation = dispNum.indexOf(curOper);
        // console.log('indexOfOperation', indexOfOperation);
        let firstNum = +dispNum.slice(0, indexOfOperation);
        // console.log('firstNum', firstNum);
        let secondNum = +dispNum.slice(
            indexOfOperation + 1,
            dispNum[length - 1]
        );
        // console.log('secondNum', secondNum);
        let result;
        switch (curOper) {
            case "+":
                result = firstNum + secondNum;
                // console.log('result sum', result);
                break;
            case "-":
                result = firstNum - secondNum;
                // console.log('result sum', result);
                break;
        }
        showDispNum(result);
    };

    const clearDisplay = () => showDispNum("");
    //
    return (
        <>
            <div className={classes.container}>
                <div className={classes.display}>{dispNum}</div>
                <div
                    className={classes.btn__cover}
                    onClick={(e) => {
                        showDisplay(e);
                    }}
                >
                    {numButtons.map((btn) => (
                        <button
                            className={`${classes.numButtons} ${classes.btn}`}
                            key={btn}
                        >
                            {btn}
                        </button>
                    ))}
                    <button
                        className={classes.btnOperation}
                        onClick={(e) => {
                            showDisplay(e);
                            // operation = e.target.textContent
                            // console.log('operation',operation);
                            setCurOper(e.target.textContent);
                        }}
                    >
                        +
                    </button>

                    <button
                        className={classes.btnOperation}
                        onClick={(e) => {
                            showDisplay(e);
                            // operation = e.target.textContent
                            // console.log('operation',operation);
                            setCurOper(e.target.textContent);
                        }}
                    >
                        -
                    </button>

                    <button className={classes.btnEqual} onClick={calculate}>
                        =
                    </button>
                    <br />
                    <button onClick={clearDisplay}>С</button>
                </div>

                <br />
            </div>
        </>
    );
}

export default App;
