import { useState, mem0 } from "react";
import "./App.css";

export const Field = ({ name, label, value, onChange }) => {
  console.log('name', name, 'value', value);
    return (
        <label>
            <span>{label}:</span>
            <input
                type="number"
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

function App() {
  console.log('TEST');
    const [num, setNum] = useState(0);
    const [degree, setDegree] = useState(0);
    const [result, setResult] = useState(0);

    const onNumChange = ({ target }) => {
        setNum(Number(target.value));
        setResult(Math.pow(target.value, degree));
    };
    const onDegreeChange = ({ target }) => {
        setDegree(Number(target.value));
        setResult(Math.pow(num, target.value));
    };

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