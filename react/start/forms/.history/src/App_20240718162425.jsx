import { useState } from "react";
import "./App.css";

function App() {
  const [selectedproduct, setProduct] = useState('tv')
  const [colors, setColors] = useState(['black', 'silver'])
    return (
        <>
            <h1>Forms</h1>
            <select value name="" id="">
              <option value="tv">Телевизор</option>
              <option value="smartphone">Телефон</option>
              <option value="laptop">Ноутбук</option>
            </select>
        </>
    );
}

export default App;
