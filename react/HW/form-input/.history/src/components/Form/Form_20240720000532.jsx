import { useState } from "react";


const Form = () => {
    const [password, setPassword] = useState("")
    const [confirmpassword, setPassword] = useState("")
    return (
        <>
            <h1>Form</h1>
            <input type="email"  placeholder="Электронная почта"/>
            <input type="password" placeholder="Введите пароль:"/>
            <input type="password" placeholder="Подтвердите пароль:"/>
        </>
    );
};
export default Form;
