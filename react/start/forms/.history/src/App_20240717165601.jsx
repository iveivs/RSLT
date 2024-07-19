import { useState } from "react";
import "./App.css";

function App() {
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <h1>Forms</h1>
            <form>
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
                <button></button>
            </form>
            <h3>{}</h3>
        </>
    );
}

export default App;
