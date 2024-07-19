import { useState } from "react";
import "./App.css";

function App() {
  const [selectedProduct, setSelectedProduct] = useState('tv')
  const [selectedColors, setSelectedColors] = useState(['black', 'silver'])
    return (
        <>
            <h1>Forms</h1>
            <select value={selectedProduct} name="" id="">
              <option value="tv">Телевизор</option>
              <option value="smartphone">Телефон</option>
              <option value="laptop">Ноутбук</option>
            </select>
        </>
    );
}

export default App;
