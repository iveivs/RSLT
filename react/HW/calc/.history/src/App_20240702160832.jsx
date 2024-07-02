import { useState } from "react";
import classes from "./App.module.css";

const NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function App() {
    // const [dispNum, setDispNum] = useState("");
    const [showYellowText, setShowYellowText] = useState(false);
    const [operand1, setOperand1] = useState("");
    const [operand2, setOperand2] = useState('');
    const [operator, setOperator] = useState('');
    const [currentAnswer, setCurrentAnswer] = useState('')

    // const showDisplay = (event) => {
    //     return `${operand2} + ${operator} + ${operand1}}`
    // };
    // let currentResult = ''

    const calculate = () => {
        let result;
        switch (operator) {
            case "+":
                result = Number(operand1) + Number(operand2);

                break;
            case "-":
                result = Number(operand1) + Number(operand2);
                break;
        }
        console.log('result', result);
        setCurrentAnswer(result)
        console.log('setCurrentAnswer', currentAnswer);
        setOperand1(result)
        console.log('operand1', operand1);
    };
    
    return (
        <>
            <div className={classes.container}>
                <div className={classes.display}>
                    {/* <span 
                    >   
                        {currentAnswer ? currentAnswer : null}
                        {operand2 ? operand2 : null}
                        {operator ? operator : null}
                        {operand1 ? operand1 : null}
                        {operand2 + operator + operand1}
                        
                    </span> */}
                    <span className={showYellowText ? classes.spanYellow : null}></span>
                    {!currentAnswer ? operand2 + operator + operand1 : currentAnswer}
                </div>
                <div
                    className={classes.btn__cover}
                >
                    {NUMS.map((btn) => (
                        <button
                            className={`${classes.numButtons} ${classes.btn}`}
                            key={btn}
                            onClick={()=> {operator ?  setOperand1(prev=> prev + btn) : setOperand2(prev=> prev + btn)}}
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
                        onClick={() => {
                            setOperator("+");
                        }}
                    >
                        +
                    </button>

                    <button
                        className={classes.btnOperation}
                        onClick={() => {
                            setOperator("-");
                        }}
                    >
                        -
                    </button>
                </div>

                <div className={classes.clearAndEqualBtn}>
                    <button
                        className={classes.btnEqual}
                        onClick={calculate}
                    >
                        =
                    </button>
                    <button
                        className={classes.clear}
                        onClick={() => { setOperand1(""), setOperand2(""), setOperator(""), setCurrentAnswer('')}}
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
