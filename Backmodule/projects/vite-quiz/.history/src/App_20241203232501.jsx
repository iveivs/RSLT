import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { MainPage } from "./pages/main/MainPage";
import { getQuestions } from "./utils/utils";
import { Route, Routes } from 'react-router-dom'
import { Card } from "./components/card/Card";

function App() {
    const [data, setData] = useState();
    const questions = useSelector(selectQuestions); // Селектор для получения вопросов
    const isLoading = useSelector(selectIsLoading);
    

    useEffect(() => {
        getQuestions().then((serverData) => setData(serverData));
    }, []);
    // console.log("data App", data);
    return (
        <>
          <Routes>
            <Route path="/" element={<MainPage  />}  />
            <Route path="/quiz" element={<Card  />}  />
          </Routes>
        </>
    );
}

export default App;
