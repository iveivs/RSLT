import { useState } from "react";

const initialState = {
    email: "",
    password: "",
    confirmPassword: "",
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
    console.log("formData", formData);
};

const Form = () => {
    const { getState, updateState, resetState } = useStore();

    // const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState(null);

    const onMailChange = ({ target }) => {
        // setLogin(target.value);
        updateState(target.name, target.value)
        let error = null;

        const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
        if (!EMAIL_REGEXP.test(target.value)) {
            error =
                "Неверный логин";
            setLoginError(error);
            console.log(error);
            console.log('loginError', loginError);
        } 
    };

    const onLoginBlur = () => {
        if (login.length < 3) {
            setLoginError("Неверный логин. Должно быть не менее 3 символов");
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        sendData(getState());
        resetState();
    };
    const { email, password, confirmPassword } = getState();
    // const onChange = ({ target }) => updateState(target.name, target.value);

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Электронная почта"
                    value={email}
                    onChange={onMailChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Введите пароль:"
                    value={password}
                    // onChange={onLoginChange}
                />
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Подтвердите пароль:"
                    value={confirmPassword}
                    // onChange={onLoginChange}
                />
                <button type="button" onClick={resetState}>
                    Очистить
                </button>
                <button type="submit">Отправить</button>
            </form>
        </>
    );
};
export default Form;
