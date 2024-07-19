// AppStepOne
import { useState } from "react";
import "./App.css";

const sendData = (formData) => {
    console.log("send:", formData);
};

function App() {
    const [formData, setFormData] = useState({
        email: "",
        login: "",
        password: "",
    });
    // Более длинный вариант
    // const [email, setEmail] = useState("");
    // const [login, setLogin] = useState("");
    // const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        sendData(formData);
    };
    return (
        <>
            <h1>Forms</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Почта"
                    onChange={({ target }) =>
                        setFormData({
                            ...formData,
                            email: target.value,
                        })
                    }
                />
                <input
                    type="text"
                    name="login"
                    value={formData.login}
                    placeholder="Login"
                    onChange={({ target }) =>
                        setFormData({
                            ...formData,
                            login: target.value,
                        })
                    }
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    onChange={({ target }) =>
                        setFormData({
                            ...formData,
                            password: target.value,
                        })
                    }
                />
                <button type="submit">Отправить</button>
            </form>
            <h3>{}</h3>
        </>
    );
}

export default App;
