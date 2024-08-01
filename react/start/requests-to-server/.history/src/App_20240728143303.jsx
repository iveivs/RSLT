import { useState, useEffect } from "react";
import "./App.css";

// npm install -g json-server@0.17.4 // не обязательно устанавливать глобально(-g)
// json-server --watch db.json НЕ РАБОТАЕТ
//  npx json-server src/someData.json  РАБОТАЕТ

// npx json-server
// Опции:
//   -c, --config                   Path to config file
//                                               [по умолчанию: "json-server.json"]
//   -p, --port                     Set port                   [по умолчанию: 3000]
//   -H, --host                     Set host            [по умолчанию: "localhost"]
//   -w, --watch                    Watch file(s)                     [булевый тип]
//   -r, --routes                   Path to routes file
//   -m, --middlewares              Paths to middleware files              [массив]
//   -s, --static                   Set static files directory
//       --read-only, --ro          Allow only GET requests           [булевый тип]
//       --no-cors, --nc            Disable Cross-Origin Resource Sharing
//                                                                    [булевый тип]
//       --no-gzip, --ng            Disable GZIP Content-Encoding     [булевый тип]
//   -S, --snapshots                Set snapshots directory     [по умолчанию: "."]
//   -d, --delay                    Add delay to responses (ms)
//   -i, --id                       Set database id property (e.g. _id)
//                                                             [по умолчанию: "id"]
//       --foreignKeySuffix, --fks  Set foreign key suffix (e.g. _id as in post_id)
//                                                             [по умолчанию: "Id"]
//   -q, --quiet                    Suppress log messages from output [булевый тип]
//   -h, --help                     Показать помощь                   [булевый тип]
//   -v, --version                  Показать номер версии             [булевый тип]
Примеры:
  json-server db.json
  json-server file.js
  json-server http://example.com/db.json

https://github.com/typicode/json-server
function App() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsloading] = useState(false)
    // имитируем мок бэкенда
    useEffect(() => {
      // спинер для загрузки
      setIsloading(true)
        // создаём промис
        fetch('http://localhost:3000/products') // этот адрес называется "ручка"
            .then((loadedData) => loadedData.json()) // парсим джейсон
            .then((loadedProducts) => {
                // засовываем полученные данные в стейт
                setProducts(loadedProducts);
            })
            .finally(()=> setIsloading(false))
    }, []);

    return (
        <>
            <h1>requests to server</h1>
            {isLoading ? <div className="loader"></div> : products.map(({ id, name, price }) => (
                <div key={id}>
                    {name} - {price} rub
                </div>
            ))}
        </>
    );
}

export default App;
