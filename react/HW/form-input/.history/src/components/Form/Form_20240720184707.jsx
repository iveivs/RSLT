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
    console.log(formData);
};

const Form = () => {
    const { getState, updateState, resetState } = useStore();
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isPasswordlValid, setIsPasswordValid] = useState(false)

    const [messageError, setMessageError] = useState(null);
    const [isAllInputsValid, setIsAllInputsValid] = useState([])
    // ПРОВЕРКА ПОЧТЫ
    const validateEmail = ({ target }) => {
        updateState(target.name, target.value)
        let error = null;
        const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!EMAIL_REGEXP.test(target.value)) {
            error = "Неверный email";
            setMessageError(error)
            return
        } 
        setIsAllInputsValid([...isAllInputsValid, false])
        setIsEmailValid(true)
    };
// ПРОВЕРКА ПАРОЛЯ
    const validatePasword = ({ target }) => {
        updateState(target.name, target.value)
        let error = null;
        const EMAIL_REGEXP = /^[a-zA-Z]{3,20}$/
        if (!EMAIL_REGEXP.test(target.value)) {
            error = "Неверный пароль";
            return
        } 
        setIsAllInputsValid([...isAllInputsValid, false])
        setIsEmailValid(true)
    };

    const onBlurEmail = (e) => {
        console.log('BLUR TEST');
        validateEmail(e)
    };

    const onBlurPassword = (e) => {
        validatePasword(e)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        sendData(getState)
        console.log('ON SUBMIT TEST');
    };
    const { email, password, confirmPassword } = getState();
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
                />
                <button type="button" onClick={resetState}>
                    Очистить
                </button>
                <button type="submit" disabled={isAllInputsValid.every((el)=> el === true)}>Зарегестрироваться</button>
            </form>
        </>
    );
};
export default Form;
