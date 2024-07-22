import { useState } from "react";


const Form = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    return (
        <>
            <h1>Form</h1>
            <input type="email"  placeholder="Электронная почта" value={email}/>
            <input type="password" placeholder="Введите пароль:" value={password}/>
            <input type="password" placeholder="Подтвердите пароль:" value={confirmPassword}/>
        </>
    );
};
export default Form;
