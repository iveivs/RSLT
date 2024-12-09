import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { Main } from "./pages/main/Main";
import { getQuestions } from "./utils/utils";

function App() {
    const [data, setData] = useState();
    useEffect(() => {
        getQuestions().then((serverData) => setData(serverData));
    }, []);
    console.log("data", questions);
    return (
        <>
            <Main />
        </>
    );
}

export default App;
