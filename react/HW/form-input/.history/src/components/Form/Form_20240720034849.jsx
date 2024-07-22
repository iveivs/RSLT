import { useState } from "react";

const initialState = {
    email: '',
    password: '',
    confirmPassword: '',
}

const useStore = () => {
    const [state, setState] = useState(initialState);
    return {
        
    }
}

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <>
            <h1>Form</h1>
            <form>
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
                    // onChange={onChange}
                />
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Подтвердите пароль:"
                    value={confirmPassword}
                />
            </form>
        </>
    );
};
export default Form;
