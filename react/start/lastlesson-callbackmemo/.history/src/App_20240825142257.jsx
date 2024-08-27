import { useState } from "react";
import "./App.css";



function App() {
    
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
