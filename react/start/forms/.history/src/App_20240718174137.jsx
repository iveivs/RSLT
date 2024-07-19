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
    } else if()
  }
    return (
        <>
            <h1>Forms</h1>
            <form>
              <input type="text" name='login' value={login} placeholder='Логин' onChange={({target}) => onLoginChange(target)}/>
            </form>
        </>
    );
}

export default App;
