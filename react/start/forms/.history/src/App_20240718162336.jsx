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
              <option value="tv">Телефон</option>
              <option value="tv">Телевизор</option>
            </select>
        </>
    );
}

export default App;
