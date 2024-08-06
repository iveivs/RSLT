import { useState } from "react";
import {
    Routes,
    Route,
    Link,
    Outlet,
    useParams,
    NavLink,
} from "react-router-dom";
import styles from "./App.module.css";

const fetchProductList = () => [
    { id: 1, name: "Телевизор" },
    { id: 2, name: "Смартфон" },
    { id: 3, name: "Планшет" },
];

const fetchProduct = (id) =>
    ({
        1: { id: 1, name: "Телевизор", price: 29990, amount: 10 },
        2: { id: 2, name: "Смартфон", price: 19990, amount: 20 },
        3: { id: 3, name: "Планшет", price: 21990, amount: 15 },
    }[id]);

const MainPage = () => <div>Контент главной страницы</div>;
const Catalog = () => (
    <div>
        <div>Контент каталога</div>
        <ul>
            {fetchProductList().map(({ id, name }) => (
                <li key={id}>
                    <NavLink to={`product/${id}`}>{name}</NavLink>
                </li>
            ))}
        </ul>
        <Outlet />
    </div>
);
const ProductNotFound = () => <div>This pruduct dosn't exist(404)</div>;

const Product = () => {
    const params = useParams();
    // const { name, price, amount} = fetchProduct(params.id) || {}
    const product = fetchProduct(params.id);

    if (!product) {
        return <ProductNotFound />;
    }

    const { name, price, amount } = product;

    return (
        <div>
            <h3>Товар - {name}</h3>
            <div>Цена: {price}</div>
            <div>На складе {amount}</div>
        </div>
    );
};
const Contacts = () => <div>Контент контактов</div>;
const NotFound = () => <div>Eror 404</div>;

const ExtendedLink = ({to, children}) => (
  <NavLink to="/">
                            {({ isActive }) =>
                                isActive ? (
                                    <>
                                        <span>Главная</span>
                                        <span>*</span>
                                    </>
                                ) : (
                                    "Главная"
                                )
                            }
                        </NavLink>
)

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.container}>
            <h1>Router</h1>
            <div>
                <h3>Меню</h3>
                <ul>
                    <li>
                        <NavLink to="/">
                            {({ isActive }) =>
                                isActive ? (
                                    <>
                                        <span>Главная</span>
                                        <span>*</span>
                                    </>
                                ) : (
                                    "Главная"
                                )
                            }
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/catalog">Каталог</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts">Контакты</NavLink>
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
        </div>
    );
}

export default App;
