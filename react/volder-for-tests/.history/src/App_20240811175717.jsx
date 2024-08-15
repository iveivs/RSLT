import { useState } from "react";
import { createContext, useContext } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);
    const [showText, setShowText] = useState(true);
    const [data]

    const AppContext = createContext(null);

    const incrOnClick = (event) => {
        setValue((updateValue) => updateValue + 1);
        setValue((updateValue) => updateValue + 1);
    };

    const toggleText = () => {
        setShowText(!showText);
    };

    // jsx не обязательно должен быть в return
    const someText = <div>TEXT</div>;
    return (
        <AppContext.Provider value={}>
            <>
                <h1>for test</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <button onClick={incrOnClick}>count is {value}</button>
                </div>

                <button onClick={toggleText}>
                    {showText ? "Скрыть" : "Показать"}
                </button>
                {showText && someText}
            </>
        </AppContext.Provider>
    );
}

export default App;
