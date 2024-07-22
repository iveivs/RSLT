import { useState, useRef } from "react";


const sendData = () => {
    console.log("formData");
};

const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [messageError, setmessageError] = useState('')

    const submitButtonRef = useRef(null);

    

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
                    Зарегестрироваться
                </button>
            </form>
        </>
    );
};
export default Form;
