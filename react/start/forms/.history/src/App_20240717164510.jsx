import { useState } from "react";
import "./App.css";

function App() {
    const [mail, setMail] = useState("");
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
                    onChange={({target}) => setMail(target.value)}
                />
            </form>
            <h3>{value}</h3>
        </>
    );
}

export default App;
