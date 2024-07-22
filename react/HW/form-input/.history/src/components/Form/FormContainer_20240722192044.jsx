import { useState, useRef } from "react";
import { useStore } from "../../utils/utils";
import { sendData } from "../../utils/utils";
import FormLayout from "./FormLayout";

const Form = () => {
    const { getState, updateState, resetState } = useStore();
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [btnFocus, setBtnFocus] = useState(false)

    const [messageError, setMessageError] = useState(null);
    const { email, password, confirmPassword } = getState();

    const submitButtonRef = useRef(null);

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
    const validatePassword = ({ target }) => {
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
        let isPasswordSame = password === target.value;
        if (!isPasswordSame) {
            error = "Неверно введено подтверждение пароля";
            setMessageError(error);
            return;
        }
        if (isEmailValid && isPasswordValid && isPasswordSame) {
            submitButtonRef.current.focus()
            return true
        }
    };

    const onBlurEmail = (e) => {
        validateEmail(e);
    };

    const onBlurPassword = (e) => {
        setMessageError(null)
        validatePassword(e);
    };

    const onBlurConfirmPassword = (e) => {
        setMessageError(null)
        validateConfirmPassword(e);
        if(validateConfirmPassword(e)){
            setBtnFocus(true)
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        sendData(getState())
    };

    const onChange = ({ target }) => updateState(target.name, target.value);
    
    return (
        <>
            <FormLayout 
            messageError={messageError},
            onSubmit={onSubmit},
            email={email},
            onChange{},
            onBlurEmail,
            password,
            onBlurPassword,
            confirmPassword,
            onBlurConfirmPassword,
            resetState,
            submitButtonRef
            />
        </>
    );
};
export default Form;



