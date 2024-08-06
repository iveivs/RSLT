import { useState, useEffect } from "react";
import {
    Routes,
    Route,
    Outlet,
    useParams,
    NavLink,
    useNavigate,
    useRoutes,
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

const LOADING_TIMEOUT = 2000

const fetchProductList = () => dataBase.productList

const fetchProduct = (id) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(dataBase.products[id])
  }, 2500)
})

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
const ProductLoadError = () => <div>Ошибка загрузки товара, попробуйте ещё раз позже</div>

const Product = () => {
    const [product, setProduct] = useState(null)
    const params = useParams();
    const navigate = useNavigate()

    useEffect(() => {
      let isLoadingTimeout = false
      let isProductLoaded = false

      
      setTimeout(() => {
        isLoadingTimeout = true

        if(!isProductLoaded) {
          navigate('/product-load-error', { replace: true})
        }
        
      }, LOADING_TIMEOUT)
      fetchProduct(params.id).then((loadedProduct) => {
        isProductLoaded = true

        
        if(!isLoadingTimeout) {
          if(!loadedProduct) {
            navigate('/product-not-exist')
            return
          }
          setProduct(loadedProduct)
        }
      })
    }, [params.id, navigate])

    if (!product) {
        return null;
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
  const router = useRoutes([
    {path: "/", element: <}
  ])
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
                <Route path="/product-load-error" element={<ProductLoadError />} />
                <Route path="/product-not-exist" element={<ProductNotFound />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace={true} />} />
            </Routes>
        </div>
    );
}

export default App;
