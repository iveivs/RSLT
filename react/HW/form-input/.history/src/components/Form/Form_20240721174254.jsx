// import { useState, useRef } from "react";
// import { useStore } from "../../utils/utils";
// import { sendData } from "../../utils/utils";


// const Form = () => {
//     const { getState, updateState, resetState } = useStore();
//     const [isEmailValid, setIsEmailValid] = useState(false);
//     const [isPasswordValid, setIsPasswordValid] = useState(false);
//     const [btnFocus, setBtnFocus] = useState(false)

//     const [messageError, setMessageError] = useState(null);
//     const { email, password, confirmPassword } = getState();

//     const submitButtonRef = useRef(null);

//     // ПРОВЕРКА ПОЧТЫ
//     const validateEmail = ({ target }) => {
//         updateState(target.name, target.value);
//         let error = null;
//         const EMAIL_REGEXP =
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if (!EMAIL_REGEXP.test(target.value)) {
//             error = "Неверный email";
//             setMessageError(error);
//             setIsEmailValid(false);
//             return;
//         }
//         setIsEmailValid((prev) => prev = true);
//     };
//     // ПРОВЕРКА ПАРОЛЯ
//     const validatePassword = ({ target }) => {
//         updateState(target.name, target.value);
//         let error = null;
//         if (!/^[\w_]*$/.test(target.value)) {
//             error = "Неверный пароль";
//             setMessageError(error);
//             setIsPasswordValid(false);
//             return;
//         }
//         setIsPasswordValid(true);
//     };

//     const validateConfirmPassword = ({ target }) => {
//         updateState(target.name, target.value);
//         let error = null;
//         let isPasswordSame = password === target.value;
//         if (!isPasswordSame) {
//             error = "Неверно введено подтверждение пароля";
//             setMessageError(error);
//             return;
//         }
//         if (isEmailValid && isPasswordValid && isPasswordSame) {
//             submitButtonRef.current.focus()
//             return true
//         }
//     };

//     const onBlurEmail = (e) => {
//         validateEmail(e);
//     };

//     const onBlurPassword = (e) => {
//         setMessageError(null)
//         validatePassword(e);
//     };

//     const onBlurConfirmPassword = (e) => {
//         setMessageError(null)
//         validateConfirmPassword(e);
//         if(validateConfirmPassword(e)){
//             setBtnFocus(true)
//         }
//     };

//     const onSubmit = (event) => {
//         event.preventDefault();
//         sendData(getState())
//     };

//     const onChange = ({ target }) => updateState(target.name, target.value);
    
//     return (
//         <>
//             <h1>Form</h1>
//             {messageError && <div className="error_label">{messageError}</div>}
//             <form onSubmit={onSubmit}>
//                 <input
//                     name="email"
//                     type="email"
//                     placeholder="Электронная почта"
//                     value={email}
//                     onChange={onChange}
//                     onBlur={onBlurEmail}
//                 />
//                 <input
//                     name="password"
//                     type="password"
//                     placeholder="Введите пароль:"
//                     value={password}
//                     onChange={onChange}
//                     onBlur={onBlurPassword}
//                 />
//                 <input
//                     name="confirmPassword"
//                     type="password"
//                     placeholder="Подтвердите пароль:"
//                     value={confirmPassword}
//                     onChange={onChange}
//                     onBlur={onBlurConfirmPassword}
//                 />
//                 <button type="button" onClick={resetState}>
//                     Очистить
//                 </button>
//                 <button ref={submitButtonRef} type="submit" disabled={messageError !== null}>
//                     Зарегестрироваться
//                 </button>
//             </form>
//         </>
//     );
// };
// export default Form;


import { useState, useRef } from "react";
import { useStore } from "../../utils/utils";
import { sendData } from "../../utils/utils";

const Form = () => {
    const { getState, updateState, resetState } = useStore();
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
    const [messageError, setMessageError] = useState(null);
    const { email, password, confirmPassword } = getState();

    const submitButtonRef = useRef(null);

    // ПРОВЕРКА ПОЧТЫ
    const validateEmail = (email) => {
        const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return EMAIL_REGEXP.test(email);
    };

    // ПРОВЕРКА ПАРОЛЯ
    const validatePassword = (password) => {
        return /^[\w_]*$/.test(password);
    };

    const validateConfirmPassword = (password, confirmPassword) => {
        return password === confirmPassword;
    };

    const validateForm = () => {
        const emailValid = validateEmail(email);
        const passwordValid = validatePassword(password);
        const confirmPasswordValid = validateConfirmPassword(password, confirmPassword);

        setIsEmailValid(emailValid);
        setIsPasswordValid(passwordValid);
        setIsConfirmPasswordValid(confirmPasswordValid);

        if (!emailValid) {
            setMessageError("Неверный email");
            return false;
        }

        if (!passwordValid) {
            setMessageError("Неверный пароль");
            return false;
        }

        if (!confirmPasswordValid) {
            setMessageError("Неверно введено подтверждение пароля");
            return false;
        }

        setMessageError(null);
        return true;
    };

    const onChange = ({ target }) => {
        updateState(target.name, target.value);
        // При каждом изменении не валидируем, это делаем только при выходе из поля
    };

    const onBlurEmail = (e) => {
        validateEmail(e.target.value);
    };

    const onBlurPassword = () => {
        validatePassword(password);
    };

    const onBlurConfirmPassword = (e) => {
        validateConfirmPassword(password, e.target.value);
        if (validateForm()) {
            submitButtonRef.current.focus();
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            sendData(getState());
        }
    };

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
                <button ref={submitButtonRef} type="submit" disabled={messageError !== null}>
                    Зарегистрироваться
                </button>
            </form>
        </>
    );
};

export default Form;
