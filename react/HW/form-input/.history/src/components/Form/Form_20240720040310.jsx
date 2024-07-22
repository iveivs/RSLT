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

const sendData = (formData) => {
    console.log('formData',formData);
}

const Form = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const { getState, updateState, resetState } = useStore();

    const onSubmit = (event) => {
        event.preventDefault()
        sendData(getState())
    }
    const { email, password, confirmPassword } = getState();
    const onChange = ({ target }) => updateState(target.name, target.value);

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Электронная почта"
                    value={email}
                    onChange={onChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Введите пароль:"
                    value={password}
                    onChange={onChange}
                />
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Подтвердите пароль:"
                    value={confirmPassword}
                    onChange={onChange}
                />
                <button type="submit">Отправить</button>
                <button type="submit"></button>
            </form>
        </>
    );
};
export default Form;
