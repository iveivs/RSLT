import { useState } from "react";
import "./App.css";



function App() {
    console.log("TEST");
    const [num, setNum] = useState(0);
    const [degree, setDegree] = useState(0);
    // const [result, setResult] = useState(0);

    const onNumChange = useCallback(({ target }) => {
        setNum(Number(target.value));
    },[]);
    const onDegreeChange = useCallback(({ target }) => {
        setDegree(Number(target.value));
        // setResult();
    },[]);

    const result = Math.pow(num, degree)
    return (
        <div>
            <div>
                {num} в степени {degree} = {result}
            </div>
            <Field
                name="num"
                label="Число"
                value={num}
                onChange={onNumChange}
            />
            <Field
                name="degree"
                label="Степень"
                value={degree}
                onChange={onDegreeChange}
            />
        </div>
    );
}

export default App;
