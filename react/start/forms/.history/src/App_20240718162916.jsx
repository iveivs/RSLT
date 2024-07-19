import { useState } from "react";
import "./App.css";

function App() {
  const [selectedProduct, setSelectedProduct] = useState('tv')
  const [selectedColors, setSelectedColors] = useState(['black', 'silver'])

  const onSelectedProductChange = ({target}) => selectedProduct(target.value)
  
  const onSelectedProductChange = ({target}) => selectedProduct(target.value)

    return (
        <>
            <h1>Forms</h1>
            <select value={selectedProduct} onChange={onSelectedProductChange} >
              <option value="tv">Телевизор</option>
              <option value="smartphone">Телефон</option>
              <option value="laptop">Ноутбук</option>
            </select>
            <select value={selectedProduct} onChange={onSelectedProductChange} >
              <option value="black">Телевизор</option>
              <option value="silver">Телефон</option>
              <option value="white">Ноутбук</option>
            </select>
        </>
    );
}

export default App;
