import { useState, useEffect } from "react";
import "./App.css";

function App({ message }) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(()=> {
      console.log(message);

      const updateScreenWidth =() => setScreenWidth(window.innerWidth)

      window.addEventListener('resize', updateScreenWidth)
      rem
    })
    return <div></div>;
}

export default App;
