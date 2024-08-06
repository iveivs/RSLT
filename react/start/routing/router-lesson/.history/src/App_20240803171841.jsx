import { useState } from "react";
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import "./App.css";

const fetchProductList = () => [
  {id: 1, name: 'Телевизор'},
  {id: 2, name: 'Смартфон'},
  {id: 3, name: 'Планшет'},
]

const fetchProduct = (id) => ({
    1: {id: 1, name: 'Телевизор', price: 29990, amount: 10},
    2: {id: 2, name: 'Смартфон', price: 19990, amount: 20},
    3: {id: 3, name: 'Планшет', price: 21990, amount: 15},
})[id]

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
const ProductNotFound = () => <div>This pruduct dosn't exist(404)</div>

const Product = () => {
  const params = useParams()
  // const { name, price, amount} = fetchProduct(params.id) || {}
  const { name, price, amount} = fetchProduct(params.id) || {}\


  return (
    <div>
      <h3>Товар - {name}</h3>
      <div>Цена: {price}</div>
      <div>На складе {amount}</div>
    </div>
  )
}
const Contacts = () => <div>Контент контактов</div>
const NotFound = () => <div>Eror 404</div>

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
              <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
