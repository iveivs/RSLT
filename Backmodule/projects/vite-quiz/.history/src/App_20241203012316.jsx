import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { MainPage } from "./pages/main/MainPage";
import { getQuestions } from "./utils/utils";

function App() {
    const [data, setData] = useState();
    useEffect(() => {
        getQuestions().then((serverData) => setData(serverData));
    }, []);
    // console.log("data App", data);
    return (
        <>
            <Main />
        </>
    );
}

export default App;
