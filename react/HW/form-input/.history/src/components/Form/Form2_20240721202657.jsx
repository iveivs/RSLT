import { useState, useRef } from "react";


const sendData = () => {
    console.log("formData");
};
// Более простой вариант
const Form2 = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [messageError, setMessageError] = useState(null)

    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)

    const submitButtonRef = useRef(null);

    const onEmailChange = ({target}) => {
        setEmail(target.value)
    }
    
    const onBlurEmail = ({target}) => {
        validateEmail()
    }

    const onPasswordChange = ({target}) => {
        setPassword(target.value)
        // console.log('target.value', target.value);
    }
    const validateEmail = () => {
        let error = null;
        const EMAIL_REGEXP =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!EMAIL_REGEXP.test(target.value)) {
            error = "Неверный email";
            setMessageError(error);
            setIsEmailValid(false);
            return;
        }
        setIsEmailValid(true);
    }
    const onBlurPassword = ({target}) => {
        
    }

    const onConfirmPasswordChange = ({target}) => {
        setConfirmPassword(target.value)
        console.log('target.value', target.value);
    }

    return (
        <>
            <h1>Form</h1>
            {messageError && <div className="error_label">{messageError}</div>}
            <form >
                <input
                    name="email"
                    type="email"
                    placeholder="Электронная почта"
                    value={email}
                    onChange={onEmailChange}
                    onBlur={onBlurEmail}
                    
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Введите пароль:"
                    value={password}
                    onChange={onPasswordChange}
                    onBlur={onBlurPassword}
                />
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Подтвердите пароль:"
                    value={confirmPassword}
                    onChange={onConfirmPasswordChange}
                    
                />
                {/* {<p>{email}</p>} */}
                <button type="button">
                    Очистить
                </button>
                <button ref={submitButtonRef} type="submit" disabled={messageError !== null}>
                    Зарегестрироваться
                </button>
            </form>
        </>
    );
};
export default Form2;
