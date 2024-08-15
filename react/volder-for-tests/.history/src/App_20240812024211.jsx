import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { AppContext } from "./AppContext";

function App() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);
    const [showText, setShowText] = useState(true);
    const [dataForContext, setDataForContext] = useState("TEXT");
    const [anotherDataForContext, setAnotherDataForContext] = useState({
        someField: "iAmString",
    });

    // обновление стейта через самодельную функцию dispatch
    // const dispatch = (action) => {
    //   const {type, payload} = action

    //   switch (type) {
    //     case 'SET_NAME_IN_STATE':
    //       setDataForContext(payload)
    //       break;
    //     case 'SET_SECONDNAME_IN_STATE':
    //       setDataForContext(payload)
    //       break;
    //     default:
    //   }
    // }

    // другой вариант
    const reducer = (state, action) => {
        const { type, payload } = action;

        switch (type) {
            case "SET_NAME_IN_STATE":
                return payload
            case "SET_SECONDNAME_IN_STATE":
              return payload
            default:qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
              return state
        }
    };

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
        <AppContext.Provider
            value={{
                dataForContext,
                anotherDataForContext,
                setAnotherDataForContext,
                dispatch,
            }}
        >
            <>
                <Header></Header>
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
