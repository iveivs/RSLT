import { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState('')
  const [loginError, setLoginError] = useState(null)

  const onLoginChange = ({target}) => {
    setLogin(target.value)
    if(!/^[\w_]*$/.test(target.value)){
      let error = null
      error = 'Неверный логин. Допустимые символы - буквы, цифры и нижние подчёркивания'
      setLoginError(error)
    } else if(target.value.length > 10) {
      error = 'Неверный логин. Должно быть не больше 10 символов'
    }
  }

  const onSubmit = (event) => {
    event.preventDefault( )
    console.log('login');
  }
    return (
        <>
            <h1>Forms</h1>
            <form onSubmit={onSubmit}>
              <input type="text" name='login' value={login} placeholder='Логин' onChange={({target}) => onLoginChange(target)}/>
            </form>
            <button type="submit" disabled={loginError !== null}>Отправить</button>
        </>
    );
}

export default App;
