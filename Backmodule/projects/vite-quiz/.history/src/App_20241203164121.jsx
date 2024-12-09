import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { MainPage } from "./pages/main/MainPage";
import { getQuestions } from "./utils/utils";
import { Route, Routes } from 'react-router-dom'

function App() {
    const [data, setData] = useState();
    useEffect(() => {
        getQuestions().then((serverData) => setData(serverData));
    }, []);
    // console.log("data App", data);
    return (
        <>
          <Routes>
            <Route
          </Routes>
            <MainPage />
        </>
    );
}

export default App;
