import { useState } from "react";


const Form = () => {
    const [password, setPassword] = useState("")
    return (
        <>
            <h1>Form</h1>
            <input type="email"  placeholder="Электронная почта"/>
            <input type="password" />
            <input type="password" />
        </>
    );
};
export default Form;
