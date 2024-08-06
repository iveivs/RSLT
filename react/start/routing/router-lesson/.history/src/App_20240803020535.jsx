import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

const fetchProductList = () => [
  {id: 1, name: 'Телевизор'},
  {id: 2, name: 'Смартфон'},
  {id: 3, name: 'Планшет'},
]

const MainPage = () => <div>Контент главной страницы</div>
const Catalog = () => (
  <div>
    <div>Контент каталога</div>
    <ul>
      {fetchProductList().map(({id, name}) => (
        <li key={id}><Link to="product">{name}</Link></li>
      ))}
    </ul>
  </div>
)
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
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/catalog">Каталог</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Контакты</Link>
                    </li>
                </ul>
            </div>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/catalog" element={<Catalog />}>
                
              </Route>
              
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </>
    );
}

export default App;
