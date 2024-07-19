import { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState('')

  const onLoginChange = ({target}) => {
    setLogin(target.value)
    if(//.)
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
