import { useState } from "react";
import "./App.css";

function App() {
    const [email, setEmail] = useState("");
    console.log(value);
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
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Password"
                    onChange={({target}) => setPassword(target.value)}
                />
            </form>
            <h3>{value}</h3>
        </>
    );
}

export default App;
