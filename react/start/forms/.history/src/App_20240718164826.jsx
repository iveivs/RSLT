import { useState } from "react";
import "./App.css";
import Select from 'react-select'

function App() {
  const productOptions = [
    
  ]


  const [selectedProduct, setSelectedProduct] = useState('tv')
  const [selectedColors, setSelectedColors] = useState(['black', 'silver'])

  const onSelectedProductChange = ({target}) => setSelectedProduct(target.value)

  const onSelectedColorsChange = ({target}) => {
    const newSelectedColors = [...target.selectedOptions]
    .map((selectedTarget) => selectedTarget.value)
    setSelectedColors(newSelectedColors)
  }

  // console.log('selectedProduct', selectedProduct);
  // console.log('selectedColors', selectedColors);

    return (
        <>
            <h1>Forms</h1>
            <select value={selectedProduct} onChange={onSelectedProductChange} >
              <option value="tv">Телевизор</option>
              <option value="smartphone">Телефон</option>
              <option value="laptop">Ноутбук</option>
            </select>
            <select multiple={true} value={selectedColors} onChange={onSelectedColorsChange} >
              <option value="black">Чёрный</option>
              <option value="silver">Серебристый</option>
              <option value="white">Белый</option>
            </select>
        </>
    );
}

export default App;
