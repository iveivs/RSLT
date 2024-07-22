import { useState, useRef } from "react";
import { sendData } from "../../utils/utils";
import Form2Layout from "./FormLayout";

// Более простой вариант FORM 2
const FormContainer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [messageError, setMessageError] = useState(null);

    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isConfirmPasswordValid, setisConfirmPasswordValid] = useState(false);

    const [disabledFlag, setDisabledFlag] = useState(false);

    const submitButtonRef = useRef(null);
    const setFocus = () => submitButtonRef.current.focus();

    // EMAIL SECTION FORM 2
    const onEmailChange = ({ target }) => {
        setEmail(target.value);
    };

    const validateEmail = ({ target }) => {
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
    };

    const onBlurEmail = (event) => {
        setMessageError(null);
        validateEmail(event);
    };

    // PASSWORD SECTION FORM 2
    const onPasswordChange = ({ target }) => {
        setPassword(target.value);
    };

    const validatePassword = ({ target }) => {
        let error = null;
        // if (!/^[\w_]*$/.test(target.value)) {
        if (!/^[a-zA-Z0-9]{3,10}$/.test(target.value)) {
            error =
                "Неверный пароль, он должен быть не менее 3 и не более 10 символов, либо цифрыфыыы";
            setMessageError(error);
            setIsPasswordValid(false);
            return;
        }
        setIsPasswordValid(true);
    };

    const onBlurPassword = (event) => {
        setMessageError(null);
        validatePassword(event);
    };
    // // CONFIRMpassword SECTION FORM 2
    const onConfirmPasswordChange = ({ target }) => {
        setConfirmPassword(target.value);
        if (password === target.value && isEmailValid && isPasswordValid) {
            setDisabledFlag(true);
            setisConfirmPasswordValid(true);
            setFocus(); // не срабатывает
        }
    };

    const onBlurConfirmPassword = () => {
        setMessageError(null);
        setFocus(); // срабатывает, но понятное дело, что только при уходе с элемента,
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            sendData({ email, password });
        }
    };

    const resetInputs = () => {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <>
            <Form2Layout
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                messageError={messageError}
                isEmailValid
                isPasswordValid
                isConfirmPasswordValid
                disabledFlag
                submitButtonRef
            />
        </>
    );
};
export default FormContainer;
