import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const MainPage = () => <div>Контент главной страницы</div>
const Catalog = () => <div>Контент каталога</div>
const Contacts = () => <div>Контент контактов</div>

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
              <Route path="/" element={<MainPage />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/contacts" element={<Contacts / >} />
            </Routes>
        </>
    );
}

export default App;
