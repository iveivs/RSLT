// npm i yup
import * as yup from 'yup'
import { useState } from "react";
import "./App.css";

const loginChangeScheme = yup
  .string()
  .matches(
    /^[\w_]*$/, 
    "Неверный логин. Допустимые символы - буквы, цифры и нижние подчёркивания"
  )
  .max(10, "Неверный логин. Должно быть не больше 10 символов")

  const loginBlureScheme = yup.string().min(3, "Неверный логин. Должно быть не менее 3 символов")

  const validateAndGetErrorMessage = (scheme, value) => {
    let errorMessage = null
    try{
      scheme.valdateSync(value)
    } catch({errors}) {
      errorMessage = errors[0]
    }
    return errorMessage
  }

// YAP
function App() {
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState(null);

    const onLoginChange = ({ target }) => {
        setLogin(target.value);
        
        const error = validateAndGetErrorMessage(loginChangeScheme, target.value)
        
        setLoginError(error)
    };

    const onLoginBlur = () => {
      
    }

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
