import { useState } from "react";
// import "./App.css";
import classes from './App.module.css'

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
      let firstNum = +dispNum.slice(0, indexOfOperation)
      console.log('firstNum', firstNum);
      let secondNum = +dispNum.slice(indexOfOperation + 1, dispNum[length - 1])
      console.log('secondNum', secondNum);
      let result 
      switch (curOper) {
        case '+':
          result = firstNum + secondNum
          console.log('result sum', result);
          break;
      case '-':
        result = firstNum - secondNum
          console.log('result sum', result);
          break;
      }
      showDispNum(result)
    }

    const clearDisplay = () => showDispNum('')
    // className={classes.container}
    return (
        < >
            <div></div>
        </>
    );
}

export default App;
