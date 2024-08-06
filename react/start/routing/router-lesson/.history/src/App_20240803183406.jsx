import { useState } from "react";
import {
    Routes,
    Route,
    Outlet,
    useParams,
    NavLink,
    useMatch,
} from "react-router-dom";
import styles from "./App.module.css";

const dataBase = {
    productList: [
        { id: 1, name: "Телевизор" },
        { id: 2, name: "Смартфон" },
        { id: 3, name: "Планшет" },
    ],
    products: {
        1: { id: 1, name: "Телевизор", price: 29990, amount: 10 },
        2: { id: 2, name: "Смартфон", price: 19990, amount: 20 },
        3: { id: 3, name: "Планшет", price: 21990, amount: 15 },
    },
};

const fetchProductList = () => dataBase.productList

const fetchProduct = (id) => new P

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
    // const urlMatchData = useMatch('/catalog/product/:id')
    const urlMatchData = useMatch("/catalog/:type/:id");

    console.log("urlMatchData", urlMatchData);

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

// обёртка над NavLink
const ExtendedLink = ({ to, children }) => (
    <NavLink to={to}>
        {({ isActive }) =>
            isActive ? (
                <>
                    <span>{children}</span>
                    <span>*</span>
                    {/* ниже такой же спан со звёздочкой, только написанный через самозакрывающийся тэг */}
                    <span children="*" />
                </>
            ) : (
                children
            )
        }
    </NavLink>
);

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.container}>
            <h1>Router</h1>
            <div>
                <h3>Меню</h3>
                <ul>
                    <li>
                        <ExtendedLink to="/">Главная</ExtendedLink>
                    </li>
                    <li>
                        <ExtendedLink to="/catalog">Каталог</ExtendedLink>
                    </li>
                    <li>
                        <ExtendedLink to="/contacts">Контакты</ExtendedLink>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/catalog" element={<Catalog />}>
                    <Route path="product/:id" element={<Product />} />
                    <Route path="service/:id" element={<Product />} />
                </Route>

                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
