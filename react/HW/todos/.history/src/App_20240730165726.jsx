import { useState, useEffect } from 'react';
import './App.css';
import { TodosList } from './components/todosList/TodosList';
import { JSON_SERVER_LINK } from './constants/link-json-server';
import { useRequestGetTodos } from './hooks/use-request-get-todos';
function App() {
	// состояние обновления данных на странице
    const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
	// ф-я для обновления данных на странице
    const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

	const {isLoading, products} = useRequestGetProduct(refreshProductsFlag)
	// useEffect(() => {

	// },[])
	return (
		<>
			<h1>Todos</h1>
			{/* < TodosList /> */}
			{isLoading ? (
                <div className="loader"></div>
            ) : (
                products.map(({ id, name}) => (
                    <div key={id}>
                        {name} - {price} rub
                    </div>
                ))
            )}
		</>
	);
}

export default App;
