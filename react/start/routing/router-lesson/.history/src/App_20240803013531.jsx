import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Router</h1>
            <div>
                <h3>Меню</h3>
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/catalog">Каталог</a>
                    </li>
                    <li>
                        <a href="/contacts">Контакты</a>
                    </li>
                </ul>
            </div>
            <Routes>
              <Route path="/" element={<MainPage / >} />
              <Route path="/catalog" element={< / >} />
              <Route path="/contacts" element={<MainPage / >} />
            </Routes>
        </>
    );
}

export default App;
