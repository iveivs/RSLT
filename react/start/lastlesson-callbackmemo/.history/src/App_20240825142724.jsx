import { useState, useEffect } from "react";
import "./App.css";

function App({ message }) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(()=> {
      console.log();
    })
    return <div></div>;
}

export default App;