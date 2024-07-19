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

    return (
        <>
            <h1>Forms</h1>
            <
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
