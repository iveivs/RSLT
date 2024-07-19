import { useState } from "react";
import "./App.css";
import Select from "react-select";

function App() {
    const productOptions = [
        { value: "tv", label: "Телевизор" },
        { value: "smartphone", label: "Телефон" },
        { value: "laptop", label: "Ноутбук" },
    ];

    const colorOptions = [
      { value: "black", label: "Чёрный" },
      { value: "silver", label: "Серебристый" },
      { value: "white", label: "Белый" },
  ];

    const [selectedProduct, setSelectedProduct] = useState("tv");
    const [selectedColors, setSelectedColors] = useState(["black", "silver"]);

    const onSelectedProductChange = ({ target }) =>
        setSelectedProduct(target.value);

    const onSelectedColorsChange = ({ target }) => {
        const newSelectedColors = [...target.selectedOptions].map(
            (selectedTarget) => selectedTarget.value
        );
        setSelectedColors(newSelectedColors);
    };

    return (
        <>
            <h1>Forms</h1>
            <select value={selectedProduct} onChange={onSelectedProductChange}>
                <option value="tv">Телевизор</option>
                <option value="smartphone">Телефон</option>
                <option value="laptop">Ноутбук</option>
            </select>
            <select
                multiple={true}
                value={selectedColors}
                onChange={onSelectedColorsChange}
            >
                <option value="black">Чёрный</option>
                <option value="silver">Серебристый</option>
                <option value="white">Белый</option>
            </select>
        </>
    );
}

export default App;
