import { useState } from "react";
import "./App.css";

// ВАЛИДАЦИЯ ИНПУТА
function App() {
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState(null);

    const onLoginChange = ({ target }) => {
        setLogin(target.value);
        let error = null;
        // /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(target.value)) {
            error =
                "Неверный логин. Допустимые символы - буквы, цифры и нижние подчёркивания";
            setLoginError(error);
        } else if (target.value.length > 10) {
            error = "Неверный логин. Должно быть не больше 10 символов";
            setLoginError(error);
        }
        // console.log("login", login);
    };

    const onLoginBlur = () => {
        if (login.length < 3) {
            setLoginError("Неверный логин. Должно быть не менее 3 символов");
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("login", login);
    };

    return (
        <>
            <h1>Forms</h1>
            {loginError && <div className="error_label">{loginError}</div>}
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="login"
                    value={login}
                    placeholder="Логин"
                    onChange={onLoginChange}
                    onBlur={onLoginBlur}
                />
                <button type="submit" disabled={loginError !== null}>
                    Отправить
                </button>
            </form>
        </>
    );
}

export default App;
