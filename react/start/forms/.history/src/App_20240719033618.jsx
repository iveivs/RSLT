// npm i yup
import * as yup from "yup";
import { useState, useRef } from "react";
import "./App.css";



// YAP  useRef STEP ONE
function App() {
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState(null);

    

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
                <button ref={submitButtonRef} type="submit" disabled={loginError !== null}>
                    Отправить
                </button>
            </form>
        </>
    );
}

export default App;
