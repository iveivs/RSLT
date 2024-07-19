import { useState } from "react";
import "./App.css";

const initialState = {
    email: "",
    login: "",
    password: "",
};

const useStore = () => {
    const [state, setState] = useState(initialState);
    return {
        getState: () => state,
        updateState: (fieldName, newValue) => {
            setState({ ...state, [fieldName]: newValue });
        },
        resetState: () => {
            setState(initialState);
        },
    };
};

const sendData = (formData) => {
    console.log("send:", formData);
};

function App() {
    const { getState, updateState, resetState } = useStore();

    const onSubmit = (event) => {
        event.preventDefault();
        sendData(getState());
    };

    const { email, login, password } = getState();

    const onChange = ({ target }) => updateState(target.name, target.value);

    return (
        <>
            <h1>Forms</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Почта"
                    // old
                    // onChange={({target}) => updateState('email', target.value)}
                    // new
                    onChange={onChange}
                />
                <input
                    type="text"
                    name="login"
                    value={login}
                    placeholder="Login"
                    onChange={onChange}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={onChange}
                />
                <button type="button" onClick={resetState}>
                    Очистить
                </button>
                <button type="submit">Отправить</button>
            </form>
            <h3>{}</h3>
        </>
    );
}

export default App;
