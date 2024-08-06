import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
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
                        <Link href="/">Главная</Link>
                    </li>
                    <li>
                        <Link href="/catalog">Каталог</Link>
                    </li>
                    <li>
                        <Link href="/contacts">Контакты</Link>
                    </li>
                </ul>
            </div>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </>
    );
}

export default App;