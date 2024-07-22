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
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordlValid, setIsPasswordValid] = useState(false);
    const [isConfirmPassword, setIsConfirmPassword] = useState(false);
    const [onFocus, setOnFocus] = useState(false)

    const [messageError, setMessageError] = useState(null);
    const { email, password, confirmPassword } = getState();
    const [isAllImputValid, setIsAllImputValid] = useState(false)

    // ПРОВЕРКА ПОЧТЫ
    const validateEmail = ({ target }) => {
        updateState(target.name, target.value);
        let error = null;
        const EMAIL_REGEXP =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!EMAIL_REGEXP.test(target.value)) {
            error = "Неверный email";
            setMessageError(error);
            setIsEmailValid(false);
            return;
        }
        setIsEmailValid((prev) => prev = true);
    };
    // ПРОВЕРКА ПАРОЛЯ
    const validatePasword = ({ target }) => {
        updateState(target.name, target.value);
        let error = null;
        if (!/^[\w_]*$/.test(target.value)) {
            error = "Неверный пароль";
            setMessageError(error);
            setIsPasswordValid(false);
            return;
        }
        setIsPasswordValid(true);
    };

    const validateConfirmPassword = ({ target }) => {
        updateState(target.name, target.value);
        let error = null;
        let isPasswordSame = password === confirmPassword
        if (!isPasswordSame) {
            error = "Неверно введено подтверждение пароля";
            setMessageError(error);
            setIsConfirmPassword(false);
            return;
        }
        
        setIsConfirmPassword(true);
        if (isEmailValid && isPasswordlValid && isPasswordSame) {
            return true
        }
    };

    const onBlurEmail = (e) => {
        validateEmail(e);
    };

    const onBlurPassword = (e) => {
        setMessageError(null)
        validatePasword(e);
    };

    const onBlurConfirmPassword = (e) => {
        setMessageError(null)
        validateConfirmPassword(e);
        if(validateConfirmPassword(e)){
            setOnFocus()
            sendData(getState())
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
    };

    const onChange = ({ target }) => updateState(target.name, target.value);

    return (
        <>
            <h1>Form</h1>
            {messageError && <div className="error_label">{messageError}</div>}
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Электронная почта"
                    value={email}
                    onChange={onChange}
                    onBlur={onBlurEmail}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Введите пароль:"
                    value={password}
                    onChange={onChange}
                    onBlur={onBlurPassword}
                />
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Подтвердите пароль:"
                    value={confirmPassword}
                    onChange={onChange}
                    onBlur={onBlurConfirmPassword}
                />
                <button type="button" onClick={resetState}>
                    Очистить
                </button>
                <button type="submit" disabled={messageError !== null}>
                    Зарегестрироваться
                </button>
            </form>
        </>
    );
};
export default Form;
