import { useState, useRef } from "react";


const sendData = () => {
    console.log("formData");
};
// Более простой вариант FORM 2
const Form2 = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [messageError, setMessageError] = useState(null)

    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)

    const [disabledFlag, setDisabledFlag] = useState(false)

    const submitButtonRef = useRef(null);

    // EMAIL SECTION FORM 2
    const onEmailChange = ({target}) => {
        setEmail(target.value)
    }
    const validateEmail = ({target}) => {
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
    const onBlurEmail = (event) => {
        validateEmail(event)
    }

    // PASSWORD SECTION FORM 2
    const onPasswordChange = ({target}) => {
        setPassword(target.value)
    }
    const validatePassword = ({target}) => {
        let error = null;
        if (!/^[\w_]*$/.test(target.value)) {
            error = "Неверный пароль";
            setMessageError(error);
            setIsPasswordValid(false);
            return;
        }
        setIsPasswordValid(true);
    }
    const onBlurPassword = (event) => {
        validatePassword(event)
    }
    // // CONFIRMpassword SECTION FORM 2
    const onConfirmPasswordChange = ({target}) => {
        setConfirmPassword(target.value)
        if(password === target.value && isEmailValid && isPasswordValid){
            console.log('IS VALID');
            setDisabledFlag(true)
            submitButtonRef.current.focus()
        }
    }

    return (
        <>
            <h1>Form 2</h1>
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
                <button ref={submitButtonRef} type="submit" disabled={!disabledFlag}>
                    Зарегестрироваться
                </button>
            </form>
        </>
    );
};
export default Form2;
