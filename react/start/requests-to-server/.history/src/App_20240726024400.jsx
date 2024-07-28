import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
    const [counter, setCounter] = useState(0);


    useEffect(() => {
      console.log('clg 1', counter);
      return () => console.log("clg 2", counter);
    }, [counter])

    return (
        <>
            <h1>requests to server</h1>
            <button onClick={}>+ 1</button>
        </>
    );
}

export default App;
