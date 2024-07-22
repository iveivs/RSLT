import { useState } from "react";

const initialState = {
    email: '',
    password: '',
    confirmPassword: '',
}

const useStore = () => {
    const [state, setState] = useState(initialState);
    return {
        getState: () => state,
        updateState: (fieldName, newValue) => {
            setState({ ...state, [fieldName]: newValue });
        },
        resetState: () => {
            setState(initialState);
        },
    }
}

const sendState = (formData) => {
    console.log('formData',formData);
}

const Form = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const {email, password, confirmPassword} = useStore(initialState)

    const onSubmit = (event) => {
        ev
    }

    return (
        <>
            <h1>Form</h1>
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
