import { useState } from "react";
import "./App.css";

const sendData = ()

function App() {
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
      event.preventDefault()
      sendData({email, login, password})
    }
    return (
        <>
            <h1>Forms</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Почта"
                    onChange={({target}) => setEmail(target.value)}
                />
                <input
                    type="text"
                    name="login"
                    value={login}
                    placeholder="Login"
                    onChange={({target}) => setLogin(target.value)}
                />
                <input
                    type="password"
                    name="password"
                    value={email}
                    placeholder="Password"
                    onChange={({target}) => setPassword(target.value)}
                />
                <button type="submit">Отправить</button>
            </form>
            <h3>{}</h3>
        </>
    );
}

export default App;
