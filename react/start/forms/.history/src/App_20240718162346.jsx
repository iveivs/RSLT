import { useState } from "react";
import "./App.css";

function App() {
  const [product, setProduct] = useState('tv')
  const [colors, setColors] = useState(['black', 'silver'])
    return (
        <>
            <h1>Forms</h1>
            <select name="" id="">
              <option value="tv">Телевизор</option>
              <option value="s">Телефон</option>
              <option value="tv">Ноутбук</option>
            </select>
        </>
    );
}

export default App;