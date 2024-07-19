import { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState('')
    return (
        <>
            <h1>Forms</h1>
            <form>
              <input type="text" name='login' value={login} placeholder='Логин' onChange={() => setLogin(login)}/>
            </form>
        </>
    );
}

export default App;
