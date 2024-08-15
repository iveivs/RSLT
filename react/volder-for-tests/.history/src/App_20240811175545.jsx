import { useState } from "react";
import { createContext, useContext } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);
    const [showText, setShowText] = useState(true);

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
        <AppContext
    );
}

export default App;
