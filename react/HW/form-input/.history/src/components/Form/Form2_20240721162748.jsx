import { useState, useRef } from "react";


const sendData = () => {
    console.log("formData");
};

const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [messageError, setMessageError] = useState(null)
    const [messageError, ] = useState(null)

    const submitButtonRef = useRef(null);

    const onEmailChange = ({target}) => {
        setEmail(target.value)
        console.log('email', email);
        const EMAIL_REGEXP =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!EMAIL_REGEXP.test(target.value)) {
            error = "Неверный email";
            setMessageError(error);
            setIsEmailValid(false);
            return;
        }
        setIsEmailValid((prev) => prev = true);
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
                    
                />
                {/* <input
                    name="password"
                    type="password"
                    placeholder="Введите пароль:"
                    value={password}
                    
                />
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Подтвердите пароль:"
                    value={confirmPassword}
                    
                /> */}
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
export default Form;
