import { useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";

const fetchProductList = () => [
  {id: 1, name: 'Телевизор'},
  {id: 2, name: 'Смартфон'},
  {id: 3, name: 'Планшет'},
]

const fetchProduct = () => ({
    1: {id: 1, name: 'Телевизор'},
  {id: 2, name: 'Смартфон'},
  {id: 3, name: 'Планшет'},
})

const MainPage = () => <div>Контент главной страницы</div>
const Catalog = () => (
  <div>
    <div>Контент каталога</div>
    <ul>
      {fetchProductList().map(({id, name}) => (
        <li key={id}><Link to={`product/${id}`}>{name}</Link></li>
      ))}
    </ul>
    <Outlet  />
  </div>
)

const Product = () => <div>Контент страницы товаров</div>
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
                <Route path="product/:id" element={<Product />} />
              </Route>
              
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </>
    );
}

export default App;
