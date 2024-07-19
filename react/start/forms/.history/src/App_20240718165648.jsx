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
            < Select options={productOptions} defaultValue={productOptions[0]}/>
            < Select isMulti options={colorOptions} defaultValue={[colorOptions[0], colorOptions[1]]}/>
        </>
    );
}

export default App;
