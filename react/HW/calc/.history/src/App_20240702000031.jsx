import { useState } from "react";
import classes from "./App.module.css";

const NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function App() {
    // const [dispNum, showDispNum] = useState("0");
    // const [curOper, setCurOper] = useState();
    // const [showYellowText, setShowYellowText] = useState(false);
    const [operand1, setOperand1] = useState()
    const [operand2, setOperand2] = useState()
    const [operator, setOperator] = useState()

    const showDisplay = (event) => {
        if (dispNum[0] === "0") {
            showDispNum("");
        }
        showDispNum((prev) => prev + event.target.textContent);
    };

    const calculate = () => {
        let indexOfOperation = dispNum.indexOf(curOper);
        let firstNum = +dispNum.slice(0, indexOfOperation);
        let secondNum = +dispNum.slice(
            indexOfOperation + 1,
            // dispNum[length - 1]
        );
        let result;
        switch (curOper) {
            case "+":
                result = firstNum + secondNum;

                break;
            case "-":
                result = firstNum - secondNum;
                break;
        }
        showDispNum(result);
        setShowYellowText(true);
    };

    const clearDisplay = () => {
        showDispNum("0");
        setShowYellowText(false);
    };
    //
    return (
        <>
            <div className={classes.container}>
                <div className={classes.display}>
                    <span
                        // className={showYellowText ? classes.spanYellow : null}
                    >
                        {/* {dispNum} */}
                    </span>
                </div>
                <div
                    className={classes.btn__cover}
                    onClick={(e) => {
                        // isFirstNumZero
                        showDisplay(e);
                    }}
                >
                    {NUMS.map((btn) => (
                        <button
                            className={`${classes.numButtons} ${classes.btn}`}
                            key={btn}
                        >
                            {btn}
                        </button>
                    ))}

                    <button
                        className={classes.btnOperation}
                        // onClick={(e) => {
                        //     setCurOper(e.target.textContent);
                        //     setShowYellowText(false);
                        // }}
                        onClick
                    >
                        +
                    </button>

                    <button
                        className={classes.btnOperation}
                        onClick={(e) => {
                            // setCurOper(e.target.textContent);
                            // setShowYellowText(false);
                        }}
                    >
                        -
                    </button>
                </div>

                <div className={classes.clearAndEqualBtn}>
                    <button className={classes.btnEqual} 
                    // onClick={calculate}
                    >
                        =
                    </button>
                    <button className={classes.clear} 
                        // onClick={clearDisplay}
                        >
                        С
                    </button>
                    <br />
                </div>
            </div>
        </>
    );
}

export default App;
